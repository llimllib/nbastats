// rg -o --replace '$1' --no-filename 'teams/(\w{3})' data/**/stats.json | sort | uniq
// to get every team abbreivation in the data set. Remember teams change! NJN
// -> BKN for ex
//
// I gave the New Jersey Nets the same colors as the Brooklyn nets, but I
// should probably go back and get their real colors
export interface Team {
  name: string;
  colors: Array<string>;
  comment?: string;
}

export const teams = new Map<string, Team>([
  [
    "ATL",
    {
      name: "Atlanta Hawks",
      colors: ["#C8102E", "#FDB927", "#000000", "#9EA2A2"],
    },
  ],
  [
    "BOS",
    {
      name: "Boston Celtics",
      colors: ["#008348", "#BB9753", "#000000", "#A73832", "#FFFFFF"],
    },
  ],
  ["BKN", { name: "Brooklyn Nets", colors: ["#000000", "#FFFFFF", "#707271"] }],
  [
    "CHA",
    { name: "Charlotte Bobcats", colors: ["#f26532", "#2f598c", "#959da0"] },
  ],
  ["CHI", { name: "Chicago Bulls", colors: ["#CE1141", "#000000"] }],
  [
    "CHO",
    {
      name: "Charlotte Hornets",
      colors: ["#00788C", "#1D1160", "#A1A1A4", "#FFFFFF"],
    },
  ],
  [
    "CLE",
    {
      name: "Cleveland Cavaliers",
      colors: ["#6F263D", "#FFB81C", "#041E42", "#000000"],
    },
  ],
  [
    "DAL",
    {
      name: "Dallas Mavericks",
      colors: ["#0064B1", "#00285E", "#BBC4CA", "#000000"],
    },
  ],
  [
    "DEN",
    {
      name: "Denver Nuggets",
      colors: ["#0E2240", "#8B2131", "#FEC524", "#244289"],
    },
  ],
  [
    "DET",
    {
      name: "Detroit Pistons",
      colors: ["#1D428A", "#C8102E", "#BEC0C2", "#000000", "#FFFFFF"],
    },
  ],
  ["GSW", { name: "Golden State Warriors", colors: ["#1D428A", "#FDB927"] }],
  [
    "HOU",
    {
      name: "Houston Rockets",
      colors: ["#CE1141", "#9EA2A2", "#000000", "#373A36", "#FFFFFF"],
    },
  ],
  [
    "IND",
    { name: "Indiana Pacers", colors: ["#BEC0C2", "#FDBB30", "#002D62"] },
  ],
  [
    "LAC",
    {
      name: "Los Angeles Clippers",
      colors: ["#C8102E", "#1D428A", "#000000", "#BEC0C2", "#FFFFFF"],
    },
  ],
  [
    "LAL",
    { name: "Los Angeles Lakers", colors: ["#552583", "#FDB927", "#000000"] },
  ],
  [
    "MEM",
    {
      name: "Memphis Grizzlies",
      colors: ["#5D76A9", "#12173F", "#707271", "#F5B112"],
    },
  ],
  ["MIA", { name: "Miami Heat", colors: ["#000000", "#98002E", "#F9A01B"] }],
  [
    "MIL",
    {
      name: "Milwaukee Bucks",
      colors: ["#00471B", "#EEE1C6", "#0077C0", "#000000", "#FFFFFF"],
    },
  ],
  [
    "MIN",
    {
      name: "Minnesota Timberwolves",
      colors: ["#0C2340", "#78BE20", "#236192", "#9EA2A2", "#FFFFFF"],
    },
  ],
  [
    "NJN",
    { name: "New Jersey Nets", colors: ["#000000", "#FFFFFF", "#707271"] },
  ],
  [
    "NOH",
    {
      name: "New Orleans Hornets",
      colors: ["#00788C", "#1D1160", "#A1A1A4", "#FFFFFF"],
    },
  ],
  [
    "NOP",
    { name: "New Orleans Pelicans", colors: ["#0A2240", "#8C734B", "#CE0E2D"] },
  ],
  [
    "NYK",
    {
      name: "New York Knicks",
      colors: ["#006BB6", "#F58426", "#BEC0C2", "#000000", "#FFFFFF"],
    },
  ],
  [
    "OKC",
    {
      name: "Oklahoma City Thunder",
      colors: ["#007AC1", "#EF3B24", "#FDBB30", "#002D62"],
    },
  ],
  ["ORL", { name: "Orlando Magic", colors: ["#0077C0", "#000000", "#C4CED4"] }],
  [
    "PHI",
    {
      name: "Philadelphia 76ers",
      colors: [
        "#006BB6",
        "#C4CED4",
        "#ED174C",
        "#000000",
        "#002B5C",
        "#FFFFFF",
      ],
    },
  ],
  [
    "PHX",
    {
      name: "Phoenix Suns",
      colors: ["#1D1160", "#E56020", "#000000", "#63727A", "#F9A01B"],
    },
  ],
  [
    "POR",
    {
      name: "Portland Trailblazers",
      colors: ["#E03A3E", "#FFFFFF", "#000000"],
    },
  ],
  [
    "SAC",
    { name: "Sacramento Kings", colors: ["#5A2B81", "#63727A", "#000000"] },
  ],
  ["SAS", { name: "San Antonio Spurs", colors: ["#000000", "#C4CED4"] }],
  [
    "TOR",
    {
      name: "Toronto Raptors",
      colors: ["#CE1141", "#000000", "#393A96", "#B4975A", "#FFFFFF"],
    },
  ],
  [
    "TOT",
    {
      name: "Season Total",
      comment:
        "bbref uses TOT to indicate a player's season total if they were on more than one team",
      colors: ["#888888", "#888888"],
    },
  ],
  ["UTA", { name: "Utah Jazz", colors: ["#F9A01B", "#00471B", "#002B5C"] }],
  [
    "WAS",
    {
      name: "Washington Wizards",
      colors: ["#002B5C", "#E31837", "#C4CED4", "#FFFFFF"],
    },
  ],
]);
