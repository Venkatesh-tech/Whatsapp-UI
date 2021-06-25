const tabs = document.getElementById("nav-tabs");
const tab = tabs.getElementsByClassName("tab");
displayTabs("CHATS");
showMessage();
for (let i = 0; i < tab.length; i++) {
  const tabView = tab[i];
  tabView.addEventListener("click", (e) => {
    for (let i = 0; i < tab.length; i++) {
      const tabItem = tab[i];
      const tabName = tabView.getElementsByTagName("span")[0].innerHTML;
      displayTabs(tabName);
      if (tabItem == tabView) {
        tabItem.classList = ["tab-active tab"];
      } else {
        tabItem.classList = ["tab"];
      }
    }
  });
}
function displayTabs(tabName) {
  const chats = document.getElementById("chats");
  const contacts = document.getElementById("contacts");
  const calls = document.getElementById("calls");
  contacts.style.display = "none";
  chats.style.display = "none";
  calls.style.display = "none";
  if (tabName === "CHATS") {
    chats.style.display = "block";
  } else if (tabName === "CONTACTS") {
    contacts.style.display = "block";
  } else {
    calls.style.display = "block";
  }
}

function showMessage() {
  const data = [
    {
      name: "Keshav jha",
      message: "Exam Details??",
      status: "RECIEVED",
    },
    {
      name: "Avinash",
      message: "Time for our game",
      status: "SENT",
    },
    {
      name: "Bhavani",
      message: "Lets go to mess",
      status: "RECIEVED",
    },
    {
      name: "Vivek",
      message: "What about our project",
      status: "READ",
    },
    {
      name: "Ajay",
      message: "lets meet at canteen",
      status: "READ",
    },
    {
      name: "Shiva",
      message: "bunk the class today??",
      status: "RECIEVED",
    },
    {
      name: "Rahul",
      message: "Okay",
      status: "SENT",
    },
    {
      name: "Naveed",
      message: "Lets do this",
      status: "SENT",
    },
  ];

  const chats = document.getElementById("chats");
  data.forEach((e, i) => {
    let tag = `<div class="chat-row"> <div class="profile-image"> <img src="https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 100
    )}.jpg" alt="${
      e.name
    } Profile Picture" /> </div> <div class="divider"> <div class="profile-details"> <span>${
      e.name
    }</span> <div class="profile-message">`;
    if (e.status === "SENT") {
      tag += `<i class="material-icons">done</i>`;
    } else if (e.status === "READ") {
      tag += `<i class="material-icons" style="color:blue">done_all</i>`;
    }
    tag += `${e.message}</div> </div> <div class="profile-label"> <span>MOBILE</span> </div> </div> </div>`;
    chats.innerHTML += tag;
  });
}
