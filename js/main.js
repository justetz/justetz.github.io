/**
 * Core Javascript File
 */

var colors = {};
var generateColors = function() {
    var colorSchemes = [
        {name: 'BlueSky', custom:true, x_colors: ['#005C97', '#2F3095', '#34357E', '#363795', '#27287E', '#363795'],
            y_colors: ['#03696B', '#023B54', '#03696B', '#16036B', '#03696B', '#08306B', '#0A1354']},
        {name: 'SingleShine', custom:true, x_colors: ['#16036B', '#0A1354', '#696969', '#08306B', '#023B54', '#03696B'],
            y_colors: ['#03696B', '#023B54', '#03696B', '#16036B', '#03696B', '#08306B', '#0A1354']}
        /*{name: 'UluruSunset', custom:true, x_colors: ['#551B10', '#FF512F', '#952F1B', '#A2331E', '#7B2717'],
            y_colors:['#FF512F', '#551B10', '#952F1B', '#551B10', '#A2331E', '#551B10', '#7B2717']},
        {name: 'JungleGreens', custom:true, x_colors: ['#435531', '#CAFF94', '#769556', '#80A25E', '#1F2717'],
            y_colors:['#435531', '#CAFF94', '#769556', '#80A25E', '#1F2717']},
        {name: 'WhoTheHellKnows', custom:true, x_colors: ['#335191', '#52332D', '#1F2B45', '#5D782A', '#73913A'],
            y_colors: ['#335191', '#2D5250', '#453E1F', '#782A6B', '#3E273A']}*/
    ];

    var color_index = Math.floor(Math.random() * colorSchemes.length);

    console.info('The background shown is generated using Trianglify.js, using ' +
        (colorSchemes[color_index].custom ? 'my custom' : 'a') +
        ' color scheme entitled \'' +
        colorSchemes[color_index].name + '\'.');

    //$('body').addClass(colorSchemes[color_index].name);
    colors = colorSchemes[color_index];

};

var generateBG = function() {
    document.body.appendChild(Trianglify({
        width: (window.innerWidth < $('body').width() ? $('body').width() : window.innerWidth) ,
        height: (window.innerHeight+2 < $('body').height() ? $('body').height() : window.innerHeight+2),
        cell_size: 45,
        variance: 0.8,
        x_colors: colors.x_colors,
        y_colors: colors.y_colors
    }).svg());
};

vex.defaultOptions.className = 'vex-theme-flat-attack';
var about_text = '<span class="modal-header">About Me</span><br />' +
    'I am currently studying Computer Science and Information Technology &amp; Web ' +
    'Science at Rensselaer Polytechnic Institute. I am a Student Senator and I ' +
    'participate in several organizations, including the <i>The Poly</i> newspaper,' +
    'Rensselaer Center for Open Source Software, Resident Student Association, ' +
    'Computer Science Club, Web Technologies Group, Student Life Committee, and Hillel.' +
    '<br /><br />' +
    'My current focus is front-end application development. Over the Summer of 2014, ' +
    'I worked as a Javascript Intern for Morgan Stanley, working on their internal AngularJS UI framework.' +
    '<br />' +
    '<span class="credits">Photo adapted from <a href="http://www.flickr.com/photos/paulobar/230134559/">here</a> ' +
    'by tvol, and is licensed under CC BY 2.0.</span>';


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
