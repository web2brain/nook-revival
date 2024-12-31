// This represents a sequence of simple tasks that displays
// the book.
//
// Each task is a list -- all the system does is to apply
// the first element to the rest of the list.
//
// There are some pre-defined functions available from the
// engine, and so this becomes a simple-minded interpreter
// that manipulates the screen in (hopefully) simple ways.

e.code =
[
 [e.place_text, "t1",
  "<h3>On August 24, 2006 Pluto was reclassified as a \"dwarf planet.\"</h3>",
  50, 50],
 [e.pause, 3000],
 [e.place_text, "t2",
  "<h3>Outraged letters poured in...</h3>", 50, 100],
 [e.pause, 3000],
 [e.place_image, "i", "pluto_letter1.jpg", 35, 150],
 [e.pause, 10000],
 [e.place_text, "t3",
  "<b>From \"The Pluto Files\", by Neil Tyson</b>", 50, 700],
 [e.pause, 5000],
 [e.remove, "t3"],
 [e.place_image, "i", "pluto_letter2.jpg", 35, 150],
 [e.pause, 10000],
 [e.place_text, "t3",
  "<b>From \"The Pluto Files\", by Neil Tyson</b>", 50, 700],
 [e.pause, 5000],


 [e.clear_all],
 [e.place_image, "i", "mb_med.jpg", 50, 50],
 [e.place_text, "t1",
  "<h3>A year earlier, in January 2005, Mike Brown discovered Eris, an object larger than Pluto.</h3>", 260, 100],
 [e.pause, 6000],

 [e.place_text, "t2",
  "<h3>This started a chain of events that resulted in Pluto's reclassification as a dwarf planet in 2006.</h3>", 260, 200],
 [e.pause, 8000],

 [e.place_text, "t3",
  "<h3>\"Forget names,\" says Mike \"and think for a minute about the structure of our solar system.\"</h3>", 50, 350],
 [e.pause, 6000],

 [e.place_text, "t3",
  "<h3>Imagine you are an alien approaching the solar system from a galaxy far, far away.</h3>", 50, 350],
 [e.pause, 8000],



 [e.clear_all],
 [e.place_image, "i", "s1.png", 0, 0],
 [e.pause, 6000],

 [e.place_text, "t1",
  "<h3>At first, all you'd see is a bright dot, which you might call</h3>",
  50, 625],
 [e.pause, 3000],

 [e.place_text, "t2",
  "<h3>... \"the sun\"</h3>", 50, 650],
 [e.pause, 6000],

 [e.clear_all],
 [e.place_image, "i", "s2_arrows.png", 0, 0],
 [e.place_text, "t1",
  "<h3>You get a bit closer, and notice...</h3>", 50, 625],
 [e.pause, 6000],

 [e.place_text, "t1",
  "<h3>four faint dots circling the sun. And you call them, let's say, &#8220;the gas planets&#8221;.</h3>", 50, 625],
 [e.pause, 6000],

 [e.place_image, "i", "s3_arrows.png", 0, 0],
 [e.place_text, "t1",
  "<h3>Then you get closer still...</h3>", 50, 625],
 [e.pause, 6000],

 [e.place_text, "t1",
  "<h3>and find four even tinier dots circling the sun. And you might call them the &#8220;terrestrial planets&#8221;</h3>", 50, 625],
 [e.pause, 8000],

 [e.clear_all],
 [e.place_image, "i", "s4.png", 0, 0],
 [e.pause, 6000],

 [e.place_text, "t1", "<h3>and looking really hard, you'd discover two faint belts of tiny objects that orbit the sun.</h3>", 50, 625],
 [e.pause, 8000],
 [e.place_text, "t1", "<h3>You might call these the Kuiper belt and the asteroid belt.</h3>", 50, 625],
 [e.pause, 6000],


 [e.place_text, "t2", "<b>&lt;- Pluto</b>", 100, 550],
 [e.pause, 6000],

 [e.place_text, "t1", "<h3>Pluto is <em>tiny</em></h3>", 50, 650],
 [e.pause, 6000],

 [e.clear_all],
 [e.place_image, "i", "compare.jpg", 10, 0],
 [e.pause, 8000],

 [e.place_text, "t1", "<h3>It's so tiny, it is smaller than our moon.</h3>", 50, 350],
 [e.pause, 6000],


 [e.clear_all],
 [e.place_image, "i", "other_kpo.jpg", 10, 0],
 [e.pause, 6000],

 [e.place_text, "t1", "<h3>And there are more objects in the Kuiper belt a lot like it.</h3>", 50, 460],
 [e.pause, 8000],



 [e.clear_all],
 [e.place_image, "i", "mb_med.jpg", 50, 50],
 [e.place_text, "t1", "<h3>\"By any reasonable categorization,\" says Mike, \"there are four groups of things in our solar system\".</h3>", 260, 100],
 [e.pause, 6000],

 [e.place_text, "t2", "<h3>There are the gas planets</h3>", 260, 170],
 [e.pause, 3000],
 [e.place_text, "t2", "<h3>There are the gas planets, the terrestrial planets</h3>", 260, 170],
 [e.pause, 3000],
 [e.place_text, "t2", "<h3>There are the gas planets, the terrestrial planets, the asteroid belt</h3>", 260, 170],
 [e.pause, 3000],
 [e.place_text, "t2", "<h3>There are the gas planets, the terrestrial planets, the asteroid belt and the Kuiper belt.</h3>", 260, 170],
 [e.pause, 6000],

 [e.place_text, "t3", "<h3>And you'd never arbitrarily take one or two objects from the Kuiper belt, and group it together with the planets.</h3>", 260, 240],
 [e.pause, 10000],

 [e.place_text, "t4", "<h2>...like Pluto</h2>", 150, 400],
 [e.pause, 5000],

 [e.place_text, "t5", "<h2>And here it is, in his own words</h2>", 150, 450],
 [e.pause, 3000],


 [e.wakeTouchFor, "30000"],
 [e.pause, 1000],
 [e.media, "mike.mp4"],

 [e.clear_all],
 [e.place_text, "t1", "<div><h1>The End</h1><p>Michael E. Brown is a Professor of Planetary Astronomy at Caltech. I've freely interpreted his lectures and talks as a demonstration of an interesting form of book, and any mistakes that have crept in are my fault, so don't bug him about it :-)</div>", 200, 150]
];

var nooklet = {
  'onMediaStop' : function() {
    e.advance();
  },
  'onKey' : function(code) {
    if ((code == 98) ||
        (code == 96)) {
      e.retreat();
    }
    else {
      e.advance();
    }
  }
};
