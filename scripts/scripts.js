function menuClick() {
    document.getElementsByClassName("menu-bottom")[0].classList.toggle("responsive");
}

document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });