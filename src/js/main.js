function handleOrientation(ev) {

  var elTop = document.querySelector('.top');
  var elBottom = document.querySelector('.bottom');

  var normBeta = Math.max(-90, Math.min(90, ev.beta));
  var normGamma = Math.max(-90, Math.min(90, ev.gamma));

  elBottom.style.transform = elTop.style.transform = 'translateY(' + (normBeta / 10) + 'vh) translateX(' + (normGamma / 10) + 'vh)';
  var color = 'rgba(' + Math.floor(((normBeta + 90) / 180) * 255) + ', 128, 128, 1)';
  console.log('color', color);
  elBottom.style.backgroundColor = color;

  elTop.innerHTML = 'alpha: ' + ev.alpha + '<br />' +
                    'beta: ' + ev.beta + '<br />' +
                    'gamma: ' + ev.gamma + '<br />';
}

// window.addEventListener("deviceorientation", handleOrientation, true);

var prev = {
  alpha: 0,
  beta: 0,
  gamma: 0
}

function flatOut(current, previous) {
  if ((previous < 0 && current < previous) || previous > 0 && current > previous) {
    return current;
  }
  else {
    return current * 0.05 + previous * 0.95;
  }

}

function handleAcceleration(ev) {
  var elTopR = document.querySelector('.top.r');
  var elTopG = document.querySelector('.top.g');
  var elTopB = document.querySelector('.top.b');
  var elBottomR = document.querySelector('.bottom.r');
  var elBottomG = document.querySelector('.bottom.g');
  var elBottomB = document.querySelector('.bottom.b');

  var alpha = ev.rotationRate.alpha;
  var beta = ev.rotationRate.beta;
  var gamma = ev.rotationRate.gamma;

  prev.alpha = flatOut(alpha, prev.alpha);
  prev.beta = flatOut(beta, prev.beta);
  prev.gamma = flatOut(gamma, prev.gamma);

  if (Math.abs(prev.alpha) > 50) {
    elTopR.style.transform = 'translateY(' + (prev.alpha) + 'px) translateX(' + (prev.beta) + ')';
    elTopG.style.transform = 'translateY(' + (prev.alpha/2) + 'px) translateX(' + (prev.beta/2) + ')';
    elTopB.style.transform = 'translateY(' + (prev.alpha/3) + 'px) translateX(' + (prev.beta/3) + ')';
  }
  else {
    elTopR.style.transform = null;
    elTopG.style.transform = null;
    elTopB.style.transform = null;
  }



  elTop.style.backgroundColor = elBottom.style.backgroundColor = color;


  elBottom.innerHTML = 'ra: ' + prev.alpha + '<br />' +
                       'rb: ' + prev.beta + '<br />' +
                       'rg: ' + prev.gamma;


}

window.addEventListener('devicemotion', handleAcceleration, true);
