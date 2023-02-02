import projectData from "../data/projects";
import ProjectPreview from "./ProjectPreview";

function ProjectsList(props) {
  return (
    <>
    <h1>Project</h1>
    <ul>
      <ProjectPreview projectData={projectData} />
    </ul>
    </>
  )
}

export default ProjectsList;