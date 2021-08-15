var dropdown = document.getElementsByClassName("nav__item");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.maxHeight) {
      dropdownContent.style.maxHeight = null;
    } else {
      dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
    }
  });
}


function toggleNav(){
  document.getElementById('sidebar__container').classList.toggle('active');
}
