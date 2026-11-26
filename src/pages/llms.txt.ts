// /llms.txt: a plain-text, LLM-friendly summary of the site (https://llmstxt.org).
// Built from src/data/events.ts so it never drifts from the calendar.
import type { APIRoute } from "astro";
import { events } from "../data/events";

const SITE = "https://sciart.club";

const plain = (html: string) =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#x25B8;/g, "")
    .replace(/\s+/g, " ")
    .trim();

export const GET: APIRoute = () => {
  const lines: string[] = [
    "# Sci Art Club",
    "",
    "> A Minneapolis / St. Paul community for people who make art about science, and science that looks like art. Informal Saturday-morning meetups (10 AM to noon). No expertise needed, just curiosity.",
    "",
    "Come draw, research, write, and make something about the world with us. Bring a question, a sketchbook, or scraps of science that intrigue you. You'll be in good company whether you're inspired by Robert Hooke or Kim Stanley Robinson, Santiago Ramón y Cajal or Rachel Carson, Leonardo da Vinci or W.E.B. Du Bois, Mary Oliver or Robin Wall Kimmerer.",
    "",
    "What to expect: hands-on creative workshops, show-and-tells, skill swaps, and science fairs.",
    "",
    "The name is styled \"sci ARt club\" in the Major Mono Display logo; in plain text write \"Sci Art Club\".",
    "",
    "## Links",
    "",
    `- [Homepage](${SITE}/): about the club and the event calendar`,
    "- [Meetup group](https://www.meetup.com/sci-art-club/): RSVP for events here",
    "- [Instagram @sci_art_club](https://www.instagram.com/sci_art_club/)",
    "",
    "## Events",
    "",
  ];

  for (const e of events) {
    lines.push(`### ${e.title}`, "");
    lines.push(`- When: ${e.when}`);
    if (e.place) lines.push(`- Where: ${e.place.name}, ${e.place.address}`);
    lines.push(`- Page: ${SITE}/${e.slug}/`, "");
    lines.push(plain(e.summary), "");
    for (const p of e.body) lines.push(plain(p), "");
    if (e.note) lines.push(plain(e.note), "");
    if (e.image) lines.push(`Image: ${plain(e.image.caption)}`, "");
  }

  lines.push(
    "## Notes",
    "",
    "- RSVP for any event on Meetup.",
    "- Images on the site are public domain, mostly via Wikimedia Commons; homepage plates are Ernst Haeckel's Kunstformen der Natur (1899 to 1904).",
    ""
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
