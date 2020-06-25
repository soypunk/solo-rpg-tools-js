import { DiceRoller } from '../node_modules/rpg-dice-roller/lib/esm/bundle.js';
import { Utils } from './utils.js'

const utils = new Utils()

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
    constructor(data){}
    
    /**
     *
     * @param {string} notation
     * @returns {]}
     */
    
    get chaosFactors() {
    	return [
    		3,
    		4,
    		5,
    		6
    	]
    }
    
    get odds() {
    	return [
			'Impossible',
			'No Way',
			'Very Unlikely',
			'Unlikely',
			'50/50',
			'Likely',
			'Very Likely',
			'Sure Thing',
			'Has to Be'    		
    	]
    }
    
    get oddsModifiers() {
		return [
			'-8',
			'-6',
			'-4',
			'-2',
			'0',
			'+2',
			'+4',
			'+6',
			'+8'
		]    
    }
     
	fateCheck(chaos_factor=4, probability=0, yes_favors_player=true) {
		var result = ''
		var roller = new DiceRoller()
		var rolls = roller.roll('2d10','1d10')
		var favorability = 0
		
		if (chaos_factor == 3) {
			if (yes_favors_player == true) {
				favorability = 2
			} else {
				favorability = -2
			}
		} else if (chaos_factor == 6) {
			if (yes_favors_player == true) {
				favorability = -2
			} else {
				favorability = 2
			}
		}
		
		var fate_check_total = ((Number(rolls[0].total) + Number(probability)) + Number(favorability))
		
		if (fate_check_total >= 11) {
			result = 'Yes'
		} else {
			result = 'No'
		}
		
		var event = false
        
		if (Number(rolls[1].total) <= chaos_factor) {
            var fate_roll1 = Number(rolls[0].rolls[0][0])
            var fate_roll2 = Number(rolls[0].rolls[0][1])
			if (fate_roll1 == fate_roll2) {
				result = result + ' (Exceptional and Random Event)'
				event = true
			} else {
				if (fate_roll1%2==0 && fate_roll2%2==0) {
					result = result + ' (Random Event)'
				} else if (fate_roll1%2!=0 && fate_roll2%2!=0) {
					result = result + ' (Exceptional)'
				}
			}
		}		
			
		return {
			'rolls': rolls,
			'total': fate_check_total,
			'result': result,
			'extras': {
				'event': event
			}
		}
	}
	
    sceneCheck(chaos_factor=4) {
        var result = ''
        var roller = new DiceRoller()
        var rolls = roller.roll('1d10')
        
        if (Number(rolls.total) > chaos_factor) {
            result = 'Unmodified';
        } else if (Number(rolls.total)%2 == 0) {
            result = 'Interrupted';
        } else {
            result = 'Altered';
        }
        return {
            'rolls': rolls.rolls,
            'total': rolls.total,
            'result': result,
            'extras': null            
        }
    }
    
    detailCheck(chaos_factor=4) {        
        var modifier = ""
        
        if (chaos_factor == 3) {
            modifier = "+2"
        } else if (chaos_factor == 6) {
            modifier = "-2"
        }
        
        var roller = new DiceRoller()
        var rolls = roller.roll(`2d10${modifier}`)

        var details_table = {
            '-4':  'Anger',
             5:  'Sadness',
             6:  'Fear',
             7:  'Disfavors Thread',
             8:  'Disfavors PC',
             9:  'Focus NPC',
            10:  'Favors NPC',
            11:  'Focus PC',
            12:  'Disfavors NPC',
            13:  'Focus Thread',
            14:  'Favors NPC',
            15:  'Favors Thread' ,
            16:  'Courage',
            17:  'Happiness',
            18:  'Calm'
        }

        var result = details_table[utils.getClosestKey(details_table, rolls.total)]

        return {
            'rolls': rolls,
            'total': rolls.total,
            'result': result,
            'extras': null
        }
    }
    
    description() {
        var descriptor_one_table = ["Abnormally","Adventurously","Aggressively","Angrily","Anxiously","Awkwardly","Beautifully", "Bleakly","Boldly","Bravely","Busily","Calmly","Carefully","Carelessly","Cautiously","Ceaselessly", "Cheerfully","Combatively","Coolly","Crazily","Fully","Generously","Gently","Gladly","Gracefully", "Gratefully","Happily","Hastily","Healthily","Helpfully","Helplessly","Hopelessly","Innocently", "Intensely","Interestingly","Irritatingly","Jovially","Joyfully","Judgementally","Kindly", "Peacefully","Perfectly","Playfully","Politely","Positively","Powerfully","Quaintly","Quarrelsomely", "Quietly","Roughly","Rudely","Ruthlessly","Slowly","Softly","Swiftly","Threateningly","Very","Violently", "Wildly","Yieldingly","Curiously","Daintily","Dangerously","Defiantly","Deliberately","Delightfully", "Dimly","Efficiently","Energetically","Enormously","Enthusiastically","Excitedly","Fearfully", "Ferociously","Fiercely","Foolishly","Fortunately","Frantically","Freely","Frighteningly","Kookily", "Lazily","Lightly","Loosely","Loudly","Lovingly","Loyally","Majestically","Meaningfully","Mechanically","Miserably","Mockingly","Mysteriously","Naturally","Neatly","Nicely","Oddly","Offensively","Officially","Partially", "Peacefully", "Perfectly", "Playfully", "Politely", "Positively", "Powerfully", "Quaintly","Quarrelsomely" , "Quietly", "Roughly", "Rudely", "Ruthlessly", "Slowly", "Softly", "Swiftly","Threateningly", "Very", "Violently", "Wildly", "Yieldingly"]
        var descriptor_two_table = ["Abandoned","Abnormal","Amusing","Ancient","Aromatic","Average","Beautiful","Bizarre","Classy","Clean","Cold","Colorful","Creepy","Cute","Damaged","Dark","Defeated","Delicate","Delightful","Dirty","Graceful","Hard","Harsh","Healthy","Heavy","Historical","Horrible","Important","Interesting","Juvenile","Lacking","Lame","Large","Lavish","Lean","Less","Lethal","Lonely","Lovely","Macabre","Remarkable","Rotten","Rough","Ruined","Rustic","Scary","Simple","Small","Smelly","Smooth","Soft","Strong","Tranquil","Ugly","Valuable","Warlike","Warm","Watery","Weak","Young","Disagreeable","Disgusting","Drab","Dry","Dull","Empty","Enormous","Exotic","Faded","Familiar","Fancy","Fat","Feeble","Feminine","Festive","Flawless","Fresh","Full","Glorious","Good","Magnificent","Masculine","Mature","Messy","Mighty","Military","Modern","Extravagant","Mundane","Mysterious","Natural","Nondescript","Odd","Pale","Petite","Poor","Powerful","Quaint","Rare","Reassuring"]
        var descriptor_one = descriptor_one_table[Math.floor(Math.random() * descriptor_one_table.length)]
        var descriptor_two = descriptor_two_table[Math.floor(Math.random() * descriptor_two_table.length)]
        return {
            'rolls': null,
            'total': null,
            'result': descriptor_one + ' ' + descriptor_two,
            'extras': null            
        }
    }
    
    action() {
        var action_one_table = ["Attainment","Starting","Neglect","Fight","Recruit","Triumph","Violate","Oppose","Malice","Communicate","Persecute","Increase","Decrease","Abandon","Gratify","Inquire","Antagonize","Move","Waste","Truce","Expose","Haggle","Imprison","Release","Celebrate","Develop","Travel","Block","Harm","Debase","Overindulge","Adjourn","Adversity","Kill","Disrupt","Usurp","Create","Betray","Agree","Abuse","Excitement","Activity","Assist","Care","Negligence","Passion","Work","Control","Attract","Failure","Pursue","Vengeance","Proceedings","Dispute","Punish","Guide","Transform","Overthrow","Oppress","Change","Release","Befriend","Judge","Desert","Dominate","Procrastinate","Praise","Separate","Take","Break","Heal","Delay","Stop","Lie","Return","Imitate","Struggle","Inform","Bestow","Postpone","Oppress","Inspect","Ambush","Spy","Attach","Carry","Open","Carelessness","Ruin","Extravagance","Trick","Arrive","Propose","Divide","Refuse","Mistrust","Deceive","Cruelty","Intolerance","Trust"]
        var action_two_table = ["Goals","Dreams","Environment","Outside","Inside","Reality","Allies","Enemies","Evil","Good", "Emotions","Opposition","War","Peace","Innocent","Love","Spirit","Intellect","Ideas","Joy", "Advice","Plot","Competition","Prison","Illness","Food","Attention","Success","Failure","Travel", "Jealousy","Dispute","Home","Investment","Suffering","Wishes","Tactics","Stalemate","Randomness", "Misfortune","Victory","Dispute","Riches","Normal","Technology","Hope","Magic","Illusions","Portals", "Danger","Weapons","Animals","Weather","Elements","Nature","Masses","Leadership","Fame","Anger", "Information","Messages","Energy","Balance","Tension","Friendship","Physical","Project","Pleasures", "Pain","Possessions","Benefits","Plans","Lies","Expectations","Legal","Bureaucracy","Business", "Path","News","Exterior","Death","Disruption","Power","Burden","Intrigues","Fears","Ambush","Rumor", "Wounds","Extravagance","Representative","Adversities","Opulence","Liberty","Military","Mundane", "Trials","Masses","Vehicle","Art"]
        var action_one = action_one_table[Math.floor(Math.random() * action_one_table.length)]
        var action_two = action_two_table[Math.floor(Math.random() * action_two_table.length)]
        return {
            'rolls': null,
            'total': null,
            'result': action_one + ' ' + action_two,
            'extras': null            
        }
    }
    
    eventAction() {
        var event_meaning_actions = ['Attainment', 'Starting', 'Neglect', 'Fight', 'Recruit', 'Triumph', 'Violate', 'Oppose', 'Malice', 'Communicate', 'Persecute', 'Increase', 'Decrease', 'Abandon', 'Gratify', 'Inquire', 'Antagonise', 'Move', 'Waste', 'Truce', 'Release', 'Befriend', 'Judge', 'Desert', 'Dominate', 'Procrastinate', 'Praise', 'Separate', 'Take', 'Break', 'Heal', 'Delay', 'Stop', 'Lie', 'Return', 'Immitate', 'Struggle', 'Inform', 'Bestow', 'Postpone', 'Expose', 'Haggle', 'Imprison', 'Release', 'Celebrate', 'Develop', 'Travel', 'Block', 'Harm', 'Debase', 'Overindulge', 'Adjourn', 'Adversity', 'Kill', 'Disrupt', 'Usurp', 'Create', 'Betray', 'Agree', 'Abuse', 'Oppress', 'Inspect', 'Ambush', 'Spy', 'Attach', 'Carry', 'Open', 'Carelessness', 'Ruin', 'Extravagance', 'Trick', 'Arrive', 'Propose', 'Divide', 'Refuse', 'Mistrust', 'Deceive', 'Cruelty', 'Intolerance', 'Trust', 'Excitement', 'Activity', 'Assist', 'Care', 'Negligence', 'Passion', 'Work hard', 'Control', 'Attract', 'Failure', 'Pursue', 'Vengeance', 'Proceedings', 'Dispute', 'Punish', 'Guide', 'Transform', 'Overthrow', 'Oppress', 'Change']
        var event_meaning_subjects = ['Goals','Dreams','Environment','Outside','Inside','Reality','Allies','Enemies','Evil','Good','Emotions','Opposition','War','Peace','The innocent','Love','The spiritual','The intellectual','New ideas','Joy','Messages','Energy','Balance','Tension','Friendship','The physical','A project','Pleasures','Pain','Possessions','Benefits','Plans','Lies','Expectations','Legal matters','Bureaucracy','Business','A path','News','Exterior factors','Advice','A plot','Competition','Prison','Illness','Food','Attention','Success','Failure','Travel','Jealousy','Dispute','Home','Investment','Suffering','Wishes','Tactics','Stalemate','Randomness','Misfortune','Death','Disruption','Power','A burden','Intrigues','Fears','Ambush','Rumor','Wounds','Extravagance','A representative','Adversities','Opulence','Liberty','Military','The mundane','Trials','Masses','Vehicle','Art','Victory','Dispute','Riches','Status quo','Technology','Hope','Magic','Illusions','Portals','Danger','Weapons','Animals','Weather','Elements','Nature','The public','Leadership','Fame','Anger','Information']
        var action = event_meaning_actions[Math.floor(Math.random() * event_meaning_actions.length)]
        var subject = event_meaning_subjects[Math.floor(Math.random() * event_meaning_subjects.length)]
        return {
            'rolls': null,
            'total': null,
            'result': action + ' ' + subject,
            'extras': null
        }
    }
    
    eventCheck() {
        var events_table = {
            1:  'Remote Event',
            8:  'NPC Action',
           29:  'Introduce a new NPC',
           36:  'Move towards a Plotline',
           46:  'Move Away From a Plotline',
           53:  'Close a Plotline',
           56:  'PC Negative',
           68:  'PC Positive' ,
           76:  'Ambiguous Event',
           84:  'NPC Negative',
           93:  'NPC Positive'
        }

        var event_definitions = {
            'Remote Event': 				'Something important has happened that bears on the adventure, but the player characters were not present when the event occurred, they only learn about it remotely.',
            'NPC Action': 					'An existing non-player character makes a surprise action.',
            'Introduce a new NPC': 			'A brand new face is involved in the adventure. This may be someone the player characters had expected to meet, or a surprise.',
            'Move towards a Plotline': 		'This random event has something to do directly with resolving an open plotline. If there are more than one, then randomly determine which plotline it is.',
            'Move Away From a Plotline': 	'This event makes resolving a plotline a little more difficult, but not necessarily impossible. If there are more than one, then randomly determine which plotline it is.',
            'Close a Plotline': 			'The random event is so important it actually closes an open plotline. If there are multiple plotlines open, then randomly determine which one it is.',
            'PC Negative': 					'Something bad happens to a player character.',
            'PC Positive' : 				'Something good happens to a player character.',
            'Ambiguous Event': 				'This is a catchall category for anything that does not directly impact characters or NPCs. The event is not necessarily bad or good.',
            'NPC Negative': 				'Something bad happens to a non-player character.',
            'NPC Positive': 				'Something good happens to a non-player character.'
        }

		var roller = new DiceRoller()
        var rolls = roller.roll('1d100')
        var result = events_table[utils.getClosestKey(events_table, rolls.total)]
        var eventMeaning = this.eventAction()

        return {
            'rolls': rolls,
            'total': rolls.total,
            'result': result,
            'extras': {
                'definition': event_definitions[result],
                'meaning': eventMeaning.result
            }
        }
    }     
    
	statCheck(attribute_value=null, stat_check_modifier="", round=true) {
	  var roller = new DiceRoller()
	  attribute_value = Number(attribute_value)
	  var baseline_value = attribute_value
	  var result = ''
	  var rolls = roller.roll(`2d10${stat_check_modifier}`)
	  var total = rolls.total

	  if (total < 3) {
		  var modifier = (75 / 100) * attribute_value;
		  attribute_value = attribute_value - modifier;
		  result = "Very Weak -75%";
	  } else if (total < 5) {
		  var modifier = (50 / 100) * attribute_value;
		  attribute_value = attribute_value - modifier;
		  result = 'Weak -50%';
	  } else if (total < 7) {
		  var modifier = (10 / 100) * attribute_value;
		  attribute_value = attribute_value - modifier;
		  result = 'Less -10%';
	  } else if (total < 12) {
		  result = 'Expected Baseline';
	  } else if (total < 15) {
		  var modifier = (10 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'More +10%';
	  } else if (total < 17) {
		  var modifier = (50 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'Strong +50%';
	  } else if (total < 19) {
		  var modifier = (100 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'Very Strong +100%';
	  } else if (total < 21) {
		  result = 'PC Baseline';
	  } else if (total < 23) {
		  var modifier = (10 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'PC More +10%';
	  } else if (total < 25) {
		  var modifier = (50 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'PC Strong +50%';
	  } else if (total < 27) {
		  var modifier = (100 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'PC Very Strong +100%';
	  }

	  if (baseline_value != Number(0) && baseline_value !== null) {
	  	  if (round) {
	  	  	attribute_value = Math.round(attribute_value);
	  	  }
		  result = result + ' (' + attribute_value + ')';
	  }
	  return {
		  'rolls': rolls.output,
		  'total': total,
		  'result': result
	  }
	}    

	dispositionCheck(total) {
		var disposition = ''
		var disposition_modifier = ''
		if (total < 6) {
			disposition = 'Passive';
			disposition_modifier = "-2";
		} else if (total < 11) {
			disposition = 'Moderate';
			disposition_modifier = "";
		} else if (total < 16) {
			disposition = 'Active';
			disposition_modifier = "+2";
		} else {
			disposition = 'Aggressive';
			disposition_modifier = "+4";
		}
		return {
			'disposition': disposition,
			'disposition_modifier': disposition_modifier
		}	
	}
	
	behaviorCheck(modifier="") {
		// modifier represents the +/- of any activated descriptors, this
		// really has to be done manually as the ideal UI is too complicated IMHO
		var result = ''
		var roller = new DiceRoller()
		var rolls = roller.roll(`2d10${modifier}`)
		var total = rolls.total

		var DISPOSITION_DEFINITIONS = {
			'Passive': 'The Character takes the softest approach to their Actions.',
			'Moderate': 'The Character acts in a moderate fashion, not too intense, not too passive.',
			'Active': 'The Character wants to make their Actions known.',
			'Aggressive': 'The Character acts with the utmost urgency and intensity.',
		}
		var dispositionResult = this.dispositionCheck(total)
		var disposition = dispositionResult.disposition
		
		// now need to do the NPC Action
		var npc_action = this.npcAction(dispositionResult.disposition_modifier)

		var result_string =  `${disposition}: ${DISPOSITION_DEFINITIONS[disposition]}
NPC Behavior: ${npc_action.result}`

		if (npc_action.extras.disposition_score_modifier != 0) {
			dispositionResult = this.dispositionCheck(total + npc_action.extras.disposition_score_modifier)
			if (disposition != dispositionResult.disposition) {
				disposition = dispositionResult.disposition
				result_string += `\nDiposition Change! ${disposition}: ${DISPOSITION_DEFINITIONS[disposition]}`
			}
		}
		
		return {
			'rolls': rolls,
			'total': total,
			'result': result_string
		}
	}
	
	npcAction(disposition_modifier="") {
		// disposition modifier only applies to npc action table 2
		let result = ''
		let rolls = roller.roll('1d10')
		let NPC_ACTION_TABLE = {
			 1: 'Theme action',
			 4: 'NPC continues',
			 6: 'NPC continues (+2)',
			 7: 'NPC continues (-2)',
			 8: 'NPC action',
			 9: 'NPC action (-4)',
			10: 'NPC action (+4)'
		}
		let NPC_ACTION_MEANING_TABLE_1 = {
			'Theme action': 'The NPC takes an Action in keeping with the current Theme, Disposition, and Activated Descriptors. If the NPC was already performing an Action, the NPC stops that Action and switches to another, expected Action.',
			'NPC continues': 'The NPC will continue their current Action, or take it to the next level, whichever makes the most sense. If the NPC has not acted yet in this Scene, then treat the result as a Theme Action.',
			'NPC continues (+2)': 'The NPC will continue their current Action, or take it to the next level, whichever makes the most sense. If the NPC has not acted yet in this Scene, then treat the result as a Theme Action +2.',
			'NPC continues (-2)': 'The NPC will continue their current Action, or take it to the next level, whichever makes the most sense. If the NPC has not acted yet in this Scene, then treat the result as a Theme Action -2.',
			'NPC action': 'The NPC takes a new, maybe unexpected, Action',
			'NPC action (-4)': 'The NPC takes a new, maybe unexpected, Action',
			'NPC action (+4)': 'The NPC takes a new, maybe unexpected, Action'
		}
		let action1 = NPC_ACTION_TABLE[utils.getClosestKey(NPC_ACTION_TABLE, rolls.total)]
		result = action1 + ' - ' + NPC_ACTION_MEANING_TABLE_1[action1]

		// if NPC Continues +/- then the NPC's disposition may change
		let disposition_score_modifier = 0
		if (action1 == 'NPC continues (+2)') {	
			disposition_score_modifier = 2
		} else if (action1 == 'NPC continues (-2)') {
			disposition_score_modifier = Number(eval("-2"))
		}
		
		if (action1.includes('NPC action')) {
			let modifier = ""			
			disposition_modifier = Number(Number(eval(disposition_modifier)) + Number(eval(disposition_score_modifier)))
			disposition_modifier = disposition_modifier.toString()
			
			if (action1 == 'NPC action (-4)') {
				modifier = "-4"
			} else if (action1 == 'NPC action (+4)') {
				modifier = "+4"
			}
			
			// if NPC Action then we need to determine what the action is
			let action2_rolls = roller.roll(`2d10${modifier}${disposition_modifier}`)
			let action2_total = action2_rolls.total;

			if (action2_total < 7) {
				result += ' (Talks, exposition)';
			} else if (action2_total < 9) {
				result += ' (Perfoms an ambiguous action)';
			} else if (action2_total < 11) {
				result += ' (Acts out of PC interest)';
			} else if (action2_total == 11) {
				result += ' (Gives something)';
			} else if (action2_total == 12) {
				result += ' (Seeks to end the encounter)';
			} else if (action2_total == 13) {
				result += ' (Changes the theme)';
			} else if (action2_total == 14) {
				result += ' (Changes descriptor)';
			} else if (action2_total < 18) {
				result += ' (Acts out of self interest)';
			} else if (action2_total == 18) {
				result += ' (Takes something)';
			} else if (action2_total > 18) {
				result += ' (Causes harm)';
			}
		}	

		return {
			'rolls': rolls,
			'total': rolls.total,
			'result': result,
			'extras': {
				'disposition_score_modifier': disposition_score_modifier
			}
		}
	}	

  }

  return Mythic;
})();

export default Mythic;    