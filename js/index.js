'use strict';


const solution = document.getElementById("solution");

const madlib = document.getElementById("madlib");

madlib.addEventListener('submit', (e) => {
  console.log("here")
  let form = e.target;
  solve(form.name.value,form.place.value,form.verb.value,form.Place2.value,form.adjective.value,form.creature.value,form.adjective2.value,);
  e.preventDefault();
})

function solve(name,place,verb,place2,adjective,creature,adjective2) 
{
  solution.innerText = `When we were little, my friend ${name} and I would go to the ${place} and ${verb} at the ${place2} catching ${adjective} ${creature} until we were ${adjective2}.`
}
