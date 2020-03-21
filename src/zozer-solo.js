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

    get law_levels() {
    	return [
			 "No Law",
			 "Low Law",
			 "Medium Law",
			 "High Law"		
    	]
    } 
    
    get trade_codes() {
    	return [
			 "Agricultural",
			 "Asteroid/Ice-Capped/Vacuum",
			 "Desert",
			 "Fluid Oceans",
			 "Garden",
			 "High Technology",
			 "High Population",
			 "Industrial",
			 "Low Technology",
			 "Poor",
			 "Rich",
			 "Waterworld"		
    	]
    }    
    
    homeworld(table=false) {
      var table_a = [
         "Agricultural",
         "Asteroid/Ice-Capped/Vacuum",
         "Desert",
         "Fluid Oceans",
         "Garden",
         "High Technology"
      ];
      
      var table_b = [
         "High Population",
         "Industrial",
         "Low Technology",
         "Poor",
         "Rich",
         "Waterworld"
      ];

      var rolls = [];
      rolls[0] = Math.floor(Math.random() * table_a.length);
      if (table === false) {         
         rolls[1] = Math.floor(Math.random() * table_b.length);
         var result = table_a[rolls[0]];
         result = result + " " + table_b[rolls[1]];
      } else if (table === "a") {
         var result = table_a[Math.floor(rolls[0])];      
      } else {
         var result = table_b[Math.floor(rolls[0])];
      }         
      
      return {
         'rolls': rolls,
         'total': null,
         'result': result,
         'extras': null
      }
    }
    
    law_level_skills(law_level=false) {
      var rolls = [];    
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
      
      if (law_level === false && !law_level in law_level_skills_table) {
      	 rolls[0] = (Math.floor(Math.random() * law_levels.length));
         law_level = law_levels[rolls[0]];
      }

      var result = law_level_skills_table[law_level];

      return {
         'rolls': rolls,
         'total': null,
         'result': result,
         'extras': {"law_level":law_level}
      }
   }

    trade_code_skills(trade_code=false) {
      var trade_code_skills_table = {
         "Agricultural": "Farming-0",
         "Asteroid/Ice-Capped/Vacuum": "Zero-G-0",
         "Desert": "Survival-0",
         "Fluid Oceans": "Watercraft-0",
         "Garden": "Animals-0",
         "High Technology": "Computer-0",
         "High Population": "Streetwise-0",
         "Industrial": "Broker-0",
         "Low Technology": "Survival-0",
         "Poor": "Animals-0",
         "Rich": "Carousing-0",
         "Water World": "Watercraft-0"
      }
      
      if (trade_code === false && !trade_code in trade_code_skills_table) {
         var trade_code_table = Math.random() < 0.5 ? "a" : "b";
         trade_code = this.homeworld(trade_code_table).result;
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
      } else if (rolls.total == 63) {
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
    
    character_reaction() {
      var character_reaction_table = {
         1: "Seeks Solace. The PC is overcome by guilt, fear loneliness, remorse or simply retreats to a regular addiction. Drugs or alcohol may be used (but not necessarily) and the PC will withdraw, both physically and socially, perhaps threatening the mission at hand. A PC with Liaison, Carousing or a decent Edu score might be able to make a skill roll to help the PC, or else the Player can roleplay this out.",
         2: "Panic/Anxiety. Something is eating at the character, and rather than withdraw or seek solace, the PC displays their anxiety and panic. They can’t get much done and may even pose a danger to others if not handled well. What is causing the anxiety? It depends on the situation.",
         3: "Looses Temper. The situation has gotten to the PC who vents their anger at everyone around them. This is different to an argument – everyone gets it this time! Exactly what has triggered this bout of bad temper depends on the current situation.",
         4: "Stubborn. A choice has been made and the PC does not like it. They refuse to co-operate unless things are changed. This may not be the result of a large ego, but a passionate belief, a sense of safety or moral duty. It all depends on the current situation.",
         5: "Argument with another PC. There is a blazing row. Perhaps it is the culmination of a period of rivalry or jealousy, or based on a grudge. Other PCs may get involved and choose a side, if they have ties with one of those arguing."
      }

      var roller = new DiceRoller();
      var rolls = roller.roll('1d6');
      var result = character_reaction_table[utils.getClosestKey(character_reaction_table, rolls.total)];
    
      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }

   bad_consequence(mod="") {
      var bad_consequence_table = {
         2: "Death",
         5: "Serious Injury",
         6: "Minor injury",
         7: "Trapped, lost or delayed",
         8: "Part of the mission was failed or incriminating evidence left behind",
         9: "Damage to a useful or valuable piece of kit",
         10: "Seriously upset or antagonise an NPC",
         11: "The task takes four times longer than planned"

      }
      
      var roller = new DiceRoller();
      if (mod == 'safe') {
         var rolls = roller.roll('1d6+6');
      } else {
         var rolls = roller.roll('2d6'+mod);
      }
      var result = bad_consequence_table[utils.getClosestKey(bad_consequence_table, rolls.total)];
      
      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }      
   }
   
   good_consequence(mod="") {
      var good_consequence_table = {
         2: "The task took half the expected time",
         6: "Tracks covered, no evidence left behind",
         7: "Hear a rumour or discover a valuable piece of information",
         9: "Find a useful or valuable piece of kit",
         11: "Make a Contact or friend"
      }
   
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6'+mod);
      var result = good_consequence_table[utils.getClosestKey(good_consequence_table, rolls.total)];
            
      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   tell_me_more_person() {
      var tell_me_more_person_table = [
         "Bad, bad, bad.",
         "Untrustworthy; if he can double-cross he might",
         "OK but Quirky",
         "OK, or so he seems",
         "Decent, don’t worry",
         "Honest, good, dependable"
      ];
      
      var rolls = [];
      rolls[0] = Math.floor(Math.random() * tell_me_more_person_table.length);
      var result = tell_me_more_person_table[rolls[0]];
      
      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   tell_me_more_situation() {
      var tell_me_more_situation_table = [
         "The worst possible thing happens",
         "Bad stuff happens. But it’s not yet catastrophic.",
         "OK for now",
         "OK for now",
         "We’re good.",
         "The best result possible!"
      ];
      
      var rolls = [];
      rolls[0] = Math.floor(Math.random() * tell_me_more_situation_table.length);
      var result = tell_me_more_situation_table[rolls[0]];
      
      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   colorful_locals() {
      var colorful_locals_table = {
         11: "Adventurers",
         12: "Alien Starship Crew",
         13: "Ambushing Brigands",
         14: "Bandits",
         15: "Beggars",
         16: "Belters",
         21: "Drunken Crew",
         22: "Fugitives",
         23: "Government Officials",
         24: "Guards",
         25: "Hunters and Guides",
         26: "Law Enforcers on Patrol",
         31: "Local Performers",
         32: "Maintenance Crew",
         33: "Merchants",
         34: "Military Personnel on Leave",
         35: "Peasants",
         36: "Noble with Entourage",
         41: "Political Dissident",
         42: "Potential Patron",
         43: "Public Demonstration",
         44: "Religious Pilgrims",
         45: "Reporters",
         46: "Researchers",
         51: "Riotous Mob",
         52: "Security Troops",
         53: "Servant Robots",
         54: "Soldiers on Patrol",
         55: "Street Vendors",
         56: "Technicians",
         61: "Thugs",
         62: "Tourists",
         63: "Traders",
         64: "Vigilantes",
         65: "Workers",
         66: "Player’s Choice"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = colorful_locals_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }   
   }
   
   npc_reaction(mod="") {   
      var npc_reaction_table = {
         2: "Hostile (NPC will actively work against the PCs.)",
         4: "Guarded (NPC does not trust the PCs. Will show no favours.)",
         6: "Neutral (Treats PCs like everyone else. Unconcerned.)",
         9: "Friendly (There is some point of connection or common interest. They may show some favour to the PCs.)",
         11: "Allied (NPC finds a common cause with the PCs and show favour assist or help further the cause of the group.)"
      }
   
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6'+mod);
      var result = npc_reaction_table[utils.getClosestKey(npc_reaction_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   starport_event() {
      var starport_event_table = {
         11: "Starport Shutdown - 1 week. Issue is a labour dispute, accident, festival/holiday or security problem.",
         12: "Your cargo is in the wrong place and your ship can't wait till whenever for it to be moved. Will Bribery or Admin help here?",
         13: "Your ship or ship's crew are in trouble, perhaps legally, perhaps personally or perhaps mechanically. They may need assistance.",
         14: "Customs - Roll 5+ for the cargo to clear customs. If not, there may be a 1 week delay or a duty to pay (1%). Is there a way around it? An Admin roll, on 10+ will find a loophole.",
         15: "Red Tape - Transfer papers contain irregularities. Bribery or Admin should smooth the way.",
         16: "Security - Security at starports is always high, you and your cargo are searched. The search will throw up some issue to do with your cargo or luggage you were unaware of on a 6 on 1d6. Arrest? Detention? Week-long delay? Set-up by a rival trader or a spurned seller? Roleplay the results.",
         21: "Meet a fellow traveller as a potential Contact. Roll on reaction table to make their acquaintance, roll on Patron table to determine their identity. Record the reaction result. Require a result of 8+ ('interested') for a friendship. When met again, roll reaction result or less for assistance, cheap cargo, help in dealing with a problem, etc.",
         22: "Meet one of your contacts who needs your help. Is it financial, legal, administrative or personal?",
         23: "Your cargo is pilfered or damaged, reduce amount by 10-60% (1d6?)",
         24: "Bunch of asteroid miners in port causing trouble all week for port officials and other travellers.",
         25: "Meet a minor celebrity/dignitary/notable in the company of a couple of aides/guards.",
         26: "Port personnel confuse you with someone else; roll 1d6 and on 1-3 this is good, on 4-6 it is bad. A quick ID check should sort it out – shouldn’t it?",
         31: "A ship has limped into port this week with damage and crew casualties.",
         32: "Meet one of your contacts – they are desperate for help.",
         33: "Find a great hang-out/bar/cafe/restaurant at the port. Perfect for hiding away, making deals or wooing someone.",
         34: "Mysterious ship landed at the port, no-one allowed to see it or go near it, though there are plenty of rumours around.",
         35: "Warehouse has cargoes available for auction in order to get rid of them. Determine goods, determine price; player puts in a bid. Roll 8+ to get the cargo at your price., -1 if bidding over half, -2 if bidding half or less than, -4 if bidding a quarter or less than of the price.",
         36: "Free trader crew arrested and their ship seized.",
         41: "Someone needs to get off-world fast ... but it’s not as simple as that ....",
         42: "One of your skills is recognized by a port employee ... they have a little problem, could you help them with it?",
         43: "Fire alarm keeps going off – everyone is jumpy and nervous.",
         44: "You are approached to smuggle illegal goods off-planet. If you accept, roll Bribery 8+ to succeed. There may be other complications. If you refuse you may make an enemy of the smuggler.",
         45: "A cargo seized by customs is going cheap. You can pick it up for a bonus (+2 on purchase table). Do the original owners want it back, though?",
         46: "Military ships in port causing a variety of problems for other travellers.",
         51: "Meet a fellow traveller as a potential Contact. Roll on reaction table to make their acquaintance, roll on Patron table to determine their identity. Record the reaction result. Require a result of 8+ ('interested') for a friendship. When met again, roll reaction result or less for assistance, cheap cargo, help in dealing with a problem, etc.",
         52: "Meet a fellow traveller as a potential Contact. Roll on reaction table to make their acquaintance, roll on Patron table to determine their identity. Record the reaction result. Require a result of 8+ ('interested') for a friendship. When met again, roll reaction result or less for assistance, cheap cargo, help in dealing with a problem, etc.",
         53: "Meet a fellow traveller as a potential Contact. Roll on reaction table to make their acquaintance, roll on Patron table to determine their identity. Record the reaction result. Require a result of 8+ ('interested') for a friendship. When met again, roll reaction result or less for assistance, cheap cargo, help in dealing with a problem, etc.",
         54: "Meet one of your contacts.",
         55: "Meet one of your contacts.",
         56: "Meet one of your contacts.",
         61: "Nothing out of the ordinary occurs.",
         62: "Nothing out of the ordinary occurs.",
         63: "Nothing out of the ordinary occurs.",
         64: "Nothing out of the ordinary occurs.",
         65: "Nothing out of the ordinary occurs.",
         66: "Nothing out of the ordinary occurs."
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = starport_event_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   ship_encounter_major_route(mod="", comm_route=false) {
      /*
      A,B,C Starports
      
      +1 Pop 8+
      +1 Naval Base
      -1 Scout Base
      -1 C Class starport
      ----
      Piracy Warning - 12+ on 2D
      ----
      - Scout result: Roll 3D if on an X-Boat link
      */
      var ship_encounter_major_route_table = {
         2: "-",
         5: "Scout",
         6: "Special",
         7: "Small Transport",
         8: "Large Transport",
         9: "Large Transport",
         10: "Military",
         11: "Large Transport",
         12: "Military",
         13: "Large Transport",
         14: "Special"
      }   
   
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6'+mod);
      var result = ship_encounter_major_route_table[utils.getClosestKey(ship_encounter_major_route_table, rolls.total)];

      var ship_result = false;
      var ship_reaction = false; 
      
      if (result == "Scout") {
         ship_result = this.scout_ship_encounter();
         ship_reaction = this.scout_reaction();
      } else if (result == "Special") {
         ship_result = this.special_ship_encounter();
         ship_reaction = this.transport_reaction();
      } else if (result == "Small Transport") {
         ship_result = this.small_transport_ship_encounter();
         ship_reaction = this.transport_reaction();
      } else if (result == "Large Transport") {
         ship_result = this.large_transport_ship_encounter();
         ship_reaction = this.transport_reaction();
      } else if (result == "Military") {
         ship_result = this.military_ship_encounter();
         ship_reaction = this.military_reaction();
      }
      
      if (ship_result !== false) {
      	result = result + " - " + ship_result.result + "\n" + ship_reaction.result;
      	if (rolls.total > 11) {
      		result = result + "\n Piracy Warning!";
      	}
      }

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   ship_encounter_frontier_route(mod="") {
      /*
      D,E,X Starports
      
      +1 Pop 6+
      -1  X Class starport
      ----
      Piracy Warning - 11+ on 2D
      ----
      - Scout result: Roll 3D if on an X-Boat link
      */   
      var ship_encounter_frontier_route_table = {
         2: "-",
         9: "Frontier",
         10: "Small Transport",
         11: "Military",
         12: "Industrial",
         13: "Large Transport"
      }
   
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6'+mod);
      var result = ship_encounter_frontier_route_table[utils.getClosestKey(ship_encounter_frontier_route_table, rolls.total)];

      var ship_result = false;
      var ship_reaction = false; 
   
	  if (result == "Frontier") {
		ship_result = this.frontier_ship_encounter();
        var military_types = ['Patrol','Escort'];
        var scout_types = ['Scout'];
         
		if (military_types.some(v => ship_result.includes(v))) {
			ship_reaction = this.military_reaction();
		} else if (scout_types.some(v => ship_result.includes(v))) {
			ship_reaction = this.scout_reaction();
		} else {
			ship_reaction = this.frontier_reaction();
		} 
      } else if (result == "Industrial") {      
         ship_result = this.industrial_ship_encounter();
         ship_reaction = this.industrial_reaction();
      } else if (result == "Small Transport") {
         ship_result = this.small_transport_ship_encounter();
         ship_reaction = this.transport_reaction();
      } else if (result == "Large Transport") {
         ship_result = this.large_transport_ship_encounter(); 
         ship_reaction = this.transport_reaction();     
      } else if (result == "Military") {
         ship_result = this.military_ship_encounter();
         ship_reaction = this.military_reaction();
      }
      
      if (ship_result !== false) {
      	result = result + " - " + ship_result.result + "\n" + ship_reaction.result;
      	if (rolls.total > 10) {
      		result = result + "\n Piracy Warning!";
      	}      	
      }

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }

   scout_ship_encounter(roll='2d6') {
      var scout_ship_table = {
         2: "Surveyor 400",
         5: "Scout 100",
         6: "Fast Scout 100",
         7: "Scout 100",
         9: "Modular Scout 125",
         10: "Scout 100",
         12: "Extended Fast Scout 150",
         13: "X-Boat Tender",
         15: "X-Boat awaiting pickup"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll(roll='2d6');
      var result = scout_ship_table[utils.getClosestKey(scout_ship_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }   
   }
   
   industrial_ship_encounter() {
      var industrial_ship_table = {
         2: "Ore Carrier 1000",
         5: "Mining Derrick 600",
         6: "Tanker Tender 1000",
         7: "Mining Cutter 50 YY",
         8: "Prospecting Ship 100",
         9: "Lab Ship 400",
         10: "Salvage Cruiser 2000",
         12: "Mobile Teaching Hospital 200"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6');
      var result = industrial_ship_table[utils.getClosestKey(industrial_ship_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }

   small_transport_ship_encounter() {
      var small_transport_table = {
         3: "Merchant 200",
         4: "Subsidized Merchant 400",
         6: "Frontier Trader 400",
         7: "Merchant 300",
         8: "Small Craft (Starport Authority)",
         9: "Small Craft (Corporate)",
         10: "Modular Starship 300",
         11: "Far Trader 200",
         12: "Small Craft (Industrial/Science)",
         13: "Subsidized Merchant 400",
         14: "Free Trader 200",
         15: "Small Craft (Personal)",
         16: "Light Transport 200",
         17: "Far Trader 200",
         18: "Merchant 300"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('3d6');
      var result = small_transport_table[utils.getClosestKey(small_transport_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   large_transport_ship_encounter() {
      var large_transport_table = {
         2: "Long Liner 1000",
         5: "Freighter 3000",
         6: "Bulk Cargo Hauler 5000",
         7: "Subsidised Liner 600",
         8: "Merchant Transport 500",
         9: "Cargo Carrier 1000",
         10: "Frontier Transport 2000",
         11: "Ore Carrier 1000"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6');
      var result = large_transport_table[utils.getClosestKey(large_transport_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   military_ship_encounter() {
      var military_ship_table = {
         2: "Mercenary Cruiser 800",
         5: "Light Patrol Craft 200",
         6: "Close Escort 400",
         7: "Patrol Cruiser 400",
         8: "Fleet Courier 400",
         9: "Battlecruiser 1250",
         10: "Destroyer Escort 1000 DE",
         11: "SDB 400",
         12: "Fleet Squadron in Transit"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6');
      var result = military_ship_table[utils.getClosestKey(military_ship_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   special_ship_encounter() {
      var special_ship_table = {
         2: "Fat Corsair 400",
         3: "Emergency Response Boat 100",
         4: "Personal Transport 100",
         5: "Express Courier 200",
         6: "Merchant Courier 100",
         7: "Yacht 150",
         8: "Small Craft (Private)",
         10: "Lab Ship 400",
         11: "Safari Ship 200"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6');
      var result = special_ship_table[utils.getClosestKey(special_ship_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }      
   }
   
   frontier_ship_encounter() {
      var frontier_table = {
         3: "Cargo/Escape pod",
         4: "Derelict vessel",
         5: "Mining Derrick 600",
         6: "Scout 100",
         7: "Fat Corsair 400",
         8: "Surveyor 400",
         9: "Far Trader 200",
         10: "Patrol Cruiser 400",
         11: "Frontier Trader 400",
         12: "Prospecting Ship 100",
         13: "Scout 100",
         14: "Safari Ship 200",
         15: "Close Escort 400",
         16: "Pirate squadron!",
         17: "Fast Scout 100",
         18: "Asteroid Hermit"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('3d6');
      var result = frontier_table[utils.getClosestKey(frontier_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   frontier_reaction() {
      var frontier_reaction_table = {
         3: "Fugitives from imperial law, they need a new ship...",
         6: "Debris and wreckage from the rolled ship",
         8: "Radio silence, they fear pirates",
        10: "Ignore you, but polite",
        11: "Asks for info on world you’ve just left",
        13: "Asks for help with a repair",
        14: "Crew are hostile and suspicious, warning you away",
        16: "Medical emergency, they have no doctor or supplies"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('3d6');
      var result = frontier_reaction_table[utils.getClosestKey(frontier_reaction_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   military_reaction() {
      var military_reaction_table = {
         3: "Warn you of an unidentified ship in this system",
         7: "Need some civilian spare parts from your ship",
         8: "Asking for info on world just left",
         9: "Ignore you, will not answer comms",
        10: "Ignore you, but are polite",
        12: "Asking for sensor logs",
        13: "Security Checks",
        14: "Boarding",
        15: "Warn you of piracy in this system",
        17: "One of your crew is wanted, see security checks"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('3d6');
      var result = military_reaction_table[utils.getClosestKey(military_reaction_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   transport_reaction() {
      var transport_reaction_table = {
         3: "Thinks you are a pirate, based on rumour",
         6: "Transport matches a ship that went missing last year",
         8: "Comms are out, radio silence",
         9: "Medical emergency, their doctor is ill!",
        10: "Ignore you, but polite",
        12: "Asks for info on world you’ve just left",
        13: "Requires help with repair, please!",
        14: "Require assistance with violent passenger/crewman",
        16: "Cargo in space from that ship. But no ship.",
        17: "Hijacked vessel, unusual trajectory/call signs"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('3d6');
      var result = transport_reaction_table[utils.getClosestKey(transport_reaction_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   industrial_reaction() {
      var industrial_reaction_table = {
         3: "Thinks you are a pirate, based on rumour",
         6: "Thinks you are from rival company, warns you away",
         8: "Comms are out, radio silence",
         9: "Medical emergency, their doctor is ill!",
        10: "Ignore you, but polite",
        12: "Asks for info on world you’ve just left",
        13: "Requires help with repair, please!",
        14: "Require assistance with violent crewman",
        16: "Refined ore in space from that ship. But no ship.",
        17: "Hijacked vessel, unusual trajectory/call signs"
      }
            
      var roller = new DiceRoller();
      var rolls = roller.roll('3d6');
      var result = industrial_reaction_table[utils.getClosestKey(industrial_reaction_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   scout_reaction() {
      var scout_reaction_table = {
         3: "Scout in distress; it has returned from a failed mission",
         6: "Warn you away from a gravitational disturbance",
         8: "On way to map a moon",
         9: "Mapping gravitation anomalies",
        10: "Launching a nav beacon",
        11: "Asks for info on world you’ve just left",
        12: "Friendly hail, ask about world you have come from",
        13: "Ignore you, but are polite",
        14: "Ask for your sensor logs",
        15: "Mapping jump wakes, stay clear",
        16: "Need a civilian spare part",
        17: "Looking for a missing X-Boat"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('3d6');
      var result = scout_reaction_table[utils.getClosestKey(scout_reaction_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   starting_situation() {
   
      var starting_situation_table = {
         2: "Hijack. The free trader your PCs are travelling on has been hijacked by three of the passengers (possibly with help from a crew-member – it is still unclear). One hijacker has barricaded himself into the engineering section, the others are on the bridge. All the crewmembers (including the passengers – the PCs) have been locked inside a single stateroom. The crew have no combat experience and are fearful of being spaced. What do you do?",
         3: "Manslaughter. It was a simple job, provide protection and company for a rich traveller to this backwater world. But he’s gotten into a fight that wasn’t his fault and accidentally killed someone. Now the heat is on, be it the cops, a local gang or whatever. Get to the starport and off-world – fast.",
         4: "Pirates. The free trader your PCs are travelling on has been intercepted by a scout ship that demands to dock otherwise it will launch a full salvo of missiles. Travelling only between ‘safe’ systems, the free trader is unarmed. The crew have no combat experience and are about to be boarded in 15 minutes. What do you do?",
         5: "AWOL. The PCs are being paid to get a military officer to the starport where a ship is waiting to take him off-world. He may be a defector, a spy, a coward or simply be disillusioned. The military of the planet do not intend him to leave, however.",
         6: "The Package. Paid to carry a small package off-world, the PCs leave the patron’s premises just before gunmen arrive to kill him. Now they want the package and will kill anyone who has touched it. Get off world quickly!",
         7: "Stuck. There is an emergency on planet that the PCs are caught up in. Travel is curtailed and if they don’t get to the starport in 3 days the last transports will leave and there will be no way off planet for weeks or months.",
         8: "Arrested. One of the PCs has been held by security at the hotel for some (real or imagined) past crime until the police arrive. The hotel security officer has no idea the suspect has friends in the building ...",
        10: "Missing. One of the PCs (choose or determine randomly) is missing, despite the group having booked passage on a starliner leaving in three days’ time. The reason for the disappearance should be linked to one of the PC’s hooks if possible.",
        12: "Low Berth. Low berth pods open automatically and the PCs get out. They are on a ship, but there seems to be no crew onboard. What type of ship is it? Where are they? What happened? The SOLO Player might decide between alien infestation, piracy or hijacking, or some strange jump drive anomaly." 
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6');
      var result = starting_situation_table[utils.getClosestKey(starting_situation_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }      
   }
   
   patron() {
      var patron_table = {
         11: "Naval Officer",
         12: "Reporter",
         13: "Hunter",
         14: "Soldier",
         15: "Diplomat",
         16: "Army Officer",
         21: "Noble",
         22: "Marine Officer",
         23: "Belter",
         24: "Bureaucrat",
         25: "Starport Official",
         26: "Peasant/Farmer",
         31: "Assassin",
         32: "Avenger",
         33: "Merchant",
         34: "Rogue",
         35: "Professor",
         36: "Gangster",
         41: "Corporate Official",
         42: "Scientist",
         43: "Spy",
         44: "Broker",
         45: "Technician",
         46: "Financier",
         51: "Government Official",
         52: "Scout Pilot",
         53: "Doctor",
         54: "Corporate Boss",
         55: "Local Military Officer",
         56: "Pilot",
         61: "Smuggler",
         62: "Researcher",
         63: "Engineer",
         64: "Mercenary",
         65: "Police Officer",
         66: "Ship-Owner"
      }
 
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = patron_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
 
   }
   
   mission() {
      var mission_table = {
         11: "Explore a moon or asteroid",
         12: "Explore ruins",
         13: "Salvage",
         14: "Survey area",
         15: "Capture animal",
         16: "Hijack vehicle or ship",
         21: "Assassination",
         22: "Theft",
         23: "Blackmail",
         24: "Burglary",
         25: "Blackmail",
         26: "Discredit",
         31: "Investigate Theft",
         32: "Investigate Murder",
         33: "Investigate Mystery",
         34: "Investigate Accident",
         35: "Research a target",
         36: "Spy on a Location",
         41: "Protect someone",
         42: "Assist someone",
         43: "Rescue someone",
         44: "Join Expedition",
         45: "Infiltrate Group",
         46: "Find Missing Ship",
         51: "Find Missing Goods",
         52: "Join Expedition",
         53: "Provide Protection on a Journey",
         54: "Trick Someone",
         55: "Bribe",
         56: "Sabotage",
         61: "Find Missing Person",
         62: "Transport Special Item",
         63: "Transport Illegal Goods",
         64: "Transport Data",
         65: "Transport Dangerous Cargo",
         66: "Transport Person"        
      }
 
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = mission_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   mission_target() {
      var mission_target_table = {
         11: "Yacht",
         12: "Free Trader",
         13: "Security Ship",
         14: "Naval Craft",
         15: "Cargo Ship",
         16: "Orbital Station",
         21: "Artwork",
         22: "Chemical Canister",
         23: "Data Chip",
         24: "Money or Bonds",
         25: "Prototype",
         26: "Weapon",
         31: "Illegal Cargo",
         32: "Illegal Cargo",
         33: "Illegal Cargo",
         34: "Cargo",
         35: "Cargo",
         36: "Cargo",
         41: "Remote Base",
         42: "Orbital Station",
         43: "Starport",
         44: "City Building",
         45: "Underground Vault or Bunker",
         46: "Nightclub",
         51: "Crime Gang",
         52: "Corporation",
         53: "Intelligence Agency",
         54: "Media Corporation",
         55: "Planetary Government",
         56: "Local Police",
         61: "Roll on Patron",
         62: "Roll on Patron",
         63: "Roll on Patron",
         64: "Roll on Patron",
         65: "Roll on Patron",
         66: "Roll on Patron"      
      }   

      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = mission_target_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   onboard_event_passenger() {
      var onboard_event_passenger_table = {
		11: "Hijack or piracy or both",
		12: "There is an incident amongst the crew and they turn to the PC for help.",
		13: "What the problem is will probably revolve one of the PCs skills, status or situation.",
		14: "An accident aboard ship requires repair, may involve an injury or some inconvenience. See Ship Malfunction Table.",
		15: "Fire in the cargo area – an electrical fault in the cargo bed rollers.",
		16: "Demanding passenger is a friend of destination’s port manager.",
		21: "Passenger is an inspector for the government who is authorized a tour of the ship.",
		22: "Crewman becomes sullen, uncommunicative and makes mistakes, but will not discuss.",
		23: "Recycling systems require maintenance, it’s a messy job.",
		24: "Find out some useful info from a passenger about the destination world, use it to either get half price living costs at the starport, a +1 on any Admin roll, or re-roll a cargo result during a cargo search. Make a Contact.",
		25: "Crewman’s or passenger’s fresher is broken , the stateroom is flooded!",
		26: "Jump field misaligning, requires spot retuning of the drive, very dangerous.",
		31: "Cargo containers have shifted due to grav compensator malfunction. Need re-setting.",
		32: "There's one obnoxious passenger people try to avoid. This trip will be miserable  unless someone deals with him, which skill will work with him/her? (1) Streetwise, (2) Carouse, (3) Admin, (4) Bribery, (5) Leader, 6) Social Standing. Liaison is always appropriate. Make a suitable roll to deal with this person.",
		33: "Sensors are producing false readings. Or are they? If so, why?",
		34: "Cargo container explosion and chemical fire.",
		35: "Two passengers have a blazing and unresolved argument. It needs resolving!",
		36: "A passenger shows too much interest in another, and attempts entry into his/her cabin.",
		41: "Typical trip, with highs and lows.",
		42: "Fuel pump fails – reactor put on stand-by, something ingested during fuel scooping?",
		43: "Power failure – several tripped fuses, shuts down power in parts of engineering.",
		44: "Meet one of your contacts who needs your help. Is it financial, legal, administrative or personal?",
		45: "Passenger declares he has seen a gun in another passenger’s stateroom.",
		46: "A passenger falls mysteriously ill.",
		51: "Security patrol ship makes contact in outer system or close to main world. (1) checks registry; moves on; (2) asks for passenger lists, is looking for a fugitive; (3) asks for cargo lists, is checking for customs irregularities; (4-5) will board, spend 1-3 hours conducting a routine search then move on. Roll 5+ for PC to avoid some cargo or personal irregularity which leads to his or her put under scrutiny/fined/delayed or detained; (6) the starship is breaking the law and will be accompanied to the starport where it will be impounded and investigated. Can the PC help with Bribery or Admin or other skills in preventing this?? If not, everyone is detained at the starport for 1-3 weeks, cargoes included. On a second roll of 10+ the panicked starship captain makes a run for it and the patrol ship will be forced to fire on the fugitive vessel.",
		52: "Crewman has an affair with a passenger.",
		53: "Gambling passenger takes everyone’s money and causes bother ...",
		54: "Meet a fellow traveller as a potential Contact. Roll on the reaction table to make their acquaintance, roll on Patron table to determine their identity. When met again, roll reaction result or less for assistance, cheap cargo, help in dealing with a problem, etc.",
		55: "Captain runs a crew training session: see Starship Training Table.",
		56: "Theft from a passenger stateroom or luggage area.",
		61: "Captain is incapacitated, roll for a simultaneous event/crisis that needs resolving!",
		62: "Engineering problem requires all crew to help replace a huge component. See Ship Malfunction Table",
		63: "Crewman has a crisis of doubt, failure of duty. He/she shuts down.",
		64: "One of the stewards is: (1) rude, (2) corrupt, (3) missing, (4) exploitative, (5) thieving, (6) under pressure from a passenger.",
		65: "Passenger is extremely reclusive, will not come out of his cabin.",
		66: "Mysterious death of passenger or crew, was it murder?"      
      }   
   
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = onboard_event_passenger_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }   
   }
   
   onboard_event_nonpassenger() {
      var onboard_event_nonpassenger_table = {
		11: "Piracy or hijack.",
		12: "Ship Malfunction. Check table.",
		13: "What the problem is will probably revolve one of the PCs skills, status or situation.",
		14: "An accident aboard ship requires repair, may involve an injury or some inconvenience. See Ship Malfunction Table.",
		15: "Fire in the cargo area – an electrical fault in the cargo bed rollers.",
		16: "Crewman is very ill, but the reason is a little mysterious.",
		21: "Ship Malfunction. Check table.",
		22: "Crewman becomes sullen, uncommunicative and makes mistakes, but will not discuss.",
		23: "Recycling systems require maintenance, it’s a messy job.",
		24: "Typical trip, with highs and lows.",
		25: "Crewman’s fresher is broken, the stateroom is flooded!",
		26: "Jump field misaligning, requires spot retuning of the drive, very dangerous.",
		31: "Cargo containers have shifted due to grav compensator malfunction. Need re-setting.",
		32: "Typical trip, with highs and lows.",
		33: "Sensors are producing false readings. Or are they? If so, why?",
		34: "Cargo container explosion and chemical fire.",
		35: "Two crewmen have a blazing and unresolved argument. It needs resolving!",
		36: "Typical trip, with highs and lows.",
		41: "Typical trip, with highs and lows.",
		42: "Fuel pump fails – reactor put on stand-by, something ingested during fuel scooping?",
		43: "Power failure – several tripped fuses, shuts down power in parts of engineering.",
		44: "Strange readings on the bridge suggest there might be a stowaway.",
		45: "The ship computer is acting oddly. Why? Is it malfunctioning? Has it been reprogrammed?",
		46: "It appears you have a cargo on-board – that doesn’t belong to you ...",
		51: "Security patrol ship makes contact in outer system or close to main world. (1) checks registry; moves on; (2) asks for passenger lists, is looking for a fugitive; (3) asks for cargo lists, is checking for customs irregularities; (4-5) will board, spend 1-3 hours conducting a routine search then move on. Roll 5+ for PC to avoid some cargo or personal irregularity which leads to his or her put under scrutiny/fined/delayed or detained; (6) the starship is breaking the law and will be accompanied to the starport where it will be impounded and investigated. Can the PC help with Bribery or Admin or other skills in preventing this?? If not, everyone is detained at the starport for 1-3 weeks, cargoes included. On a second roll of 10+ the panicked starship captain makes a run for it and the patrol ship will be forced to fire on the fugitive vessel.",
		52: "Ship Malfunction. Check table.",
		53: "Shipboard romance.",
		54: "Holiday or commemoration celebration.",
		55: "Captain runs a crew training session: see Starship Training Table.",
		56: "Crew entertainment evening.",
		61: "Captain is incapacitated, roll for a simultaneous event/crisis that needs resolving!",
		62: "Engineering problem requires all crew to help replace a huge component.",
		63: "Crewman has a crisis of doubt, failure of duty. He/she shuts down.",
		64: "The captain shuts him or herself off. It is quite mysterious.",
		65: "Captain runs a crew training session: see Starship Training Table.",
		66: "Ship Malfunction. Check table."      
      }   
   
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = onboard_event_passenger_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }   
   
   }
   
   ship_malfunction(){
      var ship_malfunction_table = {
		11: "Airlock malfunctions",
		12: "Grav Plates",
		13: "Water Recycling",
		14: "Computer Glitch",
		15: "Turret Mechanisms",
		16: "Flooding",
		21: "Fusion overheat",
		22: "Plasma leak",
		23: "Air Recycling",
		24: "Ship’s Boat drive",
		25: "Manoeuvre drive",
		26: "Jump Drive calibration",
		31: "Security lock-outs",
		32: "Long range sensor ghosting",
		33: "Sensor hardware failure",
		34: "Hull stresses",
		35: "Micrometeoroid strike",
		36: "Heating/Life support problems",
		41: "Jump Drive trigger",
		42: "Jump field generator",
		43: "Fuel pump problem",
		44: "Gas build-up",
		45: "Radiation leak",
		46: "Fusion plant sensor failure",
		51: "Plasma coil replacement",
		52: "Computer core failures",
		53: "Cockpit display glitch",
		54: "Inertial compensators failing",
		55: "Missile targeting errors",
		56: "Missile loader jamming",
		61: "Laser weapon over-heat",
		62: "Bay-door jamming",
		63: "Coolant leak",
		64: "Undercarriage stress weakness",
		65: "Kitchen malfunction",
		66: "Waste disposal problem"      
      }
   
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = ship_malfunction_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   
   }
   
   training_duties() {
      var training_duties_table = {
		 2: "Nav Training",
		 3: "Fuel-Leak",
		 4: "Depressurization",
		 5: "Seminar",
		 6: "Fire",
		 7: "Individual training",
		 8: "Power fluctuation",
		 9: "Hijack",
		10: "Computer Malfunction",
		11: "Zero-G Training",
		12: "Combat"
      }   
   
      var roller = new DiceRoller();
      var rolls = roller.roll("2d6");
      var result = training_duties_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   world_encounter_travellers(){
      var world_encounter_travellers_table = {
		11: "Crime. Roll UNDER law level to avoid a random non-lethal crime costing you Cr200 x 1d6.",
		12: "Renowned restaurant",
		13: "Sudden weather change may affect travel plans",
		14: "Political coup or revolution causes chaos, for travel, security and trade.",
		15: "Sudden restriction on movement, unless you can find a way to avoid it",
		16: "A Patron wants to hire your services.",
		21: "Invited to a posh function",
		22: "Ruined structure holds your interest",
		23: "Discover a landed spacecraft. Why is it there?",
		24: "Interesting or potentially dangerous encounter with some local wildlife.",
		25: "Overhear some scandal about a local big-shot (politician/gangster/corporate/celebrity)",
		26: "Holiday or festival celebrations slow things down, but become an enjoyable diversion.",
		31: "Job opportunity comes up that will last up to three days and pay Cr8000 plus 1d6 x Cr1000.",
		32: "The local community is either not what it seems, or very welcoming",
		33: "Discover a wonderful little-known retreat, a place to relax - or to hide.",
		34: "Security check. Roll the Law Level or less to avoid a complete check of papers and a search of belongings and vehicle.",
		35: "Patron offers you a short-term courier job to your next destination.",
		36: "Transport delays",
		41: "Meet a fellow traveller as a potential Contact. Roll on reaction table to make their acquaintance. Record the reaction result. Require a result of 8+ ('interested') for a friendship. When met again, roll reaction result or less for assistance. Roll on Patron table to determine their identity.",
		42: "Crime. Roll UNDER law level to avoid a random non-lethal crime costing you Cr200 x 1d6.",
		43: "Harassed by a group of locals. Roll on Interesting Individuals Table.",
		44: "Learn a secret on planet, political, corporate, etc. you can profit from this, if you decide. If so, roll Streetwise to get away with it and gain Cr10-60,000, fail and face being arrested, pursued or shipped off planet.",
		45: "Pick up a rumour of some missing fortune out in the wilderness.",
		46: "You are offered the chance to make extra money at a job lasting one day and paying Cr1000, or a favour.",
		51: "Find yourself travelling with a group of interesting locals, gain useful information about the world.",
		52: "Local crisis; bush-fire, earthquake, hurricane, rioting.",
		53: "Investment opportunity arises on some local planetary business venture; you may gamble a multiple of Cr1,000 up to Cr10,000. Roll Gambler 8+ or Broker 8+ and if you succeed you gain half-again in profit, if you fail you lose your stake. The result occurs by the end of the week.",
		54: "Interesting Individuals (Colourful Locals) make life hell for you.",
		55: "You are offered the chance to take part in a risky but rewarding venture by a Patron.",
		56: "Introduced to local entertainments, spending hundreds of credits (Cr100 x 1d6) but gaining a friend and memories of a good time!",
		61: "Job opportunity comes up that will last up to three days and pay Cr1000 plus 1d6 x Cr100. Roll on the patron tables.",
		62: "You get ill. Roll 1d6, on 1-3 it is some bizarre local disease requiring an expensive local doctor who will cost you Cr600, otherwise you are bedridden each day till you successfully roll End 10+",
		63: "You are approached to smuggle illegal goods off-planet. If you accept, roll Bribery 8+ to succeed. There may be other complications. If you refuse you may make an enemy of the smuggler.",
		64: "Meet a local as a potential Contact. Record the reaction result. Require a result of 8+ ('interested') for a friendship. When met again, roll reaction result or less for assistance. Roll on Patron table to determine their identity.",
		65: "Embroiled in legal trouble. A Lawyer with Admin 8+ roll will sort out the problem quickly, otherwise you may have to resort to bribery or other methods to get out of the situation.",
		66: "Another off-worlder befriends you, they are in a spot of bother it soon transpires, would you help? There may be payment, or a favour."      
      }
   
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = world_encounter_travellers_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   world_encounter_traders(){
      var world_encounter_traders_table = {
		11: "Crime. Roll UNDER law level to avoid a random non-lethal crime costing you Cr200 x 1D6.",
		12: "Renowned restaurant",
		13: "Sudden weather change may affect travel plans",
		14: "Trade agents of a large megacorporation are on planet, making normal trade difficult.",
		15: "Sudden restriction on movement, unless you can find a way to avoid it",
		16: "Another trader is after your preferred lot of trade goods.",
		21: "Invited to a posh function",
		22: "Ruined structure holds your interest",
		23: "Discover a landed spacecraft. Why is it there?",
		24: "Interesting or potentially dangerous encounter with some local wildlife.",
		25: "Local situation and manner of seller make you suspicious and consider rethinking your purchase.",
		26: "Holiday or festival celebrations slow things down, but become an enjoyable diversion.",
		31: "Seller involved in legal trouble and you risk getting embroiled",
		32: "Community is either not what it seems, or very welcoming",
		33: "Discover a wonderful little-known retreat, a place to relax - or to hide.",
		34: "Security check. Roll the Law Level or less to avoid a complete check of papers and a search of belongings and vehicle.",
		35: "Patron offers you a short-term courier job to your next destination.",
		36: "Transport delays",
		41: "Hard times on the planet mean few trade goods for purchase",
		42: "Valuable trade goods are on offer at a great deal. Why?",
		43: "Harassed by a group of locals",
		44: "Learn a secret on planet, political, corporate, etc. you can profit from this, if you decide. If so, roll Streetwise to get away with it and gain Cr10-60,000, fail and face being arrested, pursued or shipped off planet.",
		45: "You need to travel to a restricted area and travel incognito with a forged ID. Goods will be more valuable (gain +1 bonus on the buying roll). If caught you will be sent back to the starport.",
		46: "You are offered the chance to make extra money at a job lasting one day and paying Cr1000, or a favour.",
		51: "Find yourself travelling with a group of interesting locals, gain useful information about the world and a tip (+1 to find a dealer) on this, or your next, visit.",
		52: "Local crisis; bush-fire, earthquake, hurricane, rioting. If you have a cargo of particular use in the crisis you can sell for 3x the rolled price.",
		53: "Investment opportunity arises on some local planetary business venture; you may gamble a multiple of Cr1,000 up to Cr10,000. Roll Gambler 8+ or Broker 8+ and if you succeed you gain half-again in profit, if you fail you lose your stake. The result occurs by the end of the week.",
		54: "Goods are on offer direct from the grower/manufacturer. It is top quality stuff that will sell with a +1 bonus.",
		55: "You are offered the chance to take part in a risky but rewarding adventure or expedition.",
		56: "Introduced to local entertainments, spending hundreds of credits (Cr100 x 1D6) but gaining a friend and memories of a good time!",
		61: "Job opportunity comes up that will last up to three days and pay Cr1000 plus 1D6 x Cr100.",
		62: "You get ill. Roll 1D6, on 1-3 it is some bizarre local disease requiring an expensive local doctor who will cost you Cr600, otherwise you are bedridden each day till you successfully roll End 10+",
		63: "You are approached to smuggle illegal goods off-planet. If you accept, roll Bribery 8+ to succeed. There may be other complications. If you refuse you may make an enemy of the smuggler.",
		64: "Boom economy at the moment. This week, every dealer has three cargoes for you to choose from.",
		65: "Embroiled in legal trouble. A lawyer with Admin 8+ roll will sort out the problem quickly, otherwise you may have to resort to bribery or other methods to get out of the situation.",
		66: "Another off-worlder befriends you, they are in a spot of bother it soon transpires, would you help? There may be payment, or a favour."      
      }   
   
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = world_encounter_traders_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   onboard_event_merchant(){
      var onboard_events_merchant_table = {
		11: "Hijack or piracy or both",
		12: "There is an incident amongst the crew and they turn to the PC for help.",
		13: "What the problem is will probably revolve one of the PCs skills, status or situation.",
		14: "An accident aboard ship requires repair, may involve an injury or some inconvenience.",
		15: "Fire in the cargo area – an electrical fault in the cargo bed rollers.",
		16: "Demanding passenger is a friend of destination’s port manager.",
		21: "Passenger is an inspector for the government who will tour of the ship.",
		22: "Crewman becomes sullen, uncommunicative and makes mistakes, but will not discuss.",
		23: "Recycling systems require maintenance, it’s a messy job.",
		24: "Find out some useful info from a passenger about the destination world, use it to either get half price living costs at the starport, a +1 on any Admin roll, or re-roll a cargo result during the Cargo Search phase.",
		25: "Crew fresher is broken , the stateroom is flooded!",
		26: "Jump field misaligning, requires spot retuning of the drive, very dangerous.",
		31: "Cargo containers have shifted due to grav compensator malfunction. Need re-setting.",
		32: "There's one obnoxious passenger people try to avoid. This trip will be miserable  unless someone deals with him, which skill will work with him/her? (1) Streetwise, (2) Carousing, (3) Admin, (4) Bribery, (5) Leader, 6) Social Standing. Liaison is always appropriate.",
		33: "Sensors are producing false readings. Or are they? If so, why?",
		34: "Cargo container explosion and chemical fire.",
		35: "Two passengers have a blazing and unresolved argument. It needs resolving!",
		36: "A passenger shows too much interest in another, and attempts entry into his/her cabin.",
		41: "Typical trip, with highs and lows.",
		42: "Fuel pump fails – reactor put on stand-by, something ingested during fuel scooping.",
		43: "Power failure – several tripped fuses, shuts down power in parts of engineering.",
		44: "Meet one of your contacts who needs your help. Is it financial, legal, administrative or personal?",
		45: "Passenger declares he has seen a gun in another passenger’s stateroom.",
		46: "A passenger falls mysteriously ill.",
		51: "Security patrol ship makes contact in outer system or close to main world. (1) checks registry, moves on (2) asks for passenger lists, is looking for a fugitive (3) asks for cargo lists, is checking for customs irregularities, (4-5) will board, spend 1-3 hours conducting a routine search then move on. Roll 5+ for PC to avoid some cargo or personal irregularity which leads to his or her put under scrutiny/fined/delayed or detained (6) the starship is breaking the law and will be accompanied to the starport where it will be impounded and investigated. Can the PC help with bribery or admin or other skills in preventing this?? If not everyone is detained at the starport for 1-3 weeks, cargos included. On a second roll of 10+ the panicked starship captain makes a run for it and the patrol ship will be forced to fire on the fugitive vessel.",
		52: "Crewman has an affair with a passenger.",
		53: "Gambling passenger takes everyone’s money and causes bother ...",
		54: "Meet a fellow Traveller as a potential Contact. Roll on Traveller reaction table to make their acquaintance, roll on Patron table to determine their identity. Record the reaction result. Require a result of 8+ ('interested') for a friendship. When met again, roll reaction result or less for assistance, cheap cargo, help in dealing with a problem, etc.",
		55: "Captain runs a crew training session on procedure/law/fire safety/hijacking/first aid etc.",
		56: "Theft from a passenger stateroom or luggage area.",
		61: "Captain is incapacitated, roll for a simultaneous event/crisis that needs resolving!",
		62: "Engineering problem requires all crew to help replace a huge component.",
		63: "Crewman has a crisis of doubt, failure of duty. He/she shuts down.",
		64: "One of the stewards is: (1) rude, (2) corrupt, (3) missing, (4) exploitative, (5) thieving, (6) under pressure from a passenger.",
		65: "Passenger is extremely reclusive, will not come out of his cabin.",
		66: "Mysterious death of passenger or crew, was it murder?"      
      }   
   
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = onboard_events_merchant_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   sector_threat_level(){
      var sector_threat_table = [
         "Caution",
         "Expect Trouble",
         "Action Required",
         "Urgent Action Required"
      ]
      
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6-3');
      var total = rolls.total < 0 ? 0 : rolls.total;
      var result = "Threat Level: " + total + " - " + sector_threat_table[total];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }   
   }
   
   onboard_event_military(){
      var onboard_events_military_table = {
		11: "Ship Malfunction",
		12: "Ship Malfunction",
		13: "Ship Malfunction",
		14: "Ship Malfunction",
		15: "Ship Malfunction",
		16: "Ship Malfunction",
		21: "Contraband found, unidentified",
		22: "Identified contraband",
		23: "Crewman receives bad news",
		24: "Crewman receives very good news",
		25: "Bullying issue",
		26: "Poor standards of duty or dress",
		31: "Shipboard Training",
		32: "Crew performance poor",
		33: "Crewman saves another’s life",
		34: "Insubordination",
		35: "Incident of fighting",
		36: "Illness",
		41: "Mistakes made on duty",
		42: "Shipboard Training",
		43: "Conflicting personalities cause problems",
		44: "Award or decoration due",
		45: "In-ship Competition",
		46: "Crew entertainment evening",
		51: "Shipboard Training",
		52: "Item stolen",
		53: "Cross training course established",
		54: "Holiday or commemoration celebration",
		55: "Poor timekeeping, persistent",
		56: "Injury",
		61: "Food spoils, emergency rations!",
		62: "Crewman AWOL on world/station",
		63: "Crewman completed some tests/experiments",
		64: "Shipboard romance",
		65: "Rivalry turns into bitter feud",
		66: "Sabotage or wounding, who & why?"      
      }
   
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = onboard_events_military_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }

   traffic(card_suit){
      var result = false;
      if (card_suit == "♦" || card_suit == "♥") {
         result = this.scheduled_traffic();
      } else if (card_suit == "♣") {
         result = this.private_traffic();
      } else {
         result = this.unknown_traffic();
      }
      if (result) {
         return result.result;
      } else {
         return false;
      }
   } 
   
   private_traffic(outer_system=false){
      var private_traffic_table = {
         3: "Shuttle",
         4: "Corporate Liner",
         5: "Salvage Ship",
         6: "Free Trader",
         7: "Shuttle/Launch",
         8: "Lab Ship",
         9: "Cargo Carrier Charter",
         10: "Scout",
         11: "Free Trader",
         12: "Yacht or Safari Ship",
         13: "Survey Ship",
         14: "Mining Barge",
         15: "Mercenary Transport",
         16: "Mining Support Ship",
         17: "Prospector",
         18: "Scout",
         19: "Free Trader",
         20: "Private Security Ship"
      }
      
      var roller = new DiceRoller();
      var mods = "";
      if (outer_system) {
         mods = "+2";
      }
      var rolls = roller.roll('3d6'+mods);
      var result = private_traffic_table[utils.getClosestKey(private_traffic_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': "Private Traffic: " + result,
         'extras': false
      }
   }   

   unknown_traffic(threat_level=0,outer_system=false){
      var unknown_traffic_table = {
         3: "Scheduled ship – off its normal route. Why?",
         4: "Scout on top secret business",
         5: "Ship in catastrophic crisis – fire, fuel leak, etc.",
         6: "Transport ship with wrong transponder codes. Why are they wrong?",
         7: "Malfunctioning drone of some kind",
         8: "Scheduled ship – off its normal route. Due to an error.",
         9: "Stolen transport ship – transponder codes are slightly irregular.",
         10: "Small asteroid with attached mining beacons, or prospectors on-site",
         11: "Ship damaged – comms out",
         12: "Satellite or beacon not responding",
         13: "Dumped debris of no worth",
         14: "Dumped debris including item's with active power sources",
         15: "Lifeboat – coasting. Anyone, or thing, onboard?",
         16: "Hostile scout",
         17: "Dumped cargo, why was it dumped? What is it?",
         18: "Hostile raider on patrol",
         19: "Hostile attack underway, roll for identity of private/scheduled vessel",
         20: "Wrecked ship, victim of pirate attack",
         21: "Hostile ship, loading booty onboard",
         22: "Ship fragments and frozen bodies, victims of an attack",
         23: "Hostile squadron",
         24: "Survey Ship with special sensor arrays",
         25: "Hostile Carrier",
         26: "Dumped cargo, why was it dumped? What is it?"
      }
      
      var mod_value = 0;
      var mods = "+";
      
      if (outer_system) {
         mod_value = mod_value + 2;
      }
      
      if (threat_level == 1) {
         mod_value = mod_value + 2;
      } else if (threat_level == 2) {
         mod_value = mod_value + 4;
      } else if (threat_level == 3) {
         mod_value = mod_value + 6;
      }
      
      mods = mods + mod_value;      
      
      var roller = new DiceRoller();
      var rolls = roller.roll('3d6'+mods);
      var result = unknown_traffic_table[utils.getClosestKey(unknown_traffic_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': "Unknown Traffic: " + result,
         'extras': false
      }
   }  
   
   scheduled_traffic(outer_system=false){
      var scheduled_traffic_table = {
         3: "Shuttle",
         4: "Subsidized Merchant",
         5: "X-Boat Service Ship",
         6: "Shuttle/Launch",
         7: "Free Trader",
         8: "Subsidized Merchant",
         9: "Destroyer",
         10: "Bulk Cargo Hauler",
         11: "Passenger Liner",
         12: "Fighter",
         13: "General Cargo Ship",
         14: "Frigate or Patrol Ship",
         15: "Passenger Liner",
         16: "System Defence Boat (SDB)",
         17: "X-Boat Service Ship",
         18: "General Cargo Ship",
         19: "Cruiser or Battleship",
         20: "Military Carrier with Escorts"
      }
   
      var roller = new DiceRoller();
      var mods = "";
      if (outer_system) {
         mods = "+2";
      }
      var rolls = roller.roll('3d6'+mods);
      var result = scheduled_traffic_table[utils.getClosestKey(scheduled_traffic_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': "Scheduled Traffic: " + result,
         'extras': false
      }
   }     

   ship_secrets(){
      var ship_secrets_table = {
         11: "Ship has been hijacked",
         12: "Ship being used for opportunistic piracy",
         13: "Ship wanted for crime out-system",
         14: "Cargo problem. Assistance, required!",
         15: "Ship wanted for crime in-system",
         16: "Captain unstable, crew about to mutiny",
         21: "Crew have rescued a lifeboat survivor",
         22: "Very overdue for maintenance checks",
         23: "Ship in trouble – malfunction",
         24: "Ship damaged",
         25: "Hostage incident onboard",
         26: "Crewman very ill",
         31: "All the crew are ill",
         32: "No crew board ... why?",
         33: "Stolen goods are in the cargo hold",
         34: "No licence, paperwork out of date",
         35: "Crew have found some valuable junk",
         36: "Hostile scout, identifying possible targets",
         41: "Smuggled goods onboard, hidden",
         42: "Crew report seeing unusual ship activity",
         43: "Ship has attacked a suspected pirate",
         44: "Crewman or passenger is a wanted criminal",
         45: "All crew in low berths ... why?",
         46: "Drug use rampant on board",
         51: "This ship is normal",
         52: "This ship is normal",
         53: "This ship is normal",
         54: "This ship is normal",
         55: "This ship is normal",
         56: "This ship is normal",
         61: "This ship is normal",
         62: "This ship is normal",
         63: "This ship is normal",
         64: "This ship is normal",
         65: "This ship is normal",
         66: "This ship is normal"      
      }   
   
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = ship_secrets_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   } 

   external_ship_damage(){
      var ship_damage_table = {
      	2: "Hull",
      	3: "Sensors",
      	4: "M-Drive",
      	5: "Turret",
      	6: "Hull",
      	7: "Armor",
      	8: "Hull",
      	9: "Fuel",
       10: "M-Drive",
       11: "Sensors",
       12: "Hull"	
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6');
      var result = ship_damage_table[utils.getClosestKey(ship_damage_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }   
   } 

   internal_ship_damage(){
      var ship_damage_table = {
      	2: "Structure",
      	3: "Power Plant",
      	4: "J-Drive",
      	5: "Bay",
      	6: "Structure",
      	7: "Crew",
      	8: "Structure",
      	9: "Hold",
       10: "J-Drive",
       11: "Power Plant",
       12: "Bridge"	      
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6');
      var result = ship_damage_table[utils.getClosestKey(ship_damage_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }   
   }
   
   small_craft_damage(){
      var ship_damage_table = {
      	2: "Hull",
      	3: "Power Plant",
      	4: "Hold",
      	5: "Fuel",
      	6: "Hull",
      	7: "Armor",
      	8: "Hull",
      	9: "Turret",
       10: "M-Drive",
       11: "Crew",
       12: "Bridge"	      
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6');
      var result = ship_damage_table[utils.getClosestKey(ship_damage_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }   
   } 

   crew_damage_normal(){
      var crew_damage_table = {
      	2: "Lucky escape – no damage",
      	5: "One random crew member suffers",
      	9: "One random crew member suffers",
       11: "All crew suffer 2d6 damage",
       12: "All crew suffer 4d6 damage"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6');
      var result = crew_damage_table[utils.getClosestKey(crew_damage_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
   crew_damage_radiation(){
      var crew_damage_table = {
      	2: "Lucky escape – no radiation less",
      	5: "One random crew member suffers",
      	9: "One random crew member suffers",
       11: "All crew suffer 2d6x10 rads",
       12: "All crew suffer 4d6x10 rads"
      }
      
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6');
      var result = crew_damage_table[utils.getClosestKey(crew_damage_table, rolls.total)];

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }   
   
   onboard_events_scouts(){
      var onboard_events_scouts_table = {
		11: "Ship Malfunction",
		12: "Ship Malfunction",
		13: "Ship Malfunction",
		14: "Ship Malfunction",
		15: "Ship Malfunction",
		16: "Ship Malfunction",
		21: "Data from one of the missions is wiped accidentally.",
		22: "An onboard craft is serviced, and found to be malfunctioning.",
		23: "Captain is incapacitated, roll for a simultaneous event/crisis that needs resolving!",
		24: "An organism has gotten on board and is causing trouble.",
		25: "A strange virus hits the crew. Is there a cure? Where has it come from?",
		26: "Typical trip, with highs and lows.",
		31: "Shipboard Training",
		32: "Crew performance poor",
		33: "Crewman saves another’s life",
		34: "Routine maintenance on a large piece of kit requires everyone’s help",
		35: "Typical trip, with highs and lows.",
		36: "Illness",
		41: "Mistakes made on duty",
		42: "Shipboard Training",
		43: "Conflicting personalities cause problems",
		44: "Award or decoration due",
		45: "In-ship Competition",
		46: "Crew entertainment evening",
		51: "Shipboard Training",
		52: "Item stolen",
		53: "Cross training course established",
		54: "Holiday or commemoration celebration",
		55: "Injury – someone is to blame",
		56: "Injury",
		61: "Sensors are producing strange readings. Or are they? If so, why?",
		62: "Crewman goes missing on next world",
		63: "Crewman completed some tests/experiments",
		64: "Shipboard romance",
		65: "Rivalry turns into bitter feud",
		66: "Sabotage or wounding, who & why?"      
      }
   
      var roller = new DiceRoller();
      var rolls = roller.roll('1d6 + 1d6*10');
      var result = onboard_events_scouts_table[rolls.total]

      return {
         'rolls': rolls,
         'total': rolls.total,
         'result': result,
         'extras': false
      }
   }
   
    /*
    blank lookup
    
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