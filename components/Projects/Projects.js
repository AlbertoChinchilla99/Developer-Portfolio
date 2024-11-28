import data from '../../Data/Data.js'
import './Projects.css'
import ProjectCard from './ProjectCard' // Importamos el componente ProjectCard

const template = () => {
  return `
    <section class="projects" id="projects">
      <h2>Recent Projects</h2>
      <ul>
        ${data.projects.map((project) => ProjectCard(project)).join('')}
      </ul>
    </section>
  `
}

const Projects = () => {
  return template()
}

export default Projects
