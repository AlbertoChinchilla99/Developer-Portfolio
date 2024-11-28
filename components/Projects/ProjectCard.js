const ProjectCard = ({ preview, title, description, link }) => {
  return `
    <li>
      <img src="${preview}" alt="${title}" />
      <h3>${title}</h3>
      <p>${description}</p>
      <a href="${link}">Know more...</a>
    </li>
  `
}

export default ProjectCard
