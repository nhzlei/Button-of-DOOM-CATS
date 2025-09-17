let point = 0;
const audio1 = document.getElementById("meowcat1")

function cat_clicked() {
	point += 1;
	document.querySelector(".point").textContent = point;
	audio1.currentTime =  0;
	audio1.play();
}

function upgrade1() {
	point += 2;
	document.querySelector(".point").textContent = point;
	audio1.currentTime =  0;
	audio1.play();
}
