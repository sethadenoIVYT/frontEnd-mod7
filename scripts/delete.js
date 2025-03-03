addEventListener("DOMContentLoaded", async function() {
    document.querySelector("#deleteBtn").addEventListener("click", deleteSong)
    getAllSongs()
})

async function getAllSongs() {
    const response = await fetch("https://cyclic-awake-report.glitch.me/api/songs")
    if (response.ok){
        const songs = await response.json()
        let html = ""
        for (let song of songs){
            html += `<option value="${song._id}">${song.title}</option>`
        }
        document.querySelector("#songDropDown").innerHTML = html
    }
    
}

async function deleteSong(){
    //grab id of selected song from the dropdown
    const songID = document.querySelector("#songDropDown option:checked").value
    const response = await fetch("https://cyclic-awake-report.glitch.me/api/songs/" + songID, {
        method: "DELETE"
    })
    if(response.ok){
        alert("Song deleted")
        getAllSongs()        
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot delete song"
    }
}
