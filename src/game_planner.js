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
    
	get abandoned_structure_items() { return [
		"Power station", "Floating framework", "Inverted pyramid",
		"Subterranean cavern", "Arena", "City"] }
	get abandoned_structure_next() { return [35,24,34,27,42,29] }
	get alien_structure_items() { return [
		"Hive ship", "Abandoned station", "Religious temple",
		"Asteroid colony", "Dead city", "Military base"] }
	get alien_structure_next() { return [28,44,29,44,31,11] }
	get an_entire_people_items() { return [
		"An extended family", "The whole tribe", "The last of the race",
		"The complete colony", "The crew", "All the witnesses"] }
	get an_entire_people_next() { return [15,26,28,4,22,11] }
	get assassin_items() { return [
		"Professional killer", "Angry fool", "Alien",
		"Underworld thugs", "Corporate competitor", "Racist"] }
	get assassin_next() { return [9,22,25,13,28,34] }
	get cargo_items() { return [
		"Weapons", "Rare earth", "Industrial gems",
		"Animals", "Engine parts", "Food"] }
	get cargo_next() { return [37,18,27,42,23,16] }
	get creeping_doom_items() { return [
		"Dying sun", "Infestation", "Alien animals",
		"Asteroid swarm", "Poison air", "Radiation"] }
	get creeping_doom_next() { return [12,16,31,26,35,20] }
	get failure_items() { return [
		"Accident", "Sabotage", "Wear and tear",
		"Faulty material", "Operator error", "Corrosion"] }
	get failure_next() { return [40,35,33,36,13,33] }
	get hopes_and_dreams_items() { return [
		"Inheritance lost", "Loved one leaves", "Holiday venue destroyed",
		"Criminal record", "Poor health", "Irrational fear"] }
	get hopes_and_dreams_next() { return [15,38,28,8,39,31] }
	get hordes_of_the_things_items() { return [
		"Intelligent aliens", "Alien animals", "Insects",
		"Micro-bots", "Fighter craft", "Mobile fungi"] }
	get hordes_of_the_things_next() { return [20,42,11,5,27,28] }
	get kidnap_items() { return [
		"Protagonist", "Sibling or parent", "Employer",
		"Extended family", "Friend / Neighbor", "Child"] }
	get kidnap_next() { return [23,43,20,22,36,23] }
	get livelihood_items() { return [
		"Change to part time", "Doubled working hours", "Need new skills",
		"Unemployed", "Everyone laid off", "Change industry"] }
	get livelihood_next() { return [18,26,43,22,19,21] }
	get macguffin_items() { return [
		"Star ship", "Bundle of cash", "Technological miracle device",
		"Jewels", "Weapon", "Secret"] }
	get macguffin_next() { return [35,36,19,36,11,18] }
	get mental_items() { return [
		"Psionic", "Madness", "Invention",
		"Despair", "Expanding IQ", "Induced confusion"] }
	get mental_next() { return [29,40,36,10,12,33] }
	get money_items() { return [
		"Wage stoppages", "Just a few credits", "Life savings",
		"Thousands per month", "One million credits", "Punitive interest"] }
	get money_next() { return [16,40,30,12,35,37] }
	get moved_items() { return [
		"Hidden next door", "On the star ship", "The next town",
		"On another planet", "Across the world", "The next subsector"] }
	get moved_next() { return [22,29,22,32,37,33] }
	get murder_items() { return [
		"Legal execution", "Bloody reprisal", "Back alley mugging gone wrong",
		"Overdose", "Mass killing", "Starvation"] }
	get murder_next() { return [18,12,37,40,26,27] }
	get natural_disaster_items() { return [
		"Black hole", "Super nova", "Storm",
		"Drought", "Collapse", "Meteor"] }
	get natural_disaster_next() { return [32,3,19,36,21,19] }
	get natural_phenomena_items() { return [
		"Population boom", "Psionic scream", "Gravitational anomaly",
		"Solar fade", "Audible anomaly", "Biological die-off"] }
	get natural_phenomena_next() { return [26,40,31,41,11,43] }
	get prisoners_items() { return [
		"Prisoners of war", "Murderers", "Slaves",
		"Indentured workers", "Captured aliens", "Political rivals"] }
	get prisoners_next() { return [27,25,39,22,35,25] }
	get rare_item_items() { return [
		"Endangered animal", "Piece of art/craft", "New invention",
		"Fossil", "Artifact of the Ancients", "Strange material"] }
	get rare_item_next() { return [4,43,22,17,19,36] }
	get skills_items() { return [
		"Computer", "Melee", "Firearm",
		"Piloting", "Navigation", "Social"] }
	get skills_next() { return [22,20,28,21,19,7] }
	get small_expensive_item() { return [
		"Antique", "Extinct alien corpse", "Computer program",
		"Gem", "Legal document", "Key"] }
	get small_expensive_item() { return [32,35,13,42,18,17] }
	get space_exploration_items() { return [
		"Asteroid", "Space station", "Abandoned hulk",
		"Alien craft", "New planet", "Mysterious cloud"] }
	get space_exploration_next() { return [13,20,31,44,26,11] }
	get star_ships_items() { return [
		"Irradiated hulk", "Damaged scout", "New corvette",
		"Alien spy vessel", "Decommissioned trader", "Bulk fuel carrier"] }
	get star_ships_next() { return [30,37,25,40,43,25] }
	get stronghold_items() { return [
		"Bunker complex", "Prefabricated fort", "Massive ancient tower",
		"Natural cave system", "Military camp", "Vehicular laager"] }
	get stronghold_next() { return [21,32,15,44,32,39] }
	get technological_items() { return [
		"Power out", "Communications block", "Robotic mayhem",
		"Overload explosion", "Life support failure", "Out of control vehicles"] }
	get technological_next() { return [41,3942,44,24,35] }
	get technology_items() { return [
		"Ship engines","Laser crystal", "Guidance system",
		"Comm's gear", "Power source", "Computer parts"] }
	get technology_next() { return [44,24,44,34,6,25] }
	get threat_items() { return [
		"Solar event", "Failing crops", "Infestation",
		"Illness", "Invasion", "Political"] }
	get threat_next() { return [18,7,28,22,21,19] }
	get time_items() { return [
		"The next week", "One year", "A decade",
		"Six months", "Every Monday", "Retirement"] }
	get time_next() { return [30,25,34,30,27,31] }
	get trap_items() { return [
		"Snipers all around", "Rising water", "Social ties",
		"Locked exits", "Poisonous atmosphere", "Mental confusion"] }
	get trap_next() { return [26,26,27,40,44,20] }
	get uprising_items() { return [
		"Slave revolt", "Military coup", "Democratic movement",
		"Provincial independence declaration", "General strike", "Ethnic aggression"] }
	get uprising_next() { return [36,32,39,22,25,30] }
	get urban_items() { return [
		"Old factory complex", "The sewer system", "Abandoned apartment building",
		"Active atmosphere", "Ancient fortress", "Newly discovered alien environment"] }
	get urban_next() { return [16,12,44,29,10,35] }
	get war_items() { return [
		"Capture equipment", "Kill leader", "Hold the line",
		"Take that hill", "Demolish structure", "Aggressive patrol"] }
	get war_next() { return [35,41,41,22,23,41] }
	get weird_item_items() { return [
		"Alien artefact", "New mineral", "Sixth sense",
		"Psionic item", "Map", "Living substance"] }
	get weird_item_next() { return [42,35,20,17,18,30] }
	get what_happened_items() { return [
		"Missing person", "A thing appeared", "Missing items",
		"Murder", "It was moved", "Strange beaviour"] }
	get what_happened_next() { return [12,21,9,12,42,22] }
	get who_items() { return [
		"Relative", "Mysterious stranger", "Powerful politician",
		"Lifelong enemy", "Insurgent", "Alien emissary"] }
	get who_next() { return [25,20,26,27,26,42] }
	get yourself_items() { return [
		"Livelihood", "1 year of your life", "Tissue sample",
		"Your home", "Life savings", "Your family"] }
	get yourself_next() { return [37,23,17,24,20,9] }
    
    /**
     *
     * @param {string} table
     * @param {integer} table_item_index
     * @returns {result}
     */
    get_result_by_table_name(table="", table_item_index=false) {		
		var roll = table_item_index;
		if (table_item_index === false) {
			roll = Math.floor(Math.random() * this[table+"_items"].length);
		}
		var result = this[table+"_items"][roll];
		var next_table_index = this[table+"_next"][roll];
		var next_table = this.tables[next_table_index];
		
		table = table.replace("_items","");
		table = table.replace("_next","");
		table = table.replace("_"," ");
		
        return {
            'rolls': [roll],
            'total': roll,
            'result': table + " - " + result + " (" + next_table_index + ")",
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
    get_result_by_table_index(table_index=1, table_item_index=false) {
    	var table = this.tables[table_index];
    	return this.get_result_by_table_name(table, table_item_index);
    }
    
  }

  return GamePlanner;
})();

export default GamePlanner;