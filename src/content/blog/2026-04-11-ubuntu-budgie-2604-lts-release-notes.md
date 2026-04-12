---
title: Ubuntu Budgie 26.04 LTS Release Notes
description: Whats new and changed in this release
pubDate: 2026-04-16
author: david
draft: false
---
[Welcome to Ubuntu Budgie 26.04](../welcome-to-ubuntu-budgie-2604)

[Community feedback highlights](../community-feedback-highlights)

[Road to budgie 11](../the-road-to-budgie-11)

[Ubuntu Budgie 26.04 Release Notes](../ubuntu-budgie-2604-lts-release-notes)



## **Introduction**

Ubuntu Budgie 26.04 LTS (Resolute Raccoon) is a **Long Term Support** release, supported for **three years** by the Ubuntu Budgie team.

This release ships with **Budgie Desktop 10.10.2** and marks a **full transition to Wayland**. Ubuntu Budgie 26.04 is **Wayland‑only** and uses **labwc** as the default compositor. No Xorg session is provided.

Note - we will be shipping a wayfire supported session through our backports PPA - more info on that in due course.

These release notes highlight the **key user‑visible changes since Ubuntu Budgie 24.04 LTS**, and document important behaviour changes introduced as part of the Wayland transition.

## **What’s New in 26.04**

### **Wayland‑Only Desktop**

Ubuntu Budgie 26.04 is a Wayland‑only release using Budgie Desktop 10.10.2.

What this means for users:

- Screen sharing, screenshots, and related integration use modern Wayland portals
- Display configuration follows wlroots tooling
- Some X11‑era workflows behave differently or are no longer available

For managing displays, **wdisplays** is the recommended configuration tool.

### **Budgie Desktop on labwc**

Budgie now runs on **labwc**, a wlroots‑based compositor focused on correctness and stability.

User‑visible improvements include:

- Multiple window focus modes (including *sloppy focus*)
- Improved handling of monitor hot‑plugging and output loss
- Improved resilience during suspend, resume, and output re‑appearance

### **Desktop Layout and Experience Updates**

Ubuntu Budgie 26.04 ships with a refined and settled default layout:

- **Crystal Dock** enabled and configured out‑of‑the‑box
- **Top Bar** reworked for the 26.04 layout
- **Menu favourites** integrated directly into the Applications Menu
- **Showtime** delivered as a **Raven widget**
- Power options available directly from the menu

Crystal Dock includes Wayland‑specific fixes and improved startup sequencing.

### **Login Manager and Greeter (SDDM)**

Ubuntu Budgie 26.04 uses **SDDM** with a custom Ubuntu Budgie greeter theme.

Enhancements include:

- Translation support
- Per‑user wallpapers
- Password field auto‑focus
- Improved session selection behaviour
- Customisation via the slickSDDM‑customize tool

### **Daily Usability Improvements**

Budgie Desktop 10.10.2 includes several refinements affecting daily use:

- Improved application matching in **Icon Tasklist**
  - Better grouping and pinning for Java apps, snaps, and similar edge cases
- Improved Budgie Menu sizing across resolutions and scaling factors
- Correct restore behaviour when toggling **Show Desktop**
- Screenshot tool remembers the chosen save path
- Panel and applet popovers now close correctly when focus changes
- Improved Qt6 application theming when apps support kcolorscheme

### **Accessibility and Input**

- Built‑in screen magnification (no external tools required)
- **Adaptive mouse acceleration enabled by default**
- Improved brightness handling using the standard backlight interface
- Wallpaper scaling respects the selected background style

## **Default Applications (Changes Since 24.04)**

- **VLC** is now the default media player  
(Parole is not included in 26.04)
- Nemo default icon size increased slightly
- Font Viewer now follows the system theme by default

## **Applets and Mini‑Apps**

Ubuntu Budgie 26.04 supports a broad range of **Wayland‑ready Budgie applets**. Applets reliant on X11‑specific functionality are not included in this release.

