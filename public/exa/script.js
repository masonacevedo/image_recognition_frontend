async function doSearches() {


    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';  // show spinner

    try {
        document.getElementById("exa-results").innerHTML = '';
        document.getElementById("google-results").innerHTML = '';

        let query = document.getElementById('query-input-box').value;
        if (query === ''){
            return
        }

        const [google_response, exa_response] = await Promise.all([
            fetch(`/api/google_search?q=${encodeURIComponent(query)}`),
            fetch(`/api/exa_search?q=${encodeURIComponent(query)}`)
        ]);

        const [google_data, exa_data] = await Promise.all([
            google_response.json(),
            exa_response.json()
        ]);

        let google_links = getGoogleResults(google_data);
        let exa_links = getExaResults(exa_data);

        const smallerLength = Math.min(google_links.length, exa_links.length);

        google_links = google_links.slice(0, smallerLength);
        exa_links = exa_links.slice(0, smallerLength);

        displayResults("exa-results", exa_links);
        displayResults("google-results", google_links);
    } catch (err) {
        console.error("Search failed:", err);
        alert("Something went wrong. Check the console.");
    } finally {
        spinner.style.display = 'none'; // hide spinner
    }
}

function displayResults(htmlResultsId, queryLinks){
    const results = document.getElementById(htmlResultsId);
    results.innerHTML = '';
    let count = 0;
    for (const queryLink of queryLinks){
        const li = document.createElement('li');
        li.innerHTML = '';
        
        const link = document.createElement('a');
        link.href = queryLink;
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

function getExaResults(data){
    ans = [];
    for (const key in data.results){
        ans.push(data.results[key].url)
    }
    return ans;
}

function getGoogleResults(data){
    ans = [];
    for (const key in data.organic_results){
        ans.push(String(data.organic_results[key].link));
    }
    return ans;
}
