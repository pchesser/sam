var Globals = Globals || {};

function Shooter(name, message) {
    var self = this;
    self.name = name;
    self.url = './pressLuck.html?' + name;
    self.message = message;
    self.img = './' + name + '.jpg';
};

Globals.Shooters = function() {   

    let sam = new Shooter('Sam', 'Sam has promised that if he doesn\'t win the most money tonight, he will be dressed like this for the wedding ceremony');
    let tom = new Shooter('Tom', 'Tom is the biggest flight risk, known for disappearing in the middle of an outing. Likely to do so using the camouflage technique seen above');
    let justen = new Shooter('Justen', 'Justen is extremely likely to puke. Hopefully he does so at Belagio, so he can do so in the fountain to minimize cleanup');
    let matt = new Shooter('Matt', 'He works at Netflix or something. Sam was supposed to provide a bio and pic, but failed. So. Yeah. Here\'s a picture of BoJack Horseman');
    let brian = new Shooter('Brian', 'Most likely not to want to leave any location. Also most likely to try to cheat us by stealing extra chips. Should be watched closely');
    let justin = new Shooter('Justin', 'Justin was once the Ring-Master of a freakshow. He was also the Gaffer. And the Bearded-Lady. Sam was also supposed to provide a pic for Justin, but did not')
    let chris = new Shooter('Chris', 'Chris is most likely to lead us away from this game and to the strip club. He is also most likely to get us kicked out of that strip club');
    let pat = new Shooter('Pat', 'An Adonis who has clearly not been touched by Father Time, but may have been touched by someone at day care. That moustache is real');

    return {
        Sam: sam,
        Tom: tom,
        Justen: justen,
        Matt: matt,
        Brian: brian,
        Justin: justin,
        Chris: chris,
        Pat: pat
    }
}();