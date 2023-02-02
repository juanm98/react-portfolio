import { useParams } from "react-router-dom"
import findProject from "../utilities/findProject.js"

function ProjectDetails() {
  const {projectDetails} = useParams()
  const projectData = findProject(projectDetails)
  return (
    <>
    <h1>{projectData.title}</h1>
    <img src={projectData.image} alt={projectData.title}/>
    <p>{projectData.description}</p>
    <a href={projectData.repositoryLink}><button>GitHub Repository</button></a>
    <a href={projectData.deploymentLink}><button>Test App</button></a>
    </>
  )
}

export default ProjectDetails