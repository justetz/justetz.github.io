/**
 * Core Javascript File
 */

var colors = {};

vex.defaultOptions.className = 'vex-theme-flat-attack';
var about_text = '';

var shuffle = function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

var generateColors = function () {
    var colorSchemes = [
        /*{
            name: 'BlueSky',
            custom: true,
            x_colors: shuffle(['#03696B', '#023B54', '#16036B', '#08306B', '#0A1354']),
            y_colors: shuffle(['#005C97', '#2F3095', '#34357E', '#363795', '#27287E'])
        },*/
        {
            name: 'SingleShine',
            custom: true,
            x_colors: shuffle(['#16036B', '#0A1354', '#696969', '#08306B', '#023B54', '#03696B']),
            y_colors: shuffle(['#03696B', '#023B54', '#16036B', '#08306B', '#0A1354', '#005C97', '#2F3095', '#34357E', '#363795', '#27287E'])
        },
        {
            name: 'UluruSunset',
            custom: true,
            x_colors: shuffle(['#551B10', '#FF512F', '#952F1B', '#A2331E', '#7B2717']),
            y_colors: shuffle(['#FF512F', '#551B10', '#952F1B', '#551B10', '#A2331E', '#551B10', '#7B2717'])
        },
        {
            name: 'JungleGreens',
            custom: true,
            x_colors: shuffle(['#435531', '#CAFF94', '#769556', '#80A25E', '#1F2717']),
            y_colors: shuffle(['#435531', '#CAFF94', '#769556', '#80A25E', '#1F2717'])
        },
        {
            name: 'WhoTheHellKnows',
            custom: true,
            x_colors: shuffle(['#335191', '#52332D', '#1F2B45', '#5D782A', '#73913A']),
            y_colors: shuffle(['#335191', '#2D5250', '#453E1F', '#782A6B', '#3E273A'])
        },
        {
            name: 'YlOrRd',
            custom: false,
            x_colors: shuffle(["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]),
            y_colors: shuffle(["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"])
        },
        {
            name: 'Spectral',
            custom: false,
            x_colors: shuffle(["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"]),
            y_colors: shuffle(["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"])
        }
    ];

    var color_index = Math.floor(Math.random() * colorSchemes.length);

    console.info('The background shown is generated using Trianglify.js, using ' +
        (colorSchemes[color_index].custom ? 'my custom' : 'a') +
        ' color scheme entitled \'' +
        colorSchemes[color_index].name + '\'.');

    //$('body').addClass(colorSchemes[color_index].name);
    colors = colorSchemes[color_index];

    about_text = '<span class="modal-header">About Me</span><br />' +
    'I am currently studying Computer Science and Information Technology &amp; Web ' +
    'Science at Rensselaer Polytechnic Institute. I am a Student Senator and I ' +
    'participate in several organizations, including the <i>The Poly</i> newspaper, ' +
    'Rensselaer Center for Open Source Software, Resident Student Association, ' +
    'Computer Science Club, Web Technologies Group, Student Life Committee, and Hillel.' +
    '<br /><br />' +
    'My current focus is front-end application development. Over the Summer of 2014, ' +
    'I worked as a Javascript Intern for Morgan Stanley, working on their internal AngularJS UI framework. ' +
    '<br />' +
    '<p class="credits">The background shown is generated using ' +
        '<a class="credit-link" href="http://qrohlf.com/trianglify/">Trianglify.js</a>, using ' +
        (colors.custom ? 'my custom' : 'a') + ' color scheme entitled \'' + colors.name + '\'.' + '</p>';
};

var generateBG = function () {
    $('svg').remove();
    document.body.appendChild(Trianglify({
        width: (window.innerWidth < $('html').width() ? $('html').width() : window.innerWidth),
        height: (window.innerHeight + 2 < $('html').height() ? $('html').height() : window.innerHeight + 2),
        cell_size: 45,
        variance: 0.8,
        x_colors: colors.x_colors,
        y_colors: colors.y_colors
    }).svg());
};

$(window).resize(function () {
    generateBG();
});

$(document).ready(function () {
    generateColors();
    generateBG();
    var taglines = ['RPI \'18, Computer Science', 'RPI \'18, IT & Web Science', 'Web Developer', 'AngularJS = <3'];
    var slogan_dom = $('#slogan');

    var current_index = Math.floor(Math.random() * taglines.length);
    slogan_dom.text(taglines[current_index]);
    setInterval(function () {
        var new_index = current_index;
        while (new_index == current_index) {
            new_index = Math.floor(Math.random() * taglines.length);
        }

        slogan_dom.fadeOut(700, function () {
            $(this).text(taglines[new_index]).fadeIn(700);
            current_index = new_index;
        });
    }, 5000);
});
