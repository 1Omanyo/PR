// Get the table element
const table = document.querySelector('table');

// Add an event listener to the table rows
table.addEventListener('click', (e) => {
  if (e.target.tagName === 'TD') {
    // Get the carbohydrate count of the selected meal
    const carbCount = e.target.parentNode.cells[2].textContent;
    console.log(`You selected a meal with ${carbCount}g of carbohydrates.`);
  }
});

// Add an event listener to the links in the Additional Resources section
const links = document.querySelectorAll('h2:nth-child(3) ul li a');
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(`You clicked on ${link.textContent}`);
  });
});