let countDownDate = new Date("may 18, 2024 18:00:00").getTime();

let x = setInterval(function() {
	let now = new Date().getTime();
	let distance = countDownDate - now

	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);


document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";
})

let button = document.getElementById('returnbutton');
button.addEventListener('click', function() {
	location.href = 'https://countdown-website-therese.s3.eu-north-1.amazonaws.com/index.html'
})