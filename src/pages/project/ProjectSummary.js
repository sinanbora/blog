import Avatar from "../../components/Avatar";
import parse from 'html-react-parser';
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useHistory } from "react-router-dom";

export default function ProjectSummary({ project }) {

    const { deleteDocument } = useFirestore('blogs')
    const { user } = useAuthContext();
    const history = useHistory();

    const handleClick = (e) =>{
        deleteDocument(project.id)
        history.push("/")
    }

    return (
        <div>
            <div className="project-summary">
                <h2 className="project-title">{project.name}</h2>
                <p>Yazar: {project.createdBy.displayName}</p>
                <p className="due-date">
                    Tarih: {project.dueDate.toDate().toLocaleDateString("tr-TR")}
                </p>
                <p className="details">
                    <div className="ck-content">
                        {parse(project.details)}
                    </div>
                </p>
                <h4>Kişiler :</h4>
                <div className="assigned-users">
                    {project.assignedUsersList.map(user =>(
                        <div key={user.id}>
                            <Avatar src={user.photoURL}/>
                        </div>
                    ))}
                </div>
                
            </div>
            {user.uid === project.createdBy.id && (
                <button className="btn" onClick={handleClick}>Bloğu Sil</button>
            )}
        </div>
    )
}
