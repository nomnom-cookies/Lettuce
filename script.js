// DOM Elements
const monthSelect = document.getElementById('month-select');
const regionSelect = document.getElementById('region-select');
const produceSelect = document.getElementById('produce-select');
const produceGrid = document.getElementById('produce-grid');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const searchInput = document.getElementById('search-input');
const navLinks = document.querySelectorAll('.nav-link');
const homePage = document.getElementById('home-page');
const aboutPage = document.getElementById('about-page');
const banner = document.querySelector('.banner');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeProduceDropdown();
    displayProduce();
    attachEventListeners();
    initializeNavigation();
});

// Initialize Produce dropdown with unique produce items
function initializeProduceDropdown() {
    const uniqueProduce = [...new Set(produceData.map(item => item.name))].sort();
    
    uniqueProduce.forEach(name => {
        const option = document.createElement('option');
        option.value = name.toLowerCase().replace(/\s+/g, '-');
        option.textContent = name;
        produceSelect.appendChild(option);
    });
}

// Attach event listeners
function attachEventListeners() {
    monthSelect.addEventListener('change', displayProduce);
    regionSelect.addEventListener('change', displayProduce);
    produceSelect.addEventListener('change', displayProduce);
    closeBtn.addEventListener('click', closeModal);
    searchInput.addEventListener('input', handleSearch);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Banner scroll effect
    window.addEventListener('scroll', handleBannerScroll);
}

// Navigation handling
function initializeNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            
            // Hide all pages
            homePage.classList.remove('active');
            aboutPage.classList.remove('active');
            
            // Show selected page
            if (page === 'home') {
                homePage.classList.add('active');
            } else if (page === 'about') {
                aboutPage.classList.add('active');
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
}

// Search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        displayProduce();
        return;
    }
    
    const filtered = produceData.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );
    
    displayProduceResults(filtered);
}

// Filter and display produce
function displayProduce() {
    const selectedMonth = monthSelect.value;
    const selectedRegion = regionSelect.value;
    const selectedProduce = produceSelect.value;

    // Filter produce based on selections
    let filteredProduce = produceData.filter(item => {
        const matchesMonth = !selectedMonth || item.months.some(m => m.toLowerCase() === selectedMonth);
        const matchesRegion = !selectedRegion || item.regions.includes(selectedRegion);
        const matchesProduce = !selectedProduce || item.name.toLowerCase().replace(/\s+/g, '-') === selectedProduce;

        return matchesMonth && matchesRegion && matchesProduce;
    });

    // If specific produce is selected, show only that item
    if (selectedProduce) {
        filteredProduce = filteredProduce.slice(0, 1);
    }

    displayProduceResults(filteredProduce);
}

// Display produce results
function displayProduceResults(filteredProduce) {
    produceGrid.innerHTML = '';

    if (filteredProduce.length === 0) {
        produceGrid.innerHTML = '<div class="empty-message">No produce found for your selection. Try adjusting your filters!</div>';
        return;
    }

    filteredProduce.forEach(item => {
        const card = document.createElement('div');
        card.className = 'produce-card';
        card.innerHTML = `
            <div class="produce-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/250?text=${item.name}'">
            </div>
            <div class="produce-name">${item.name}</div>
        `;
        card.addEventListener('click', () => openModal(item));
        produceGrid.appendChild(card);
    });
}

// Open modal with produce information
function openModal(item) {
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalMonths = document.getElementById('modal-months');
    const modalRegion = document.getElementById('modal-region');
    const modalRecipes = document.getElementById('modal-recipes');
    const modalLinks = document.getElementById('modal-links');

    // Populate modal content
    modalTitle.textContent = item.name;
    modalImage.src = item.image;
    modalImage.onerror = function() {
        this.src = `https://via.placeholder.com/250?text=${item.name}`;
    };
    
    modalDescription.textContent = item.description;
    
    // Format months
    const monthsText = item.months.join(', ');
    modalMonths.textContent = monthsText;
    
    // Map region codes to display names
    const regionNames = {
        'san-francisco': 'San Francisco Bay Area',
        'los-angeles': 'Los Angeles Area',
        'san-diego': 'San Diego Area',
        'central-valley': 'Central Valley',
        'inland-empire': 'Inland Empire',
        'coastal-california': 'Coastal California',
        'california-wide': 'Throughout California'
    };
    
    const regionDisplay = item.regions.map(r => regionNames[r] || r).join(', ');
    modalRegion.textContent = regionDisplay;

    // Populate recipes
    modalRecipes.innerHTML = '';
    item.recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.textContent = recipe;
        modalRecipes.appendChild(li);
    });

    // Populate links
    modalLinks.innerHTML = '';
    item.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.title;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        li.appendChild(a);
        modalLinks.appendChild(li);
    });

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Allow closing modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Banner scroll effect - moves up as you scroll
function handleBannerScroll() {
    if (!banner) return;
    
    const scrollTop = window.scrollY;
    const bannerHeight = banner.offsetHeight;
    
    // Move banner up based on scroll position
    if (scrollTop < bannerHeight) {
        banner.style.transform = `translateY(-${scrollTop}px)`;
    } else {
        banner.style.transform = `translateY(-${bannerHeight}px)`;
    }
}

// Clear search when changing filters
monthSelect.addEventListener('change', () => {
    searchInput.value = '';
});

regionSelect.addEventListener('change', () => {
    searchInput.value = '';
});

produceSelect.addEventListener('change', () => {
    searchInput.value = '';
});
