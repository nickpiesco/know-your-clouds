Know Your Clouds
================

This started as a school project in 2011, and the task was to bring it up to date and responsivise it. It was also an experiment in using [Grunt](http://gruntjs.com/) to automate tasks for me, following [this awesome 24 Ways post by Chris Coyier](http://24ways.org/2013/grunt-is-not-weird-and-hard/). I initially dipped my toe in by getting Grunt set up to watch and compile my Sass; but then I went whole hog, using it to concatenate and minify my JavaScript and squash my images as well.

I used `low.html`, a typical page, as an example. Minifying the JS saved almost 103K. (I typically output Sass with the `compressed` option, so that was a wash.) A lot of the images were already optimised, but those went on a diet too. The [lightbox library I used back then](http://lokeshdhakar.com/projects/lightbox2/) lazily loaded the full-size images &ndash; something I may or may not have appreciated at the time &ndash; but between all the images on the page, I got a total slim-down of about 28K.

It's not news that minifying JS and compressing images saves space, of course; but thanks to my new friend Grunt, I'm able to do it quickly, painlessly, and automatically.

Stats
-----

###JS
- JS before minification: 227,988B
- JS after minification with `grunt-contrib-uglify`: 122,837B *(46% savings)*

###Images
- Images before compression: 358,650B
- Images after compression with `grunt-contrib-imagemin`: 330,303B *(8% savings)*

###Total
- Original page weight on initial load: 459K (onload: 3.08s)
- New page weight on initial load: 355K (onload: 1.45s) *(23% file size savings, 53% faster load time)*

Notes
-----
- As it turns out, the by-now ancient lightbox library was slightly broken in Chrome, so I had to update it to the latest version. The new, fully-functional version weighs in at 345KB (onload: 1.52s).
- I ran into path length issues checking in the Grunt modules (which isn't always great practice anyway), so this will need an `npm install` after cloning before you can build.
