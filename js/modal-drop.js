// ======== Genius List ========

const geniuses = ["Christopher Jones", "Tristan Horton","Trenten Horton","Torian Horton","Gary Parsons Jr.", "Kylee Jones McKinnon",
  "Maurice Wilson","Cameron Vinson", "Brandon Allen", "Troy Simms", "Nehemiah Sowah", "Kaleb Harris"];
/*
const geniuses = [
  "Aiden Hammonds", "Brandon Allen", "Cameron Vinson", "Charles Milburn",
  "Christopher Jones", "Dakari House", "Darien Valentine", "Denard Howard",
  "Gary Parsons", "Jamel King", "John Bishop", "Johnathan Ireland", "Kaleb Harris",
  "Kylees Jones-McKinnon", "Maurice Wilson", "Nehemiah Sowah", "Torian Horton",
  "Trenten Horton", "Tristan Horton", "Troy Simms", "Xavier Robertson",
];
*/

// ======== Genius Data ========
const geniusData = geniuses.reduce((acc, name) => {
  const first = name.split(" ")[0].toLowerCase();
  acc[name] = {
    nickname: first.charAt(0).toUpperCase() + first.slice(1),
    description: `${first} is known for pushing boundaries in creativity.`,
    quote: `"Dreams bend reality." - ${name}`,
    ability: "Adaptability, Vision",
    points: Math.floor(Math.random() * 10),
    division: "The Outbounders",
    animation: "animate__fadeIn",
    image: "https://genshinlab.com/wp-content/uploads/96-Goku-Black-Super-Saiyan-Rose-1080x1080-1.webp",
    colors: {
      start: `hsl(${Math.random() * 360}, 100%, 60%)`,
      end: `hsl(${Math.random() * 360}, 100%, 40%)`
    }
  };
  return acc;
}, {});

// ======== Custom Genius Overrides ========

geniusData["Christopher Jones"] = {
  nickname: "Code name: \"Chris\"",
  description: "Chris stops criminals by throwing numbers at them.",
  quote: `"We are losing the plot." - C. Jones`,
  ability: "Creation, Telekinesis",
  points: 0,
  division: "The Circuit Weavers",
  animation: "animate__fadeInDown",
  image: "https://genshinlab.com/wp-content/uploads/96-Goku-Black-Super-Saiyan-Rose-1080x1080-1.webp",
  colors: {
    start: "rgb(255, 200, 0)",
    end: "rgb(255, 100, 0)"
  }
};

geniusData["Charles Milburn"] = {
  nickname: "Code name: \"AMONEY\"",
  description: "Breathe deeper, move loude. Breath deeper means stay calm, remember of who you are. Move louder means every step you take is a reminder that strength lives inside you ...",
  quote: `"We are losing the plot." - C. Jones`,
  ability: "Creativity, Vision Precision",
  points: 0,
  division: "Tech Artisan",
  animation: "animate__fadeInDown",
  image: "./images/Charles-pic.jpg",
  colors: {
    start: "rgb(17, 0, 255)",
    end: "rgb(255, 0, 81)"
  }
};

geniusData["Darien Valentine"] = {
  nickname: "Code name: \"The All-Rounder\"",
  description: 'Darien uses his technological coding and leadership skills to form his ideal reality and lead his team of Geniuses - The Hidden Vanguardians -  to conquer Baltimore and reign the world.',
  quote: `"Self-reverence, self-knowledge, self-control; these three alone lead life to sovereign power." - Alfred, Lord Tennyson`,
  ability: "Creativity, Unreal IQ",
  points: 0,
  division: "Mastermind",
  animation: "animate__fadeInDown",
  image: "./images/Charles-pic.jpg",
  colors: {
    start: "rgb(17, 0, 255)",
    end: "rgb(255, 0, 0)"
  }
};

geniusData["Maurice Wilson"] = {
  nickname: "Code name: \"6eye User\"",
  description: "Maurice is the strongest sorcerer in today's time. He changed the world from just being born. He's the strongest and has the best abilities of all sorcerers. He is head of the Wilson clan and is a user of the limitless and six eye. The ONLY user in 500 years.",
  quote: `"Confidence isn't about being the loudest in the room. It's about being the realest. It's about walking into any situation and knowing even if I lose, you still can't replace me." - Satoru Gojo`,
  ability: "Drawing Manipulation, Limitless Creativity",
  points: 0,
  division: "Artisan",
  animation: "animate__fadeInDown",
  image: "https://genshinlab.com/wp-content/uploads/96-Goku-Black-Super-Saiyan-Rose-1080x1080-1.webp",
  colors: {
    start: "rgb(255, 200, 0)",
    end: "rgb(255, 100, 0)"
  }
};

