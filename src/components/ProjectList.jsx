import projectData from "../data/projects";

function ProjectList() {
  return (
      <>
      <h1>Project</h1>
      <ul>
        {projectData.map(project =>
          <li key={project.id}>
            {project.title}
          </li>
          )}
      </ul>
      </>
  )
}

export default ProjectList;