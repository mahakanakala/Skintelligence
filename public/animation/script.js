const gridItems = document.querySelectorAll('.griditem');
const wordGrid = document.querySelector('.wordgrid');

gridItems.forEach((item) => {
  // Generate random top and left values
  const randomTop = Math.random() * (wordGrid.offsetHeight - item.offsetHeight);
  const randomLeft = Math.random() * (wordGrid.offsetWidth - item.offsetWidth);

  // Apply random top and left positions
  item.style.top = `${randomTop}px`;
  item.style.left = `${randomLeft}px`;
});
