/*global beforeEach, describe, expect, jasmine, it */
;(() => {
  'use strict';

  // require the mune library
  const { Mune } = require('../lib/umd/bundle.js');

  describe('Mune TWENE', () => {
  	const likelihoods = [0, 1, 2];  	
  	let mune;
  	
    beforeEach(() => {
      // create a new instance of the Mune
      console.log("\nSetting up Mune\n")
      mune = new Mune();
    });
    
	it(`Mune TWENE`, function(){
		let result = mune.twene();
		console.log(result);
		console.log("Mune TWENE: " + result.result);
	});
    
  });

})();