const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];

function populateAlbums() {
    // loops through image elements and updates their src attribute
    for(var album of albums) {
        var name = album.name
        console.log(name)
        var albumID = document.getElementById(`${name}`)
        albumID.setAttribute("src", `Images/${name}.png`)
    }
}

populateAlbums()
