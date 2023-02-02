import { Link } from "react-router-dom"
import hyphenateWords from "../utilities/hyphenateWords"

function ProjectPreview(props) {
  return (
  <div>
    <img 
        src={props.image} 
        alt={props.title}
    />

    <section>
        <Link to={hyphenateWords(props.title)}>
				<button>
            Learn more
        </button>
        </Link>
    </section>
</div>
  )
}

export default ProjectPreview