const btnProfile = document.querySelector(".btnProfile");
const btnLike = document.querySelector(".like");
const btnRepost = document.querySelector(".repost");
const divLogo = document.querySelector(".logo");
const leftMenu = document.querySelector(".left-menu");

function createLeftElements({ name, adressImage, href }) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.setAttribute("href", href);
  a.textContent = name;
  li.classList.add("left-element");
  li.append(a);
  leftMenu.append(li);
}

document.addEventListener("DOMContentLoaded", () => {
  //Массив элементов левого контекстного меню
  const arrayLeftElem = [
    { name: "Новости", adressImage: "", href: "" },
    { name: "Чаты", adressImage: "", href: "" },
    { name: "Друзья", adressImage: "", href: "" },
    { name: "Фото", adressImage: "", href: "" },
    { name: "Видео", adressImage: "", href: "" },
  ];
  for (const i of arrayLeftElem) {
    console.log(i);
    createLeftElements(i);
  }
});

btnProfile.addEventListener("mouseover", () => {
  btnProfile.style.backgroundColor = "lightgrey";
});
btnProfile.addEventListener("mouseout", () => {
  btnProfile.style.backgroundColor = "";
});

btnLike.addEventListener("mouseover", () => {
  btnLike.style.backgroundColor = "lightgrey";
});
btnLike.addEventListener("mouseout", () => {
  btnLike.style.backgroundColor = "";
});
btnLike.addEventListener("click", () => {
  switch (btnLike.firstElementChild.src) {
    case "http://127.0.0.1:5500/Icons/like-active.png":
      btnLike.firstElementChild.src = "Icons/like.png";
      break;
    case "http://127.0.0.1:5500/Icons/like.png":
      btnLike.firstElementChild.src = "Icons/like-active.png";
      break;
  }
});

btnRepost.addEventListener("mouseover", () => {
  btnRepost.style.backgroundColor = "lightgrey";
});
btnRepost.addEventListener("mouseout", () => {
  btnRepost.style.backgroundColor = "";
});

divLogo.addEventListener("click", () => {
  window.location.href = "index.html";
});
