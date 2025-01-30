const searchInput = document.querySelector('#search-input')
const resultsArtists = document.querySelector('#result-artist')
const resultsPlaylist = document.querySelector('#result-playlists')

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_likes=${searchTerm}`
    fetch(url)
        .then((response) => {
            response.json()
        })
        .then((result) => {
            displayResult(result)
        })
}

function displayResult(result) {
    resultsPlaylist.classList.add('hidden')
    const artistName = document.querySelector('#artist-name')
    const artistImage = document.querySelector('#artist-img')

    result.forEach(element => {
        artistName.innerText = element.name
        artistImage.src = element.urlImg
    });

    resultsArtists.classList.remove('hidden')
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase()
    if (searchTerm === '') {
        resultsPlaylist.classList.add('hidden')
        resultsArtists.classList.remove('hidden')
        return
    }
})