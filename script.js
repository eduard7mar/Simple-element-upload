const showMoreStyles = (trigger, styles) => {
  const cards = document.querySelectorAll(styles),
    btn = document.querySelector(trigger);

  btn.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("hidden");
      card.classList.add("show");
    });
    btn.remove();
  });
};

showMoreStyles(".button-styles", ".hidden");