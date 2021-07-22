const Project = ({ project }) => {
    return (
        <div>
            <h3>{project.name}</h3>
            <p>{project.text}</p>
            <h4>{project.date}</h4>
        </div>
    )
};

export default Project;