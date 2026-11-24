// Sci Art Club events, one a month (Dec 2026 through Oct 2027), Saturdays 10 to noon.
// She works 7am to 7pm every other weekend starting Nov 28 to 29, 2026, so events go on her
// OFF Saturdays (Dec 5, Dec 19, Jan 2, Jan 16, Jan 30, ...). tcplot meets 2nd to 4th Saturdays;
// on known tcplot dates (Jan 16, 2027 = Charts & Color) avoid overlap.
// Exception: August 2027 has two (Fungi Appreciation Aug 14 + BYOS Aug 28).

export interface ClubEvent {
  slug: string;
  title: string;
  when: string;
  place?: { name: string; address: string; url?: string };
  summary: string;
  body: string[];
  note?: string;
  image?: { src: string; alt: string; caption: string; link: string };
}

const TBA = { name: "Location to be announced", address: "Minneapolis / St. Paul" };
const FUS = { name: "First Unitarian Society", address: "900 Mount Curve Ave · Minneapolis, MN 55403", url: "https://www.firstunitarian.org/" };
const FRGMNT = { name: "FRGMNT Coffee, Mill District", address: "1011 Washington Ave S, Minneapolis, MN 55415" };

export const events: ClubEvent[] = [
  {
    slug: "da-vinci-notebook-pages",
    title: "Da Vinci Notebook Pages",
    when: "Saturday, Dec 5, 2026 · 10:00 AM to 12:00 PM CST",
    place: FRGMNT,
    summary: "Fill a notebook spread the way Leonardo did: drawings, cutaways, arrows, and questions in the margins.",
    body: [
      "Leonardo's notebooks hold everything at once: the flow of water, the muscles of the arm, machines that couldn't be built yet, shopping lists, and questions to himself, often written backward.",
      "Pick one thing you're curious about, like a bicycle, a heron's wing, or an eddy in the river, and fill a two-page spread with it: drawings from different angles, cutaways, measurements, and the questions you'd still like answered. Mirror writing optional.",
    ],
    image: {"src": "/images/leonardo-c1510-water-old-man.jpg", "alt": "A pen-and-ink notebook page with a seated old man on the left and studies of swirling water on the right, above lines of mirror writing", "caption": "Leonardo da Vinci, a seated old man and studies of water (c. 1510 to 1513), pen and ink. A thinker on one half of the page and eddies of water on the other, with notes in his backward mirror script underneath: the whole notebook habit on one sheet. Royal Collection Trust, RCIN 912579. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci_-_RCIN_912579,_Recto_Studies_of_water,_and_a_seated_old_man.jpg"},
  },
  {
    slug: "zine-night",
    title: "Sci Art Zines & Coffee",
    when: "Saturday, Jan 30, 2027 · 10:00 AM to 12:00 PM CST",
    place: FRGMNT,
    summary: "Everyone makes a science zine; we bind them all into one club zine.",
    body: [
      "Everyone makes their own science zine about anything: a favorite organism, an experiment gone wrong, how a bridge stands up. Paper, markers, and glue provided.",
      "Afterward, we'll package every zine together into one big Sci Art Club zine, and order printed copies for anyone who wants one.",
    ],
    image: {"src": "/images/merian-1705-pineapple.jpg", "alt": "A hand-colored engraving of a pineapple plant with cockroaches crawling over its fruit and leaves", "caption": "Maria Sibylla Merian, pineapple with cockroaches, plate 1 of <em>Metamorphosis insectorum Surinamensium</em> (1705). Merian painted Suriname's insects on the plants they live on, then published the book herself, paying for it by selling subscriptions: a self-published science book, the zine's great-grandmother. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:Metamorphosis_insectorum_Surinamensium_-_KW_1792_A_19_-_plaat01.jpg"}
  },
  {
    slug: "science-fair",
    title: "Science Fair",
    when: "Saturday, Feb 13, 2027 · 10:00 AM to 12:00 PM CST",
    place: FUS,
    summary: "A grown-up science fair: bring a project, set up a table, and tour each other's work.",
    body: [
      "A science fair for grown-ups. Bring a project, made for the day or pulled from a drawer, and set it up on a table: a trifold poster, a specimen, a model, a data art piece, a question you've been chasing.",
      "We'll walk the tables, ask questions, and hand out a few ribbons for fun.",
    ],
    image: {"src": "/images/wright-1768-air-pump.jpg", "alt": "A candlelit painting of a family gathered around a scientist demonstrating a bird in a glass vacuum flask", "caption": "Joseph Wright of Derby, <em>An Experiment on a Bird in the Air Pump</em> (1768). A traveling lecturer pumps the air out of a glass globe while a family watches by candlelight: science as a show you gather around, which is all a science fair is. National Gallery, London. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:An_Experiment_on_a_Bird_in_an_Air_Pump_by_Joseph_Wright_of_Derby,_1768.jpg"}
  },
  {
    slug: "drawing-at-the-bell",
    title: "Drawing at the Bell Museum",
    when: "Saturday, Mar 13, 2027 · 10:00 AM to 12:00 PM CST",
    place: { name: "Bell Museum", address: "2088 Larpenteur Ave W · Saint Paul, MN", url: "https://www.bellmuseum.umn.edu/" },
    summary: "Sketch the dioramas and specimens at the Bell Museum together.",
    body: [
      "Bring a sketchbook and something to draw with. We'll spread out among the Bell Museum's dioramas and specimens and draw for the morning, then regroup to look at each other's pages.",
      "No drawing experience needed. Museum admission is separate; check the Bell Museum's site for current hours and tickets.",
    ],
    image: {"src": "/images/audubon-1831-snowy-owl.jpg", "alt": "Two snowy owls perched on a branch against a dark night sky", "caption": "John James Audubon, <em>Snowy Owl</em>, plate 121 of <em>The Birds of America</em> (1831), engraved and hand-colored by Robert Havell. Audubon drew from specimens, which is exactly what the Bell's dioramas give us: birds that hold still. Snowy owls winter in Minnesota, so March is their month too. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:The_birds_of_America._(Livraison)_25,_Plate_CXXI,_Snowy_Owl,_Male_1._Female_2._-_estampe_-_Drawn_from_Nature_by_John_J._Audubon_;_Engraved,_printed_%26_Coloured_by_R._Havell_-_btv1b531439687.jpg"}
  },
  {
    slug: "science-tattoos",
    title: "Science Tattoos",
    when: "Saturday, Apr 10, 2027 · 10:00 AM to 12:00 PM CDT",
    place: FRGMNT,
    summary: "Design the science tattoo you'd get (no needles involved).",
    body: [
      "We'll get science tattoos together. April fool's! We'll spend the morning designing the science tattoo we'd get if we had to: a phylogenetic tree, a favorite molecule, the orbit of a comet, a single diatom.",
      "I have a gorgeous book of science tattoos to bring for inspiration, <a href=\"https://carlzimmer.com/books/science-ink-tattoos-of-the-science-obsessed/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 hover:underline\">Carl Zimmer's <em>Science Ink</em></a>. Bring reference images of anything you love. I'll try to find temporary tattoo paper.",
    ],
    note: "April Fools' post (April 1st): announce that the club is getting science tattoos together, nine days before the event (Apr 10).",
    image: {"src": "/images/cajal-purkinje-neuron.jpg", "alt": "An ink drawing of a single neuron with a dense, tree-like crown of branching dendrites", "caption": "Santiago Ramón y Cajal, a Purkinje neuron from the human cerebellum (c. 1900), ink. Cajal's neurons are a tattoo-parlor classic, and his line work is already flash-ready: one branching cell in black ink, nothing to shade. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:Cajal_-_a_purkinje_neuron_from_the_human_cerebellum.jpg"}
  },
  {
    slug: "trash-and-watercolor",
    title: "Trash Pickup & Watercolor",
    when: "Saturday, May 8, 2027 · 10:00 AM to 12:00 PM CDT",
    place: { name: "Lake of the Isles", address: "Lake of the Isles Pkwy · Minneapolis, MN" },
    summary: "Pick up trash together, then paint the place we just cleaned.",
    body: [
      "We'll spend the first hour picking up trash, then sit down in the same spot and watercolor it.",
      "Gloves and bags provided. Bring a watercolor set if you have one; we'll have a few to share. Dress for the weather.",
    ],
    image: {"src": "/images/durer-1503-large-turf.jpg", "alt": "A watercolor of a clump of meadow grasses, dandelions, and plantain leaves growing from muddy ground", "caption": "Albrecht Dürer, <em>The Large Piece of Turf</em> (1503), watercolor and gouache. A clump of ordinary weeds, dandelion, plantain, and meadow grass, painted with the attention most artists of his day saved for saints. The model for our May morning: look closely at a scrap of ground, then paint it. Albertina, Vienna. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:Albrecht_D%C3%BCrer_-_The_Large_Piece_of_Turf,_1503_-_Google_Art_Project.jpg"}
  },
  {
    slug: "microscope-party",
    title: "Microscope Party",
    when: "Saturday, Jun 5, 2027 · 10:00 AM to 12:00 PM CDT",
    place: { name: "Wheel Fun Rentals, Bde Maka Ska", address: "3000 E Bde Maka Ska Pkwy · Minneapolis, MN", url: "https://wheelfunrentals.com/mn/minneapolis/bde-maka-ska" },
    summary: "Kayak Bde Maka Ska, fill vials with lake water, then see what's living in it under the microscope.",
    body: [
      "We'll meet at Wheel Fun Rentals on Bde Maka Ska, rent kayaks, and paddle out to sample the lake. Vials are provided: fill a few from different spots, like open water, the weedy shallows, and near the docks.",
      "Back on shore, we'll put drops under the microscope (also provided) and see what turns up: algae, rotifers, water fleas, and whatever else is swimming around. Bring a sketchbook if you want to draw what you find.",
      "Kayak rental is separate, paid at the lake. Dress to get a little wet.",
    ],
    image: {"src": "/images/haeckel-1904-desmidiea.jpg", "alt": "A plate of symmetrical green single-celled algae shaped like stars, crescents, and snowflakes", "caption": "Ernst Haeckel, <em>Desmidiea</em>, from <em>Kunstformen der Natur</em> (1904). Desmids are single-celled green algae that live in lakes and ponds, drawn here as Haeckel saw them through his microscope. With luck, a cousin of these turns up in our vials. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:Haeckel_Desmidiea.jpg"}
  },
  {
    slug: "science-museum",
    title: "Field Trip to the Science Museum",
    when: "Saturday, Jul 31, 2027 · 10:00 AM to 12:00 PM CDT",
    place: { name: "Science Museum of Minnesota", address: "120 W Kellogg Blvd · Saint Paul, MN", url: "https://www.smm.org/" },
    summary: "A summer field trip to the Science Museum of Minnesota, sketchbooks in hand.",
    body: [
      "A summer field trip. We'll meet at the entrance, wander the exhibits with sketchbooks, and meet up at the end to share what caught our eye.",
      "Museum admission is separate; check the Science Museum's site for current hours and tickets.",
    ],
    image: {"src": "/images/imperato-1599-museum.jpg", "alt": "An engraving of a vaulted room lined with cabinets of specimens, with stuffed animals and a crocodile on the ceiling, and visitors looking on", "caption": "Ferrante Imperato's museum in Naples, from his <em>Dell'Historia Naturale</em> (1599), the earliest known picture of a natural history collection. Shells, specimens, and a crocodile on the ceiling, with visitors pointing at it all: the great-great-grandparent of the Science Museum of Minnesota. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:RitrattoMuseoFerranteImperato.jpg"}
  },
  {
    slug: "fungi-appreciation",
    title: "Fungi Appreciation",
    when: "Saturday, Aug 14, 2027 · 10:00 AM to 12:00 PM CDT",
    place: { name: "Lake Harriet Bandshell", address: "4135 W Lake Harriet Pkwy · Minneapolis, MN 55409" },
    summary: "Head into the woods to find and draw mushrooms, shelf fungi, and slime molds.",
    body: [
      "Late summer is mushroom season. We'll meet at the Lake Harriet Bandshell and walk slowly through the Thomas Sadler Roberts Bird Sanctuary next door, looking for fungi: mushrooms in the leaf litter, shelf fungi on fallen logs, and maybe a slime mold or two. Then we'll sit down and draw what we found.",
      "Bring a sketchbook, and a hand lens if you have one. Look, draw, and photograph, but leave everything where it grows, and stay on the sanctuary's paths and boardwalk. Dress for bugs and mud.",
    ],
    image: {"src": "/images/haeckel-1904-basimycetes.jpg", "alt": "A plate of mushrooms on a black background, led by a veiled stinkhorn with a lacy white net hanging from its cap", "caption": "Ernst Haeckel, <em>Basimycetes</em>, from <em>Kunstformen der Natur</em> (1904). Stinkhorns, earthstars, and the veiled lady, whose lace skirt unfurls in a few hours and is gone by the next day. Fungi reward the people who walk slowly. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:Haeckel_Basimycetes.jpg"},
  },
  {
    slug: "byos",
    title: "BYOS: Bring Your Own Sciartist",
    when: "Saturday, Aug 28, 2027 · 10:00 AM to 12:00 PM CDT",
    place: FRGMNT,
    summary: "Bring a scientist-artist you love and give a short show-and-tell about their work.",
    body: [
      "Everyone brings one sciartist and presents on them for a few minutes: a botanical illustrator, a medical illustrator, a glassblower of marine invertebrates, a NASA concept painter, a microscopist with an eye, or the person on Instagram who embroiders mitochondria.",
      "Show a few images, tell us why they stuck with you, and leave with a list of new people to follow. Listening without presenting is welcome too.",
    ],
    image: {"src": "/images/albinus-wandelaar-1749-clara.jpg", "alt": "An engraving of a human skeleton standing in front of a rhinoceros in a garden", "caption": "Jan Wandelaar, skeleton with Clara the rhinoceros, engraved by Charles Grignion for Bernhard Siegfried Albinus's <em>Tabulae sceleti et musculorum corporis humani</em> (1747; this plate from the 1749 English edition). Albinus was the anatomist, but the book is beautiful because of Wandelaar, the artist he hired, who put Europe's most famous rhinoceros behind the skeleton. The kind of sciartist we hope you'll bring. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:Clara_Rhinoceros_from_Bernhard_Siegfried_Albinus_TAB_IV_-_1749.jpg"}
  },
  {
    slug: "collaging-the-future",
    title: "Collaging the Future",
    when: "Saturday, Sep 11, 2027 · 10:00 AM to 12:00 PM CDT",
    place: FRGMNT,
    summary: "Scissors, glue, and old science magazines: cut out the future you want to live in.",
    body: [
      "We'll bring scissors, glue, and a pile of old science magazines, seed catalogs, star charts, and textbook plates, and spend the morning collaging the future: the cities, ecosystems, spacecraft, and kitchens we'd actually like to live with.",
      "Bring anything you'd like to cut up. Utopias, warnings, and very specific daydreams all welcome. At the end, we'll pin everything up and walk the wall together.",
      "Like Sci Art Zines & Coffee, we'll gather the collages into a Sci Art Club zine and order printed copies for anyone who wants one.",
    ],
    image: {"src": "/images/guidice-1975-space-colony.jpg", "alt": "A painting of the inside of a space colony: green hills, a winding lake, and farmland curving up overhead, with sunlight pouring in through long window strips", "caption": "Rick Guidice, interior of a space colony (1975), painted for NASA Ames Research Center's summer study of space settlements. Lakes, farms, and villages curving up and over your head, sunlight streaming in through long windows: a future someone took seriously enough to paint every field. Public domain (NASA).", "link": "https://commons.wikimedia.org/wiki/File:Artist-_Rick_Guidice_interior_of_Torus_wheel_(L-5)_Space_Colonization_Module_(ARC-1975-AC75-1086).jpg"}
  },
  {
    slug: "musical-science",
    title: "Musical Science",
    when: "Saturday, Oct 23, 2027 · 10:00 AM to 12:00 PM CDT",
    place: FUS,
    summary: "Make music about science, data, or something you've observed. Bring an instrument!",
    body: [
      "We'll spend the morning turning science into sound: play a dataset as a melody, turn a bird call or a tide chart into a rhythm, write a song about a cell, or improvise to a time-lapse of the night sky.",
      "Bring an instrument if you have one. No instrument? Pots, pans, your computer or your voice will work. At the end, we'll play for each other.",
    ],
    image: {"src": "/images/kircher-1650-birdsong.jpg", "alt": "An engraving of a rooster, hen, cuckoo, quail, and parrot, each with its call written above it on a musical staff", "caption": "Athanasius Kircher, birdsong set down in musical notation, from <em>Musurgia universalis</em> (1650). Kircher listened to a rooster, a hen calling her chicks, a cuckoo, a quail, and a parrot, and wrote what he heard as notes on a staff: music made from careful observation. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:Kircher-musurgia-bird-song_(cropped).jpg"},
  },
];

