---
title: "Budgie Desktop v10.4 released for Debian and Ubuntu"
description: "Budgie Desktop release"
pubDate: 2017-08-28
category: "News"
author: david
image: "/2017/08/images/budgie-desktop-v10.4-release-small.jpg"
---

![Budgie desktop v10.4 release small](images/budgie-desktop-v10.4-release-small.jpg)

Its my pleasure to announce the release of the latest Budgie Desktop for both Debian and Ubuntu users.

The release is for:

1. Debian unstable
2. Debian Buster (will be sync'd next week)
3. Ubuntu 17.10
4. Ubuntu Budgie 17.10
5. Ubuntu 17.04
6. Ubuntu Budgie 17.04
7. Ubuntu 16.04.3
8. budgie-remix 16.04.3

At the same time, I have refreshed all builds made available by the fantastic indie budgie developers

- budgie brightness control applet
- budgie calendar applet
- budgie haste applet
- budgie indicator applet
- budgie system monitor applet
- budgie pixel saver applet (17.04/17.10)
- budgie weather applet (17.04/17.10)
- budgie global menu (17.04/17.10)

Budgie Welcome has been updated with all the latest translations; all the above applets can be installed from Budgie Welcome.

... and you want more?! EvopPop and EvoPop Azure themes are also now available to be installed - just open up Budgie Welcome - default settings

Upstream, the [Budgie Desktop organisation](https://budgie-desktop.org/2017/08/18/release-of-budgie-10-4/)  has published a really great guide of all whats new - so check it out now!

**Notes**:

Budgie Pixel Saver applet no longer works on Ubuntu 16.04. If you want to have a look and fix it up then get in touch.

Budgie Desktop v10.4 introduces theming changes - specifically themes for the new popovers you see when clicking on applets. All 3rd party budgie themes will need updates to make the popovers work correctly. So again - please contact us and help out fixing these themes - especially for those Ubuntu 16.04 themes.

All of you need to dig in please - upstream themers have moved on to newer GTK versions, so you all need to **help and fix for your fellow 16.04 users**.

**How to install**:

For Debian unstable and Debian Buster:

```
sudo apt install budgie-desktop
```

For budgie-remix 16.04 users, just update & reboot as normal.

For 16.04 Ubuntu users:

```
sudo add-apt-repository ppa:budgie-remix/ppa
sudo apt update
sudo apt install budgie-desktop
```

For 17.04 Ubuntu users:

```
sudo add-apt-repository ppa:ubuntubudgie/backports
sudo apt update
sudo apt install budgie-desktop
```

For 17.04 Ubuntu Budgie users:

- Open budgie-welcome - Recommendations. Enable "Backports". Then, update and reboot as normal

For 17.10 Ubuntu users:

```
sudo apt install budgie-desktop
```

For 17.10 Ubuntu Budgie users ... just update and reboot!

David (project lead)
