// populate footer links
const populateFooter = () => {
  fetch(
    "https://cors-anywhere.herokuapp.com/" +
      "http://interview.plaid.com/data/footer.json",
    {
      method: "GET"
    }
  )
    .then(response => response.text())
    .then(data => {
      JSON.parse(data).forEach(column => {
        let categoryName = Object.keys(column)[0];
        let category = document.createElement("div");
        category.classList.add("footer-cat");
        let title = document.createElement("div");
        title.classList.add("cat-title");
        title.innerHTML = categoryName.toUpperCase();
        category.appendChild(title);
        for (let i = 0; i < column[categoryName].length; i++) {
          let link = document.createElement("a");
          link.innerHTML =
            column[categoryName][i][0].toUpperCase() +
            column[categoryName][i].slice(1);
          link.classList.add("cat-link");
          category.appendChild(link);
        }
        document
          .getElementsByClassName("footer-links")[0]
          .appendChild(category);
      });
    })
    .catch(error => {
      console.log(error);
    });
};

populateFooter();