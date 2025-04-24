
  
function filterAmbulances() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filterTypes = Array.from(document.querySelectorAll('.filterType:checked')).map(el => el.value);
    const priceRange = parseInt(document.getElementById('priceRange').value);
    const gallery = document.getElementById('ambulanceGallery');
    const ambulances = gallery.getElementsByClassName('ambulance');

    for (let i = 0; i < ambulances.length; i++) {
        let ambulance = ambulances[i];
        let region = ambulance.getAttribute('data-region').toLowerCase();
        let type = ambulance.getAttribute('data-type');
        let price = parseInt(ambulance.getAttribute('data-price'));

        // Check region, type, and price range filters
        let regionMatch = region.includes(searchInput);
        let typeMatch = filterTypes.length === 0 || filterTypes.includes(type);
        let priceMatch = price <= priceRange;

        if (regionMatch && typeMatch && priceMatch) {
            ambulance.style.display = "";
        } else {
            ambulance.style.display = "none";
        }
    }
}

function sortAmbulances() {
    const gallery = document.getElementById('ambulanceGallery');
    const ambulances = Array.from(gallery.getElementsByClassName('ambulance'));
    const sortPrice = document.getElementById('sortPrice').value;

    // Sort based on price
    if (sortPrice === 'low') {
        ambulances.sort((a, b) => parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price')));
    } else if (sortPrice === 'high') {
        ambulances.sort((a, b) => parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price')));
    }

    // Append sorted ambulances back to the gallery
    ambulances.forEach(ambulance => gallery.appendChild(ambulance));
}

function filterAmbulances() {
    const gallery = document.getElementById('ambulanceGallery');
    const ambulances = Array.from(gallery.getElementsByClassName('ambulance'));
    const sortType = document.getElementById('sortType').value;

    // Sort based on vehicle type
    if (sortType === 'BLS') {
        ambulances.sort((a, b, c) => parseInt(a.getAttribute('data-type')) - parseInt(b.getAttribute('data-type')) - parseInt(c.getAttribute('data-type')));
    }else if (sortType === 'ALS') {
        ambulances.sort((a, b, c) => parseInt(b.getAttribute('data-type')) - parseInt(c.getAttribute('data-type')) - parseInt(a.getAttribute('data-type')));
    }else if (sortType === 'Patient Transport') {
        ambulances.sort((a, b, c) => parseInt(c.getAttribute('data-type')) - parseInt(a.getAttribute('data-type')) - parseInt(b.getAttribute('data-type')));
    }

     // Append sorted ambulances back to the gallery
     ambulances.forEach(ambulance => gallery.appendChild(ambulance));
}

function updatePriceFilter() {
    const priceRangeValue = document.getElementById('priceRange').value;
    document.getElementById('priceRangeValue').innerText = `$${priceRangeValue}`;
    filterAmbulances(); // Re-filter the ambulances based on the new price
}
