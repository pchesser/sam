function Drink(name, description, picture) {
    var self = this;
    self.name = name;
    self.description = description;
    self.picture = picture;
};


var water = new Drink('Water', "Optional, but recommended. We're in the desert after all. No, I'M NOT MOTHERING YOU! Fine. Have it your way...", "./Water.jpg");
var bellini = new Drink('Bellini', "Because they have a damn Bellini Bar. Don't act like you're too good for it", "./Bellini.jpg");
var whiskey = new Drink('Whiskey Drink', "Time to man up and make up for that Bellini. Can be taken straight, or as part of a mixed drink.", "./Whiskey.jpg");
var royMunson = new Drink('Roy Munson', "After one of these, we should all look this good.", "./RoyMunson.jpg");
var beer = new Drink('Beer', "Beer of your choice. Feel free to use this opportunity to downshift, or speed it up with a Double IPA", "./Beer.jpg");
var caesarsRitz = new Drink("Caesar's Ritz", "We have no idea what this drink actually is, but it sounds classy AF.", "./CaesarsRitz.jpg");
var duckFart = new Drink('Duck Fart', "This is what Amanda and Pat toasted with at their wedding at Caesars due to a miscommunication with the wait staff. So now we all have to drink it.", "./DuckFart.jpg");
var shootersChoice = new Drink("Shooter's Choice", "The last Shooter is rewarded for his patience by choosing the final drink. We all have to do the same drink, except for Sam, who may be punished for his behavior up to this point with any shot up to 100 proof", "./Shooter.jpg");

function DrinkStop(location, menu, drinks) {
    var self = this;
    self.location = location;
    self.menu = menu;
    self.drinks = drinks;
};

var venetian = new DrinkStop('Venetian', 'https://www.venetian.com/restaurants/bellini-bar.html', [bellini, whiskey, water]);
var mirage = new DrinkStop('Mirage', ' https://www.mirage.com/en/restaurants/the-still.html#/Location', [royMunson, beer, water]);
var caesars = new DrinkStop('Caesars Palace', 'https://www.caesars.com/caesars-palace/things-to-do/lobby-bar#.WwXmTVMvx24', [caesarsRitz, duckFart, water]);
var bellagio = new DrinkStop('Bellagio', 'https://www.bellagio.com/en/nightlife/sports-bar-lounge.html', [beer, shootersChoice, water]);

var lookup = {
    "Venetian": venetian,
    "Mirage": mirage,
    "Caesars": caesars,
    "Bellagio": bellagio
};


var viewModel = function() {
    var parm = window.location.href.split('?')[1];
    var match = lookup[parm];
    return match;
}


ko.applyBindings(viewModel());