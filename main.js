const projects = [
  { title: 'Weather App', description: 'Shows weather info using API.' },
  { title: 'Task Manager', description: 'To-do list with categories.' },
  { title: 'Portfolio Site', description: 'Personal website with projects.' }
]

const container = document.getElementById('projects')

projects.forEach((project) => {
  const card = document.createElement('div')
  card.className = 'card'

  const title = document.createElement('h3')
  title.textContent = project.title

  const desc = document.createElement('p')
  desc.textContent = project.description

  card.appendChild(title)
  card.appendChild(desc)
  container.appendChild(card)
})