geniusData["Kylee Jones McKinnon"] = {
  nickname: "Code name: \"Mikazuchi\"",
  description: "Kylee uses his biograde abilities to bend reality to his will and utilizes his knowledge to help his brothers find their powers.",
  quote: `"Be Careful Who You Trust, People You Know Can Hurt You The Most." - Simon "Ghost" Riley`,
  ability: "Genetic Manipulation, Invisibility",
  points: 0,
  division: "Luchador",
  animation: "animate__fadeInDown",
  image: "./images/Kylee-pic.jpeg",
  colors: {
    start: "rgb(255, 0, 0)",
    end: "rgb(0, 68, 255)"
  }
};

geniusData["Cameron Vinson"] = {
  nickname: "Code name: \"The Heavenly Demon\"",
  description: "The man, the myth, the legend. After being locked away, The Heavenly Demon is finally free, and plans to seek vengeance on his captors.",
  quote: `"Those who stand at the top determine what's wrong and what's right! This very place is neutral ground! Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!" - Doflamingo`,
  ability: "Ito-Ito Nomi, Super Strength ",
  points: 0,
  division: "Luchador",
  animation: "animate__fadeInDown",
  image: "./images/Cameron-pic.jpeg",
  colors: {
    start: "rgb(254, 117, 222)",
    end: "rgb(255, 255, 255)"
  }
};

geniusData["Trenten Horton"] = {
  nickname: "Code name: \"Trent\"",
  description: "Trenten uses his strong tech skills to provide help when it comes to coding. He uses his goofy mode to lighten the mood in moments of stress. He enjoys a lot iof things but helping out is one of them.",
  quote: `"Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up" - Galatians 6:9`,
  ability: "Reality Manipulation, Adaptive Evolution",
  points: 0,
  division: "H3",
  animation: "animate__fadeInDown",
  image: "./images/Trenten-pic.jpg",
  colors: {
    start: "rgb(175, 175, 175)",
    end: "rgb(255, 100, 0)"
  }
};

geniusData["Tristan Horton"] = {
  nickname: "Code name: \"Mr. 475\"",
  description: "Tristan is a young man who lets his physical and mental strength be the essence of his leadership, leading the people who support him.",
  quote: `"I dont stop when I i'm tired I stop when i'm done" - D. Goggins`,
  ability: "Super Strength, Slam Grande",
  points: 0,
  division: "H3",
  animation: "animate__fadeInDown",
  image: "https://qph.cf2.quoracdn.net/main-qimg-d21a47432846300109678d6d66c42b07-lq",
  colors: {
    start: "rgb(255, 0, 0)",
    end: "rgb(128, 128, 128)"
  }
};

geniusData["Torian Horton"] = {
  nickname: "Code name: \"Jody Jo\"",
  description: "Torian goes to Loyola Blakefield, his favorite anime is Naruto,he likes to play 2k - the best game out right now - and the best artist is Drake.",
  quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela`,
  ability: "Crazy Ball Knowledge, Shadow Clones",
  points: 0,
  division: "H3",
  animation: "animate__fadeInDown",
  image: "./images/Torian-pic.jpeg",
  colors: {
    start: "rgb(119, 0, 255)",
    end: "rgb(119, 0, 255)"
  }
};

geniusData["Troy Simms"] = {
  nickname: "Code name: \"Jalen\"",
  description: "Troy plays soccer to win.",
  quote: `"Soccer isn't a game, it's a fight to the death." - T. Simms`,
  ability: "Monstrous Physicality, Super Strength",
  points: 0,
  division: "Barcelona",
  animation: "animate__fadeInDown",
  image: "./images/bluelock.jpg",
  colors: {
    start: "rgb(0, 150, 255)",
    end: "rgb(0, 50, 200)"
  }
};

geniusData["Gary Parsons Jr."] = {
  nickname: "Code name: \"The Monarch\"",
  description: "Gary uses his skills to overcome and dominate challenges by summoning his past mistakes and using them. The power that fuels him is his faith in Jesus Christ...",
  quote: `"I can do all things through Chris who strengths me. - Phillipians 4:13`,
  ability: "Aries/Monarch, The Lord's Strength",
  points: 0,
  division: "Anime Vanguards",
  animation: "animate__fadeInDown",
  image: "./images/Gary-pic.png",
  colors: {
    start: "rgb(137, 205, 253)",
    end: "rgb(231, 110, 255)"
  }
};

