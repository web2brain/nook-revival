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
 [e.wakeTouchFor, "15000"],
 [e.fade_text, "t",
  "<h3>Why is Pluto not a planet anymore?</h3>", 100, 30],
 [e.pause, 3000],
 [e.clear_all],
 [e.fade_image, "i", "mb.jpg", 0, 0],
 [e.pause, 2000],
 [e.fade_text, "t", "<h3>Mike Brown, who discovered <span style='text-decoration:line-through;'>Xena</span> Eris</h3>", 100, 0],
 [e.pause, 3000],
 [e.fade_text, "t1", "<h3>Explains why...</h3>", 100, 50],
 [e.pause, 3000],
 [e.fade_text, "t2", "Sit back, and relax ;-)", 250, 120],
 [e.pause, 2000],
 [e.clear_all],
 [e.xcall, "eink", "e.advance()"]
];
