import { DiceRoller } from '../node_modules/rpg-dice-roller/lib/esm/bundle.js';
import { Utils } from './utils.js';

const utils = new Utils();

/**
 * LocationCrafter
 *
 * @type {Location}
 */
const LocationCrafter = (() => {
  /**
   *
   * @param {{}=} data
   */   
   
  class LocationCrafter{
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
     * @returns {result}
     */
	specialElement() {
        var themes_table = {
            1:  'SUPERSIZE: Roll in the Category again (if you get Special again, treat it as Expected). Whatever Element is generated, make it biggie size, more than what is expected. Take the Element up to the next level, or as grand as you can, while still making sense within the Scene. For instance, if the Category is Locations, and the Element generated is “pool,” where you originally may have envisioned this as a pond you now treat it as a lake.',
            6:  'BARELY THERE: Roll in the Category again (if you get Special again, treat it as Expected). Whatever Element is generated, minimize it as much as possible. Whatever you would have described to represent this Element, take it down a notch or two. If it’s an Encounter, such as an enemy, maybe it is wounded or of a lesser nature than usual. If it’s a Location, maybe it is badly in need of repair or is unusually small.',
           11:  'REMOVE ELEMENT: Roll in the Category again (if you get Special again, treat it as Expected), and cross that Element out and remove it from the Category list. You will still use it for this Scene, but the Category list has now been altered for future rolls. If the Element is Unique, then this result has no effect (as Unique Elements are crossed off anyway).',
           16:  'ADD ELEMENT: Add a new Element to this Category, tacking it on to the end of the list. Generate the new Element by treating it like a Random Element and rolling for a description of it on the Complex Question Description Tables. The new Element is then added to the Category list and is treated as though it was rolled for this scene. This is identical to a Random Element Special result (see below), except that the Element generated is added to the Category list to possibly be encountered again later.',
           26:  'THIS IS BAD: Roll in the Category again (if you get Special again, treat it as Expected). Whatever you get, it is bad for the characters. For instance, if it’s an Encounter, it is probably something that is harmful to the characters. If it’s a Location, maybe the place is very dark and treacherous. If it’s an Object, maybe it’s unstable and about to explode. Not everything is dangerous, it could just be finding an otherwise useful Object that is broken. Go with whatever modification to the Element seems most obvious to you. If you’re not sure how to make the Element bad, then roll on a Complex Question Table for inspiration.',
           31:  'THIS IS GOOD: Roll in the Category again (if you get Special again, treat it as Expected). Whatever you get, it is something good for the characters. Whether it’s a Location, Encounter, or Object, it is an Element that will be helpful or useful to the characters. Go with whatever modification to the Element seems most obvious to you. If you’re not sure how to make the Element good, then roll on a Complex Question Table for inspiration.',
           36:  'MULTI-ELEMENT: Roll twice on this Category list (if you get Special Element again, treat it as an Expected Element), and allow both of them into the scene together. If the Category is Location, and the Elements are “pool” and “stony chamber,” maybe this is a chamber with an ornate fountain in it.',
           51:  'EXIT HERE: This Location, in addition to whatever else it contains, also holds an exit from the Region, if this is possible. Maybe it’s a back door out of the mansion, or another exit from the cave. If this result makes no sense, ignore it and treat this as an Expected Element.',
           61:  'RETURN: Whatever else this Location contains, it also has access to another, previously encountered Location. This is only possible if that other location had a way to reach this one ... in other words, it had other doors or access that the characters had not yet explored. If more than one Location Element matches, then determine which one it is randomly. If this result makes no sense, ignore it and treat this as an Expected Element.',
           71:  'GOING DEEPER: Instead of adding one Progress Point for this Category, add three instead. Otherwise, treat this result as an Expected Element.',
           76:  'COMMON GROUND: Eliminate three Progress Points for this Category (don’t record this occurrence and eliminate two more). Otherwise, treat this result as an Expected Element.',
           81:  ' RANDOM ELEMENT: Treat this Special Element like a normal Random Element. As needed, ask the Complex Questions, “What does it look like?” and/or “What does it do?” and roll on the Description and Action tables, interpreting your results.'
        }
		var roller = new DiceRoller();
        var rolls = roller.roll('1d%')
        var result = themes_table[utils.getClosestKey(themes_table, rolls.total)]

        return {
            'rolls': rolls,
            'total': rolls.total,
            'result': result,
            'extras': false
        }
	}
    
  }

  return LocationCrafter;
})();

export default LocationCrafter;