import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'
import './Project.css'
import ProjectComments from './ProjectComment';
import ProjectSummary from './ProjectSummary';

export default function Project() {

  const { id } = useParams();
  const { error, document} = useDocument('blogs', id)

  if (error) {
    return <div className='error'>{error}</div>
  }
  if (!document){
    return <div className='loading'>Yükleniyor...</div>
  }

  return (

    <div className='project-details'>
      <ProjectSummary project={document}/>
      <ProjectComments project={document}/>
    </div>
  )
}
