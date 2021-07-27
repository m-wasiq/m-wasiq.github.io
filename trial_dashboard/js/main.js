$('#years li').on('click', function(){
  $('li.selected').removeClass('selected');
  $(this).addClass('selected');
});

var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.bottom = (bulletPosition * 100) + "px";
}
