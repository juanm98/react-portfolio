import projectData from "../data/projects"

function ProjectDetails() {
  return (
    <>
    <h1>{projectData[0].title}</h1>
    <p>{projectData[0].description}</p>
    <img src={projectData[0].image} alt=""/>
    <button>{projectData[0].repositoryLink}</button>
    <button>{projectData[0].deployementLink}</button>
    </>
  )
}

export default ProjectDetails