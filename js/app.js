// 3D Scroll

let     zSpacing = -1000,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
        lastPos = zSpacing / frames.length,
		zVals = []

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top;

	lastPos = top;

	frames.forEach(function(n, i) {
		zVals.push((i * zSpacing) + zSpacing);
		zVals[i] += delta * frames.length / -1.1;
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < Math.abs(zSpacing) / 30 ? 1 : 0;
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	});

};


document.body.setAttribute('style', `height: ${window.innerHeight + zSpacing * -1}px;`);

window.scrollTo(0, 1);

// Audio

let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
	audio.pause()
}
