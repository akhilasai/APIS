// for (var i = 0; i <100;i++){

//     y=(125*i-(i*i))/125
//     console.log(`(${i},${y})`)   
    
// let angle=45
// let y
// let g=10
// let u=30
// let first=Math.floor(Math.tan(angle))+'x'
// console.log(first)
// let second=g+'x2'
// console.log(second)
// let square=Math.cos(angle)
// // console.log(square)
// let third=2*u*u*square*square;
// console.log(third)
// console.log(first-second/third)

let angle = 66;
let force = 4.47;
let mass = 50;

const data = [];

/**
* Function to add Projectile to data
* @params {Number} id, theeta, force, mass
* @return it will push data into array and prints the updated array
*/
const addProjectile = (id,theeta, force, mass) => {
    data.push([id,theeta,force,mass]) // pushing data into global arra
    // console.log(data)
}

/**
* Function to remove Projectile to data
* @params {Number} id
* @return it will pop data from array and prints the updated array
*/
const removeProjectile = (id) => {
    for(let i=0; i<data.length; i++){
        if(data[i][0] === id){
            data.splice(i,1); // popping data from global array
            i--;
        }
    }
    // console.log(data)
}

/**
* To find the MaxHeight and MaxDistance of the ball that is thrown in to the air
* @params {Number} id
* @return {Array of Numbers} returns an array of numbers 
* containing Max height and Max Distance
*/
const DegToRad = num => {return num * Math.PI / 180;};

function heightAndDistance(a,f,m){
    up = force*Math.sin(DegToRad(angle));
    up = up.toFixed(2);
    hz = force*Math.cos(DegToRad(angle));
    hz = hz.toFixed(2);
    
    tUp = (0-up)/(-9.80)
    tUp = tUp.toFixed(2)
    tHz = tUp*2
    tHz = tHz.toFixed(2)
    cu = (0.5)*up
    maxHeight = cu*tUp
    maxDistance = hz*tHz
    return ([maxHeight,maxDistance])
}

// function mHeight(m,force){
//     k = (0.5)m(Math.pow(force,2))
//     height = k/(mass*force)
//     console.log(height)
// }

// mHeight(mass,force);

addProjectile(1,45,100,30)
addProjectile(2,66,4.47,50)
removeProjectile(1)

let sol = heightAndDistance(angle,force,mass)
console.log(sol[0] + " --> MAX HEIGHT")
console.log(sol[1] + " --> MAX DISTANCE")