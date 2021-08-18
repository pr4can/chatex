var data = [3, 2, 5, 3, 19, 12, 20];
var labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

let charts = document.querySelectorAll('.chart');

charts.forEach(chart => {
	let ctx = chart.getContext("2d");
	let gradient = ctx.createLinearGradient(0, 0, 0, 30);
    gradient.addColorStop(0, 'rgba(30,95,255,1)');   
    gradient.addColorStop(1, 'rgba(30,90,255,0)');
	graphInitialization(ctx, data, labels, gradient);
});

function graphInitialization(ctx, data, labels, gradient) {
	new Chart(ctx, {
		type: 'line',
		data: {
			labels: labels,
			datasets: [{
				data: data,
				tension: 0.2,
				backgroundColor: gradient,
				borderColor: '#1E5AFF',
				borderWidth: 1,
			}]
		},
		options: {
			legend: {
				display: false
			},
			scales: {
				yAxes: [{
					display: false
				}],
				xAxes: [{
					display: false
				}]
			},
			elements: {
				point:{
					radius: 0
				}
			}	
		}
	});
}


