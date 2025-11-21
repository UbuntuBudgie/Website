---
title: "New edge tiling introduced in 23.04"
description: "New tiling options"
pubDate: 2023-01-19
category: "Other"
author: david
---

# Replacing the built-in edge-tiling

### Introduction

In the past few months, we've been exploring the options to create a more extended version of the built-in edge tiling, that we have been using for so many years.

Ubuntu Budgie's Window Shuffler already offered (a.o.) quarter & half tiling, activated by _keyboard shortcuts_, and controlling windows from the keyboard has been a priority since Shuffler first saw the daylight. For those who prefer "classic", visual edge tiling however, the built-in version is quite limited, and there's a lot to win in that area.

The choice to use Shuffler daemon as a starting point was obvious, since that's the place where most of the information to work with was already available.

### Features

#### Built-in

The currently used built-in feature offers left/right half and full screen tiling:  
  
![](images/builtin_edgetiling-744x98.png)

#### Drag-snap

The goal for our new _Drag-snap_ was to _at least_ cover the areas below:  
  
![](images/dragsnap_default-744x95.png)  
Quarter & half tiling is pretty much self-explaining.  
Dragging a window to the top of the screen will tile the window to top half, but keeping the mouse button pressed will progress the action into full screen tiling.

#### Asymetric tiling

_Symetric_ quarter & half tiling, dividing the screen in two or four equally sized areas, will do in many cases. just as often though, we don't want our windows to be equally sized, horizontally, but for example like this:  
  
![](images/dragsnap_asym-744x98.png)  
With traditional tiling, this would not be possible.  
Drag-snap however adds two modifier keys, invoking a slightly different behavior:

- Alt + drag will tile the window into 3/5 of the screen width
- Control + drag will tile the window into 2/5 of the screen width

\[video width="960" height="540" m4v="https://ubuntubudgie.org/wp-content/uploads/2023/01/asymetric\_tiling.m4v"\]\[/video\]

#### Integration with the desktop

If we drag a window into a corner of the screen, we might unintentionally fire a hotcorner action. To prevent that, drag-snap will communicate with hotcorners during dragging, to temporarily skip corner actions.

### How to get it?

Drag-snap will be the default in 23.04. If you are using 20.04, 22.04 or 22.10 and would like to try out, use Ubuntu Budgie Extra's daily:

`sudo add-apt-repository ppa:ubuntubudgie-dev/budgie-extras-daily`  
`sudo apt upgrade`  

**_Enjoy!_**
