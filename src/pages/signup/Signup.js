import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
//styles & images
import './Signup.css'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [thumbnail, setThumbnail] = useState(null)
    const [thumbnailError, setThumbnailError] = useState(null)
    const { signup, error, isPending } = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, password, displayName, thumbnail)
    }
    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0];
        console.log(selected)

        if (!selected) {
            setThumbnailError('Lütfen dosya seçiniz')
            return
        }
        if (!selected.type.includes('image')) {
            setThumbnailError('Sadece resim seçebilirsiniz')
            return
        }
        if (selected.size > 100000) {
            setThumbnailError('Resim boyutu 100kb dan az olmalı seçilen resmin boyutu: ' + selected.size)
            return
        }

        setThumbnailError(null)
        setThumbnail(selected)
        console.log('thumbnail güncellendi')
    }

    return (
        <form onSubmit={handleSubmit} className='auth-form'>
            <h2>Kaydol</h2>
            <label>
                <span>email:</span>
                <input
                    type="email"
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                ></input>
            </label>
            <label>
                <span>şifre:</span>
                <input
                    type="password"
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                ></input>
            </label>
            <label>
                <span>kullanıcı adı:</span>
                <input
                    type="text"
                    required
                    onChange={(e)=>setDisplayName(e.target.value)}
                    value={displayName}
                ></input>
            </label>
            <label>
                <span>profil resmi:</span>
                <input
                    type="file"
                    required
                    onChange={handleFileChange}
                ></input>
                {thumbnailError && <div className='error'>{thumbnailError}</div>}
            </label>
            {!isPending && <button className='btn'>Kaydol</button>}
            {isPending && <button className='btn' disabled>Yükleniyor...</button>}
            {error && <div className='error'>{error}</div>}

        </form>
    )
}
