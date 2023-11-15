const colorPicker = document.querySelectorAll('[name="label-main-color"]')[0];

colorPicker.addEventListener("input", (event) => {
  const value = event?.target?.value;
  document.documentElement.style.setProperty("--main-color", value);
});

const currentColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--main-color");

const artworkColors = [currentColor, '#ff5500', '#e6002e', '#7150CE', '#EEBB00', '#2D9ED7'];

const randomColor = artworkColors[Math.floor(Math.random()*artworkColors.length)];

colorPicker.setAttribute("value", randomColor);
document.documentElement.style.setProperty("--main-color", randomColor);

const artworkUpload = document.querySelectorAll('[name="label-artwork"]')[0];
const artworkLeft = document.querySelectorAll(".label-artwork .left")[0];
const artworkRight = document.querySelectorAll(".label-artwork .right")[0];

artworkUpload.addEventListener("change", (event) => {
  const [file] = artworkUpload.files;
  if (file) {
    const backgroundImage = `url(${URL.createObjectURL(file)})`;
    artworkLeft.style.backgroundImage = backgroundImage;
    artworkRight.style.backgroundImage = backgroundImage;
  }
});

const artworkImages = ["gareng", "bagong", "petruk", "semar"];
const randomArtwork =
  artworkImages[Math.floor(Math.random() * artworkImages.length)];
const backgroundImage = `url('./artwork/${randomArtwork}.png')`;

artworkLeft.style.backgroundImage = backgroundImage;
artworkRight.style.backgroundImage = backgroundImage;
