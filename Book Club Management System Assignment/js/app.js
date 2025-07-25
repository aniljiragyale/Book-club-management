const clubs = [
  {
    id: 1,
    name: "Mystery Maniacs",
    description: "Explore thrilling detective tales and whodunits.",
    cover: "assets/images/mystery.jpg",
    genre: "Mystery",
    maxMembers: 10,
    currentMembers: 6,
    organizer: "Detective Dee"
  },
  {
    id: 2,
    name: "Galactic Reads",
    description: "Science fiction and futuristic adventures await!",
    cover: "assets/images/scifi.jpg",
    genre: "Sci-Fi",
    maxMembers: 8,
    currentMembers: 7,
    organizer: "Captain Nova"
  },
  {
    id: 3,
    name: "Romance Rendezvous",
    description: "Heartfelt love stories and timeless classics.",
    cover: "assets/images/romance.jpg",
    genre: "Romance",
    maxMembers: 12,
    currentMembers: 12,
    organizer: "Juliet"
  },
  {
    id: 4,
    name: "Legends & Lore",
    description: "Myths, dragons, and magical journeys!",
    cover: "assets/images/fantasy.jpg",
    genre: "Fantasy",
    maxMembers: 15,
    currentMembers: 9,
    organizer: "Arwen"
  }
];

function displayClubs() {
  const container = document.getElementById("club-list");
  container.innerHTML = "";
  clubs.forEach(club => {
    const genreClass = `genre-${club.genre.toLowerCase().replace(/\s/g, '')}`;
    const available = club.maxMembers - club.currentMembers;
    container.innerHTML += `
      <div class="club-card ${genreClass}">
        <img src="${club.cover}" alt="${club.name}" />
        <div class="info">
          <h3>${club.name}</h3>
          <p>${club.description}</p>
          <p>👤 Organizer: ${club.organizer}</p>
          <p>🧍‍♂️ Open Spots: ${available}</p>
          <button ${available <= 0 ? "disabled" : ""}>
            ${available > 0 ? "Join Now" : "Full"}
          </button>
        </div>
      </div>
    `;
  });
}
document.addEventListener("DOMContentLoaded", displayClubs);
