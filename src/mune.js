import './math-utils.js';
import { DiceRoller } from 'rpg-dice-roller';

/**
 * Mune
 *
 * @type {Mune}
 */
const Mune = (() => {
  /**
   *
   * @param {{}=} data
   */   
   
  class Mune{
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
    oracle(likely=1){
    // create a new instance of the DiceRoller
      var roller = new DiceRoller();
      var notation = '';
      
      var result = {
      	1: 'No, and...',
      	2: 'No.',
		3: 'No, but...',
		4: 'Yes, but...',
		5: 'Yes.',
		6: 'Yes, and...'
      }

 	  if (likely > 1) {
        notation = '2d6-L';
      } else if (likely < 1) {
      	notation = '2d6-H';
      } else {
      	notation = '1d6';
      }
            
      var roll = roller.roll(notation);
      
      return {
      	'output': roll.output,
      	'total': roll.total,
      	'result': result[roll.total]
      }
    }
    
    portent(){
	  var action_one_table = ["Attainment","Starting","Neglect","Fight","Recruit","Triumph","Violate","Oppose","Malice","Communicate","Persecute","Increase","Decrease","Abandon","Gratify","Inquire","Antagonize","Move","Waste","Truce","Expose","Haggle","Imprison","Release","Celebrate","Develop","Travel","Block","Harm","Debase","Overindulge","Adjourn","Adversity","Kill","Disrupt","Usurp","Create","Betray","Agree","Abuse","Excitement","Activity","Assist","Care","Negligence","Passion","Work","Control","Attract","Failure","Pursue","Vengeance","Proceedings","Dispute","Punish","Guide","Transform","Overthrow","Oppress","Change","Release","Befriend","Judge","Desert","Dominate","Procrastinate","Praise","Separate","Take","Break","Heal","Delay","Stop","Lie","Return","Imitate","Struggle","Inform","Bestow","Postpone","Oppress","Inspect","Ambush","Spy","Attach","Carry","Open","Carelessness","Ruin","Extravagance","Trick","Arrive","Propose","Divide","Refuse","Mistrust","Deceive","Cruelty","Intolerance","Trust"]
	  var action_two_table = ["Goals","Dreams","Environment","Outside","Inside","Reality","Allies","Enemies","Evil","Good", "Emotions","Opposition","War","Peace","Innocent","Love","Spirit","Intellect","Ideas","Joy", "Advice","Plot","Competition","Prison","Illness","Food","Attention","Success","Failure","Travel", "Jealousy","Dispute","Home","Investment","Suffering","Wishes","Tactics","Stalemate","Randomness", "Misfortune","Victory","Dispute","Riches","Normal","Technology","Hope","Magic","Illusions","Portals", "Danger","Weapons","Animals","Weather","Elements","Nature","Masses","Leadership","Fame","Anger", "Information","Messages","Energy","Balance","Tension","Friendship","Physical","Project","Pleasures", "Pain","Possessions","Benefits","Plans","Lies","Expectations","Legal","Bureaucracy","Business", "Path","News","Exterior","Death","Disruption","Power","Burden","Intrigues","Fears","Ambush","Rumor", "Wounds","Extravagance","Representative","Adversities","Opulence","Liberty","Military","Mundane", "Trials","Masses","Vehicle","Art"]
	  var action_one = action_one_table[Math.floor(Math.random() * action_one_table.length)]
	  var action_two = action_two_table[Math.floor(Math.random() * action_two_table.length)]
	  return {
		  'result': action_one + ' ' + action_two,
	  }	  
    }
    
    intervention(){
      var roller = new DiceRoller();
      var result = {
      	1: 'New entity',
      	2: 'Entity positive',
		3: 'Entity negative',
		4: 'Advance plot',
		5: 'Regress plot',
		6: 'Wild'
      }
      var roll = roller.roll('1d6');
      
      var result = result[roll.total];
      
      if(roll.total == 6) {
      	var portentResult = this.portent();
      	result = result + ": " + portentResult.result;
      }
      
      return {
      	'output': roll.output,
      	'total': roll.total,
      	'result': result
      }      
    }
    
    npcStartingAttitude(modifier=""){
      var roller = new DiceRoller();
      var result = {
      	1: 'Hostile',
      	2: 'Hostile',
		3: 'Neutral',
		4: 'Neutral',
		5: 'Friendly',
		6: 'Friendly'
      }
      	  
	  var roll = roller.roll(`1d6${modifier}`);
      
      var total = Number(roll.total).clamp(1,6);
      var result = result[total];
      
      return {
      	'output': roll.output,
      	'total': roll.total,
      	'result': result
      }  
    }
    
    twene(){
      var roller = new DiceRoller();
      var result = {
      	1: 'Increase simple element',
      	2: 'Decrease simple element',
		3: 'Add simple element',
		4: 'Remove simple element',
		5: 'Increase major element',
		6: 'Decrease major element',
		7: 'Add major element',
		8: 'Remove major element',
		9: 'Wild positive',
	   10: 'Wild negative'				
      }    	
      var roll = roller.roll('1d10');
      
      var result = result[roll.total];
      
      if(roll.total == 9 || roll.total == 10) {
        var portentResult = this.portent();
      	result = result + ": " + portentResult.result;
      }      
      
      return {
      	'output': roll.output,
      	'total': roll.total,
      	'result': result
      }
    }

  }

  return Mune;
})();

export default Mune;