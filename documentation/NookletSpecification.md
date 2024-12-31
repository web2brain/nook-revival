## Specification for nooklets and their containers


### Nooklets

Nooklets are simply a folder containing (usually) a pair of html files -- one displayed on the touchscreen, and the second on the eink.

A file called `nooklet.xml` must be present in the folder for it to be recognized as a nooklet. This file (for version 1) just contains a version number, as follows.

```xml
<?xml version="1.0" encoding="utf-8"?>
<nooklet xmlns ### "http://schemas.nookdevs.com/nooklet">
  <version>1</version>
</nooklet>
```

Files in a nooklet folder are accessed via a naming convention. If a file called `touch.html` is present, it will be rendered as an HTML file on the touchscreen. If a file called `eink.html` is present, it will be rendered as an HTML file on the eink display. Any referenced files (css, js, images etc) must be loaded from the same folder, using relative URIs.

### Container

The container must place an object called `nook` into the javascript environment of any html file it renders. The `nook` object is the bridge from the container to javascript, and this object must contain the following functions:

`nook.getContainerVersion()` -- returns a decimal number with the version number of the container.

`nook.getEink()` -- returns an `android.widget.WebView` object that points to any rendered eink html page.

`nook.getTouch()` -- returns an `android.widget.WebView` object that points to any rendered touch html page.

You can use the `WebView` instances to call javascript functions across the html pages by calling the `loadUrl("javascript:someFunction()")` method on them.

`nook.writeData(name, value)` -- is a way to save Strings across nooklet invocations.

`nook.readData(name)` -- returns a  string that was stored via `nook.writeData(name, ...)`. If no data is available, a zero-length string is returned.
*Note*: Strings returned from java cannot be directly used, so ensure that you use `""+nook.readData(...)` so it converts into a javascript String.

`nook.log(String tag, String msg)` -- drop something into the android log file.


### Container events

If an html page contains a javascript object named `nooklet` with a function called `nooklet.save`, that function will be called whenever the nooklet is terminated. One use for this is to save any data using `nook.writeData(...)` when the nooklet terminates.

If there's a function in the `nooklet` object called `nooklet.onKey(keycode)`, it will be called whenever any of the left/right buttons are clicked on the Nook. The raw keycodes are passed to the function, and for reference, they are

| Name       | Keycode  |
|------------|----------|
| RIGHT_UP   |    98    |
| RIGHT_DOWN |    97    |
| LEFT_UP    |    96    |
| LEFT_DOWN  |    95    |

