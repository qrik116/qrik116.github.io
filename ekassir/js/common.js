var options = [1, 2, 3, null, undefined, 'a', 'b', 'c', '', true, false, 31, 42, 53, , function () {}, {}, [], 15, 55, 4];

$(document).ready(function() {
	var template = '<section class="main-wrap"></section>';
	$('body').html(template).find('.main-wrap').html(GetElemets(options));
});

function GetElemets(elements){
	var fullTemplate = '';
	var temp = '', count_row = 0;
	
	for (i = 0; i < elements.length; i++){
	var templateStart = '<div class="element-wrap"><div class="element"><p>';
	var templateEnd = '</p></div></div>';

		switch (toString.call(elements[i])){
			case '[object Number]':
				if (elements[i] % 3 == 0 && elements[i] % 5 == 0)
					templateStart += 'FizzBuzz';
				else if (elements[i] % 5 == 0)
					templateStart += 'Buzz';
				else if (elements[i] % 3 == 0)
					templateStart += 'Fizz';
				else
					templateStart += elements[i];
				break;
			case '[object Null]':
				templateStart += 'elements is null';
				break;
			case '[object Undefined]':
				templateStart += 'elements is undefined';
				break;
			case '[object String]':
				if (elements[i] == '')
					templateStart += 'string is empty';
				else
					templateStart += elements[i];
				break;
			case '[object Boolean]':
				templateStart += elements[i];
				break;
			case '[object Function]':
				templateStart += 'elements is a function';
				break;
			case '[object Object]':
				templateStart += 'elements is an object';
				break;
			case '[object Array]':
				templateStart += 'elements is an array';
				break;
		}
		templateStart += templateEnd;
		temp += templateStart;
		if ((i+1) % 7 == 0 || i == elements.length - 1){
			var wrapTemplate = '<div class="element-row">' + temp + '</div>';
			temp = '';
			fullTemplate += wrapTemplate;
			count_row++;
		}
	}

	return fullTemplate;
}