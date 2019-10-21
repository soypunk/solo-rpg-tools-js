/*global beforeEach, describe, expect, jasmine, it */
;(() => {
  'use strict';

  // require the dice-roller library
  const { Mune } = require('../lib/umd/bundle.js');

  describe('Mune NPC Starting Attitude', () => {
  	const likelihoods = [0, 1, 2];  	
  	let mune;
  	
    beforeEach(() => {
      // create a new instance of Mune
      console.log("\nSetting up Mune\n")
      mune = new Mune();
    });
    
	it(`Mune NPC Starting Attitude`, function(){
		let result = mune.npcStartingAttitude();
		console.log(result);
		console.log("Mune NPC Starting Attitude: " + result.result);
	});
    
  });

})();