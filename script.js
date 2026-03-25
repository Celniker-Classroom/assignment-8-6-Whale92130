// ----- Functions to implement -----

// 1) myFunc(): persistent counter

// 2) getRandomNum(max): 1..max int or 0 if invalid

// 3) myAdder(x, y): numeric sum

// 4) distance(x1, y1, x2, y2): Euclidean distance

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0


// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}
let count = 0;
function myFunc() {
  return ++count;
}

function getRandomNum(max) {
  let rand=-1;
  if (isNaN == false && max >=0) {
  rand = (Math.random()*max).toFixed(0);
  }else {
    rand = 0;
  }
  return rand;
}

function myAdder(a, b) {
  a=Number(a);
  b=Number(b);
  return a+b;
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
}

function quadratic(a, b, c) {
  let roots = [];
  let disc = b**2-4*a*c;
  let i = false;
  if (disc > 0) {
    roots.push((-b+Math.sqrt(disc))/2*a);
    roots.push((-b-Math.sqrt(disc))/2*a);
  }
  else if (disc < 0) {
    disc = disc*-1;
    roots.push((-b+Math.sqrt(disc))/2*a + "i");
    roots.push((-b-Math.sqrt(disc))/2*a + "i");
  }
  else if (disc == 0) {
    roots.push(-b/2*a);
  }
  return roots;
}