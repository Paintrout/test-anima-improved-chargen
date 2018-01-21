/*global define: false */
/**
 * Data for Primary and Secondary Abilities.
 * @module abilities
 */
define({
    Attack: {Characteristic: 'DEX'},
    Block: {Characteristic: 'DEX'},
    Dodge: {Characteristic: 'AGI'},
    'Wear Armor': {Characteristic: 'STR'},
    'Magic Projection': {Characteristic: 'DEX'},
    'Psychic Projection': {Characteristic: 'DEX'},
    Summon: {Characteristic: 'POW', Summoning: true},
    Control: {Characteristic: 'WP', Summoning: true},
    Bind: {Characteristic: 'POW', Summoning: true},
    Banish: {Characteristic: 'POW', Summoning: true},
    Acrobatics: {Field: 'Athletics', Characteristic: 'AGI'},
    Athleticism: {Field: 'Athletics', Characteristic: 'AGI'},
    Climb: {Field: 'Athletics', Characteristic: 'AGI'},
    Jump: {Field: 'Athletics', Characteristic: 'STR'},
    Ride: {Field: 'Athletics', Characteristic: 'AGI'},
    Swim: {Field: 'Athletics', Characteristic: 'AGI'},
    Alchemy: {Field: 'Creative', Characteristic: 'INT'},
    Animism: {Field: 'Creative', Characteristic: 'POW'},
    Art: {Field: 'Creative', Characteristic: 'POW', specializations: ['painting', 'sculpture']},
    Dance: {Field: 'Creative', Characteristic: 'AGI', knowledge: true, specializations: ['ballroom dancing']},
    Forging: {Field: 'Creative', Characteristic: 'DEX', knowledge: true, specializations: ['firearms', 'Ghestal wood', 'heavy armor', 'kitchen utensils', 'swords']},
    Jewelry: {Field: 'Creative', Characteristic: 'DEX', specializations: ['carving wood', 'shaping glass']},
    Music: {Field: 'Creative', Characteristic: 'POW', knowledge: true, specializations: ['drums', 'fiddle', 'singing']},
    'Ritual Calligraphy': {Field: 'Creative', Characteristic: 'DEX'},
    Runes: {Field: 'Creative', Characteristic: 'DEX'},
    'Sleight of Hand': {Field: 'Creative', Characteristic: 'DEX', specializations: ['juggling', 'prestidigitation', 'reloading']},
    Tailoring: {Field: 'Creative', Characteristic: 'DEX'},
    Notice: {Field: 'Perceptive', Characteristic: 'PER', passive: true},
    Search: {Field: 'Perceptive', Characteristic: 'PER'},
    Track: {Field: 'Perceptive', Characteristic: 'PER'},
    Etiquette: {Field: 'Social', Characteristic: 'INT'},
    Intimidate: {Field: 'Social', Characteristic: 'WP'},
    Leadership: {Field: 'Social', Characteristic: 'POW', passive: true},
    Persuasion: {Field: 'Social', Characteristic: 'INT', specializations: ['deception', 'debate', 'seduction']},
    Streetwise: {Field: 'Social', Characteristic: 'INT'},
    Style: {Field: 'Social', Characteristic: 'POW', passive: true},
    Trading: {Field: 'Social', Characteristic: 'INT', specializations: ['armor', 'artifacts', 'clothing', 'firearms', 'gems', 'jewelry', 'livestock', 'paintings', 'perfume', 'poison', 'sculpture', 'swords', 'wine']},
    Disguise: {Field: 'Subterfuge', Characteristic: 'DEX'},
    Hide: {Field: 'Subterfuge', Characteristic: 'PER'},
    'Lock Picking': {Field: 'Subterfuge', Characteristic: 'DEX'},
    Poisons: {Field: 'Subterfuge', Characteristic: 'INT', kowledge: true},
    Theft: {Field: 'Subterfuge', Characteristic: 'DEX'},
    Stealth: {Field: 'Subterfuge', Characteristic: 'AGI'},
    'Trap Lore': {Field: 'Subterfuge', Characteristic: 'DEX'},
    Animals: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true, specializations: ['bears', 'cats', 'dogs', 'horses', 'lions', 'tigers', 'wolves']},
    Appraisal: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true},
    'Herbal Lore': {Field: 'Intellectual', Characteristic: 'INT', knowledge: true},
    History: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true, specializations: ['Christian', 'local']},
    Law: {Field: 'Intellectual', Characteristic: 'INT'},
    Memorize: {Field: 'Intellectual', Characteristic: 'INT'},
    'Magic Appraisal': {Field: 'Intellectual', Characteristic: 'POW', knowledge: true, passive: true},
    Medicine: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true, specializations: ['first aid', 'surgery']},
    Navigation: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true},
    Occult: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true, specializations: ['artifacts', 'Ki', 'local myths', 'magic', 'psychic abilities', 'religion', 'supernatural creatures']},
    Science: {Field: 'Intellectual', Characteristic: 'INT', knowledge: true},
    Tactics: {Field: 'Intellectual', Characteristic: 'INT'},
    Composure: {Field: 'Vigor', Characteristic: 'WP', passive: true},
    'Feats of Strength': {Field: 'Vigor', Characteristic: 'STR'},
    'Withstand Pain': {Field: 'Vigor', Characteristic: 'WP'}
});
