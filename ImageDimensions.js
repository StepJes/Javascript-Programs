

const img = new Image();


img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';


img.onload = function() {
  console.log('width ' + this.width)
  console.log('height '+ this.height);
}
