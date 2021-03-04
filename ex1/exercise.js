// define your functions here
var bold = document.querySelectorAll("strong");
console.log(bold)
var a = document.querySelector('a');
// call the functions and connect them to an event
a.addEventListener('mouseenter', function bo(){
   for(i = 0; i <= bold.length; i++){
       bold[i].style.color = 'grey'
       bold[i].style.fontWeight = 'bold'
   }
})

a.addEventListener('mouseleave', function bo(){
    for(i = 0; i <= bold.length; i++){
        bold[i].style.color = 'blue'
        bold[i].style.fontWeight = 'normal'
    }
 })

   



