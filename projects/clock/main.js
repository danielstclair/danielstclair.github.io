var color = [100,50,40];

function changeColor(){
		var animate = document.getElementsByTagName('body');
		
		color[0] += Math.floor(Math.random()*8);
		color[1] += Math.floor(Math.random()*12);
		color[2] += Math.floor(Math.random()*5);
		for(var key in color){
			if(color[key] >= 255){
				color[key] = 0;
			}
		}
		animate[0].style.backgroundColor = 'rgb('+color.join(',')+')';
	}

function tickTock (){

	var clock = document.getElementById('clock');
	var currentDate = new Date();
	var hour = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var seconds = currentDate.getSeconds();
	if(hour >= 13){hour -= 12;}
	if(hour<10){hour = "0" + hour;}
	if(minutes < 10){minutes = "0" + minutes;}
	if(seconds <10){seconds = "0" +seconds;}
	var timeString = hour + ":" + minutes + ":" + seconds;

	document.getElementById('clock').innerHTML = timeString;
	changeColor(); 
}

tickTock();
window.setInterval(tickTock, 1000);












