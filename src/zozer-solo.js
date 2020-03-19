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
      
      if (law_level === false && !law_level in law_level_skills_table) {         
         var law_level = law_levels[Math.floor(Math.random() * law_levels.length)];
      }
      
      var law_level_skills_table = {
         "No Law": "Gun Combat-0",
         "Low Law": "Gun Combat-0",
         "Medium Law": "Gun Combat-0",
         "High Law": "Melee Combat-0"
      }

      var result = law_level_skills_table[law_level];

      return {
         'rolls': null,
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
      var result = value_table[rolls.total]

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
      
      if (result == "Scout") {
         var ship_result = this.scout_ship_encount();
      } else if (result == "Special") {
         var ship_result = this.special_ship_encount();
      } else if (result == "Small Transport") {
         var ship_result = this.small_transport_ship_encount();
      } else if (result == "Large Transport") {
         var ship_result = this.large_transport_ship_encount();
      } else if (result == "Military") {
         var ship_result = this.military_ship_encount();
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
   
      if (result == "Frontier") {
         var ship_result = this.frontier_ship_encount();      
      } else if (result == "Industrial") {      
         var ship_result = this.industrial_ship_encount();
      } else if (result == "Small Transport") {
         var ship_result = this.small_transport_ship_encount();      
      } else if (result == "Large Transport") {
         var ship_result = this.large_transport_ship_encount();      
      } else if (result == "Military") {
         var ship_result = this.military_ship_encount();      
      }   
   
      var roller = new DiceRoller();
      var rolls = roller.roll('2d6'+mod);
      var result = ship_encounter_frontier_route_table[utils.getClosestKey(ship_encounter_frontier_route_table, rolls.total)];

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