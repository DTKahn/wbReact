export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "ugliest",
    "unsightly",
    "angry",
    "bewildered",
    "clumsy",
    "defeated",
    "embarrassed",
    "fierce",
    "grumpy",
    "helpless",
    "itchy",
    "jealous",
    "lazy",
    "mysterious",
    "nervous",
    "obnoxious",
    "panicky",
    "repulsive",
    "scary",
    "thoughtless",
    "uptight",
    "worried"
  ];

  const nouns = [
    "adults",
    "amigos",
    "cacti",
    "children",
    "criteria",
    "data",
    "diagnoses",
    "elves",
    "enemies",
    "feet",
    "friends",
    "fungi",
    "geese",
    "humans",
    "knives",
    "leaves",
    "lives",
    "loaves",
    "mice",
    "nuclei",
    "people",
    "phenomena",
    "plants",
    "potatoes",
    "students",
    "syllabuses",
    "teeth",
    "theses",
    "toddlers",
    "tomatoes",
    "trees"
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
