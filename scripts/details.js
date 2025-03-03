addEventListener("DOMContentLoaded", async function() {
    //grab the search params from the url after the question mark
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get('id')
    console.log(songID)

    const response = await fetch("https://cyclic-awake-report.glitch.me/api/songs/" + songID)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += song.title 
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html+=
    '<h3>Artist - ' + song.artist + '</h3>' +
    '<p>Popularity - ' + song.popularity + '</p>' +
    '<p>Release Date - ' + song.releaseDate + '</h2>'

    this.document.querySelector("div").innerHTML = html
})
