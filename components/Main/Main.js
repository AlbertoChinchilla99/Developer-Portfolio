/*import './Main.css'
import { AboutMe } from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'

let show = 'Experience'

const template = () => {
  return `
  <main>
    ${AboutMe()}
    <div class="change-container">
      <button id="change">Show ${show}</button>
    </div>
    <div id="content">
      ${Education()}
    </div>
    ${Projects()}
  </main>
  `
}

export const Main = () => {
  return template()
}

export const addMainListeners = () => {
  const button = document.querySelector('#change')
  const content = document.querySelector('#content')

  button.addEventListener('click', () => {
    if (show === 'Experience') {
      content.innerHTML = `${Experience()}`
      show = 'Education'
    } else {
      content.innerHTML = `${Education()}`
      show = 'Experience'
    }
    button.textContent = `Show ${show}`

    content.scrollIntoView({ behavior: 'smooth' })
  })

  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()

      const targetId = this.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetId === 'experience' || targetId === 'education') {
        if (targetId === 'experience') {
          content.innerHTML = `${Experience()}`
          show = 'Education'
        } else if (targetId === 'education') {
          content.innerHTML = `${Education()}`
          show = 'Experience'
        }
        button.textContent = `Show ${show}`

        content.scrollIntoView({ behavior: 'smooth' })
      } else if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
}
*/ import './Main.css'
import { AboutMe } from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'

let show = 'Experience'

const template = () => {
  return `
  <main>
    ${AboutMe()}
    <div class="change-container">
      <button id="change">Show ${show}</button>
    </div>
    <div id="content">
      ${Education()}
    </div>
    ${Projects()}
  </main>
  `
}

export const Main = () => {
  return template()
}

export const addMainListeners = () => {
  const button = document.querySelector('#change')
  const content = document.querySelector('#content')

  button.addEventListener('click', () => {
    if (show === 'Experience') {
      content.innerHTML = `${Experience()}`
      show = 'Education'
    } else {
      content.innerHTML = `${Education()}`
      show = 'Experience'
    }
    button.textContent = `Show ${show}`

    content.scrollIntoView({ behavior: 'smooth' })
  })

  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()

      const targetId = this.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetId === 'experience' || targetId === 'education') {
        if (targetId === 'experience') {
          content.innerHTML = `${Experience()}`
          show = 'Education'
        } else if (targetId === 'education') {
          content.innerHTML = `${Education()}`
          show = 'Experience'
        }
        button.textContent = `Show ${show}`

        content.scrollIntoView({ behavior: 'smooth' })
      } else if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
}
