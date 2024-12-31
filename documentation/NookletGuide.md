## A guide to writing nooklets

### What's a Nooklet?

A nooklet is an application for the Nook written in HTML and javascript. Nooklets are stored on the Nook, and run locally on the device. It runs within a nooklet container, and the container provides some hooks for the application to interact with the device through javascript.

### Getting Started

Make sure you've installed [http://nookapps.googlecode.com/files/Nooklet-debug.apk the nooklet container application] and add it to your app launcher. Please also download [http://nookapps.googlecode.com/files/nooklets.zip the sample nooklets] and unzip it to the root of your internal SD card from your PC. You should see a folder called `nooklets/` appear at the root of your internal SD card when you're done unzipping.

### Your first nooklet

Create a new folder called `Easy` on your PC. Within this folder, create a new file called `nooklet.xml` that looks like this

```xml
<?xml version="1.0" encoding="utf-8"?>
<nooklet
    xmlns = "http://schemas.nookdevs.com/nooklet">
  <version>1</version>
</nooklet>
```
All this does is to create a blank nooklet that's visible from the nooklet container. To test it out, mount your nook.

The nooklet container currently expects to find a folder called `nooklets/` at the root of your internal SD card. If you've unzipped the sample nooklets, this folder should already be present. If not, just create a folder called `nooklets/` at the root of your internal SD card, and copy the `Easy/` folder underneath it. When you are done, you should have a folder structure like this:

    nooklets/
      Easy/
        nooklet.xml

That's it!

Unmount the nook, and run the nooklet application. You should see a new item called `Easy` appear in it. Click on it -- you should see a blank screen.

A nooklet is structured as a folder containing an xml file named `nooklet.xml`. If the folder contains an html file called `touch.html`, it will appear on the touchscreen area. If it contains an html file called `eink.html`, it will appear on the eink display, and that's all there is to it.

Create a file called `touch.html` under the `Easy` folder which looks like this.

```html
<html><head><title>touch</title></head>
<body>
<button>Nooklet</button>
</body>
</html>
```

and create a file called `eink.html` under the `Easy` folder which contains

```html
<html><head><title>eink</title></head>
<body>
<h1>Hello, world!</h1>
</body>
</html>
```

and copy these two files under the `Easy` folder on the Nook.

Restart the `Easy` nooklet, and you should now see a button on the touchscreen, and a message on the eink display.

*Note:* there's a bug in the webkit implementation on the nook -- it does not correctly handle mousedown events. The net result is that your button (or any active element actually) will appear to be unresponsive. I'm sorry this is the situation; but that's the way it is.

The nooklet container will provide hooks for you to interact with the device via a javascript object named `nook`. Please see the NookletSpecification for what is currently available.

Update your `eink.html` file to provide a way to change the message.

```html
<html><head><title>eink</title>
<script type="text/javascript">
function message(m) {
  document.getElementById("msg").innerHTML = m;
}
</script>
</head>
<body>
<h1 id="msg">Hello, world!</h1>
</body>
</html>
```

and update your `touch.html` file to call the method in the `eink.html` file. The `nook` object provides access to the [http://developer.android.com/reference/android/webkit/WebView.html WebView] control, and you can use the `loadUrl` method to call javascript methods within that WebView.

```html
<html><head><title>touch</title>
<script type="text/javascript">
function change() {
  nook.getEink().loadUrl("javascript:message('Goodbye!')");
}
</script>
</head>
<body>
<button onClick="change()">Nooklet</button>
</body>
</html>
```

Update these files on the Nook, and restart the Easy application.

### Going forward
Please take a look at the sample applications, the Noodoku code should give you a sense for what is feasible. A lot of things are still lacking, for example a standard way to style your widgets so you can avoid the tedium of managing the screens. Please take a look at the Noodoku application (TODO: bundle this into a starter-nooklet.zip file.) You should look at the NookletSpecification for details about how to work with the container.