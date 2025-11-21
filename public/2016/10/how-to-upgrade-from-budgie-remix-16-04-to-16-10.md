---
title: "HOW TO UPGRADE FROM BUDGIE-REMIX 16.04 TO 16.10"
date: 2016-10-08
categories: 
  - "news"
coverImage: "how_to_upgrade.jpg"
---

#### ![how_to_upgrade](images/how_to_upgrade.jpg)

#### **HOW DO I UPGRADE TO BUDGIE-REMIX 16.10 ?**

Good question – our recommended upgrade method is below – please follow this if you intend to upgrade to budgie-remix 16.10 from budgie-remix 16.04.1.

#### BEST METHOD

- clean install – backup what you need to a USB external drive and restore later.

#### ALTERNATIVELY UPGRADE AS FOLLOWS:

**IMPORTANT:**

- backup – backup – backup – we cannot stress this enough – Use [this Q&A](http://askubuntu.com/questions/19901/how-to-make-a-disk-image-and-restore-from-it-later) to help
- make sure you are fully up-to-date – **don’t miss this step**

```
sudo apt update
sudo apt full-upgrade
```

- Plugin to a wired connection not wireless

#### STEP 1

- Launch gnome-software:

![s5](images/s5.png)

- Choose Software & Updates

![s4](images/s4.png)

- in the update tab change “notify me of a new ubuntu version”  to the value “For any new version”

- close gnome-software

#### STEP 2

- CTRL+ALT+T to open a terminal and type the following:

```
sudo do-release-upgrade
```

- press ENTER when requested

![s3](images/s3.png)

- press y when requested to download all updates

![s2](images/s2.png)

- press y to remove obsolete packages

![s1](images/s1.png)

**IMPORTANT**: press n to complete the upgrade i.e. **you DONT want to reboot**.

```
sudo add-apt-repository ppa:budgie-remix/ppa
sudo apt update
sudo apt full-upgrade
sudo reboot --
```

If you are using the plank dock with Arc-Theme – start menu – plank preferences Change the plank theme to GTK+ and the new recommended icon size is 32px
