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
        var albumID = document.getElementById(`${name}`)
        albumID.setAttribute("src", `Images/${name}.png`)
    }
}

populateAlbums()

function addToCart(src) {
    // updates the cart based on the image the user clicked on
    console.log(src) //for debugging

    var imageHeading = document.getElementById('imageHeading')

    imageHeading.innerHTML = `<ul><li><img alt="Album in Cart" src=${src}><li><ul>`

}

//Ran out of time