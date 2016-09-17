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

function handleAcceleration(ev) {
  var elTop = document.querySelector('.top');
  var elBottom = document.querySelector('.bottom');

  var alpha = ev.rotationRate.alpha;
  var beta = ev.rotationRate.beta;
  var gamma = v.rotationRate.gamma;

  var maxAcc = Math.max(Math.abs(alpha), Math.max(Math.abs(beta), Math.abs(gamma)));

  if (maxAcc > 2) {
    var color = 'rgba(' + Math.max(255, maxAcc * 50) + ', 128, 128, 1)';
  }
  else {
    var color = 'rgba(128, 128, 128, 1)';
  }

  elTop.style.backgroundColor = elBottom.style.backgroundColor = color;


  elBottom.innerHTML = 'ra: ' + alpha + '<br />' +
                       'rb: ' + beta + '<br />' +
                       'rg: ' + gamma;


}

window.addEventListener('devicemotion', handleAcceleration, true);
