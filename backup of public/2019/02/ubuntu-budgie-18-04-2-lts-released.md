---
title: "Ubuntu Budgie 18.04.2 LTS Released!"
description: "New release available"
pubDate: 2019-02-15
category: "News"
author: david
image: "/2019/02/images/ubuntu_budgie_18.04.2-small.jpg"
---

We are pleased to announce the **release** of the next version of our distro, our second LTS point release as an official flavor of the **Ubuntu** family.

The LTS version is supported for 3 years while the regular releases are supported for 9 months.

<!--more-->

The new release rolls-up various fixes and optimizations the Ubuntu Budgie team have released since the 18.04.1 release in July last year:

1. The kernel and graphics found in 18.10 have been backported to 18.04. This is part of the Hardware-Enablement-Stack release and 18.04 users who install the HWE (see later) are automatically upgraded to the next kernel and graphics stack approx 3-4 months after a release.
    
2. Maintenance release of budgie desktop:
    
    - Ensure show-desktop applet toggles correctly after showing a tooltip
    - Allow cancel from polkit windows
    - Make notifications consistent size; stop overlarge notification windows
    - Ensure notifications remain visible if mouse is hovering over theme
    - Support user based themes in legacy ~/.themes folder
    - Enable autohiding when using multiple budgie panels
    - deduplicate All category Menu
3. Maintenance release of our Pocillo theme with fixes to resolve:
    
    - Raven Styling
    - Vertical dock highlighting
    - GtkColorChooser border truncation
    - GEdit search styling
    - Eog zoom truncation
    - Ensure Titlebar button are always circular
    - Nemo not themed
4. budgie welcome updates including new applets Desktop Weather & Network Manager
    
5. Lots more translation updates to budgie welcome
    

For the more adventurous we have also made available the budgie desktop version found in our 18.10 release. For more details please read the [release notes](https://ubuntubudgie.org/blog/2018/09/27/18-10-release-notes)

We also inherits hundreds of stability, bug-fixes and optimizations made to the underlying Ubuntu repositories. Many thanks to all the volunteers, Debian & Ubuntu maintainers and Canonical employees who have done such a sterling job packaging the changes that many more developers from all over the world have resolved. The power of FOSS that we are all proud to be part of.

You can read more about 18.04 via our [release notes](https://ubuntubudgie.org/blog/2018/03/08/18-04-release-notes). Upgrade instructions from 16.04 budgie-remix is included. Please have a read of these since there is an extra step you need to do post-upgrade.

[**Download** links](https://ubuntubudgie.org/downloads) and installation guide are provided. As always - do check the md5sum hash value of the downloaded ISO - this really does help you get on with a flying start for your install.

Users of Ubuntu 16.04 are offered an automatic upgrade to 18.04 via Update Manager. For further information about upgrading, see:

- [https://help.ubuntu.com/community/BionicUpgrades](https://help.ubuntu.com/community/BionicUpgrades)

As always, upgrades to the latest version of Ubuntu are entirely free of charge.

We recommend that all users read the the Ubuntu 18.04 release notes, which document caveats and workarounds for known issues affecting all flavours including Ubuntu Budgie. They are available at:

- [https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes](https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes)

## HWE

The Ubuntu LTS enablement (also called HWE or Hardware Enablement) stacks provide newer kernel and X support for existing Ubuntu LTS releases. These enablement stacks can be installed manually but are also available when installing with Ubuntu LTS point release media such as 18.04.2

We would stress - if everything is working as you expect, there is no need to change to the HWE. If you need newer graphics for applications and games, or if you are moving your installation to newer hardware then you may wish to consider uplifting your installation to the HWE.

To install the HWE (only applies to everyone who installed at 18.04 and 18.04.1):

```
sudo apt-get install --install-recommends linux-generic-hwe-18.04 xserver-xorg-hwe-18.04
```

* * *

If you have a question, or if you think you may have found a bug but aren't sure, you can try asking in any of the following places:

- `#ubuntu on irc.freenode.net`
- Ubuntu Budgie's support [forum](https://discourse.ubuntubudgie.org/) is always open and ready to help you.
- [http://lists.ubuntu.com/mailman/listinfo/ubuntu-users](http://lists.ubuntu.com/mailman/listinfo/ubuntu-users)
- [http://www.ubuntuforums.org](http://www.ubuntuforums.org)
- [http://askubuntu.com](http://askubuntu.com)

## Help Shape Ubuntu

If you would like to help shape Ubuntu, take a look at the list of ways you can participate at:

- [http://www.ubuntu.com/community/get-involved](http://www.ubuntu.com/community/get-involved)

**Thank you all** for your continued support - **spread the news!**

David, Ubuntu Budgie Project Leader.

P.S. here is a nice video to show off 18.04 Ubuntu Budgie. Enjoy!

<iframe src="https://www.youtube.com/embed/atBXTU0Sv5w?controls=1" allowfullscreen width="690" height="390"></iframe>
