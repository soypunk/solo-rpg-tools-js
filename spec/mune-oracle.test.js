/*global beforeEach, describe, expect, jasmine, it */
;(() => {
  'use strict';

  // require the mune library
  const { Mune } = require('../lib/umd/bundle.js');

  describe('Mune Oracle', () => {
  	const likelihoods = [0, 1, 2];  	
  	let mune;
  	
    beforeEach(() => {
      // create a new instance of the Mune
      console.log("\nSetting up Mune\n")
      mune = new Mune();
    });
    
    for(let i = 0; i < likelihoods.length; i++){
    	let likelihood = likelihoods[i];
    	it(`Mune Oracle (${likelihood})`, function(){    	
			console.log("Mune Likelihood Factor: " + likelihood);			
			let result = mune.oracle(likelihoods[i]);
			console.log(result);
			console.log("Mune Oracle Result: " + result.result);
		});
    }
    
  });

})();