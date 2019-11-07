function verticalAnimateSlider(hei) {
  let elm = document.getElementById("verticalSetSlider");
  let noOfUsers = document.getElementById("uptoUsers");
  let price = document.getElementById("price");
  let circle = document.getElementById("circle");
  elm.style.height = hei + "px";
  console.log(hei);
  if (hei == "0") {
    circle.style.display = "none";
  } else {
    circle.style.display = "block";
  }
}
