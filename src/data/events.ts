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
}

const TBA = { name: "Location to be announced", address: "Minneapolis / St. Paul" };

export const events: ClubEvent[] = [
  {
    slug: "collaging-the-future",
    title: "Collaging the Future",
    when: "Saturday, Jan 9 · 10:00 AM to 12:00 PM CST",
    place: TBA,
    summary: "Start the year with scissors, glue, and old science magazines, and cut out the future you want to live in.",
    body: [
      "Start the year with scissors and glue. We'll bring a pile of old science magazines, seed catalogs, star charts, and textbook plates, and spend the morning collaging the future: the cities, ecosystems, spacecraft, and kitchens we'd actually like to live with.",
      "Bring anything you'd like to cut up. Utopias, warnings, and very specific daydreams all welcome. At the end, we'll pin everything up and walk the wall together.",
    ],
  },
  {
    slug: "byos",
    title: "BYOS: Bring Your Own Sciartist",
    when: "Saturday, Feb 6 · 10:00 AM to 12:00 PM CST",
    place: TBA,
    summary: "Bring a scientist-artist you love and give a short show-and-tell about their work.",
    body: [
      "Everyone brings one sciartist and presents on them for a few minutes: a botanical illustrator, a medical illustrator, a glassblower of marine invertebrates, a NASA concept painter, a microscopist with an eye, or the person on Instagram who embroiders mitochondria.",
      "Show a few images, tell us why they stuck with you, and leave with a list of new people to follow. Listening without presenting is welcome too.",
    ],
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
  },
  {
    slug: "microscope-party",
    title: "Microscope Party",
    when: "Saturday, Jun 5 · 10:00 AM to 12:00 PM CDT",
    place: TBA,
    summary: "Bring something small, look at it up close, and draw what you see.",
    body: [
      "Bring something small: pond water, a leaf, pollen, a feather, a scab you're proud of. We'll have microscopes set up to look closely, then draw, paint, or photograph what we find.",
      "If you own a microscope, bring it along.",
    ],
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
  },
  {
    slug: "zine-night",
    title: "Zine Night",
    when: "Saturday, Aug 7 · 10:00 AM to 12:00 PM CDT",
    place: TBA,
    summary: "Everyone makes a science zine; we bind them all into one club zine.",
    body: [
      "Everyone makes their own science zine about anything: a favorite organism, an experiment gone wrong, how a bridge stands up. Paper, markers, and glue provided.",
      "Afterward, we'll package every zine together into one big Sci Art Club zine, and order printed copies for anyone who wants one.",
    ],
  },
  {
    slug: "science-fair",
    title: "Science Fair",
    when: "Saturday, Sep 11 · 10:00 AM to 12:00 PM CDT",
    place: TBA,
    summary: "A grown-up science fair: bring a project, set up a table, and tour each other's work.",
    body: [
      "A science fair for grown-ups. Bring a project, made for the day or pulled from a drawer, and set it up on a table: a trifold poster, a specimen, a model, a data art piece, a question you've been chasing.",
      "We'll walk the tables, ask questions, and hand out a few ribbons for fun.",
    ],
  },
];
