$(document).ready(function() {

/* Smooth Scroll */
  $(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 850);
          return false;
        }
      }
    });
  });

 
   var number_objects; 
  var displayObject = $('.left-pack');
  function loadRandom() {
    number_objects = 14 + Math.floor(Math.random() * 1);
  }
  function decreaseRandom() {
    number_objects -= Math.floor(Math.random() * 2) + 1;        
  }
  function showRandom() {
    // show / update the value
    displayObject.text(number_objects);
  }
  loadRandom(); // load the value
  showRandom(); // initial display
  var interval = setInterval(function () {
    decreaseRandom();
    showRandom();
    if(number_objects <= 4) {
      clearInterval(interval);
      $(".left-pack").css("color","#de0101").addClass("alert");
    }
  }, 14000); 
})
/*Вариант до конца дня*/
var q = new Date;
  var year = q.getFullYear();
  var month =  q.getMonth();
  var day =  q.getDate()+1;
  var hour= 0;
  var minute= 0; 
  var sec= 0;
/**/

  function CountBox() {
    
    dateNow = new Date();
  
    amount =dateFuture.getTime() - dateNow.getTime();
    
    delete dateNow;
    
    if (amount < 0) {
      
      out = "<div class='countbox-num flex flex-center flex-mid flex-wrap'><div id='countbox-hours1'>0</div><div id='countbox-hours2'>0</div><div id='countbox-hours-text'>часов</div></div>" +
      "<div class='countbox-space flex flex-mid'></div>" +
      "<div class='countbox-num flex flex-center flex-mid'><div id='countbox-mins1'>0</div><div id='countbox-mins2'>0</div><div id='countbox-mins-text'>минут</div></div>" +
      "<div class='countbox-space flex flex-mid'></div>" +
      "<div class='countbox-num flex flex-center flex-mid'><div id='countbox-secs1'>0</div><div id='countbox-secs2'>0</div><div id='countbox-secs-text'>скенд</div></div>";
            
      //document.getElementById("countbox").innerHTML = out;
      
    } else {
      days = 0;
      days1 = 0;
      days2 = 0;
      hours = 0;
      hours1 = 0;
      hours2 = 0;
      mins = 0;
      mins1 = 0;
      mins2 = 0;
      secs = 0;
      secs1 = 0;
      secs2 = 0;
      out = "";
      
      amount = Math.floor(amount / 1e3);
      days = Math.floor(amount / 86400);

      
      days1 = (days >= 10) ? days.toString().charAt(0) : '0';
      //console.log(days1);
      
      
      days2 = (days >= 10) ? days.toString().charAt(1) : days.toString().charAt(0);
      
      amount = amount % 86400;
      hours = Math.floor(amount / 3600);
      hours1 = (hours >= 10) ? hours.toString().charAt(0) : '0';
      hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);
      amount = amount % 3600;
      
      mins = Math.floor(amount / 60);
      
      mins1 = (mins >= 10) ? mins.toString().charAt(0) : '0';
      
      mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);
      
      amount = amount % 60;
      
      secs = Math.floor(amount);
      
      secs1 = (secs >= 10) ? secs.toString().charAt(0) : '0';
      
      secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);
      
      out = ""+ 
      "<div class='countbox-num flex flex-center flex-mid flex-wrap'><div id='countbox-days1'>" + days1 + "</div><div id='countbox-days2'>" + days2 + "</div><p class='px18'>дней</p></div>" +
      "<div class='countbox-space flex flex-center flex-mid'>&nbsp;</div>" +     
      "<div class='countbox-num flex flex-center flex-mid flex-wrap'><div id='countbox-hours1'>" + hours1 + "</div><div id='countbox-hours2'>" + hours2 + "</div><p class='px18'>часов</p></div>" +
      "<div class='countbox-space flex flex-center flex-mid'>&nbsp;</div>" +
      "<div class='countbox-num flex flex-center flex-mid flex-wrap'><div id='countbox-mins1'>" + mins1 + "</div><div id='countbox-mins2'>" + mins2 + "</div><p class='px18'>минут</p></div>" +
      "<div class='countbox-space flex flex-center flex-mid'>&nbsp;</div>" +
      "<div class='countbox-num flex flex-center flex-mid flex-wrap'><div id='countbox-secs1'>" + secs1 + "</div><div id='countbox-secs2'>" + secs2 + "</div><p class='px18'>секунд</p></div>";
  
      /*document.getElementById("countbox").innerHTML = out;
      setTimeout("CountBox()", 1);*/
    }
    
  }

  //month = --month;
  dateFuture = new Date(year, month, day, hour, minute, sec);
  
jQuery(document).ready(function(){
    CountBox();
  });