// Parked: not posted yet (her call 11.23.26). Not rendered anywhere; move back into `events` to publish.
export const parkedEvents: ClubEvent[] = [
  {
    slug: "specimen-swap",
    title: "Specimen Swap",
    when: "Saturday, Dec 4, 2027 · 10:00 AM to 12:00 PM CST",
    place: FRGMNT,
    summary: "Bring an object from nature, trade it for someone else's, then draw it and write its museum label.",
    body: [
      "Bring one object from nature to give away: a shell, a seed pod, a rock, a pinecone, an empty wasp nest. We'll pile them on a table, and everyone goes home with someone else's.",
      "Then we'll draw our new specimen and write a museum label for it: what it is, where it came from, and what we'd still like to know about it. Nothing alive, and nothing from a protected species (that includes wild bird feathers, which are illegal to keep in the US).",
    ],
    image: {"src": "/images/vincent-1715-cabinet.jpg", "alt": "An engraving of a long gallery lined with jars and cabinets of specimens, with visitors leaning over tables of open drawers", "caption": "Frontispiece to Levinus Vincent's <em>Wondertooneel der Natuur</em> (Theater of Nature's Wonders, 1706 to 1715). Vincent was a Haarlem silk merchant whose cabinet of shells, insects, and pickled creatures was famous enough that visitors came to pore over its drawers. Our collection will be smaller. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:Vincent,_Levinus_(1715)_Wondertooneel_der_natuur_-Tome_1-_0030_frontispiece.jpg"},
  },
];
