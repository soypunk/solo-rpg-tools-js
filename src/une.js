import { DiceRoller } from '../node_modules/rpg-dice-roller/lib/esm/bundle.min.js';
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
		var roller = new DiceRoller();
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

  }

  return Une;
})();

export default Une;