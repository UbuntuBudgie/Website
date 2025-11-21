---
title: "Automate System Updates on Ubuntu Desktop"
date: 2022-03-18
categories: 
  - "tutorial"
tags: 
  - "ubuntu"
  - "ubuntu-budgie"
  - "unattended-upgrades"
---

## Introduction

Please note this configuration below is suitable for desktops. For servers, we would need to dig a bit deeper in options, systemd services, timers, email notifications, automatic reboot, and more. Also, I strongly recommended to take system snapshots with Timeshift on a daily basis, and Clonezilla every month.

## Goals

Our goal is the following: Automate cleanup of old kernels, system updates, and cleanup of older kernels and packages.

This is a very useful thing to have on a desktop PC. I keep both linux-image-lowlatency as my primary kernel, and linux-image-generic as fallback. Because of that, I don't really need to keep 10+ copies of previous kernels on my desktop or laptop. This not only wastes space on my system, but in case of my commonly used setup, encrypted LVM, can be a major annoyance. Why?

LVM partitions cannot be bootable, and a fully encrypted system, where even the boot partition is encrypted, Initial decrypt takes forever, and has no visual feedback. On Ubuntu desktop, and most flavours, /boot partition is a small, non-LVM and non encrypted partition. This helps a great deal with initial decrypt speed and it looks quite nice. However it is a small partition that fills up pretty quickly with old unused kernels. Manual cleanup is possible but I consider it a waste of time. Also if done without care, I could end up removing all the kernels from my system. And that would be less than ideal.

## Check currently installed kernels

Running the command below, you can list how many kernels you have. If you never used unattended upgrades, you should see a long list of kernels.

```
dpkg --list | grep linux-image
```

## Configure Unattended Upgrades on Ubuntu Desktop or Flavours

### Install and enable unattended upgrades

```
sudo apt install unattended-upgrades apt-listdifferences
```

Configure the package, and select to automatically download updates when asked:

```
sudo dpkg-reconfigure -plow unattended-upgrades
```

### Fine-Tune Unattended Upgrades

Backup default configuration file:

```
cp  /etc/apt/apt.conf.d/50unattended-upgrades  /etc/apt/apt.conf.d/50unattended-upgrades.bak
```

Edit this file:

```
 /etc/apt/apt.conf.d/50unattended-upgrades
```

Uncomment / change / add the following lines:

```
Unattended-Upgrade::Allowed-Origins {
        "${distro_id}:${distro_codename}";
        "${distro_id}:${distro_codename}-security";
        // Extended Security Maintenance; doesn't necessarily exist for
        // every release and this system may not have it installed, but if
        // available, the policy for updates is such that unattended-upgrades
        // should also install from here by default.
        "${distro_id}ESMApps:${distro_codename}-apps-security";
        "${distro_id}ESM:${distro_codename}-infra-security";
        "${distro_id}:${distro_codename}-updates";
//      "${distro_id}:${distro_codename}-proposed";
        "${distro_id}:${distro_codename}-backports";
};

Unattended-Upgrade::Remove-Unused-Kernel-Packages "true";
Unattended-Upgrade::Remove-New-Unused-Dependencies "true";
Unattended-Upgrade::Remove-Unused-Dependencies "true";
```

Let's have a look at the options above. First of all we need to have Unattended-Upgrade fetch updates from all repositories but the proposed one. Proposed should stay commented for most users. Last 3 options to uncomment are specific to remove unused kernels and dependencies.

There is a lot more we can do with Unattended Upgrades but for Ubuntu Desktop, or flavours, this should be more than enough.

## Final note on Unattended Upgrades

In order for Unattended Upgrades to do its job, you need to let it run on its own. If you manually upgrade every few hours, then Unattended Upgrades will never have the chance to do its magic.

If you want to manually see what it does, you can manually run Unattended Upgrades in verbose mode:

```
sudo apt update
sudo unattended-upgrades -v
```

After a few days or weeks that it runs on its own, you can list your installed kernels again, and the list should be shorter. You can also check /boot size and notice a difference in size.

```
dpkg --list | grep linux-image
```

You can also check /boot size and notice a difference in size.

```
sudo du -hc --max-depth=1 /boot
```

## Conclusion

This quick write up was inspired by a question from one of our community members on Ubuntu Budgie Discourse. I thought it could be beneficial to write here, so that others could benefit from it.

## References

- [https://help.ubuntu.com/community/AutomaticSecurityUpdates](https://help.ubuntu.com/community/AutomaticSecurityUpdates)
- [https://help.ubuntu.com/community/RemoveOldKernels](https://help.ubuntu.com/community/RemoveOldKernels)
