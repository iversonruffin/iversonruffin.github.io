// ======== Genius List ========

const geniuses = ["Christopher Jones", "Troy Simms", "Nehemiah Sowah", "Kaleb Harris"];
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
geniusData["Aiden Hammonds"] = {
  nickname: "Ace",
  description: "Aiden bends circuits like poetry. His code hums with rhythm, his logic dances.",
  quote: `"If it blinks, I can make it think." - A. Hammonds`,
  ability: "Code Manipulation, Energy Focus",
  points: 0,
  division: "The Circuit Weavers",
  animation: "animate__fadeInDown",
  image: "https://genshinlab.com/wp-content/uploads/96-Goku-Black-Super-Saiyan-Rose-1080x1080-1.webp",
  colors: {
    start: "rgb(60, 255, 0)",
    end: "rgb(147,15,112)"
  }
};

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

geniusData["Troy Simms"] = {
  nickname: "Code name: \"Jalen\"",
  description: "Troy plays soccer to win.",
  quote: `"Soccer isn't a game, it's a fight to the death." - T. Simms`,
  ability: "Monstrous Physicality, Super Strength",
  points: 0,
  division: "Barcelona",
  animation: "animate__fadeInDown",
  image: "images/bluelock.jpg",
  colors: {
    start: "rgb(0, 150, 255)",
    end: "rgb(0, 50, 200)"
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
  image: "images/headless.jpg",
  colors: {
    start: "rgb(24, 40, 255)",
    end: "rgb(255, 140, 0)"
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
