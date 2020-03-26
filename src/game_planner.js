import { DiceRoller } from '../node_modules/rpg-dice-roller/lib/esm/bundle.js';
import { Utils } from './utils.js';

const utils = new Utils();

/**
 * GamePlanner
 *
 * @type {GamePlanner}
 */
const GamePlanner = (() => {
  /**
   *
   * @param {{}=} data
   */   
   
  class GamePlanner{
    /**
     * Initialises the object
     *
     * @constructor
     * @param data
     */
    constructor(data){}
    
    get tables() {
    	return {
    		1: "scenario_type",
    		2: "investigation_type",
    		3: "survival_type",
    		4: "exploration_type",
    		5: "assault_type",
    		6: "trade_type",
    		7: "sacrifice_type",
    		8: "what_happened",
    		9: "macguffin",
    	   10: "weird_item",
    	   11: "threat",
    	   12: "who",
    	   13: "trap",
    	   14: "creeping_doom",
    	   15: "natural_disaster",
    	   16: "hordes_of_the_things",
    	   17: "alien_structure",
    	   18: "abandoned_structure",
    	   19: "natural_phenomena",
    	   20: "assassin",
    	   21: "space_exploration",
    	   22: "mental",
    	   23: "urban",
    	   24: "stronghold",
    	   25: "murder",
    	   26: "uprising",
    	   27: "kidnap",
    	   28: "war",
    	   29: "technological",
    	   30: "small_expensive_item",
    	   31: "rare_item",
    	   32: "cargo",
    	   33: "technology",
    	   34: "prisoners",
    	   35: "star_ships",
    	   36: "money",
    	   37: "livelihood",
    	   38: "yourself",
    	   39: "an_entire_people",
    	   40: "hopes_and_dreams",
    	   41: "time",
    	   42: "moved",
    	   43: "skills",
    	   44: "failure"
    	}
    }
    
    get scenario_type_items() {
    	return [
			"Investigation",
			"Survival",
			"Exploration",
			"Assault",
			"Trade",
			"Sacrifice"    
    	]
    }
    
    get scenario_type_next() {
    	return [
			2,
			3,
			4,
			5,
			6,
			7
    	]
    }
    
    get investigation_type_items() {
    	return [
    		"Where are they",
    		"What happened",
    		"Where is it",
    		"What is this",
    		"How do we stop it",
    		"Who did this"
    	]
    }
    
    get investigation_type_next() {
    	return [
			4,
			8,
			9,
		   10,
		   11,
		   12
    	]
    }
    
    get survival_type_items() {
    	return [
    		"Get away from it",
    		"Trapped",
    		"Creeping doom",
    		"Natural disaster",
    		"Hordes of the things",
    		"Assassin"
    	]
    }
    
    get survival_type_next() {
    	return [
		   11,
		   13,
		   14,
		   15,
		   16,
		   20
    	]
    }
    
    get exploration_type_items() {
    	return [
    		"Alien structure",
    		"Abandoned structure",
    		"Natural phenomena",
    		"Space",
    		"Mental",
    		"Urban"
    	]
    }
    
    get exploration_type_next() {
    	return [
		   17,
		   18,
		   19,
		   21,
		   22,
		   23
    	]
    }
    
    get assault_type_items() {
    	return [
    		"Stronghold",
    		"Murder",
    		"Uprising",
    		"Kidnap",
    		"War",
    		"Technological"
    	]
    }
    
    get assault_type_next() {
    	return [
		   24,
		   25,
		   26,
		   27,
		   28,
		   29
    	]
    }
    
    get trade_type_items() {
    	return [
    		"Small expensive item",
    		"Rare item",
    		"Cargo",
    		"Technology",
    		"Prisoners",
    		"Star ships"
    	]
    }
    
    get trade_type_next() {
    	return [
		   30,
		   31,
		   32,
		   33,
		   34,
		   35
    	]
    }
    
    get sacrifice_type_items() {
    	return [
    		"Money",
    		"Livelihood",
    		"Yourself",
    		"An entire people",
    		"Your hopes and dreams",
    		"Time"
    	]
    }
    
    get sacrifice_type_next() {
    	return [
		   36,
		   37,
		   38,
		   39,
		   40,
		   41
    	]
    }    
    
    /**
     *
     * @param {string} table
     * @param {integer} table_item_index
     * @returns {result}
     */
    get_result_by_table_name(table, table_item_index=false){		
		var roll = table_item_index;
		if (table_index === false) {
			roll = Math.floor(Math.random() * this[table+"_items"].length);
		}
		var result = this[table+"_items"][roll];
		var next_table = this.tables[this[table+"_next"][roll]];
		
        return {
            'rolls': [roll],
            'total': roll,
            'result': result + "(+"next_table")",
            'extras': {
            	'next': next_table
            }
        }
    }
    
    /**
     *
     * @param {integer} table_index
     * @param {integer} table_item_index
     * @returns {result}
     */
    get_result_by_table_index(table_index, table_item_index=false){
    	var table = this.tables[table_index];    	
    	return this.get_result_by_table_name(table, table_item_index);
    }
    
  }

  return GamePlanner;
})();

export default GamePlanner;