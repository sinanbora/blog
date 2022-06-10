import { useEffect, useState } from 'react'
import Select from 'react-select';
import { useCollection } from '../../hooks/useCollection'
import { Editor } from "@tinymce/tinymce-react";

import './Create.css'

const categories = [
	{ value: "hayat", label: "Hayat" },
	{ value: "gezi", label: "Gezi" },
	{ value: "eğlence", label: "Eğlence" },
	{ value: "can", label: "Can" },
]

export default function Create() {
	const [name, setName ] = useState(''); 
	const [details, setDetails] = useState('');
	const [dueDate, setDueDate ] = useState(''); 
	const [category, setCategory ] = useState(''); 
	const [assignedUsers, setAssignedUsers ] = useState([]);
	const [formError, setFormError] = useState('')

	const { documents } = useCollection('users');
	const [ users, setUsers ] = useState([]); 

	useEffect(()=>{
		if(documents){
			const options = documents.map((user)=>{
				return { value:user, label: user.displayName }
			})
			setUsers(options)
		}
	},[documents])

	const handleSubmit = (e) => {
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
		console.log(name,details,dueDate,category.value,assignedUsers)
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
