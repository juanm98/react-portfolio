import ProjectsList from "../components/ProjectsList";
import projectData from "../data/projects";

function Project() {
  return (
      <>
      <h1>Project</h1>
      <ul>
        {projectData.map(project =>
          <li key={project.title}>
            <ProjectsList project={project}/>
          </li>
          )}
      </ul>
      </>
  )
}

export default Project;