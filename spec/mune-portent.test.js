/*global beforeEach, describe, expect, jasmine, it */
;(() => {
  'use strict';

  // require the mune library
  const { Mune } = require('../lib/umd/bundle.js');

  describe('Mune Portent', () => {
  	const likelihoods = [0, 1, 2];  	
  	let mune;
  	
    beforeEach(() => {
      // create a new instance of the Mune
      console.log("\nSetting up Mune\n")
      mune = new Mune();
    });
    
	it(`Mune Portent`, function(){
		let result = mune.portent();
		console.log(result);
		console.log("Mune Portent: " + result.result);
	});
    
  });

})();