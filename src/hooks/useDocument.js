import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) =>{
    const [ document, setDocument] = useState('')
    const [ error, setError] = useState('')

    //real time data for document
    useEffect(() => {
        const ref = projectFirestore.collection(collection).doc(id)

        const unsubscripe = ref.onSnapshot((snapshot)=>{

            if (snapshot.data()) {
                setDocument({...snapshot.data(), id:snapshot.id })
                setError(null)
            }
            else {
                setError('Yazı bulunamadı')
            }
            
        }, (err)=>{
            console.log(err.message)
            setError('dokümanlar çekilemedi')
        })

        return () => unsubscripe()

    }, [collection,id])
    
    return { document, error }
}