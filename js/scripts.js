$(function(){
	//this code will execute after the DOM is loaded
	var carouselList = $("#carousel ul");
	
	function changeSlide (){
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}
	setInterval(changeSlide, 3000);
	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");	
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	
	function backSlide() {
		carouselList.animate({'marginLeft':0}, 500);
	};

	function moveBackSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
		backSlide();
	}
	

	$('#left').click(moveBackSlide)

	$('#right').click(changeSlide);

});