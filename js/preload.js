/* Javascript for Preloader Animation and Page navigation */

function delay(url) {
    window.setTimeout( () =>{
    	window.location = url 
    }, 1200);
}

// Check the body content at this point and uncover preloader, check all resources are loaded
let documentState = setInterval(function () {

	if(document.readyState === "complete") {
		let timeWait = 1000;
		clearInterval(documentState);
		let bodyTag = document.getElementById("main-body");
		bodyTag.className += " loaded";
		if (bodyTag.className.includes('home')) {
			timeWait = 6000;
		}

		window.setTimeout(() => {
			let element = document.getElementById("preloader");
			element.style.display = "none";
		}, timeWait);
	}
}, 10);
