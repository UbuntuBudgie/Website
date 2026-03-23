---
title: Ubuntu Budgie 25.10 Release Notes
description: Release Notes for 25.10 release containing latest changes
pubDate: 2025-10-08
author: David M.
image: public/budgie-2510-release-1-744x385-1.jpg
category: Release
draft: false
---
# **Introduction and overview**

Ubuntu Budgie 25.10 (Questing Quokka) is a Standard Release with 9 months of support by your distro maintainers and Canonical, from Oct 2025 to July 2026.

These release notes showcase the key takeaways for 25.04 upgraders to 25.10. Please note – there is no direct upgrade path from 24.04.3 to 25.10; you must uplift to 24.10 first or perform a fresh install.

In these release notes the areas covered are:

- New features and enhancements released since 25.04
- Upgrading from 25.04 Ubuntu Budgie
- Fixed Issues
- Known Issues when upgrading
- Support arrangements for our distro
- Where to download Ubuntu Budgie

## **New Features and Enhancements**

The key focus for the team for this cycle has been the conversion of our distro to a Wayland based distro. We have been working closely with our fellow Buddies Of Budgie maintainers.

Excellent progress has been made towards this huge effort. We have been testing via a PPA for both 25.04 and 25.10 during this cycle. We will be continuing this for the early part of 26.04 until all the new packages have been integrated in the repository.

Note – we intend to ship v10.10 of budgie-desktop as a stable release for 26.04; this will be wayland only. For 25.10 budgie-desktop is Xorg-server based and this PPA will give 25.10 and 26.04 users an easy way to try and give feedback – help fix issues etc. More information soon on how you can help with this testing effort.

We have uplifted to a new version of budgie-desktop, v10.9.3 which is compatible with GNOME 49.  
Budgie Desktop v10.9.3 now uses budgie specific gsettings keys – this includes all media keys and custom defined keys. Please note, any custom keys you may have had will need to be reimplemented for v10.9.3 and later.

A new version of budgie-control-center includes these new changes. We can confirm WACOM support remains integrated with budgie – GNOME 49 moved this key capability into GNOME Shell so we have reimplemented this specifically for budgie users.

## **More about Wayland**

We are really excited about our wayland future – just a few snippets to wet your appetite!

- The upstream base will be a wlroots based compository called labwc. This is perfect for budgie – very lightweight, fast etc.
- With clever integration, we will map many of GNOME Settings to budgie and labwc seamlessly – so any apps poking directly expecting a GNOME based desktop will work still with budgie
- We have trialled running budgie on-top of Wayfire successfully and also have success with Mir as well. We are looking for anyone to help us make these a first-class offering with labwc. Do contact us!
- We will most likely ship with our dock based layout – either Cario Dock or Crystal Dock. More news on this soon on our discourse forum.
- we will finally say goodbye to the legacy gnome-screensaver – we will ship with swaylock – but you can also just install gtklock if you want the traditional gnome-screensaver look and feel.
- Many of our own budgie-applets will be made available to work under wayland.
- We have successfully converted many third-party budgie applets as well – together more options to customise your budgie experience.

## **Other Improvements and Bug Fixes**

Our default theme Pocillo and our QogirBudgie themes have been fully snapped with autoconnections. Most GTK based Snaps now fit well out of the box.

The default wallpaper choice has been uplifted for Questing.

Our welcome app is automatically updated for all 24.04, 25.04 and 25.10 users

Budgie welcome now has its questing configuration.

## **Areas to look out for**

The Ubuntu release notes are to be found ++[here](https://discourse.ubuntu.com/t/questing-quokka-release-notes/59220)++

## **How to install**

It is important to keep in mind a few useful tips before attempting a release upgrade:

IMPORTANT: remember to double-check you have the following vital package before you upgrade:

```
sudo apt install ubuntu-budgie-desktop
```

- Backup your data.
- Install all available updates and reboot.
- It is always a good idea to run either a full system snapshot with Timeshift, to a secondary drive, or a full system image using Clonezilla.
- If you have PPAs that come with updated kernel, mesa, GPU drivers, it is better to purge those PPAs and reboot before attempting release upgrade.
- Once release upgrade starts, all your PPAs will be disabled. If you rely on important software from PPAs, it is better to manually check if those are updated for upcoming release of Ubuntu.
- After upgrade is completed, remember to go to software sources, change release name on your PPAs, enable them and refresh package cache.

### **Scheduled upgrade from 24.04 LTS**

Users of Ubuntu Budgie 24.04 LTS will not be prompted to upgrade to 25.10.

### **Scheduled upgrade from 25.04**

Users of Ubuntu Budgie 25.04 will be prompted to upgrade to 25.10 a few days/weeks after the initial release. Please be patient – Canonical only makes the switch once all the final blockers have been resolved.

Please refer to the community wiki for more help:

++[https://help.ubuntu.com/community/Upgrades](https://help.ubuntu.com/community/Upgrades)++

Also, Ask Ubuntu has an excellent guide to help you upgrade:

++[http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu](http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu)++

We recommend that you install Ubuntu Budgie on hardware – suggested configuration is 4GB or more RAM and a newer than 10 year computer with 40GB disk space or more.

UB can be installed in a virtual machine; we recommend you use 3D host graphics with 128Mb virtual graphics memory and 4GB RAM or more plus 40GB virtual disk space.

Please note – virtualbox support depends upon Oracle making virtualbox compatible with the v6.17 kernel used with Budgie.

Running with defaults on most virtualisation systems often results in a broken experience with crashes when launching budgie-control-center, applications such as Microsoft Edge failing to run because of the lack of a graphics card, choppy youtube experience etc.

## **On-going support**

As an official community flavour we will be supporting the distro for nine months. This support includes releasing important stability issues as well as critical security fixes directly affecting our distro.

Budgie packages are primarily in the Universe repository where the community help maintain this software.

Community Support is available via our discourse forum. Ask Ubuntu and Ubuntu Discourse forums can and should also be used for all Ubuntu matters – all flavours are Ubuntu!

## **Final Release**

Links to download final releases, as well as installation instructions, will be available on our Ubuntu Budgie website once Final Release is built: ++[https://ubuntubudgie.org/downloads/](https://ubuntubudgie.org/downloads/)++.

## **Known Issues**

1. Setting/changing the session language. We noticed that Menu – Language Support sometimes doesn\’t actually set the language for the session. The current workaround is as follows. In a terminal run
  ```
  localectl list-locales
  ```
  for your chosen language type
  ```
  localectl set-locale LANG=locale.UTF-8
  ```
  for example
  ```
  localectl set-locale LANG=es_ES.UTF-8
  ```
  Reboot
2. On first install and logon, using budgie-welcome to access web-based installs such as Chrome will open gedit not firefox. The workaround is to launch firefox first. Logout and login and open Budgie Welcome again

## **Infrastructure Sponsors**

We just wanted to thank our infrastructure sponsors who help us keep the lights on.

### **Digital Ocean**

On a mission to simplify cloud computing so developers and their teams can spend more time building software that changes the world.

### **Discourse**

Discourse is the 100% open source discussion platform built for the next decade of the Internet. Use it as a mailing list, discussion forum, long-form chat room, and more!