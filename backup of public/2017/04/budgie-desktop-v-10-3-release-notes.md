---
title: "Budgie Desktop V 10.3 - Release Notes"
description: Release Notes
pubDate: 2017-04-23
category: "News"
author: david
image: "/2017/04/images/budgie_desktop_10.3.jpg"
---

With the Qt 5-based Budgie Desktop 11 beginning development, 10.3 marks the final phase of the 10.x series. Future 10.3 releases will only include minor updates and tweaks.

### Improvements

#### MPRIS Artwork

Budgie now supports the downloading of artwork for the MprisClient. Including new code to prevent duplicate artwork from being downloaded (previously most noticeable in Spotify).

#### Alt-Tab

Added a new implementation of Alt-Tab improving upon the previous version with enhanced speed, visuals and reliability.

![10.3 altTab](images/10.3-altTab.png)

#### Customizations

###### Clock Applet

With the 10.3 release, Clock Applet now includes customization options such as displaying 24 hour time and the date.

![10.3 clock](images/10.3-clock.png)

###### Window Buttons

Budgie Settings now allows you to choose a left or right window button layout.

![10.3 left right](images/10.3-left_right.png)

### Fixes / Improvements

##### GTK 3.22

The following issues have been resolved with GTK 3.22:

- When Budgie panel is located at the bottom, Budgie Menu and popovers will no longer move from the top to the bottom of the screen.
- Duplicate popover animations.
- The Run dialogue will cease to appear "stumpy".

##### Budgie Applets

Various Budgie Applets have had the following bug fixes:

- Clock Applet: Vertical alignment now appears correctly.
- Icon Tasklist: Resolved the inability to pin GNOME Twitch via the Icon Tasklist.
- Tray Icons: By syncing natray with the upstream gnome-panel, icons are spaced correctly.
- Places Applet: Added support for encrypted volumes and remote (S/FTP, SMB) shares, and clicking on S/FTP bookmarks now open them in the default file manager.

##### Raven

Removed the initial network connection notification to avoid spamming the user on startup.

##### Budgie Window Manager

Resolved a crash in `budgie-wm` that would occur when the current locale is deleted.

### Credits

_The informational content has been derived from the Solus Project's Budgie Desktop original release notes located here: [https://solus-project.com/2017/04/18/solus-releases-iso-snapshot-20170418-0/](https://solus-project.com/2017/04/18/solus-releases-iso-snapshot-20170418-0/)._

**Special thanks to the Solus Project who had put a reward in place (500 EUR) to encourage a community contribution and push the Alt-Tab switcher through!**

### How to Update to Budgie Desktop V 10.3

##### 16.04 and 16.10 (budgie-remix)

You simply will need to update using the traditional mechanisms such as the **Software**application, or running the following command:

```
sudo apt-get upgrade
```

##### 17.04 (Ubuntu Budgie)

You will first need to enable the **backports** PPA before you will have the 10.3 update made available to you.

- open the `budgie-welcome` application
- go to **recommendations**
- select the option to **enable the "Backports" repository**.

At this point, you can then update using the traditional mechanisms such as the **Software**application, or running the following command:

```
sudo apt-get update && sudo apt-get upgrade
```
