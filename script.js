/* Here all the neccesary, click events that I have setup */

document.getElementById('rectangle').addEventListener('click', RecCal)
document.getElementById('square').addEventListener('click', SquCal)
document.getElementById('parallelogram').addEventListener('click', ParCal)
document.getElementById('trapezoid').addEventListener('click', TraCal)
document.getElementById('triangle').addEventListener('click', TriCal)
document.getElementById('circle').addEventListener('click', CirCal)
document.getElementById('pythagorean').addEventListener('click', PythCal)
document.getElementById('cone').addEventListener('click', ConCal)
document.getElementById('distance').addEventListener('click', DisCal)
document.getElementById('cylinder').addEventListener('click', CylCal)
document.getElementById('cube').addEventListener('click', CubCal)
document.getElementById('midpoint').addEventListener('click', MidCal)
document.getElementById('start').addEventListener('click', Begin)
document.getElementById('navagatorbar').addEventListener('click', Stime)

/* All the varables are setup */

let a = 0
let b = 0
let c = 0
let d = 0
let result = 0
let stepa = 0
let piething = Math.PI
let secret = 0
let text = ''

/* This is the const neccesary for the assignment it will be used later */

const deathtxt = ['HaHAHA⠀', 'Try again⠀', 'REEEEEEE⠀', 'This is a loop with a const⠀', 'this is intended⠀', 'heheheheheh⠀', 'reee⠀', 'You are now trapped⠀', 'Jk, the website will reapper by clicking the ok button.']

/* The functions below are all the calculator functions. There is more comments at the bottom. */

function RecCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value

  a = parseFloat(a)
  b = parseFloat(b)

  result = a * b

  document.getElementById('equation').innerHTML = 'the area of a Rectangle '
  document.getElementById('output').innerHTML = result
}

function SquCal () {
  a = document.getElementById('vala').value

  a = parseFloat(a)

  result = a * a

  document.getElementById('equation').innerHTML = 'the area of a Square '
  document.getElementById('output').innerHTML = result
}

function ParCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value

  a = parseFloat(a)
  b = parseFloat(b)

  result = a * b

  document.getElementById('equation').innerHTML = 'the area of a Parallelogram '
  document.getElementById('output').innerHTML = result
}

function TraCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value
  c = document.getElementById('valc').value

  a = parseFloat(a)
  b = parseFloat(b)
  c = parseFloat(c)
  stepa = parseFloat(stepa)

  stepa = (a + b) / 2

  result = stepa * c

  document.getElementById('equation').innerHTML = 'the area of a Trapezoid '
  document.getElementById('output').innerHTML = result
}

function TriCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value

  a = parseFloat(a)
  b = parseFloat(b)

  result = (a * b) / 2

  document.getElementById('equation').innerHTML = 'the area of a Triangle '
  document.getElementById('output').innerHTML = result
}

function CirCal () {
  a = document.getElementById('vala').value

  a = parseFloat(a)
  piething = parseFloat(piething)

  result = ((a * a) * piething)

  document.getElementById('equation').innerHTML = 'the area of a Circle '
  document.getElementById('output').innerHTML = result
}

function PythCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value

  a = parseFloat(a)
  b = parseFloat(b)

  result = ((a * a) + (b * b))

  result = Math.sqrt(result)

  document.getElementById('equation').innerHTML = 'the result of a Pythagorean Theorem'
  document.getElementById('output').innerHTML = result
}]

function ConCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value

  a = parseFloat(a)
  b = parseFloat(b)
  stepa = parseFloat(stepa)

  stepa = Math.sqrt((a * a) + (b * b))
  result = (piething * b) * stepa

  document.getElementById('equation').innerHTML = 'lateral surface area of a cone'
  document.getElementById('output').innerHTML = result
}

function DisCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value
  c = document.getElementById('valc').value
  d = document.getElementById('vald').value

  a = parseFloat(a)
  b = parseFloat(b)
  c = parseFloat(c)
  d = parseFloat(d)
  stepa = parseFloat(stepa)

  stepa = (((a - c) * (a - c)) + ((b - d) * (b - d)))

  result = Math.sqrt(stepa)

  document.getElementById('equation').innerHTML = 'The distance between the two input points'
  document.getElementById('output').innerHTML = result
}

function CylCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value

  a = parseFloat(a)
  b = parseFloat(b)
  piething = parseFloat(piething)

  result = (piething * (a * a)) * b

  document.getElementById('equation').innerHTML = 'The Volume of a Cylinder'
  document.getElementById('output').innerHTML = result
}

function CubCal () {
  a = document.getElementById('vala').value

  a = parseFloat(a)

  result = a * a * a

  document.getElementById('equation').innerHTML = 'the Volume of a Cube'
  document.getElementById('output').innerHTML = result
}

function MidCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value
  /* This is a comment explain the differnce between this code, and some more above.
  Basically this code has a slightly different purpose in the calculator as it provides two different outputs opposed to one combined output. */
  c = document.getElementById('valc').value
  d = document.getElementById('vald').value

  a = parseFloat(a)
  b = parseFloat(b)

  c = parseFloat(c)
  d = parseFloat(d)

  stepa = ((a + c) / 2)
  result = ((b + d) / 2)

  document.getElementById('equation').innerHTML = 'The coordinates of the midpoints'
  document.getElementById('output').innerHTML = result
  document.getElementById('output2').innerHTML = stepa
}

/* The functions below are working to produce the simple game that is acitivated by the onclick button */

function Begin () {
  alert('A new link as appered on the page; FIND IT IN 5 SECONDS, To stop the site from dissappering')

  document.getElementById('stage1').style.display = 'block'
}

/* The function below is a loop that adds text to the alert taking from the const. */

function Stime () {
  alert('Too late and too bad')

  document.getElementById('killscreen').style.display = 'none'

  for (secret = 0; secret < deathtxt.length; secret++) {
    alert(text += deathtxt[secret])

    document.getElementById('killscreen').style.display = 'none'
  }
  window.setTimeout(Break, 5000)
}

function Break () {
  document.getElementById('killscreen').style.display = 'block'
}
