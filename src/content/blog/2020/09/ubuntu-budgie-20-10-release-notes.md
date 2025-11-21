---
title: "Ubuntu Budgie 20.10 Release Notes"
description: "20.10 Release notes"
pubDate: 2020-09-28
author: david
category: "News"
---

# Ubuntu Budgie v20.10 (Groovy Gorilla) Release: Oct 22nd, 2020

Ubuntu Budgie 20.10 is a normal release that will be supported for 9 months until July 2021. Long Term Releases such as 20.04.1 provide assured stability over a longer term (3 yrs) than a standard 9 month release. Critical and stability fixes will be released for all the supported Ubuntu Budgie components; these will be undertaken by ourselves, Canonical and the wider Ubuntu community.

In these release notes the areas covered are:

- New features and enhancements
- Upgrading from 20.04.1 Ubuntu Budgie
- Known Issues when upgrading
- Where to download Ubuntu Budgie

\[caption id="attachment\_1756" align="alignnone" width="744"\]![Ub Desktop 2004](images/ub_desktop_2004-744x393.jpg) UB Desktop\[/caption\]

([Download of Screenshot](https://github.com/UbuntuBudgie/assets/blob/master/Screenshots/20.10/default_desktop.png "Download of Screenshot"))

## Summary

Ubuntu Budgie is the sum of many hundreds of developers working together.  
For 20.10 your Ubuntu Budgie team have concentrated on paper-cuts - tidying up the rough areas reported by you our community. That's not to say we as a team haven't had some fun as well!

Shuffler has had some nice touches including the funky sounding sticky neighbours and also a full CLI to allow the tinkers to fully customise their application arrangements.

Our application menu now leverages the search facility to find the various parts of GNOME Settings. Many icons previously displayed are now stripped out allowing quicker visual access to applications. Also, look out for the optional rollover capability now in the category view.

We now include a full Mac like makeover using the fabulous Mojave theme and icons though a click of a button. This is also available to 20.04 LTS.

Also, we have developed an optional applet to replace the menu to present a full-screen application icons display based on a new project called lightpad. This is also available to 20.04 LTS.

![full screen launcher](images/image-1601417534370.png)

Much of the bug-fixes have already been backported to our 20.04 LTS users. We will be continuing to rollout fixes throughout the LTS 3 year cycle.

Taken together, all the smaller changes plus the larger enhancements shapes our distro to be fully flexible and customisable to your workflow; with sane defaults to provide a first rate experience from the get-go.

## BUDGIE DESKTOP:

Once again Ubuntu Budgie continues to take the lead to ensure budgie desktop remains compatible with the latest GNOME stack. This time around the development has been fairly smooth and it should be straightforward for all distros uplifting to GNOME 3.38.

1. Ubuntu Budgie 20.10 ships with a git release of budgie-desktop v10.5.1 which includes everything up-to the 20.10 freeze date.
2. Patch created to allow you to choose which screenshot app to be invoked when pressing Print, Ctrl Print, Alt Print - dconf-editor is used to change the app
3. Being a good contributor - we have upstream'd to the budgie-desktop project several 20.04 patches we have developed (Wnck crash, gnome-shell/budgie-desktop conflict as well as the ability to define the print button screenshot app)
4. Fix created and pull-request made to allow non Latin keyboard layouts from the keyboard applet (to be backported to 20.04)
5. Started looking at introducing compatibility with GNOME3.38 which will be on 20.10. PR made upstream
6. Wallpaper changing now respects the animation flag - so if you turn of animations, changing wallpapers occur instantaneously
7. Fix occasional crash when removing applets from a panel
8. Upstream has resolved system tray icons breaking on login, resume from suspension
9. Upstream has resolved Spotify cover art not displaying in raven
10. Upstream: chromium browser based notifications now display their icons
11. Upstream has enabled creating new instances of windows via middle click of icon task list applet
12. Upstream has completely reworked the system tray. This resolves lots of issues including icons appearing to overlap each other.
13. In raven we display week-numbers by default for the calendar
14. Patch added to hide the "Default" theme in budgie-desktop-settings which is the Debian specific name for "Adwaita"

## Budgie Applets and mini-apps

1. Hotcorners: Option added to configure hotcorners via budgie-desktop-settings and therefore hide the icon from the panel
2. Dropby: Applet settings now has the ability to display the USB window notification in any corner you define

![file](images/image-1601319520268.png)

3. Dropby: Animation when copying media so that you now when copying is in progress/finished
4. Dropby: Crash reports resolved when second user account uses dropby on same machine (also backported to 20.04)
5. Application Menu: Touch Screen friendly - can now swipe on your touchscreen
6. Application Menu: Better keyboard navigation from the search to categories etc.
7. Application Menu: Search bar changes position to the bottom when on a bottom panel

![file](images/image-1601319422398.png)

5. Application Menu: Hide the large number of Settings menu icons shown in the grid view and the System Tools category menu - its more elegant this way - use the search capabilities to find Settings options like bluetooth and sharing etc.
6. Application Menu: In a similar fashion the logout/restart/suspend/shutdown icons have now been removed. Search actions are now available for these + the ability to "lock" the screen when searching and "hibernate" if you have enabled hibernation separately
7. Application Menu: Mouse rollover capability in the category view is now available via applet settings
8. Application Menu: Handling of fractions should be better and more intuitive (e.g. 5.3\*0.5 in the search bar)
9. Application Menu - Category view - styled as a sidebar now
10. Previews: auto close when app loses focus (also backported to 20.04)
11. Previews: enable/disabling the capability is now dynamic - there is no need to logout/login
12. Previews: Multiple Libreoffice windows are previewed correctly to allow switching (also backported to 20.04)
13. Previews: now displays a tooltip on mouse hover (configurable) to show the full window name
14. Previews - no longer crashes when there are no windows and you invoke alt+tab multiple times (to be backported to 20.04)
15. Network: left/right panels do not have a large space when applet placed in end section. (also backported to 20.04)
16. Network: VPNs listed are now alphabetically sorted to make things easier to find the right VPN (also backported to 20.04)
17. Brightness Controller applet: Fix to make slider actually work. Should now work against a GNOME 3.36 base (also backported to 20.04)
18. Window Shuffler - enable/disabling the capability is now dynamic - there is no need to logout/login
19. Window Shuffler Sticky Neighbours - new capability to resize adjacent windows automatically

[![](images/0.jpg)](https://www.youtube.com/watch?v=j6mrrVpE5A0) (click to launch YouTube video)

9. Window Shuffler - feedback when trying to tile windows that have a minimum size bigger than the tile placement
10. Window Shuffler - add CLI option to place apps to any tile position. This allows everyone to script their launch and placement setup
11. Welcome Layouts - global menu occasionally crashes the panel when using cupertino/theone layouts. For these we now re-enable the nemo menu - for other layouts we hide the menu (remember to use Alt to show the menu) (also backported to 20.04)
12. Made more distro friendly: Some distros don't use some stuff located in /usr/bin and other file locations. We have now reworked the vala applets/mini apps to compile to user-defined system locations (i.e. via meson --bindir --sysconfdir --prefix --libdir)
13. Countdown: This applet is now vertical panel friendly with icons and text respecting the space available on vertical panels (also backported to 20.04)
14. General: Latest translations from the Transifex team - more help wanted [https://www.transifex.com/ubuntu-budgie/ubuntu-budgie-extras](https://www.transifex.com/ubuntu-budgie/ubuntu-budgie-extras) (also backported to 20.04)
15. New applet: Desktop fullscreen applauncher called budgie-lightpad-applet
16. budgie-workspace-wallpaper-applet has been rewritten in Vala. This has been done primarily to ensure no inadvertent panel crashes. In addition it takes into account the budgie desktop changes we made to switch wallpapers almost instantaneously (without animation) when switching workspaces.
17. WeatherShow - add the ability to display a custom location for the weather city
18. QuickChar - don't crash when run on Wayland based desktops.

## Budgie Welcome

![file](images/image-1601319553499.png)

1. Extras - rename "Applets" to Extras to better reflect the types of things that can be installed
2. Extras - Instructions on how to enable applets after install displayed immediately next to the install button when invoked.
3. Extras - All window previews to be uninstalled
4. Add Budgie Lightpad Applet installable for 18.04 and later
5. Themes - Corrected picture sizing to be identical for all themes
6. Themes - Allow users of the vimix makeover to install individual parts
7. Themes - Latest Upstream Paper theme has now removed Paper cursors - so rework to remove this from makeover
8. Mojave theme/icons and font makeover is now available in budgie-welcome. This has been backported to 20.04 as well ![file](images/image-1601055802227.png)
9. Getting Started - point to the correct YouTube video for Shuffler
10. Getting Started - Corrected 20.04 keyboard shortcut to launch Shuffler
11. Getting Started - Added Brave Browser to the browser ballot
12. Getting Started - fixed bug where translated topics had an apostrophe which caused the topic not to respond to a click to display the topic.
13. General - Latest translations - more help wanted! [https://www.transifex.com/ubuntu-budgie/budgie-welcome](https://www.transifex.com/ubuntu-budgie/budgie-welcome)

## Budgie Themes & Layouts

1. Arc-Theme has now been updated - the maintainer has changed to [https://github.com/jnsh/arc-theme](https://github.com/jnsh/arc-theme). The theme now has an additional theme called Arc-Lighter. Do give some feedback especially about anything budgie related to the new maintainer - do give thanks to the new maintainer taking on this challenge.
2. Paper-Theme updated to the latest upstream version
3. Pocillo-Theme - all the deprecated SASS code has been fixed. This future proofs the theme. Any help - large or small is welcome. **Join the UB team** by becoming the pocillo theme dedicated maintainer! [https://github.com/UbuntuBudgie/pocillo-gtk-theme](https://github.com/UbuntuBudgie/pocillo-gtk-theme)
4. QogirBudgie-Theme - all the deprecated SASS code has been fixed. This future proofs the theme. Any issues - please raise to [https://github.com/vinceliuice/Qogir-theme](https://github.com/vinceliuice/Qogir-theme)
5. QogirTheme - as requested by the community, the highlight focus colour has changed from Ubuntu Orange to Standard Blue.

## Additional

1. All packages are now arm64 available. This means you can now use [desktopify](https://github.com/wimpysworld/desktopify "desktopify") and create a Raspi v4 Ubuntu Budgie image ![file](images/image-1601318519372.png)
2. gedit text edit highlight for current line turned off. Dark themes are broken with gedit and often the text color cannot be read.
3. New option "Align to grid" when right click the desktop - this switches on the desktop grid mode. Note there will now be a "Customise" right click menu option available when you choose Align to grid and this can be used to customise the grid including turning off/on the icon auto-arrangement
4. We now ship with our own file extension handling list of apps e.g. picture files should open in the viewer gthumb and .deb should open in gnome-software
5. We now disable the nemo behaviour where a double-click in an empty area would go up one folder
6. We enable default in nemo to allow a slow doubleclick on filename to rename a file
7. The Ubuntu Budgie team choice wallpapers are now available in 20.10. Enjoy!
8. Nemo - Enforce asking when deleting and moving to trash so that inadvertent deleting files is not possible
9. Slick-greeter is part of the packages UB maintains - this has now been updated to the very latest available. So check that all is well.
10. lightdm-settings (the companion to slick-greeter) is part of the packages UB maintains - this has now been updated to the very latest available. So check that all is well.
11. All the backport packages have now been rebuilt for groovy - both amd64 and arm64 architectures.
12. Both nemo-share and nemo-dropbox backport packages have been rebuilt from the upstream v4.6.0 package
13. For new accounts/new installs, gnome-software no longer autostarts. This reduces the memory desktop usage by approx 100-150Mb. You'll see an autostart entry in your autostart list - don't worry, this is just to stop the autostart running for budgie-desktop - but runs correctly for GNOME Shell/Unity desktops.

## KEY FEATURES AVAILABLE TO UB FROM UBUNTU

- - - Linux kernel v5.8
        - GNOME 3.38 applications
        - Latest version of LibreOffice 7
        - GRUB2 is used to boot the ISO both in legacy and UEFI mode

![file](images/image-1601318438244.png)

- - - What does all that mean - most cutting edge yet stable software that brings great benefits for brand new hardware compatibility - including support for the very latest games.

## UB MAINTAINED PACKAGES

Apart from the above (!) UB maintains many Debian packages. New versions available in 20.10 include:

- - - Slick Greeter
        - Login Window Preferences
        - DesktopFolder
        - Arc Theme

## KNOWN ISSUES

- Windows flicker when [resizing](https://bugs.launchpad.net/ubuntu/+source/mutter/+bug/1896627 "resizing"). We recommend trying to use the TearFree intel.conf method described by this [answer](https://askubuntu.com/a/1119262/14356 "answer").
- Broadcom BCMWL driver fails to [load](https://bugs.launchpad.net/ubuntu/+source/bcmwl/+bug/1878045 "load") i.e. no wifi capabilities
- various reports that the ISO does not boot/install grub. The boot capabilities which includes introducing GRUB2 in legacy booting has caused a few instances where the ISO does not boot or not able to boot after installation. Do remember to report these issues to launchpad so that these edge cases are found and hopefully resolved as we near release day in October.
- If you find that after the upgrade clicking the menu button crashes the panel, then CTRL+ALT+T to open a terminal then run:
- `nohup budgie-panel --reset --replace &`
- Launching terminal based apps from the menu does not work. Workaround is to fool GLib to assume that a supported terminal (tilix isnt supported) is installed `sudo ln -s /usr/bin/tilix /usr/bin/nxterm`. [](https://bugs.launchpad.net/ubuntu/+source/budgie-desktop/+bug/1873428)[https://bugs.launchpad.net/ubuntu/+source/budgie-desktop/+bug/1873428](https://bugs.launchpad.net/ubuntu/+source/budgie-desktop/+bug/1873428)
- Please read the [Ubuntu Release](https://discourse.ubuntu.com/t/groovy-gorilla-release-notes/15533 "Ubuntu Release") notes which covers issues common to all Ubuntu Flavors.

## HOW TO UPGRADE FROM 20.04.1 TO 20.10

IMPORTANT: remember to double-check you have the following vital package before you upgrade:

```
sudo apt install ubuntu-budgie-desktop
```

After the release of 20.10, ensure you change your Software Sources to offer updates for any version:

[![](images/wp_editor_md_34f6ab29d9728ad3e078317aaafffcc0.jpg)](https://ubuntubudgie.org/wp-content/uploads/2020/09/wp_editor_md_34f6ab29d9728ad3e078317aaafffcc0.jpg)

You will then be offered to upgrade when you run Software & Updates.

Alternatively, from a command line run:

```
update-manager
```

**IMPORTANT** We do not recommend running `do-release-upgrade` from a Tilix terminal since this will hang during the upgrade. If you want to use `do-release-upgrade` switch to a TTY and login before running the command.

Some of the packages that were installed as part of the Ubuntu Budgie backports PPA (ppa:ubuntubudgie/backports) will be uninstalled as part of the upgrade. Use budgie-welcome to reinstall anything that is removed.

* * *

Please refer to the community wiki for more help:

[https://help.ubuntu.com/community/Upgrades](https://help.ubuntu.com/community/Upgrades)

Also, Ask Ubuntu has an excellent guide to help you upgrade:

[http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu](http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu)

# DOWNLOAD

Final release is available here: [https://ubuntubudgie.org/downloads/](https://ubuntubudgie.org/downloads/)

# GETTING SUPPORT

Thanks to the generosity of discourse.org, our support site is the crucial site for all things Ubuntu Budgie.

One to bookmark [https://discourse.ubuntubudgie.org](https://discourse.ubuntubudgie.org)

More information can be found [here](https://ubuntubudgie.org/2018/03/08/welcome-to-discourse/).

## INFRASTRUCTURE

We just wanted to thank our infrastructure sponsors who help us keep the lights on.

### [DIGITAL OCEAN](https://www.digitalocean.com/)

On a mission to simplify cloud computing so developers and their teams can spend more time building software that changes the world.

### [DISCOURSE](https://www.discourse.org/)

Discourse is the 100% open source discussion platform built for the next decade of the Internet. Use it as a mailing list, discussion forum, long-form chat room, and more!

### [STATUS.IO](https://status.io/)

Status.io was built to help companies enhance transparency and keep their customers in the loop during downtime. The Status.io platform enables organizations to maintain a customized public system status page, external to their infrastructure, that always displays the current health of their app, website or service.

* * *

David (project lead)
