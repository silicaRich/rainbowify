function () {
var s = $('span.text').text();
var rainbowified = '';
var colors =
	["red"
	, "yellow"
	, "orange"
	, "green"
	, "blue"
	, "purple"
	, "brown"
	, "black"
	];
for (var i = 0, temp = 0; i < s.length; i++, temp++) {
    if (temp >= colors.length)
        temp = 0;
    rainbowified += '<span class="' + colors[temp] + '">' + s[i] + '</span>';
}
$('span.text').html(rainbowified);
}