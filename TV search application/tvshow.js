const form = document.querySelector('#Searchform');
const resultsDiv = document.querySelector('#results');
const loader = document.querySelector('#loader');
const themeToggle = document.querySelector('#theme-toggle');

// Search Event Listener
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const searchTerm = form.elements.query.value.trim();
    if (!searchTerm) return alert("Please enter a search term.");

    resultsDiv.innerHTML = ''; // Clear previous results
    loader.classList.remove('hidden'); // Show loader

    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        loader.classList.add('hidden'); // Hide loader
        displayResults(res.data);
    } catch (error) {
        loader.classList.add('hidden'); // Hide loader
        console.error("Error fetching data:", error);
        alert("Failed to fetch results. Please try again.");
    }
});

// Display Results
function displayResults(shows) {
    if (shows.length === 0) {
        resultsDiv.innerHTML = `<p>No results found. Try another search!</p>`;
        return;
    }

    for (let show of shows) {
        const div = document.createElement('div');
        div.classList.add('show-card');

        const img = document.createElement('img');
        img.src = show.show.image ? show.show.image.medium : 'https://via.placeholder.com/210x295';
        img.alt = show.show.name;

        const title = document.createElement('h2');
        title.textContent = show.show.name;

        const summary = document.createElement('p');
        summary.innerHTML = show.show.summary ? show.show.summary.substring(0, 100) + "..." : "No summary available.";

        div.append(img, title, summary);
        resultsDiv.appendChild(div);
    }
}

// Dark Mode Toggle
themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});
