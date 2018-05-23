function Stop(name, img, drinks, shooters, game) {
	var self = this;
	self.name = name;
	self.img = img;
	self.drinks = ko.observableArray(drinks);
	self.shooters = ko.observableArray(shooters);
};

function HomeViewModel() {
	var self = this;
	self.stops = ko.observableArray([
		new Stop('Venetian', './venetian.jpg', ['champagne', 'negroni'], [Globals.Shooters.Sam, Globals.Shooters.Brian]),
		new Stop('Mirage', './mirage.jpg', ['desert sunrise', 'beer'], [Globals.Shooters.Justen, Globals.Shooters.Pat]),
		new Stop('Caesars Palace', './caesarsPalace.jpg', ['duck fart', 'beer'], [Globals.Shooters.Matt, Globals.Shooters.Tom]),
		new Stop('Bellagio', './bellagio.jpg', ['boulivardier', 'beer'], [Globals.Shooters.Justin, Globals.Shooters.Chris])
	]);
};

ko.applyBindings(new HomeViewModel());