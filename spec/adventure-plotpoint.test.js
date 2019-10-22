/*global beforeEach, describe, expect, jasmine, it */
;(() => {
  'use strict';

  // require the mune library
  const { AdventureCrafter } = require('../lib/umd/bundle.js');

  describe('Adventure Crafter Plotpoint (random theme)', () => {
  	let adventure;
  	
    beforeEach(() => {
      // create a new instance of AdventureCrafter
      console.log("\nSetting up AdventureCrafter\n")
      adventure = new AdventureCrafter();
    });
    
	it(`AdventureCrafter plotpoint (random theme)`, function(){
		let result = adventure.plotpoint();
		console.log(result);
		console.log("Adventure Crafter Plotpoint ("+ result.extras.theme +" - Random):\n" + result.result + "\n" + result.extras.definition);
	});
    
  });

  describe('Adventure Crafter Plotpoint (each theme)', () => {
  	let adventure;
  	adventure = new AdventureCrafter();
  	const themes = adventure.themes;
  	
    beforeEach(() => {
      // create a new instance of AdventureCrafter
      console.log("\nSetting up AdventureCrafter\n")
      adventure = new AdventureCrafter();
    });
    
	for (const theme of themes) {
	  it(`AdventureCrafter plotpoint ($theme)`, function(){
		  console.log(theme);
		  let result = adventure.plotpoint(theme);
		  console.log(result);
		  console.log("Adventure Crafter Plotpoint ("+ result.extras.theme +"):\n" + result.result + "\n" + result.extras.definition);
	  });
	}
    
  });

})();