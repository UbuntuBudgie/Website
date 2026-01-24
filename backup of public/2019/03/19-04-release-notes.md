---
title: "19.04 Release Notes"
description: "Release notes for new release"
pubDate: 2019-03-27
category: "News"
author: david
image: "/2019/03/images/19.04_released_std.jpg"
---

**Ubuntu Budgie v19.04 (Disco Dingo)** **Final Release:** Apr 18th, 2019

Ubuntu Budgie 19.04 will be supported for 9 months until Jan 2020. If you need Long Term Support, it is recommended you use Ubuntu 18.04 LTS instead.

In these release notes the areas covered are:

- New features and enhancements
- Issues Resolved
- Upgrading from 18.04 / 18.10 Ubuntu Budgie
- Known Issues when upgrading
- Where to download Ubuntu Budgie

<!--more-->

# NEW FEATURES AND ENHANCEMENTS

## 18.10 STUFF CARRIED THROUGH TO 19.04

- Firefox is the default browser. So out goes a chromium-browser icon on both the icon-task-list and plank dock - in comes Firefox
- For good measure, we have added ubuntu budgie welcome as a default program icon to make discovery instant (on both the icon-task-list and plank dock).
- We have dropped TLP from the default install. The power savings in the kernel from kernel 4.18 and later are significant for newer computers. TLP is still available to be installed if the kernel power savings do not impact you due to using an older CPU.
- The caffeine appindicator has been dropped - this has been replaced with the native caffeine budgie-applet that comes with budgie-desktop v10.5
- We've added a new game 2048 as part of the default install - a great way to while away a few hours

## 19.04 STUFF TO LOOK OUT FOR

- New default wallpaper

- Fonts have changed from "Ubuntu" to "Noto Sans" except for the terminal font since Ubuntu is much easier to read!
- Ubuntu Budgie Team Wallpapers for 19.04 - the UB team has decided for this release to choose their favourite wallpapers - quite an eclectic bunch. I hope you like them. We will next run a community contest for the 20.04 LTS
- Budgie Welcome - Translation team has been bustling - many more languages now available
- Budgie Welcome - Browser Ballot available from getting started now is Snap capable - we offer GNOME Web and Midori as options for web-browsers as well as the Snap versions of Firefox and Chromium-Browser. Chrome, Vivaldi and the repo versions of Firefox and Chromium-Browser are still available.
- Catfish file and text search is now a default install
- The community has requested Files (Nautilus) to be switched to Files (Nemo) - so welcome back split screen and other goodies. Tip - press Alt or right-click the toolbar to show the Menu for preferences etc.

