---
title: "New hotcorners feature introduced in 23.04"
date: 2023-02-20
categories: 
  - "other"
---

### Introduction

With the beta release of 23.04 around the corner, it seems a good moment for another introduction to one of the innovations for Lunar; a new implementation of the _hotcorners_ feature. Hotcorners was completely rewritten and redesigned, to replace the current applet. There are significant differences, both from the user's perspective and from a technical point of view.

![](images/hotcorners_settings-744x608.png)

### From a user experience point of view:

- Hotspot areas are now extended to 8 spots (all edges & corners)
- The settings interface now has a dedicated window. The applet is still available for quick access to hotcorner settings, but is optional.

![](images/hcapplet-744x252.png)

- The options to set pressure and/or delay no longer exclude each other, so the user can fine tune his or her own touch to prevent unintended firing.
- Hotcorners now has another built-in feature to prevent unintended firing. When for example text is selected and we unavoidably hit the edge of the screen, the corresponding command could be triggered. Hotcorners therefore checks for mouse button 1 to be pressed, skips action if that is the case.

### From a technical point of view

- Hotcorners process now stands on its own feet, is no longer run inside the panel's thread. The applet is still available, but its task is limited , and hotcorner's settings is also available from the desktop menu.

![](images/sloppy_corner-744x126.png)

- New features require new procedures: we now have eight spots… If we for example set both the left edge, _and_ top left of the screen for an action, there is a reasonable chance that we hit the left or top edge before the top left corner. In such a case, we wouldn't want to fire the action for the edge, that we accidentally hit first, but the corner action that we aim for. If we hit two hot spots in a row, immediately after each other, (within 125 ms to be precise) hotcorners will consider the final one to be valid.

What stayed the same is that Hotcorners offers a number of preset commands from a dropdown list. Custom commands can be set by clicking the edit button in the settings window.

### How to get it?

The new version of Hotcorners will be the default in 23.04. If you are using 20.04, 22.04 or 22.10 and would like to try out, use Ubuntu Budgie Extra's daily:

`sudo add-apt-repository ppa:ubuntubudgie-dev/budgie-extras-daily`  
`sudo apt upgrade`  

**_Enjoy!_**
