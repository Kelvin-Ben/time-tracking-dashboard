const buttons = document.querySelectorAll(".btn");
4;
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    // make the clicked button active
    setActiveButton(button);

    const period = button.textContent.toLowerCase();

    // fetch and display data based on the buttons data-period attribute
    fetchData(period);
  })
);

function setActiveButton(button) {
  // remove active class from all button
  buttons.forEach((button) => button.classList.remove("btn-active"));

  // add active class to the clicked button
  button.classList.add("btn-active");
}

function fetchData(period) {
  fetch("../dummy-data.json")
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.querySelector(".cards");
      cardContainer.innerHTML = "";

      data.forEach((item) => {
        const cardClass = `card-${item.title.toLowerCase()}`;
        const cardHTML = `
        <div class="card ${cardClass}">
          <img src="./assets/images/icon-${item.title.toLowerCase()}.svg" alt={'${
          item.title
        } photo'} class="logo">
          <div class="card-details">
            <div class="top">
              <h3 class="type">${item.title}</h3>
              <span class="dots">
                <img src="./assets/images/icon-ellipsis.svg" alt="three dots">
              </span>
            </div>
            <div class="time">
              <p class="hours">${item.timeframes[period].current}</p>
              <p class="details"><span class="details-text">Last week</span> - ${
                item.timeframes[period].previous
              }hrs</p>
            </div>
          </div>
        </div>
       `;
        cardContainer.innerHTML += cardHTML;
      });
    });
}
fetchData("daily");
