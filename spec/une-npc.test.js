/*global beforeEach, describe, expect, jasmine, it */
;(() => {
  'use strict';

  // require the mune library
  const { Une } = require('../lib/umd/bundle.js');

  describe('Une', () => {
  	let une;
  	
    beforeEach(() => {
      // create a new instance of Une
      console.log("\nSetting up Une\n")
      une = new Une();
    });
    
	it(`Une NPC`, function(){
		let result = une.npc();
		console.log(result);
		console.log("Une NPC: " + result.result);
	});
    
  });

})();