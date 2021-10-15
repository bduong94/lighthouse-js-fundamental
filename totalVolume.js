const PI =3.14159; //Value of PI

const sphereVolume = function (radius) { //Nameless function assigned to the variable sphereVolume

  /*
  Parameter:
  radius - integer or floating point

  Return 
  Volume of sphere
  */
  
  let volume = (4/3) * PI * Math.pow(radius,3); //V=4/3*PI*r^3

  return volume;

}

//Test Case for sphere
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) { //Nameless function assigned to the variable coneVolume

  /*
  Parameter:
  radius - Integer or floating point
  heigh - Integer or floating point

  Return
  Volume of cone
  */

  let volume = (1/3) * PI * Math.pow(radius,2) * height; // V=1/3*PI*r^2*h

  return volume;

}

//Test Case for cone
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth){ //Nameless function assigned to the variable prismVolume

  /*
  Parameter:
  height - integer or floating point
  width - integer or floating point
  depth - integer or floating point

  Return 
  Volume of sphere
  */

  let volume = height * width * depth; //V=h*w*d

  return volume;

}

//Test Case for prism

console.log(prismVolume(3, 4, 5) === 60);


const totalVolume = function(solids){ //Nameless function assigned to the variable totalVolume

  /*
  Parameter:
  solids - array of solids

  Return 
  Total sum of the volumes of all the solids
  */

  let totalVolume = 0; //Initial volume

  for (let i =0; i < solids.length; i++){ //Iterates over solids array

    if(solids[i].type === 'sphere'){ //Checks to see if object property type is sphere 

      totalVolume += sphereVolume(solids[i].radius); //Adds volume of sphere to total volume

    } else if(solids[i].type === 'cone'){ //Checks to see of object property type is cone

      totalVolume += coneVolume(solids[i].radius, solids[i].height); //Adds volume of cone to total volume

    } else if(solids[i].type === 'prism'){ //Checks to see if object property type is prism

    totalVolume += prismVolume(solids[i].height, solids[i].width, solids[i].depth); //Adds volume of prism to total volume
  }
  }

  return totalVolume;

}

//Test Case for total volume
const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]


console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000)