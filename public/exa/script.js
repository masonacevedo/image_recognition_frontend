async function doSearches() {
    console.log("searches have been completed!");
    
    let query = document.getElementById('query-input-box').value;
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    console.log("in doSearches");
    console.log(response);
}
