Titanium.UI.setBackgroundColor('#000');

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var mainView = Ti.UI.createScrollView({
	backgroundColor: "#f3f3f3",
	backgroundImage: "skyPic.jpg",
	showVerticalScrollIndicator: true
});

var addOn = require("resource");

mainWin.add(mainView);
mainWin.open();
