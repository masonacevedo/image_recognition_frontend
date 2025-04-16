async function doSearches() {
    console.log("searches have been completed!");
    const duckduckgo_url = "https://duckduckgo.com/?q=";
    const url = duckduckgo_url + encodeURIComponent("mason acevedo");
    window.open(url, "_blank");
}
