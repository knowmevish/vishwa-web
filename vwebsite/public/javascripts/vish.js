

$(document).ready(function() {
  //carousel_bg(0);  
  var abtme = "<div class='span6'><ul class='listdesc'><li class='white'>A full stack engineer,loves to solve challenging problems on the web</li><li class='white'>Growing Web Evangelist </li><li class='white'>Currently Member of Technical Staff <a href='http://www.vmware.com'>@VMware</a></li><li class='white'>passionate about javascript,Node.js,HTML5, CSS, Ruby on Rails </li><li class='white'>Graduated with Masters in Computer Science from <a href='http://www.cse.buffalo.edu'>SUNY, Buffalo</a></li><li class='white'>reach me <a href='https://twitter.com/intent/tweet?screen_name=knowmevish' class='twitter-mention-button' data-related='knowmevish'> @knowmevish</a> or send me an email:- vishwasr[at]buffalo[dot]edu</li></ul></div>";
  var pr = "<div class='span6'><ul class='listdesc'><li class='white'>Developed SPACE.LY - Space to share your photos, Application on backbone.js, Rails </li><li class='white'>Contributor to <a href='http://www.presvo.com'>PRESVO</a>,Slide Authoring Tool </li><li class='white'> Contributor to Cours.ly-Web application built using javascript,Rails</li><li class='white'> To know more about my academic projects, Click <a href='http://www.linkedin.com/in/vishwasrikaanth'>here</a></li></ul></div>";

  $('#about').addClass('active');
  $('#projects').removeClass('active');
  $('.desc').html('');
  $('.desc').html(abtme); 

  $('#prjt').on('click',function(e) {
  	e.preventDefault();
  	$('#about').removeClass('active');
  	$('#projects').addClass('active');
  	$('.desc').html('');
  	$('.desc').html(pr);

  });

  $('#abtme').on('click',function(e) {
  	e.preventDefault();
  	$('#projects').removeClass('active');
  	$('#about').addClass('active');
  	$('.desc').html('');
  	$('.desc').html(abtme);

  });   
});
