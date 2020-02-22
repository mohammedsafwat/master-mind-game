/* Javascript for MasterMind Gems - Front/Main page loading */

function showPage(id) {
	// Internal page navigation only
	let element = document.getElementById(id);
	element.style.display="grid";
	window.location = "#" + id;
}

function hidePage(id) {
	let element = document.getElementById(id);
	element.style.display="none";

}

function hideAndShow(hideId, showId) {
	let currentPg = document.getElementById(hideId);
	if (currentPg.classList.contains("onstart-load")) {
		currentPg.classList.remove("onstart-load");
	}
	currentPg.className += " unload";
	window.setTimeout( () => {
		hidePage(hideId);
		showPage(showId);

		// remember to remove the unload class from the previous element
		if (currentPg.classList.contains("unload")) {
			currentPg.classList.remove("unload");
		}

	}, 1400);
}