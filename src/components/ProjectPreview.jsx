// import projects from '../data/projects'

function ProjectPreview(props) {
  return (
  //   <>
  //   <section>
  //     {projects.map((project, id) => 
  //       <li key={id}> 
  //         {project.title}
  //       <br />
  //         {project.image}
  //       </li>
  //     )}
  //   </section>
	// 			<button>
  //           Learn more
  //       </button>
  // </>
  <div>
    <img 
        src={props.image} 
        alt={props.title}
    />

    <section>
        <h3>
            {props.title}
        </h3>
				<button>
            Learn more
        </button>
    </section>
</div>
  )
}

export default ProjectPreview