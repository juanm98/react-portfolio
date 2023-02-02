import projects from '../data/projects'

function ProjectPreview() {
  return (
    <>
    <section>
      {projects.map((project, id) => 
        <li key={id}> 
          {project.title}
        <br />
          {project.image}
        </li>
      )}
    </section>
  </>
  )
}

export default ProjectPreview