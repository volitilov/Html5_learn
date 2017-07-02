var j = jQuery.noConflict();

j(function() {
	var can = document.getElementById('test_canvas');
	var ctx = can.getContext('2d');

	function drawGrid(x, y, color) {
		ctx.beginPath();
		for (x; x < can.width; x += 10) {
			ctx.moveTo(x, 0);
			ctx.lineTo(x, 500);
		}

		for (y; y < can.height; y += 10) {
			ctx.moveTo(0, y);
			ctx.lineTo(700, y);
		}

		ctx.strokeStyle = color;
		ctx.stroke();
	}

	drawGrid(0.5, 0.5, '#eee');

	
	ctx.beginPath();
	ctx.moveTo(0, 40);
	ctx.lineTo(600, 40);
	ctx.moveTo(620, 40);
	ctx.lineTo(690, 40);

	ctx.moveTo(680, 35);
	ctx.lineTo(690, 40);
	ctx.moveTo(680, 45);
	ctx.lineTo(690, 40);


	ctx.moveTo(40, 0);
	ctx.lineTo(40, 400);
	ctx.moveTo(40, 420);
	ctx.lineTo(40, 490);
	ctx.moveTo(35, 480);
	ctx.lineTo(40, 490);
	ctx.moveTo(45, 480);
	ctx.lineTo(40, 490);

	ctx.font = '13px sans-serif';
	ctx.fillText("x", 607, 43);
	ctx.fillText("y", 37, 413);


	ctx.strokeStyle = "#02a8f3";
	ctx.stroke();
})