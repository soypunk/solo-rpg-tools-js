# Solo/GM RPG Tools

This is a personal collection of JavaScript tools I use to for role playing games. While the general purpose is solo play most tools work just fine as inspiration generators for a typical GM as well.

## Building

Run `yarn install` and `yarn build`.

## Using

I need to document all the various tools. I've not used these on a web page or with nodeJS app - instead I've used them with Drafts on iOS/Mac using the OS's built-in JavaScript engine.

Generally though, you can do something like this:

    require('lib/umd/bundle.min.js');

	// setup the basics
	var mythic = new soloRPGTools.Mythic();
    var odds = mythic.odds;
    var oddsModifiers = mythic.oddsModifiers;
	
	// here you do some magic to get user input - in my case I use Drafts Action's UI 
	// to gather what I need
	var chaosValue = 4;
	var oddsValue = 4; // 50/50
	var yesFavorsPCValue = true;
	
	// Mythic Variations II Fate Check    
    var result = mythic.fateCheck(
    	chaosValue,
    	oddsModifiers[oddsValue],
    	yesFavorsPCValue);
    
    // display the output back to the user
    console.log("Fate Check ("+result.total+") " + result.result + "\n";)
