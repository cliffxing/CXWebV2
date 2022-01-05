
  
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-8rem";
    }
    prevScrollpos = currentScrollPos;
  }
  
  
  const menu = document.querySelector('#mobile-menu');
  const links = document.querySelector('.navbar__menu');
  
  const mMenu = () => {
      menu.classList.toggle('is-active');
      links.classList.toggle('active');
  }
  
  menu.addEventListener('click', mMenu);
  
  
  function openSocial(evt, socialMedia) {
      var i, tabcontent, tablinks;
    
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
    
      
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    
      document.getElementById(socialMedia).style.display = "block";
      evt.currentTarget.className += " active";
    }
  
   