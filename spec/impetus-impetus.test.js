/*global beforeEach, describe, expect, jasmine, it */
;(() => {
  'use strict';

  // require the mune library
  const { Impetus } = require('../lib/umd/bundle.js');

  describe('Impetus', () => {
  	let impetus;
  	
    beforeEach(() => {
      // create a new instance of Impetus
      console.log("\nSetting up Impetus\n")
      impetus = new Impetus();
    });
    
	it(`Impetus`, function(){
		let result = impetus.impetus();
		console.log(result);
		console.log("Impetus: " + result.result);
	});
    
  });

})();