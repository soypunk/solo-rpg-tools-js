/*global beforeEach, describe, expect, jasmine, it */
;(() => {
  'use strict';

  // require the Mythic library
  const { Mythic } = require('../lib/umd/bundle.js');

  describe('Mythic Fate Check', () => {
  	const chaosFactors = [3, 4, 5, 6];  	
  	let mythic;
  	
    beforeEach(() => {
      // create a new instance of Mythic
      console.log("\nSetting up Mythic\n")
      mythic = new Mythic({
      	'chaosFactor': 4
      });
      console.log("Mythic Default Chaos Factor: " + mythic.chaosFactor);
    });
    
    for(let i = 0; i < chaosFactors.length; i++){
    	it(`mythic fate check`, function(){
			console.log("Chaos Factor: " + chaosFactors[i]);
			console.log("Mythic Fate Check: " + mythic.fateCheck(chaosFactors[i]));
		});
    }
    
  });

})();