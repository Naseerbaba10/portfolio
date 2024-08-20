
function hideSideBar(){
  const sidebar = document.querySelector(".mob-navbar")
  sidebar.style.display = 'none'

}
function showSideBar(){
  const sidebar = document.querySelector(".mob-navbar")

  sidebar.style.display = 'flex'

}

    var typed = new Typed(".auto-type", {
        strings: ["Frontend Developer", "Programmer", "Designer"],
        typeSpeed: 100,    
        backSpeed: 50,   
        loop: true
    });
   
  AOS.init({
  
    duration: 1200,
    easing: 'ease',
    once: false,
    mirror: false,
  });



