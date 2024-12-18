const checkboxes = document.querySelectorAll('input[name="check"]');
const searchInput = document.getElementById("search");
const products = document.querySelectorAll('.shirt');  

let selectedFilters = {
    occasion: [],
    color: [],
    arrival: []
};

// Function to filter products based on selected filters
function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();

    products.forEach((product) => {
        let matchesFilters = true;

        // Check if product matches selected filters
        for (let filterType in selectedFilters) {
            const filterValues = selectedFilters[filterType];
            const productValue = product.getAttribute(`data-${filterType}`).toLowerCase();

            if (filterValues.length > 0 && !filterValues.includes(productValue)) {
                matchesFilters = false;
                break;  // If any filter does not match, skip the product
            }
        }

        // Check if product matches the search term
        if (matchesFilters && product.textContent.toLowerCase().includes(searchValue)) {
            product.classList.remove('hidden');  // Show product
        } else {
            product.classList.add('hidden');   // Hide product
        }
    });
}

// Event listener for checkbox changes (filtering)
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        // Update the selectedFilters object based on the checked checkboxes
        if (checkbox.checked) {
            const category = checkbox.value.toLowerCase();
            const type = getCategoryType(category);  // Determine whether it's occasion, color, or arrival
            selectedFilters[type].push(category);  // Add to the appropriate filter list
        } else {
            const category = checkbox.value.toLowerCase();
            const type = getCategoryType(category);
            const index = selectedFilters[type].indexOf(category);
            if (index > -1) {
                selectedFilters[type].splice(index, 1);  // Remove from the filter list
            }
        }

        filterProducts();  // Reapply filters after checkbox change
    });
});

// Event listener for search input changes
searchInput.addEventListener("input", () => {
    filterProducts();  
});

// Helper function to determine category type based on the checkbox value
function getCategoryType(value) {
    if (["summer", "beach", "party"].includes(value)) {
        return "occasion";
    } else if (["red", "blue", "white", "green"].includes(value)) {
        return "color";
    } else if (["new", "old"].includes(value)) {
        return "arrival";
    }
    return "";
}
var promo=document.getElementById("promo")
var closebutton=document.getElementById("closebutton")
closebutton.addEventListener("click",function(){
    promo.style.display="none";
})
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")
var menuicon=document.getElementById("menuicon")
closenav.addEventListener("click",function(){
    sidenav.style.left="-50%";
})
menuicon.addEventListener("click",function(){
    sidenav.style.left="0";
})