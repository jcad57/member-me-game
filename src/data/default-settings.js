import themes from "./themes";
const defaultTheme = themes.themes.blueTheme;

const defaultSettings = [
  {
    name: "arcade",
    description: "Race against the clock and try to get to the top!",
    theme: defaultTheme,
    difficulty: "hard",
    timer: true,
    lives: 6,
    sound: true,
    changeableSettings: ["theme"],
  },
  {
    name: "casual",
    description: "No pressure, choose your style and  play for fun!",
    theme: defaultTheme,
    difficulty: "easy",
    timer: false,
    lives: 6,
    sound: true,
    changeableSettings: ["theme", "difficulty", "timer", "sound"],
  },
  // {
  //   name: "versus",
  //   description: "Take on your friends or play as a team!",
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
  //   theme: defaultTheme,
  //   difficulty: "easy",
  //   timer: false,
  //   lives: null,
  //   sound: true,
  //   changeableSettings: ["theme", "difficulty", "sound"],
  // },
];

export default { defaultSettings };
