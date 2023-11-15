const ARTWORK_IMAGES = ["petruk", "togog", "gareng", "bagong", "semar"];
const ARTWORK_COLORS = ["#ff5500", "#e6002e", "#7150CE", "#EEBB00", "#2D9ED7"];

// Elements
const artworkUpload = document.querySelector('[name="label-artwork"]');
const artworkLeft = document.querySelector(".label-artwork .left");
const artworkRight = document.querySelector(".label-artwork .right");
const colorPicker = document.querySelector('[name="label-main-color"]');

/**
 * Sets the main color variable in the document style.
 * @param {string} color - The color value to set.
 */
const setMainColor = (color) => {
  document.documentElement.style.setProperty("--main-color", color);
};

/**
 * Returns a random element from the given array.
 * @param {Array} array - The array from which to get a random element.
 * @returns {*} - A random element from the array.
 */
const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

/**
 * Handles the color change event and updates the main color.
 * @param {Event} event - The color change event.
 */
const handleColorChange = (event) => {
  const value = event?.target?.value;
  setMainColor(value);
};

/**
 * Initializes the color-related functionality.
 */
const initializeColors = () => {
  colorPicker.addEventListener("input", handleColorChange);

  const currentColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--main-color");
  const randomColor = getRandomElement([...ARTWORK_COLORS, currentColor]);

  colorPicker.setAttribute("value", randomColor);
  setMainColor(randomColor);
};

/**
 * Handles the artwork upload event and updates the background images.
 * @param {Event} event - The artwork upload event.
 */
const handleArtworkUpload = (event) => {
  const [file] = event.target.files;
  if (file) {
    const backgroundImage = `url(${URL.createObjectURL(file)})`;
    artworkLeft.style.backgroundImage = backgroundImage;
    artworkRight.style.backgroundImage = backgroundImage;
  }
};

/**
 * Initializes the artwork-related functionality.
 */
const initializeArtwork = () => {
  artworkUpload.addEventListener("change", handleArtworkUpload);

  const randomArtwork = getRandomElement(ARTWORK_IMAGES);
  const backgroundImage = `url('./artwork/${randomArtwork}.png')`;

  artworkLeft.style.backgroundImage = backgroundImage;
  artworkRight.style.backgroundImage = backgroundImage;
};

/**
 * Initializes the entire application by calling color and artwork initialization functions.
 */
const initialize = () => {
  initializeColors();
  initializeArtwork();
};

// Initial call to set up the application.
initialize();
