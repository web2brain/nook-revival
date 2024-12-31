## Trook Documentation

### Using Trook

#### How do I load a feed of my choice?

Tap on the little gear looking icon on the title bar, and enter the URL to the feed you want to load.

#### How do I bookmark this feed?

Long-click on the gear icon, and you'll find a menu that lets you bookmark the current URL. The bookmark will go into your "my feeds" area, which is accessible from the Trook root screen.
By the way, a bookmark is just a text file with the suffix `.bookmark` so feel free to create more bookmarks and upload them through USB.

#### Where do my downloads go, and how can I change it?

By default (from Trook rev38 onward) books (epubs, pdfs and pdb files) are downloaded under `my documents/Downloads/` while music file go under `my music/Downloads/` and apk packages go under `my packages/`.  Please see the answer to the next question on how to change this path.

#### How do I change the default settings for Foo

I haven't (yet) provided a straightforward for you to change settings, but in the interim  (from Trook rev38 onwards) you can at least edit the preferences xml file on the Nook to taste, as follows.

Connect over `adb` and copy `/data/data/com.kbs.trook/TrookPreferences.xml` locally somewhere. I run something like
```bash
adb pull /data/data/com.kbs.trook/TrookPreferences.xml TrookPreferences.xml
```

There are preferences for several values, here is a list.
|Setting key | default value |
|------------|---------------|
|`trook.doc.download.root` |`/system/media/sdcard/my documents/Downloads`|
|`trook.music.download.root` | `/system/media/sdcard/my music/Downloads`|
|`trook.packages.download.root`|`/system/media/sdcard/my packages``|
|`trook.fallback.download.root``|`/system/media/sdcard/my documents/Downloads``|
|`trook.wifi.timeout`|60000 ms (a long value)|
|`trook.wifi.holdon`|300000 ms (a long value, how long to keep the wifi on after the last network operation)|

For example, you might prefer to download books to your sdcard rather than the internal storage, which is mounted at `/sdcard` on the Nook. You might also prefer to keep the wifi on for longer than the default 5 minutes.

Edit the `TrookPreferences.xml` file so that it looks like

```xml
<?xml version='1.0' encoding='utf-8' standalone='yes' ?>
<map>
  <string name="trook.doc.download.root">/sdcard/Downloads</string>
  <long name="trook.wifi.holdon" value="600000"/>
</map>
```

Please note the different ways that longs and strings are set in this file.

Finally, copy it back to the nook

```bash
adb push TrookPreferences.xml /data/data/com.kbs.trook/TrookPreferences.xml
```

Restart Trook (long-click on the gear icon, scroll down and tap the "Stop Application") and bring up Trook again.

#### How do I enable installing third-party apps from Trook?

You'll need to update a settings database on the Nook with `sqlite` to enable Trook (or any other app) to install applications directly from the Nook. Please [http://nookapps.googlecode.com/svn/trunk/feed/howto.html see the HOWTO] that provides the recipe for this.

#### Can I browse my locally stored books?

The "my books" entry from the Trook root menu lets you browse your documents, and preserves any folder structure you have there.

#### How can I add or change the cover art for my book?

Just create an image with the same name as the book (but change
the suffix as appropriate.) For example, if you have an epub book
in `my documents/Adventure/Professor Challenger.epub`
create an image called `my documents/Adventure/Professor Challenger.jpg` You can create jpg, png or gif files.

#### Can I search a catalog?

If a catalog provides a search option, you'll see a magnifying glass icon
appear next to the settings. Click on it to search the current catalog.

#### Can I access my Calibre catalog?

(Thanks to [http://code.google.com/u/sethcohn sethcohn] for the tip.) Yes -- start up your calibre server, and load the feed `http://server-ip:8080/stanza`

(Please note -- do *not* use http://server-ip:8080/ but http://server-ip:8080/stanza If you get a parse error from trook, please double-check the url and verify that it returns a valid atom feed.)

You can also bookmark it to "my feeds" so it's conveniently accessible from then on. 

Also, please see [dpierron](http://code.google.com/u/dpierron/)'s pointer to his [calibre2opds](http://davidsoft.free.fr/calibre2opds/calibre2opds/Welcome.html) system (see his comments below) for a way to extract and publish your stanza catalog/books to a service like [Dropbox](http://dropbox.com), so you can access your catalog more easily on the internet.
 
#### How do I change the startup menu?

You can override the default menu -- it's just an atom feed -- by creating
an xml file called `my feeds/root.xml` It's best to start with
[the default feed file](http://code.google.com/p/nookapps/source/browse/trunk/trook/assets/default_root_feed.xml) and modify it as appropriate.

Mount the Nook over USB, and create a folder called `/my feeds`
if it doesn't already exist. Then, copy your xml file as
`/my feeds/root.xml`, and make sure that the file is world readable.

(If you are accessing your Nook through an `adb shell`
however, the root USB mountpoint is at `/system/media/sdcard`.)

#### Reset the default feed
If anything should go wrong, if you can see the gear icon at least, bring
up the long click menu on it, and select the "Restore default feed" entry.
Bring the menu up again, and stop the application. Restarting it should
bring up the default feeds again.

####  What sort of Atom feed is this?
Trook intends to implement some random subset of [OPDS](http://code.google.com/p/openpub/wiki/OPDS) but your best bet is to look at [the default feed file](http://code.google.com/p/nookapps/source/browse/trunk/trook/assets/default_root_feed.xml) and the [Stanza catalog format documentation](http://www.lexcycle.com/developer) from Lexcycle.

At its core, it's just a set of feeds, that can point to other feeds (thus giving hierarchies) or a list of epub files, audio files or (and this is special to Trook) android apk files.

By the way, should you ever feel the desire to point to the default feed from your
own feed, there's a magic URI `asset:default_root_feed.xml`

For example, if you were creating your own Atom feed, you'd add a section like
this:
```xml
  <entry>
    <title>Default Trook catalog</title>
    <link type="application/atom+xml" href="asset:default_root_feed.xml"/>
    <id>asset:default_root_feed.xml</id>
    <content type="text">Trook's default catalog</content>
  </entry>
```