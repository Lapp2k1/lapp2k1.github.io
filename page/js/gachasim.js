/************************************************************************
 * PHẦN CẤU HÌNH NHÂN VẬT — BẠN CHỈ SỬA ĐOẠN NÀY
 ************************************************************************/
const characters = [
  {
    name: "amelia",
    rarity: "ssr",
    position: "back",
    personality: "composed",
    role: "support",
    race: "elves",
    image: "../../asset/trickcal/char/amelia.webp",
  },
  {
    name: "asia",
    rarity: "ssr",
    position: "back",
    personality: "composed",
    role: "dps",
    race: "elves",
    image: "../../asset/trickcal/char/asia.webp",
  },
  {
    name: "aya",
    rarity: "ssr",
    position: "middle",
    personality: "composed",
    role: "dps",
    race: "witches",
    image: "../../asset/trickcal/char/aya.webp",
  },
  {
    name: "barong",
    rarity: "ssr",
    position: "front",
    personality: "composed",
    role: "dps",
    race: "phantoms",
    image: "../../asset/trickcal/char/barong.webp",
  },
  {
    name: "benny",
    rarity: "ssr",
    position: "back",
    personality: "composed",
    role: "dps",
    race: "werebeasts",
    image: "../../asset/trickcal/char/benny.webp",
  },
  {
    name: "caesar",
    rarity: "ssr",
    position: "middle",
    personality: "composed",
    role: "support",
    race: "elementals",
    image: "../../asset/trickcal/char/caesar.webp",
  },
  {
    name: "canta",
    rarity: "sr",
    position: "middle",
    personality: "composed",
    role: "dps",
    race: "sprites",
    image: "../../asset/trickcal/char/canta.webp",
  },
  {
    name: "Diana (Heyday)",
    rarity: "ssr",
    position: "front",
    personality: "composed",
    role: "dps",
    race: "werebeasts",
    image: "../../asset/trickcal/char/diana-heyday.webp",
  },
  {
    name: "ed",
    rarity: "ssr",
    position: "front",
    personality: "composed",
    role: "tank",
    race: "elves",
    image: "../../asset/trickcal/char/ed.webp",
  },
  {
    name: "elena",
    rarity: "ssr",
    position: "middle",
    personality: "composed",
    role: "dps",
    race: "elves",
    image: "../../asset/trickcal/char/elena.webp",
  },
  {
    name: "espi",
    rarity: "sr",
    position: "middle",
    personality: "composed",
    role: "support",
    race: "phantoms",
    image: "../../asset/trickcal/char/espi.webp",
  },
  {
    name: "fricle",
    rarity: "ssr",
    position: "middle",
    personality: "composed",
    role: "dps",
    race: "witches",
    image: "../../asset/trickcal/char/fricle.webp",
  },
  {
    name: "gwynn",
    rarity: "ssr",
    position: "front",
    personality: "composed",
    role: "support",
    race: "werebeasts",
    image: "../../asset/trickcal/char/gwynn.webp",
  },
  {
    name: "jade",
    rarity: "ssr",
    position: "middle",
    personality: "composed",
    role: "dps",
    race: "dragons",
    image: "../../asset/trickcal/char/jade.webp",
  },
  {
    name: "Kommy (Swimsuit)",
    rarity: "ssr",
    position: "middle",
    personality: "composed",
    role: "support",
    race: "werebeasts",
    image: "../../asset/trickcal/char/kommy-swimsuit.webp",
  },
  {
    name: "layze",
    rarity: "sr",
    position: "back",
    personality: "composed",
    role: "dps",
    race: "elves",
    image: "../../asset/trickcal/char/layze.webp",
  },
  {
    name: "lethe",
    rarity: "sr",
    position: "front",
    personality: "composed",
    role: "dps",
    race: "phantoms",
    image: "../../asset/trickcal/char/lethe.webp",
  },
  {
    name: "meluna",
    rarity: "sr",
    position: "back",
    personality: "composed",
    role: "support",
    race: "elementals",
    image: "../../asset/trickcal/char/meluna.webp",
  },
  {
    name: "patula",
    rarity: "r",
    position: "front",
    personality: "composed",
    role: "dps",
    race: "sprites",
    image: "../../asset/trickcal/char/patula.webp",
  },
  {
    name: "picora",
    rarity: "ssr",
    position: "back",
    personality: "composed",
    role: "support",
    race: "witches",
    image: "../../asset/trickcal/char/picora.webp",
  },
  {
    name: "ricotta",
    rarity: "ssr",
    position: "front",
    personality: "composed",
    role: "tank",
    race: "sprites",
    image: "../../asset/trickcal/char/ricotta.webp",
  },
  {
    name: "sylla",
    rarity: "ssr",
    position: "back",
    personality: "composed",
    role: "dps",
    race: "elementals",
    image: "../../asset/trickcal/char/sylla.webp",
  },
  {
    name: "velvet",
    rarity: "ssr",
    position: "front",
    personality: "composed",
    role: "tank",
    race: "witches",
    image: "../../asset/trickcal/char/velvet.webp",
  },
  {
    name: "asana",
    rarity: "ssr",
    position: "front",
    personality: "depressed",
    role: "tank",
    race: "witches",
    image: "../../asset/trickcal/char/asana.webp",
  },
  {
    name: "ashur",
    rarity: "ssr",
    position: "back",
    personality: "depressed",
    role: "dps",
    race: "sprites",
    image: "../../asset/trickcal/char/ashur.webp",
  },
  {
    name: "barie",
    rarity: "ssr",
    position: "back",
    personality: "depressed",
    role: "support",
    race: "witches",
    image: "../../asset/trickcal/char/barie.webp",
  },
  {
    name: "blanchet",
    rarity: "ssr",
    position: "middle",
    personality: "depressed",
    role: "dps",
    race: "elementals",
    image: "../../asset/trickcal/char/blanchet.webp",
  },
  {
    name: "chopi",
    rarity: "sr",
    position: "middle",
    personality: "depressed",
    role: "dps",
    race: "werebeasts",
    image: "../../asset/trickcal/char/chopi.webp",
  },
  {
    name: "festa",
    rarity: "sr",
    position: "front",
    personality: "depressed",
    role: "support",
    race: "elves",
    image: "../../asset/trickcal/char/festa.webp",
  },
  {
    name: "hilde",
    rarity: "ssr",
    position: "middle",
    personality: "depressed",
    role: "support",
    race: "elves",
    image: "../../asset/trickcal/char/hilde.webp",
  },
  {
    name: "joan",
    rarity: "ssr",
    position: "all-rows",
    personality: "depressed",
    role: "support",
    race: "sprites",
    image: "../../asset/trickcal/char/joan.webp",
  },
  {
    name: "kidian",
    rarity: "ssr",
    position: "front",
    personality: "depressed",
    role: "dps",
    race: "dragons",
    image: "../../asset/trickcal/char/kidian.webp",
  },
  {
    name: "kommy",
    rarity: "ssr",
    position: "front",
    personality: "depressed",
    role: "tank",
    race: "werebeasts",
    image: "../../asset/trickcal/char/kommy.webp",
  },
  {
    name: "leone",
    rarity: "ssr",
    position: "front",
    personality: "depressed",
    role: "tank",
    race: "werebeasts",
    image: "../../asset/trickcal/char/leone.webp",
  },
  {
    name: "levi",
    rarity: "ssr",
    position: "middle",
    personality: "depressed",
    role: "dps",
    race: "witches",
    image: "../../asset/trickcal/char/levi.webp",
  },
  {
    name: "orr",
    rarity: "ssr",
    position: "back",
    personality: "depressed",
    role: "support",
    race: "elves",
    image: "../../asset/trickcal/char/orr.webp",
  },
  {
    name: "posher",
    rarity: "ssr",
    position: "back",
    personality: "depressed",
    role: "support",
    race: "witches",
    image: "../../asset/trickcal/char/posher.webp",
  },
  {
    name: "rim",
    rarity: "ssr",
    position: "front",
    personality: "depressed",
    role: "dps",
    race: "phantoms",
    image: "../../asset/trickcal/char/rim.webp",
  },
  {
    name: "risty",
    rarity: "ssr",
    position: "back",
    personality: "depressed",
    role: "dps",
    race: "elves",
    image: "../../asset/trickcal/char/risty.webp",
  },
  {
    name: "Rohne (Mayor)",
    rarity: "ssr",
    position: "middle",
    personality: "depressed",
    role: "dps",
    race: "elves",
    image: "../../asset/trickcal/char/rohne-mayor.webp",
  },
  {
    name: "shasha",
    rarity: "ssr",
    position: "middle",
    personality: "depressed",
    role: "dps",
    race: "sprites",
    image: "../../asset/trickcal/char/shasha.webp",
  },
  {
    name: "snorky",
    rarity: "ssr",
    position: "front",
    personality: "depressed",
    role: "tank",
    race: "witches",
    image: "../../asset/trickcal/char/snorky.webp",
  },
  {
    name: "veroo",
    rarity: "r",
    position: "middle",
    personality: "depressed",
    role: "dps",
    race: "phantoms",
    image: "../../asset/trickcal/char/veroo.webp",
  },
  {
    name: "xXionx",
    rarity: "ssr",
    position: "back",
    personality: "depressed",
    role: "dps",
    race: "phantoms",
    image: "../../asset/trickcal/char/xion.webp",
  },
  {
    name: "yomi",
    rarity: "ssr",
    position: "middle",
    personality: "depressed",
    role: "support",
    race: "mystic",
    image: "../../asset/trickcal/char/yomi.webp",
  },
  {
    name: "allet",
    rarity: "sr",
    position: "front",
    personality: "innocence",
    role: "tank",
    race: "elves",
    image: "../../asset/trickcal/char/allet.webp",
  },
  {
    name: "bigwood",
    rarity: "sr",
    position: "front",
    personality: "innocence",
    role: "tank",
    race: "elementals",
    image: "../../asset/trickcal/char/bigwood.webp",
  },
  {
    name: "daya",
    rarity: "ssr",
    position: "back",
    personality: "innocence",
    role: "dps",
    race: "dragons",
    image: "../../asset/trickcal/char/daya.webp",
  },
  {
    name: "erpin",
    rarity: "ssr",
    position: "back",
    personality: "innocence",
    role: "dps",
    race: "sprites",
    image: "../../asset/trickcal/char/erpin.webp",
  },
  {
    name: "gabia",
    rarity: "ssr",
    position: "middle",
    personality: "innocence",
    role: "support",
    race: "elementals",
    image: "../../asset/trickcal/char/gabia.webp",
  },
  {
    name: "haley",
    rarity: "ssr",
    position: "middle",
    personality: "innocence",
    role: "dps",
    race: "elves",
    image: "../../asset/trickcal/char/haley.webp",
  },
  {
    name: "kathy",
    rarity: "ssr",
    position: "back",
    personality: "innocence",
    role: "dps",
    race: "elves",
    image: "../../asset/trickcal/char/kathy.webp",
  },
  {
    name: "kyarot",
    rarity: "ssr",
    position: "back",
    personality: "innocence",
    role: "support",
    race: "sprites",
    image: "../../asset/trickcal/char/kyarot.webp",
  },
  {
    name: "kyuri",
    rarity: "r",
    position: "middle",
    personality: "innocence",
    role: "support",
    race: "sprites",
    image: "../../asset/trickcal/char/kyuri.webp",
  },
  {
    name: "mago",
    rarity: "ssr",
    position: "middle",
    personality: "innocence",
    role: "support",
    race: "werebeasts",
    image: "../../asset/trickcal/char/mago.webp",
  },
  {
    name: "Mayo (Cool)",
    rarity: "ssr",
    position: "middle",
    personality: "innocence",
    role: "dps",
    race: "sprites",
    image: "../../asset/trickcal/char/mayo-cool.webp",
  },
  {
    name: "mute",
    rarity: "ssr",
    position: "back",
    personality: "innocence",
    role: "support",
    race: "elementals",
    image: "../../asset/trickcal/char/mute.webp",
  },
  {
    name: "naia",
    rarity: "ssr",
    position: "middle",
    personality: "innocence",
    role: "support",
    race: "elementals",
    image: "../../asset/trickcal/char/naia.webp",
  },
  {
    name: "opal",
    rarity: "ssr",
    position: "middle",
    personality: "innocence",
    role: "support",
    race: "dragons",
    image: "../../asset/trickcal/char/opal.webp",
  },
  {
    name: "raika",
    rarity: "ssr",
    position: "front",
    personality: "innocence",
    role: "dps",
    race: "elementals",
    image: "../../asset/trickcal/char/laika.webp",
  },
  {
    name: "ran",
    rarity: "ssr",
    position: "back",
    personality: "innocence",
    role: "dps",
    race: "werebeasts",
    image: "../../asset/trickcal/char/ran.webp",
  },
  {
    name: "rohne",
    rarity: "sr",
    position: "front",
    personality: "innocence",
    role: "tank",
    race: "elves",
    image: "../../asset/trickcal/char/rohne.webp",
  },
  {
    name: "sari",
    rarity: "sr",
    position: "middle",
    personality: "innocence",
    role: "dps",
    race: "phantoms",
    image: "../../asset/trickcal/char/sari.webp",
  },
  {
    name: "sherum",
    rarity: "ssr",
    position: "front",
    personality: "innocence",
    role: "tank",
    race: "witches",
    image: "../../asset/trickcal/char/sherum.webp",
  },
  {
    name: "silphir",
    rarity: "ssr",
    position: "middle",
    personality: "innocence",
    role: "dps",
    race: "dragons",
    image: "../../asset/trickcal/char/silphir.webp",
  },
  {
    name: "speaki",
    rarity: "ssr",
    position: "back",
    personality: "innocence",
    role: "support",
    race: "phantoms",
    image: "../../asset/trickcal/char/speaki.webp",
  },
  {
    name: "vivi",
    rarity: "ssr",
    position: "front",
    personality: "innocence",
    role: "tank",
    race: "dragons",
    image: "../../asset/trickcal/char/vivi.webp",
  },
  {
    name: "alice",
    rarity: "ssr",
    position: "middle",
    personality: "madness",
    role: "dps",
    race: "phantoms",
    image: "../../asset/trickcal/char/alice.webp",
  },
  {
    name: "annette",
    rarity: "ssr",
    position: "middle",
    personality: "madness",
    role: "support",
    race: "dragons",
    image: "../../asset/trickcal/char/annette.webp",
  },
  {
    name: "belita",
    rarity: "ssr",
    position: "back",
    personality: "madness",
    role: "dps",
    race: "witches",
    image: "../../asset/trickcal/char/belita.webp",
  },
  {
    name: "chloe",
    rarity: "ssr",
    position: "front",
    personality: "madness",
    role: "tank",
    race: "sprites",
    image: "../../asset/trickcal/char/chloe.webp",
  },
  {
    name: "diana",
    rarity: "ssr",
    position: "middle",
    personality: "madness",
    role: "support",
    race: "werebeasts",
    image: "../../asset/trickcal/char/diana.webp",
  },
  {
    name: "heidi",
    rarity: "ssr",
    position: "back",
    personality: "madness",
    role: "dps",
    race: "elves",
    image: "../../asset/trickcal/char/heidi.webp",
  },
  {
    name: "ifrit",
    rarity: "ssr",
    position: "front",
    personality: "madness",
    role: "dps",
    race: "elementals",
    image: "../../asset/trickcal/char/ifrit.webp",
  },
  {
    name: "leets",
    rarity: "ssr",
    position: "front",
    personality: "madness",
    role: "dps",
    race: "dragons",
    image: "../../asset/trickcal/char/leets.webp",
  },
  {
    name: "maestromk2",
    rarity: "sr",
    position: "front",
    personality: "madness",
    role: "tank",
    race: "elves",
    image: "../../asset/trickcal/char/maestro.webp",
  },
  {
    name: "maison",
    rarity: "r",
    position: "back",
    personality: "madness",
    role: "dps",
    race: "phantoms",
    image: "../../asset/trickcal/char/maison.webp",
  },
  {
    name: "mayo",
    rarity: "ssr",
    position: "back",
    personality: "madness",
    role: "dps",
    race: "sprites",
    image: "../../asset/trickcal/char/mayo.webp",
  },
  {
    name: "ner",
    rarity: "ssr",
    position: "front",
    personality: "madness",
    role: "support",
    race: "sprites",
    image: "../../asset/trickcal/char/ner.webp",
  },
  {
    name: "neti",
    rarity: "ssr",
    position: "front",
    personality: "madness",
    role: "tank",
    race: "dragons",
    image: "../../asset/trickcal/char/neti.webp",
  },
  {
    name: "pira",
    rarity: "ssr",
    position: "back",
    personality: "madness",
    role: "support",
    race: "dragons",
    image: "../../asset/trickcal/char/pira.webp",
  },
  {
    name: "polan",
    rarity: "ssr",
    position: "back",
    personality: "madness",
    role: "support",
    race: "sprites",
    image: "../../asset/trickcal/char/polan.webp",
  },
  {
    name: "renewa",
    rarity: "ssr",
    position: "middle",
    personality: "madness",
    role: "dps",
    race: "elves",
    image: "../../asset/trickcal/char/renewa.webp",
  },
  {
    name: "Rim (Chaos)",
    rarity: "ssr",
    position: "back",
    personality: "madness",
    role: "dps",
    race: "phantoms",
    image: "../../asset/trickcal/char/rim-chaos.webp",
  },
  {
    name: "rollet",
    rarity: "ssr",
    position: "back",
    personality: "madness",
    role: "dps",
    race: "witches",
    image: "../../asset/trickcal/char/rollet.webp",
  },
  {
    name: "shaydi",
    rarity: "ssr",
    position: "front",
    personality: "madness",
    role: "dps",
    race: "phantoms",
    image: "../../asset/trickcal/char/shady.webp",
  },
  {
    name: "sist",
    rarity: "ssr",
    position: "middle",
    personality: "madness",
    role: "dps",
    race: "dragons",
    image: "../../asset/trickcal/char/sist.webp",
  },
  {
    name: "Tig (Hero)",
    rarity: "ssr",
    position: "all-rows",
    personality: "madness",
    role: "dps",
    race: "werebeasts",
    image: "../../asset/trickcal/char/tig-hero.webp",
  },
  {
    name: "yumimi",
    rarity: "r",
    position: "back",
    personality: "madness",
    role: "dps",
    race: "werebeasts",
    image: "../../asset/trickcal/char/yumimi.webp",
  },
  {
    name: "arco",
    rarity: "ssr",
    position: "middle",
    personality: "vivacious",
    role: "dps",
    race: "elementals",
    image: "../../asset/trickcal/char/arco.webp",
  },
  {
    name: "bana",
    rarity: "sr",
    position: "back",
    personality: "vivacious",
    role: "support",
    race: "werebeasts",
    image: "../../asset/trickcal/char/bana.webp",
  },
  {
    name: "beni",
    rarity: "ssr",
    position: "front",
    personality: "vivacious",
    role: "dps",
    race: "werebeasts",
    image: "../../asset/trickcal/char/beni.webp",
  },
  {
    name: "butter",
    rarity: "ssr",
    position: "back",
    personality: "vivacious",
    role: "dps",
    race: "werebeasts",
    image: "../../asset/trickcal/char/butter.webp",
  },
  {
    name: "canna",
    rarity: "ssr",
    position: "back",
    personality: "vivacious",
    role: "dps",
    race: "elves",
    image: "../../asset/trickcal/char/canna.webp",
  },
  {
    name: "carren",
    rarity: "r",
    position: "back",
    personality: "vivacious",
    role: "support",
    race: "sprites",
    image: "../../asset/trickcal/char/carren.webp",
  },
  {
    name: "epica",
    rarity: "ssr",
    position: "middle",
    personality: "vivacious",
    role: "dps",
    race: "werebeasts",
    image: "../../asset/trickcal/char/epica.webp",
  },
  {
    name: "jubee",
    rarity: "sr",
    position: "middle",
    personality: "vivacious",
    role: "dps",
    race: "elementals",
    image: "../../asset/trickcal/char/jubee.webp",
  },
  {
    name: "makasha",
    rarity: "ssr",
    position: "middle",
    personality: "vivacious",
    role: "support",
    race: "witches",
    image: "../../asset/trickcal/char/makasha.webp",
  },
  {
    name: "marie",
    rarity: "sr",
    position: "middle",
    personality: "vivacious",
    role: "dps",
    race: "sprites",
    image: "../../asset/trickcal/char/marie.webp",
  },
  {
    name: "miro",
    rarity: "ssr",
    position: "front",
    personality: "vivacious",
    role: "tank",
    race: "elementals",
    image: "../../asset/trickcal/char/miro.webp",
  },
  {
    name: "momo",
    rarity: "ssr",
    position: "back",
    personality: "vivacious",
    role: "dps",
    race: "werebeasts",
    image: "../../asset/trickcal/char/momo.webp",
  },
  {
    name: "mynx",
    rarity: "r",
    position: "front",
    personality: "vivacious",
    role: "dps",
    race: "werebeasts",
    image: "../../asset/trickcal/char/mynx.webp",
  },
  {
    name: "rudd",
    rarity: "ssr",
    position: "front",
    personality: "vivacious",
    role: "tank",
    race: "dragons",
    image: "../../asset/trickcal/char/rude.webp",
  },
  {
    name: "rufo",
    rarity: "ssr",
    position: "middle",
    personality: "vivacious",
    role: "dps",
    race: "werebeasts",
    image: "../../asset/trickcal/char/rufo.webp",
  },
  {
    name: "selline",
    rarity: "ssr",
    position: "front",
    personality: "vivacious",
    role: "tank",
    race: "phantoms",
    image: "../../asset/trickcal/char/selinne.webp",
  },
  {
    name: "shoupan",
    rarity: "ssr",
    position: "back",
    personality: "vivacious",
    role: "support",
    race: "sprites",
    image: "../../asset/trickcal/char/shoupan.webp",
  },
  {
    name: "shuro",
    rarity: "ssr",
    position: "front",
    personality: "vivacious",
    role: "support",
    race: "werebeasts",
    image: "../../asset/trickcal/char/suro.webp",
  },
  {
    name: "Speaki (Maid)",
    rarity: "ssr",
    position: "back",
    personality: "vivacious",
    role: "dps",
    race: "phantoms",
    image: "../../asset/trickcal/char/speaki-maid.webp",
  },
  {
    name: "taida",
    rarity: "sr",
    position: "back",
    personality: "vivacious",
    role: "dps",
    race: "elves",
    image: "../../asset/trickcal/char/taida.webp",
  },
  {
    name: "tig",
    rarity: "ssr",
    position: "front",
    personality: "vivacious",
    role: "dps",
    race: "werebeasts",
    image: "../../asset/trickcal/char/tig.webp",
  },
  {
    name: "ui",
    rarity: "ssr",
    position: "middle",
    personality: "vivacious",
    role: "support",
    race: "elementals",
    image: "../../asset/trickcal/char/ui.webp",
  },
  {
    name: "vela",
    rarity: "ssr",
    position: "front",
    personality: "vivacious",
    role: "tank",
    race: "phantoms",
    image: "../../asset/trickcal/char/vela.webp",
  },
  {
    name: "uros",
    rarity: "ssr",
    position: "back",
    personality: "resonance",
    role: "support",
    race: "werebeasts",
    image: "../../asset/trickcal/char/uros.webp",
  },
];

