import { DiceRoller } from '../node_modules/rpg-dice-roller/lib/esm/bundle.js';
import { Utils } from './utils.js';

const utils = new Utils();

/**
 * Impetus
 *
 * @type {Impetus}
 */
const Impetus = (() => {
  /**
   *
   * @param {{}=} data
   */   
   
  class Impetus{
    /**
     * Initialises the object
     *
     * @constructor
     * @param data
     */
    constructor(data){}
    
    /**
     *
     * @param {string} notation
     * @returns {DiceRoll}
     */
    impetus(){
		var impetus_table = [
			"Mistaken identity",
			"Someone you thought was dead wasn’t",
			"Someone you thought was alive is dead",
			"Someone unexpected wants to hurt/steal from you",
			"Someone expected wants to hurt/steal from the wrong guy",
			"Someone you care about is unexpectedly in the wrong place at the wrong time",
			"Someone you thought was helping you has something else in mind",
			"A person you thought you knew turns out to be totally different",
			"A new person unexpectedly shows up to complicate",
			"A new person unexpectedly shows up to facilitate",
			"A person you trusted suddenly has a change of perspective",
			"Something explodes (figuratively or literally), but not the obvious thing",
			"The authorities get involved or turn a blind eye (whichever is worse)",
			"Random violence distracts",
			"Kidnapped (Youor someone close to you)",
			"Reinforcements arrive at opportune / inopportune moment",
			"It’s a disguise",
			"It’s a trap",
			"It’s a fake",
			"It’s a lie",
			"The nature of something you took for granted is completely opposite",
			"A shell game",
			"A superior becomes a subordinate (or opposite)",
			"Someone unexpectedly gives you a mysterious item",
			"Something unexpected suddenly finds you",
			"New adorer / tagalong",
			"Forced unexpectedly into a new responsibility",
			"An old responsibility suddenly goes away (or changes)",
			"Your immediate goal turns on its head",
			"A prop you need for success is taken away",
			"A prop you need for success is taken away",
			"A new unexpected obstacle stands in the way of your immediate goal",
			"You wake up/arrive in an unexpected place",
			"A friend becomes an enemy",
			"An enemy becomes a friend",
			"Roll two from above and combine’em"
		]
		
		var result = impetus_table[Math.floor(Math.random() * impetus_table.length)]
		
		if (result == "Roll two from above and combine’em") {
			impetus_table.pop();
			result = utils.getRandom(impetus_table, 2);
			result = utils.arrayToSentence(result);
		}
        return {
            'rolls': null,
            'total': null,
            'result': result,
            'extras': null
        }
    }
    
  }

  return Impetus;
})();

export default Impetus;