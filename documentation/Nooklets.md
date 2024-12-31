## Nooklets - installing and running

### About Nooklets

Nooklets are applications written entirely in HTML and Javascript. I've cooked up a small system to run nooklets, along with a few sample nooklets to explore some fun ideas. There's a nooklet (about Pluto) that falls somewhere in between a book and a multi-media presentation, an obligatory Sudoku nooklet and so on.

Within the limitations of the webkit version running on the Nook, it's not too shabby, here's a video of how it looks. It's all still fairly new, so please have fun with it and let me know what you think.

This is the Pluto nooklet -- if you are bored by the whole Pluto is a planet controversy, just skip to around minute 4:00 for a little easter egg :-)


http://www.youtube.com/watch?v=Y82oGuezRZ8

This one is more dull to watch, but it gets a little better if you're actually playing it.  I wrote this before the Pluto nooklet, so if you look closely, you'll find some small changes in the icons and so on.

http://www.youtube.com/watch?v=6Mqu5a243ik

### Installing
You need to have [a rooted nook](http://nookdevs.com/Softroot) before you can run nooklets! If you have done this, please download [the sample nooklets](http://nookapps.googlecode.com/files/nooklets.zip) and unzip it to the root of your internal SD card from your PC. When it's over, you should find a folder called `nooklets/` at the root of your internal SD card.

Next, download and install [the Nooklet container apk](http://nookapps.googlecode.com/files/Nooklet-debug.apk) and add it to your launcher. If it all goes well, you should find three sample applications. Many thanks to [JesusFreke](http://jf.andblogs.net/) for letting me pinch his moniker of "Noodoku" for the sudoku application, and to [klaymen](http://odbloc.info/) for designing the Nooklet icon.

### Writing nooklets

Nooklets are just a couple of HTML files -- one for the eink, and one for the touch area. Take a look at the `Hello` application to see how easy it is to create an app. The biggest issue is that the webkit on the Nook doesn't appear to correctly handle mouse down events, so 'active' html elements don't provide feedback they are being pressed. That said, please start with the NookletGuide, and proceed to the NookletSpecification for the gory details.

Enjoy!