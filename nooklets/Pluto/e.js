// This is a simple 'engine' that runs an array of functions.
//
// There are pre-defined functions to simplify common tasks, and
// all it does is just run through the array one after another.

var e = {
  'clear_all': function() {
    $("#stage").empty();
    return 1;
  },

  'index' : 0,

  'wakeTouchFor' : function(msec) {
    nook.wakeTouchFor(msec);
    return 1;
  },

  'pause': function(msec) {
    e.timer = setTimeout(e.advance, msec);
    return 0;
  },

  'place_image': function(name, path, x, y) {
    e.remove(name);
    var nel = $("<img id=\""+name+"\" src=\""+path+"\"></img>");
    nel.css({'position':'absolute', 'top':y, 'left':x});
    $("#stage").append(nel);
    return 1;
  },

  'fade_image': function(name, path, x, y) {
    // first replace any element with this name
    e.remove(name);
    var nel = $("<img id=\""+name+"\" src=\""+path+"\"></img>").hide();
    nel.css({'position':'absolute', 'top':y, 'left':x});
    $("#stage").append(nel);
    nel.fadeIn('slow');
    return 1;
  },

  'place_text': function(name, data, x, y) {
    e.remove(name);
    var nel = $("<div id=\""+name+"\">"+data+"</div>");
    nel.css({'position':'absolute', 'top':y, 'left':x});
    $("#stage").append(nel);
    return 1;
  },

  'fade_text': function(name, data, x, y) {
    e.remove(name);
    var nel = $("<div id=\""+name+"\">"+data+"</div>").hide();
    nel.css({'position':'absolute', 'top':y, 'left':x});
    $("#stage").append(nel);
    nel.fadeIn('slow');
    return 1;
  },

  'remove': function(name) {
    var tmp = $("#"+name);
    if (typeof (tmp) !== undefined) {
      tmp.remove();
    }
    return 1;
  },    

  'media': function(path) {
    nook.playMedia(path);
    return 0;
  },

  'xcall': function(screen, string) {
    if (screen == 'eink') {
      nook.getEink().loadUrl("javascript:("+string+")");
    }
    else if (screen == 'touch') {
      nook.getTouch().loadUrl("javascript:("+string+")");
    }
    return 0;
  },

  'advance': function() {
    nook.ping();
    if (typeof (e.timer) !== undefined) {
      try { clearTimeout(e.timer); }
      catch (e) {}
      e.timer = null;
    }
    if (e.index >= e.code.length) { return; }
    var args = e.code[e.index];
    e.index = e.index+1;
    var f = args[0];
    args.splice(0,1);
    if (f.apply(this, args)) {
      e.timer = setTimeout(e.advance, 0);
    }
  },

  'retreat': function() {
    nook.ping();
    if (e.index == 0) { return; }
    e.index = e.index - 1;
    e.advance();
  }
}