/************************************************************************
 * CODE LOGIC (thay thế toàn bộ gachasim.js, giữ nguyên mảng characters)
 ************************************************************************/

const resultsEl = document.getElementById("results");
const configPreviewEl = document.getElementById("configPreview");
const roll1Btn = document.getElementById("roll1");
const roll10Btn = document.getElementById("roll10");

// Tỉ lệ rarity (dưới dạng phần trăm tổng)
const RARITY_RATE = {
  1: 0.76, // R  -> 76%
  2: 0.21, // SR -> 21%
  3: 0.03, // SSR-> 3%
};

// Hiển thị preview config
function refreshConfigPreview() {
  // show clean JSON (không bọc circular)
  try {
    configPreviewEl.textContent = JSON.stringify(characters, null, 2);
  } catch (e) {
    configPreviewEl.textContent = "// cannot stringify characters";
    console.error("refreshConfigPreview:", e);
  }
}
refreshConfigPreview();
// Populate SSR list into rateup select
const rateupSelect = document.getElementById("rateupSelect");
function refreshRateupSelect(characters) {
  const sel = document.getElementById("rateupSelect");
  if (!sel) return;

  // lọc SSR + sort A–Z
  const ssrs = characters
    .filter((c) => (c.rarity || "").toLowerCase() === "ssr")
    .sort((a, b) => a.name.localeCompare(b.name));

  sel.innerHTML = `
    <option value="">(Không chọn)</option>
    ${ssrs.map((c) => `<option value="${c.name}">${c.name}</option>`).join("")}
  `;
}

