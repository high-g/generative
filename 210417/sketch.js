let scaler = 50
let numa = 10
let numb = 6
let numc
let gcd

function setup() {
  createCanvas(500, 500)
  Euclid(numa, numb)
  rect(0, 0, 100, 110)
}

function draw() {}

function Euclid(num1, num2) {
  numc = num1 % num2
  if (numc === 0) {
    gcd = num2
  } else {
    Euclid(num2, numc)
  }
}
