let scaler = 50
let numa = 10
let numb = 6
let coefficient = 50
let numc
let gcd

function setup() {
  createCanvas(800, 600)
  rect(10, 10, viewNum(numa), viewNum(numb))
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

function viewNum(num) {
  return coefficient * num
}
