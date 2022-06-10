import { useState } from 'react'
import './Login.css'
import { useLogin } from '../../hooks/useLogin'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className='auth-form'>
      <h2>Giriş</h2>
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
      {!isPending && <button className='btn'>Giriş Yap</button>}
      {isPending && <button className='btn' disabled>Giriş yapılıyor...</button>}
      {error && <div className='error'>{error}</div>}

  </form>
  )
}
