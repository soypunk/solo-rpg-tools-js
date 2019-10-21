/*global beforeEach, describe, expect, jasmine, it */
;(() => {
  'use strict';

  // require the dice-roller library
  const { Mythic } = require('../lib/umd/bundle.js');

  describe('Mythic Stat Check', () => {
  	const chaosFactors = [3, 4, 5, 6];  	
  	let mythic;
  	
    beforeEach(() => {
      // create a new instance of Mythic
      console.log("\nSetting up Mythic\n")
      mythic = new Mythic({
      	'chaosFactor': 4
      });
    });
    
	it(`mythic stat check: 4`, function(){
		var statCheckResult = mythic.statCheck(4);
		console.log(statCheckResult)
		console.log("Mythic Stat Check: " + statCheckResult.result);
	});
	
	it(`mythic stat check: 10, strong attribute`, function(){
		var statCheckResult = mythic.statCheck(10, "+2");
		console.log(statCheckResult)
		console.log("Mythic Stat Check: " + statCheckResult.result);
	});	
    
  });

})();