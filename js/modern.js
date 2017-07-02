var j = jQuery.noConflict();


// для определения поддержки canvas
if (Modernizr.canvas) {
	console.log('Canvas ' + !!Modernizr.canvas);
}


// для определения поддержки html5 video
if (Modernizr.video) {
	if (Modernizr.video.webm) {
		console.log('Video.webm ' + !!Modernizr.video.webm);
	} else if (Modernizr.video.ogg) {
		console.log('Video.ogg ' + !!Modernizr.video.ogg);
	} else if (Modernizr.video.h264){
		console.log('Video.h264 ' + !!Modernizr.video.h264);
	}
}


// для определения поддержки локального хранилища
if (window.localStorage) {
	console.log('localstorage ' + !!window.localStorage);
}


// Для проверки поддержки фоновых вычислений
if (window.Worker) {
	console.log('worker ' + !!window.Worker);
}


// Для проверки поддержки оффлайновых приложений 
if (window.applicationCache) {
	console.log('applicationCache ' + !!window.applicationCache);
}


// Для проверки поддержки geolocation 
if (window.navigator.geolocation) {
	console.log('geolocation ' + !!window.navigator.geolocation);
}


// Для проверки поддержки новых полей input 
if (Modernizr.inputtypes.url) {
	console.log('input type url ' + !!Modernizr.inputtypes.url);
}


// Для проверки поддержки placeholder
if (Modernizr.input.placeholder) {
	console.log('placeholder ' + !!Modernizr.input.placeholder);
}

// Для проверки поддержки autofocus
if (Modernizr.input.autofocus) {
	console.log('autofocus ' + !!Modernizr.input.autofocus);
}


// Для проверки поддержки mikrodata
if (document.getItems) {
	console.log('getItems ' + !!document.getItems);
}


if (window.history) {
	console.log('history API ' + !!window.history);
}