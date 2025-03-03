addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#updateBtn").addEventListener("click",updateSong)
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get('id')
    const response = await fetch("https://cyclic-awake-report.glitch.me/api/songs/" + songID)
    if(response.ok){
        let song = await response.json()
        document.querySelector("#title").value = song.title,
        document.querySelector("#artist").value = song.artist,
        document.querySelector("#released").value = new Date(song.releaseDate.substring(0,10)).toJSON()
        document.querySelector("#popularity").value = song.popularity,
        document.querySelector("#genre").value = song.genre 
    }
})
async function updateSong() {
    // Create a song object from the form fields
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get('id')
    const song = {
       _id: songID,
       title: document.querySelector("#title").value,
       artist: document.querySelector("#artist").value,
       releaseDate: document.querySelector("#released").value,
       popularity: document.querySelector("#popularity").value,
       genre: document.querySelector("#genre").value ? 
          document.querySelector("#genre").value.split(",") : []
    };
         
     // Send PUT request with JSON-encoded song to Music API
    const response = await fetch("https://cyclic-awake-report.glitch.me/api/songs" + songID, {
       method: "PUT",
       headers: {
          "Content-Type": "application/json"
       },
       body: JSON.stringify(song)
    });
 
    if (response.ok) {      
       alert("Updated song.");
    }
    else {
       document.querySelector("#error").innerHTML = "Cannot update song.";
    }     
 }
