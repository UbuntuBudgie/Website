---
title: "Ubuntu Budgie 23.04 Release Notes"
description: "Release notes"
pubDate: 2023-04-11
category: "Other"
author: david
---

# Draft release notes

## Introduction and overview

Ubuntu Budgie 23.04 (Lunar Lobster) is a normal release with 9 months of support, from April 2023 to January 2024.

Ubuntu LTS releases are focused on long term support. If stability is more important than having the latest and greatest version of the kernel, desktop environment, and applications then Ubuntu Budgie 22.04 LTS is perfect for you.

In these release notes, we are going to cover the following items:

- Release schedule
- New features and enhancements
- Upgrade from 22.04 LTS
- Upgrade from 22.10
- Where to download Ubuntu Budgie daily, beta and final releases
- Infrastructure Sponsors

## Release Schedule

If you want to learn more, please see Release planning and scheduling, shared by Canonical on this post [https://discourse.ubuntu.com/t/lunar-lobster-release-schedule](https://discourse.ubuntu.com/t/lunar-lobster-release-schedule)

## New Features and Enhancements

### Budgie Desktop & Budgie Control Center

We are pleased to include the very latest budgie desktop version in 23.04. This is a really great release - do read whats new and changed in our [blog post](https://ubuntubudgie.org/2023/04/budgie-desktop-10-7-x/).

### Applets and mini-apps

For Ubuntu Budgie applets these can be tested via our daily PPA for 22.04/22.10 & 23.04:

`sudo add-apt-repository ppa:ubuntubudgie-dev/budgie-extras-daily && sudo apt upgrade`

1. Lots of updated translations from our brilliant translators [https://www.transifex.com/ubuntu-budgie/](https://www.transifex.com/ubuntu-budgie/)
2. Clockworks applet - clocks can now vary by up to 24hrs
3. Weather Applet Icons have been reworked to work better against both light and dark themes

![file](images/image-1681235209469.png)

![file](images/image-1681235233596.png)

4. Fix for ShowTime, Weather applet disappearing from the desktop after logon
5. Weather applet now allows searching by locale characters i.e. not just plain ascii
6. Both screenshot applet and haste applet have now been [archived](https://discourse.ubuntubudgie.org/t/testing-23-04-are-you-brave-enough/6380/9?u=fossfreedom) by its author and as such we will be removing the ability to install these applets for 23.04. We will leave the for 22.04 & 22.10 since these are stable releases - if we are notified that capability is seriously broken we will also remove these applets from these releases as well.
7. Ubuntu Budgie developer, Sam, has updated his personal project budgie-analogue-applet. This now displays correctly when fractional scaling is used. In addition, the clock is available as a Raven widget to be added.

![file](images/image-1681235259705.png)

8. Ubuntu Budgie dev Jacob has [improved hotcorners](https://ubuntubudgie.org/2023/02/new-hotcorners-feature-introduced-in-23-04/)

![file](images/image-1681235281186.png)

- Hotspot areas are now extended to 8 spots (all edges & corners)
- The settings interface now has a dedicated window. The applet is still available for quick access to hotcorner settings, but is optional.

![](images/hcapplet-744x252.png)

- The options to set pressure and/or delay no longer exclude each other, so the user can fine tune his or her own touch to prevent unintended firing.
- Hotcorners now has another built-in feature to prevent unintended firing. When for example text is selected and we unavoidably hit the edge of the screen, the corresponding command could be triggered. Hotcorners therefore checks for mouse button 1 to be pressed, skips action if that is the case.

9. [Window Shuffler](https://ubuntubudgie.org/2023/01/new-edge-tiling-introduced-in-23-04/) has undergone a dramatic rework by Jacob. Now available is quarter tiling both keyboard and using a mouse via a feature we call Drag Snap

![](images/dragsnap_default-744x95.png) Quarter & half tiling is pretty much self-explaining. Dragging a window to the top of the screen will tile the window to top half, but keeping the mouse button pressed will progress the action into full screen tiling.

Also available is asymmetric tiling by pressing Alt or Ctrl whilst dragging

- Alt + drag will tile the window into 3/5 of the screen width
- Control + drag will tile the window into 2/5 of the screen width

10. From the BuddiesOfBudgie team member EbonJaeger is a new applet that replaces the new default user indictor with a more traditional looking applet

![file](images/image-1681235354892.png)

### Raspberry Pi

1. Budgie Pi VNC options are now per user instead of a system wide.
2. Added a few options like "prompt to accept connection" and the view only mode.
3. Added a popup notification when a remote machine connects.
4. Also the restriction to accept connections only from the local subnet can be disabled. Another benefit is since this server uses a password hash file instead of gnome keyring, we don't have to recommend to disable the keyring password so the VNC server accepts connections if auto-login is on.

![file](images/image-1681235385533.png) ![file](images/image-1681235398470.png)

5. the Remote Pi options is a little cleaner and more consistent, and no more UI freezes during installs

### Themes

1. Pocillo Theme includes a fix for chrome and chromium showing the background in a 1px wide divider
2. Latest Pocillo Icons derived from Qogir & Tela icons - incorporates over a years worth of enhancements
3. Latest QogirBudgie theme derived from Qogir upstream. The Dark and Light theme variants have been renamed slightly (capitalised). Thus on an upgrade these themes will need to be applied via budgie desktop settings
4. Latest upstream Mojave Gtk Theme
5. Latest upstream WhiteSur Gtk Theme
6. Latest upstream WhiteSur Icon Theme
7. Latest upstream Orchis Gtk Theme
8. Latest upstream Vimix Gtk Theme
9. Latest upstream Tela Circle Theme

### Budgie Welcome

Our welcome app is automatically updated for all 22.04 & 22.10 users

1. Lots of updated translations from our brilliant translators [https://www.transifex.com/ubuntu-budgie/](https://www.transifex.com/ubuntu-budgie/)
2. Welcome snap updated to install 23.04 budgie-extras etc.
3. The front page icons now are fixed rather than trying to be translated. This prevents locale characters such as chinese being displayed.
4. Mysteriously Chromium Browser disappeared as an option for the browser ballot. This now has been resolved.

### Additional

1. Our default terminal font is now Noto Mono Bold size 11. For the raspi image this will be Noto Mono Regular size 11.

We have changed the font due to changes made by Canonical in Lunar with the Ubuntu Mono font we previously used for many year which we do not feel work for our distro.

### Areas to look out for

1. For the beta we have noted the following GNOME based issues impacting budgie-desktop:
    - Some windows doesn't grab focus on [titlebar click](https://gitlab.gnome.org/GNOME/mutter/-/issues/2727)
    - Title bar becomes transparent and other glitches from an [XWayland window](https://gitlab.gnome.org/GNOME/mutter/-/issues/2725)
    - Window rectangle does not match cursor's assumed [rectangle on X11](https://gitlab.gnome.org/GNOME/mutter/-/issues/2706)
    - Incorrect window placement with respect to mouse [cursor during move](https://gitlab.gnome.org/GNOME/mutter/-/issues/2730)
2. The following issue we have noted with budgie related components:
    - window shuffler crashes on ubuntu - [wayland session](https://github.com/UbuntuBudgie/budgie-extras/issues/446)
    - on QEMU/KVM and possibly VirtualBox, adjusting the screen-resolution via budgie-control-center followed by reopening budgie-control-center crashes the whole desktop. This is likely due to a mutter bug. Resetting the last-panel dconf key for budgie-control-center will allow budgie-control-center to be reopened again.
3. The following snap issue that impact UB:
    - installing missing theme [snaps failed](https://github.com/snapcore/snapd-desktop-integration/issues/52)
4. Areas of concern that we haven't yet seen bug reports:
    - often, we see the resize cursor where there is nothing to resize - likely a mutter issue
    - Applying a dark theme for example "Pocillo-dark" with a "Prefer dark" styling defaults the GTK3 standard window decoration to use Dark Adwaita styling. Changing the styling to "Application Preference" can help. This is definitely a change from 22.04 and 22.10.
    - touchscreen, cursor disappears to never come back unless restarting budgie-wm
5. Whilst investigating the above we note the following GNOME-Shell issues:
    - a restart or shutdown is not possible without the reset button.
    - On gnome-shell: desktop freezes when touchscreen is pressed

## Upgrading from previous releases

It is important to keep in mind a few useful tips before attempting a release upgrade:

- Backup your data.
- Install all available updates and reboot.
- It is always a good idea to run either a full system snapshot with Timeshift, to a secondary drive, or a full system image using Clonezilla.
- If you have PPAs that come with updated kernel, mesa, GPU drivers, it is better to purge those PPAs and reboot before attempting release upgrade.
- Once release upgrade starts, all your PPAs will be disabled. If you rely on important software from PPAs, it is better to manually check if those are updated for upcoming release of Ubuntu.
- After upgrade is completed, remember to go to software sources, change release name on your PPAs, enable them and refresh package cache.

### Scheduled upgrade from 22.04 LTS

Users of Ubuntu Budgie 22.04 LTS will not be prompted to upgrade to 23.04 automatically. Remember the upgrade path for most LTS users is from LTS to LTS i.e. 22.04 to 24.04. LTS versions are focused on stability.

### Manual upgrade from 22.04 to 23.04

There is no direct route to upgrade to 23.04 to 22.04. You must first upgrade to 22.10 before upgrading to 23.04.

Please read the 22.10 [release notes](https://ubuntubudgie.org/2022/09/ubuntu-budgie-22-10-release-notes/) for this procedure.

### Upgrade from 22.10 to 23.04

IMPORTANT: remember to double-check you have the following vital package before you upgrade:

```
sudo apt install ubuntu-budgie-desktop
```

A few days/week or two after the formal release of 23.04 in April you will be automatically offered a graphical prompt to upgrade.

Alternatively, from a command line run:

```
update-manager
```

Some of the packages that were installed as part of the Ubuntu Budgie backports PPA (ppa:ubuntubudgie/backports) will be uninstalled as part of the upgrade. Use budgie-welcome to reinstall anything that is removed.

Please refer to the community wiki for more help:

[https://help.ubuntu.com/community/Upgrades](https://help.ubuntu.com/community/Upgrades)

Also, Ask Ubuntu has an excellent guide to help you upgrade:

[http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu](http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu)

## Where to download Ubuntu Budgie daily builds and final releases

### Daily and Beta builds

Ubuntu Budgie daily builds for AMD64 architecture are available here: [http://cdimage.ubuntu.com/ubuntu-budgie/daily-live/current/](http://cdimage.ubuntu.com/ubuntu-budgie/daily-live/current/)

### Final Releases

Links to download final releases, as well as installation instructions, will be available on our Ubuntu Budgie website once Final Release is built: [https://ubuntubudgie.org/downloads/](https://ubuntubudgie.org/downloads/).

## Known Issues

- For more generic issues with Ubuntu 23.04, please check this link: [Ubuntu 23.04 Release Notes](https://discourse.ubuntu.com/t/lunar-lobster-release-notes).

## Infrastructure Sponsors

We just wanted to thank our infrastructure sponsors who help us keep the lights on.

### Digital Ocean

On a mission to simplify cloud computing so developers and their teams can spend more time building software that changes the world.

### Discourse

Discourse is the 100% open source discussion platform built for the next decade of the Internet. Use it as a mailing list, discussion forum, long-form chat room, and more!
