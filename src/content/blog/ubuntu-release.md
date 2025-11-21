---
title: "Ubuntu Budgie 25.04 release notes"
description: "Introduction and overview Ubuntu Budgie 25.04 (Plucky Puffin) is a Standard Release with 9 months of support."
pubDate: 2025-04-15
author: "david"
authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80"
image: "https://ubuntubudgie.org/wp-content/uploads/2025/04/budgie-codename-with-logo-744x251.jpg"
category: "Other"
---
These release notes showcase the key takeaways for 24.10 upgraders to 25.04.  Please note - there is no direct upgrade path from 24.04.2 to 25.04; you must uplift to 24.10 first or perform a fresh install.

In these release notes the areas covered are:

- New features and enhancements released since 24.10
- Upgrading from 24.10 Ubuntu Budgie
- Fixed Issues
- Known Issues when upgrading
- Support arrangements for our distro
- Where to download Ubuntu Budgie

## New Features and Enhancements
The key focus for the team for this cycle has been the conversion of our distro to a Wayland based distro. We have been working closely with our fellow Buddies Of Budgie maintainers.

Excellent progress has been made towards this huge effort – we are almost there and we will be making available a 25.04 PPA specifically for our fantastic community to try and feedback.  We will be shortly announcing the when-how-why in a dedicated blog post.

Note - we intend to ship v10.10 of budgie-desktop as a stable release for 25.10; this will be wayland only. For 25.04 budgie-desktop is Xorg-server based and this PPA will give 25.04 users an easy way to try and give feedback - help fix issues etc.

We are no longer including Thunderbird as part of our default application set.  With many users now using webmail we have decided the choice of email clients should rightly be put into our community hands - see later for the email ballot.

We now ship with bibata cursors as an option.  We feel these are a great fit for our distro - just choose a bibata variant via budgie-desktop-settings.

## Applets and mini-apps
Lots of updated translations from our brilliant translators https://www.transifex.com/ubuntu-budgie/
Our budgie menu applet has now the ability to show terminal based applications in the menu thanks to a pull request from a new developer Sarah Leibbrand.

Show-time now correctly displays across monitors thanks to a PR from Danny Trunk.

The latest budgie-desktop v10.9.2 together with a number of fixes to resolve crashes due to the 25.04 repository archive changes forms the basis of our Plucky offering. 

## Other Improvements and Bug Fixes
This image showcases the change of default terminal app to xfce terminal for Ubuntu Budgie.

Our default theme Pocillo has had a tidy-up thanks to new team member Kyuyrii. Likewise the Qogir theme has been updated utilising all the good work by Vinceliuice
Our snap based version of Pocillo has also been updated by Kyuyrii as well together with our QogirBudgie snap theme.

We have a new snap for the icon-theme as well which will be shortly going through the approval process to allow autoconnections to other snaps.

The default wallpaper choice has been uplifted for Plucky.

Our welcome app is automatically updated for all 24.04 and 24.10 users

Budgie welcome now has its plucky configuration.

We now include an email ballot page - accessible via Getting Started as well as on first login after installation.  Here you can choose to install evolution, geary, kontact, astroid, claws as well as the thunderbird snap.

## Areas to look out for
The Ubuntu release notes are to be found [here](https://discourse.ubuntu.com/t/plucky-puffin-release-notes/48687)

## Packaging Updates
Whilst not immediately obvious, various packages that we maintain need to be updated for a number of reasons, so this section lists what updates have been made.

 - gnome-online-accounts-gtk - this is the very latest upstream version
 - lightdm-settings
 - slick-greeter.
 
Team member Sam has been busy packaging and testing the following for noble, oracular & plucky!

 - colloid-icon-theme
 - fluent-icon-theme
 - nemo-terminal
 - orchis-gtk-theme
 - tela-circle-icon-theme
 - vimix-gtk-themes
 - whitesur-icon-theme
 - colloid-gtk-theme
 - mojave-gtk-theme
 - fluent-gtk-theme
 - whitesur-gtk-theme

We also now maintain a brand-new app called waycheck - a must for all new & existing wayland developer to see what wayland protocols are supported by your choice of wayland compositor.  Do check it out.

## How to install

It is important to keep in mind a few useful tips before attempting a release upgrade:

IMPORTANT: remember to double-check you have the following vital package before you upgrade:

    sudo apt install ubuntu-budgie-desktop

- Backup your data.
- Install all available updates and reboot.
- It is always a good idea to run either a full system snapshot with Timeshift, to a secondary drive, or a full system image using Clonezilla.
- If you have PPAs that come with updated kernel, mesa, GPU drivers, it is better to purge those PPAs and reboot before attempting release upgrade.
- Once release upgrade starts, all your PPAs will be disabled. If you rely on important software from PPAs, it is better to manually check if those are updated for upcoming release of Ubuntu.
- After upgrade is completed, remember to go to software sources, change release name on your PPAs, enable them and refresh package cache.

### Scheduled upgrade from 24.04 LTS
Users of Ubuntu Budgie 24.04 LTS will not be prompted to upgrade to 25.04.

### Scheduled upgrade from 24.10
Users of Ubuntu Budgie 24.10 will be prompted to upgrade to 25.04 a few days/weeks after the initial release.  Please be patient - Canonical only makes the switch once all the final blockers have been resolved.

Please refer to the community wiki for more help:

https://help.ubuntu.com/community/Upgrades

Also, Ask Ubuntu has an excellent guide to help you upgrade:

http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu

We recommend that you install Ubuntu Budgie on hardware – suggested configuration is 4GB or more RAM and a newer than 10 year computer with 40GB disk space or more. UB can be installed in a virtual machine; we recommend you use 3D host graphics with 128Mb virtual graphics memory and 4GB RAM or more plus 40GB virtual disk space. Running with defaults on most virtualisation systems often results in a broken experience with crashes when launching budgie-control-center, applications such as Microsoft Edge failing to run because of the lack of a graphics card, choppy youtube experience etc.

## On-going support
As an official community flavour we will be supporting the distro for nine months. This support includes releasing important stability issues as well as critical security fixes directly affecting our distro.

Budgie packages are primarily in the Universe repository where the community help maintain this software.

Community Support is available via our discourse forum. Ask Ubuntu and Ubuntu forums can and should also be used for all Ubuntu matters – all flavours are Ubuntu!

## Final Release
Links to download final releases, as well as installation instructions, will be available on our Ubuntu Budgie website once Final Release is built: https://ubuntubudgie.org/downloads/.

## Known Issues

1. Setting/changing the session language.  We noticed that Menu - Language Support sometimes doesn't actually set the language for the session.  The current workaround is as follows. In a terminal run

        localectl list-locales

 for your chosen language type

        localectl set-locale LANG=locale.UTF-8
	
  for example

        localectl set-locale LANG=es_ES.UTF-8
	
  Reboot

2. On first install and logon, using budgie-welcome to access web-based installs such as Chrome will open gedit not firefox. The workaround is to launch firefox first. Logout and login and open Budgie Welcome again

## Infrastructure Sponsors
We just wanted to thank our infrastructure sponsors who help us keep the lights on.

### Digital Ocean
On a mission to simplify cloud computing so developers and their teams can spend more time building software that changes the world.

### Discourse
Discourse is the 100% open source discussion platform built for the next decade of the Internet. Use it as a mailing list, discussion forum, long-form chat room, and more!