function fillSSRList() {
  const ssrList = characters.filter((c) => c.rarity === "ssr");
  ssrList.forEach((c) => {
    const op = document.createElement("option");
    op.value = c.name;
    op.textContent = c.name;
    rateupSelect.appendChild(op);
  });
  refreshRateupSelect(characters);
}

fillSSRList();
/**
 * Chuẩn hóa trường rarity cho từng character:
 * - chấp nhận c.rarity = "ssr"|"sr"|"r"  (string)
 * - hoặc c.star = 1|2|3 (number)
 * Sau bước này mỗi character có property .__star (1|2|3)
 */
function normalizeRarity(chars) {
  chars.forEach((c) => {
    let star = null;
    if (c.star && (c.star === 1 || c.star === 2 || c.star === 3)) {
      star = c.star;
    } else if (c.rarity && typeof c.rarity === "string") {
      const r = c.rarity.toLowerCase().trim();
      if (r === "ssr") star = 3;
      else if (r === "sr") star = 2;
      else if (r === "r") star = 1;
    } else if (c.rarity && typeof c.rarity === "number") {
      // defensive
      if (c.rarity === 1 || c.rarity === 2 || c.rarity === 3) star = c.rarity;
    }
    c.__star = star || 1; // default về 1 (R) nếu thiếu
  });
}

