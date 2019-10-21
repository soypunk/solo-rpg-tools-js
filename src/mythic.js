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
     * @returns {DiceRoll}
     */
    fateCheck(chaosFactor){
    // create a new instance of the DiceRoller
      var roller = new DiceRoller();
      var rolls = roller.rollMany(['2d10','1d10']);
      return rolls;
    }

  }

  return Mythic;
})();

export default Mythic;    