var span = $("span");
span.each(function(index, el) {
	if(index % 2 == 0) {
		$(el).css('color', 'red');
	};
});

// lub:
// $('span:odd').css('color', 'red');

var paragraphs = $('p');
paragraphs.each(function(index, el) {
	var button = '<button class="btn" data-tmp="' + index + '">Click me!</button>'
	$(el).append(button)
});

$('button').click(function() {
	alert($(this).attr("data-tmp"));
});