// JavaScript Document


$(document).ready(function () {
  $('a[href*="#"]').on('click', function (e) {
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 95
    }, 500);
    e.preventDefault();
  });

  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  $('#signindropdown>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
	



  $("#login").click(function () {

    $("#signindropdown").toggle()
    $("#profile").toggle()
  });


  var divno = 1
  $('.addevent').click(function () {
    if (divno < 4) {
      $('.firstitem:last').after('<div class="row mt-2"><div class="col-6"><select class="form-control"><option>Marriage</option><option>Birthday</option><option>Engagement</option></select></div><div class="col-5"><input type="date" placeholder="dateofevent" class="form-control"></div><div class="col-1 m-auto pl-0 removeitem" ><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></a></div></div>');
      divno += 1
    }
  });

  $('.eventlist').on('click', '.removeitem', function () {
    $(this).parent().remove();
    divno -= 1
  });
  var windowwidth = $(".pdfwidth").width()
  var neww = document.getElementsByClassName("pdfwidth").innerHTML;

  function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById("pdfview").style.width = windowwidth;
    } else {
      document.getElementById("pdfview").style.width = "100%";
    }
  }

  var x = window.matchMedia("(max-width: 992px)")

  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)

})

$(document).ready(function () {
	$(".nav-link").on("click", function(){
	   $(".nav-item").find(".active").removeClass("active");
	   $(this).addClass("active");
	});
});