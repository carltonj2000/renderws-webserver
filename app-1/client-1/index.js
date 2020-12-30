console.log("javascript loaded");
document.addEventListener("DOMContentLoaded", function () {
  console.log("Document Content Loaded");
  const button = document.querySelector("button");
  button.addEventListener("click", function () {
    console.log("Button clicked");
    fetch("/api/port").then(function (res) {
      console.log("fetched /api/port and got.", res);
    });
  });
});
