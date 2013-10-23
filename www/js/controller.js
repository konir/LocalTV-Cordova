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
				theUrl = 'javascript:openWhenConnected(\'' + stations[i].url + '\');';
				// theUrl = "javascript:openWhenConnected(\'" + stations[i].url + "\');";
			} else {
				theUrl = 'javascript:openWhenConnected(\'website.html?url=' + encodeURIComponent(stations[i].url) + '\');';
				// theUrl = "website.html?url=" + encodeURIComponent(stations[i].url);
			}

			$("#stationList" + country).append('<li data-theme="c">' //
					+ '<a href="' + theUrl + '" data-transition="slide">'//
					+ '<img class="ui-li-thumb" src="' + stations[i].icon + '">' //
					+ '<h2 class="ui-li-heading">' + stations[i].name + '</h2>'//
					+ '</a>'//
					+ '</li>');
		}
		$('ul').listview('refresh');
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
