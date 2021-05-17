document.getElementById('Rectangle').addEventListener('click', RecCal)
document.getElementById('Square').addEventListener('click', SquCal)
document.getElementById('Parallelogram').addEventListener('click', ParCal)
document.getElementById('Trapezoid').addEventListener('click', TraCal)
document.getElementById('Triangle').addEventListener('click', TriCal)
document.getElementById('Circle').addEventListener('click', CirCal)
document.getElementById('Pythagorean').addEventListener('click', PythCal)
document.getElementById('Cone').addEventListener('click', ConCal)
document.getElementById('Distance').addEventListener('click', DisCal)
document.getElementById('Cylinder').addEventListener('click', CylCal)
document.getElementById('Cube').addEventListener('click',CubCal)
document.getElementById('Midpoint').addEventListener('click',MidCal)
document.getElementById('start').addEventListener('click', Begin)

let a = 0
let b = 0
let c = 0
let d = 0
let result = 0
let stepa = 0
let piething = Math.PI
let secret = 0
let text = ""
const deathtxt = ['HaHAHA⠀', 'Try again⠀', 'REEEEEEE⠀', 'This is a loop with a const⠀', 'this is intended⠀', 'heheheheheh⠀', 'reee⠀', 'You are now trapped⠀', 'Jk, the website will reapper by clicking the ok button.']

function RecCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value

  a = parseFloat(a)
  b = parseFloat(b)

  result = a * b

  document.getElementById('equation').innerHTML = "the area of a Rectangle "
  document.getElementById('output').innerHTML = result
}

function SquCal () {
  a = document.getElementById('vala').value

  a = parseFloat(a)

  result = a * a

  document.getElementById('equation').innerHTML = "the area of a Square "
  document.getElementById('output').innerHTML = result

}

function ParCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value

  a = parseFloat(a)
  b = parseFloat(b)

  result = a * b

  document.getElementById('equation').innerHTML = "the area of a Parallelogram "
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

  stepa = (a + b)/2

  result = stepa * c

  document.getElementById('equation').innerHTML = "the area of a Trapezoid "
  document.getElementById('output').innerHTML = result
}

function TriCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value

  a = parseFloat(a)
  b = parseFloat(b)

  result = (a * b)/2

  document.getElementById('equation').innerHTML = "the area of a Triangle "
  document.getElementById('output').innerHTML = result
}

function CirCal () {
  a = document.getElementById('vala').value

  a = parseFloat(a)
  piething = parseFloat(piething)

  result = ((a * a) * piething)

  document.getElementById('equation').innerHTML = "the area of a Circle "
  document.getElementById('output').innerHTML = result
}

function PythCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value

  a = parseFloat(a)
  b = parseFloat(b)

  result = ((a * a) + (b * b))

  result = Math.sqrt(result)
  
  document.getElementById('equation').innerHTML = "the result of a Pythagorean Theorem "
  document.getElementById('output').innerHTML = result
}

function ConCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value

  a = parseFloat(a)
  b = parseFloat(b)
  stepa = parseFloat(stepa)
  
  stepa = Math.sqrt((a * a) + (b * b)) 

  result = (piething * b) * stepa
  
  document.getElementById('equation').innerHTML = "lateral surface area of a cone "
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
  
  document.getElementById('equation').innerHTML = "The distance between the two input points "
  document.getElementById('output').innerHTML = result
}

function CylCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value

  a = parseFloat(a)
  b = parseFloat(b)
  piething = parseFloat(piething)

  result = (piething * (a * a)) * b
 
  document.getElementById('equation').innerHTML = "The Volume of a Cylinder "
  document.getElementById('output').innerHTML = result
}

function SquCal () {
  a = document.getElementById('vala').value

  a = parseFloat(a)

  result = a * a * a

  document.getElementById('equation').innerHTML = "the Volume of a Cube "
  document.getElementById('output').innerHTML = result

}

function CubCal () {
  a = document.getElementById('vala').value

  a = parseFloat(a)

  result = a * a * a

  document.getElementById('equation').innerHTML = "the Volume of a Cube "
  document.getElementById('output').innerHTML = result

}

function MidCal () {
  a = document.getElementById('vala').value
  b = document.getElementById('valb').value
  c = document.getElementById('valc').value
  d = document.getElementById('vald').value

  a = parseFloat(a)
  b = parseFloat(b)
  c = parseFloat(c)
  d = parseFloat(d)

  stepa = ((a + c)/2)  
  result = ((b + d)/2)
  
  
  document.getElementById('equation').innerHTML = 'The coordinates of the midpoints '
  document.getElementById('output').innerHTML = result
  document.getElementById('output2').innerHTML = stepa
}

function Begin () {
  alert('A new link as appered on the page; FIND IT IN 5 SECONDS, To stop the site from dissappering')

  document.getElementById('stage1').style.display = 'block'
}

function Stime () {
  alert('Too late and too bad')

  document.getElementById('killscreen').style.display = 'none'

  for (secret = 0; secret < deathtxt.length; secret++) {
    alert (text += deathtxt[secret])

    document.getElementById('killscreen').style.display = 'none'
  }
  window.setTimeout(Break, 5000)
}

function Break () {
  if (document.getElementById('killscreen').style.display = 'none') {
  document.getElementById('killscreen').style.display = 'block'
  }
}
