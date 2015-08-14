


var wdiNames = ["Adam", "Alex", "Andre", "Brian", "Greg", "Jeff", "Julie", "Kayla", "Kyle", "Leslie","Noah", "Paul", "Percival", "Steve"];
var colors = ["Blue","Purple","Red","Yellow","Orange","Green","Gray","White","Pink","Light Blue","Rose","Violet","Indigo","Light Gray"];


function eachName(){

	var namePicker = wdiNames[Math.floor(Math.random() * wdiNames.length)]
	var colorPicker = colors[Math.floor(Math.random() * colors.length)]

    document.getElementById("choice").innerHTML = namePicker;
    document.body.style.backgroundColor = colorPicker;
    

}

document.querySelector('#pickName').addEventListener('click', eachName);








	