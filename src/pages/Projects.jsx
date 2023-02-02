import ProjectList from "../components/ProjectList";
import projectData from "../data/projects";

function Project() {
  return (
      <>
      <h1>Project</h1>
      <ul>
        <ProjectList projects={projectData}/>
      </ul>
      </>
  )
}

export default Project;