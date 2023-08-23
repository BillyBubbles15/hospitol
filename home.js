document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loadingScreen");
  
    // Simulate a delay to demonstrate the effect (replace with your actual content loading logic)
    setTimeout(function () {
        loadingScreen.style.opacity = "0";
        loadingScreen.style.transform = "scale(8)";
        setTimeout(function () {
            loadingScreen.style.display = "none";
            document.body.style.overflow = "auto"; // Enable scrolling after loading screen disappears
        }, 1500);
    }, 800); // Adjust the timeout (in milliseconds) to match your desired delay
    });


    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    const data = [
        'Apple',
        'Banana',
        'Orange',
        'Strawberry',
        'Grapes',
        'Pineapple',
        'Watermelon'
    ];
    
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const suggestedItems = getSuggestedItems(searchTerm);
        
        displaySuggestions(suggestedItems);
    });
    
    function getSuggestedItems(query) {
        return data.filter(item => item.toLowerCase().includes(query));
    }
    
    function displaySuggestions(suggestions) {
        searchResults.innerHTML = '';
        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            searchResults.appendChild(listItem);
        });
    }
    

      


