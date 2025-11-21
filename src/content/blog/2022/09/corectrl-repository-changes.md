---
title: "CoreCtrl repository changes"
description: "Changes to repository of CoreCtrl"
pubDate: 2022-09-24
category: "News"
author: david
image: "/2022/09/images/corectrl.png"
---

# Premise

We recently introduced our [Ubuntu Budgie Welcome Gaming app](https://ubuntubudgie.org/2022/03/a-deep-dive-in-our-new-budgie-gaming-application/ "Ubuntu Budgie Welcome Gaming app"). It is an easy way for Ubuntu Budgie users to install useful games, gaming clients and tools. One of the tools included is CoreCtrl. CoreCtrl is a software that allows us to control hardware via application profiles. You can learn more about CoreCtrl on its [gitlab page](https://gitlab.com/corectrl/corectrl "gitlab page"). CoreCtrl is available for Ubuntu via [mesarc PPA](https://launchpad.net/~ernstp/+archive/ubuntu/mesarc "mesarc PPA"). Mesarc repository includes updated mesa, firmware, and graphics drivers from git almost stable. While it brings a lot of fast improvements for those that have Intel or AMD GPUs, we received a few reports from our users that this PPA created issues with unmet dependencies. We were able to reproduce it a couple of times on our testing machines.

# Decision

Ubuntu Budgie Welcome Gaming application should provide an easy way to install gaming tools for everyone. Therefore we decided to remove any risk involved with non supported graphic stack, but leave the CoreCtrl package that everyone likes

# How do we achieve that?

CoreCtrl Gitlab page already outlines a solution. It is easy and well supported on Ubuntu: apt repository pinning. This is often used by system admins to tweak repository priorities, for example for those that want to get updates from the Ubuntu backports repo.

# Solution

We created a small bash script that automatically runs when our users click on the CoreCtrl installer. This script pins the repository so that only the CoreCtrl package is fetched from the mesarc ppa. All other packages in the PPA are ignored.

# But I am tech Savvy!

If you know what you are doing, and you are willing to fix your system when unsupported graphics drivers break it, the solution is simple. Just head to /etc/apt/preferences.d/corectrl , edit pinning preferences to your liking, and that's it. If you decide to do so, and find any bugs with mesarc PPA, we recommend you get in touch with the maintainer of the PPA, file bugs, and help him. This is the link of mesarc PPA in Launchpad: [https://launchpad.net/~ernstp/+archive/ubuntu/mesarc](https://launchpad.net/~ernstp/+archive/ubuntu/mesarc)

# Conclusion

We value input from our community. We wish to thank you all those that take their time to file bugs, ask help in Discourse, and make suggestions. Constructive criticism is always welcome. What do you think of this change? Share your thoughts on Ubuntu Budgie Discourse!

# References

CoreCtrl Gitlab page: [https://gitlab.com/corectrl/corectrl](https://gitlab.com/corectrl/corectrl)
