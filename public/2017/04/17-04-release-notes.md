---
title: "17.04 Release Notes"
description: "Release notes"
pubDate: 2017-04-11
category: "News"
author: david
Image: "/2017/04/images/zesty-announcement.jpg"
---

## Version

Ubuntu Budgie v17.04 (zesty) Released: April 13th 2017

* * *

A significant portion of this development cycle has been spent integrating with the Canonical build-system. Key visible integration items were:

- Plymouth customisations
- utilizing the Ubiquity installer
- reworking packages to remove the "budgie-remix" identities and replaced with the updated "Ubuntu Budgie" identity.

## New Features and Enhancements

- budgie-desktop upgraded to v10.2.9 from v10.2.7
- a first login welcome screen to help you get up and running with items such as:
    - install drivers
    - perform updates
    - install complex ibus language support
    - web browser ballot - one click install/uninstall of additional browsers such as Chrome, Firefox, Vivaldi, etc.
    - Full theme change support is now available. You can switch the entire interface (fonts, wallpaper, theme, cursors) to material based design themes (Adapta or Vimix) or the Arc theme style (default)
- a backports repository is now optionally available via budgie-welcome with additional packages such as:
    - skippy-xd (Expose-Like Window selector)
    - the latest budgie-screenshot panel applet allowing you to grab screenshots (optionally send to Imgur)
    - 17.04 compatible Paper GTK Theme, Paper icon and cursor themes
    - (Coming Soon) v10.3 of the budgie-desktop
- application indicator support (default - respects the panel system theme or custom themes)
- panel applet to control the volume (default)
- panel applet to navigate to file system places (default)
- OSD (On Screen Display) of volume changes
- drag-and-drop reordering of the icon-tasklist applet
- ibus support
- keyboard switching applet
- Plank now defaults to a predefined set of applications rather than a random set of apps
- QT Apps now inherit the currently applied GTK theme
- additional languages are now available for installation via the Settings application including improved font support for our Chinese & Japanese community
- existing applications such as Eye-of-GNOME (eog) and Evince have better support in non-Unity based desktops
- integrated the latest GNOME mutter window manager (difficult due to debugging and fixing crash issues)
- Added the following GNOME applications:
    - GNOME disk usage Analyser
    - GNOME characters
    - GNOME contacts
    - GNOME documents
    - GNOME font-viewer
    - GNOME log-viewer
    - GNOME maps
    - GNOME weather
    - GNOME color manager
    - GNOME accessibility support
- GTK+3.22 Arc-theme support
- Latest Moka-icon-theme (5.3.5)
- new wallpapers
    - thank you to all wallpaper contest contributors!
    - our winners are credited in the Settings application (`settings --> background`)
    - two additional wallpapers have been added by team members
- additional theming changes, bug-fixes and translation updates

## Compatibility Changes

- replaced GNOME Terminal with Terminix
- dropped LibreOffice Base from the ISO image
- changed the default browser to Chromium from Firefox
- changed the default video player to GNOME MPV from GNOME Videos for instant multimedia playback out-of-the-box
- changed the default for mouse and touchpad support to libinput from synaptics

## Issues Resolved

- crashing when installing/removing applications
- disappearing session when removing keyboard layouts
- oversized icons in the LibreOffice window decoration now display at the proper size

## Known Issues

### Upgrading from 16.10 to 17.04

- existing accounts on the system will launch terminix showing a VTE misconfiguration error
    - To resolve: `cat /usr/share/budgie-desktop/vteprompt.txt >> ~/.bashrc`
- your system will have the default applications (from 16.10 and 17.04) for web browsing, video players and terminals.
    - To resolve: `sudo apt purge firefox gnome-terminal totem && sudo apt autoremove`

## Upgrading

### How to upgrade from 16.10 to 17.04

After the release of 17.04 you will be offered to upgrade when you run Software & Updates.

Alternatively, from a command line run:

```
sudo do-release-upgrade
```

Packages that were installed as part of the previous PPA (ppa:budgie-remix/ppa) will be uninstalled as part of the upgrade. These packages can be reinstalled via the 17.04 Ubuntu Budgie backports PPA (ppa:ubuntubudgie/backports)

Please refer to the community wiki for more help:

[https://help.ubuntu.com/community/Upgrades](https://help.ubuntu.com/community/Upgrades)

Also, Ask Ubuntu has a great guide to help you upgrade:

[http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu](http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu)

### How to upgrade from 16.04 to 17.04

There is not a direct 16.04 to 17.04 upgrade route. You are recommended to upgrade through 16.10 first and then to 17.04, or to-do a fresh install.

To upgrade from 16.04 to 16.10 - [https://ubuntubudgie.org/blog/2016/10/08/how-to-upgrade-from-budgie-remix-16-04-to-16-10](https://ubuntubudgie.org/blog/2016/10/08/how-to-upgrade-from-budgie-remix-16-04-to-16-10)
