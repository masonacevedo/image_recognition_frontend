async function doSearches() {
    console.log("searches have been completed!");
    
    let query = document.getElementById('query-input-box').value;
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    console.log("in doSearches");
    const data = await response.json();
    console.log("data:", data);
    console.log(data[1]);
    console.log(data[2]);
    
    const googleResults = document.getElementById("exa-results");
    for (const key in data){
        const li = document.createElement('li');
        li.innerHTML = data[key];
        const link = document.createElement('a');
        link.href = "https://google.com";
        link.target = "_blank";
        link.textContent = link.href;
        li.appendChild(link);
        googleResults.appendChild(li);
    }
    
}
