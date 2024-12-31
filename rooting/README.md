First, you have to root your nook. This used to be simple (check the softroot instructions), but got more and more difficult with new nook revisions.
This rooting guide is for a nook with firmware 1.5 and a post 10030 serial number. For serial numbers starting below that, these instrutions do work, but it might be easier to follow the softroot instructions.
The following instructions are copied from [[https://github.com/ruediste-zz/NookPDFViewer/wiki/Installation]] (an improved and cleand up version of [[http://nookdevs.com/Rooting_1.5_on_any_hardware]]) and ajusted for acessing `adbd.html` locally.

***

This method of rooting works for software v1.5, on the newest nook hardware revision. It is also known to work on 1.4 and some older hardware revisions. Unlike the other rooting methods, this one involves an element of luck -- it takes advantage of a memory-corrupting bug in the web browser, and its success depends on the current contents of the memory which depends on more variables than we can control. As such, the method requires a little bit of patience.

# Preparation

You will need to install the official [Android platform tools](https://developer.android.com/studio/releases/platform-tools) to get the **adb** Android remote-control software. You don't have to install any of the other SDK components, only the latest revision of the platform tools.

Your nook needs to be connected to a wireless access point, and the PC that you installed **adb** on must have direct (non-firewalled) access to the nook's IP address in order to make an **adb** connection. Find out what your nook's current IP address is by going into the Wi-fi configuration and selecting the wireless network you're currently connected to. You will need this IP address for the next step.

# Enabling adbd 

This is the part that requires some persistence.
1. First, copy the file `adbd.html` to the root of your nook disk by connecting it to a computer. Should you have an SD card installed as well, make sure to copy it to the correct disk.
1. Open the nook's web browser and select the burger menu on the left. Click on the star to access the favorites. Click "Add favorite" and enter any name and the location `file:///sdcard/adbd.html`. This makes local access easier, as it will be necessary to open the location several times.
1. Access the favorite.
1. When you load this web page, the browser will crash. (It may automatically reload itself a few times first.) When it crashes, it 'might' enable **adbd**. Try to make a connection, by running the following command on your PC (from a command shell -- **adb** has no GUI at the moment):

    adb connect <nook's IP>

One of two things will happen:

1. You will get the message 'unable to connect to <ip address>:5555'. In this case, restart your web browser and load the web page again (from the history or the favorite). You may have to do this a dozen times or more, so keep at it! It is not unusual that you have to repeat this step more than 10 times, but it's usually less than 30 times.
1. You will get the message 'connected to <ip address>:5555'. Success!

# Getting root access

You got the web browser to launch **adbd** and now you have a higher level of access to your nook; but you only have the privilege level of the web browser's user, **system**. To install software and to to start **adbd** when the nook reboots, you'll need to get root access.

Root access is gained by executing a small program on your nook. Unfortunately, the nook might become unstable afterwards (until reboot). Since you want to keep root access, we'll have to setup the init script to launch **adbd** on startup. First edit the **/init.rc** file to reconfigure your nook to start **adbd** with root access on every reboot. Once you have an **adb** connection, download the file with:

    adb pull /init.rc

Edit this file with a plain text editor and make a change around line 432. It says:

    service adbd /sbin/adbd
        disabled

Change 'disabled' to 'enabled' and save.

After this preparation, it is time to get root access. Use the exploit [RageAgainstTheCage](https://github.com/srclib/RageAgainstTheCage/) that can be found in the repository as **ratc.bin**. Copy it to the nook and execute it:

    adb push ratc.bin /sqlite_stmt_journals
    adb shell
    $ cd /sqlite_stmt_journals
    $ /system/bin/chmod 0777 ./ratc.bin
    $ ./ratc.bin

Several lines of output follow -- don't do anything, a few seconds later **adb** will disconnect you. Now you have to gain **adb** access again using the browser exploit above. The next time **adb connect** succeeds, you should have root access. So quickly do a

     adb push init.rc /

If this succeeds, reboot your nook now because the exploit in the previous step can leave the system in a precarious state which is likely to use the battery up quickly. Afterwards, **adbd** should be started during the boot process and give you root access.

# If that didn't work

Sometimes, this exploit fails -- either the <tt>adb connect</tt> command will fail or the <tt>adb shell</tt> command will give a '$' prompt instead of a '#'. In the second case you can try starting over from the <tt>./ratc_bin</tt> step; in the first, the only choice is to start over from the beginning. In both of these cases I have found it necessary to do a hard reboot of the nook (hold down the power button for 4 seconds, until the e-ink screen goes blank to shutdown, then hold it down again to boot) since the exploit leaves the system in an unstable condition, especially if it fails.

RageAgainstTheCage was made by [[http://c-skills.blogspot.com/2010/08/droid2.html c-skills]] and Android Exploid Crew, credit where due. The source can be found at: [[http://stealth.openwall.net/xSports/RageAgainstTheCage.tgz]]
