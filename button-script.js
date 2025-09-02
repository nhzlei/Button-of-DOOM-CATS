let point = 0;
const audio = document.getElementById("meowcat1")

function cat_clicked() {
	point += 1;
	document.querySelector(".point").textContent = point;
	audio.currentTime =  0;
	audio.play();
}
