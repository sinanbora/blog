import { useEffect, useState } from 'react'
import Select from 'react-select';
import { timestamp } from '../../firebase/config';
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore';

import './Create.css'
import { useHistory } from 'react-router-dom';

const categories = [
	{ value: "hayat", label: "Hayat" },
	{ value: "gezi", label: "Gezi" },
	{ value: "eğlence", label: "Eğlence" },
	{ value: "can", label: "Can" },
]

export default function Create() {

	const { documents } = useCollection('users');
	const [ users, setUsers ] = useState([]); 
	const { user } = useAuthContext();
	const { addDocument, response } = useFirestore('blogs');
	const history = useHistory();

	const [name, setName ] = useState(''); 
	const [details, setDetails] = useState('');
	const [dueDate, setDueDate ] = useState(''); 
	const [category, setCategory ] = useState(''); 
	const [assignedUsers, setAssignedUsers ] = useState([]);
	const [formError, setFormError] = useState('')

	

	useEffect(()=>{
		if(documents){
			const options = documents.map((user)=>{
				return { value:user, label: user.displayName }
			})
			setUsers(options)
		}
	},[documents])

	const handleSubmit = async (e) => {
		e.preventDefault()

		setFormError(null)
		if(!category){
			setFormError("Lüften kategori seçiniz!")
			return
		}
		if (assignedUsers.length < 1) {
			setFormError("Lütfen en az 1 kullanıcı seçiniz!")
			return
		}

		const createdBy = {
			displayName:user.displayName,
			photoURL:user.photoURL,
			id:user.uid
		}

		const assignedUsersList = assignedUsers.map((u)=>{
			return {
				displayName:u.value.displayName,
				photoURL:u.value.photoURL,
				id:u.value.id
			}
		})
		const project = {
			name,
			details,
			dueDate: timestamp.fromDate(new Date(dueDate)),
			category:category.value,
			comments: [],
			createdBy,
			assignedUsersList
		}

		await addDocument(project)

		if (!response.error) {
			history.push('/')
		}
	}

	return (
		<div className='create-form'>
			<h2 className='page-title'>Yeni blog oluştur</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Blog Adı:</span>
					<input 
						required
						type="text"
						onChange={(e)=>setName(e.target.value)}
						value={name}
					/>
				</label>
				<label>
					<span>Blog Detay:</span>
					<textarea 
						required
						onChange={(e) => setDetails(e.target.value)}
						value={details} 
					></textarea>
				</label>
				<label>
					<span>Olay Tarihi:</span>
					<input 
						required
						type="date"
						onChange={(e)=>setDueDate(e.target.value)}
						value={dueDate}
					/>
				</label>
				<label>
					<span>Blog Kategori:</span>
					<Select 
						onChange={(option) => setCategory(option)}
						options={categories}
					/>
				</label>
				<label>
					<span>Kişiler:</span>
					<Select
						options={users}
						onChange={(option) => setAssignedUsers(option)}
						isMulti
					/>
				</label>
				{formError && <p className='error'>{formError}</p>}
				<button className='btn'>Blog Ekle</button>
			</form>
		</div>
	)
}
