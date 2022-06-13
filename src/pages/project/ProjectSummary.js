import Avatar from "../../components/Avatar";


export default function ProjectSummary({ project }) {
  return (
    <div className="project-summary">
        <h2 className="project-title">{project.name}</h2>
        <p className="due-date">
            Tarih: {project.dueDate.toDate().toLocaleDateString("tr-TR")}
        </p>
        <p className="details">
            {project.details}
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
  )
}