- Nemo can be launched from Plank as well as the icon-task-list applet
- v3.8.6 is the version of Nemo in the repositories. v4.0.6 is available in our backports PPA
- nemo-dropbox is available in our backports PPA
- nemo-share is available from our backports PPA - this adds a right click option to enable folders to be shared without needing root permission.
- budgie-nemo integration - right click options for changing the background, launch budgie-desktop-settings and catfish file & text search
- Nemo folder-color is unfortunately not available in the repositories, so it has been dropped.
- Latest version of moka-icon-theme is available - Pocillo uses Moka icons
- budgie-desktop is built upon mutter 3.32 - so we benefit from all the good speed-ups work upstream
- Introducing a default theme QogirBudgie from the fiendishly clever themer [vinceliuice](https://github.com/vinceliuice/Qogir-theme) - so three of the best themes are now default in budgie-desktop-settings (Arc, Pocillo and QogirBudgie)

![Qogirbudgie]

- Keyboard friendly window shuffler. CTRL+ALT+keypad numbers; The currently focussed window can be now tiled to each corner, side to side or maximized/unmaximized all from the keyboard. Give it a try.
- New version of the login screen slick-greeter
- Revamped budgie-themes to be 19.04 friendly
- Main Menu option "Budgie Discourse" to have direct access to our community site
- Previously hidden, Advanced Network Configuration, LibreOffice Math, Software Sources and Additional Drivers are now available from the menu
- During the 19.04 development cycle we have been working with a great Elementary OS project called [DesktopFolder](https://github.com/spheras/desktopfolder). We will be working with the maintainer again during the 19.10 cycle and hopefully, we can then replace nemo-desktop with DesktopFolder. If you want to try out this project we have daily builds for DesktopFolder available - so to get the latest (warts and all) ppa:ubuntubudgie-dev/desktop-icons

<figure>

![Desktopfolder]

<figcaption>

Desktop Folder

</figcaption>

</figure>

- As the community has requested, Plank dock has now been switched to the bottom of the screen, is transparent and has the bounce animations by default
- UB logo is proudly displayed in the About screen
- Pocillo-gtk-theme has been revamped - key visual has been the Green suggestion buttons are now a darkish blue.
- Budgie-Welcome - we have now removed our little-used budgie-remix Reddit and G+ page icons
- Rhythmbox alternative toolbar - consolidated appmenu - fix for crashes when used with non-english locales

## BUDGIE DESKTOP IS NOW OFFICIALLY AT V10.5 SO LOOK OUT FOR:

- Raven Sound Output widget enables you to do global as well as per-app volume control and output device changing
- Raven Sound Input widget enables you to do microphone control and input device changes.
- Ability to mute/unmute applications and an option to allow raising volume above 100%. Tweaks are available to better work across more GTK themes
- Raven section in Budgie Desktop Settings. Under this section, you’re able to show and hide individual widgets as well as enable the ability to raise your volume above 100% in Raven.

![Ravensettings]

- Ability to enable window focus change to be on mouse enter/leave via the “Windows” section of Budgie Desktop Settings, as opposed to click-to-focus.
- The “Fonts” section of Budgie Desktop Settings introduces a new Text Scaling option
- Ability to dismiss individual notifications
- Notification grouping on an application basis
- Large Notifications are now truncated to prevent huge notification windows being displayed
- Caffeine powered - a new applet that prevents screen dimming and lock screen triggering. This is now the default on the panel

![Caffeine]

- You can now middle-click on the Bluetooth applet to toggle Bluetooth airplane mode.
- You can now middle-click on the Sound applet to mute and unmute global audio.
- Workspace Applet revamped.
- Icon Task List Grouping - displayed icons can optionally group the windows of the same application
- Substantial new and updated translations for the desktop
- Ability to set the Notification position (previously was always top right)
- Launch a new instance of an application via the middle button on icon-task-list
- Scroll up on icon button to focus
- Sundry menu category has been eliminated
- Center all new windows is now an option in budgie-desktop-settings
- Power and printer notifications are no longer added to Raven notifications
- Sound widgets in Raven are removed if there are no devices
- Fix pinning issues with icon-tasklist-applet
- Firefox tabs that have audio now shown as "Firefox" rather than "AudioIPCServer" in Raven
- Slick Greeter now shows user wallpapers by default - can be changed via Menu Login Window
- Disable night-light when apps are using full-screen
- Display week numbers in Raven Calendar
- Default to not show the Powerstrip at the bottom of Raven
- When desktop icons is switched off - extra option available to switch Displays
- Non-friendly themes such as Adwaita are now hidden from budgie-desktop-settings

## BUDGIE APPLETS

- ShowTime applet has been completely revamped and rewritten - includes the ability to drag around the screen enabled via budgie-desktop-settings
- A bug in WeatherShow, causing occasional crashes, has been fixed

New productivity applets are now available from Budgie Welcome:

- New Pomodoro like applet Take-A-Break

![Takeabreak applet]

We are also pleased to showcase many more indie developer applets - to pick a few:

- budgie-cpu-freq-applet, budgie-sys-monitor-applet are new to 19.04

![Cpufreq applet]

![Sys monitor applet]

- kangaroo, app-launcher, trash applet, recently used, advanced brightness controller, browser-profile-launcher are from 18.10

In budgie-welcome, showtime, quicknote and dropby applets are hidden once installed. These are three critical applets and should never be removed manually. They don't need to be added to a panel though.

**In total Ubuntu Budgie users have direct install access to 28 applets through budgie-welcome**

If you want to showcase your applet in UB contact us and let us know about your project.

- Daily builds for budgie-extras is now available - so to get the latest (warts and all) ppa:ubuntubudgie-dev/budgie-extras-daily

# KEY FEATURES AVAILABLE TO UB FROM UBUNTU

- Linux kernel v5
- GNOME 3.32 applications - all apps need regression testing
- Latest version of LibreOffice 6.2
- Fractional Display scaling is an experimental option:

gsettings set org.gnome.mutter experimental-features "\[

Then use Settings - Displays to set the scale 1, 1.25 etc.

- Live Patch is available directly from the menu although the capability is only applicable to LTS users; so this is prep work for 20.04LTS
- A shed-load of fixes throughout the Ubuntu stack - congrats on all Canonical, Ubuntu devs, Debian devs and all devs in the free software community for all of their hard-work which everyone should be pleased about :)

What does all that mean - most cutting edge yet stable software that brings great benefits for brand new hardware compatibility - including support for the very latest games.

# UB MAINTAINED PACKAGES

Apart from the above (!) UB maintains many Debian packages. New versions available in 19.04 include:

- rhythmbox-plugin-alternative-toolbar
- slick-greeter
- Arc-Theme

# ISSUES RESOLVED:

- bug-fix to sweep up default install icons that are not Moka based - so applications have renamed their icon names, so Moka needs to keep up
- Workspace switching stopped working in 18.10 - the previously manual dconf fix is now in 19.04
- 19.04 minimal installs - gnome-online-accounts work out of the box
- Window animations have been re-enabled. Check that in budgie-desktop-settings - style that animations is enabled.

# KNOWN ISSUES:

- If you find that after the upgrade clicking the menu button crashes the panel, then CTRL+ALT+T to open a terminal then run:

```
nohup budgie-panel --reset --replace &
```

- Desktop Icons/ Nemo Folders on the upgrade to 19.04 from 18.10.
    - Desktop icons will not carry over its position from 18.10 - remember this is very different software. So you will need to rearrange your desktop again.
    - Icon-view Folder icon sizes are different between Nautilus and Nemo. You will need to use the zoom capability to see what works for you.
    - The default version of Nemo is 3.8.5. The spacing between icons is much larger than we have been used to with Nautilus. V4 that is available in backports somewhat resolves this issue.
    - On upgrade from 18.10 you may have both Nautilus and Nemo installed. You can safely remove nautilus via `sudo apt purge nautilus`.
    - on upgrade if you have an icon shortcut in either Plank or the icon-tasklist applet for Nautilus you will need to undock/unpin and redock/repin Nemo (unless of course you still want to continue using Nautilus)
- Please read the [Ubuntu Release notes](https://wiki.ubuntu.com/DiscoDingo/ReleaseNotes) which covers issues common to all Ubuntu Flavors

# UPGRADING

## HOW TO UPGRADE FROM 18.10 TO 19.04

**IMPORTANT:** remember to double-check you have the following vital package before you upgrade:

```
sudo apt install ubuntu-budgie-desktop
```

After the release of 19.04, you will be offered to upgrade when you run Software & Updates.

Alternatively, from a command line run:

```
update-manager
```

**IMPORTANT** We do not recommend running `do-release-upgrade` from a Tilix terminal since this will hang during the upgrade. If you want to use `do-release-upgrade` switch to a TTY and login before running the command.

Some of the packages that were installed as part of the Ubuntu Budgie backports PPA (ppa:ubuntubudgie/backports) will be uninstalled as part of the upgrade. Use budgie-welcome to reinstall anything that is removed.

## HOW TO UPGRADE FROM 18.04 TO 19.04

Short story - you cannot directly upgrade. You must first [upgrade](https://ubuntubudgie.org/blog/2018/09/27/18-10-release-notes) to 18.10 before upgrading to 19.04. Anything else is not supported nor supportable.

* * *

Please refer to the community wiki for more help:

[https://help.ubuntu.com/community/Upgrades](https://help.ubuntu.com/community/Upgrades)

Also, Ask Ubuntu has an excellent guide to help you upgrade:

[http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu](http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu)

# DOWNLOAD

Final release & Dailies are found here:

[https://ubuntubudgie.org/downloads](https://ubuntubudgie.org/downloads)

# GETTING SUPPORT

Thanks to the generosity of discourse.org, our support site is the crucial site for all things Ubuntu Budgie.

One to bookmark [https://discourse.ubuntubudgie.org](https://discourse.ubuntubudgie.org/)

More information can be found [here](https://ubuntubudgie.org/blog/2018/03/08/welcome-to-discourse).

# INFRASTRUCTURE

We just wanted to thank our infrastructure sponsors who help us keep the lights on.

### [DIGITAL OCEAN](https://www.digitalocean.com/)

On a mission to simplify cloud computing so developers and their teams can spend more time building software that changes the world.

### [DISCOURSE](https://www.discourse.org/)

Discourse is the 100% open source discussion platform built for the next decade of the Internet. Use it as a mailing list, discussion forum, long-form chat room, and more!

### [STATUS.IO](https://status.io/)

Status.io was built to help companies enhance transparency and keep their customers in the loop during downtime. The Status.io platform enables organizations to maintain a customized public system status page, external to their infrastructure, that always displays the current health of their app, website or service.

* * *

David (project lead)
