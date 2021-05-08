/* Slide numbers*/

/*var slideIndexNumbers = 1;
showDivs(slideIndexNumbers);

function plusDivs(n) {
  showDivs(slideIndexNumbers += n);
}

function currentDiv(n) {
  showDivs(slideIndexNumbers = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("myNumbersSlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndexNumbers = 1}    
  if (n < 1) {slideIndexNumbers = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndexNumbers -1].style.display = "block";  
  dots[slideIndexNumbers -1].className += " w3-red";
}*/










    $(function () {
        var tabContainers = $('div.tabsAlbums > div');
        $('div.tabsAlbums ul.tabNavigation a').click(function () {
            tabContainers.hide();
            tabContainers.filter(this.hash).show();
            var sel = $('.tabsAlbums').find('a.link-capitol-active');
            sel.removeClass('link-capitol-active');
            sel.addClass('link-capitol');
            $(this).removeClass('link-capitol');
            $(this).addClass('link-capitol-active');
            return false;
        });
    });
