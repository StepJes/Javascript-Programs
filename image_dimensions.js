function getImageDimensions() {
    // Get the image
    let myImg = document.querySelector("#cat-div");
    let dimensions = {
        width: myImg.clientWidth,
        height: myImg.clientHeight
    }
    return dimensions;
}

console.log(getImageDimensions());