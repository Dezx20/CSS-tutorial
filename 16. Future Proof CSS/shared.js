let backdrop = document.querySelector(".backdrop");
// console.log(backdrop);

let selectPlanButtons = document.querySelectorAll(".plan button");
// console.dir(selectPlanButtons);

let modal = document.querySelector(".modal");

let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

let ctaButton = document.querySelector(".main-nav__item--cta");

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    //   modal.className = 'open'        //this will actually overwrite the complete class list

    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("open");
    }, 10);
  });
}

const closeModal = () => {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";
  if (modal) modal.classList.remove("open");

  backdrop.style.display = "none";
  mobileNav.style.display = "none";
  setTimeout(() => {
    backdrop.classList.remove("open");
    mobileNav.classList.remove("open");
  }, 0.2);
};
let modalNoButton = document.querySelector(".modal__action--negative");

if (modalNoButton) modalNoButton.addEventListener("click", closeModal);

backdrop.addEventListener("click", () => {
  //   mobileNav.style.display = "none";
  setTimeout(() => {
    mobileNav.classList.remove("open");
  }, 10);
  closeModal();
});

toggleButton.addEventListener("click", () => {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";
  backdrop.style.display = "block";
  mobileNav.style.display = "block";
  setTimeout(() => {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
  }, 10);
});

ctaButton.addEventListener("animationstart", (event) => {
  console.log("Animation started", event);
});

ctaButton.addEventListener("animationend", (event) => {
  console.log("Animation ended", event);
});

ctaButton.addEventListener("animationiteration", (event) => {
  console.log("Animation iteration", event);
});
