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
         11: "Made a terrible mistake, and fear repeating that mistake.",
         12: "Were responsible for a mission/deal ending badly. It tainted your career.",
         13: "Fell in love, but your lover (1-2) died, (3-4) vanished or (5-6) turned against you.",
         14: "Were forced to take part in an immoral mission or duty. Your actions still haunt you.",
         15: "Should have stood up to a powerful figure. You always regret not doing so.",
         16: "Made an enemy. It’s your fault, you shouldn’t have ... (what?)",
         21: "Learnt something you shouldn’t know – you fled for your own safety.",
         22: "Had to create a new identity for yourself. But why?",
         23: "A rival forced you into bankruptcy – it’s amazing you made a come-back at all.",
         24: "A terrible crime was committed against you. It haunts you still.",
         25: "Reconnected with a childhood friend.",
         26: "Profited from a dirty secret and owe any promotion or money to that secret.",
         31: "Fled your homeworld - devastated by plague, war, famine or asteroid strike.",
         32: "You have an addiction, but no-one knows about it.",
         33: "Made a deal with a crime-lord you couldn’t decline.",
         34: "Made a good friend and long term contact.",
         35: "Found fame after becoming involved in a well known news event. Some people are jealous, others indifferent – most are impressed.",
         36: "Realized your parents hate you. Why?",
         41: "Fell in love. It ended badly due to (1-2) family, (3-4) romantic rival or (5-6) circumstance.",
         42: "Were responsible for the death of a relative, friend or lover.",
         43: "Make a powerful friend in the military or government.",
         44: "Imprisoned for a crime you did not commit, you would love to clear your name.",
         45: "Carried out a secret task for your bosses, but you were rewarded.",
         46: "Got married. Today you are (1-2) divorced, (3-4) widowed or (5-6) still happy!",
         51: "Helped your boss out. Now he owes you a great favour.",
         52: "Were never told about your origins; what surprises will this throw up?",
         53: "And your family were ruined by a petty official, now a senior executive.",
         54: "Turned an old enemy into a close friend and ally.",
         55: "Fell in love with a professional rival. The affair flips between passion and rivalry.",
         56: "Were caught up in political turmoil. You are either a hero (1-3) or villain (4-6)",
         61: "Make a powerful enemy in the military or government.",
         62: "Saved someone’s life and gain them as a contact.",
         63: "Were betrayed by a close friend. Today you are (1-2) deadly enemies, (3-4) rivals or (5-6) do not speaking to each other.",
         64: "Were helped in a time of terrible crisis by a friend. He/she is a contact.",
         65: "Got into a huge amount of debt equal to 1D6 x Cr20,000.",
         66: "Suffered amnesia, something bad happened to you but your memories are vague."
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');

      if (rolls.total == 13) {
         var sub_rolls = roller.roll('1d6');
         var result = "Fell in love, but your lover ";
         if (sub_rolls.total < 3) {
            result = result + "died";
         } else if (sub_rolls.total > 2 && sub_rolls.total < 5) {
            result = result + "vanished";
         } else {
            result = result + "turned against you";
         }
      } else if (rolls.total == 41) {
         var sub_rolls = roller.roll('1d6');
         var result = "Fell in love. It ended badly due to ";
         if (sub_rolls.total < 3) {
            result = result + "family.";
         } else if (sub_rolls.total > 2 && sub_rolls.total < 5) {
            result = result + "romantic rival.";
         } else {
            result = result + "circumstance.";
         }
      } else if (rolls.total == 46) {
         var sub_rolls = roller.roll('1d6');
         var result = "Got married. Today you are ";
         if (sub_rolls.total < 3) {
            result = result + "divorced.";
         } else if (sub_rolls.total > 2 && sub_rolls.total < 5) {
            result = result + "widowed.";
         } else {
            result = result + "still happy!";
         }
      } else if (rolls.total == 56) {
         var sub_rolls = roller.roll('1d6');
         var result = "Were caught up in political turmoil. You were a ";
         if (sub_rolls.total < 4) {
            result = result + "hero.";
         } else {
            result = result + "villain.";
         }
      } else if (rolls.total == 46) {
         var sub_rolls = roller.roll('1d6');
         var result = "Were betrayed by a close friend. Today you are ";
         if (sub_rolls.total < 3) {
            result = result + "deadly enemies.";
         } else if (sub_rolls.total > 2 && sub_rolls.total < 5) {
            result = result + "rivals.";
         } else {
            result = result + "not speaking to each other.";
         }
      } else if (rolls.total == 65) {
         var sub_rolls = roller.roll('1d6');
         var result = "Got into a huge amount of debt (";
         var debt = 20000 * sub_rolls.total;
         debt = utils.numberWithCommas(debt);
         result = result + "Cr" + debt + ")";
      } else {
         var result = life_event_table[rolls.total];
      }

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