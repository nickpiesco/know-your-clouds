Know Your Clouds
================

This started as a school project in 2011, and the task was to bring it up to date and responsivise it. It was also an experiment in using [Grunt](http://gruntjs.com/) to automate tasks for me, following [this awesome 24 Ways post by Chris Coyier](http://24ways.org/2013/grunt-is-not-weird-and-hard/). I initially dipped my toe in by getting Grunt set up to watch and compile my Sass; but then I went whole hog, using it to concatenate and minify my JavaScript and squash my images as well.

I used `low.html`, a typical page, as an example. Minifying the JS saved almost 103K. A lot of the images were already optimised, but those went on a diet too. The [lightbox library I used back then](http://lokeshdhakar.com/projects/lightbox2/) lazily loaded the full-size images &ndash; something I may or may not have appreciated at the time &ndash; but between all the images on the page, I got a total slim-down of about 28K. (I typically output Sass with the `compressed` option, so that was a wash.)

It's not news that minifying JS and compressing images saves space, of course; but thanks to my new friend Grunt, I'm able to do it quickly, painlessly, and automatically.

Stats
-----
- JS before minification: 227,988B
- JS after minification with `grunt-contrib-uglify`: 122,837B *(46% savings)*

- Images before compression: 358,650B
- Images after compression with `grunt-contrib-imagemin`: 330,303B *(8% savings)*

- Original page weight on initial load: 459K (3.08s)

Note
----
One of the modules in `grunt-contrib-imagemin` ran into the Windows path length limit, so that'll have to be installed separately.
