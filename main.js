///////////////////////////////
//
//					MODAL
//
///////////////////////////////

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var imgTest = document.getElementsByClassName('photos');
var img = (document.getElementsByClassName('image'));
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// We have defined below "onclick" function as strictly part of class "img" because of dot notation.
img.onclick = function(n) 
{
		modal.style.display = "block";
		// "this" is actually the object "img" because of dot notation in the signature of this function.
		// object "img" is a nodelist of all items of class "image", accessible using square bracket notation.
		// "this" refers to the object calling this function, which is a nodelist of "img" html element.
		modalImg.src = this[n].src; 
		modalImg.alt = this.alt;
		// "alt" is text for image if for some reason the viewer cannot get the image to display.
		captionText.innerHTML = this[n].alt;
}

// Get the <span> element that closes the modal, which only exists one of at index 0 of nodelist.
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
		modal.style.display = "none";
}

// Close the modal also by clicking anywhere outside the content.
window.onclick = function(event) {
		if (event.target == modal) {
			  modal.style.display = "none";
		}
}


///////////////////////////////
//
//					BLOG
//
///////////////////////////////

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

// initially n=1, for slideIndex = 1
function showDivs(n) { 
  var i; // looping variable

  var entries = document.getElementsByClassName("blog-entry");
  if (n > entries.length) {slideIndex = 1}

	// loop around back to the front if we reach the end of the scroll
	// x.length is the last slide because we start at 1.
  if (n < 1) {slideIndex = entries.length}

	// turns the display off for non-selected indices
  for (i = 0; i < entries.length; i++) {
     entries[i].style.display = "none";
  }

  var times = document.getElementsByClassName("blog-entry-date");
  if (n > times.length) {slideIndex = 1}
  if (n < 1) {slideIndex = times.length}
  for (i = 0; i < times.length; i++) {
     times[i].style.display = "none";
  }

  entries[slideIndex-1].style.display = "block";
  times[slideIndex-1].style.display = "block";
}






