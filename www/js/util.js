function alertBox(text) {
	var iframe = document.createElement("IFRAME");
	iframe.setAttribute("src", 'data:text/plain,');
	document.documentElement.appendChild(iframe);
	window.frames[0].window.alert(text);
	iframe.parentNode.removeChild(iframe);
}

/* Get URL Parameter */
function gup(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	// alert(results);
	if (results == null) {
		return "";
	} else {
		return results[1];
	}
}

function checkInternetConnection() {
	var isOnLine = navigator.onLine;
	if (isOnLine) {
		// alert('connected');
		return true;
	} else {
		alertBox('Sie sind nicht mit dem Internet verbunden!');
		// alert('Sie sind nicht mit dem Internet verbunden!');
		return false;
	}
}

function doesConnectionExist() {
	var xhr = new XMLHttpRequest();
	// var file = "https://www.google.com/images/srpr/logo6w.png";
	var file = "http://www.rothconsulting.com/images/rc_big.gif";
	var randomNum = Math.round(Math.random() * 10000);

	xhr.open('HEAD', file + "?rand=" + randomNum, false);

	try {
		xhr.send();

		if (xhr.status >= 200 && xhr.status < 304) {
			alert('Connected !!!');
			return true;
		} else {
			alert('NOT Connected !!!');
			return false;
		}
	} catch (e) {
		alert('NOT Connected - with exception !!: ' + e);
		return false;
	}
}

function getCountry() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			$.getJSON('http://ws.geonames.org/countryCode', {
				lat : position.coords.latitude,
				lng : position.coords.longitude,
				type : 'JSON'
			}, function(result) {
				// alert(result.countryName);
				return result.countryName;
			});
		});
	}
}
