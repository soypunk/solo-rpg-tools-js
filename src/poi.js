import { DiceRoller } from 'rpg-dice-roller';
import { Utils } from './utils.js';

const utils = new Utils();

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
 * Poi
 *
 * @type {Poi}
 */
const Poi = (() => {
  /**
   *
   * @param {{}=} data
   */   
   
  class Poi{
    /**
     * Initialises the object
     *
     * @constructor
     * @param data
     */
    constructor(data){}
    
    get npcPositions() {
    	return [
    		'friend',    	
    		'hostile'
    	]
    }
    
    get npcMotives() {
    	return [
			'ambition',
			'avarice',
			'craving',
			'curiosity',
			'desire',
			'excitement',
			'glory',
			'hatred',
			'piety',
			'protection',
			'revenge',
			'safety'
    	]
    }    
    
    npc(hostile=true, motive_type='') {
    	var roller = new DiceRoller()    	
    	if (hostile === 'hostile') {
    		hostile = true
    	} else if (hostile === 'friend') {
    		hostile = false
    	} else if (hostile !== true) {
    		hostile = false
    	}
    	motive_type = motive_type.toLowerCase()
    	if (motive_type == '') {
			var motive_type_table = {
				 1: 'ambition',
				 2: 'avarice',
				 3: 'craving',
				 4: 'curiosity',
				 5: 'desire',
				 6: 'excitement',
				 7: 'glory',
				 8: 'hatred',
				 9: 'piety',
				10: 'protection',
				11: 'revenge',
				12: 'safety'
			}
			var motive_type_roll = roller.roll('1d12')
			motive_type = motive_type_table[utils.getClosestKey(motive_type_table, motive_type_roll.total)]		
    	}
    	
		var motive_type_definition_table = {
			'ambition':  'to ascend in their current role',
			'avarice': 	 'for wealth and splendid possessions',
			'craving': 	 'for a shameful or illicit thing',
			'curiosity': 'to discover a relevant secret',
			'desire': 	 'to love and possess a specific other',
			'excitement':'to seek thrills and new pleasures',
			'glory': 	 'to be renowned and famed by their peers',
			'hatred': 	 'to ruin and destroy a hated enemy',
			'piety': 	 'to serve God and live virtuously',
			'protection':'to shelter something they love',
			'revenge': 	 'to avenge a wrong or betrayal',
			'safety': 	 'to protect themselves from some woe'
		}
		var motive_type_definition = motive_type_definition_table[motive_type]    	
    	
    	var motive_table = {
    		'ambition': {
				 1: 'Attain a rank that their kind is not allowed',
				 2: 'Recover a rank or status they had but lost',
				 3: 'Attain it before they\'re too old or passed over',
				 4: 'Attain it before a hated rival gets the rank',
				 5: 'Wrest the rank from an “unworthy” holder',
				 6: 'Promote someone else as a stepping-stone up',
				 7: 'Prove their own worthiness for higher rank',
				 8: 'Create a new hierarchy to be at the top of it',
				 9: 'Attain the rank to satisfy family expectations',
				10: 'Insidiously undermine a superior\'s position'    		
    		},
    		'avarice': {
				 1: 'Acquire more money by fair or foul means',
				 2: 'Get money to obtain a life-saving service',
				 3: 'They have an expensive spouse or lover',
				 4: 'They were poor, and live in dread of it again',
				 5: 'Get money to repay a very dangerous debt',
				 6: 'Their social standing requires vast outlays',
				 7: 'Money is points, and they want to win the game',
				 8: 'They\'re being extorted by some powerful person',
				 9: 'They\'re zealous about a very expensive pastime',
				10: 'They\'re terribly wasteful with money'    		
    		},
			'craving': {
				 1: 'A kind of forbidden offworld art or culture',
				 2: 'A reprehensible carnal desire',
				 3: 'The company of a socially-forbidden class',
				 4: 'A self-destructive chemical',
				 5: 'Cyberware or body modification beyond reason',
				 6: 'Extreme gluttony for rare and precious viands',
				 7: 'A product currently banned from the world',
				 8: 'Something harmless that society still hates',
				 9: 'Adulterous or excessive sexual partners',
				10: 'An unreasonable appetite for gambling'
			},
			'curiosity': {
				 1: 'Discover the truth behind a family death',
				 2: 'Unlock the secrets of an enigmatic tech object',
				 3: 'Hunt down blackmail material on someone',
				 4: 'Learn the real facts about a current event',
				 5: 'Reveal a fact the government is hiding',
				 6: 'Learn the true identity of a veiled enemy',
				 7: 'Find the culprit behind a wrong they suffered',
				 8: 'Study a topic forbidden in their native culture',
				 9: 'Experience certain socially-unacceptable things',
				10: 'Track down a socially-disruptive record'
			},
			'desire': {
				 1: 'A family member who\'s constantly in trouble',
				 2: 'The spouse of an important or dangerous other ',
				 3: 'An ex who resents and despises them',
				 4: 'An unattainable celebrity figure',
				 5: 'An expensive and cynical courtesan',
				 6: 'A superior\'s spouse or adult child',
				 7: 'An alien or other socially-forbidden object',
				 8: 'A work associate oblivious to their feelings',
				 9: 'A dead person echoed in a VI or expert system',
				10: 'An utterly unacceptable object of longing'
			},
			'excitement': {
				 1: 'Hunt extremely dangerous wild animals',
				 2: 'Explore or traverse hazardous locations', 
				 3: 'Sample a wide range of chemicals',
				 4: 'Kill people for the pleasure of it',
				 5: 'Seek out new cultures and social groups',
				 6: 'Goad and troll powerful local figures',
				 7: 'Compete in a semi-lethal illicit sport',
				 8: 'Promote favored bands or music genres',
				 9: 'Spearhead a particularly zestful art movement',
				10: 'Commit a particular type of exciting crime',
			},
			'glory': {
				 1: 'Become a famous holovid star',
				 2: 'Rise to fame in some notorious occupation',
				 3: 'Eclipse a hated rival with their own glory',
				 4: 'Prove how wonderful they are to old doubters',
				 5: 'Show up prejudices against their kind',
				 6: 'Bask in the laud of groupies and fans',
				 7: 'Attain renown for supremacy in their profession',
				 8: 'Redeem some past ignominy or failure',
				 9: 'Show an ex how wrong they were to leave',
				10: 'Seek sector-wide fame in a dreaded profession'
			},
			'hatred': {
				 1: 'Criminals, in general or in a specific type',
				 2: 'The government, in general and specific staff',
				 3: 'An ethnic group on the world',
				 4: 'A religious group in the general locale',
				 5: 'A particular corporation and its employees',
				 6: 'A specific gang and its members',
				 7: 'Offworlders, whether all or of a specific world',
				 8: 'Aliens and other non-human sentients',
				 9: 'Cyborgs and transhumans',
				10: 'Members of a particular political or social group'
			},
			'piety': {
				 1: 'They\'re consecrated to serve a particular faith',
				 2: 'Their family inculcated extreme piety in them',
				 3: 'They feel their beloved faith is under attack',
				 4: 'They back a minority sect in their faith',
				 5: 'They belong to a socially-despised religion',
				 6: 'The NPC is determined to proselytize the faith',
				 7: 'They\'re convinced they have a divine blessing',
				 8: 'They mean to found a new faith on their beliefs',
				 9: 'Their faith is in a secular political philosophy',
				10: 'They\'re convinced God loves everything they do'
			},
			'protection': {
				 1: 'A family member is in legal or criminal trouble',
				 2: 'A precious heirloom is sought by thieves',
				 3: 'Ancestral lands are threatened by others',
				 4: 'Their rank or high-status role is under attack',
				 5: 'Their personal wealth is at risk',
				 6: 'An affiliated business is facing dire perils',
				 7: 'A loved one incurred some dangerous disfavor',
				 8: 'A pretech artifact they have is illegal to own',
				 9: 'They\'ve stolen something another wants back',
				10: 'They know a loved one is seeking their ruin'
			},
			'revenge': {
				 1: 'A crime boss killed one of their loved ones',
				 2: 'A government official convicted them of crimes',
				 3: 'A former partner betrayed them to an enemy',
				 4: 'A former lover broke their heart',
				 5: 'They\'ve inherited an inter-family grudge',
				 6: 'They were ruined by a careless celebrity\'s fun',
				 7: 'A superior used them for personal advancement',
				 8: 'A corrupt official wronged them legally',
				 9: 'A family member betrayed them',
				10: 'A rival cheated them in love or business'
			},
			'safety': {
				 1: 'A local law enforcer wants them imprisoned',
				 2: 'Someone they betrayed is hunting them',
				 3: 'A local crime boss blames them for some woe',
				 4: 'The victim of a shady deal they made is furious',
				 5: 'Their superior is planning to sacrifice them',
				 6: 'A subordinate is ready to move against them',
				 7: 'A former lover wants brutal revenge on them',
				 8: 'A traitor is bartering their secrets to others',
				 9: 'They\'re gripped by self-destructive urges',
				10: 'A rival has put a bounty on their ruin'
			}
    	}
    	var motive_rolls = roller.roll('1d10')
    	var motive = motive_table[motive_type][utils.getClosestKey(motive_table[motive_type], motive_rolls.total)]

		var capability_table = {
			 1: 'authority',
			 2: 'connection',
			 3: 'debt',
			 4: 'influence',
			 5: 'information',
			 6: 'money',
			 7: 'skills',
			 8: 'sympathy',
			 9: 'tech',
			10: 'violence'
		}
		var capability_roll = roller.roll('1d10')
		var capability = capability_table[utils.getClosestKey(capability_table, capability_roll.total)]
		var capability_definition_table = {
			'authority': 'legal or traditional in nature',
			'connection': 'with friends and allies of use',
			'debt': 'owed to them by someone powerful',
			'influence': 'social and indirect in nature',
			'information': 'knowing useful secrets of things',
			'money': 'being able to buy off problems',
			'skills': 'as a very talented professional',
			'sympathy': 'being irresistible to the players',
			'tech': 'having pretech or other potent gear',
			'violence': 'having goons or other heavies to hand'		
		}
		var capability_definition = capability_definition_table[capability]

		var capability_source_table = {
			 1: 'Associates, who lend it to the NPC',
			 2: 'Family, who provide it to the NPC',
			 3: 'Job, where it\'s a perquisite of the position',
			 4: 'Personal, created and controlled by the NPC',
			 5: 'Resources, obtained via money or goods',
			 6: 'Society, granted them by their social standing'
		}
		var capability_source_roll = roller.roll('1d6')
		var capability_source = capability_source_table[utils.getClosestKey(capability_source_table, capability_source_roll.total)]
		
		var friendly_opportunity_table = {
			'ambition': {
				 1: 'They\'ve been set up as a scapegoat for a serious error made by a rival',
				 2: 'They need to accomplish a near-impossible feat to obtain the next rung of their ambition',
				 3: 'A past bargain they made to get their current place is now coming back to haunt them',
				 4: 'They\'ve worked their way into a position that\'s a career or literal deathtrap for its occupants',
				 5: 'The recent pursuit of their ambition has caused a terrible problem for someone they care about',
				 6: 'A rival has blackmail evidence about a past failing the NPC had tried to cover up',
				 7: 'The institution or structure the NPC is trying to climb in is being threatened by an outside force',
				 8: 'They\'ve seriously overplayed their hand and are now at the mercy of their rivals'				 
			},
			'avarice': {
				 1: 'The NPC just had an item stolen that is crucial for some profitable plan or deal they\'ve made',
				 2: 'They just laid hands on a treasure that has turned out to be extremely dangerous to own',
				 3: 'They\'ve gambled or risked on a profit opportunity that has turned out to be rigged',
				 4: 'They thought they were keeping their wealth safe, but where they put it has turned perilous',
				 5: 'A seemingly-profitable deal or opportunity they took turns out to have dangerous strings on it',
				 6: 'They\'ve borrowed money they thought they could repay until recent events altered that',
				 7: 'They\'ve risked something or someone they love on a profit opportunity that\'s turning sour',
				 8: 'The payment they accepted has turned out to be extremely hot property or stolen money'
			},
			'craving': {
				 1: 'They\'ve overindulged and the consequences for doing so require PC help to extricate them',
				 2: 'They\'ve risked someone or something priceless to them in order to obtain their craving',
				 3: 'Someone set them up with a bad dose, bad company, or other extra-injurious indulgence',
				 4: 'Someone\'s manipulating them ruthlessly by controlling access to the craving',
				 5: 'Their craving is illegal or unacceptable, and they now risk being revealed if they aren\'t helped',
				 6: 'They did something terrible in the grip of their craving and are trying desperately to fix it',
				 7: 'They want to squelch the craving but someone else is trying to push them back into it',
				 8: 'They were involved in producing or providing the craving but are trying to disentangle from it'
			},
			'curiosity': {
				 1: 'They have half a juicy secret but the other half is very dangerous to acquire',
				 2: 'A rare occasion of their special curiosity is available, but they need protection to investigate it',
				 3: 'They unearthed a very dangerous secret and are trying to dodge those sent to re-conceal it',
				 4: 'They misunderstood something they learned and acted on that error, producing a dire peril',
				 5: 'One of their fellow investigators or minions has fallen into great danger',
				 6: 'While investigating their curiosity they stumbled over an unrelated but very large secret',
				 7: 'The object of their curiosity is being threatened by some outside force',
				 8: 'They have an awful suspicion that must be verified through a perilous inquiry'
			},
			'desire': {
				 1: 'They\'re in love with an associate of the PCs who is largely oblivious to them',
				 2: 'They\'re smitten with someone who is totally unacceptable for cultural reasons',
				 3: 'Their beloved is in great danger due to a mistake they made',
				 4: 'They\'re determined to perform some tremendous deed in order to win their chosen\'s heart',
				 5: 'They\'re willfully blind to the dangers of a lover the PCs know is a terrible person',
				 6: 'They can\'t contact their beloved except through agents like the PCs',
				 7: 'Their object of desire has been kidnapped or compelled into affiliation with someone else',
				 8: 'Their lover is in need of something difficult to obtain, and they\'re determined to get it'
			},
			'excitement': {
				 1: 'They\'re addicted to some form of extreme sport that requires help from associates',
				 2: 'They\'ve struck a blow at an unsympathetic NPC just for fun, but now they\'re paying for it',
				 3: 'A calculated risk proved to be poorly figured and the NPC is dealing with the consequences',
				 4: 'A manipulator is goading the NPC on to greater risks in order to usher them to eventual ruin',
				 5: 'The NPC is determined to go where they shouldn\'t go and needs PC help to get there',
				 6: 'The NPC gets into trouble just as the PCs are in a position to be induced to help them',
				 7: 'Someone sabotaged their fun and they need help to get out of the ensuing situation',
				 8: 'They want to hire the PCs to help them survive an experience that is not generally survivable'
			},
			'glory': {
				 1: 'They\'re trying to achieve a feat of exploration that has killed those who tried it',
				 2: 'They want to gloriously ruin an infamous NPC who\'s causing misery for them and their peers',
				 3: 'They\'re trying to attain fame through sympathetic crimes and social deviations',
				 4: 'They yearn to be associated with a celebrity and think they know how to attract their attention',
				 5: 'They\'re obsessed with effacing an old failure by great public success at a second attempt',
				 6: 'They can get a big break into public notice if they can do a job for a major producer',
				 7: 'They\'re not respected by their peers, and are set on doing something to earn their respect',
				 8: 'They want to establish a new noble cause despite the vigorous hostility of the culture to it'
			},
			'hatred': {
				 1: 'They\'re engaged in a secret relationship with someone from the group that hates them',
				 2: 'They\'ve been framed for some evildoing by their persecutors, who may have done it themselves',
				 3: 'They\'re trying to stop some evildoer of their own kind before he makes things even worse',
				 4: 'Their business or cause is being ground down by those who hate them',
				 5: 'An opportunity that was supposed to go to them has been withdrawn due to their persecutors',
				 6: 'Pent-up fury is making them drastically overreact to a specific small slight against them',
				 7: 'They\'re trying to protect others of their kind who are being assailed by persecutors',
				 8: 'They need the PCs to do something for them that their enemies would never let them do'
			},
			'piety': {
				 1: 'They need to perform a pilgrimage to or through a very dangerous area',
				 2: 'They\'re supporting co-religionists who are facing some dire peril',
				 3: 'They\'re being oppressed by zealots of a rival faith in the area',
				 4: 'They recently did something they count as gravely sinful and are trying to make amends',
				 5: 'They\'re trying to establish or preserve a temple that\'s very inconvenient to corrupt local powers',
				 6: 'They need to perform a particular act of faith but enemies or rivals are trying to prevent it',
				 7: 'They need to recover a lost holy artifact that\'s currently in unknown or dangerous hands',
				 8: 'They need help to protect some relief effort or charitable enterprise against greedy interlopers'
			},
			'protection': {
				 1: 'A family member keeps making stupid choices that the NPC needs to save them from',
				 2: 'Their spouse or loved one is exceptionally vulnerable to a particular hostile NPC\'s plans',
				 3: 'A business or institution they\'re devoted to is under attack by others',
				 4: 'They\'re responsible for protecting some object that many other people want to obtain',
				 5: 'They recently failed at protecting their object and are desperate to redeem their mistake',
				 6: 'Some resource or tool they need to protect their object has been lost or compromised',
				 7: 'Their usual helpers are unavailable so they need the PCs to help them fend off a threat',
				 8: 'The object they\'re trying to protect has decided that it doesn\'t need to be protected'
			},
			'revenge': {
				 1: 'The PCs are ideally positioned to carry out revenge on their behalf',
				 2: 'A particular rival or enemy of the PCs was the person responsible for their wrong',
				 3: 'Their enemy has decided to preemptively crush them before they can take their revenge',
				 4: 'A PC ally or supported cause was collateral damage in the wrong inflicted on the NPC',
				 5: 'The NPC needs help to discern exactly who was responsible for what they suffered',
				 6: 'They\'ve failed pathetically to get revenge and need help to survive the aftermath of it',
				 7: 'They don\'t want to take revenge but are morally obligated unless hidden facts come to light',
				 8: 'Their foe\'s hatred is unsatisfied and they are determined to finish what they started'
			},
			'safety': {
				 1: 'Rescuing something precious would expose them to great peril, so they need outside help',
				 2: 'Their threat has just broken through their best defense, and they need help',
				 3: 'The threat is wreaking havoc on innocent relatives and associates of the NPC',
				 4: 'The NPC\'s threat stems from a person or situation that threatens the PCs too',
				 5: 'The NPC needs a particular resource or object to continue maintaining their safety',
				 6: 'The threat has unsuccessfully attacked the NPC, but the collateral damage is affecting the PCs',
				 7: 'The NPC\'s ruin or death would significantly hinder a current goal or ally of the PCs',
				 8: 'The NPC is willing to trade something vital to the PCs for help against the threat'
			}
		}
		var hostile_opportunity_table = {
			'ambition': {
				 1: 'The PCs have offended their superior, and the NPC thinks it worthwhile to punish them',
				 2: 'A PC ally is in the way of the NPC\'s next step up the ladder of ambition',
				 3: 'They\'re convinced that foiling the PCs will bring their name greater luster',
				 4: 'The PCs have unwittingly aided a rival of the NPC, and they think the PCs are his allies',
				 5: 'Something the PCs recently did slighted or embarrassed the NPC in a professional sense',
				 6: 'The next step up the ladder somehow involves ruining a group or cause the PCs support',
				 7: 'The NPC feels threatened by a recent success by the PCs and moves to put them in their place',
				 8: 'The PCs somehow ended up with something critical for the NPC\'s further advancement'
			},
			'avarice': {
				 1: 'The PCs have a particular treasure that the NPC wants at all costs',
				 2: 'A PC ally risks financial ruin due to the machinations of the greedy NPC',
				 3: 'A dear treasure has been taken from a PC ally by the grasping NPC',
				 4: 'They\'re planning a financial squeeze on a property or cause owned or backed by the PCs',
				 5: 'They\'ve stolen or diverted money that was due to the PCs',
				 6: 'The PCs accidentally come into possession of a key to much of the NPC\'s wealth',
				 7: 'The NPC tries to insert himself as a middleman, forcing the PCs to pay him to get service access',
				 8: 'The NPC plans to pay the PCs off with money or items he intends to steal back'
			},
			'craving': {
				 1: 'A PC ally is the object of a deeply repugnant lust by the hostile NPC',
				 2: 'The PCs somehow ended up cutting off the supply of one of the NPC\'s favorite vices',
				 3: 'The NPC\'s appetites are causing misery for a group or ally affiliated with the PCs',
				 4: 'The ruin of the PCs is critical if the NPC is to get access to a splendid example of their craving',
				 5: 'They\'re convinced the PCs are holding out on them and are in possession of a craved thing',
				 6: 'Their growing appetite is putting pressure on the PCs or their allies or associates',
				 7: 'They indulge horribly in a way the PCs are certain to learn about and be disgusted by',
				 8: 'They mean to use the PCs as catspaws to get them their craving'
			},
			'curiosity': {
				 1: 'They\'re close to obtaining critical blackmail material on the PCs or a PC ally',
				 2: 'They\'re methodically destroying or burying evidence the PCs need for their own goals',
				 3: 'They have a very destructive curiosity about PC tech, biology, or other perishable belongings',
				 4: 'They\'re convinced the PCs are the key to a totally unrelated puzzle they\'re dealing with',
				 5: 'They plan to use the PCs as expendable minions in order to get an answer to some question',
				 6: 'The PCs or something they possess are vital components to an experiment or inquiry',
				 7: 'They mean to learn a truth by putting the object of their curiosity in a terrible revealing situation',
				 8: 'They\'re convinced the PCs are hiding something from them out of some sinister motive'
			},
			'desire': {
				 1: 'They want a romantic rival dead or utterly humiliated before their beloved',
				 2: 'Their beloved has a grudge against the party for some reason and wants the NPC to act on it',
				 3: 'They don\'t know how to take no for an answer from a beloved who despises them',
				 4: 'They\'re compelling their beloved to stay with them through threats to their own loved ones',
				 5: 'They path to their beloved\'s heart lies through the ruin of a PC-supported cause or group',
				 6: 'Their beloved won\'t have them, so they\'re determined to ruin all other potential suitors',
				 7: 'Their beloved is a horrible person who goads them on to acts of terrible wickedness',
				 8: 'They\'re an obsessed stalker of a totally unattainable object of desire'
			},
			'excitement': {
				 1: 'Their idea of fun involves doing horrible things to people the PCs like',
				 2: 'One of their little indulgences has done great harm to a group or cause the PCs support',
				 3: 'They\'re going to ruin something precious just for the fun of doing so',
				 4: 'They\'ve set up some lethal challenge that\'s crooked and unfair to everyone else',
				 5: 'They approach the PCs as a charming bon vivant, only to drag them into a real crime',
				 6: 'They take a sporting rivalry with a sympathetic NPC to a murderous extent',
				 7: 'They\'ve got vile minions out raking up forced participants in their idea of fun',
				 8: 'They lost a sporting bet or contest and are now determined to destroy the winner'
			},
			'glory': {
				 1: 'They want a more popular and famous rival to die or be ruined in a humiliating way',
				 2: 'They don\'t want to be famous; they want to be infamous, viewed with fear and horror',
				 3: 'They want to use the PCs as sacrificial catspaws in a plan to make them look like a hero',
				 4: 'They want to destroy an institution that denied them their rightful place of fame among them',
				 5: 'They steal the credit for some grand deed the PCs or a PC ally has done',
				 6: 'Their fame requires the relentless exploitation of others, including associates of the PCs',
				 7: 'Their fame has left them largely above the law with regards to a sordid plan they\'re enacting',
				 8: 'They\'re using star-struck fans as minions to terrorize and extort others'
			},
			'hatred': {
				 1: 'They\'re luring the hated into a trap where they\'ll all be blamed for the ensuing disaster',
				 2: 'They want a champion of those they hate either dead or wholly discredited',
				 3: 'They want to destroy or ruin a resource or facility that those they hate rely on',
				 4: 'They want to install a fellow hater into a position of authority over those they hate',
				 5: 'The hater is profiting by stirring up additional friction between the hated and others',
				 6: 'The hater is secretly supporting the most unsympathetic and vile among the hated',
				 7: 'The hater is employing the hated in tasks or roles that are intended to get them killed',
				 8: 'The hater is setting up a target to spectacularly fail at some important and far-famed role'
			},
			'piety': {
				 1: 'They want the local leader of a rival faith to be killed or discredited before the public',
				 2: 'They\'re convinced a co-religionist is a filthy heretic who needs to be destroyed',
				 3: 'They\'re using a position of religious influence to personally profit themselves',
				 4: 'Something about the PCs or their recent actions strikes them as damnably blasphemous',
				 5: 'A PC ally is a backslider or apostate of the faith that the NPC is determined to punish',
				 6: 'The NPC has taken control of a center of the faith and is using it as a tool of advancement',
				 7: 'They\'re convinced that they\'re favored by God and deserving of every pleasure and desire',
				 8: 'They\'re working to destroy a competing local faith and demoralize its believers'
			},
			'protection': {
				 1: 'They\'re plotting the eventual destruction of the object due to some sense of past wrong',
				 2: 'They want to destroy the object by bribing or coercing its protector into acquiescing',
				 3: 'They want to use the object as a trap, so that the enemy who seizes it will be destroyed by it',
				 4: 'They hate and resent their guardianship of the object and subconsciously seek to let it be ruined',
				 5: 'They\'re misusing the object terribly, taking advantage of their protectorship over it',
				 6: 'They aren\'t the rightful protector, having forced out the real one to take advantage of it',
				 7: 'They\'re convinced a PC ally or sympathetic figure is a threat to it who must be destroyed',
				 8: 'They have power or resources that can only be accessed after someone else destroys the object'
			},
			'revenge': {
				 1: 'They\'ve decided to destroy the innocent family or associates of the one who wronged them',
				 2: 'They want an utterly disproportionate revenge on the target for the wrong they suffered',
				 3: 'Revenge is actually just a thin excuse they use to justify their sadistic love of inflicting suffering',
				 4: 'PC allies or sympathetic groups are being expended as mere pawns in the NPC\'s plan',
				 5: 'The NPC wants to hire the PCs to help but conceals the full unsympathetic story from them',
				 6: 'They intentionally avoid completing their revenge so they can continue to torment the foe',
				 7: 'They consider the PCs worthy of vengeance for a minor or unrecognized association with a foe',
				 8: 'They want revenge for something that the rest of the world sees as a favor or kindness'
			},
			'safety': {
				 1: 'They\'re willing to cause tremendous collateral damage to deal with the threat',
				 2: 'The threat is entirely justified and wants the PC\'s help in getting at the NPC',
				 3: 'The threat is subtly using the PCs to attack the NPC, and the NPC knows it',
				 4: 'They mistake the PCs as agents of the threat and act accordingly',
				 5: 'The NPC plans to use the PCs as an ablative shield against an impending attack by the threat',
				 6: 'There\'s some great reward for the PCs if they join the threat in bringing down the NPC',
				 7: 'The NPC tries to misdirect the threat into clashing with the PCs, hopefully killing them',
				 8: 'They NPC needs something possessed by a PC ally or sympathetic group to maintain safety'
			}
		}
		
		var opportunity_roll = roller.roll('1d8')		
		var opportunity = ''
		if (hostile) {
			opportunity = hostile_opportunity_table[motive_type][utils.getClosestKey(hostile_opportunity_table[motive_type], opportunity_roll.total)]
		} else {
			opportunity = friendly_opportunity_table[motive_type][utils.getClosestKey(friendly_opportunity_table[motive_type], opportunity_roll.total)]
		}
		
		var trait_table = [
			[
				'Numerous group-loyalty brands/marks',
				'Culturally-specific regional clothing style',
				'Visibly high-tech integrated clothing',
				'Culturally-specific sexualized clothing',
				'Dresses far too young or old for them',
				'Unusually shabby or ill-kept clothing',
				'Loud offworld clothing style',
				'Cutting-edge fashion as they can afford'
			],
			[
				'A feature or limb has been badly scarred',
				'Extremely muscular or spindly form',
				'Lacking or excessive in hair',
				'Elongated fingers or limbs',
				'Unusually short or tall',
				'Abnormally fat or thin in build',
				'Very feminine/masculine presentation',
				'Disproportionate body part or parts',
				'No neck to speak of, or giraffe-like',
				'Oddly-textured skin'
			],
			[
				'Missing a leg',
				'Missing a hand or arm',
				'Missing an eye or facial feature',
				'Reroll; has an unusual prosthetic for it'
			],
			[
				'Moves with floating grace',
				'Taps toe or fingers constantly',
				'Never looks directly at interlocutor',
				'Plays with hair incessantly',
				'Moves in quick, darting fashion',
				'Constantly glancing around',
				'Can\'t talk without gesturing',
				'Constantly fiddles with small objects',
				'All motions are rough and vigorous',
				'Licks lips disturbingly often',
				'Always wearing a particular expression',
				'Limps or moves in hindered ways'
			],
			[
				'Talks extremely slowly or quickly',
				'Has elaborate tattoos or skin-paintings',
				'Has a constant air of suspicion',
				'Hair and person distinctly unkempt',
				'Very obvious religious tokens are worn',
				'Has some speech impediment',
				'Their compad is constantly going off',
				'They have an unusual accent',
				'Extremely laconic or voluble',
				'Very flushed, choleric features',
				'Has a distinctive scent',
				'Voice is extremely grating and unpleasant',
				'Hair color is very abnormal for the area',
				'Flashes expensive-to-them accessories',
				'Flashy visible cyberware or accessory',
				'Always seems semi-drugged, but isn\'t',
				'Visibly devoted to some consumer brand',
				'They have a drink or drug close to hand',
				'They\'re of an uncommon race for the area',
				'Laughs at inappropriate moments'
			]
		]
		var trait_roll = roller.roll('1d6')
		var traits_needed = 1
		var trait = ''
		var traits = []
		
		if (trait_roll.total == 6) { traits_needed = 2 }

		var i = 0
		do {
			var trait_type_table = utils.getRandom(trait_table)[0]
			var new_trait = utils.getRandom(trait_type_table)[0]
			if (new_trait.includes('Reroll')) {
				trait_type_table.pop()
				trait = utils.getRandom(trait_type_table)[0]
				trait += ' (has an unusual prosthetic for it)'
			}
			traits.push(new_trait)
			i = i + 1
		} while (i < traits_needed);
		
		if (traits.length > 1) {
			trait = utils.arrayToSentence(traits)
		} else {
			trait = traits[0]
		}
		
		var connection_table = {
			 1: 'Past deeds',
			 2: 'Friends and family',
			 3: 'Satisfied patrons',
			 4: 'Government records',
			 5: 'Comrades in arms',
			 6: 'Brokered connections',
			 7: 'Blind chance'
		}		
		var connection_roll = roller.roll('1d7')
		var connection = connection_table[utils.getClosestKey(connection_table, connection_roll.total)]
		
		var interaction_table = [
			'Suspicious or wary of the PCs',
			'Aggressive and hard-edged manner',
			'Unusually friendly and sociable',
			'Coolly pragmatic or businesslike'		
		]
		var interaction = utils.getRandom(interaction_table)[0]
		
		var habit_table = [
			'Treats men and women very differently',
			'Complains about local politics or events',
			'Shares gossip about mutual acquaintances',
			'Encourages PCs to join their religion',
			'Has strange ideas about outworlder habits',
			'Seeks PC opinions about peripheral affairs',
			'Tends to point and gesture in PC\'s faces',
			'Fascinated about something the PCs have',
			'Complains about prior employees',
			'Dwells on the horrors of their problem',
			'Likes to tell stories about their past deeds',
			'Enjoys asking about the PCs\' own lives',
			'Talks about the place they\'re meeting at',
			'Blames a particular group for their woes',
			'Wants to hear about prior PC adventures',
			'Practically interrogates PC interlocutors',
			'Drones on incessantly about trivia',
			'Only explains things when prompted',
			'Makes comments about PC appearances',
			'Expresses doubt about the PCs\' abilities'
		]
		var habit = utils.getRandom(habit_table)[0]
		
		var result = `Person of Interest:
*Motive*  
${motive_type.capitalize()}, ${motive_type_definition}
${motive}

*Capability*  
${capability.capitalize()}, ${capability_definition} (Source: ${capability_source})

*Opportunity*  
${opportunity}

*Connection*  
${connection}

*Visual Trait*  
${trait}

*Initial Interaction Disposition*  
${interaction}

*General Interaction Habits*  
${habit}
`
		
		return {
			'rolls': false,
			'total': false,
			'result': result,
			'extras': false
		}
    }
        
    dealOffered() {
		var table = [
			'As an act of generosity by the NPC',
			'Reluctantly, grudgingly offered to the PCs',
			'It\'s an offer they can\'t safely refuse',
			'As a win-win for both parties',
			'Tentatively suggested as a possibility',
			'Requested in a petitionary fashion'
		]
		var result = `NPC deal offered approach: ${utils.getRandom(table)[0]}`
		return {
			'rolls': false,
			'total': false,
			'result': result,
			'extras': false
		}		
    }
    
    dealRefused() {
		var table = [
			'Pries at the reason for the refusal',
			'Apply a threat if the PCs persist in refusal',
			'Grudgingly offer a better inducement',
			'The NPC takes it as a personal insult',
			'Phlegmatic acceptance of the refusal',
			'Upset and aggrieved at the affront',
			'Shrug and benevolently offer more',
			'Amazement at the folly of the PCs'
		]
		var result = `NPC response to PC's deal refusal: ${utils.getRandom(table)[0]}`
		return {
			'rolls': false,
			'total': false,
			'result': result,
			'extras': false
		}	
    }
    
    dealMore() {
		var table = [
			'Try to find an alternative form of payment',
			'Try to wring extra service for extra pay',
			'Will agree to more but doesn\'t have it',
			'Explains why it isn\'t worth more to them',
			'Bemoan the unfairness of their request',
			'Quickly agree to any reasonable extra cost',
			'Says will consider more, but won\'t give it',
			'Protest that it\'s already too much',
			'Agree, but set harsh terms for success',
			'Offers more, but at a later time',
			'Castigate the avarice of the PCs',
			'Seek pity or sympathy in lieu of more pay'
		]
		var result = `NPC response to PC's ask for more: ${utils.getRandom(table)[0]}`
		return {
			'rolls': false,
			'total': false,
			'result': result,
			'extras': false
		}	    
    }
    
    npcThreatened() {
		var table = [
			'Immediately applies larger insult or threat',
			'Takes it as a good joke or bad-taste jest',
			'Shrugs it off, ignoring it if at all possible',
			'Prone to panic and violent over-reaction',
			'Coldly brings the engagement to an end',
			'Acts as if they hardly even noticed it',
			'Seeks to disengage to plan later reprisal',
			'Retaliates in same way, but without heat',
			'Is inclined to be successfully intimidated',
			'Acts as if they didn\'t understand it'
		]
		var result = `NPC Threatened: ${utils.getRandom(table)[0]}`
		return {
			'rolls': false,
			'total': false,
			'result': result,
			'extras': false
		}    
    }
    
    get locations() {
    	return [
    		'Rural',
    		'Slum',
    		'Starport',    		
    		'Station',    		
    		'Urban'    		
    	]
    }
    
    locationStarport() {
		var table = [
			'Visitor information center',
			'By a particular parked ship',
			'Machinist shop or repair depot',
			'By a wrecked and long-scavenged ship',
			'Near the entrance to the starport',
			'Short-stay spacer hotel room',
			'Raucous spacer bar',
			'Taxi stand or mass transport pickup zone',
			'Abandoned or empty hangar',
			'Fueling center or fuel processing area',
			'The starport\'s control tower',
			'The starport medical clinic'
		]
		var result = `Starport Location: ${utils.getRandom(table)[0]}`
		return {
			'rolls': false,
			'total': false,
			'result': result,
			'extras': false
		}
    }
    
    locationSlum() {
		var table = [
			'Dive bar with violent local patrons',
			'Dirty union or brotherhood social hall',
			'Abandoned factory or industrial building',
			'Illicit drug parlor with private rooms',
			'Sewer tunnel or maintenance area',
			'In an abandoned house or squat',
			'Sleazy brothel with a discreet back room',
			'Grimy back alleyway known only to locals',
			'Rough but excellent local eatery',
			'Park full of homeless and petty criminals',
			'Shabby residential hotel room',
			'Affiliated gang headquarters or owned turf'
		]
		var result = `Slum Location: ${utils.getRandom(table)[0]}`
		return {
			'rolls': false,
			'total': false,
			'result': result,
			'extras': false
		}
    }
    
    locationStation() {
		var table = [
			'Discreet maintenance corridor',
			'Hydroponics area or garden zone',
			'Atmosphere processing area',
			'Bulk storage holds',
			'Station chapel or religious area',
			'Gym or exercise area',
			'Landing bay near parked ships',
			'Observation deck or lounge',
			'Private cabin or quarters',
			'Station bar or nightclub',
			'Illicit shop run from a private cabin',
			'Rented privacy room'
		]
		var result = `Space Station Location: ${utils.getRandom(table)[0]}`
		return {
			'rolls': false,
			'total': false,
			'result': result,
			'extras': false
		}
    }
    
    locationUrban() {
		var table = [
			'Loud and gaudy dance club',
			'Spacious public park',
			'Unremarkable hotel room',
			'Temple or religious building\'s grounds',
			'An art museum or cultural center',
			'At a local art performance',
			'Chic local dining establishment',
			'Discreet and high-end brothel',
			'Public library with meeting rooms',
			'Quiet local bar at a back table',
			'A particular public bench on a street corner',
			'A local food stand or drink booth'
		]
		var result = `Urban Location: ${utils.getRandom(table)[0]}`
		return {
			'rolls': false,
			'total': false,
			'result': result,
			'extras': false
		}
    }
    
    locationRural() {
		var table = [
			'A cave in nearby hills or mountains',
			'A particular lake-shore spot',
			'Abandoned or affiliated farm or ranch',
			'Well-known local scenic vista',
			'The end of a dead-end road',
			'Local store or mercantile center',
			'A remote forest glade',
			'An isolated bluff or cliff edge',
			'Small country bar',
			'Local waterfall or spring',
			'Remote country estate',
			'An unusual local rock formation'
		]
		var result = `Rural Location: ${utils.getRandom(table)[0]}`
		return {
			'rolls': false,
			'total': false,
			'result': result,
			'extras': false
		}
    }

  }

  return Poi;
})();

export default Poi;