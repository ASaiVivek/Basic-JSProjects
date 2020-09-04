// var button = document.getElementsByTagName("button")[0];
// var i=0;
// var listitems=document.getElementsByTagName("li");
// button.addEventListener("click",function() {
// 	if(i<listitems.length)
// 	{
// 	console.log("clicked");
// 	listitems[i].style.textDecoration="line-through";
// 	i+=1;
// 	}
// });
var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}

button.addEventListener("click",function (){
	if(inputLength() > 0){
	createListElement();
	}
	else{
		input.classList.toggle("error")
	}
});

input.addEventListener("keypress",function (event){
	if( event.keyCode === 13){
	if(inputLength() > 0 ){
	createListElement();
	}
	else{
		input.classList.toggle("error")
	}
	}
});

// ul.addEventListener("click",function(){
// 	var lis=ul.getElementsByTagName("li");

// })