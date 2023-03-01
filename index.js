function chooseWeapon() {
  const weapons = ["Rock", "Paper", "Scissors"];
  const cpuWeapon = weapons[betterRandom(3)];

  function* weaponGenerator() {
    let i = betterRandom(3);
    while (true) {
      i++;
      if (i < weapons.length) {
        yield weapons[i];
      } else {
        i = 0;
        yield weapons[i];
      }
    }
  }

  let userChoice = weaponGenerator();

  while (true) {
    playerWeapon = userChoice.next().value;

    const userHappy = confirm(
      `Press ok to select:\n\n${playerWeapon}\n\nor cancel to choose another.`
    );

    if (userHappy) {
      return [playerWeapon, cpuWeapon];
    }
  }
}

// function chooseWeapon() {
//   const weapons = ["Rock", "Paper", "Scissors"];

//   while (true) {
//     // for cpu: pick a random number between 0 and 3. have to use floor because .random by itself will pick a number lower than 1 for some dumb reason.
//     const cpuWeapon = weapons[Math.floor(Math.random() * 3)];
//     const playerWeaponChoice = prompt(
//       "Draw your sword!\n1. Rock\n2. Paper\n3. Scissors"
//     );
//     const playerWeapon = weapons[Number(playerWeaponChoice) - 1];
//     console.log(playerWeaponChoice);
//     console.log(playerWeapon);
//     if (!playerWeapon) {
//       alert("That is an invalid option. Please try again!");
//       continue;
//     } else {
//       return [playerWeapon, cpuWeapon];
//     }
//   }
// }

function prettifyName(currentName) {
  let newName = "";
  let skipNext;
  for (let char = 0; char <= currentName.length - 1; char++) {
    if (skipNext) {
      skipNext = false;
    } else if (char === 0) {
      newName += currentName[char].toUpperCase();
    } else if (currentName[char] === " ") {
      skipNext = true;
      newName += currentName[char] + currentName[char + 1].toUpperCase();
    } else {
      newName += currentName[char];
    }
  }
  return newName;
}

const betterRandom = (top) => Math.floor(Math.random() * top);