/**
 * Build weighted list: set c.weight for each character based on rarity groups.
 * - Các nhân vật cùng __star sẽ chia đều tỷ lệ RARITY_RATE[star].
 * - Trả về mảng các đối tượng (chính phần tử trong characters) chứa .weight
 */
function buildWeightedList(chars) {
  // tỷ lệ chuẩn theo rarity (fractions)
  const RARITY_TOTAL = { r: 0.76, sr: 0.21, ssr: 0.03 };
  const RATEUP_VALUE = 0.008; // 0.8% as fraction

  // normalize rarity field and group
  const groups = { r: [], sr: [], ssr: [] };
  chars.forEach((c) => {
    const r = (c.rarity || "").toString().toLowerCase().trim();
    if (r === "ssr") groups.ssr.push(c);
    else if (r === "sr") groups.sr.push(c);
    else groups.r.push(c); // default to r if missing/unknown
  });

  // copy rates object we will fill (fraction values)
  const temp = chars.map((c) => ({ ...c, rate: 0 }));

  // 1) assign base rates for R and SR (divide equally inside group)
  if (groups.r.length > 0) {
    const each = RARITY_TOTAL.r / groups.r.length;
    groups.r.forEach((c) => {
      const idx = temp.findIndex((x) => x.name === c.name);
      if (idx >= 0) temp[idx].rate = each;
    });
  }
  if (groups.sr.length > 0) {
    const each = RARITY_TOTAL.sr / groups.sr.length;
    groups.sr.forEach((c) => {
      const idx = temp.findIndex((x) => x.name === c.name);
      if (idx >= 0) temp[idx].rate = each;
    });
  }

  // 2) assign SSR rates, with optional rate-up
  const rateupName = document.getElementById("rateupSelect")?.value || "";
  const totalSSR = RARITY_TOTAL.ssr; // 0.03
  if (groups.ssr.length === 0) {
    // nothing to do
  } else {
    // find target if matches an SSR name
    const targetIdxInChars = temp.findIndex((x) => x.name === rateupName);
    const hasValidTarget =
      targetIdxInChars >= 0 && groups.ssr.some((s) => s.name === rateupName);

    if (!hasValidTarget) {
      // no rateup chosen or invalid -> distribute equally
      const each = totalSSR / groups.ssr.length;
      groups.ssr.forEach((c) => {
        const idx = temp.findIndex((x) => x.name === c.name);
        if (idx >= 0) temp[idx].rate = each;
      });
    } else {
      // rateup chosen and valid
      const targetName = rateupName;
      // clamp requested RATEUP_VALUE to not exceed totalSSR
      const assignedToTarget = Math.min(RATEUP_VALUE, totalSSR);
      const remainder = Math.max(totalSSR - assignedToTarget, 0);
      const others = groups.ssr.filter((s) => s.name !== targetName);
      const shareForOthers = others.length > 0 ? remainder / others.length : 0;

      groups.ssr.forEach((c) => {
        const idx = temp.findIndex((x) => x.name === c.name);
        if (idx < 0) return;
        if (c.name === targetName) temp[idx].rate = assignedToTarget;
        else temp[idx].rate = shareForOthers;
      });
    }
  }

  // 3) Now temp contains per-character fractional rates summing to ~1 (maybe small float errors)
  // Ensure non-negative and then normalize to exact sum=1 (defensive)
  let total = temp.reduce((s, x) => s + Math.max(0, x.rate || 0), 0);
  if (total <= 0) {
    // fallback uniformly
    const n = temp.length || 1;
    temp.forEach((x) => (x.weight = 1 / n));
    return temp.map((x) => ({ ...x }));
  } else {
    temp.forEach((x) => (x.weight = Math.max(0, x.rate || 0) / total));
    // update original characters' rate/weight (so preview shows fractions before normalizing maybe)
    temp.forEach((t) => {
      const orig = chars.find((c) => c.name === t.name);
      if (orig) {
        orig.rate = t.rate;
        orig.weight = t.weight;
      }
    });
    // return shallow copy array for picking
    return temp.map((x) => ({ ...x }));
  }
}

