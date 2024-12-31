(function () {

  var panels = new Array();
  var curpanelid = 0;

  function slideup()
  {
    if (panels.length <= 0) { return; }
    if ((curpanelid < 0) || (curpanelid >= (panels.length-1))) { return; }

    var a = panels[curpanelid];
    var b = panels[curpanelid+1];

    a.style.webkitTransition = 'all 300ms linear';
    b.style.webkitTransition = '-webkit-transform 300ms linear';
    a.style.webkitTransform = 'translateY(-144px)';
    a.style.opacity = 0;
    b.style.webkitTransform = 'translateY(0px)';
    b.style.opacity = 1;
    curpanelid++;
    setpn();
  }

  function setpn()
  {
    var p = document.getElementById('_prev_button');
    var n = document.getElementById('_next_button');
    if (curpanelid > 0) {
      p.style.opacity = 1.0
    }
    else {
      p.style.opacity = 0;
    }
    if (curpanelid < (panels.length-1)) {
      n.style.opacity = 1.0;
    }
    else {
      n.style.opacity = 0.0;
    }
  }

  function slidedown()
  {
    if (panels.length <= 0) { return; }
    if ((curpanelid <= 0) || (curpanelid >= panels.length)) { return; }

    var a = panels[curpanelid];
    var b = panels[curpanelid-1];

    a.style.webkitTransition = 'all 300ms linear';
    b.style.webkitTransition = '-webkit-transform 300ms linear';
    a.style.webkitTransform = 'translateY(144px)';
    a.style.opacity = 0;
    b.style.webkitTransform = 'translateY(0px)';
    b.style.opacity = 1;
    curpanelid--;
    setpn();
  }

  addEventListener("load", function(ev) {
      var elements = document.all;
      for (var i=0; i<elements.length; i++) {
        var cur = elements[i];
        if (cur.className && (cur.className == "panel")) {
          panels.push(cur);
        }
      }

      if (panels.length <= 0) {
        return;
      }

      panels[0].style.webkitTransform = 'translateY(0px)';
      panels[0].style.opacity = 1.0;
      curpanelid = 0;

      // attach up/down buttons if we have more than one
      // panel
      if (panels.length > 0) {
        var b_prev = document.createElement("button");
        b_prev.appendChild(document.createTextNode(">"));
        b_prev.id = '_prev_button';
        b_prev.className = 'toolbarbutton prev_button';
        b_prev.addEventListener("click", function(ev) { slidedown(); });
        document.body.appendChild(b_prev);
        var b_next = document.createElement("button");
        b_next.appendChild(document.createTextNode("<"));
        b_next.id = '_next_button';
        b_next.className = 'toolbarbutton next_button';
        b_next.addEventListener("click", function(ev) { slideup(); });
        document.body.appendChild(b_next);
      }

    });

 })();
