import projectData from "../data/projects"
import hyphenateWords from "./hyphenateWords"

function findProjects(string) {
  const project = projectData.filter(project => {
    return hyphenateWords(project.title) === string
  })
  return project
}

export default findProjects