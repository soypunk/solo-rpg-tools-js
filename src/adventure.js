import { DiceRoller } from 'rpg-dice-roller';
import { Utils } from './utils.js';

const utils = new Utils();

/**
 * AdventureCrafter
 *
 * @type {AdventureCrafter}
 */
const AdventureCrafter = (() => {

  const _themes = Symbol('themes');

  class AdventureCrafter{
    /**
     * Initialises the object
     *
     * @constructor
     * @param data
     */
    constructor(data){
    	this[_themes] = ['Action','Tension','Mystery','Social','Personal']
    }
    
    get themes(){
      return this[_themes]
    }

	theme() {
        var themes_table = {
            1:  'Action',
            3:  'Tension',
            5:  'Mystery',
            7:  'Social',
            9:  'Personal'
        }
		var roller = new DiceRoller();
        var rolls = roller.roll('1d10')
        var result = themes_table[utils.getClosestKey(themes_table, rolls.total)]

        return {
            'rolls': rolls,
            'total': rolls.total,
            'result': result,
            'extras': false
        }
	}
	
	npcDescriptor(num=false) {
		var descriptor_table = {
			 1:  'Roll for two Descriptors',
			22:  'Ugly',
			23:  'Beautiful',
			24:  'Foul',
			25:  'Sweet',
			26:  'Unusual',
			27:  'Common',
			28:  'Intelligent',
			29:  'Ignorant',
			30:  'Educated',
			31:  'Skilled',
			32:  'Trained',
			33:  'Rude',
			34:  'Polite',
			35:  'Fancy',
			36:  'Simple',
			37:  'Dirty',
			38:  'Clean',
			39:  'Wealthy',
			40:  'Poor',
			41:  'Small',
			42:  'Large',
			43:  'Quiet',
			44:  'Loud',
			45:  'Fast',
			46:  'Slow',
			47:  'Exotic',
			48:  'Uniformed',
			49:  'Interesting',
			50:  'Colorful',
			51:  'Informative',
			52:  'Dangerous',
			53:  'Inept',
			54:  'Clumsy',
			55:  'Capable',
			56:  'Intrusive',
			57:  'Respectful',
			58:  'Primitive',
			59:  'Sophisticated',
			60:  'Elegant',
			61:  'Armed',
			62:  'Different',
			63:  'Young',
			64:  'Old',
			65:  'Difficult',
			66:  'Helpful',
			67:  'Harmful',
			68:  'Disciplined',
			69:  'Erratic',
			70:  'Wild',
			71:  'Crazy',
			72:  'Commanding',
			73:  'Meek',
			74:  'Humorous',
			75:  'Frightened',
			76:  'Brave',
			77:  'Strong',
			78:  'Weak',
			79:  'Impulsive',
			80:  'Strategic',
			81:  'Naive',
			82:  'Confident',
			83:  'Surprising',
			84:  'Passive',
			85:  'Bold',
			86:  'Careless',
			87:  'Cautious',
			88:  'Sneaky',
			89:  'Intimidating',
			90:  'Powerful',
			91:  'Powerless',
			92:  'Hurt',
			93:  'Rough',
			94:  'Gentle',
			95:  'Caring',
			96:  'Principled',
			97:  'Arrogant',
			98:  'Curious',
			99:  'Supportive',
			100: 'Heroic'
		}
		var descriptor = null;
		var roller = new DiceRoller();
		
		if (num === false) {
			var rolls = roller.roll('1d100')
			descriptor = descriptor_table[utils.getClosestKey(descriptor_table, rolls.total)]
			if (descriptor == 'Roll for two Descriptors') {
				var descriptors = [];
				do {
					var new_rolls = roller.roll('1d100')
					var new_descriptor = descriptor_table[utils.getClosestKey(descriptor_table, new_rolls.total)]
					if (new_descriptor == 'Roll for two Descriptors') {
						continue;
					} else if (descriptors.includes(new_descriptor)) {
						continue; // no dupe descriptors			
					}
					descriptors.push(new_descriptor);
				} while (descriptors.length < 2);
				descriptor = utils.arrayToSentence(descriptors)
			}
		} else {
			var descriptors = [];
			do {
				var n_rolls = roller.roll('1d100')
				var new_descriptor = descriptor_table[utils.getClosestKey(descriptor_table, n_rolls.total)]
				if (new_descriptor == 'Roll for two Descriptors') { // we never want roll for two if we need a certain set
					continue;
				} else if (descriptors.includes(new_descriptor)) {
					continue; // no dupe descriptors
				}
				descriptors.push(new_descriptor);
			} while (descriptors.length < num);
			descriptor = utils.arrayToSentence(descriptors)
		}

		return {
			'rolls': false,
			'total': false,
			'result': descriptor,
			'extras': false
		}
	}	
	
	npcTrait() {
		var trait_table = {
			 1: 'The character is an individual',
			51: 'The character is an organization',
			58: 'The character is an object',
			65: 'The character is connected to this plotline',
			72: 'The character is not connected to this plotline',
			79: 'The character assists in resolving this plotline',
			86: 'The character hinders resolving this plotline',
			93: 'The character is connected to an existing character'
		};

		var GME_CHARACTER_TRAIT_DEFINITIONS = {
			'The character is an individual': 'The Character is an individual, as opposed to an organization or object.',
			'The character is an organization': 'This Character is not a specific individual, but an organization or community. General members of this organization are considered part of the Character as a community.',
			'The character is an object': 'This Character is something other than a typical, living individual or group organization. The Character is an object of some kind that could also be considered a Character unto itself. Examples might include a spaceship that is old and temperamental, or a city teeming with culture.',
			'The character is connected to this plotline': 'This Character enters the Adventure somehow connected with the Plotline of this Turning Point.',
			'The character is not connected to this plotline': 'This Character enters the Adventure not connected to this Turning Point’s Plotline. The Character may become part of the Plotline in the course of this Turning Point, but does not start off that way. Examples include bystanders to the main events of a Turning Point or people outside the events of the Plotline who get drawn into the Adventure.',
			'The character assists in resolving this plotline': 'This Character is someone who can help resolve the current Plotline in some way, likely serving as an aid to the Player Characters.',
			'The character hinders resolving this plotline': 'This Character gets in the way of resolving the current Plotline in some way, likely serving as a complication to the Player Characters.',
			'The character is connected to an existing character': 'This Character has some relationship to another, existing Character in this Adventure. Roll on the Characters List to see who. A result of New Character is changed to Choose The Most Logical Character. The connection can be anything, from the two Characters are related, they know each other, they were former friends, they both work in the same occupation or belong to the same organization, they look or act similarly, they have similar skills or equipment, etc. The connection can be as close or as distant as you like.',
		};

		var roller = new DiceRoller();
		var rolls = roller.roll('1d100')
		var trait = trait_table[utils.getClosestKey(trait_table, rolls.total)]

		return {
			'rolls': rolls,
			'total': rolls.total,
			'result': trait,
			'extras': {
				'definition': GME_CHARACTER_TRAIT_DEFINITIONS[trait]			
			}			
		}
	}
	
	npcIdentity() {
		var result = '';
		var identity_table = {
			 1: 'Roll for two Identities',
			34: 'Warrior',
			35: 'Healer',
			36: 'Protector',
			37: 'Assistant',
			38: 'Dependent',
			39: 'Ruler',
			40: 'Administrator',
			41: 'Victim',
			42: 'Scholar',
			43: 'Expert',
			44: 'Elite',
			45: 'Investigator',
			46: 'Criminal',
			47: 'Supporter',
			48: 'Helpless',
			49: 'Outsider',
			50: 'Mediator',
			51: 'Entertainer',
			52: 'Socialite',
			53: 'Athlete',
			54: 'Performer',
			55: 'Representative',
			56: 'Merchant',
			57: 'Trader',
			58: 'Creator',
			59: 'Artist',
			60: 'Servant',
			61: 'Laborer',
			62: 'Religious',
			63: 'Hunter',
			64: 'Leader',
			65: 'Fighter',
			66: 'Crafter',
			67: 'Thief',
			68: 'Radical',
			69: 'Executive',
			70: 'Thug',
			71: 'Guard',
			72: 'Guardian',
			73: 'Explorer',
			74: 'Hero',
			75: 'Villain',
			76: 'Deceiver',
			77: 'Engineer',
			78: 'Scout',
			79: 'Fixer',
			80: 'Wanderer',
			81: 'Subverter',
			82: 'Soldier',
			83: 'Law Enforcement',
			84: 'Scientist',
			85: 'Gatherer',
			86: 'Foreigner',
			87: 'Survivor',
			88: 'Gambler',
			89: 'Rogue',
			90: 'Farmer',
			91: 'Killer',
			92: 'Professional',
			93: 'Driver/Pilot',
			94: 'Student',
			95: 'Organizer',
			96: 'Deliverer',
			97: 'Lackey',
			98: 'Teacher',
			99: 'Exotic'
		}
		var roller = new DiceRoller();
		var rolls = roller.roll('1d100')
		var identity = identity_table[utils.getClosestKey(identity_table, rolls.total)]

		if (identity == 'Roll for two Identities') {
			var identities = [];
			do {
				var new_rolls = roller.roll('1d100')
				var new_identity = identity_table[utils.getClosestKey(identity_table, new_rolls.total)]
				if (new_identity == 'Roll for two Identities') {
					continue;
				} else if (identities.includes(new_identity)) {
					continue; // no dupe identities			
				}
				identities.push(new_identity);
			} while (identities.length < 2);
			identity = utils.arrayToSentence(identities)
		}

		return {
			'rolls': false,
			'total': false,
			'result': identity,
			'extras': false
		}
	}	
	
	generateCharacter() {
		return {
			'identity': this.npcIdentity(),
			'descriptor': this.npcDescriptor(),
			'trait': this.npcTrait()
		}
	}	
	
	plotpoint(theme=null) {
		var BASE_PLOTPOINTS = {
			 1: "Conclusion",
			 9: "None",
			96: "Meta"
		};
		var ACTION_PLOTPOINTS = {
			25: "A character is attacked in a non-lethal way",
			27: "Collateral damage",
			28: "A character is attacked in a lethal way",
			30: "Ambush",
			32: "Catastrophe",
			33: "Character has a clever idea",
			34: "Something is getting away",
			35: "Hunted",
			37: "Distraction",
			38: "A character is attacked to abduct",
			40: "Something exotic",
			41: "Immediately",
			43: "Chase",
			45: "Escape",
			47: "Heavily guarded",
			49: "Rescue",
			51: "Physical contest of skills",
			53: "Mass battle",
			55: "A crucial life support system begins to fail",
			56: "Victory!",
			58: "Taking chances",
			60: "Sole survivor",
			62: "Stop that",
			64: "Defend or not to defend",
			66: "Crash",
			68: "Physical barrier to overcome",
			70: "Double down",
			72: "Theft",
			74: "Dealing with a calamity",
			76: "Sudden cessation",
			78: "Used against them",
			79: "Travel setting",
			80: "Frenetic Activity",
			82: "Sneak barrier",
			84: "A moment of peace",
			86: "Beat you to it",
			88: "Confrontation",
			90: "Protector",
			92: "Crescendo",
			94: "Destroy the thing"
		};
		ACTION_PLOTPOINTS = { ...BASE_PLOTPOINTS, ...ACTION_PLOTPOINTS };

		var TENSION_PLOTPOINTS = {
			25: "Into the unknown",
			27: "A needed resource runs out",
			28: "Impending doom",
			29: "A motive free crime",
			30: "Collateral damage",
			31: "Shady places",
			33: "Do it, or else",
			34: "Remote location",
			35: "Catastrophe",
			36: "Grisly tone",
			37: "Something is getting away",
			38: "Retaliation",
			40: "A character disappears",
			41: "Hunted",
			42: "Bad decision",
			43: "Wanted by the law",
			44: "Something exotic",
			45: "Immediately",
			46: "Betrayal!",
			47: "A character is incapacitated",
			48: "Nowhere to run",
			49: "At night",
			51: "A secret weapon",
			52: "Heavily guarded",
			53: "Dead",
			54: "Suspicion",
			55: "Lose lose",
			56: "Out in the open",
			57: "A character is diminished",
			59: "Enemies",
			60: "Menacing tone",
			61: "A crucial life support system begins to fail",
			62: "Victory!",
			63: "Taking chances",
			64: "Sole survivor",
			65: "A problem returns",
			67: "Stuck",
			69: "Disarmed",
			71: "Quiet catastrophe",
			72: "Standoff",
			73: "Hidden threat",
			74: "A need to hide",
			76: "Followed",
			78: "It\'s a trap!",
			80: "Time limit",
			82: "A needed resource is running short",
			84: "Bad news",
			86: "Hunker down",
			87: "Abandoned",
			89: "Used against them",
			90: "Creepy tone",
			92: "Travel setting",
			93: "A new enemy",
			94: "Rural setting",
			95: "Vulnerability exploited"
		};
		TENSION_PLOTPOINTS = {...BASE_PLOTPOINTS, ...TENSION_PLOTPOINTS};

		var MYSTERY_PLOTPOINTS = {
			25: "Into the unknown",
			27: "Useful information from an unknown source",
			29: "A motive free crime",
			31: "A character disappears",
			33: "This isn\'t working",
			34: "A resource disappears",
			36: "Fortuitous find",
			37: "All is revealed!",
			38: "Useful information from an known source",
			40: "Cryptic information from an known source",
			41: "Lie discovered",
			43: "Something exotic",
			44: "A crime is committed",
			46: "It\'s a secret",
			48: "Something lost has been found",
			49: "The observer",
			50: "A secret weapon",
			51: "Liar!",
			53: "A character acts out of character",
			54: "Dead",
			55: "Mystery solved",
			57: "Secret information leaked",
			58: "Suspicion",
			60: "Evidence",
			62: "The plot thickens",
			64: "Dubious rationale",
			65: "A crucial life support system begins to fail",
			66: "Cryptic information from an unknown source",
			68: "A common thread",
			70: "Not their master",
			71: "The secret to the power",
			73: "Hidden agenda",
			75: "An object of unknown use is found",
			76: "Clear the record",
			77: "Framed",
			78: "An improbable crime",
			79: "The hidden hand",
			81: "Find it or else",
			83: "Travel setting",
			84: "An old deal",
			85: "A mysterious new person",
			86: "Rural setting",
			87: "Someone is where they should not be",
			89: "Vulnerability exploited",
			90: "Fraud",
			92: "Beat you to it",
			94: "Conspiracy theory",
			95: "An opposing story"
		};
		MYSTERY_PLOTPOINTS = {...BASE_PLOTPOINTS, ...MYSTERY_PLOTPOINTS};

		var SOCIAL_PLOTPOINTS = {
			25: "Outcast",
			27: "Sold!",
			29: "Retaliation",
			31: "A high energy gathering",
			32: "A rare or unique social gathering",
			33: "An organization",
			35: "People behaving badly",
			36: "Fame",
			37: "Scapegoat",
			38: "The observer",
			39: "Liar!",
			40: "Headquarters",
			42: "A common social gathering",
			44: "Light urban setting",
			46: "A work related gathering",
			48: "Suspicion",
			49: "Enemies",
			50: "Dense urban setting",
			52: "A group is in trouble",
			54: "Token response",
			55: "Not their master",
			56: "Public location",
			58: "The leader",
			60: "Savior",
			62: "Reinforcements",
			64: "Government",
			66: "Injustice",
			68: "A celebration",
			70: "Standoff",
			71: "Religion",
			72: "Innocence",
			73: "Preparation",
			75: "A meeting of minds",
			76: "Organizations in conflict",
			77: "Powerful person",
			78: "Travel setting",
			79: "Escort duty",
			80: "An old deal",
			81: "Alliance",
			83: "Power over others",
			85: "Rural setting",
			86: "Corruption",
			88: "It\'s business",
			90: "Just cause gone awry",
			91: "Confrontation",
			92: "Argument",
			94: "Social tension set to boiling",
			95: "Servant"
		};
		SOCIAL_PLOTPOINTS = {...BASE_PLOTPOINTS, ...SOCIAL_PLOTPOINTS};

		var PERSONAL_PLOTPOINTS = {
			25: "Persuasion",
			27: "Do it, or else",
			28: "Retaliation",
			29: "Bad decision",
			30: "Ill will",
			32: "Wanted by the law",
			34: "It is your duty",
			36: "Character connection severed",
			38: "Humiliation",
			39: "Betrayal!",
			41: "A character is incapacitated",
			43: "The observer",
			44: "Home sweet home",
			46: "Headquarters",
			47: "Family metters",
			49: "A figure from the past",
			50: "A character is diminished",
			52: "Enemies",
			54: "Doing the right thing",
			55: "At your mercy",
			57: "Fall from power",
			59: "Help is offered, for a price",
			61: "Prized possession",
			63: "Disarmed",
			64: "It\'s all about you",
			66: "Character connection",
			68: "Innocence",
			69: "Willing to talk",
			71: "Character harm",
			73: "Framed",
			74: "Preparation",
			76: "Friend focus",
			77: "Untouchable",
			78: "Bribe",
			79: "Character assistance",
			81: "Asking for help",
			83: "Welcome to the plot",
			84: "Likeable",
			85: "The promise of reward",
			87: "Expert knowledge",
			88: "A focus on the mundane",
			90: "Run away!",
			92: "Protector",
			94: "Servant"
		};
		PERSONAL_PLOTPOINTS = {...BASE_PLOTPOINTS, ...PERSONAL_PLOTPOINTS};

		var theme_plotpoints = {
			'action': ACTION_PLOTPOINTS,
			'tension': TENSION_PLOTPOINTS,
			'mystery': MYSTERY_PLOTPOINTS,
			'social': SOCIAL_PLOTPOINTS,
			'personal': PERSONAL_PLOTPOINTS
		}

		var META_PLOTPOINTS = {
			 1: "Character exits the adventure",
			19: "Character returns",
			28: "Character steps up",
			37: "Character steps down",
			56: "Character downgrade",
			74: "Character upgrade",
			83: "Plotline combo"
		};

		var PLOTPOINT_DEFINITIONS = {
			'Character exits the adventure': 'A Character, who is not a Player Character, is removed from the Characters List completely. Cross out all references to that Character on the Characters List. If there are no nonPlayer Characters, then re-roll for another Meta Plot Point. This change can be reflected in the activity in this Turning Point or not. For instance, you may explain the Character being removed from the Adventure by having that Character die in the Turning Point. Or, you simply remove them from the Characters List and decide that their involvement in the Adventure is over. If, when rolling on the Characters List to determine who this Character is, you roll a Player Character or “New Character”, then consider it a result of “Choose The Most Logical Character”.',
			'Character returns': 'A Character who previously had been removed from the Adventure returns. Write that Character back into the Characters List with a single listing. If there are no Characters to return, then treat this as a “New Character” result and use this Plot Point to introduce a new Character into the Turning Point. If there is more than one Character who can return, then choose the most logical Character to return. This change can be reflected in the activity in this Turning Point or not.',
			'Character steps up': 'A Character becomes more important, gaining another slot on the Characters List even if it pushes them past 3 slots. When you roll on the Characters List to see who the Character is, treat a result of “New Character” as “Choose The Most Logical Character”. This change can be reflected in the activity in this Turning Point or not.',
			'Character steps down': 'A Character becomes less important, remove them from one slot on the Characters List even if it removes them completely from the List. If this would remove a Player Character completely from the List, or if when rolling for the Character you get a result of “New Character”, then treat this as a result of “Choose The Most Logical Character”. If there is no possible Character to choose without removing a Player Character completely from the List, then roll again on the Meta Plot Points Table. This change can be reflected in the activity in this Turning Point or not.',
			'Character downgrade': 'A Character becomes less important, remove them from two slots on the Characters List even if it removes them completely from the List. If this would remove a Player Character completely from the List, or if when rolling for the Character you get a result of “New Character”, then treat this as a result of “Choose The Most Logical Character”. If there is no possible Character to choose without removing a Player Character completely from the List, then roll again on the Meta Plot Points Table. This change can be reflected in the activity in this Turning Point or not.',
			'Character upgrade': 'A Character becomes more important, gaining 2 slots on the Characters List even if it pushes them past 3 slots. When you roll on the Characters List to see who the Character is, treat a result of “New Character” as “Choose The Most Logical Character”. This change can be reflected in the activity in this Turning Point or not.',
			'Plotline combo': 'This Turning Point is about more than one Plotline at the same time. Roll again on the Plotlines List and add that Plotline to this Turning Point along with the original Plotline rolled. If when rolling for an additional Plotline you roll the same Plotline already in use for this Turning Point, then treat the result as a “Choose The Most Logical Plotline”. If there are no other Plotlines to choose from, then create a new Plotline as the additional Plotline. If a Conclusion is rolled as a Plot Point during this Turning Point, apply it to the Plotline that seems most appropriate. If another Conclusion is rolled, continue to apply them to the additional Plotlines in this Turning Point if you can. It is possible with repeated results of “Plotline Combo” to have more than two Plotlines combined in this way.',
			'Conclusion': 'If this Turning Point is currently a Plotline Development, then it becomes a Plotline Conclusion. Incorporate anything necessary into this Turning Point to end this Plotline and remove it from the Plotlines List. If this Turning Point is a New Plotline or already a Conclusion, then consider this Plot Point a None.',
			'None': 'Leave this Plot Point blank and go on to the next Plot Point, unless it would leave you with fewer than 2 Plot Points in this Turning Point, in which case re-roll.',
			'Into the unknown': 'This Turning Point involves Characters entering a situation with unknown factors. To know the unknown, you have to commit to it. For instance, a magic portal where there is no way of knowing what’s on the other side except by walking through it. Or, you discover a machine that is very powerful but you have no idea what it does, except if you turn it on. The only way to discover the unknown is to engage it, when it will be too late if you regret it.',
			'A character is attacked in a non-lethal way': 'A Character is attacked, but the assailant will not attack to kill.',
			'A needed resource runs out': 'A resource a Character needs has run out. The lack will cause problems. For instance, traveling a dinosaur filled jungle and running out of ammunition.',
			'Useful information from an known source': 'A Character receives useful information from an anonymous source. Perhaps a note is found laying on your doorstep, or an email appears in your inbox with a photo that reveals something to the Character. Whatever the information is, it should impact the Plotline.',
			'Impending doom': 'Something terrible is going to happen, and it is approaching. For instance, an enemy army is advancing to invade and will be at the borders in a week.',
			'Outcast': 'A Character is considered an outcast by other Characters for some reason. Maybe the Character is part of an ethnic group that is disliked in the area, or perhaps the Character is popularly believed to be the perpetrator of a heinous crime.',
			'Persuasion': 'A Character tries to persuade another Character to do something. This persuasion can take many forms, from pleading with them to threatening them, for instance.',
			'A motive free crime': 'A crime is committed either in this Turning Point or is learned about in this Turning Point, with no clear reason why the crime was committed. Maybe someone was murdered for no obvious reason, or a building was broken into with nothing stolen.',
			'Collateral damage': 'Whatever is going on in this Turning Point, the activity will spill over from the focus of that activity to things around it. This is particularly true for damaging events. For instance, a superhero defeats a villain in a downtown brawl, but doing significant damage to the buildings around them in the process. The collateral damage does not have to be physical. For instance, it could be the legal fallout from a major court decision.',
			'Shady places': 'This Turning Point involves a location that is less than legitimate, such as a back alley where drug deals are commonly transacted or a secret gambling hall in a bar.',
			'A character is attacked in a lethal way': ' An assailant is trying to kill a Character.',
			'Do it, or else': 'A Character is being given a task, and is being pressured into completing the task with a threat. For instance, a spy is forcing a diplomat to hand over technology secrets or he will expose the diplomat’s illegal activities and send him to jail. Of course, probably the most common form of this Plot Point is “Do this or I will kill you”.',
			'Remote location': ' This Turning Point involves a remote location, such as a cave or a cabin in the woods.',
			'Ambush': 'Whatever is happening in this Turning Point involves sudden action at an unexpected time.',
			'Sold!': 'This Turning Point involves a sale of some kind. Maybe goods are being sold, or information is being bought. Whatever is happening, goods and money are exchanging hands.',
			'Catastrophe': 'Just about the worst thing that can happen does happen, and it happens spectacularly and with much action. This could be the impregnable fortress that gets sacked, the unstoppable superhero who gets defeated, the unsinkable ship that starts to sink.',
			'Grisly tone': 'Whatever is going on in this Turning Point, the tone of it is grisly, something that causes horror or disgust. For instance, if a note is discovered with a grisly tone it may be smeared in blood or be accompanied by a severed hand.',
			'Character has a clever idea': 'A Character has an idea that has an impact on this Turning Point. For instance, the con man speaks up and just happens to know a secret way through the sewers into the walled city.',
			'Something is getting away': 'This Turning Point involves a time limit where, at the end of it, something will get away. For instance, a ship carrying a magic artifact is about to leave the dock and a Character has to fight their way through a pack of armed goons to board the ship before it sets sail.',
			'Retaliation': 'Whatever is happening in this Turning Point, it involves an element of retaliation or revenge.',
			'A character disappears': 'A Character is nowhere to be found. Whether there is evidence or not as to what happened to the Character is up to you depending on the other Plot Points involved in this Turning Point.',
			'Hunted': 'A Character is being hunted by someone or something that is not strictly legitimate. In other words, as opposed to Wanted By The Law, Hunted may mean a hit man is pursuing a Character to fulfill a mafia contract on them, or a ghost may be after a Character. The hunter doesn’t have to be seeking to kill.',
			'A high energy gathering': 'This Turning Point involves a social gathering with a great deal of energy or activity. This could be a busy nightclub, a loud party, or a sporting event, for instance.',
			'A rare or unique social gathering': 'This is a social gathering for a specific and rare purpose. Examples would include funerals or a wedding.',
			'Bad decision': 'A decision a Character made has turned out to be a very bad one. This can be a decision made earlier in the Adventure, or it can be something from before the Adventure. This earlier decision may not have seemed like a bad one at the time, but it has turned out to be bad, either for the Character, for others, or both. For instance, maybe a ship’s captain decided to investigate a distress beacon in deep space, only to find it’s a trap laid by pirates.',
			'This isn\'t working': 'Something that is supposed to be working is not for some reason, causing a problem. For instance, a binding spell is failing to hold a demon, or a crime boss is delivering stolen goods through a shipping port that is supposed to be secure but turns out to be swarming with police. Whatever isn’t working is something that was assumed would work.',
			'Distraction': 'A Character is distracted in this Turning Point in such a way that it impacts events. For instance, before a villain delivers his killing blow he’s distracted by an image of his lost love, giving the hero time to escape.',
			'Ill will': 'A Character harbors ill will toward another Character for some reason. The animosity should be deep seated and color the Character’s reactions when it comes to the unliked Character. The dislike may be reciprocated or not.',
			'An organization': 'This Turning Point involves an organization of some kind. This can be an organization already in the Characters List or not. Whatever is happening in this Turning Point, the organization is formally involved in some way. For instance, a crime has been committed and a local guild had knowledge of it and covered it up to protect its own interests.',
			'Wanted by the law': 'A Character is wanted for a crime. It doesn’t matter if they actually did the crime, but the law is after them as the main suspect either way.',
			'A resource disappears': 'An important object or resource is stolen by an unknown thief. The resource should be something either useful to a Character, or it should pertain to the Plotline in question.',
			'It is your duty': 'A Character is charged with carrying out a duty. This should be something that the Character has little choice in the matter, whether they want to do it or not. Whoever the duty is coming from, that source has authority over the Character. For instance, a soldier wants to join in the pivotal battle but his commander gives him the duty of guarding the fortress gate instead.',
			'Fortuitous find': 'A Character runs across something very useful for resolving the Plotline. This may be a piece of information, a useful tool, a resource that is needed, a person who can help, etc. Whatever it is, it’s the right thing at the right time, and it falls into the Character’s lap.',
			'Character connection severed': 'A Character who has a connection with another Character severs that connection. This can happen for any of a number of reasons, from the Character dropping out of the story to the Character getting angry at the other Character for something. The severed connection does not have to be permanent.',
			'All is revealed!': 'A source in this Turning Point gives a lot of detail about something. For instance, a guard is captured and tells where the king has hidden the Sacred Scrolls.',
			'Humiliation': 'This Turning Point involves a Character being humiliated or facing humiliation. Whatever is happening, it should be something deeply embarrassing to the Character. For instance, a member of an unpopular community is being bullied and mocked, or a public figure has something personal publicly exposed.',
			'People behaving badly': 'This Turning Point involves someone behaving in a socially unacceptable way. For example, a group of drunks throwing bottles, or a heckler in a crowd yelling at a speaker.',
			'Useful information from an known source': 'A Character acquires useful information from a known source. For instance, a detective investigating a homicide gets a tip from an informant she sometimes uses, giving her a clue.',
			'Cryptic information from an known source': 'A Character acquires information that is not immediately useful from a known source. The information is cryptic, the Character doesn’t know what it means. For instance, a crewmember leaves behind a note to be found that simply says, “Kraton,” where the Character receiving the note has no idea what “Kraton” is.',
			'Lie discovered': 'This Turning Point involves the discovery of a lie. The lie could have happened within this Turning Point, or it could have happened earlier in the Adventure or even before the Adventure. For instance, Characters may learn that the detective did not destroy the cult artifact like he said he did, but instead took it home to try and summon the Beast From Beyond.',
			'A character is attacked to abduct': 'An assailant is attempting to abduct a Character.',
			'Something exotic': 'Whatever is happening in this Turning Point it involves an unusual or exotic element. For instance, if the Turning Point is about someone being attacked by an assassin, the assassin may have a very unusual identity or mode of attack (maybe he’s disguised as a clown and attacks with exploding balloons, or he is a martial artist with fantastic moves).',
			'Immediately': 'Immediate action is required in this Turning Point, whatever is going on. For instance, if this Turning Point involves engine failure on a starship, the Character doesn’t have days to resolve the issue, he may only have an hour. Whatever is going on, it requires immediate action.',
			'Fame': 'Whatever is happening in this Turning Point involves someone famous to some extent. This doesn’t necessarily mean that a famous Character is Invoked, just that the Turning Point has some connection to fame. For instance, if this Turning Point involves learning a secret about another Character, you may learn that they were once a member of a famous superhero group decades ago.',
			'Chase': 'This Turning Point involves a chase, where one Character is pursuing another.',
			'Betrayal!': 'A Character, who was thought to be an ally or to be benign, turns on another Character. This can be a fundamental betrayal, such as they are actually on opposing sides, or it can be a momentary betrayal, such as attacking someone out of a fit of anger.',
			'A crime is committed': 'A crime is committed either in this Turning Point or is learned about in this Turning Point.',
			'A character is incapacitated': 'A Character is rendered out of commission for some reason. Perhaps they are wounded badly, they lose their powers, are trapped somewhere, etc.',
			'It\'s a secret': ' This Turning Point involves an activity that is done in secret, such as smuggling or embezzlement. The activity doesn’t have to be illegal, but whatever it is, it is something hidden or being done behind an otherwise legitimate front. For instance, a fast food chain is using it’s delivery trucks to smuggle drugs across the border.',
			'Something lost has been found': 'Something that has been lost turns up in this Turning Point. The thing could have been lost in this Adventure or before. It can be an object, a person, or anything. For instance, a ring of power suddenly turns up in a creek bed, or a Character who disappeared early in the Adventure suddenly makes a reappearance.',
			'Scapegoat': 'This Turning Point involves an innocent Character accused of wrongdoing to throw suspicion off of the real culprit. For instance, the woman who took all the ammo blames the newcomer to the zombie survivalist group, or the mayor of the little New England town blames the practitioners of a religion for the bizarre events going on when he is actually at fault.',
			'Nowhere to run': 'A Character faces a peril with no means to escape.',
			'At night': 'This Turning Point takes place at night.',
			'The observer': ' Whatever is happening in this Turning Point that is presumed to be private from someone, is actually being witnessed or observed. The observed are not aware of this observer. For instance, two enemy generals are meeting in secret to form an alliance and betray their respective kings, but the meeting is observed by a princess who knows exactly what it means.',
			'Escape': 'This Turning Point involves an escape of some sort. For instance, a Character who was captured by brigands in an earlier Turning Point manages to slip away from his captors and escape into the forest.',
			'A secret weapon': 'This Turning Point involves the reveal of a secret weapon in possession by a Character. This weapon should be significant enough to sway the balance of power or to otherwise require a solution to resolve. For instance, the motley band of orcs is unexpectedly backed by a large ogre whose aid they enlisted. Or, the galactic empire unveils a new, planet-busting warship that changes everything.',
			'Heavily guarded': 'This Turning Point involves entering a heavily guarded and dangerous location. For instance, this could be needing to infiltrate a high tech security facility to steal information, or breaking into the necromancers lair full of guardian zombies to destroy his magic crystal.',
			'Rescue': 'A Character needs to be rescued in this Turning Point.',
			'Liar!': 'This Turning Point involves an active lie. The lie is being committed in this Turning Point. Something someone said or claimed is false. For instance, a vampire lord claims he knows nothing of a magic book, when actually he is seeking it himself. The lie may or may not be detected in this Turning Point.',
			'Home sweet home': 'This Turning Point takes place in the private home of a Character.',
			'A character acts out of character': 'A Character does something that runs counter to that Character’s perceived goals or personality. The action may seem at odds to how they’ve been acting (such as a trusted member of a team sabotaging a crucial resource) or the action is vague with no discernible purpose (such as a Character meeting with an unknown person in secret).',
			'Headquarters': 'A setting in this Turning Point is a Character’s main headquarters. For instance, it may be the ritzy bar where the mob boss runs his empire, or the wizard’s wilderness tower.',
			'Physical contest of skills': 'This Turning Point involves Characters squaring off against each other in a physical contest of skills. This can be anything such as combat, a sporting event, duel, arm wrestling contest, etc.',
			'Dead': 'A Character is dead. This can either be expected or unexpected, but whatever the circumstances, this Turning Point involves a dead Character.',
			'A common social gathering': 'This Turning Point involves a social gathering. This can be any gathering of people, generally for a common purpose, such as gathering for dinner at a home or restaurant, or an afternoon at a mall. The social gathering itself should be considered of a mundane nature, although what else transpires at the gathering doesn’t necessarily have to be.',
			'Light urban setting': 'This Turning Point takes place in a light urban setting, such as a small town or village.',
			'Mystery solved': 'A mystery is solved. This can be a large, unanswered question in the Adventure or something minor, but it is not a Plotline resolved unless this Turning Point is also a Plotline Conclusion. A Mystery Solved could be any number of things, from finally figuring out what a device does to locating the missing Chancellor.',
			'A work related gathering': 'This is a social gathering that involves professionals or workers. The gathering itself may or may not involve their actual work. For instance, police officers gathering at a “cop bar” or a team of super heroes gathering at their headquarters would both count.',
			'Family metters': 'This Turning Point involves a family member or members of a Character. For instance, an occult investigator is about to head off on a mission when his sister unexpectedly appears on his doorstep, or one of the Characters has an uncle who is a feudal lord and is summoning them for their help in defending his land because no one else will stand by him.',
			'Secret information leaked': 'Information that should not have gotten into the wrong hands has. For instance, outlaws always seem to know when the stagecoach is coming through Gateway Gulch with the railroad payroll. How are they finding out? Or, an enemy spy has learned of the realm’s secret military plans.',
			'Suspicion': 'This Turning Point involves a Character being suspicious of another Character for some reason. For instance, a beloved leader on a space station is murdered and suddenly every newcomer on board is viewed with suspicion.',
			'Lose lose': 'This Turning Point involves a choice where both or all options are bad in some way.',
			'A figure from the past': 'A new Character joins the Adventure, someone from a Character’s past. This Plot Point requires a new Character to be added to the Characters List and Invoked.',
			'Mass battle': 'This Turning Point involves a combat between many combatants. This can be a throw down between two teams or a battle in a war, for instance.',
			'Out in the open': 'Whatever is happening in this Turning Point, it is happening out in the open for all to see. For instance, a Character is attacked at a public festival in the middle of the day, or, something a Character is doing that they thought is private is actually being filmed and viewed by others.',
			'Evidence': 'A Character finds something that helps settle an existing question. For instance, the gun that killed a victim is found stashed under a suspect’s bed.',
			'A character is diminished': 'A Character is reduced in some way that makes them less effective. Perhaps they are wounded, or their energy is low, or they lose some authority, etc. The Character is not entirely powerless, but loses a significant portion of their power or utility.',
			'The plot thickens': 'A promising lead or clue to solving an open question turns out to be a dead end. For instance, Characters follow through on a tip to go to a warehouse to find an abducted heiress, but instead of finding a nest of bad guys they just find an empty building.',
			'Enemies': ' This Turning Point involves enemies of a Character. Whatever activity is going on in this Turning Point, those enemies play an important role.',
			'Dubious rationale': 'A Character does something that is in keeping with their Character, but the action could also have been for another reason and it is not clear which reason the Character acted on. For instance, the CEO goes into his office late at night, as he sometimes does, on the same night another executive is murdered. The action should seem innocent, except for other events or information that cast doubt on it.',
			'Menacing tone': 'This Turning Point involves a menacing tone of some kind. For instance, one Character may be threatening another Character, or a villain may be gloating over a captured opponent.',
			'A crucial life support system begins to fail': 'This can be an actual life support system, like the oxygen ventilation of a starship, or a safety system, like the brakes on a car. The failure will constitute an emergency for the Characters involved.',
			'Dense urban setting': 'This Turning Point takes place in a heavily urban area, such as a large city.',
			'Doing the right thing': 'A Character who is acting in bad faith in some way has a change of heart and decides to do the right thing. For instance, a con man stealing medicine from a diseased community decides he can’t leave all those people to die.',
			'Victory!': 'A Character achieves a victory over another Character in this Turning Point. For instance, a band of marauders successfully waylay the king’s couriers, or a hacker worms his way into a corporate computer system.',
			'Taking chances': 'A Character acts in a very risky way. For instance, a Character may suddenly show no regard for their life as they walk out across a narrow beam above a valley to save a friend. Or, the villain you are fighting takes a drug that makes him go into a battle frenzy where he loses all caution.',
			'A group is in trouble': 'A group, such as a community, is in trouble in this Plot Point. The group or community is facing a difficulty. For instance, maybe a village is being harassed by monsters, or a corporation is facing a lawsuit that could destroy it. Whatever the trouble is, it should be something that can be solved and will likely constitute a problem for a Character.',
			'Sole survivor': 'This Turning Point involves some kind of process of elimination where there is only one left. This can be a battle, but doesn’t have to be. For instance, maybe a sinking ship has a single survivor who washes up on shore, or a group of crewmen from a starship playing chess with an alien intelligence is down to their last crewmember who is now chosen for the alien’s ultimate challenge.',
			'Token response': 'A Character or organization acting in this Turning Point does the bare minimum to address a problem, or makes just a token effort, as opposed to doing something truly effective. For instance, a notorious space pirate has been captured, but instead of receiving serious prison time, the federation government goes very lenient on him and releases him from prison in a week.',
			'Cryptic information from an unknown source': 'Information that is unclear what it means is received from an anonymous source. Maybe an odd word is found scrawled on a mirror, or a stranger’s diary is found talking about events similar to the Plotline.',
			'A common thread': 'It is learned that events that appeared to be unrelated have a commonality after all. For instance, a rash of crimes has beset the city, from car jackings to break ins. It turns out the culprits all work as security guards in the same building.',
			'A problem returns': 'A problem that had been thought resolved returns in some fashion. This can be a problem from this Adventure, from a previous Adventure, or something inferred from the past. For instance, a kingdom may be enjoying a decade of peace following the vanquishing of the Dark Lord, but it is discovered that he is not dead and is now returning. The magnitude of the problem is open to interpretation and can range from large to minor, such as a previously sealed leak in a boat has sprung open again.',
			'Stuck': 'A Character is stuck in this Turning Point, unable to act, while the events of the Turning Point transpire. Whatever has them stuck is not necessarily permanent, but at the moment it renders them powerless or mostly powerless. For instance, maybe the character is bound or trapped in a jail cell.',
			'At your mercy': 'A Character is helpless and desperate for some reason, and must rely on the mercy of another Character who has the power to address their problem. For instance, a Character is afflicted with a magical curse that only one sorcerer can cure.',
			'Stop that': 'A Character takes action to stop something from happening in this Turning Point. The action could be expected, such as a hero putting an arrow through the executioner before he drops his axe. Or, it could be unexpected, like a Character suddenly shooting a captured villain right before he was about to reveal crucial details.',
			'Not their master': 'A Character in this Turning Point who is assumed to be working for one source turns out to be working for another. For instance, the hitman who’s been trying to kill a Character doesn’t work for the mafia like you thought, but for a corporation who has an interest in that Character.',
			'Fall from power': 'A Character loses their power in this Turning Point. For instance, a king is found to be a fraud by his brother, who asserts his own claim to the throne and takes it.',
			'Help is offered, for a price': 'A Character offers to help another Character in exchange for something. What’s being asked for could be anything, from mutual aid to a fee. Whatever the price, it should be steep enough to be of real significance to the paying Character.',
			'Public location': 'This Turning Point involves a public location, such as a town square or a park in the middle of the day.',
			'The leader': 'This Turning Point involves the leader of someone or some organization.',
			'Prized possession': 'Whatever is happening in this Turning Point, it involves an important possession of a Character. For instance, if the Turning Point is about something being stolen, maybe a sorcerer’s magic staff is taken.',
			'Savior': 'A Character is involved in this Turning Point who offers to save the day.',
			'Disarmed': 'A Character loses their primary method of defending themselves. This could mean the loss of a weapon, or maybe a powerful bureaucrat is powerless in another’s kingdom, etc. The disarmament should be temporary for the Turning Point and deprive the Character of crucial defenses.',
			'The secret to the power': 'here is a power, and it has a secret source. For instance, an evil wizard may derive his abilities from his ancient staff, or the warship hurtling through space may be dependent on a simple power core inside that will cripple the ship if it is damaged. This secret gives Characters an option to stop an otherwise overwhelming or powerful problem.',
			'Hidden agenda': 'A Character either reveals, or is found out to have, a motive that they had not previously exposed. For instance, maybe the detective isn’t investigating the murder out of dedication to his job, but the victim used to be a love interest of his. Classically, this can also be the ally who turns out to be an enemy. The hidden agenda doesn’t have to be something nefarious, although it can be. Whichever the case, the agenda now becomes known to others.',
			'Defend or not to defend': 'This Turning Point involves a confrontation between two Characters, where another Character views it and has the option to intervene or not. The observing Character is not directly part of the confrontation, but will become so if they step in. This Plot Point calls for three Characters to be Invoked.',
			'Crash': 'This Turning Point involves a vehicle carrying a Character to crash or threaten to crash. The Character(s) involved must either mitigate the damage of the crash, prevent the crash in the first place, and/or survive the crash. The vehicle can be anything from a plane to a car to a snow sled ... anything that can transport a Character and its crashing would be dangerous.',
			'Reinforcements': 'A Character who is running low on a human resource gets a boost. For instance, the battle is going poorly for King Leonard, but just before they lose King Ferdinand appears on the hill with his forces ready to save the day.',
			'Government': 'This Turning Point involves government in some way. Maybe a Character has to deal with a border crossing checkpoint, or a starship needs to get proper authorization to leave port.',
			'Physical barrier to overcome': 'A Character faces a physical barrier of some sort that must be overcome. It could be a cliff that needs to be climbed, a rickety bridge to cross, a door that needs to be knocked down, etc. Whatever the barrier is, it will require physical action to get past.',
			'Injustice': 'This Turning Point involves a social injustice of some kind. For instance, a corrupt politician uses a civic ordinance to foreclose on an apartment building where friends of a certain hero, who has upset the politician, live.',
			'Quiet catastrophe': 'Just about the worst thing that can happen does happen. This is similar to the Action Plot Point Catastrophe, except that it is accompanied by less action. For instance, a colonizing spaceship stops midway through a 40 year journey, waking everyone up from their cryo sleep. Or, the investigator discovers the ancient vampire he had destroyed is, somehow, back.',
			'An object of unknown use is found': 'A Character finds something that they think is useful, but they do not know in what way. This may be a magic wand that they don’t know how to use, a key that they don’t know the lock it goes to, a device with an unknown purpose but currently has no power, etc.',
			'It\'s all about you': 'Whatever the main action of this Turning Point, it is focused primarily on one Character.',
			'A celebration': 'This Plot Point involves a celebration of some sort, such as a birthday party or a high school graduation party.',
			'Standoff': 'This Turning Point involves two or more Characters in a tense standoff. For instance, a group of mercenaries have the Characters pinned down behind rubble with gunfire, while the Characters fire back. Neither side can take out the other, but neither can they leave without resolving the conflict.',
			'Double down': 'Whatever is happening in this Turning Point, those events will intensify. For instance, if a ship is leaking on the high seas during a storm, maybe torrential winds tear down the sails.',
			'Hidden threat': 'There is a threat in this Turning Point that has been in the Adventure previous to this Turning Point but went undetected. This could be anything from an evil spirit lurking in an ancient vase to a virus in a person’s body to a good guy who turns out to be a bad guy, etc.',
			'Character connection': 'A Character forms a connection with another Character. This connection can be anything from showing a personal interest in the Character to asking them to become a business partner, etc. Whatever the connection is, it will have a lasting impact beyond this Turning Point.',
			'Religion': 'This Turning Point involves some aspect of religion or religious belief. For instance, maybe an event is taking place at a church, or Characters stumble upon a cult preparing a magic ritual for their otherworldly god.',
			'Innocence': 'This Turning Point involves an element of innocence, usually an innocent person in an otherwise less than innocent situation. For instance, an average citizen finds herself in the middle of two vampires battling. This can also be considered a “fish out of water” Plot Point, where someone who does not belong in a situation finds themselves in that situation.',
			'Clear the record': 'A Character is given the task of clearing someone or something of a false claim. For instance, a friend says they are wrongly convicted of a crime and that the evidence is out there to prove it. The task may come to the Character officially, given by another Character, or it may be something that falls into their lap, such as discovering the truth themselves and only they know it. For instance, a foreign power has staged a catastrophe to start a war, but a handful of Characters know the truth ... if only they can reach headquarters in time to tell them before warships are launched.',
			'Willing to talk': 'A Character is in a mood to talk. Whatever it is they have to say, it’s important to furthering the Plotline.',
			'Theft': 'This Turning Point involves a theft, whether attempted or successful. What is being stolen is an object of some kind, or information, or anything that can be taken. This Turning Point involves the actual activity and action of the theft or attempted theft. For instance, the Character is strolling through a museum when a group of men burst in to steal a ritual mask.',
			'Character harm': 'A Character hurts another Character in some personal way. For instance, a villain harms a wizard’s familiar or a Character hurls a personal insult at another Character.',
			'A need to hide': 'A Character must hide from something or someone in this Turning Point. For instance, the Character may have escaped from a bounty hunter but must hide long enough to recover their wounds. Or, a terrible storm has struck and the Character must take shelter, hiding from the storm.',
			'Followed': 'A Character is being followed by another Character.',
			'Framed': ' A Character is unfairly framed by another Character. For instance, a mob boss plants evidence to make it look like a police detective has committed a crime.',
			'Preparation': 'This Turning Point involves a Character needing to prepare for something. For instance, a wizard must study up on how to banish demons before a villain arrives, or a town of prospectors and merchants must learn how to fight before the band of outlaws arrives to exact their revenge for hanging a comrade.',
			'An improbable crime': 'This Turning Point involves a crime that seems either improbable or impossible to have occurred, such as someone found murdered in a secure room or a piece of artwork stolen from a museum with no visible break in.',
			'Friend focus': 'Whatever the main action of this Turning Point, it is focused on a friend or someone close to a Character. This friend can be an already existing Character in the Adventure or someone not on the Characters List. Whoever the friend is attached to, that is the Character Invoked, not the friend.',
			'Untouchable': 'A Character is, in some manner, untouchable by others in this Turning Point. For instance, a villain who is a world leader and thus can’t be directly attacked without triggering an international incident, or a superhero who is nearly impervious to harm. The untouchableness should serve a plot purpose, so that Characters are forced to take other actions to advance the Plotline.',
			'Bribe': 'A Character is offered a bribe by another Character to do something that is not legitimate. For instance, a villain may offer money to a Character if they walk away from a murder scene.',
			'Dealing with a calamity': 'This Turning Point involves a Character having to “fight” a calamity of some kind. For instance, maybe the Character is battling a fire to put it out, or he must fight his way through an ancient stone temple as it collapses around him.',
			'Sudden cessation': 'Whatever is happening in this Turning Point, it will suddenly cease. This could occur at any time and the causes may be unknown. For instance, if Characters are attacked by a group, the group may suddenly break off and run away.',
			'It\'s a trap!': 'This Turning Point involves a trap of some kind. This can be a physical trap, such as adventurers falling prey to a pit in a hallway, to other kinds of traps, such as the summons to the peace negotiation was really just a ruse to get the leader in sights for an assassination.',
			'A meeting of minds': 'This Turning Point involves two Characters coming together for a discussion of importance.',
			'Time limit': 'A task must be accomplished within a certain amount of time or a Character will suffer consequences. The time limit does not need to expire within this Turning Point and could extend beyond it further into the Adventure, but it should terminate within this Adventure to give the Characters a reason to accomplish the task. Failure to accomplish the task should be significant. For instance, if a cure to a toxin isn’t found within a day, the prince will die.',
			'The hidden hand': 'Whatever is happening in this Turning Point it is clear that it was caused on purpose by someone of unknown identity. For instance, if a Character is ambushed by bandits, the bandit leader may make a mysterious reference to their “benefactor” having paid for the attack. Or, an engine failure on a ship may be found to have been caused by obvious tampering.',
			'A needed resource is running short': 'A resource a Character needs is running low and will need to be replenished. This causes problems for the Character. For instance, a starship’s warp engine functions on crystals that are running out.',
			'Organizations in conflict': 'This Turning Point involves two or more organizations that are at odds with each other. For instance, two rival mafia organizations may be trying to capture a master counterfeiter to use for their own purposes.',
			'Bad news': 'Something negative that happens in this Turning Point doesn’t happen directly in the Turning Point but is delivered in the form of information. The event happened remotely, and a Character is learning of it. For instance, Characters may learn their allies lost a crucial battle elsewhere.',
			'Character assistance': 'A Character assists another Character in some way. This assistance can be anything from coming to their aid in battle to giving them a shoulder to cry on.',
			'Asking for help': 'A Character approaches another Character to ask for help.',
			'Hunker down': 'This Turning Point involves a Character needing to fortify a place of refuge. For instance, a baron must shore up his castle defenses against an impending attack, or a generator must be fueled up to increase a force field’s power before a meteor storm rains down on the planet surface.',
			'Abandoned': 'Something needs to be abandoned or has been abandoned already in this Turning Point. For instance, a heavily damaged starship is going to explode in two hours and must be evacuated. Or, a Character comes upon an empty village in a forest.',
			'Find it or else': 'Something needs to be found in this Turning Point to help resolve the Plotline. The act of finding the thing could take place in this Turning Point, or a Character learns of the need to find something. The thing to be found can be just about anything, from an object such as a magic ring to open a portal, to a special person like the lone witness to a crime that proves an accused person is innocent.',
			'Used against them': 'A resource owned or aligned with one Character is somehow turned against them in this Turning Point. For instance, a small starship is being pursued by three massive battle cruisers. By skillful piloting, the smaller ship causes the larger ships to collide with each other, using their size against them. Or, a wizard may command a powerful golem, but another wizard casts a spell to make the golem attack its master.',
			'Powerful person': 'This Turning Point involves a powerful person. The Character’s power can be of any nature, from a physically powerful warrior to a government figure with a lot of influence. Invoke a Character. If the Character is powerful, then that is the powerful person. If they are not, then the powerful person is someone associated with that Character in some way.',
			'Creepy tone': 'This Turning Point involves a creepy tone, such as a dark and forbidding place or a Character who is extremely menacing in a disturbing way.',
			'Welcome to the plot': 'A Character learns that they are connected to this Plotline somehow in a personal way. Maybe it involves something from their past or someone in their life. For instance, a detective may discover that the crime syndicate he is trying to take down is run by his long lost brother.',
			'Travel setting': 'This Turning Point takes place in a traveling vehicle. For instance, a ship at sea, a train, a ship hurtling through space, etc.',
			'Escort duty': 'A Character must escort another Character somewhere. For instance, this could be a bodyguard transporting a high powered executive to a remote location, or a band of warriors trying to get a princess through a valley full of monsters.',
			'An old deal': 'This Turning Point involves an agreement made long ago, probably even before this Adventure began. For instance, occult investigators researching a mysterious death discover that the deceased person sold his soul to a demon ten years ago, and they suspect the death is the demon having come to collect.',
			'A new enemy': 'This Turning Point presents a new threat to a Character. It is a threat that may or may not be directly related to any Plotlines but must be dealt with all the same. For instance, explorers deep under the earth are moving through an ancient ruin to find their lost comrade when they are beset upon by dinosaurs who nest in the area. This results automatically in a New Character.',
			'Alliance': 'One group offers to ally with another. This may be a surprise alliance, such as an enemy wanting to join with another enemy to take on a common foe, or it could be something less dramatic, such as the FBI offering to assist local law enforcement in solving a crime. The “groups” in question can be formal organizations or something looser, such as groups of individuals.',
			'Power over others': 'A Character has power over other Characters in some way, shape, or form in this Turning Point. This power puts the Character in a commanding position in regards to the others. For instance, the lord of a land demands all the peasants pay high taxes or else his men will oppress them. Or, the producer of an anti-toxin for a disease that an entire village has demands they give him whatever he wants in order to receive the medicine.',
			'A mysterious new person': 'This Turning Point automatically Invokes a New Character, added to the List, whose identity or purpose is not fully known. Maybe they are a shadowy visitor at a meeting, or someone who seems to have authority over someone else.',
			'Frenetic Activity': 'This Turning Point involves action coming fast and furious at a Character. It should be a rapid fire succession of action, for instance a series of attackers, an out of control boat rocketing down a rapids approaching peril after peril, running a gauntlet of some kind through a series of traps, etc.',
			'Rural setting': 'This Turning Point involves a rural setting, such as out in the country or at a farm.',
			'Likeable': 'This Turning Point involves a Character who is very likable to another Character. Whoever it is, it should be someone who generates sympathy. The Character’s likability should be strong enough to motivate the other Character’s actions. For instance, a jaded cop thought he has seen it all, but a kidnapped girl kindles in him a desire to save her and redeem himself.',
			'Someone is where they should not be': 'A Character is at a location where they should not normally be. For instance, an ally is seen at the headquarters of an enemy, a wealthy socialite is found meeting with a mafia boss at a restaurant, etc.',
			'Sneak barrier': 'A barrier needs to be overcome through stealth or dexterity. For instance, a monster lives in a cave that is only accessible by climbing a high, treacherous cliffside. Or, there are too many ninjas guarding the villain to fight your way through, but you can slip past them unseen if you are skilled enough.',
			'Corruption': 'This Turning Point involves corruption of a social apparatus of some kind. For instance, a police officer on the take from the mob, or the villain of the Adventure turns out to be a local bureaucrat using his position to give smugglers access to a dock at night.',
			'Vulnerability exploited': 'This Turning Point involves a vulnerability of some kind being exploited by a Character. For instance, someone knowing of another’s crime and blackmailing them, Characters learning of a starbase’s secret vulnerability that allows it to be destroyed, etc. This Turning Point can either involve learning about the vulnerability or actively exploiting it.',
			'The promise of reward': 'This Turning Point involves a Character faced with a substantial reward for their participation. For instance, maybe a village is willing to give a group of adventurers everything they have if they fight off a band of marauding goblins. The reward should be for doing something that is considered legitimate or good.',
			'Fraud': 'A Character is a fraud. Whatever it is they are presenting themselves as, or whatever story they have told of themselves, is false. This result differs from Hidden Agenda, where in Hidden Agenda the Character may legitimately have both motives in mind, whereas in Fraud the image or story they are presenting is completely fake. For instance, the prince claiming he is the rightful ruler of a kingdom is actually a shapeshifting doppelgänger assuming the role.',
			'It\'s business': 'This Turning Point involves business or commerce in some way. It can either be a business transaction, or a business is involved in the Turning Point. For instance, a corporation hires a super hero to protect an important shipment, or a book of antiquity containing a needed spell has to be purchased from an auction house.',
			'Just cause gone awry': 'This Turning Point involves something that began as a just cause but has spiraled into something unjust. For instance, a hero takes down a group of orcs terrorizing a town, saving the people, but now the hero has installed himself as the overlord of the town and is demanding tribute.',
			'Expert knowledge': 'This Turning Point involves a Character who has very specific and specialized knowledge or skills that come into play during the Turning Point. For instance, only the genius of Dr. Rayder can figure out the intricacies of the alien device, or it’s discovered that a killer is murdering people with his knowledge of exotic poisons.',
			'A moment of peace': 'Whatever else is going on in this Turning Point, it should overall be a peaceful time for a Character. For instance, there is a lull in the war where the combatants have a chance to enjoy a drink together and relax before they must fight again.',
			'A focus on the mundane': 'This Turning Point involves a focus on something mundane and ordinary, such as a person’s living room or a meal. This mundane thing may be coupled with something extraordinary in the Turning Point. For instance, a Character is killed when his nightly dinner is poisoned, or a family portrait is found to be a cursed item.',
			'Run away!': 'A Character flees or has fled. The actual flight may occur in this Turning Point or it may be learned of. For instance, a Character runs screaming as a horrible monster appears on the scene, or, a Character who disappeared earlier in the Adventure is learned to have left town fearing for his life.',
			'Beat you to it': 'Whatever is happening in this Turning Point that involves arriving at a location for some purpose, a Character discovers that someone else has arrived before them. For instance, a Character goes to the morgue to check out a clue and learns that another investigator already showed up and took the body.',
			'Confrontation': 'This Turning Point involves Characters meeting in a confrontation that may turn physical if things don’t go well. For instance, a Character meets the leader of a street gang to get information, but the gang is notoriously twitchy and violent.',
			'Argument': 'A disagreement between two Characters leads to a conflict in this Turning Point.',
			'Social tension set to boiling': 'An element of extreme social tension is near the breaking point. This Turning Point involves some aspect of that, such as an event that increases the tension or an event that is a result of the tension. For instance, two nations at the brink of war have a border skirmish as pressure rises among soldiers.',
			'Protector': 'A Character must protect someone or something in this Turning Point. If this is an Action Plot Point, the Character must actively protect in this Turning Point from a threat. If it is a Personal Plot Point, then the Character receives the protection duty in this Turning Point.',
			'Crescendo': 'A series of events that has taken place in this Adventure culminates in this Turning Point. If this is early in the Adventure or in this Plotline, then instead the Adventure or Plotline gets off to a fiery start. For instance, Characters following clues to track a cult finally discover their lair, resulting in a mass battle. Or, a Plotline about retrieving a stolen gem begins with a very elaborate theft.',
			'Destroy the thing': 'A Character must destroy or try to destroy something in this Turning Point. Maybe a party of dungeon delvers reaches the heart of the cavern where they must break a mystic seal.',
			'Conspiracy theory': 'A Character believes in a scenario that explains a problem in this Adventure. The Character may be right or wrong, but the theory may cause action on the part of the Character. For instance, a group is holed up in a mall during a zombie apocalypse. One Character believes it’s just a disease, so they encourage the others not to shoot the zombies.',
			'Servant': 'This Turning Point involves a servant or proxy of another Character. Invoke a Character for the servant to represent.',
			'An opposing story': 'A Character learns of an alternate version of something they already know about from this Adventure. For instance, while investigating a starship that had been waylaid by aliens, Characters discover a crewmember who claims the attackers were members of a rival guild and not aliens.',
			'Meta': null
		}
	
		if (!theme) {
			theme = this.theme()
			theme = theme['result'].toLowerCase()
		} else {
			theme = theme.toLowerCase()
		}
		var character = false;
		var roller = new DiceRoller()
        var rolls = roller.roll('1d100')
        var plotpoint = theme_plotpoints[theme][utils.getClosestKey(theme_plotpoints[theme], rolls.total)]

		if (plotpoint == 'Meta') {
			var meta_rolls = roller.roll('1d100')
			plotpoint = META_PLOTPOINTS[utils.getClosestKey(META_PLOTPOINTS, meta_rolls.total)]
		}

		var definition = PLOTPOINT_DEFINITIONS[plotpoint];

		/*
		if (definition.includes('Character')) {
			character = this.generateCharacter();
		}
		*/
		return {
			'rolls': rolls,
			'result': plotpoint,
			'extras': {
				'theme': theme.charAt(0).toUpperCase() + theme.slice(1),
				'definition':  definition,
				'character': character
			}
		}
	}	

  }

  return AdventureCrafter;
})();

export default AdventureCrafter;    