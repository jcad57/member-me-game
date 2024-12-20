import themes from "./themes";
const defaultTheme = themes.themes.blueTheme;

const defaultSettings = [
  {
    name: "arcade",
    description: "Race against the clock and try to get to the top!",
    extraInfo: "Beat the clock and you can submit your score to the leaderboard!",
    theme: defaultTheme,
    difficulty: "hard",
    timer: true,
    lives: 8,
    sound: true,
    changeableSettings: ["theme"],
  },
  {
    name: "casual",
    description: "No pressure, choose your style and  play for fun!",
    extraInfo: "",
    theme: defaultTheme,
    difficulty: "easy",
    timer: false,
    lives: 8,
    sound: true,
    changeableSettings: ["theme", "difficulty", "timer"],
  },
  // {
  //   name: "versus",
  //   description: "Take on your friends or play as a team!",
  //   extraInfo: "",
  //   theme: defaultTheme,
  //   difficulty: "easy",
  //   timer: true,
  //   lives: 100,
  //   sound: true,
  //   changeableSettings: ["theme", "difficulty", "timer", "sound"],
  // },
  // {
  //   name: "zen",
  //   description: "Relax with soothing music and therapeutic sound design.",
  //   extraInfo: "",
  //   theme: defaultTheme,
  //   difficulty: "easy",
  //   timer: false,
  //   lives: null,
  //   sound: true,
  //   changeableSettings: ["theme", "difficulty", "sound"],
  // },
];

export default { defaultSettings };
