// Controller fuer Events
var LocalTVAppController = function() {

	// Stationen anzeigen ohne Karte
	function showStation() {

		stations = LocalTVApp.stations.getStations();

		$("#stationList").empty();
		for (var i = 0; i < stations.length; i++) {

			ui_child = 'ui-child';
			country = stations[i].country;

			if (i == 0) {
				ui_child = 'ui-first-child';
			} else if (i == stations.length - 1) {
				ui_child = 'ui-last-child';
			}

			var theUrl = "";
			if (stations[i].url.indexOf('.m3u8') != -1) {
				theUrl = "javascript:openWhenConnected(\'" + stations[i].url + "\');";
			} else {
				theUrl = "website.html?url=" + encodeURIComponent(stations[i].url);
			}

			$("#stationList" + country).append(
					'<li class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ' + ui_child
							+ ' ui-btn-up-c" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c">' //
							+ '<div class="ui-btn-inner ui-li">'//
							+ '<div class="ui-btn-text">'//
							+ '<a class="ui-link-inherit" href="' + theUrl + '" data-transition="slide">' //
							+ '<img class="ui-li-thumb" src="' + stations[i].icon + '">' //
							+ '<h2 class="ui-li-heading">' + stations[i].name + '</h2>'//
							+ '</a>'//
							+ '</div>' + '<span class="ui-icon ui-icon-arrow-r ui-icon-shadow"></span>'//
							+ '</div>'//
							+ '</li>');
		}
	}

	return {
		initialize : function() {
			console.log("***** showStation");
			showStation();
		}
	};
};

// Controller aufrufen, wenn pageinit von jQM geworfen wird.
$(document).on("pageinit", "#page-list", function(event) {
	LocalTVApp.controller.initialize();
	console.log("Initialize called in Controller");
});

function showUrl(url) {
	$("#theURL").empty();
	$("#theURL").append('');
}

function openWhenConnected(url) {
	// alert(url);
	if (checkInternetConnection()) {
		location.href = url;
	}
}
