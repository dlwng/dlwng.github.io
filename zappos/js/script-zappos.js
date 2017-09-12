var facts = [
	"The sound of the llama making groaning noises or going \"mwa\" is often a sign of fear or anger",
	"Llamas can grow as much as 6 feet tall",
	"Llamas know their own limits. If you try to overload a llama with too much weight, the llama is likely to lie down or simply refuse to move",
	"Llamas are vegetarians and have efficient digestive systems",
	"A llama's stomach has three compartments",
	"Llamas live to be about 20 years old",
	"Llamas come in a range of solid and spotted colors including black, gray, beige, brown, red and white (#diversity)",
	"A male llama is called as sire, the female is named as dam, and cria is the name given to baby llama. A group of llamas is called herd",
	"The fibres of llamas are fireproof"
]

function randomfact() {
	var randomNum = Math.floor(Math.random() * facts.length);
	document.getElementById("display-fact").innerHTML = facts[randomNum];
}

$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
		console.log(selectedClass);
     $("#photos").fadeTo(100, 0.1);
		$("#photos img").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#photos").fadeTo(300, 1);
    }, 300); 
    console.log(selectedClass);
		
	});
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "flex"; 
}

