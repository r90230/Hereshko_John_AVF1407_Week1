var temps = "http://api.wunderground.com/api/46f5f78c97801317/forecast/q/autoip.json";

//basic additions

var localWeather = Ti.UI.createLabel({
	text: "Local Weather",
	font: {fontSize: 30, fontWeight: "bold"},
	top: 50,
	left: 20
});

mainView.add(localWeather);

//basic additions - end

//HTTP Functions

var remoteResponse = function(e){
	if (Ti.Network.online) {
	var json = JSON.parse(this.responseText);

for(i=0;i<5;i++){	
	
	var day = json.forecast.txt_forecast.forecastday[i].title;
	var forecast = json.forecast.txt_forecast.forecastday[i].fcttext;
	var weatherImage = json.forecast.txt_forecast.forecastday[i].icon_url;
	var balancer = i * 115;
	
	var postDay = Ti.UI.createLabel({
		text: day,
		color: "#ff6600",
		top: balancer + 120,
		left: 20
		});
		
	var postForecast = Ti.UI.createLabel({
		text: forecast,
		top: balancer + 138,
		color: "ff0000",
		left: 145,
		width: 160
	});
		
	var postImage = Ti.UI.createImageView({
		image: weatherImage,
		top: balancer + 145,
		left: 35
	});
		
	balancer = balancer + 50;
	
	mainView.add(postImage, postDay, postForecast);
	
	}	
	//end for loop
} else {
	Ti.API.debug("Status: " + this.status);
	Ti.API.debug("Response: " + this.responseText);
	Ti.API.debug("Error: " + e.error);
	alert("There was an error retrieving data. Please try again later.");
};

};
var remoteError = function(e){
	Ti.API.debug("Status: " + this.status);
	Ti.API.debug("Response: " + this.responseText);
	Ti.API.debug("Error: " + e.error);
	alert("There was an error.");
};

var xhr = Ti.Network.createHTTPClient({
	onload: remoteResponse,
	onerror: remoteError,
	timeout: 20000
});

xhr.open("GET", temps);
xhr.send();

//HTTP Functions - end