function nameGen() {
  names = [
    "Liam",
    "Noah",
    "Oliver",
    "Elijah",
    "James",
    "William",
    "Benjamin",
    "Lucas",
    "Henry",
    "Theodore",
    "Jack",
    "Levi",
    "Alexander",
    "Jackson",
    "Mateo",
    "Daniel",
    "Michael",
    "Mason",
    "Sebastian",
    "Ethan",
    "Logan",
    "Owen",
    "Samuel",
    "Jacob",
    "Asher",
    "Aiden",
    "John",
    "Joseph",
    "Wyatt",
    "David",
    "Leo",
    "Luke",
    "Julian",
    "Hudson",
    "Grayson",
    "Matthew",
    "Ezra",
    "Gabriel",
    "Carter",
    "Isaac",
    "Jayden",
    "Luca",
    "Anthony",
    "Dylan",
    "Lincoln",
    "Thomas",
    "Maverick",
    "Elias",
    "Josiah",
    "Charles",
    "Caleb",
    "Christopher",
    "Ezekiel",
    "Miles",
    "Jaxon",
    "Isaiah",
    "Andrew",
    "Joshua",
    "Nathan",
    "Nolan",
    "Adrian",
    "Cameron",
    "Santiago",
    "Eli",
    "Aaron",
    "Ryan",
    "Angel",
    "Cooper",
    "Waylon",
    "Easton",
    "Kai",
    "Christian",
    "Landon",
    "Colton",
    "Roman",
    "Axel",
    "Brooks",
    "Jonathan",
    "Robert",
    "Jameson",
    "Ian",
    "Everett",
    "Greyson",
    "Wesley",
    "Jeremiah",
    "Hunter",
    "Leonardo",
    "Jordan",
    "Jose",
    "Bennett",
    "Silas",
    "Nicholas",
    "Parker",
    "Beau",
    "Weston",
    "Austin",
    "Connor",
    "Carson",
    "Dominic",
    "Xavier",
    "Jaxson",
    "Jace",
    "Emmett",
    "Adam",
    "Declan",
    "Rowan",
    "Micah",
    "Kayden",
    "Gael",
    "River",
    "Ryder",
    "Kingston",
    "Damian",
    "Sawyer",
    "Luka",
    "Evan",
    "Vincent",
    "Legend",
    "Myles",
    "Harrison",
    "August",
    "Bryson",
    "Amir",
    "Giovanni",
    "Chase",
    "Diego",
    "Milo",
    "Jasper",
    "Walker",
    "Jason",
    "Brayden",
    "Cole",
    "Nathaniel",
    "George",
    "Lorenzo",
    "Zion",
    "Luis",
    "Archer",
    "Enzo",
    "Jonah",
    "Thiago",
    "Theo",
    "Ayden",
    "Zachary",
    "Calvin",
    "Braxton",
    "Ashton",
    "Rhett",
    "Atlas",
    "Jude",
    "Bentley",
    "Carlos",
    "Ryker",
    "Adriel",
    "Arthur",
    "Ace",
    "Tyler",
    "Jayce",
    "Max",
    "Elliot",
    "Graham",
    "Kaiden",
    "Maxwell",
    "Juan",
    "Dean",
    "Matteo",
    "Malachi",
    "Ivan",
    "Elliott",
    "Jesus",
    "Emiliano",
    "Messiah",
    "Gavin",
    "Maddox",
    "Camden",
    "Hayden",
    "Leon",
    "Antonio",
    "Justin",
    "Tucker",
    "Brandon",
    "Kevin",
    "Judah",
    "Finn",
    "King",
    "Brody",
    "Xander",
    "Nicolas",
    "Charlie",
    "Arlo",
    "Emmanuel",
    "Barrett",
    "Felix",
    "Alex",
    "Miguel",
    "Abel",
    "Alan",
    "Beckett",
    "Amari",
    "Karter",
    "Timothy",
    "Abraham",
    "Jesse",
    "Zayden",
    "Blake",
    "Alejandro",
    "Dawson",
    "Tristan",
    "Victor",
    "Avery",
    "Joel",
    "Grant",
    "Eric",
    "Patrick",
    "Peter",
    "Richard",
    "Edward",
    "Andres",
    "Emilio",
    "Colt",
    "Knox",
    "Beckham",
    "Adonis",
    "Kyrie",
    "Matias",
    "Oscar",
    "Lukas",
    "Marcus",
    "Hayes",
    "Caden",
    "Remington",
    "Griffin",
    "Nash",
    "Israel",
    "Steven",
    "Holden",
    "Rafael",
    "Zane",
    "Jeremy",
    "Kash",
    "Preston",
    "Kyler",
    "Jax",
    "Jett",
    "Kaleb",
    "Riley",
    "Simon",
    "Phoenix",
    "Javier",
    "Bryce",
    "Louis",
    "Mark",
    "Cash",
    "Lennox",
    "Paxton",
    "Malakai",
    "Paul",
    "Kenneth",
    "Nico",
    "Kaden",
    "Lane",
    "Kairo",
    "Maximus",
    "Omar",
    "Finley",
    "Atticus",
    "Crew",
    "Brantley",
    "Colin",
    "Dallas",
    "Walter",
    "Brady",
    "Callum",
    "Ronan",
    "Hendrix",
    "Jorge",
    "Tobias",
    "Clayton",
    "Emerson",
    "Damien",
    "Zayn",
    "Malcolm",
    "Kayson",
    "Bodhi",
    "Bryan",
    "Aidan",
    "Cohen",
    "Brian",
    "Cayden",
    "Andre",
    "Niko",
    "Maximiliano",
    "Zander",
    "Khalil",
    "Rory",
    "Francisco",
    "Cruz",
    "Kobe",
    "Reid",
    "Daxton",
    "Derek",
    "Martin",
    "Jensen",
    "Karson",
    "Tate",
    "Muhammad",
    "Jaden",
    "Joaquin",
    "Josue",
    "Gideon",
    "Dante",
    "Cody",
    "Bradley",
    "Orion",
    "Spencer",
    "Angelo",
    "Erick",
    "Jaylen",
    "Julius",
    "Manuel",
    "Ellis",
    "Colson",
    "Cairo",
    "Gunner",
    "Wade",
    "Chance",
    "Odin",
    "Anderson",
    "Kane",
    "Raymond",
    "Cristian",
    "Aziel",
    "Prince",
    "Ezequiel",
    "Jake",
    "Otto",
    "Eduardo",
    "Rylan",
    "Ali",
    "Cade",
    "Stephen",
    "Ari",
    "Kameron",
    "Dakota",
    "Warren",
    "Ricardo",
    "Killian",
    "Mario",
    "Romeo",
    "Cyrus",
    "Ismael",
    "Russell",
    "Tyson",
    "Edwin",
    "Desmond",
    "Nasir",
    "Remy",
    "Tanner",
    "Fernando",
    "Hector",
    "Titus",
    "Lawson",
    "Sean",
    "Kyle",
    "Elian",
    "Corbin",
    "Bowen",
    "Wilder",
    "Armani",
    "Royal",
    "Stetson",
    "Briggs",
    "Sullivan",
    "Leonel",
    "Callan",
    "Finnegan",
    "Jay",
    "Zayne",
    "Marshall",
    "Kade",
    "Travis",
    "Sterling",
    "Raiden",
    "Sergio",
    "Tatum",
    "Cesar",
    "Zyaire",
    "Milan",
    "Devin",
    "Gianni",
    "Kamari",
    "Royce",
    "Malik",
    "Jared",
    "Franklin",
    "Clark",
    "Noel",
    "Marco",
    "Archie",
    "Apollo",
    "Pablo",
    "Garrett",
    "Oakley",
    "Memphis",
    "Quinn",
    "Onyx",
    "Alijah",
    "Baylor",
    "Edgar",
    "Nehemiah",
    "Winston",
    "Major",
    "Rhys",
    "Forrest",
    "Jaiden",
    "Reed",
    "Santino",
    "Troy",
    "Caiden",
    "Harvey",
    "Collin",
    "Solomon",
    "Donovan",
    "Damon",
    "Jeffrey",
    "Kason",
    "Sage",
    "Grady",
    "Kendrick",
    "Leland",
    "Luciano",
    "Pedro",
    "Hank",
    "Hugo",
    "Esteban",
    "Johnny",
    "Kashton",
    "Ronin",
    "Ford",
    "Mathias",
    "Porter",
    "Erik",
    "Johnathan",
    "Frank",
    "Tripp",
    "Casey",
    "Fabian",
    "Leonidas",
    "Baker",
    "Matthias",
    "Philip",
    "Jayceon",
    "Kian",
    "Saint",
    "Ibrahim",
    "Jaxton",
    "Augustus",
    "Callen",
    "Trevor",
    "Ruben",
    "Adan",
    "Conor",
    "Dax",
    "Braylen",
    "Kaison",
    "Francis",
    "Kyson",
    "Andy",
    "Lucca",
    "Mack",
    "Peyton",
    "Alexis",
    "Deacon",
    "Kasen",
    "Kamden",
    "Frederick",
    "Princeton",
    "Braylon",
    "Wells",
    "Nikolai",
    "Iker",
    "Bo",
    "Dominick",
    "Moshe",
    "Cassius",
    "Gregory",
    "Lewis",
    "Kieran",
    "Isaias",
    "Seth",
    "Marcos",
    "Omari",
    "Shane",
    "Keegan",
    "Jase",
    "Asa",
    "Sonny",
    "Uriel",
    "Pierce",
    "Jasiah",
    "Eden",
    "Rocco",
    "Banks",
    "Cannon",
    "Denver",
    "Zaiden",
    "Roberto",
    "Shawn",
    "Drew",
    "Emanuel",
    "Kolton",
    "Ayaan",
    "Ares",
    "Conner",
    "Jalen",
    "Alonzo",
    "Enrique",
    "Dalton",
    "Moses",
    "Koda",
    "Bodie",
    "Jamison",
    "Phillip",
    "Zaire",
    "Jonas",
    "Kylo",
    "Moises",
    "Shepherd",
    "Allen",
    "Kenzo",
    "Mohamed",
    "Keanu",
    "Dexter",
    "Conrad",
    "Bruce",
    "Sylas",
    "Soren",
    "Raphael",
    "Rowen",
    "Gunnar",
    "Sutton",
    "Quentin",
    "Jaziel",
    "Emmitt",
    "Makai",
    "Koa",
    "Maximilian",
    "Brixton",
    "Dariel",
    "Zachariah",
    "Roy",
    "Armando",
    "Corey",
    "Saul",
    "Izaiah",
    "Danny",
    "Davis",
    "Ridge",
    "Yusuf",
    "Ariel",
    "Valentino",
    "Jayson",
    "Ronald",
    "Albert",
    "Gerardo",
    "Ryland",
    "Dorian",
    "Drake",
    "Gage",
    "Rodrigo",
    "Hezekiah",
    "Kylan",
    "Boone",
    "Ledger",
    "Santana",
    "Jamari",
    "Jamir",
    "Lawrence",
    "Reece",
    "Kaysen",
    "Shiloh",
    "Arjun",
    "Marcelo",
    "Abram",
    "Benson",
    "Huxley",
    "Nikolas",
    "Zain",
    "Kohen",
    "Samson",
    "Miller",
    "Donald",
    "Finnley",
    "Kannon",
    "Lucian",
    "Watson",
    "Keith",
    "Westin",
    "Tadeo",
    "Sincere",
    "Boston",
    "Axton",
    "Amos",
    "Chandler",
    "Leandro",
    "Raul",
    "Scott",
    "Reign",
    "Alessandro",
    "Camilo",
    "Derrick",
    "Morgan",
    "Julio",
    "Clay",
    "Edison",
    "Jaime",
    "Augustine",
    "Julien",
    "Zeke",
    "Marvin",
    "Bellamy",
    "Landen",
    "Dustin",
    "Jamie",
    "Krew",
    "Kyree",
    "Colter",
    "Johan",
    "Houston",
    "Layton",
    "Quincy",
    "Case",
    "Atreus",
    "Cayson",
    "Aarav",
    "Darius",
    "Harlan",
    "Justice",
    "Abdiel",
    "Layne",
    "Raylan",
    "Arturo",
    "Taylor",
    "Anakin",
    "Ander",
    "Hamza",
    "Otis",
    "Azariah",
    "Leonard",
    "Colby",
    "Duke",
    "Flynn",
    "Trey",
    "Gustavo",
    "Fletcher",
    "Issac",
    "Sam",
    "Trenton",
    "Callahan",
    "Chris",
    "Mohammad",
    "Rayan",
    "Lionel",
    "Bruno",
    "Jaxxon",
    "Zaid",
    "Brycen",
    "Roland",
    "Dillon",
    "Lennon",
    "Ambrose",
    "Rio",
    "Mac",
    "Ahmed",
    "Samir",
    "Yosef",
    "Tru",
    "Creed",
    "Tony",
    "Alden",
    "Aden",
    "Alec",
    "Carmelo",
    "Dario",
    "Marcel",
    "Roger",
    "Ty",
    "Ahmad",
    "Emir",
    "Landyn",
    "Skyler",
    "Mohammed",
    "Dennis",
    "Kareem",
    "Nixon",
    "Rex",
    "Uriah",
    "Lee",
    "Louie",
    "Rayden",
    "Reese",
    "Alberto",
    "Cason",
    "Quinton",
    "Kingsley",
    "Chaim",
    "Alfredo",
    "Mauricio",
    "Caspian",
    "Legacy",
    "Ocean",
    "Ozzy",
    "Briar",
    "Wilson",
    "Forest",
    "Grey",
    "Joziah",
    "Salem",
    "Neil",
    "Remi",
    "Bridger",
    "Harry",
    "Jefferson",
    "Lachlan",
    "Nelson",
    "Casen",
    "Salvador",
    "Magnus",
    "Tommy",
    "Marcellus",
    "Maximo",
    "Jerry",
    "Clyde",
    "Aron",
    "Keaton",
    "Eliam",
    "Lian",
    "Trace",
    "Douglas",
    "Junior",
    "Titan",
    "Cullen",
    "Cillian",
    "Musa",
    "Mylo",
    "Hugh",
    "Tomas",
    "Vincenzo",
    "Westley",
    "Langston",
    "Byron",
    "Kiaan",
    "Loyal",
    "Orlando",
    "Kyro",
    "Amias",
    "Amiri",
    "Jimmy",
    "Vicente",
    "Khari",
    "Brendan",
    "Rey",
    "Ben",
    "Emery",
    "Zyair",
    "Bjorn",
    "Evander",
    "Ramon",
    "Alvin",
    "Ricky",
    "Jagger",
    "Brock",
    "Dakari",
    "Eddie",
    "Blaze",
    "Gatlin",
    "Alonso",
    "Curtis",
    "Kylian",
    "Nathanael",
    "Devon",
    "Wayne",
    "Zakai",
    "Mathew",
    "Rome",
    "Riggs",
    "Aryan",
    "Avi",
    "Hassan",
    "Lochlan",
    "Stanley",
    "Dash",
    "Kaiser",
    "Benicio",
    "Bryant",
    "Talon",
    "Rohan",
    "Wesson",
    "Joe",
    "Noe",
    "Melvin",
    "Vihaan",
    "Zayd",
    "Darren",
    "Enoch",
    "Mitchell",
    "Jedidiah",
    "Brodie",
    "Castiel",
    "Ira",
    "Lance",
    "Guillermo",
    "Thatcher",
    "Ermias",
    "Misael",
    "Jakari",
    "Emory",
    "Mccoy",
    "Rudy",
    "Thaddeus",
    "Valentin",
    "Yehuda",
    "Bode",
    "Madden",
    "Kase",
    "Bear",
    "Boden",
    "Jiraiya",
    "Maurice",
    "Alvaro",
    "Ameer",
    "Demetrius",
    "Eliseo",
    "Kabir",
    "Kellan",
    "Allan",
    "Azrael",
    "Calum",
    "Niklaus",
    "Ray",
    "Damari",
    "Elio",
    "Jon",
    "Leighton",
    "Axl",
    "Dane",
    "Eithan",
    "Eugene",
    "Kenji",
    "Jakob",
    "Colten",
    "Eliel",
    "Nova",
    "Santos",
    "Zahir",
    "Idris",
    "Ishaan",
    "Kole",
    "Korbin",
    "Seven",
    "Alaric",
    "Kellen",
    "Bronson",
    "Franco",
    "Wes",
    "Larry",
    "Mekhi",
    "Jamal",
    "Dilan",
    "Elisha",
    "Brennan",
    "Kace",
    "Van",
    "Felipe",
    "Fisher",
    "Cal",
    "Dior",
    "Judson",
    "Alfonso",
    "Deandre",
    "Rocky",
    "Henrik",
    "Reuben",
    "Anders",
    "Arian",
    "Damir",
    "Jacoby",
    "Khalid",
    "Kye",
    "Mustafa",
    "Jadiel",
    "Stefan",
    "Yousef",
    "Aydin",
    "Jericho",
    "Robin",
    "Wallace",
    "Alistair",
    "Davion",
    "Alfred",
    "Ernesto",
    "Kyng",
    "Everest",
    "Gary",
    "Leroy",
    "Yahir",
    "Braden",
    "Kelvin",
    "Kristian",
    "Adler",
    "Avyaan",
    "Brayan",
    "Jones",
    "Truett",
    "Aries",
    "Joey",
    "Randy",
    "Jaxx",
    "Jesiah",
    "Jovanni",
    "Azriel",
    "Brecken",
    "Harley",
    "Zechariah",
    "Gordon",
    "Jakai",
    "Carl",
    "Graysen",
    "Kylen",
    "Ayan",
    "Branson",
    "Crosby",
    "Dominik",
    "Jabari",
    "Jaxtyn",
    "Kristopher",
    "Ulises",
    "Zyon",
    "Fox",
    "Howard",
    "Salvatore",
    "Turner",
    "Vance",
    "Harlem",
    "Jair",
    "Jakobe",
    "Jeremias",
    "Osiris",
    "Azael",
    "Bowie",
    "Canaan",
    "Elon",
    "Granger",
    "Karsyn",
    "Zavier",
    "Cain",
    "Dangelo",
    "Heath",
    "Yisroel",
    "Gian",
    "Shepard",
    "Harold",
    "Kamdyn",
    "Rene",
    "Rodney",
    "Yaakov",
    "Adrien",
    "Kartier",
    "Cassian",
    "Coleson",
    "Ahmir",
    "Darian",
    "Genesis",
    "Kalel",
    "Agustin",
    "Wylder",
    "Yadiel",
    "Ephraim",
    "Kody",
    "Neo",
    "Ignacio",
    "Osman",
    "Aldo",
    "Abdullah",
    "Cory",
    "Blaine",
    "Dimitri",
    "Khai",
    "Landry",
    "Palmer",
    "Benedict",
    "Leif",
    "Koen",
    "Maxton",
    "Mordechai",
    "Zev",
    "Atharv",
    "Bishop",
    "Blaise",
    "Davian",
  ];

  while (true) {
    playerName = `${names[betterRandom(999)]} ${names[betterRandom(999)]}`;

    const userHappy = confirm(
      `I've Divined that your name is:\n\n${playerName}.\n\nIf this is correct, press ok, otherwise press cancel and I'll try again!`
    );

    if (userHappy) {
      return playerName;
    }
  }
}

