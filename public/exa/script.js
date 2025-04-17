async function doSearches() {
    console.log("searches have been completed!");
    
    let query = document.getElementById('query-input-box').value;
    const response = await fetch(`/api/google_search?q=${encodeURIComponent(query)}`);
    console.log("in doSearches");
    const data = await response.json();
    console.log("data:", data);
    
    const googleResults = document.getElementById("google-results");
    googleResults.innerHTML = '';
    let count = 0;
    for (const key in data.organic_results){

        const li = document.createElement('li');
        li.innerHTML = '';
        const link = document.createElement('a');
        link.href = data.organic_results[key].link;
        link.target = "_blank";
        link.textContent = link.href;
        li.appendChild(link);
        googleResults.appendChild(li);
        count += 1;
        if (count === 10) {
            break;
        }
    }
    
}
