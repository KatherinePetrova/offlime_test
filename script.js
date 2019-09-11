let opened = false;

function openBurger(element) {
  console.log("burger");
  opened = !opened;
  element.classList.toggle("changed");

  let popup = document.getElementById("popup");
  popup.classList.toggle("opened");

  let header__content = document.getElementById("header__content");
  header__content = header__content.childNodes;
  console.log(header__content);

  for (let i = 0; i < header__content.length; i++) {
    if (
      header__content[i].classList &&
      !header__content[i].className.includes("phone") &&
      !header__content[i].className.includes("burger")
    ) {
      header__content[i].classList.toggle("bur_on");
    }
  }

  let popup_content = document.getElementById("popup__content");
  let popup__footer = document.getElementById("popup__footer");
  setTimeout(() => {
    popup_content.classList.toggle("popup__content__open");
    popup__footer.classList.toggle("popup__content__open");
  }, 100);
}

window.addEventListener("scroll", function() {
  if (opened) {
    let burger = document.getElementById("burger");
    openBurger(burger);
  }
});
