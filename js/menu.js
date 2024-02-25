function toggleMenu() {
    var menu = document.getElementById('menu');
    var bar = document.getElementById('menu-icon');
  
    if(menu.style.display === "flex"){
        menu.style.display = "none";
        bar.style.backgroundColor = "transparent";
    }
    else{
        menu.style.display = "flex";
        bar.style.backgroundColor = "gray";
    }
  }