function game() {
  // let playerName = prompt("Type in your name: ");
  // playerName = prettifyName(playerName);

  playerName = nameGen();
  const messages = {
    tie: `It's a Tie!`,
    rock: "Rock breaks Scissors!",
    paper: "Paper covers Rock!",
    scissors: "Scissors cuts Paper!",
  };

  const roundScore = {
    [playerName]: {
      player: 0,
      cpu: 0,
      tie: 0,
    },
  };

  alert(`Welcome! You will hereby be known as "${playerName} the Meatbag."`);
  alert(`Let's Play!`);

  const scoreBoard = (scores) =>
    `\n\n--------------------\nMeatbag: ${scores.player}\nThe Machine: ${scores.cpu}\n\nTies: ${scores.tie}\n\n--------------------\n`;

  while (true) {
    let message;

    console.log(scoreBoard(roundScore[playerName]));

    //end game if winner is found
    const findWinner = (scores) => {
      for (const player in scores) {
        if (scores[player] === 3 && player !== "tie") {
          return player;
        }
      }
    };

    switch (findWinner(roundScore[playerName])) {
      case "player":
        return `${playerName} The Meatbag`;
      case "cpu":
        return "The Machine";
    }

    let weaponChoices = chooseWeapon();
    let playerWeapon = weaponChoices[0];
    let cpuWeapon = weaponChoices[1];

    if (playerWeapon === cpuWeapon) {
      message = `It's a Tie!`;
      roundScore[playerName].tie += 1;

      // player win
    } else if (playerWeapon === "Rock" && cpuWeapon == "Scissors") {
      message = `${messages.rock} \n\n Meatbag Scores!`;
      roundScore[playerName].player += 1;
    } else if (playerWeapon === "Paper" && cpuWeapon == "Rock") {
      message = `${messages.paper} \n\nMeatbag Scores!`;
      roundScore[playerName].player += 1;
    } else if (playerWeapon === "Scissors" && cpuWeapon == "Paper") {
      message = `${messages.scissors} \n\nMeatbag Scores!`;
      roundScore[playerName].player += 1;

      // cpu win
    } else if (playerWeapon === "Rock" && cpuWeapon == "Paper") {
      message = `${messages.paper} \n\nThe Machine Scores!`;
      roundScore[playerName].cpu += 1;
    } else if (playerWeapon === "Paper" && cpuWeapon == "Scissors") {
      message = `${messages.scissors} \n\nThe Machine Scores!`;
      roundScore[playerName].cpu += 1;
    } else if (playerWeapon === "Scissors" && cpuWeapon == "Rock") {
      message = `${messages.rock} \n\nThe Machine Scores!`;
      roundScore[playerName].cpu += 1;
    }

    alert(
      `Player used ${playerWeapon}! The Machine struck back with ${cpuWeapon}.\n\n${message}${scoreBoard(
        roundScore[playerName]
      )}`
    );
  }
}

alert(`${game()} has won the game!`);