### **Supported Budgie Extras Applets (Wayland‑ready)**

- Applications Menu
- Clockworks
- Fuzzy Clock
- Kangaroo (popover behaviour tracked)
- Network Manager
- Quicknote
- Recently Used
- VisualSpace
- DropBy
- Workspace Switcher (wswitcher)
- WeatherShow
- Wallstreet (lock‑screen behaviour depends on upstream)
- Showtime (delivered as a Raven widget)

Additional supported applet:

- budgie‑indicator‑applet

### **New in 26.04**

**Screencast Applet**

- Full screen or area recording
- Optional audio capture
- Start / stop controls
- Recording duration display

### **Supported Third‑Party Applets (Packaged by Ubuntu Budgie)**

- budgie‑analogue‑clock‑applet
- budgie‑calendar‑applet
- Budgie‑clipboard‑applet
- budgie‑cpufreq‑applet
- budgie‑cputemp‑applet
- budgie‑lightpad‑applet
- budgie‑media‑player‑applet
- budgie‑performance‑gauge‑applet
- budgie‑sys‑monitor‑applet
- budgie‑user‑indicator‑redux‑applet

(Some may have minor Wayland‑specific behavioural differences.)

### **Applets Not Included (Wayland‑Only Limitations)**

The following applets are **not supported** in Ubuntu Budgie 26.04:

- **budgie‑carbon‑tray‑applet**  
(depends on XEmbed / X11)
- **budgie‑pixel‑saver‑applet**
- Legacy X11 global shortcut daemons

## **Desktop Icons**

Ubuntu Budgie 26.04 uses **budgie‑desktop‑view** instead of nemo‑desktop.

Desktop icons support:

- Selection and context menus
- Drag‑and‑drop reordering (icon swapping)
- Auto‑arranged or manual layouts

Creating new folders or files directly from the desktop is intentionally limited. This change is required for Wayland compatibility.

## **Wayland‑Specific Considerations**

### **Privileged (Administrative) Applications**

Some graphical administrative tools behave differently under Wayland:

- Applications not using pkexec may fail to launch graphically.  Use xhost based workarounds.
- Behaviour varies by compositor; **labwc** is intentionally strict

### **Virtual Machines**

Graphics behaviour in virtual machines depends on the hypervisor and acceleration settings:

- Cursor orientation, scaling, and redraw issues may occur
- **QEMU/KVM** is recommended
- Virtualbox can be used - graphics will not be accelerated and thus will be sluggish for video and other graphics intensive operations.
- GNOME Boxes should be avoided due to the limited configuration options available to make a great experience

## **Upgrading from Ubuntu Budgie 24.04 LTS**

Before upgrading:

1. Ensure the desktop meta‑package is installed
  1. sudo apt install ubuntu-budgie-desktop
2. Apply all updates and reboot
3. Back up important data
4. Disable third‑party PPAs prior to upgrading

Upgrade prompts follow standard Ubuntu LTS scheduling.

## **Fixed Issues and Stability Improvements**

Ubuntu Budgie 26.04 includes numerous fixes, including:

- Improved stability during monitor and output changes
- Improved focus behaviour in non‑click focus modes
- Improved Icon Tasklist application matching
- Screenshot accuracy improvements
- Popover close behaviour aligned with pre‑10.10 Budgie releases
- Improved handling of pkexec‑launched applications under Wayland

## **Known Issues**

Known issues are primarily related to Wayland transition areas described above, including:

- Legacy tray behaviour
- Some privileged GUI tools
- Applets still undergoing Wayland adaptation

Current advisories are tracked on Ubuntu Budgie Discourse.

## **Support**

Ubuntu Budgie 26.04 LTS is supported for **three years**.

Community support is available via:

- Ubuntu Budgie Discourse
- Ubuntu community support channels

## **Downloads**

Installation images and documentation are available from the **Ubuntu Budgie Downloads** page.