import './Dashboard.css'

import { useCollection } from '../../hooks/useCollection'
import BlogList from '../../components/BlogList'

export default function Dashboard() {

  const {documents, error} = useCollection('blogs')

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <div className='error'>{error}</div>}
      {documents && <BlogList blogs={documents}/>}
            
    </div>
    
  )
}
