let numa = 21
let numb = 17
let numc
let count = 0
let gcf

function setup() {
  Euclid(numa, numb)
  console.log(gcf)
  ellipse(50, 50, 80, 80)
}

function draw() {}

function Euclid(num1, num2) {
  numc = num1 % num2
  if (numc === 0) {
    gcf = num2
  } else {
    count++
    Euclid(num2, numc)
  }
}
