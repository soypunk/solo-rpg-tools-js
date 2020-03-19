import { DiceRoller } from '../node_modules/rpg-dice-roller/lib/esm/bundle.js';
import { Utils } from './utils.js';

const utils = new Utils();

const ZozerSolo = (() => {
  /**
   *
   * @param {{}=} data
   */   
   
  class ZozerSolo{
    /**
     * Initialises the object
     *
     * @constructor
     * @param data
     */
    constructor(data){}
    
    homeworld(table=false) {
      var table_a = [
         'Agricultural',
         'Asteroid/Ice-Capped/Vacuum',
         'Desert',
         'Fluid Oceans',
         'Garden',
         'High Technology'
      ];
      
      var table_b = [
         'High Population',
         'Industrial',
         'Low Technology',
         'Poor',
         'Rich',
         'Waterworld'
      ];

      var rolls = [];
      rolls[0] = Math.floor(Math.random() * table_a.length);
      if (table === false) {         
         rolls[1] = Math.floor(Math.random() * table_b.length);
         var result = table_a[)];
         result = result + " " + table_b[rolls[0]];
      } else if (table === "a") {
         var result = table_a[Math.floor(rolls[0])];      
      } else {
         var result = table_b[Math.floor(rolls[0]];
      }         
      
      return {
         'rolls': rolls,
         'total': null,
         'result': result,
         'extras': null
      }
    }
    
    law_level_skills(law_level=false) {    
      var law_levels = [
         "No Law",
         "Low Law",
         "Medium Law",
         "High Law"
      ]
      
      var law_level_skills_table = {
         "No Law": "Gun Combat-0",
         "Low Law": "Gun Combat-0",
         "Medium Law": "Gun Combat-0",
         "High Law": "Melee Combat-0"
      }

      return {
         'rolls': rolls,
         'total': null,
         'result': result,
         'extras': null
      }
   }

    trade_code_skills(trade_code=false) {
      if (trade_code === false && !trade_code in trade_code_skills_table) {
         var trade_code_table = Math.random() < 0.5 ? "a" : "b";
         var trade_code = homeworld(trade_code_table);
      }
    
      var trade_code_skills_table = {
         "Agricultural": "Farming-0",
         "Asteroid": "Zero-G-0",
         "Desert": "Survival-0",
         "Fluid Oceans": "Watercraft-0",
         "Garden": "Animals-0",
         "High Technology": "Computer-0",
         "High Population": "Streetwise-0",
         "Ice-Capped": "Zero-G-0",
         "Industrial": "Broker-0",
         "Low Technology": "Survival-0",
         "Poor": "Animals-0",
         "Rich": "Carousing-0",
         "Water World": "Watercraft-0",
         "Vacuum": "Zero-G-0"
      }

      var result = trade_code_skills_table[trade_code];

      return {
         'rolls': null,
         'total': null,
         'result': result,
         'extras': null
      }      
    }    
    
    pc_relationship() {
      var pc_relationship_table = {
         11: "Bickers",
         12: "Secretly in love",
         13: "Secretly hates",
         14: "Competitive rival",
         15: "Blames for a past event",
         16: "Blames for a past event",
         21: "Knows a dark secret",
         22: "Ignores or ridicules",
         23: "Good friends",
         24: "Good friends",
         25: "Life-long friend",
         26: "Hatred and constant arguing",
         31: "Admires",
         32: "Secretly jealous",
         33: "Openly jealous",
         34: "Dependent on another PC’s support",
         35: "Old (and these days, ex-) friends",
         36: "Share a secret past incident",
         41: "Sexual partner",
         42: "Sexual partner",
         43: "Married couple",
         44: "Divorced due to past incident",
         45: "Divorced over differences",
         46: "Related (and on good terms)",
         51: "Related (but feuding or cold)",
         52: "Life-long friend",
         53: "Secretly related (only one knows)",
         54: "Loner",
         55: "Competitive rival",
         56: "Inseparable buddies",
         61: "Secretly in love",
         62: "Friendship through guilt",
         63: "Hatred and constant arguing",
         64: "Knows a dark secret",
         65: "Enemy – waiting for chance to strike",
         66: "Roll again, but it’s all an act. Why?"
      }
            
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      
      if (rolls.total == 66) {
         // roll again
         var result = "(It's all an act though.)";
         var rolls = roller.roll('1d6 + 1d6*10');
         // keep rolling
         while (rolls.total > 65) {
            rolls = roller.roll('1d6 + 1d6*10');
         }
         result = pc_relationship_table[rolls.total] + " " + result;
      } else {
         var result = pc_relationship_table[rolls.total];
      }
      
      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
    }
    
    life_event() {
      var life_event_table = {
         11: "",
         12: "",
         13: "",
         14: "",
         15: "",
         16: "",
         21: "",
         22: "",
         23: "",
         24: "",
         25: "",
         26: "",
         31: "",
         32: "",
         33: "",
         34: "",
         35: "",
         36: "",
         41: "",
         42: "",
         43: "",
         44: "",
         45: "",
         46: "",
         51: "",
         52: "",
         53: "",
         54: "",
         55: "",
         56: "",
         61: "",
         62: "",
         63: "",
         64: "",
         65: "",
         66: ""
      }
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = life_event_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
    }
    
    /*
    blank d66
    
    d66_table_lookup() {
      var value_table = {
         11: "",
         12: "",
         13: "",
         14: "",
         15: "",
         16: "",
         21: "",
         22: "",
         23: "",
         24: "",
         25: "",
         26: "",
         31: "",
         32: "",
         33: "",
         34: "",
         35: "",
         36: "",
         41: "",
         42: "",
         43: "",
         44: "",
         45: "",
         46: "",
         51: "",
         52: "",
         53: "",
         54: "",
         55: "",
         56: "",
         61: "",
         62: "",
         63: "",
         64: "",
         65: "",
         66: ""
      }
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = value_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
    }    
    
    */
    
  }
  return ZozerSolo;
})();

export default ZozerSolo;