import ProjectsList from "../components/ProjectsList";
import projectData from "../data/projects";

function Project() {
  return (
      <>
      <div>
        <ProjectsList projects={projectData} />
      </div>
      </>
  )
}

export default Project;