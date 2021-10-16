let backdrop = document.querySelector(".backdrop");
// console.log(backdrop);

let selectPlanButtons = document.querySelectorAll(".plan button");
// console.dir(selectPlanButtons);

let modal = document.querySelector(".modal");

let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    //   modal.className = 'open'        //this will actually overwrite the complete class list

    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

const closeModal = () => {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";
  if (modal) modal.classList.remove("open");
  backdrop.classList.remove("open");
};
let modalNoButton = document.querySelector(".modal__action--negative");

if (modalNoButton) modalNoButton.addEventListener("click", closeModal);

backdrop.addEventListener("click", () => {
  //   mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

toggleButton.addEventListener("click", () => {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
