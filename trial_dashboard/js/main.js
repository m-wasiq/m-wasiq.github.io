var rangeSlider = document.getElementById("year_input");
var rangeValue = document.getElementById("currentvalue");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeValue.innerHTML = rangeSlider.value;
  if(rangeSlider.value == 2010) {
    $('span.min_year').hide();
  }
  else if (rangeSlider.value == 2030) {
    $('span.max_year').hide();
  }
  else {
    $('span.max_year').show();
    $('span.min_year').show();
  }
  var bulletPosition = (rangeSlider.value - rangeSlider.min);
  rangeValue.style.top = (10*bulletPosition) + "px";
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});