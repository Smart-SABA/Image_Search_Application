const search = document.querySelector("#search-box");
const images = document.querySelectorAll(".container .image-box");
const lang = document.getElementById("language");
count = 0;

function myWholeProgram() {
  if (lang.value == "english") {
    search.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
        let searchValue = search.value,
          value = searchValue.toLowerCase();
        // console.log(value);
        images.forEach((image) => {
          if (value != image.dataset.name) {
            document.getElementById("resultSpan").innerText =
              "No results found for " +
              value +
              " " +
              " -- try another keyword!";
          }
        });
        images.forEach((image) => {
          if (value === image.dataset.name) {
            count++;
            document.getElementById("resultSpan").innerText =
              "You search for " +
              value +
              " " +
              "returned " +
              count +
              " " +
              "results : ";
            return (image.style.display = "block");
          }
          count = 0;
          image.style.display = "none";
        });
      }
    });
  }
}

myWholeProgram();

search.addEventListener("keyup", () => {
  if (search.value != "") return;

  images.forEach((image) => {
    image.style.display = "none";
  });
});

function img_search() {
  let searchValue = search.value,
    value = searchValue.toLowerCase();
  console.log(value);
  images.forEach((image) => {
    if (value != image.dataset.name) {
      document.getElementById("resultSpan").innerText =
        "No results found for " + value + " " + " -- try another keyword!";
    }
  });
  images.forEach((image) => {
    if (value === image.dataset.name) {
      count++;
      document.getElementById("resultSpan").innerText =
        "you search for " + value + " " + "returned " + count + " " + "results";
      return (image.style.display = "block");
    }
    count = 0;
    image.style.display = "none";
  });
}
