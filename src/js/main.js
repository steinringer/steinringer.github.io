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

var prev {
  alpha: 0,
  beta: 0,
  gamma: 0
}

function flatOut(current, previous) {
  return current * 0.2 + previous * 0.8;
}

function handleAcceleration(ev) {
  var elTop = document.querySelector('.top');
  var elBottom = document.querySelector('.bottom');

  var alpha = ev.rotationRate.alpha;
  var beta = ev.rotationRate.beta;
  var gamma = ev.rotationRate.gamma;

  prev.alpha = flatOut(alpha, prev.alpha);
  prev.beta = flatOut(beta, prev.beta);
  prev.gamma = flatOut(gamma, prev.gamma);

  var maxAcc = Math.max(Math.abs(prev.alpha), Math.max(Math.abs(prev.beta), Math.abs(prev.gamma)));

  if (maxAcc > 30) {
    var color = 'rgba(' + Math.max(255, maxAcc * 50) + ', 128, 128, 1)';
  }
  else {
    var color = 'rgba(128, 128, 128, 1)';
  }

  elTop.style.backgroundColor = elBottom.style.backgroundColor = color;


  elBottom.innerHTML = 'ra: ' + prev.alpha + '<br />' +
                       'rb: ' + prev.beta + '<br />' +
                       'rg: ' + prev.gamma;


}

window.addEventListener('devicemotion', handleAcceleration, true);
