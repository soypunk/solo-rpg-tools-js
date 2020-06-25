import { DiceRoller } from 'rpg-dice-roller';
import { Utils } from './utils.js';

const utils = new Utils();

/**
 * Une
 *
 * @type {Une}
 */
const Une = (() => {
  /**
   *
   * @param {{}=} data
   */   
   
  class Une{
    /**
     * Initialises the object
     *
     * @constructor
     * @param data
     */
    constructor(data){}
    
	modifier() {
		var UNE_NPC_MODIFIER_TABLE = ["superfluous","inept","pleasant","lethargic","jovial","addicted","banal","insensitive","defiant","shrewd","conformist","logical","titled","obnoxious","liberal","nefarious","subtle","inexperienced","insightful","compliant","sensible","reputable","prying","tactless","destitute","untrained","wicked","oblivious","fanatic","conniving","romantic","lazy","refined","plebeian","careful","unreasonable","pessimistic","indispensable","childish","alluring","skilled","solemn","scholarly","pious","defective","neglectful","habitual","conservative","uneducated","optimistic","lively","meek","uncouth","inconsiderate","affluent","forthright","helpful","willful","cultured","despondent","idealistic","unconcerned","indifferent","revolting","mindless","unsupportive","generous","fickle","curious","passionate","rational","docile","elderly","touchy","devoted","coarse","cheery","sinful","needy","established","foolish","pragmatic","naive","dignified","unseemly","cunning","serene","privileged","pushy","dependable","delightful","thoughtful","glum","kind","righteous","miserly","hopeless","likable","corrupt","confident"];
		return UNE_NPC_MODIFIER_TABLE[Math.floor(Math.random() * UNE_NPC_MODIFIER_TABLE.length)];
	}
	
	noun() {
		var UNE_NPC_NOUN_TABLE = ["gypsy","missionary","villager","mediator","performer","witch","outcast","magus","crook","magister","merchant","mercenary","conscript","civilian","serf","expert","caretaker","worker","activist","brute","commoner","hermit","actor","hero","inquisitor","judge","orator","herald","champion","lord","ranger","chieftain","highwayman","cleric","villain","occultist","pioneer","fortune-hunter","slave","professor","reverend","burglar","governor","gunman","servant","thug","vicar","scrapper","clairvoyant","charmer","drifter","officer","monk","patriarch","globetrotter","journeyman","explorer","homemaker","shopkeeper","sniper","statesman","warden","recluse","crone","courtier","astrologer","outlaw","steward","adventurer","priest","duelist","adept","polymath","soldier","tradesman","jack-of-all-trades","bum","magician","entertainer","hitman","aristocrat","sorcerer","traveler","craftsman","wizard","preacher","laborer","vagrant","scientist","beggar","artisan","master","apprentice","ascetic","tradesman","rogue","ascendant","politician","superior","warrior"];
		return UNE_NPC_NOUN_TABLE[Math.floor(Math.random() * UNE_NPC_NOUN_TABLE.length)];
	}	
	
	power(power_level=1) {
		var roller = new DiceRoller()
		var power_table = {
			1: {
				 1: 'much weaker',
				 3: 'slightly weaker',
				11: 'comparable',
				91: 'slightly stronger',
				99: 'much stronger'
			},
			2: {
				 1: 'much weaker',
				 5: 'slightly weaker',
				16: 'comparable',
				86: 'slightly stronger',
				97: 'much stronger'
			},
			3: {
				 1: 'much weaker',
				 6: 'slightly weaker',
				21: 'comparable',
				81: 'slightly stronger',
				96: 'much stronger'
			},						
			4: {
				 1: 'much weaker',
				 9: 'slightly weaker',
				26: 'comparable',
				76: 'slightly stronger',
				93: 'much stronger'
			},
			5: {
				 1: 'much weaker',
				13: 'slightly weaker',
				31: 'comparable',
				71: 'slightly stronger',
				89: 'much stronger'
			}
		}
		var rolls = roller.roll('1d100')
		return power_table[power_level][utils.getClosestKey(power_table[power_level], rolls.total)]		
	}
	
	motivations(){
		var motivations = [];

		var UNE_NPC_MOTIVATION_VERB_TABLE = ["advise","shepherd","take","work","manage","obtain","abuse","discover","accompany","suppress","attempt","indulge","deter","offend","proclaim","spoil","chronicle","acquire","guide","operate","oppress","fulfill","damage","learn","access","interact","drive","publicize","persecute","refine","create","review","burden","communicate","compose","abduct","aid","advocate","process","undermine","promote","follow","implement","report","explain","conceive","advance","understand","develop","discourage","blight","guard","collaborate","steal","attend","progress","conquer","strive","suggest","detect","distress","hinder","complete","weaken","execute","possess","plunder","compel","achieve","maintain","record","construct","join","secure","realize","embrace","encourage","assist","inform","convey","contact","agonize","defile","patronize","rob","pursue","comprehend","produce","depress","establish","associate","administer","institute","determine","overthrow","prepare","relate","account","seek","support"];
		var UNE_NPC_MOTIVATION_VERB_PLURAL_FORM_TABLE = ["advises","shepherds","takes","works","manages","obtains","abuses","discovers","accompanies","suppresses","attempts","indulges","deters","offends","proclaims","spoils","chronicles","acquires","guides","operates","oppresses","fulfills","damages","learns","accesses","interacts","drives","publicizes","persecutes","refines","creates","reviews","burdens","communicates","composes","abducts","aids","advocates","processes","undermines","promotes","follows","implements","reports","explains","conceives","advances","understands","develops","discourages","blights","guards","collaborates","steals","attends","progresses","conquers","strives","suggests","detects","distresses","hinders","completes","weakens","executes","possesses","plunders","compels","achieves","maintains","records","constructs","joins","secures","realizes","embraces","encourages","assists","informs","conveys","contacts","agonizes","defiles","patronizes","robs","pursues","comprehends","produces","depresses","establishes","associates","administers","institutes","determines","overthrows","prepares","relates","accounts","seeks","supports"];

		var UNE_NPC_MOTIVATION_NOUN_TABLE = [];
		var UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_ONE = ["wealth", "hardship", "affluence", "resources","prosperity", "poverty", "opulence","deprivation","success", "distress", "contraband", "music","literature", "technology", "alcohol","medicines","beauty", "strength", "intelligence", "force"];
		var UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_TWO = ["the wealthy", "the populous", "enemies","the public", "religion", "the poor", "family","the elite", "academia", "the forsaken", "the law","the government", "the oppressed", "friends","criminals", "allies", "secret societies","the world", "military", "the church"];
		var UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_THREE = ["dreams", "discretion", "love", "freedom","pain", "faith", "slavery", "enlightenment","racism", "sensuality", "dissonance", "peace","discrimination", "disbelief", "pleasure","hate","happiness", "servitude", "harmony", "justice"];
		var UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_FOUR = ["gluttony", "lust", "envy", "greed", "laziness","wrath", "pride", "purity", "moderation","vigilance", "zeal", "composure", "charity","modesty", "atrocities", "cowardice", "narcissism","compassion","valor", "patience"];
		var UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_FIVE = ["advice", "propaganda","science","knowledge","communications","lies","myths","riddles","stories", "legends", "industry", "new religions","progress", "animals", "ghosts", "magic","nature","old religions", "expertise", "spirits"];
		UNE_NPC_MOTIVATION_NOUN_TABLE.push(...UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_ONE);
		UNE_NPC_MOTIVATION_NOUN_TABLE.push(...UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_TWO);
		UNE_NPC_MOTIVATION_NOUN_TABLE.push(...UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_THREE);
		UNE_NPC_MOTIVATION_NOUN_TABLE.push(...UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_FOUR);
		UNE_NPC_MOTIVATION_NOUN_TABLE.push(...UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_FIVE);

		var motivation_columns = {
			 1: UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_ONE,
			21: UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_TWO,
			41: UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_THREE,
			61: UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_FOUR,
			81: UNE_NPC_MOTIVATION_NOUN_TABLE_COLUMN_FIVE
		}

		var motivation_columns_used = [];

		var motivation_verb_rolls = [
			Math.floor(Math.random() * 100),
			Math.floor(Math.random() * 100),
			Math.floor(Math.random() * 100)
		];

		do {
			// Math.floor(Math.random() * UNE_NPC_NOUN_TABLE.length)
			var motivation_noun_roll = Math.floor(Math.random() * 100) + 1;
			var ck = utils.getClosestKey(motivation_columns, motivation_noun_roll);
			if (motivation_columns_used.includes(ck)) { continue; }
			var motivation_noun = UNE_NPC_MOTIVATION_NOUN_TABLE[motivation_noun_roll];
			var mv_roll = motivation_verb_rolls.pop();
			var motivation_verb = UNE_NPC_MOTIVATION_VERB_PLURAL_FORM_TABLE[mv_roll];
			motivations.push(motivation_verb + ' ' + motivation_noun);
		} while (motivations.length < 3);

		return motivations;
	}	
	
	npc(power_level=1) {
		var sentence = '';
		var npc = {
			'modifier': this.modifier(),
			'noun': this.noun(),
			'power': this.power(power_level),
			'motivations': this.motivations()
		}
		
		if (['a','e','i','o','u'].indexOf(npc['modifier'][0].toLowerCase()) >= 0) {
			sentence = 'An '
		} else {
			sentence = 'A '
		}
		
		var power = '';
		if (npc['power'] == 'comparable') {
			power = npc['power'] + ' to the party'
		} else {
			power = npc['power'] + ' than the party'
		}
		
		var motivations = utils.arrayToSentence(npc['motivations'])
		
		sentence = sentence + npc['modifier'] + ' ' + npc['noun']
		sentence = sentence + ' ' + power + ' ' + motivations + '.'
		
		return {
			'rolls': false,
			'total': false,
			'result': sentence,
			'extras': npc
		}
	}
	
	get moods() {
		return [
			'loved',
			'friendly',
			'peaceful',
			'neutral',
			'distrustful',
			'hostile',
			'hated'
		]
	}
	
	mood(relationship='neutral') {
		var mood_table = {
			      'loved': {
					 1: 'withdrawn',
					 2: 'guarded',
					 7: 'cautious',
					17: 'neutral',
					32: 'sociable',
					71: 'helpful',
					86: 'forthcoming'
			    },
			   'friendly': {
					 1: 'withdrawn',
					 3: 'guarded',
					 9: 'cautious',
					21: 'neutral',
					41: 'sociable',
					71: 'helpful',
					90: 'forthcoming'
			   },
			   'peaceful': {
					 1: 'withdrawn',
					 4: 'guarded',
					12: 'cautious',
					26: 'neutral',
					56: 'sociable',
					71: 'helpful',
					94: 'forthcoming'
			   },
				'neutral': {
					 1: 'withdrawn',
					 6: 'guarded',
					16: 'cautious',
					31: 'neutral',
					71: 'sociable',
					71: 'helpful',
					96: 'forthcoming'
				},
			'distrustful': {
					 1: 'withdrawn',
					 8: 'guarded',
					19: 'cautious',
					47: 'neutral',
					77: 'sociable',
					71: 'helpful',
					98: 'forthcoming'
				},
				'hostile': {
					 1: 'withdrawn',
					12: 'guarded',
					25: 'cautious',
					62: 'neutral',
					82: 'sociable',
					71: 'helpful',
					99: 'forthcoming'
				},
				  'hated': {
					 1: 'withdrawn',
					16: 'guarded',
					31: 'cautious',
					70: 'neutral',
					85: 'sociable',
					71: 'helpful',
				   100: 'forthcoming'
				}		
		}
		var roller = new DiceRoller()
		var mood_rolls = roller.roll('1d100')
		var mood_result = mood_table[relationship][utils.getClosestKey(mood_table[relationship], mood_rolls.total)]
		return {
			'rolls': mood_rolls,
			'total': mood_rolls.total,
			'result': mood_result,
			'extras': false
		}
	}
	
	get demeanors() {
		return [
			'scheming',
			'insane',
			'friendly',
			'hostile',
			'inquisitive',
			'knowing',
			'mysterious',
			'prejudiced'
		]
	}	
	
	importance(demeanor='') {
		var roller = new DiceRoller()
		var demeanor_table = {
			 1: 'scheming',
			13: 'insane',
			25: 'friendly',
			37: 'hostile',
			50: 'inquisitive',
			63: 'knowing',
			76: 'mysterious',
			89: 'prejudiced'
		}
		if (demeanor == '') {			
			var demeanor_rolls = roller.roll('1d100')
			demeanor = demeanor_table[utils.getClosestKey(demeanor_table, demeanor_rolls.total)]
		}
	
		var bearing_table = {
			'scheming': {
					 1: 'intent',
					11: 'bargain',
					21: 'means',
					31: 'proposition',
					41: 'plan',
					51: 'compromise',
					61: 'agenda',
					71: 'arrangement',
					81: 'negotiation',
					91: 'plot'
			},
			'insane': {
					 1: 'madness',
					11: 'fear',
					21: 'accident',
					31: 'chaos',
					41: 'idiocy',
					51: 'illusion',
					61: 'turmoil',
					71: 'confusion',
					81: 'façade',
					91: 'bewilderment'
			},
			'friendly': {
					 1: 'alliance',
					11: 'comfort',
					21: 'gratitude',
					31: 'shelter',
					41: 'happiness',
					51: 'support',
					61: 'promise',
					71: 'delight',
					81: 'aid',
					91: 'celebration'
			},
			'hostile': {
					 1: 'death',
					11: 'capture',
					21: 'judgment',
					31: 'combat',
					41: 'surrender',
					51: 'rage',
					61: 'resentment',
					71: 'submission',
					81: 'injury',
					91: 'destruction'
			},
			'inquisitive': {
					 1: 'questions',
					11: 'investigation',
					21: 'interest',
					31: 'demand',
					41: 'suspicion',
					51: 'request',
					61: 'curiosity',
					71: 'skepticism',
					81: 'command',
					91: 'petition'
			},
			'knowing': {
					 1: 'report',
					11: 'effects',
					21: 'examination',
					31: 'records',
					41: 'account',
					51: 'news',
					61: 'history',
					71: 'telling',
					81: 'discourse',
					91: 'speech'
			},
			'mysterious': {
					 1: 'rumor',
					11: 'uncertainty',
					21: 'secrets',
					31: 'misdirection',
					41: 'whispers',
					51: 'lies',
					61: 'shadows',
					71: 'enigma',
					81: 'obscurity',
					91: 'conundrum'
			},
			'prejudiced': {
					 1: 'reputation',
					11: 'doubt',
					21: 'bias',
					31: 'dislike',
					41: 'partiality',
					51: 'belief',
					61: 'view',
					71: 'discrimination',
					81: 'assessment',
					91: 'difference'
			}
		}
		var bearing_rolls = roller.roll('1d100')
		var bearing = bearing_table[demeanor][utils.getClosestKey(bearing_table[demeanor], bearing_rolls.total)]
		
		var focus_table = {
			 1: 'current scene',
			 4: 'last story',
			 7: 'equipment',
			10: 'parents',
			13: 'history',
			16: 'retainers',
			19: 'wealth',
			22: 'relics',
			25: 'last action',
			28: 'skills',
			31: 'superiors',
			34: 'fame',
			37: 'campaign',
			40: 'future action',
			43: 'friends',
			46: 'allies',
			49: 'last scene',
			52: 'contacts',
			55: 'flaws',
			58: 'antagonist',
			61: 'rewards',
			64: 'experience',
			67: 'knowledge',
			70: 'recent scene',
			73: 'community',
			76: 'treasure',
			79: 'the character',
			82: 'current story',
			85: 'family',
			88: 'power',
			91: 'weapons',
			94: 'previous scene',
			97: 'enemy'
		}
		var focus_rolls = roller.roll('1d100')
		var focus = focus_table[utils.getClosestKey(focus_table, focus_rolls.total)]
		
		var result = `The ${demeanor} NPC speaks of ${bearing} regarding (the PC’s) ${focus}.`
		
		return {
			'rolls': false,
			'total': false,
			'result': result,
			'extras': false
		}
	}	

  }

  return Une;
})();

export default Une;