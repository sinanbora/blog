import { Link } from 'react-router-dom'
import './BlogList.css'

import Avatar from './Avatar'

export default function BlogList({ blogs }) {
  return (
    <div className='project-list'>
        {blogs.length === 0 && <p className=''>Henüz hiç yazı yok.</p>}
        {blogs.map(blog => (
            <Link to={`/projects/${blog.id}`} key={blog.id}>
                <h4>{blog.name}</h4>
                <p>Tarih: {blog.dueDate.toDate().toLocaleDateString("tr-TR")}</p>
                <div className='assigned-to'>
                    <ul>
                        {blog.assignedUsersList.map(user =>(
                            <li key={user.photoURL}>
                                <Avatar src={user.photoURL}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </Link>
        ))}
    </div>
  )
}
