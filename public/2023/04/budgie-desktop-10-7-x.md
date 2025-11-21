---
title: "Budgie Desktop 10.7.x"
date: 2023-04-11
categories: 
  - "other"
---

## Budgie Desktop

For Ubuntu Budgie the latest budgie-desktop v10.7.1 is now available for 23.04 out of the box. We have also made this available via our backports-budgie PPA for our 22.04 LTS community:

```
sudo add-apt-repository ppa:ubuntubudgie/backports-budgie && sudo apt full-upgrade
```

This is the new version of the Budgie Desktop [v10.7](https://blog.buddiesofbudgie.org/budgie-10-7-released/) from the BuddiesOfBudgie organisation which Ubuntu Budgie are a key contributor to.

This is a precis of upstreams release note:

Budgie 10.7.1 is a brand new release series for Budgie Desktop, featuring major re-architectures, new APIs for extensibility, and polish to the user experience.

## New Application Indexer

Budgie 10.7.1 introduces a new application indexer, replacing our use of libgnome-menus and unifying our logic used in both Budgie Menu and Budgie Run Dialog, for consistency in the applications we show. This new indexer provides more reliable indexing of applications across several directories which are used to store desktop files.

Our implementation improves the categorization of applications, aggregating entries into more relevant and used categories (for example, "Administation", "Settings", and "System" would all be aggregated into "System"), while respecting custom desktop directories created by the users through third-party menu editors that write to the user's `.local/share/desktop-directories` folder.

Related to the application indexer, our searching in Budgie Menu has been abstracted out into its own "relevancy search" that is now used in both Budgie Menu and Budgie Run Dialog, providing a consistent search experience.

## Budgie Desktop Settings


Budgie Desktop Settings now has a new design for widget selection, applying to both panel widgets and our new Raven widget system. This design shows relevant developer information such as the author, website, description, and copyright information. We also communicate if the widget plugin is "built-in" (ships with Budgie).

## Budgie Menu


Budgie Menu has been drastically improved in 10.7.1, with new functionality and improvements to application launching.

For Ubuntu Budgie use the "Budgie Menu" applet instead of the default Budgie AppMenu

### Dual-GPU Support

Budgie Menu now leverages [switcheroo-control](https://gitlab.freedesktop.org/hadess/switcheroo-control) if available to switch between GPU environments when launching applications that request it. Users with dual-GPU setups can now launch their applications without necessarily having to worry about which GPU is in use and manually switching between them.

### Personal User Menu

Budgie Menu now provides a "personal user menu" which has quick XDG directory access. This feature enables you to open up a file manager (or technically whatever your inode/directory handler is) directly to folders like Home, Documents, Music, etc. This follows the [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html), so if you have for example a different path set for Music (**or your system locale is not English**) that will be respected. Folders which do not exist will be automatically hidden, so the menu will only show items which are relevant to you!

### Quick Settings and Power Access

In the new bottom strip of Budgie Menu, we now have buttons for launching Budgie Desktop Settings, Budgie Control Center, and our new Power Dialog (which we will get into later). You no longer need to search for these in the menu or access them by right-clicking on the desktop.

### Improvements to accessing Budgie Control Center panels


An option has been added to the Budgie Menu widget settings to show Budgie Control Center settings items (such as bluetooth, sound, and power panels) in the applications list. You will always be able to search for these items regardless of the option being enabled though, so you can have less clutter in your menu while still having quick access to various settings panels.

### Other Improvements

Here is a short list of other improvements to Budgie Menu:

- We no longer reload the Budgie Menu during a AppIndex change when the menu is open, preventing your category and application list from re-rendering while you are actively using the menu.
- We now ship a default menu icon that is similar in design to the grid icon that is used when the user enables the new "Use Default Menu Icon" option in the Budgie Menu widget settings, or if the currently selected icon theme is in the following list:
    - Adwaita
    - HighContrast
    - hicolor
    - "default"

## Budgie Run Dialog

Budgie Run Dialog has been updated in 10.7 to leverage the new application indexer and relevancy search service, enabling it to have consistent search results compared to Budgie Menu.

Alongside this update, we have introduced a couple visual changes as well:

1. The width is now computed from the work area of the screen that the Run Dialog is opened on. This should make it look good on different sized monitors.
2. The label for the name and description of applications in the launcher buttons has been split into two labels. This allows more fine-grained styling than was previously possible.

## Budgie Screenshot



Budgie 10.7.1 introduces a new Budgie Screenshot application built into the desktop that enables you to quickly take screenshots of windows, areas, or your entire screen. Budgie Desktop no longer relies on gnome-screenshot for its screenshotting capabilities, all of the existing default keybinds will now call `org.buddiesofbudgie.BudgieScreenshot`. Users still have the option to use a different screenshotting solution (e.g. Flameshot) should they desire.

## Notification Enhancements

Significant improvements around Notifications have landed in 10.7.1.

### General UX Improvements

There has been a swath of improvements to our rendering of notifications:

- Notifications will now fade in and out upon showing and closing.
- Fix large fonts pushing the close button out of the popup
    - This sets the notification body to use the size of the widget for wrapping instead of a character length. Notification titles also were given a margin-end to prevent overlapping the close button.
- Prevent notification popups from stealing input focus
- Notifications should no longer cause screen flickering when in a fullscreen application.



- Width chars were added so that the body text always has the same minimum and maximum size per line, so the entire popup body is filled by the label. Lines is set to 2, so only two lines of text is displayed. Note that this does not mean two lines in the popup; it's two lines of the actual notification text. This allows long lines to wrap (and wrapped lines don't count towards lines, because reasons) without popups taking up large amounts of screen real-estate. Xalign is set to 0 to ensure that the text always starts at the left (because halign and justify isn't enough).

### Notification Summary

When a window leaves fullscreen mode, Budgie will now show a notification popup to alert the user that there are notifications that they didn't see. This notification is only shown if there are actually notifications.

### Spec and Control Center Setting Compliance

Improvements have been made in supporting more of the FreeDesktop Notification spec, namely notification sounds are now supported. As not all applications will be displayed currently in Budgie Control Center and some applications such as Element and Discord have separate capabilities to play notifications sounds, we do not have sounds enabled by default.

Applications that show in Budgie Control Center under its Notifications panel can be configured to have sounds on or off. Alongside this, we now respect the "Show Message Content in Popups" option in Budgie Control Center's Notification panel for an application and will hide content when it is disabled there.

Some notifications set a timeout of 0, which the spec says means that it should never expire. Our implementation doesn't really fit that, since persistence is done by Raven, not the notification server. As such, we set a different minimum show time for the popups to ensure that one is actually shown when it should be.

## Raven

Budgie 10.7.1 introduces the largest set of changes and features since the 10.5 release. It has largely been re-architected with a brand new pluggable Raven widget API system, allowing third-party developers to build their own Raven widgets, as well as seeing new widgets and updated designs to existing widgets.

### Raven Widget API



Like our Budgie Panel widget API, you can now build widgets for Raven leveraging libpeas (providing support for writing plugins in C, Python, and Vala) and our set of APIs. This **finally achieves** our end goal for Raven since the beginning of Budgie 10, which has been to provide a extensible widget and notification center.

This documentation, like the panel API, is currently provided via gtk-doc and browsable via [devhelp](https://wiki.gnome.org/Apps/Devhelp). In the future, it will be available directly from our documentation center with reference examples.


These widgets will automatically show up in Budgie Desktop Settings.

As a result of this re-architecture around Raven and leveraging past work on the panel widget plugin API, Raven widgets can now be positioned to your heart's content and you can even remove the ones you don't want (as opposed to just hiding them like our past implementation). All of the widgets that ship with Budgie Desktop leverage the same plugin architecture as third-party ones will.

### New and improved Raven widgets


Budgie 10.7.1 includes updates to some of our existing Raven widgets alongside a brand new one!

- The Media Player widget now has a more compact design.
- You can now click on the widget header icons for sound output and input to mute the respective device.
- You can now turn off day names in the Calendar widget.
- We now have a new Raven widget called Usage Monitor. This is a minimalistic widget that displays CPU, RAM, and Swap usage.

### Other Changes

Here is a short list of some other changes to Raven:

- The Power Strip, which has been off by default since 10.5, has been deprecated in favor of our improvements around the power dialog and more accessible power options via Budgie Menu.
- Refinements have been made to margins and paddings of widget components.
- Notifications are now sorted oldest to newest.

## Power Dialog


Budgie 10.7.1 introduces a new Power Dialog for common actions such as shutdown, reboot, suspend, and more. This functionality replaces the actions exposed through the User Indicator applet, no longer requiring it to be added to the panel. The User Indicator will now invoke the Power Dialog and the new button in Budgie Menu will do the same!

The Power Dialog is invokable through D-Bus, allowing third-party applet developers such as those making their own menu implementations to easily incorporate our power dialog options without much effort or requiring them to implement duplicate functionality. You can also invoke the power dialog with our handy (Win/Super)+Shift+P keybind.

Hibernation is dynamically enabled / disabled based off system support and is offered as a compile-time option to disable on operating systems which do not provide hibernation support out-of-the-box, such as Fedora.

## Other Improvements and Bug Fixes

### Bug Fixes

- Fix repeated terminal messages about non-existent desktop-directories folder. [#232](https://github.com/BuddiesOfBudgie/budgie-desktop/issues/232)
- Ubuntu Budgie dev Jacob has fixed two key long outstanding notifications issues.
    - Approx 800 or more notifications caused raven to not animate correctly, take a long time to appear. Now in total approx 500 notifications are held in raven and each notification group displays the latest 25 notifications
    - Notifications that were not acknowledged could over time cause budgie-panel to become unresponsive. These memory issues has now been resolved.

### Other Improvements

IconTasklist icons will now be scaled to the target size of approximately 2/3 that of the size of the panel itself, up to an icon size of 54px, where it shifts to the panel size minus 18. This allows for icons to scale to much smaller and much larger sizes, while retaining desirable icon sizes for dock setups, and while maintaining the same icon size for the default panel size of 36px.

- Add dock ability for panel.ini / layouts. [#88](https://github.com/BuddiesOfBudgie/budgie-desktop/issues/88)
- Configurable size for the Workspace switcher widget, enabling a selection of predefined multipliers for how many icons to show in each workspace. [#163](https://github.com/BuddiesOfBudgie/budgie-desktop/issues/163)
- Move polkit and power dialogs to libexecdir. [#260](https://github.com/BuddiesOfBudgie/budgie-desktop/pull/260)
- Update workspace item icons when the window icon changes. [#230](https://github.com/BuddiesOfBudgie/budgie-desktop/pull/230)
