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

  var x = Math.abs(ev.accelerationIncludingGravity.x);
  var y = Math.abs(ev.accelerationIncludingGravity.y);
  var z = Math.abs(ev.accelerationIncludingGravity.z);

  var maxAcc = Math.max(x, Math.max(y, z));

  if (maxAcc > 2) {
    var color = 'rgba(' + Math.max(255, maxAcc * 50) + ', 128, 128, 1)';
  }
  else {
    var color = 'rgba(128, 128, 128, 1)';
  }

  elTop.style.backgroundColor = elBottom.style.backgroundColor = color;

  elTop.innerHTML = 'x: ' + x + '<br />' +
                    'y: ' + y + '<br />' +
                    'z: ' + z + '<br />';

  elBottom.innerHTML = 'ra: ' + ev.rotationRate.alpha + '<br />' +
                       'rb: ' + ev.rotationRate.beta + '<br />' +
                       'rg: ' + ev.rotationRate.gamma;


}

window.addEventListener('devicemotion', handleAcceleration, true);
