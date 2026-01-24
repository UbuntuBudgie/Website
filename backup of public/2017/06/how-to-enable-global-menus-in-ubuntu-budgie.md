---
title: "How To Enable Global Menus in Ubuntu Budgie"
description: "Guide"
pubDate: 2017-06-04
category: "News"
author: david
Image: "/2017/06/ubuntu-budgie-global-menus.png"
---

The intent of this post is to provide a short and to the point how to enable the global menu in Ubuntu Budgie. **Please keep in mind that this is in testing**. So the general caveats apply when installing test software. Things have been smooth for me at this point.

So on to it.

### Add the specific global menu test PPA.

```
sudo add-apt-repository ppa:ubuntubudgie-dev/global-menu-test
sudo apt-get update
```

### Install the required packages.

```
sudo apt install budgie-pixel-saver-applet budgie-appmenu-applet
```

- Logout and then back in to see the new applets in Raven.

### Add the new applets to your panel

- Open Raven (_Box with arrow in the upper right corner of your panel_)
- Press the gear Icon (_top right corner of Raven_)
- Select Panel tab (_top right corner_)
- Press the `+` next to the _Applets_ title
- Add the `show-menus-from-windws` & `pixel saver` applets
- Adjust the location of the applets to your desired spot. Usually be defaukt they are added centered. Not so ideal forthis use case. I usually add both just to the right of the spacer applet next to the menu.

The the the that's all folks!
