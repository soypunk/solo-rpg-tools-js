import { DiceRoller } from '../node_modules/rpg-dice-roller/lib/esm/bundle.min.js';

/**
 * Mythic
 *
 * @type {Mythic}
 */
const Mythic = (() => {
  /**
   *
   * @param {{}=} data
   */
   
  /**
   * history of log rolls
   *
   * @type {symbol}
   */
  const _chaosFactor = Symbol('chaosFactor');   
   
  class Mythic{
    /**
     * Initialises the object
     *
     * @constructor
     * @param data
     */
    constructor(data){
    	this[_chaosFactor] = 4;
    	
    	if(data) {
    		if (Number.isInteger(data.chaosFactor)) {
    			this[_chaosFactor] = data.chaosFactor;
    		}
    	}
    }
    
    /**
     * Returns the current chaos factor
     *
     * @returns {chaosFactor}
     */
    get chaosFactor(){
      return this[_chaosFactor] || 4;
    }    
    
    /**
     *
     * @param {string} notation
     * @returns {]}
     */
    fateCheck(chaosFactor){
    // create a new instance of the DiceRoller
      var roller = new DiceRoller();
      var rolls = roller.rollMany(['2d10','1d10']);
      return rolls;
    }
    
	statCheck(attribute_value=null, stat_check_modifier="", round=true) {
	  var roller = new DiceRoller();
	  attribute_value = Number(attribute_value)
	  var baseline_value = attribute_value
	  var result = ''
	  var rolls = roller.roll(`2d10${stat_check_modifier}`)
	  var total = rolls.total

	  if (total < 3) {
		  var modifier = (75 / 100) * attribute_value;
		  attribute_value = attribute_value - modifier;
		  result = "Very Weak -75%";
	  } else if (total < 5) {
		  var modifier = (50 / 100) * attribute_value;
		  attribute_value = attribute_value - modifier;
		  result = 'Weak -50%';
	  } else if (total < 7) {
		  var modifier = (10 / 100) * attribute_value;
		  attribute_value = attribute_value - modifier;
		  result = 'Less -10%';
	  } else if (total < 12) {
		  result = 'Expected Baseline';
	  } else if (total < 15) {
		  var modifier = (10 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'More +10%';
	  } else if (total < 17) {
		  var modifier = (50 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'Strong +50%';
	  } else if (total < 19) {
		  var modifier = (100 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'Very Strong +100%';
	  } else if (total < 21) {
		  result = 'PC Baseline';
	  } else if (total < 23) {
		  var modifier = (10 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'PC More +10%';
	  } else if (total < 25) {
		  var modifier = (50 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'PC Strong +50%';
	  } else if (total < 27) {
		  var modifier = (100 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'PC Very Strong +100%';
	  }

	  if (baseline_value != Number(0) && baseline_value !== null) {
	  	  if (round) {
	  	  	attribute_value = Math.round(attribute_value);
	  	  }
		  result = result + ' (' + attribute_value + ')';
	  }
	  return {
		  'rolls': rolls.output,
		  'total': total,
		  'result': result
	  }
	}    

  }

  return Mythic;
})();

export default Mythic;    