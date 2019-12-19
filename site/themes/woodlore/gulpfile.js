var elixir = require('laravel-elixir');
var theme = 'woodlore';
elixir.config.assetsPath = './';
elixir.config.publicPath = './';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Statamic theme. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass(theme + '.scss', 'css/' + theme + '.css');

    mix.scripts([
        'bootstrap.min.js',
        'jquery.touchSwipe.min.js',
        'bs4-image-slideshow-min.js',
        'lightbox.js',
        'vendor/collage-plus.js',
        'vendor/zoom.js',
        'jabbascripts.js'
    ], './js/woodlore.js');
    mix.browserSync({ proxy: 'staging.woodlore.ca.test'});
});
