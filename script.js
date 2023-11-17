
const draggableSection = document.getElementById("draggable-section");
const imgElements = document.querySelectorAll("#draggable-section img");

let isDragging = false;
let startPositionX, scrollLeft;

// Function to handle touch events
function handleTouchStart(e) {
  isDragging = true;
  startPositionX = e.touches[0].pageX - draggableSection.offsetLeft;
  scrollLeft = draggableSection.scrollLeft;
  draggableSection.style.cursor = "grabbing";
}

function handleTouchMove(e) {
  if (!isDragging) return;
  const newX = e.touches[0].pageX - draggableSection.offsetLeft;
  const distanceX = newX - startPositionX;
  draggableSection.scrollLeft = scrollLeft - distanceX;
}

function handleTouchEnd() {
  isDragging = false;
  draggableSection.style.cursor = "grab";
}

// Prevent default drag-and-drop behavior for all img elements
imgElements.forEach((imgElement) => {
  imgElement.addEventListener("mousedown", (e) => {
    e.preventDefault();
  });
});

// Add event listeners for both mouse and touch events
draggableSection.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPositionX = e.pageX - draggableSection.offsetLeft;
  scrollLeft = draggableSection.scrollLeft;
  draggableSection.style.cursor = "grabbing";
});

draggableSection.addEventListener("mouseup", () => {
  isDragging = false;
  draggableSection.style.cursor = "grab";
});

draggableSection.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const newX = e.pageX - draggableSection.offsetLeft;
  const distanceX = newX - startPositionX;
  draggableSection.scrollLeft = scrollLeft - distanceX;
});

draggableSection.addEventListener("mouseleave", () => {
  isDragging = false;
  draggableSection.style.cursor = "grab";
});

// Add touch event listeners
draggableSection.addEventListener("touchstart", handleTouchStart);
draggableSection.addEventListener("touchmove", handleTouchMove);
draggableSection.addEventListener("touchend", handleTouchEnd);

window.onload= function () {
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');
  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const expandableHeaders = document.querySelectorAll('.expandable');

  expandableHeaders.forEach((header) => {
    header.addEventListener('click', function () {
      const submenu = this.nextElementSibling;
      submenu.classList.toggle('active');
    });
  });
});





