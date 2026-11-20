// Sci Art Club events, one a month.
// Scheduled on first Saturdays to stay clear of tcplot, which meets on
// 2nd–4th Saturdays (Jan 16, 2027 is tcplot's Charts & Color).
// Holiday weekends (New Year's, July 4th, Labor Day) shift to the 2nd Saturday.

export interface ClubEvent {
  slug: string;
  title: string;
  when: string;
  place?: { name: string; address: string };
  summary: string;
  body: string[];
  note?: string;
  image?: { src: string; alt: string; caption: string; link: string };
}

const TBA = { name: "Location to be announced", address: "Minneapolis / St. Paul" };

export const events: ClubEvent[] = [
  {
    slug: "zine-night",
    title: "Zine Night",
    when: "Saturday, Jan 9 · 10:00 AM to 12:00 PM CST",
    place: TBA,
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
    when: "Saturday, Feb 6 · 10:00 AM to 12:00 PM CST",
    place: TBA,
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
    when: "Saturday, Mar 6 · 10:00 AM to 12:00 PM CST",
    place: { name: "Bell Museum", address: "2088 Larpenteur Ave W · Saint Paul, MN" },
    summary: "Sketch the dioramas and specimens at the Bell Museum together.",
    body: [
      "Bring a sketchbook and something to draw with. We'll spread out among the Bell Museum's dioramas and specimens and draw for the morning, then regroup to look at each other's pages.",
      "No drawing experience needed. Museum admission is separate; check the Bell Museum's site for current hours and tickets.",
    ],
    image: {"src": "/images/audubon-1831-snowy-owl.jpg", "alt": "Two snowy owls perched on a branch against a dark night sky", "caption": "John James Audubon, <em>Snowy Owl</em>, plate 121 of <em>The Birds of America</em> (1831), engraved and hand-colored by Robert Havell. Audubon drew from specimens, which is exactly what the Bell's dioramas give us: birds that hold still. Snowy owls winter in Minnesota, so March is their month too. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:The_birds_of_America._(Livraison)_25,_Plate_CXXI,_Snowy_Owl,_Male_1._Female_2._-_estampe_-_Drawn_from_Nature_by_John_J._Audubon_;_Engraved,_printed_%26_Coloured_by_R._Havell_-_btv1b531439687.jpg"}
  },
  {
    slug: "trash-and-watercolor",
    title: "Trash Pickup and Watercolor",
    when: "Saturday, Apr 3 · 10:00 AM to 12:00 PM CDT",
    place: TBA,
    summary: "For Earth Month: pick up trash together, then paint the place we just cleaned.",
    body: [
      "For Earth Month, we'll spend the first hour picking up trash, then sit down in the same spot and watercolor it.",
      "Gloves and bags provided. Bring a watercolor set if you have one; we'll have a few to share. Dress for the weather.",
    ],
    image: {"src": "/images/durer-1503-large-turf.jpg", "alt": "A watercolor of a clump of meadow grasses, dandelions, and plantain leaves growing from muddy ground", "caption": "Albrecht Dürer, <em>The Large Piece of Turf</em> (1503), watercolor and gouache. A clump of ordinary weeds, dandelion, plantain, and meadow grass, painted with the attention most artists of his day saved for saints. The model for our April morning: look closely at a scrap of ground, then paint it. Albertina, Vienna. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:Albrecht_D%C3%BCrer_-_The_Large_Piece_of_Turf,_1503_-_Google_Art_Project.jpg"}
  },
  {
    slug: "science-tattoos",
    title: "Science Tattoos",
    when: "Saturday, May 1 · 10:00 AM to 12:00 PM CDT",
    place: TBA,
    summary: "Design the science tattoo you'd get (no needles involved).",
    body: [
      "No one is actually getting tattooed. We'll spend the morning designing the science tattoo we'd get if we had to: a phylogenetic tree, a favorite molecule, the orbit of a comet, a single diatom.",
      "Bring reference images of anything you love. Temporary tattoo paper on hand if you want to wear your design home.",
    ],
    note: "April Fools' post (April 1st): announce that the club is getting science tattoos together.",
    image: {"src": "/images/cajal-purkinje-neuron.jpg", "alt": "An ink drawing of a single neuron with a dense, tree-like crown of branching dendrites", "caption": "Santiago Ramón y Cajal, a Purkinje neuron from the human cerebellum (c. 1900), ink. Cajal's neurons are a tattoo-parlor classic, and his line work is already flash-ready: one branching cell in black ink, nothing to shade. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:Cajal_-_a_purkinje_neuron_from_the_human_cerebellum.jpg"}
  },
  {
    slug: "microscope-party",
    title: "Microscope Party",
    when: "Saturday, Jun 5 · 10:00 AM to 12:00 PM CDT",
    place: { name: "Bde Maka Ska", address: "Minneapolis, MN" },
    summary: "Kayak Bde Maka Ska, fill vials with lake water, then see what's living in it under the microscope.",
    body: [
      "We'll meet at Bde Maka Ska, rent kayaks, and paddle out to sample the lake. Vials are provided: fill a few from different spots, like open water, the weedy shallows, and near the docks.",
      "Back on shore, we'll put drops under the microscope (also provided) and see what turns up: algae, rotifers, water fleas, and whatever else is swimming around. Bring a sketchbook if you want to draw what you find.",
      "Kayak rental is separate, paid at the lake. Dress to get a little wet.",
    ],
    image: {"src": "/images/haeckel-1904-desmidiea.jpg", "alt": "A plate of symmetrical green single-celled algae shaped like stars, crescents, and snowflakes", "caption": "Ernst Haeckel, <em>Desmidiea</em>, from <em>Kunstformen der Natur</em> (1904). Desmids are single-celled green algae that live in lakes and ponds, drawn here as Haeckel saw them through his microscope. With luck, a cousin of these turns up in our vials. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:Haeckel_Desmidiea.jpg"}
  },
  {
    slug: "science-museum",
    title: "Field Trip to the Science Museum",
    when: "Saturday, Jul 10 · 10:00 AM to 12:00 PM CDT",
    place: { name: "Science Museum of Minnesota", address: "120 W Kellogg Blvd · Saint Paul, MN" },
    summary: "A summer field trip to the Science Museum of Minnesota, sketchbooks in hand.",
    body: [
      "A summer field trip. We'll meet at the entrance, wander the exhibits with sketchbooks, and meet up at the end to share what caught our eye.",
      "Museum admission is separate; check the Science Museum's site for current hours and tickets.",
    ],
    image: {"src": "/images/imperato-1599-museum.jpg", "alt": "An engraving of a vaulted room lined with cabinets of specimens, with stuffed animals and a crocodile on the ceiling, and visitors looking on", "caption": "Ferrante Imperato's museum in Naples, from his <em>Dell'Historia Naturale</em> (1599), the earliest known picture of a natural history collection. Shells, specimens, and a crocodile on the ceiling, with visitors pointing at it all: the great-great-grandparent of the Science Museum of Minnesota. Public domain.", "link": "https://commons.wikimedia.org/wiki/File:RitrattoMuseoFerranteImperato.jpg"}
  },
  {
    slug: "byos",
    title: "BYOS: Bring Your Own Sciartist",
    when: "Saturday, Aug 7 · 10:00 AM to 12:00 PM CDT",
    place: TBA,
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
    when: "Saturday, Sep 11 · 10:00 AM to 12:00 PM CDT",
    place: TBA,
    summary: "Scissors, glue, and old science magazines: cut out the future you want to live in.",
    body: [
      "We'll bring scissors, glue, and a pile of old science magazines, seed catalogs, star charts, and textbook plates, and spend the morning collaging the future: the cities, ecosystems, spacecraft, and kitchens we'd actually like to live with.",
      "Bring anything you'd like to cut up. Utopias, warnings, and very specific daydreams all welcome. At the end, we'll pin everything up and walk the wall together.",
      "Like Zine Night, we'll gather the collages into a Sci Art Club zine and order printed copies for anyone who wants one.",
    ],
    image: {"src": "/images/davis-1975-stanford-torus.jpg", "alt": "A painting of the inside of a ring-shaped space colony: terraced homes, farms, and a river curving up into the sky", "caption": "Don Davis, interior of a Stanford torus space colony (1975), painted for NASA Ames Research Center's summer study of space settlements. Farms, terraced houses, and a river curving up overhead: a future someone took seriously enough to paint every rooftop. Public domain (NASA).", "link": "https://commons.wikimedia.org/wiki/File:Stanford_Torus_interior.jpg"}
  },
];
