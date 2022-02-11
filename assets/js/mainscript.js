var acc = document.getElementsByClassName('accordion');
var getOnePanel = document.querySelector('.accordion__panel');

getOnePanel.style.maxHeight = getOnePanel.scrollHeight + "px";

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    var panel = this.nextElementSibling;
    var parentToggle = this.parentNode; 

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

      var getAllContainers = document.querySelectorAll('.accordion__container');
      getAllContainers.forEach((data)=>{
        data.classList.remove('active');
      });

      var getAccordion = document.querySelectorAll('.accordion');
      getAccordion.forEach((data)=>{
        data.classList.remove('active');
      });
    } 

    if (1 < 2) {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.classList.add("active"); 
      parentToggle.classList.add('active');
    } 
    
  });
}