/**
 * pickOne: chọn theo weight (giả sử tổng weight = 1, nhưng defensive nếu không)
 */
function pickOne(weighted) {
  const total = weighted.reduce((s, c) => s + (c.weight || 0), 0);
  if (total <= 0) {
    // fallback: random uniform
    const idx = Math.floor(Math.random() * weighted.length);
    return weighted[idx];
  }
  let r = Math.random() * total;
  let acc = 0;
  for (const c of weighted) {
    acc += c.weight || 0;
    if (r <= acc) return c;
  }
  return weighted[weighted.length - 1];
}

/**
 * UI card creation
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function makeCard(item) {
  const div = document.createElement("div");
  div.className = "card";

  // Background theo personality
  const bg = document.createElement("div");
  bg.className = "bg " + (item.personality || "");
  div.appendChild(bg);

  // Ảnh nhân vật
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;
  img.onerror = () => {
    img.style.opacity = 0.35;
    img.title = "image not found";
  };

  // Tên
  const nm = document.createElement("div");
  nm.className = "name";

  if (item.name === "xXionx") nm.textContent = "xXionx";
  else nm.textContent = capitalize(item.name);

  // Rate hiển thị rút gọn
  const rate = document.createElement("div");
  rate.className = "rate";

  const raw = item.weight || 0;
  let v = raw * 100;
  let displayed;

  if (v === 0) {
    displayed = "0";
  } else {
    displayed = v.toString();
    const m = displayed.match(/^(\d+)\.(0*)(\d+)/);
    if (m) displayed = m[1] + "." + m[2] + m[3][0];
  }

  rate.textContent = displayed + "%";

  // --- KHỐI ICON ---
  const rarityWrap = document.createElement("div");
  rarityWrap.className = "icons rarity-icons";

  const infoWrap = document.createElement("div");
  infoWrap.className = "icons info-icons";

  // 1) RARITY → nhiều ngôi sao
  if (item.rarity) {
    const rarityMap = {
      ssr: {
        count: 3,
        src: "../../asset/trickcal/icons/trickcal-ssr-star.png",
      },
      sr: { count: 2, src: "../../asset/trickcal/icons/trickcal-sr-star.png" },
      r: { count: 1, src: "../../asset/trickcal/icons/trickcal-sr-star.png" },
    };

    const r = rarityMap[item.rarity.toLowerCase()];
    if (r) {
      for (let i = 0; i < r.count; i++) {
        const star = document.createElement("img");
        star.className = "icon star small";
        star.src = r.src;

        if (i > 0) star.classList.add("overlap");

        rarityWrap.appendChild(star);
      }
    }
  }

  // 2) POSITION
  if (item.position) {
    const posImg = document.createElement("img");
    posImg.className = "icon small";
    posImg.src = `../../asset/trickcal/icons/trickcal-${item.position}.png`;
    infoWrap.appendChild(posImg);
  }

  // 3) PERSONALITY
  if (item.personality) {
    const perImg = document.createElement("img");
    perImg.className = "icon small";
    perImg.src = `../../asset/trickcal/icons/trickcal-${item.personality}.png`;
    infoWrap.appendChild(perImg);
  }

  // 4) ROLE
  if (item.role) {
    const roleImg = document.createElement("img");
    roleImg.className = "icon small";
    roleImg.src = `../../asset/trickcal/icons/trickcal-${item.role}.png`;
    infoWrap.appendChild(roleImg);
  }

  // 5) RACE
  if (item.race) {
    const raceImg = document.createElement("img");
    raceImg.className = "icon small";
    raceImg.src = `../../asset/trickcal/icons/trickcal-${item.race}.webp`;
    infoWrap.appendChild(raceImg);
  }

  div.appendChild(img);
  div.appendChild(rarityWrap); // hàng 1
  div.appendChild(infoWrap); // hàng 2
  div.appendChild(nm);
  div.appendChild(rate);

  return div;
}

/**
 * Thực hiện roll n lần
 */
