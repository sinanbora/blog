import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
//styles & images
import './Navbar.css'
import Temple from '../assets/temple.svg'

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className='navbar'>
        <ul>
            {user && (
              <>
                <li className='logo'>
                  <img src={Temple} alt="blog logo"></img>
                  <span>The Blog</span>
                </li>
              </>
            )}
            
            {!user &&(
              <>
                <li><Link to="/login">Giriş</Link></li>
                <li><Link to="/signup">Kaydol</Link></li>
              </>
            )}

            {user &&(
              <>
                <li>
                  {!isPending && <button className='btn' onClick={logout}>Çıkış</button>}
                  {isPending && <button className='btn' onClick={logout} disabled>Çıkış yapılıyor...</button>}
                </li>
              </>
            )}
            
        </ul>
    </div>
  )
}
