var acc = document.getElementsByClassName('accordion');
var getOnePanel = document.querySelector('.accordion__panel');

getOnePanel.style.maxHeight = getOnePanel.scrollHeight + "px";

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    var parentToggle = this.parentNode;

    // this.classList.toggle("active"); 
    // parentToggle.classList.toggle('active');

    this.classList.toggle('panel_active');
    var getAllPanelActive = document.querySelectorAll('.panel_active');

    if(getAllPanelActive.length > 0){
      var getAllAccordion = document.querySelectorAll('.accordion__panel');
      getAllAccordion.forEach((dataTwo)=>{
        dataTwo.style.maxHeight = null;
      });
      getAllPanelActive.forEach( (data)=>{
        data.classList.remove('panel_active');
      });
    } 

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 

  });
}

