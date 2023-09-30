var input = document.querySelectorAll(".date-input");

input.forEach(function(e){
  e.addEventListener("focusin",function(ev){
    e.type = 'date';
  })
});
input.forEach(function(e){
  e.addEventListener("focusout",function(ev){
    e.type = 'text';
  })
});