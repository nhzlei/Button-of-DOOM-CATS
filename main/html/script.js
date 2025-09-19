let point = document.querySelector('.point')
let parse_point = parseFloat(point.innerHTML)

let point_cost = document.querySelector('.treat-cost')
let parsed_treat = parseFloat(point_cost.innerHTML)

const audio1 = document.getElementById("meowcat1")

function cat_clicked() {
	parse_point +=1
	point.innerHTML = parse_point 

	audio1.currentTime =  0;
	audio1.play();
}

function buy_treat() {
	if (parse_point >= parsed_treat) {
			parse_point -= parsed_treat
			point.innerHTML = parse_point
	}
}