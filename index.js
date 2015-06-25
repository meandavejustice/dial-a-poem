var ja = require('justaudio');
var path = require('path');

var poems = [
  {
    "title": "Vajra Mantra",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_01_ginsberg.mp3",
    "poet": "Allen Ginsberg "
  },
  {
    "title": "Revolutionary Letters Nos. 7, 13, 16, 49",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_02_di_prima.mp3",
    "poet": "Diana De Prima "
  },
  {
    "title": "excerpts from The Wild Boys",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_03_burroughs.mp3",
    "poet": "William Burroughs "
  },
  {
    "title": "Pressure, Holy City",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_04_waldman.mp3",
    "poet": "Anne Waldman "
  },
  {
    "title": "Vajra Kisses",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_05_giorno.mp3",
    "poet": "John Giorno "
  },
  {
    "title": "Duet ",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_06_williams.mp3",
    "poet": "Emmett Williams "
  },
  {
    "title": "Cemetery Hill",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_07_sanders.mp3",
    "poet": "Ed Sanders "
  },
  {
    "title": "Motorcycles",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_08_mead.mp3",
    "poet": "Taylor Mead "
  },
  {
    "title": "Green Automobile 1953",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_09_ginsberg.mp3",
    "poet": "Allen Ginsberg "
  },
  {
    "title": "The Messenger for Allen Ginsberg, I Know a Man",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_10_creeley.mp3",
    "poet": "Robert Creeley "
  },
  {
    "title": "Poems",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_11_schiff.mp3",
    "poet": "Harris Schiff"
  },
  {
    "title": "Kali",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_12_kandel.mp3",
    "poet": "Lenore Kandel "
  },
  {
    "title": "Not a Cricket",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_13_saroyan.mp3",
    "poet": "Aram Saroyan "
  },
  {
    "title": "from Scenes of Life at the Capital",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_14_whalen.mp3",
    "poet": "Philip Whalen "
  },
  {
    "title": "from The Sonnets",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_15_berrigan.mp3",
    "poet": "Ted Berrigan "
  },
  {
    "title": "Ode to Joy, To Hell With It",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_16_ohara.mp3",
    "poet": "Frank O'Hara "
  },
  {
    "title": "from I Remember ",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_17_brainard.mp3",
    "poet": "Joe Brainard "
  },
  {
    "title": "Small Inventions: Suite V (plurals) secanate, Suite IV",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_18_coolidge.mp3",
    "poet": "Clark Coolidge "
  },
  {
    "title": "from The Basketball Diaries",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_19_carroll.mp3",
    "poet": "Jim Carroll "
  },
  {
    "title": "Mushroom Haiku, excerpt from Silence",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_20_cage.mp3",
    "poet": "John Cage "
  },
  {
    "title": "These Stories About After the Revolution",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_21_mayer.mp3",
    "poet": "Bernadette Mayer "
  },
  {
    "title": " Geography",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_22_brownstein.mp3",
    "poet": "Michael Brownstein "
  },
  {
    "title": "I Am That I Am",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_23_gysin.mp3",
    "poet": "Brion Gysin "
  },
  {
    "title": "The Destruction of America",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_24_sinclair.mp3",
    "poet": "John Sinclair "
  },
  {
    "title": "How the Sestina (Yawn) Works",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_25_waldman.mp3",
    "poet": "Anne Waldman "
  },
  {
    "title": "I Will Not Pay Taxes Until",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_26_williams.mp3",
    "poet": "Heathcote Williams "
  },
  {
    "title": "The Louisiana Weekly No. 1, Ruckus Poem Part 1",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_27_henderson.mp3",
    "poet": " David Henderson "
  },
  {
    "title": "excerpt from Fillmore East speech",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_28_seale.mp3",
    "poet": " Bobby Seale "
  },
  {
    "title": "excerpt from Fillmore East speech",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_29_cleaver.mp3",
    "poet": "Kathleen Cleaver "
  },
  {
    "title": "Blake Song: Merrily We Welcome in the Year",
    "url": "http:\/\/ubumexico.centro.org.mx\/sound\/dial_a_poem_poets\/dial\/The-Dial-A-Poem-Poets_30_ginsberg.mp3",
    "poet": "Allen Ginsberg "
  }
]

function getRandomIndex() {
  return Math.floor(Math.random() * poems.length);
}

function playPoem(poem, cb) {
  if (!cb) cb = process.exit;
  console.log("Poet: ", poem.poet);
  console.log("Title: ", poem.title);
  ja.playUrl(poem.url, false, cb);
}

function makeCall(poem, cb) {
  if (!cb) cb = process.exit;
  ja.playFile(path.resolve(__dirname + '/dial.mp3'), function() {
    playPoem(poem, cb);
  });
}

function playContinuous(index) {
  if (index > poems.length-1) process.exit();
  playPoem(poems[index], function() {
    playContinuous(++index);
  })
}

function playContinuousInit(silent) {
  if (!silent) {
    makeCall(poems[0], function() {
      playContinuous(1);
    })
  } else playContinuous(0);
}

module.exports = {
  play: function(silent) {
    if (!silent) makeCall(poems[getRandomIndex()]);
    else playPoem(poems[getRandomIndex()])
  },
  playContinuous: playContinuousInit
}
