// showSidebar
function showSidebar(){
  const sideBar = document.querySelector(".sideBar");
  sideBar.style.display = "inline";
}

function hideSidebar(){
  const sideBar = document.querySelector(".sideBar");
  sideBar.style.display = "none";
}




function navigateTo(pageId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  const activeSection = document.getElementById(pageId);
  activeSection.classList.add('active');
}

// search bar funcion
function filterAmbulances() {
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const ambulances = document.querySelectorAll('.ambulance-item');

  ambulances.forEach(ambulance => {
    const region = ambulance.getAttribute('data-region').toLowerCase();
    const type = ambulance.getAttribute('data-type').toLowerCase();
    const cost = ambulance.getAttribute('data-cost');

    // Check if the search query matches the region, type, or cost
    const match = region.includes(searchQuery) || type.includes(searchQuery) || cost.includes(searchQuery);

    // Display only if the match condition is met
    if (match) {
      ambulance.style.display = 'block';
    } else {
      ambulance.style.display = 'none';
    }
  });
}

function sortAmbulances() {
  const sortCriteria = document.getElementById('sort').value;
  const ambulanceList = document.getElementById('ambulanceList');
  const ambulances = Array.from(ambulanceList.getElementsByClassName('ambulance-item'));

  ambulances.sort((a, b) => {
    if (sortCriteria === 'cost') {
      return a.getAttribute('data-cost') - b.getAttribute('data-cost');
    } else if (sortCriteria === 'type') {
      return a.getAttribute('data-type').localeCompare(b.getAttribute('data-type'));
    }
  });

  ambulances.forEach(ambulance => {
    ambulanceList.appendChild(ambulance);
  });
}