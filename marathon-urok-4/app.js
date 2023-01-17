const board = document.querySelector('#board')
const colors = ['rgb(159, 174, 187)', 'rgb(79, 38, 130)', 'rgb(223, 135, 135)','rgb(204, 15, 113)',
               'rgb(16, 160, 14)', 'rgb(204, 144, 15)', 'rgb(204, 81, 15)', 'rgb(204, 15, 113)']
const SQUARE_NUMBER = 600

for (let i = 0; i <SQUARE_NUMBER; i++) {
  const square = document.createElement('div') 
  square.classList.add('square') 

  square.addEventListener('mouseover', () => 
    setColor(square)
  )

  square.addEventListener('mouseleave', () => 
    removeColor(square)
  )

  board.append(square)
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
