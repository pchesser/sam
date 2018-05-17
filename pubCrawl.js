function Stop(name, img, drinks, shooters, game) {
	var self = this;
	self.name = name;
	self.img = img;
	self.drinks = ko.observableArray(drinks);
	self.shooters = ko.observableArray(shooters);
};

function Shooter(name) {
	var self = this;
	self.name = name;
	self.url = './pressLuck.html?' + name;
}

function HomeViewModel() {
	var self = this;
	self.stops = ko.observableArray([
		new Stop('Venetian', './venetian.jpg', ['negroni', 'chanpagne'], [new Shooter('Sam'), new Shooter('Brian')]),
		new Stop('Mirage', './mirage.jpg', ['desert sunrise', 'beer'], ['Justen', 'Pat']),
		new Stop('Caesars Palace', './caesarsPalace.jpg', ['duck fart', 'beer'], ['Matt', 'Tom']),
		new Stop('Bellagio', './bellagio.jpg', ['boulivardier', 'beer'], ['Justin', 'Chris'])
	]);
};
ko.applyBindings(new HomeViewModel());