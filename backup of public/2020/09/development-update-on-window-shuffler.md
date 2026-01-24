---
title: "Development update on Window Shuffler"
date: 2020-09-18
categories: 
  - "other"
---

## The history

Ubuntu Budgie's [first edition](https://www.youtube.com/watch?v=Ii4n8H4XEzc "first edition") of tiling tool Window Shuffler was written during spring of 2018. The general tendency to add tiling features to the desktop environment is obvious, and we were pleased to get reports that shuffler also works well on Mate and GNOME Shell.

The tool was initially mainly oriented on -and written around- the grid- GUI. Much of the functionality _could_ be called from the keyboard (quarter/half tiling etc.) or from hot-corners via custom commands, but options to do so were not obvious to the average user. You had to read the Release notes to find out the correct keyboard combinations or cli commands.

While generally all worked fine, there were a few weak spots to consider:

- Due to the fact that it was written in Python, the code potentially suffered from a cold start, and the tool was kind of sluggish in some cases.
- Having to call a GUI to arrange windows, shuffler presented itself as a separated tool rather than an integrated feature, and the GUI was an extra step in the workflow.

## New Shuffler 2020

At the end of 2019 - beginning of 2020, the code was completely reorganized and rewritten in Vala. In the new design, a number of "satellites", executables performing their different tasks, are situated around the heart of shuffler: _shuffler-daemon_. This daemon takes care of all procedures that would normally suffer from a cold start, like pre-loading libraries, initiate calculations and maintain information to be available instantly via dbus calls. The separate executables furthermore share their functionality where possible and useful. The result is a prompt response on the keyboard, and a more flexible and scalable Shuffler. New Shuffler furthermore solved discover-ability by a new and easy to understand Shuffler Control Center via the menu, including an overview of all keyboard shortcuts.

From a user's perspective, instead of being created around the GUI, the tool is now mainly oriented on controls by keyboard. The grid GUI (also redesigned and simplified) is an extra option on top of it, and a quick shortcut to define grid sizes.

Along With the rewrite, a number of new options and improvements was introduced, such as resizing in all directions from the keyboard, swapping window size & position, show warnings on attempts to resize below a window's minsize, "sticky neighbors" (resizing adjacent windows), options to use margins & padding etcetera.

## Current development

Current development again includes major extents to Shuffler's features. While Shuffler so far was mostly about straightforward tiling, moving & resizing, two of the latest additions make a slight flirt into the direction of automation:

- **Shuffler window rules** - is the new option to make windows of a specific WM\_CLASS (any) open on any position on any of the connected monitors.
    
    \[video width="960" height="540" mp4="https://ubuntubudgie.org/wp-content/uploads/2020/09/rules2.mp4"\]\[/video\]
    
- **Shuffler Layouts** - is the new option to create predefined window layouts for a quick setup of the working environment (single click or keyboard press).
    
    \[video width="960" height="540" mp4="https://ubuntubudgie.org/wp-content/uploads/2020/09/layout2.mp4"\]\[/video\]
    

Both of these features are already programmed into shuffler, and can be manually managed (configuring files). Next challenge is to design a new control center, simple enough to understand quickly what is what, but still with all possibilities under the fingertips.

## Community input!

Exactly the latter is where we'd love to have some input from the community. Although in general it might be safe to assume that mostly advanced users will be using more complex possibilities of tiling tools, we'd like to think it could save many users quite some time and effort to arrange their work environment. The aim of a new Shuffler Control Center is to make options and possibilities as obvious as they can be. We are inviting you to join us in the discussion on the outline of a new Shuffler Control Center. Please [join us on Discourse](https://discourse.ubuntubudgie.org/t/new-control-center-of-window-shuffler-share-your-thoughts/4167 "join us on Discourse") to do so!

To follow latest development on Shuffler on 20.04 and 20.10, add the ppa of Budgie extras daily:

`sudo add-apt-repository ppa:ubuntubudgie-dev/budgie-extras-daily`  
`sudo apt-get update`
