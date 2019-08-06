var easyB = document.querySelector("#easy")
var hardB = document.querySelector("#hard")
var cardVar = document.querySelectorAll(".card-body")
var cardArr = Array.from(cardVar);
console.log(cardVar);
console.log(cardArr);
var correctAns = document.querySelector("#answer");
var AnsCheck = 0;
var NewCol = document.querySelector(".nwc");
//easy,hard
easyB.addEventListener("click",function(){
document.querySelector("#display").textContent="NEW GAME";
	document.querySelector("#display").style.setProperty("color","rgb(102, 217, 255)");

	NewCol.style.setProperty('color','rgb(102, 217, 255)');
	document.querySelector(".hdg1").style.setProperty('background-color',"rgb(102, 217, 255)");
	easyB.style.color="white";
	easyB.style.backgroundColor="rgb(102, 217, 255)";
	easyBog(hardB);
	randomGen(3);
	for(i=3;i<6;i++){
		var x=0;
		var y=0;
		var z=0;
		cardArr[i].style.setProperty('background-color','rgb('+x+','+y+','+z+')');
	}
})

hardB.addEventListener("click",function(){
document.querySelector("#display").textContent="NEW GAME";
	document.querySelector("#display").style.setProperty("color","rgb(102, 217, 255)");

	NewCol.style.setProperty('color','rgb(102, 217, 255)')
	document.querySelector(".hdg1").style.setProperty('background-color',"rgb(102, 217, 255)");
	hardB.style.color="white";
	hardB.style.backgroundColor="rgb(102, 217, 255)";
	easyBog(easyB);
	randomGen(6);
})

function easyBog(x){
	x.style.color="rgb(102, 217, 255)";
	x.style.backgroundColor="white";
}

//random sequence

function randomGen(ArrL){
	ArrLe = ArrL;
	AnsCheckk = [];
	var i=0;
	var x=0;
	var y=0;
	var z=0;
	for(i=0;i<ArrL;i++){
		console.log(cardArr[i]);
		x=Math.floor((Math.random() * 255) + 1);
		y=Math.floor((Math.random() * 255) + 1);
		z=Math.floor((Math.random() * 255) + 1);
		cardArr[i].style.setProperty('background-color','rgb('+x+','+y+','+z+')');		
		AnsCheckk[i]="rgb("+x+","+y+","+z+")";
		console.log(AnsCheckk[i]);
		console.log(i);
	}
displayAns = Math.floor((Math.random() * (ArrL-1) + 1));
console.log("selected answer is "+ displayAns);
console.log(AnsCheckk[displayAns]);	
correctAns.textContent = AnsCheckk[displayAns];
finalAns=AnsCheckk[displayAns];
}

//var check1 = AnsCheckk[displayAns];


function myAnswer(AnsId){
	var x=0;
		var y=0;
		var z=0;
	if((AnsId-1)==displayAns){
		for(i=0;i<ArrLe;i++){
			cardArr[i].style.setProperty('background-color',AnsCheckk[displayAns]);
		}
		document.querySelector(".hdg1").style.setProperty('background-color',AnsCheckk[displayAns]);
		if(ArrLe>4){
			hardB.style.setProperty('background-color',AnsCheckk[displayAns]);
			easyB.style.setProperty('color',AnsCheckk[displayAns]);
		}
		else
		{
			easyB.style.setProperty('background-color',AnsCheckk[displayAns]);
			hardB.style.setProperty('color',AnsCheckk[displayAns]);
		}
		NewCol.style.setProperty('color',AnsCheckk[displayAns]);
		document.querySelector("#display").textContent="RIGHT ANSWER";
		document.querySelector("#display").style.setProperty("color",AnsCheckk[displayAns]);
		
	}
	else{
		console.log(AnsId);
	cardArr[AnsId-1].style.setProperty('background-color','rgb('+x+','+y+','+z+')');
	document.querySelector("#display").textContent="TRY AGAIN";
	document.querySelector("#display").style.setProperty("color","rgb(102, 217, 255)");
	}

}






