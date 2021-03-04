var counter = 0;
var p = document.querySelectorAll('p'); 

var button1 = document.querySelector('.increment');
var button2 = document.querySelector('.decrement'); 


button1.addEventListener('click', function () {
    p.textContent = counter++;
    p[0].innerHTML = 'Count:... : ' + counter;

    if(counter == 10){
        var image = document.createElement("img");
        image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Princess_Bubblegum.png/100px-Princess_Bubblegum.png");      
         p[0].appendChild(image);
        
    }
});

button2.addEventListener('click', function () {
  p.textContent = counter--;
  p[0].innerHTML = 'Count : ' + counter;
if (counter == -10){
    var image = document.createElement("img");
        image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/2/21/Link_of_the_Wild.png");      
         p[0].appendChild(image);
}
});