import './Dashboard.css'

import { useCollection } from '../../hooks/useCollection'
import { useState } from "react"
import { useAuthContext } from '../../hooks/useAuthContext'
import BlogList from '../../components/BlogList'
import ProjectFilter from './ProjectFilter'

export default function Dashboard() {

  const {documents, error} = useCollection('blogs')
  const { user } = useAuthContext();
  const [currentFilter, setCurrentFilter] = useState('all')

  const changeFilter = (newFilter) =>{
      setCurrentFilter(newFilter)
  }
  const blogs = documents ? documents.filter((document) => {
    //'Hepsi','benim yazılarım','hayat','gezi','eğlence','can','iş'
    switch(currentFilter) {
      case 'Hepsi':
        return true
      case 'benim yazılarım':
        let assignedToMe = false;
        document.assignedUsersList.forEach((u) => {
            if (user.uid===u.id) {
              assignedToMe=true;              
            }
        })
          return assignedToMe;
      case 'hayat':
      case 'gezi':
      case 'eğlence':
      case 'can':
      case 'iş':
        console.log(document.category, currentFilter)
        return document.category === currentFilter
      default:
        return true;
    }
  }) : null

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <div className='error'>{error}</div>}
      {documents && (
        <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter}/>
      )}
      {blogs && <BlogList blogs={blogs}/>}
            
    </div>
    
  )
}
