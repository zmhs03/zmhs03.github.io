window.addEventListener('scroll', function() {
  var footer = document.getElementById('foot');
  var scrollPosition = window.innerHeight + window.pageYOffset;
  var documentHeight = document.documentElement.offsetHeight;

  if (scrollPosition >= documentHeight * 0.5) {
    footer.style.display = 'block';
  } else {
    footer.style.display = 'none';
  }
});
