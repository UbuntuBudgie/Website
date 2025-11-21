---
title: "Ubuntu Budgie 18.04.4 LTS Released!"
description: "Ubuntu Budgie 18.04.4 LTS now available"
pubDate: 2020-02-12
author: david
category: "News"
---

(images/ubuntu_budgie_18.04.4_small-744x496.jpg) Ubuntu Budgie 18.04.4

We are pleased to announce the release of the next version of our distro, our fourth LTS point release as an official flavor of the Ubuntu family.

The LTS version is supported for 3 years while the regular releases are supported for 9 months.

The new release rolls-up various fixes and optimizations that have been released since the 18.04.3 release in August:

The kernel and graphics found in 19.10 have been backported to 18.04. This is part of the Hardware-Enablement-Stack release and 18.04 users who install the HWE (see later) are automatically upgraded to the next kernel and graphics stack approx 3-4 months after an interim release. So 18.04.3 users will see the new packages appearing now.

Budgie Welcome updates include lots more translation updates.

For the more adventurous we have the 10.5 budgie desktop in our backports repository. Just enable via budgie-welcome - recommendations. For those that are using 10.5 we have backported stability fixes such as:

- keyboard shortcuts not working on logon
- reduction on the occasional crash reports when logging in.

We also inherits hundreds of stability, bug-fixes and optimizations made to the underlying Ubuntu repositories. Many thanks to all the volunteers, Debian & Ubuntu maintainers and Canonical employees who have done such a sterling job packaging the changes that many more developers from all over the world have resolved. The power of FOSS that we are all proud to be part of.

You can read more about 18.04 via our release notes.

[Download links](https://ubuntubudgie.org/downloads/ "Download links") and installation guide are provided. As always - do check the md5sum hash value of the downloaded ISO - this really does help you get on with a flying start for your install.

As always, upgrades to the latest version of Ubuntu are entirely free of charge.

We recommend that all users read the the Ubuntu 18.04 release notes, which document caveats and workarounds for known issues affecting all flavours including Ubuntu Budgie. They are available at:

[https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes](https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes)

## HWE

The Ubuntu LTS enablement (also called HWE or Hardware Enablement) stacks provide newer kernel and X support for existing Ubuntu LTS releases. These enablement stacks can be installed manually but are also available when installing with Ubuntu LTS point release media such as 18.04.4

We would stress - if everything is working as you expect, there is no need to change to the HWE. If you need newer graphics for applications and games, or if you are moving your installation to newer hardware then you may wish to consider uplifting your installation to the HWE.

To install the HWE (only applies to everyone who installed at 18.04 and 18.04.1):

```
sudo apt-get install --install-recommends linux-generic-hwe-18.04 xserver-xorg-hwe-18.04
```

## 32BIT ISO

32 bit support is something we have committed to support for the duration of the LTS period. The vast majority of computers today will run the 64bit ISO just fine - so please use that first.

32bit HWE intel graphics may cause issues with either booting or after installation.

If you have a question, or if you think you may have found a bug but aren't sure, you can try asking in any of the following places:

- # ubuntu on irc.freenode.net
    
- [Ubuntu Budgie's support forum](https://discourse.ubuntubudgie.org "Ubuntu Budgie's support forum") is always open and ready to help you.
- [http://lists.ubuntu.com/mailman/listinfo/ubuntu-users](http://lists.ubuntu.com/mailman/listinfo/ubuntu-users)
- [http://www.ubuntuforums.org](http://www.ubuntuforums.org)
- [http://askubuntu.com](http://askubuntu.com)

## HELP SHAPE UBUNTU

If you would like to help shape Ubuntu, take a look at the list of ways you can participate at:

[http://www.ubuntu.com/community/get-involved](http://www.ubuntu.com/community/get-involved)

* * *

Thank you all for your continued support - spread the news!

David, Ubuntu Budgie Project Leader.
