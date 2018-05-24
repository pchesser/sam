function Stop(name, img, drinkInfos, shooters, game) {
	var self = this;
	self.name = name;
	self.img = img;
	self.drinkInfos = ko.observableArray(drinkInfos);
	self.shooters = ko.observableArray(shooters);
};

function DrinkInfo(url, name) {
	var self = this;
	self.url = url;
	self.name = name;
}

function HomeViewModel() {
	var self = this;
	self.stops = ko.observableArray([
		new Stop('Venetian', './venetian.jpg', [new DrinkInfo('./drinks.html?Venetian', 'Bellini'), new DrinkInfo('./drinks.html?Venetian', 'Whiskey')], [Globals.Shooters.Sam, Globals.Shooters.Brian]),
		new Stop('Mirage', './mirage.jpg', [new DrinkInfo('./drinks.html?Mirage', 'Roy Munson'), new DrinkInfo('./drinks.html?Mirage', 'Beer')], [Globals.Shooters.Justen, Globals.Shooters.Pat]),
		new Stop('Caesars Palace', './caesarsPalace.jpg', [new DrinkInfo('./drinkStop.html?Caesars', 'Caesars Ritz'), new DrinkInfo('./drinkStop.html?Caesars', 'Duck Fart')], [Globals.Shooters.Matt, Globals.Shooters.Tom]),
		new Stop('Bellagio', './bellagio.jpg', [new DrinkInfo('./drinks.html?Bellagio', 'Martini'), new DrinkInfo('./drinks.html?Bellagio','Shooter\'s Choice')], [Globals.Shooters.Justin, Globals.Shooters.Chris])
	]);
};

ko.applyBindings(new HomeViewModel());