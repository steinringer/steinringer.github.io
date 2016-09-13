function handleOrientation(ev) {

  var elTop = document.querySelector('.top');
  var elBottom = document.querySelector('.bottom');

  var normAlpha = Math.max(-90, Math.min(90, ev.alpha));
  var normBeta = Math.max(-90, Math.min(90, ev.beta));

  elBottom.style.transform = elTop.style.transform = 'translateX(' + (normAlpha / 10) + 'vh) translateY(' + (normBeta / 100) + 'vh)';
  var color = 'rgba(' + Math.floor(((normAlpha + 90) / 180) * 255) + ', 128, 128, 1)';
  console.log('color', color);
  elBottom.style.backgroundColor = color;
}

window.addEventListener("deviceorientation", handleOrientation, true);
