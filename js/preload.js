/* Javascript for Preloader Animation and Page navigation */

function delay(url) {
    window.setTimeout( () =>{
    	window.location = url 
    }, 800);
}

// Check the body content at this point and uncover preloader, check all resources are loaded
let document_state = setInterval(function () {
	if(document.readyState === "complete") {
		clearInterval(document_state);
		let bodyTag = document.getElementById("main-body");
		bodyTag.className += " loaded";

		window.setTimeout(() => {
			let element = document.getElementById("preloader");
			element.style.display = "none";
		}, 1000);
	}
}, 10);
