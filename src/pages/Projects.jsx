import ProjectsList from "../components/ProjectsList";
import projectData from "../data/projects";

function Project() {
  return (
      <>
      <div>
      <ul>
      <ProjectsList projectData={projectData} />
      </ul>
      </div>
      </>
  )
}

export default Project;