import ProjectsList from "../components/ProjectsList";
import projectData from "../data/projects";

function Project() {
  return (
      <>
      <h1>Projects</h1>
      <div>
        <ProjectsList projects={projectData} />
      </div>
      </>
  )
}

export default Project;