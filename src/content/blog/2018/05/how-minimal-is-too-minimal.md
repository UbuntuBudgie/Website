---
title: How minimal is too minimal?
description: Minimal install
pubDate: 2018-05-06
author: david
image: /files/media/budgie-codename-with-logo-744x251.jpg
draft: false
---
So, with the release of Bionic Beaver (18.04) came a new feature for a "minimal" install. This minimal feature is something that many people have provided excellent feedback on and it appears to be a loved feature. I'm one of those people. But with that, comes to the opinionated concept of how minimal is "too" minimal. Is this just a reduction of apps? Does this include knocking down configuration to the defaults of the upstream packages? Somewhere in the middle? Each person you ask will have a different answer. We had gone more so on the extreme side to allow people to layer up as they saw fit, and many people love this approach. But it is not for everyone.

The unfortunate thing is that the installer in its current form does not allow for a middle tier.

And, the fortunate thing is that it is pretty darn simple to add a few packages to get the "Ubuntu Budgie" feel and configuration. i.e. panel layout/default keyboard shortcuts such as print-screen, tilix quake mode, dynamic workspaces, window-shuffler, etc.

TLDR;

*   Install with the minimal install option.
*   Open a terminal and run:

_sudo apt update && sudo apt install budgie-desktop-environment gnome-screenshot && nohup budgie-panel --reset --replace &_

*   Reboot to activate all the goodness.

If you come across anything that you feel needs to be added to this set of commands, we invite you over to [the forum](https://discourse.ubuntubudgie.org/)  to discuss!

I'm sure there will need to be some refinement to these instructions. :-)