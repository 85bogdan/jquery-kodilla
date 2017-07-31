$(function(){
	console.log('DOM loaded - you can have fun');


	var spans = $('span')
		
	spans.each(function(element){
		var ignore = ['second', 'third'];
		var id = spans.attr('id');
		if (ignore.indexOf(id) == -1){
			$(element).css('color', 'red');
		}
	});



	var paragraphs = $('p');
	paragraphs.each(function(index, element) {

    	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    	$(element).append(button)

	});

	$("button").click(function(){
		alert($(this).attr("data-tmp"));


	});

});
