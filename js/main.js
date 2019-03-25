(() => {

	let badge = document.querySelector('img');

	function animImage() {
		TweenMax.to(badge, 1, { scaleX: 1.025, scaleY: 1.025, rotation: 50, ease:Elastic.easeinOut, onComplete: animFooterText });
	}

	function animFooterText() {
		TweenMax.to('h3', 0.7, { scaleX: 2, scaleY: 2,})
	}

	//animImage();
	//
	badge.addEventListener('mouseover', animImage);

})();