geniusData["Nehemiah Sowah"] = {
  nickname: 'Code Name: "The Nimble"',
  description: "Nehemiah is THE best at basketball.",
  quote: `"You can't be afraid to fail. It's the only way you succeed." - Lebron James`,
  ability: "Creativity, Matter Manipulation",
  points: 0,
  division: "Real Madrid",
  animation: "animate__fadeInDown",
  image: "https://i.pinimg.com/564x/0a/f6/d4/0af6d41f65a8c9fb2805955fa1ccece9.jpg",
  colors: {
    start: "rgb(255, 255, 0)",
    end: "rgb(255, 140, 0)"
  }
};

geniusData["Kaleb Harris"] = {
  nickname: "Code Name: \"Headless\"",
  description: "Kaleb uses his charisma and art skills to bend others to his will and show his brothers of Geniuses to silently take over the world and leave all traces behind to show he is the face...",
  quote: `"Adversity makes the strong stronger and the weak weaker" - Mike Tyson`,
  ability: "True Strength",
  points: "Error",
  division: "Real Madrid",
  animation: "animate__fadeInDown",
  image: "./images/headless.jpg",
  colors: {
    start: "rgb(24, 40, 255)",
    end: "rgb(255, 140, 0)"
  }
};

geniusData["Brandon Allen"] = {
  nickname: "Code Name: \"Nuexotic\"",
  description: "Brandon likes strategic and logical games. He is good at math and sometimes likes to run.",
  quote: `""Words are meaningless until they become actions"`,
  ability: "Teleportation, Probability Manipulation",
  points: "0",
  division: "Mathematician",
  animation: "animate__fadeInDown",
  image: "./images/Brandon-pic.jpeg",
  colors: {
    start: "rgb(253, 253, 253)",
    end: "rgb(255, 0, 0)"
  }
};



// ======== DOM Elements ========
const list = document.getElementById("geniusList");
const searchInput = document.getElementById("search");

const playerImage = document.querySelector(".profile-photo");
const playerName = document.querySelector(".player-name");
const playerNick = document.querySelector(".player-nickname");
const playerDesc = document.querySelector(".player-description");
const playerQuote = document.querySelector(".player-quote");
const statAbility = document.querySelector(".player-stats .stat-card:nth-child(1) .stat-caption");
const statPoints = document.querySelector(".player-stats .stat-card:nth-child(2) .stat-caption");
const statDivision = document.querySelector(".player-stats .stat-card:nth-child(3) .stat-caption");

// ======== Display List ========
function displayList(items) {
  list.innerHTML = "";
  if (items.length === 0) {
    list.innerHTML = `<div class="no-results">No geniuses found 😔</div>`;
    return;
  }
  items.forEach((name) => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = name;
    div.addEventListener("click", () => showGeniusInfo(name));
    list.appendChild(div);
  });
}

// ======== Show Genius Info ========
function showGeniusInfo(name) {
  const data = geniusData[name];
  if (!data) return;

  // Update content
  playerName.textContent = name;
  playerNick.textContent = data.nickname;
  playerDesc.textContent = data.description;
  playerQuote.textContent = data.quote;
  statAbility.textContent = data.ability;
  statPoints.textContent = data.points;
  statDivision.textContent = data.division;
  playerImage.src = data.image;

  // Apply gradient only to the genius name
  if (data.colors) {
    playerName.style.background = `linear-gradient(90deg, ${data.colors.start}, ${data.colors.end})`;
    playerName.style.webkitBackgroundClip = "text";
    playerName.style.webkitTextFillColor = "transparent";
  } else {
    // fallback if no gradient is defined
    playerName.style.background = "none";
    playerName.style.webkitTextFillColor = "inherit";
  }

  // Restart animations cleanly
  [playerName, playerNick, playerDesc, playerQuote, playerImage].forEach((el) => {
    el.classList.remove("animate__animated", data.animation);
    void el.offsetWidth; // trigger reflow
    el.classList.add("animate__animated", data.animation);
  });
}

// ======== Search Filter ========
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = geniuses.filter((g) => g.toLowerCase().includes(value));
  displayList(filtered);
});

// ======== Initialize ========
displayList(geniuses);

// ======== Lock list height to prevent layout shift ========
window.addEventListener("load", () => {
  const list = document.getElementById("geniusList");
  const initialHeight = list.offsetHeight;
  list.style.minHeight = `${initialHeight}px`;
});
