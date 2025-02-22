# nook Revival
Reviving my Nook Classic from 2009: collecting materials from the now-dead NookDevs wiki and other sources.

![nook with new launcher](n.jpg)

Thanks to
=========

NookDevs (no link, site is dead). Also, [The Wayback Machine](https://web.archive.org/web/) (as the NookDevs site is dead) and the archived Google Code site [nookapps](https://code.google.com/archive/p/nookapps/), especially for the documentation of the nooklets and Trook.

What's in here
==============

Various apps by NookDevs, plus some of my personal customizations.

Who is responsible if the Nook blows up or eats your children if you use this
=============================================================================

You.

(I also never checked the included files for backdoors. I don't really care if someone tries to attack my 6-year-old e-reader that I never connect to public WiFi via APKs that took me the whole evening to collect online. But *do* mind that by rooting the Nook you are giving root access via WiFi to anyone who cares to check.)

What are these things?
======================

As I have stuff in my head and nobody else uses this, I have been too lazy to document things properly. In the unexpected case that you do use this, please ask me to document whatever you need documented.

Rooting the Nook
======

For all and especially newer nooks with serials starting with 1003 and above
----------------------------------------------------------------------------

See [README.md](rooting/README.md) in the rooting directory. This procedure may take quite a few tries, but in the end it worked for me.
The needed files (`adbd.html` and `ratc.bin`) are included in this repo under `rooting/`.

Softroot for older Nooks with serials starting lower than 1003
--------------------------------------------------------------

`softroot` contains the files required for the easy 1st Gen softroot method. Requires serial number beginning with a lower number than 1003. This includes the official 1.0.0 signed update from Barnes and Noble as well as the nookDevs.com (perfinion's) 2.5.1 (B&N:1.5.0) Softroot/ROM file. Also includes the instructions in PDF format from the nookDevs Wayback Machine archive.

These files were originally procured from these URLs but both have been removed meanwhile. The hashes match the NookDevs website.

Original 1.0.0 Firmware (step 1), directly from Barnes & Noble:
http://images.barnesandnoble.com/Presources/download/Nook/signed_bravo_update.1.0.0.dat
SHA1: 84287d73b70e98da6a6af9f362b31e96d4e6eea4

NookDevs.com 2.5.1 Softroot/ROM (step 4):
http://feise.com/~jfeise/Downloads/bravo_update-2.5.1.dat
SHA1: 438d387126530e08de896bb4a4a25e2f2725f430

Apps
====

`apks` contains APKs by NookDevs that I found useful. The following is in there:

- ru.mynook.launcher: a customizable replacement for the original B&N home/launcher
- Home: replaces the original home with a version that does not get in the way of the new launcher, so that the system defaults to the new one
  - this must replace the original Home app -- install by `adb push Home.apk /system/app`
- nookLibrary: a better library
- trook: an awesome RSS reader / file browser / Calibre catalog browser (!!!)
- orion_viewer: better PDF viewer
- nookBrowser: an alternative web browser
- nooklet: container for apps written in HTML+JS :-)
- Music: stock old Android music app, with buttons moved to the touchscreen/arrow keys
- aarddict: [Aard Dictionary](https://github.com/max-kammerer/aarddict_nook/downloads) integrated with Orion Viewer
- ru.mynook.locale: ru/en locale switcher
- [NomadReader](https://github.com/Nomad1/NomadReader): fb2/epub reader
- net.runserver.fileBrowser: library app from the author of NomadReader
- net.runserver.appLauncher: another home/launcher

Also see https://web.archive.org/web/20140109090359/http://nookdevs.com/Application_Directory.  
`orig-apks` collects all original APKs (from firmware 1.7)

Accessing your Calibre collection on the Nook wirelessly
========================================================

1. Run calibre-server somewhere:
   - you can launch it from the GUI on your laptop, but this is not very useful
   - you can run it on a server from the commandline:  
     `calibre-server --port=$PORT --username=$USERNAME --password=$PASSWORD --with-library=$LIBRARY`
   - you probably want to stick it behind a reverse proxy (I like NGINX), so that you can add HTTPS and use the standard port and such
2. install the Trook app
3. if you want two-click access, install a custom root feed with the correct address:
   I have included the default `root.xml` + extra first entry in `customizations/my feeds`; you need to edit your library's parameters and put it into a folder named `my feeds` in the root of the Nook.

   Edit *both* occurences of `https://$USERNAME:$PASSWORD@$HOST:$PORT/stanza`. If you don't use https, change that to http. Hint: Testing the URL in a browser is easier than on device. (You should see an RSS feed if it works.)

   Note: [Let's Encrypt](https://letsencrypt.org/) HTTPS certificates don't work with Trook (too old for that). Coming up with a solution is a WIP. See http://wiki.cacert.org/FAQ/ImportRootCertAndroidPreICS .

My customizations
=================

`customizations` contains

- icons for the launcher that I use
- a new root feed for Trook, including an entry where you should write your Calibre server's address

Just stick any of the subfolders into the root of your Nook to apply it.

Nooklets
=================

`nooklets` contains some nooklets that were published by nookdevs. The provided nooklets are:

- Bonsai
- Hangman
- Hello
- Noodoku
- Pluto

To use them, copy them to the Nooklets folder in the root of the internal storage and install the nooklets APK.

Documentation for creating your own nooklets are available here:
* [Nooklets](documentation/Nooklets.md)
* [NookletGuide](documentation/NookletGuide.md)
* [NookletSpecification](documentation/NookletSpecification.md)

Virus detected?
===============

That's expected -- see [#1](https://github.com/AnotherKamila/nook-revival/issues/1#issuecomment-503560472) for more details.

License
=======

This repository only collects third-party files for convenience. Everything
is licensed by the original authors. These files are licensed under various
open-source licenses, such as Apache 2.0. If you want to build on anything in
this repository, you must find the original licenses.
([The Wayback Machine](https://web.archive.org/web/) may be of use.)

My contributions (if any) are licensed under the MIT license.
