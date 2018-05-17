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
		new Stop('Mirage', './Mirage.jpg', ['desert sunrise', 'beer'], [new Shooter('Justen'), new Shooter('Pat')]),
		new Stop('Caesars Palace', './caesarsPalace.jpg', ['duck fart', 'beer'], [new Shooter('Matt'), new Shooter('Tom')]),
		new Stop('Bellagio', './bellagio.jpg', ['boulivardier', 'beer'], [new Shooter('Justin'), new Shooter('Chris')])
	]);
};
ko.applyBindings(new HomeViewModel());