function doRoll(n) {
  const weighted = buildWeightedList(characters);

  for (let i = 0; i < characters.length; i++) {
    characters[i].weight = weighted[i].weight;
  }
  refreshConfigPreview();

  const frag = document.createDocumentFragment();
  const results = [];

  for (let i = 0; i < n; i++) {
    const picked = pickOne(weighted);
    results.push(picked);
  }

  // BẢO KÊ: nếu roll 10 mà không có SR trở lên
  if (n === 10) {
    const hasGood = results.some(
      (c) => c.rarity === "sr" || c.rarity === "ssr"
    );

    if (!hasGood) {
      // Lọc danh sách SR+
      const srPlus = characters.filter(
        (c) => c.rarity === "sr" || c.rarity === "ssr"
      );

      // Random trong nhóm SR+
      const forced = srPlus[Math.floor(Math.random() * srPlus.length)];

      // Ép thay slot cuối
      results[9] = forced;
    }
  }

  // Render kết quả
  for (const picked of results) {
    const card = makeCard(picked);
    resultsEl.prepend(card);
  }

  while (resultsEl.childElementCount > 100) {
    resultsEl.removeChild(resultsEl.lastElementChild);
  }
}

/* Event bindings */
roll1Btn.addEventListener("click", () => doRoll(1));
roll10Btn.addEventListener("click", () => doRoll(10));

/* Debug helper: log summary counts per rarity */
function logSummary() {
  const counts = { 1: 0, 2: 0, 3: 0 };
  (characters || []).forEach((c) => {
    const star =
      c.__star ||
      c.star ||
      (typeof c.rarity === "string"
        ? c.rarity.toLowerCase() === "ssr"
          ? 3
          : c.rarity.toLowerCase() === "sr"
          ? 2
          : 1
        : 1);
    counts[star] = (counts[star] || 0) + 1;
  });
  console.log("Rarity counts:", counts);
}
logSummary();
