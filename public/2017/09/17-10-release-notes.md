---
title: "17.10 Release Notes"
description: "Release notes"
pubDate: 2017-09-26
author: david
category: "News"
Image: "/2017/09/images/ubuntu-budgie-17.10-final-small.jpg"
---

![Ubuntu Budgie 17.10](images/ubuntu-budgie-17.10-final-small.jpg)

## Version

Ubuntu Budgie v17.10 (artful) Release: Oct 19th, 2017

* * *

# New features and enhancements

- Files (Nautilus) 3.26 with Folder-Color to change color and add emblems to folders
- Files now come with Various Document Templates available to use
- Settings (gnome-control-center) has had a stylish makeover
- GNOME-based apps are now available at the latest upstream version 3.26 (if released)
- Budgie-welcome now has proper header bars so can move the window!
- Budgie-welcome now translated now displays in multiple languages thanks to our fantastic [transifex](https://www.transifex.com/ubuntu-budgie/budgie-welcome)  translation team. Superb job to you all. You have done us proud :)
- One click switch between IBUS and FCITX
- Replaced GNOME Photos with gThumb
- Budgie-welcome default settings now have stylish and extended makeovers
- Budgie-welcome includes new link to the Ubuntu Budgie shop
    - Gadgets, clothing and other items to buy
    - Ubuntu Budgie desktops and All-in-one computers to purchase
- Budgie-welcome can now install many new third-party budgie applets
    - Global Menu Applet can be added to the panel
- Budgie-welcome included links to snap and flatpak websites for extra software install options
- One-click theming has better font support for Material design based themes - fonts are better sized.
- Budgie Desktop 10.4 uplift from 10.2.9
    - Stylish Alt-Tab support
    - Raven now supports Spotify
    - Switch windows controls to the left or right support
    - Places now supports encrypted volumes and SMB shares and other fixes.
    - Supports customisable date and time display
    - Bottom panel popovers now work without the dreaded "jump down" effect
    - All popovers are now stylishly animated
    - Raven has been restyled - Budgie Settings dialog now introduced
    - Workspace applet completely revamped
    - Budgie Menu revamped - easier to type and find things
    - Support for left and right side panels
    - All panels can now be converted into Docks
    - All panels support transparency for the system theme
    - All panels and docks can now dynamically autohide
- Night-light and Caffeine (deactivates screensaver) are now shipped as default panel icons
- Screen lock has had a stylish makeover
- Move from Terminix to Tilix for the terminal emulator
- Support Tilix Quake mode - just press F12!
- Ubuntu 17.10 Community Contest Wallpapers - congrats to all the winners!
- Added a material design inspired wallpaper - used when using budgie-welcome makeovers.
- Revamped Panel Icons - stylish support for common applications such as Caffeine and Dropbox
- login screen changed from lightdm-gtk-greeter to slick-greeter

# Issues Resolved:

- Dropbox icon correctly displayed in the panel
- GNOME-Control-Settings icons are now accessible via the menu
- Extra terminals uxterm and xterm are no longer shown in the menu
- various applications that were should twice in the menu out-of-the-box are now shown just once.
- Reduced memory idle usage by dropping tracker related applications.
- Dropped GNOME Contacts, GNOME Documents and GNOME Photos
- Debian wallpaper is no longer shipped with Ubuntu Budgie
- Display video thumbnails in Files
- Disable default Guest Session
- For legacy BIOS boots, Plymouth now correctly shows the crypt password entry field for when drives are encrypted. Note - you should still avoid EFI Boot full encypted drives since this long running issue across all Ubuntu variants is still broken.
- Can now remove default installed applications without removing all key budgie desktop applications.
- Fixes for the AppIndicator applet to not display huge icons such as Steam, menu theming fixes
- New material design wallpaper which replaces our xenial based wallpaper for material designs. This means faster install times for these makeovers.
- Slim down the ISO size - we have managed to shrink the ISO from approx 1.5G at 17.04 to 1.3G at 17.10 whilst adding everything above. Magic!

## Upgrading

### How to upgrade from 17.04 to 17.10

**IMPORTANT:** remember to double-check you have the following vital package before you upgrade:

```
sudo apt install ubuntu-budgie-desktop
```

After the release of 17.10, you will be offered to upgrade when you run Software & Updates.

Alternatively, from a command line run:

```
update-manager
```

For upgrading from the Final Beta:

```
update-manager -d
```

Some of the packages that were installed as part of the Ubuntu Budgie backports PPA (ppa:ubuntubudgie/backports) will be uninstalled as part of the upgrade. Use budgie-welcome to reinstall anything that is removed.

If you see the following issue:

```
Errors were encountered while processing:
/tmp/apt-dpkg-install-I4K4cn/075-gir1.2-budgie-1.0_10.4-1ubuntu4_amd64.deb
E: Sub-process /usr/bin/dpkg returned an error code (1)
Unpacking gir1.2-budgie-1.0 (10.4-1ubuntu4) ...
dpkg: error processing archive /var/cache/apt/archives/gir1.2-budgie-1.0_10.4-1ubuntu4_amd64.deb (--unpack):
trying to overwrite '/usr/lib/girepository-1.0/Budgie-1.0.typelib', which is also in package gir1.2-budgie-desktop-1.0 10.4-0ubuntu0.1
Errors were encountered while processing:
/var/cache/apt/archives/gir1.2-budgie-1.0_10.4-1ubuntu4_amd64.deb
E: Sub-process /usr/bin/dpkg returned an error code (1)
```

Run the following:

```
sudo apt-get -o Dpkg::Options::="--force-overwrite" install gir1.2-budgie
sudo apt -f install
sudo apt update && sudo apt upgrade
sudo apt install --reinstall ubuntu-budgie-desktop budgie-desktop-environment
sudo apt purge gir1.2-budgie-desktop
```

We recommend removing the following applications to reduce your startup memory usage:

```
sudo apt purge gnome-contacts gnome-documents gnome-photos tracker
```

The first time you run budgie-welcome, Tilix Quake mode (press F12) will be automatically enabled.

Please refer to the community wiki for more help:

[https://help.ubuntu.com/community/Upgrades](https://help.ubuntu.com/community/Upgrades)

Also, Ask Ubuntu has an excellent guide to help you upgrade:

[http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu](http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu)

### Known issues

- If you find that after the upgrade clicking the menu button crashes the panel, then CTRL+ALT+T to open a terminal then run:nohup budgie-panel --reset --replace &

### How to upgrade from 16.04 to 17.10

There is not a direct 16.04 to 17.10 upgrade route. You are recommended to to-do a fresh install - obviously remembering to backup any important documents etc. first.

# Download

To download the ISO, head on over to:

[https://ubuntubudgie.org/downloads](https://ubuntubudgie.org/downloads)
