$.fn.rainbowify = function () {
	$('head').append(
		'<style type="text/css">'
		+'.rainbowify-red{color:red;}'
        +'.rainbowify-yellow{color:yellow;}'
        +'.rainbowify-orange{color:orange;}'
        +'.rainbowify-green{color:green;}'
        +'.rainbowify-blue{color:blue;}'
        +'.rainbowify-purple{color:purple;}'
        +'.rainbowify-brown{color:brown;}'
        +'.rainbowify-black{color:black;}'
		+'</style>'
	);
	
    var textSelector;
    if (!$(this).attr('id'))
        textSelector = '.' + $(this).attr('class');
    else
        textSelector = '.' + $(this).attr('id');

    var s = $(textSelector).text();
    var rainbowified = '';
    var colors =
        ["rainbowify-red"
        , "rainbowify-yellow"
        , "rainbowify-orange"
        , "rainbowify-green"
        , "rainbowify-blue"
        , "rainbowify-purple"
        , "rainbowify-brown"
        , "rainbowify-black"
        ];
    for (var i = 0, temp = 0; i < s.length; i++, temp++) {
        if (temp >= colors.length)
            temp = 0;
        rainbowified += '<span class="' + colors[temp] + '">' + s[i] + '</span>';
    }
    console.log(rainbowified);
    $(textSelector).html(rainbowified);
}