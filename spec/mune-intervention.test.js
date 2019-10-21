/*global beforeEach, describe, expect, jasmine, it */
;(() => {
  'use strict';

  // require the mune library
  const { Mune } = require('../lib/umd/bundle.js');

  describe('Mune Intervention', () => {
  	const likelihoods = [0, 1, 2];  	
  	let mune;
  	
    beforeEach(() => {
      // create a new instance of Mune
      console.log("\nSetting up Mune\n")
      mune = new Mune();
    });
    
	it(`Mune Intervention`, function(){
		let result = mune.intervention();
		console.log(result);
		console.log("Mune Intervention: " + result.result);
	});
    
  });

})();