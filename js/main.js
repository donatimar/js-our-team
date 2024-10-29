// Array dei membri iniziali del team
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// Genero e mostro le card di tutti i membri del team
const cardsContainerEl = document.getElementById("cards-container");

function displayTeamMembers() {
  cardsContainerEl.innerHTML = "";

  for (let index = 0; index < teamMembers.length; index++) {
    const element = teamMembers[index];
    cardsContainerEl.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div class="my_card">
                <img class="img-fluid card-image mb-3" src="${element.img}" alt="foto di ${element.name}">
                <div class="card-description p-2">
                    <h3 class="card-name mb-1">${element.name}</h3>
                    <p class="card-role mb-1">${element.role}</p>
                    <p class="card-email mb-3">${element.email}</p>
                </div>
            </div>
        </div>`;
  }
}

displayTeamMembers();

// Aggiungo un nuovo membro
document.getElementById("add-member-btn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;

  if (name && role && email) {
    teamMembers.push({
      name: name,
      role: role,
      email: email,
      img: "",
    });

    displayTeamMembers();

    document.getElementById("add-member-form").reset();
  } else {
    alert("CSompila tutti i campi");
  }
});
