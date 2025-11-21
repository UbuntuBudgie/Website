---
title: "Ubuntu Budgie 23.10 Release Notes"
description: "Release notes"
pubDate: 2023-09-19
category: "Other"
author: david
---

# Release notes

## Introduction and overview

Ubuntu Budgie 23.10 (Mantic Minotaur) is a normal release with 9 months of support, from Oct 2023 to July 2024.

Ubuntu LTS releases are focused on long term support. If stability is more important than having the latest and greatest version of the kernel, desktop environment, and applications then Ubuntu Budgie 22.04 LTS is perfect for you.

In these release notes, we are going to cover the following items:

- Release schedule
- New features and enhancements
- Upgrade from 22.04 LTS
- Upgrade from 23.04
- Where to download Ubuntu Budgie daily, beta and final releases
- Infrastructure Sponsors

## Release Schedule

If you want to learn more, please see Release planning and scheduling, shared by Canonical on this [post](https://discourse.ubuntu.com/t/mantic-minotaur-release-schedule/34989).

## New Features and Enhancements

### Budgie Desktop

_The following reiterates the upstream blog announcement for budgie-desktop v10.8 supplemented in italics Ubuntu Budgie specifics._

Budgie 10.8 is a brand new release series for Budgie Desktop, featuring improvements to Budgie Menu _(the alternative menu available to be added to your panel)_, adoption of StatusNotifier support in System Tray _(an alternative to the application indicator that can be added to your panel)_, Magpie v0.x support, and more!

#### Budgie Trash Applet

![|1920x1080](images/image) _Budgie Trash applet allows easy access to the trash folder_

The previously third-party Budgie Trash Applet, developed by Buddies of Budgie team member Evan Maddock, has been merged into mainline Budgie Desktop to become a part of the default applets available to users out-of-the-box. This trash applet enables the user to quickly access and empty the contents of their trashcan as well as restore files.

#### Magpie v0.x Support

Budgie 10.8 is the first release which includes support for our Magpie ABI. To quickly summarize for those that did not catch our blog post on planned [Wayland support](https://buddiesofbudgie.org/blog/wayland) and may not be familiar with Magpie, as well as to offer a bit of a history lesson, we will quickly go over the important parts.Historically, Budgie Desktop has used GNOME's [Mutter](https://gitlab.gnome.org/GNOME/mutter) window manager (nowadays Mutter is also a Wayland compositor) to do the heavy lifting for `budgie-wm`. budgie-wm has served as a small layer on top of Mutter, handling select keybindings for Budgie-specific functionality, input management, animations, screenshot management, backgrounds, and so forth. With every GNOME Stack release, Mutter ABI would change and Budgie Desktop would need to be updated to support the latest ABI and typically two or three ABIs prior so those on older GNOME stacks could still get newer Budgie Desktop releases. On many occasions, this resulted in significant pressure on the team as late ABI changes would land and we would need to work quickly to adapt to them.As GNOME has pursued improvements around their Wayland support, this has understandably at times resulted in regressions in its support for X11. As Budgie Desktop currently uses X11, this has created a less optimal user experience for our users. This reached a turning point with GNOME 44 / mutter-12 ABI when there was a larger split between Wayland and X11 support in Mutter, resulting in many regressions in its X11 support that to this day remain unresolved.During our team discussions, we came to the conclusion that we wanted to address this in two manners:

1. Restore X11 support / functionality expected by our users for the immediate future.
2. Prioritize adoption of Wayland, a longer-term goal, by developing a wlroots-based compositor that would serve as our window manager for both future Budgie 10.x releases when we go Wayland-only, as well as Budgie 11.

To accomplish these goals, we first decided to soft-fork Mutter at the state it was in for GNOME 43, eliminating the regressions introduced in GNOME 44 / mutter-12. This version of Magpie is < 1.0 (e.g. 0.9.x) and is designed to be a temporary fork catered to Budgie and its current X11-only support. Alongside this effort, we are building "Magpie 1.0" as the wlroots-based Wayland compositor, with the plan to **fully drop X11 support once Magpie 1.0 is ready for consumption**. In the case of Budgie 10.8, this series [supports magpie-0 ABI](https://github.com/BuddiesOfBudgie/budgie-desktop/pull/387), which is effectively identical to the mutter-12 ABI. This provides us a stable ABI that can be leveraged across multiple GNOME Stack releases until Magpie 1.0 is released. Magpie v0.x should be used for GNOME 44+ and we will not be pursuing support for newer mutter ABIs, such as mutter-13 ABI for GNOME 45, as this would not be the most optimal use of our engineering bandwidth over development efforts around Wayland and Budgie 11.

#### Privilege Escalation Dialog Improvements

![|1920x1080](images/image) _Polkit Dialogs now provide an action description_

Wonder what is prompting that PolicyKit authentication dialog? Wonder no longer! In this release of Budgie Desktop, our polkit dialog will now show the action description and action ID when graphical privilege escalation is requested.Alongside this change, we made sure the dialog could no longer be resized.

#### Performance / Power Modes In Battery Status Applet

![|1920x1080](images/image) _Quickly switch between different power profile modes_

Budgie's battery indicator in the Status applet now provides the ability to control the Performance / Power profile modes offered by [power-profiles-daemon](https://gitlab.freedesktop.org/hadess/power-profiles-daemon?ref=buddiesofbudgie.org). When available on a supported system, you will get access to various options such as:

- Balanced
- Power Saver
- Performance

#### System Tray Adopts Status Notifier Specification

_Ubuntu Budgie has had support for Appindicators for many years. The buddies project have developed a new applet which similarly supports Appindicators which can be added to your panel. You cannot have both the Appindicator and the new Status Notifier applet at the same time on your panel._

![|1920x1080](images/image) _System Tray applet using Status Notifier Specification_

The System Tray applet has been overhauled for Budgie 10.8. As we elaborated on in our [Wayland](https://buddiesofbudgie.org/blog/wayland) blog post, historically we have used either `na-tray` or the XEmbed Protocol for the creation, management, and rendering of trays icons. This had notable downsides, such as:

- Icons not scaling with panel size
- High DPI scaling relied on the application providing the icon to support DPI scaling
- Inconsistent styling of tray menus
- Relies on X11 APIs, which is not viable for our Wayland-only future

For Budgie 10.8, our System Tray has adopted the [Status Notifier](https://www.freedesktop.org/wiki/Specifications/StatusNotifierItem/) specification. This is a modern, vendor-agnostic solution that enables applications to communicate all relevant information for the rendering of their tray icon over DBus rather than being responsible for drawing tray icons and menus themselves, promoting the development of catered solutions by desktop environments and those developing panels for user experiences such as tiling window managers.The result of this on the Budgie Desktop side is that we can draw all menus and items in a manner that is visually consistent. Going into Budgie 11, we will have a similar solution and paired with multiple panels across multiple monitors (a requirement for Budgie 11), you will even be able to have multiple tray applet instances enabled, which was not otherwise possible with the XEmbed-based solutions.

#### General Improvements

Budgie 10.8 features a bunch of smaller improvements, complementing our major new features and changes.

##### Budgie Menu

![Budgie Menu](images/budgiemenu-1.png "Budgie Menu") _The upstream budgie menu is available to be added to your panel via budgie desktop settings._

_The following enhancements and changes have been made by upstream to this upstream applet._

Our Application Indexer's fuzzy scoring function [has been ported to C](https://github.com/BuddiesOfBudgie/budgie-desktop/pull/385). When transpiling to C, Vala would mangle this function, causing it to crash randomly on non-Latin text. Porting it to C fixed the crashing issue while still producing the desired search results.For Budgie Menu, we [made changes](https://github.com/BuddiesOfBudgie/budgie-desktop/pull/388) to the organization of some applications based on user feedback. Applications that previously were put into the Other category ended up fitting better in other existing categories and some application exclusions no longer making sense either. The Utilities category has been removed entirely, as we found it had considerable overlap with the System Tools category and it was not immediately clear what the difference was between Accessories and Utilities. Now, applications previously in Utilities can be found in the System Tools category.

##### Internal Theme Refinements

![Internal Theme](images/budgie-internal-theme.jpg "Internal Theme") _The internal theme now features a green accent color, and better contrast_

We have made some small refinements and recoloring to our internal theme. Historically, the primary accent color in our internal theme mirrored that of the Solus blue. When Budgie Desktop development began under Buddies of Budgie, the decision was made early on to move to our adopted light green primary color. This was chosen to be more like greenery and common (green) budgerigars. The first to be updated was the Budgie logo itself and the color has finally made its way to our default internal theme as well.Alongside this change, we have darkened some elements such as Budgie Menu, the panel, and Raven's background. Raven widgets, text, and iconography should contrast better against the darker background as a result!

##### Other Small Things

- Kvantum and Murrine themes are now hidden in Budgie Desktop Settings [#393](https://github.com/BuddiesOfBudgie/budgie-desktop/pull/393)
- power-dialog: We have removed style class changes and made it behave more like polkit dialog. This fixes the case where themes which do not style the dialog end up having a transparent background, making it very hard to see and use the dialog [#381](https://github.com/BuddiesOfBudgie/budgie-desktop/pull/381)
- We now search for plugins in both /usr and /usr/local [#404](https://github.com/BuddiesOfBudgie/budgie-desktop/pull/404)
- We have moved the battery label setting to Budgie Desktop Settings as well as moved the percentage label from left of icon to right [#389](https://github.com/BuddiesOfBudgie/budgie-desktop/pull/389)

#### Bug Fixes

It would not be a Budgie release without some bug squashing. In this release, we have:

- Enabled ellipsize for Style boxes in BDS [#403](https://github.com/BuddiesOfBudgie/budgie-desktop/pull/403)
- Fixed Icon Tasklist not showing Private Internet Access [#379](https://github.com/BuddiesOfBudgie/budgie-desktop/pull/379)
- Fixed Polkit dialog resizing
- Prevented notifications and screenshot from locking up when sink is locked
- keyboard-layout: Don't try to initialize IBus [#418](https://github.com/BuddiesOfBudgie/budgie-desktop/pull/418)
    - IBus already gets initialized in wm, and calling that function here causes severe breakage, leading to budgie-panel being repeatedly killed for OOM.

### Other Improvements and Bug Fixes

#### Budgie Control Center

We have uploaded a brand new budgie-control-center to mantic - this incorporates dozens of enhancements and bug fixes that have been pulled together over the last 6 months since the last release.

Changelog here [https://github.com/BuddiesOfBudgie/budgie-control-center/releases/tag/v1.3.0](https://github.com/BuddiesOfBudgie/budgie-control-center/releases/tag/v1.3.0)

#### Budgie Applets and mini-apps

- VisualSpace applet has now an option in Budgie Desktop Settings to reverse the icon scroll direction to switch between workspaces
- WeatherShow and Applications Menu have been moved to libsoup3 removing the reliance on the deprecated libsoup2.4. These should hopefully be a seamless change but do let us know if you note any crashes/freezes etc.
- The Extras trash applet is to be removed when budgie-desktop v10.8 is released. This new version has a native trash applet. Where you have previously added the Extras trash applet, it will be removed and you will need to re-add the new built-in trash applet.
- The Brightness applet no longer resets the night-light setting/colour if it is active when the brightness popover is shown.
- Wallstreet images are now displayed in alphabetical order rather than in file-system order.
- A fix to the application indicators to display more chrome based icons has been made - fix has been backported to jammy and lunar as well
- QuickNote now includes a copy button and a paste button. These perform the same as CTRL+C and CTRL+V in quicknote - quick GUI based method for copy/paste.

![QuickNote](images/quicknote-1.png "QuickNote") _New copy/paste buttons in QuickNote_

- QuickNote buttons have gained a tooltip to improved understanding
- In the budgie desktop v10.8 section upstream removed the legacy xembed based system tray in favour for the Status Notifier applet. There are a number of very old legacy apps still in the archive that use the old panel icons. For 23.10 and 24.04 we have made an optional applet called Budgie Carbon Tray Applet that provides support for these legacy apps. This applet will be dropped in future Ubuntu Budgie releases that will be based on Wayland.

![file](images/image-1695149064732.png) _Carbon Tray Applet supports legacy XEMBED tray apps_

#### Raspberry Pi

Sam has been busy again

![file](images/image-1695148694728.png) _The simplicity and elegance of Ubuntu Budgie's desktop experience on a Raspberry Pi_

23.10 raspi beta image is now available.

Expect final image around final release date.

Please do look at the README and feedback.

[https://sourceforge.net/projects/budgie-remix/files/budgie-raspi-23.10/](https://sourceforge.net/projects/budgie-remix/files/budgie-raspi-23.10/)

1. Default theme corrected as QogirBudgie-Dark - previously QogirBudgie-dark was used which left the desktop with an unthemed look and feel
2. Minor tweaks to the image creation allows snaps such as Budgie Welcome to be immediately available after initial setup. Firefox will no longer disappear from Plank when logging in quickly after setup completes.

#### Themes

1. Latest WhiteSur gtk theme is now available - and has been backported to lunar
2. Latest Orchis gtk theme is now available - and has been backported to lunar
3. Latest Tela-Circle icon theme is now available - and has been backported to jammy and lunar
4. Brand new Fluent gtk theme is now available - and has been backported to jammy and lunar
5. Brand new Fluent icons theme is now available - and has been backported to jammy and lunar
6. Latest WhiteSur-icon theme is now available - and has been backported to jammy and lunar
7. Latest McMojave-circle icon theme is now available - and has been backported to jammy and lunar
8. Latest Mojave-gtk-theme is now available - and has been backported to lunar

![Fluent Theme](images/fluent-lightdark.jpg "Fluent Theme") _New Fluent theme, available in light and dark variants, with multiple color choices_  

![Updated Themes](images/themes1.png "Updated Themes") _Latest Orchis, Mojave, and WhiteSur themes improve appearance for Raven widgets_

#### Budgie Welcome

Our welcome app is automatically updated for all 22.04 & 23.04 and 23.10 users

1. Welcome has been moved to core22 - this allows us compatibility with future versions of ubuntu and to reduce our ISO size.
2. Tweaks to the dropbox screenshot size and the message when installing Flatpaks has been made
3. Nemo Dropbox installation has been tweaked to be more seamless
4. New Fluent make-over is available

#### Additional

1. Really nice changes made by the slick-greeter project have been captured on a fresh package by team-member Sam [https://github.com/UbuntuBudgie/slick-greeter/blob/debian/debian/changelog](https://github.com/UbuntuBudgie/slick-greeter/blob/debian/debian/changelog)
2. Likewise the graphical interface for slick called lightdm-settings I have repackaged and uploaded to Ubuntu/mantic

![Slick Greeter](images/slick-greeter.png "Slick Greeter") _Slick Greeter now allows toggling the password visibility_

### Areas to look out for

N/A

## Upgrading from previous releases

It is important to keep in mind a few useful tips before attempting a release upgrade:

- Backup your data.
- Install all available updates and reboot.
- It is always a good idea to run either a full system snapshot with Timeshift, to a secondary drive, or a full system image using Clonezilla.
- If you have PPAs that come with updated kernel, mesa, GPU drivers, it is better to purge those PPAs and reboot before attempting release upgrade.
- Once release upgrade starts, all your PPAs will be disabled. If you rely on important software from PPAs, it is better to manually check if those are updated for upcoming release of Ubuntu.
- After upgrade is completed, remember to go to software sources, change release name on your PPAs, enable them and refresh package cache.

### Scheduled upgrade from 22.04 LTS

Users of Ubuntu Budgie 22.04 LTS will not be prompted to upgrade to 23.10 automatically. Remember the upgrade path for most LTS users is from LTS to LTS i.e. 22.04 to 24.04. LTS versions are focused on stability.

### Manual upgrade from 22.04 to 23.10

There is no direct route to upgrade to 23.10 to 22.04. You must first upgrade to 22.10, followed by 23.04 before upgrading to 23.10.

Please read the 22.10 [release notes](https://ubuntubudgie.org/2022/09/ubuntu-budgie-22-10-release-notes/) for this procedure.

### Upgrade from 23.04 to 23.10

IMPORTANT: remember to double-check you have the following vital package before you upgrade:

```
sudo apt install ubuntu-budgie-desktop
```

A few days/week or two after the formal release of 23.10 in October you will be automatically offered a graphical prompt to upgrade.

Alternatively, from a command line run:

```
update-manager
```

Some of the packages that were installed as part of the Ubuntu Budgie backports PPA (ppa:ubuntubudgie/backports) will be uninstalled as part of the upgrade. Use budgie-welcome to reinstall anything that is removed.

Please refer to the community wiki for more help:

[https://help.ubuntu.com/community/Upgrades](https://help.ubuntu.com/community/Upgrades)

Also, Ask Ubuntu has an excellent guide to help you upgrade:

[http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu](http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu)

## Where to download the Ubuntu Budgie final release

![Budgie Installer](images/installer.jpg "Budgie Installer") _Ubuntu Budgie's brand new installer_

Ubuntu Budgie for 23.10 has two ISOs to download from.

The first uses Ubuntu Budgie's brand new installer built upon the solid desktop installer from Canonical.

- it is strongly recommended that you run `snap refresh ubuntu-budgie-installer` to get the very latest installer update.

The second ISO uses the traditional but legacy"Ubiquity" installer. This will be discontinued from future Ubuntu Budgie releases. This legacy installer should be used if the new installer has an issue that prevents successful installation.

Links to download final releases, as well as installation instructions, will be available on our Ubuntu Budgie website once Final Release is built: [https://ubuntubudgie.org/downloads/](https://ubuntubudgie.org/downloads/).

## Known Issues

- For more generic issues with Ubuntu 23.10, please check this link: [Ubuntu 23.10 Release Notes](https://discourse.ubuntu.com/t/mantic-minotaur-release-notes/35534).
- We recommend that you install Ubuntu Budgie on hardware - suggested configuration is 4GB or more RAM and a newer than 10 year computer with 40GB disk space or more. UB can be installed in a virtual machine; we recommend you use 3D host graphics with 128Mb virtual graphics memory and 4GB RAM or more plus 40GB virtual disk space. Running with defaults on most virtualisation systems often results in a broken experience with crashes when launching budgie-control-center, applications such as Microsoft Edge failing to run because of the lack of a graphics card, choppy youtube experience etc.

## Infrastructure Sponsors

We just wanted to thank our infrastructure sponsors who help us keep the lights on.

### Digital Ocean

On a mission to simplify cloud computing so developers and their teams can spend more time building software that changes the world.

### Discourse

Discourse is the 100% open source discussion platform built for the next decade of the Internet. Use it as a mailing list, discussion forum, long-form chat room, and more!
