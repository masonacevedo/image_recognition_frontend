async function doSearches() {
    console.log("searches have been completed!");
    let query = document.getElementById('query-input-box').value;
    if (query === ''){
        return
    }

    const google_response = await fetch(`/api/google_search?q=${encodeURIComponent(query)}`);
    const google_data = await google_response.json();
    displayGoogleResults("google-results", google_data);

    const exa_response = await fetch(`/api/exa_search?q=${encodeURIComponent(query)}`);
    const exa_data = await exa_response.json();
    displayExaResults("exa-results", exa_data);
}

function displayExaResults(htmlResultsId, data){
    const results = document.getElementById(htmlResultsId);
    results.innerHTML = '';
    let count = 0;
    for (const key in data.results){
        console.log("key:", key);
        const li = document.createElement('li');
        li.innerHTML = '';
        const link = document.createElement('a');
        link.href = data.results[key].url;
        link.target = "_blank";
        link.textContent = link.href;
        li.appendChild(link);
        results.appendChild(li);
        count += 1;
        if (count === 10) {
            break;
        }
    }
}

function displayGoogleResults(htmlResultsId, data){
    const results = document.getElementById(htmlResultsId);
    results.innerHTML = '';
    let count = 0;
    for (const key in data.organic_results){
        const li = document.createElement('li');
        li.innerHTML = '';
        const link = document.createElement('a');
        link.href = data.organic_results[key].link;
        link.target = "_blank";
        link.textContent = link.href;
        li.appendChild(link);
        results.appendChild(li);
        count += 1;
        if (count === 10) {
            break;
        }
    }
}
