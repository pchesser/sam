    function Spread(min, max) {
    	var self = this;
    	self.min = min;
    	self.max = !!max ? max : Infinity;

    	self.isInRange = function (numerator, denominator) {
    		if (!!denominator || denominator != 0) {
    			let quotient = numerator / denominator;
    			return quotient >= self.min && quotient <= self.max;
    		} else {
    			return numerator >= self.min;
    		}
    	};
    };

    function Payout(shooterCutPercent, groupCutPercent, spread, bet) {
    	var self = this;
    	self.shooterCutPercent = shooterCutPercent;
    	self.formattedShooterCutPercent = shooterCutPercent * 100 + '%';
    	self.groupCutPercent = groupCutPercent;
    	self.formattedGroupCutPercent = groupCutPercent * 100 + '%';
    	self.spread = spread;
    	self.betAmnt = bet;

    	self.calcFinalPotSpread = function () {
    		let max = self.spread.max === Infinity ? '+' : Math.floor(self.spread.max * self.betAmnt());
    		let min = Math.ceil(self.spread.min * self.betAmnt());
    		let minFormatted = '$' + min + '.00';
    		let maxFormatted = max === '+' ? max : ' - $' + max + '.00';
    		return minFormatted + maxFormatted;
    	};

    	self.calcFinalShooterAmnt = function (amount) {
    		return '$' + Math.floor(amount * self.shooterCutPercent) + '.00';
    	};

    	self.calcFinalGroupAmnt = function (amount) {
    		return '$' + Math.ceil(amount * self.groupCutPercent) + '.00';
    	};
    };

    function PayoutViewModel() {
    	var self = this;
    	self.betAmnt = ko.observable(80);
    	self.finalPot = ko.observable(0);
    	self.spreads = {
    		"firstTier": new Spread(0, 1),
    		"secondTier": new Spread(1.01, 1.5),
    		"thirdTier": new Spread(1.51, 2.8),
    		"fourthTier": new Spread(2.81)
    	};

    	self.payouts = ko.observableArray(
    			[
    				new Payout(0, 1, self.spreads.firstTier, self.betAmnt),
    				new Payout(.1, .9, self.spreads.secondTier, self.betAmnt),
    				new Payout(.3, .7, self.spreads.thirdTier, self.betAmnt),
    				new Payout(.5, .5, self.spreads.fourthTier, self.betAmnt)
    			]);

    	self.getFinalSplit = function () {
    		return self.payouts().filter(p => p.spread.isInRange(self.finalPot(), self.betAmnt()))[0] || null;
    	};

    	self.calcShooterCut = function () {
    		let payout = self.getFinalSplit();
    		return payout === null ? 0 : payout.calcFinalShooterAmnt(self.finalPot());
    	};

    	self.calcGroupCut = function () {
    		let payout = self.getFinalSplit();
    		return payout === null ? 0 : payout.calcFinalGroupAmnt(self.finalPot());
    	};
    };

    ko.applyBindings(new PayoutViewModel());