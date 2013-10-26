// Controller fuer Events
var LocalTVAppController = function() {

	// Stationen anzeigen ohne Karte
	function showStation() {

		stations = LocalTVApp.stations.getStations();

		$("#stationListCH").empty();
		$("#stationListDE").empty();
		$("#stationListAT").empty();
		$("#stationListDiv").empty();
		for (var i = 0; i < stations.length; i++) {

			country = stations[i].country;

			$("#stationList" + country).append('<li id="list' + i + '">' + //
			'<a data-role="button" data-transition="slide" onclick="openSiteWhenConnected(\'' + stations[i].url + '\')" href="#" id="link' + i + '">' + //
			'<img src="' + stations[i].icon + '">' + //
			stations[i].name + //
			'</a>' + //
			'</li>'//
			);
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

function openSiteWhenConnected(theUrl) {
	// alert(theUrl);
	if (checkInternetConnection()) {

		if (theUrl.indexOf("m3u8") > -1) {
			location.href = theUrl;
		} else {
			location.href = 'website.html?url=' + theUrl;
		}
	}
}
