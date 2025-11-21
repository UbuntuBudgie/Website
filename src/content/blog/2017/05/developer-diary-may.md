---
title: "Developer Diary - May"
description: "Development diary"
pubDate: 2017-05-30
category: "News"
author: david
image: "/2017/05/images/gifts.jpg"
---

Nikola has persuaded me to keep a diary of what happens on the team - so here it is - kind of seems like a lot of random stuff ... and I'm no wordsmith - but lots of things happening in and around the team.

Lets plough in.

# Swag time!

![Gifts](images/gifts.jpg)

Vincenzo has been busy working with zazzle.com on designing some unique Ubuntu Budgie swag stuff you can buy. At the same time you will be helping us earn some much needed revenue needed to keep the project running and growing. The store is now available [https://www.zazzle.com/s/ubuntu+budgie](https://www.zazzle.com/s/ubuntu+budgie) - there is great stuff to choose from. We'll be including this in budgie-welcome and our website soon.

Dustin has been working to create a link to the store via our website and budgie-welcome as well. We'll add an updated budgie-welcome to 16.04/16.10 and 17.04 backports as soon as its ready.

Udara has also been working on some designs for Ubuntu Budgie swag. Looking forward to seeing these.

## Making things better...

Lots of fixups have been made to Ubuntu Budgie 17.10 to accommodate Terminix changing its name to Tilix. Also, now have the ability to search in the menu for all Settings control panel icons. The odd uxterm and xterm menu items has gone, as has the guest session from the login greeter - it didnt work anyway - N.B. if anyone can figure out why you cannot login to the guest session please let me know.

Video thumbnails now appear in Files (Nautilus) without needing GNOME Videos (Totem) installed - yay!

These fixes and enhancements have been uploaded to Artful.

I have been listening to issues raised via our gitter chatroom. Chief amongst them was that some people did not want plank installed - for 17.04 deinstalling plank would also remove some critical Ubuntu Budgie packages. This has now been resolved in 17.10. Top Tip - to stop plank running - just open "Start Up applications" and untick plank.

![Workspace%201 029](images/Workspace201_029.jpg)

Dropbox has been a real pain in the past - it is proprietary software and has only worked on Unity (it is hardcoded in the binary). Fortunately I have used a workaround to fool Dropbox to think it is running in Unity. This fix has been accepted into Artful. I've backported this to 17.04 users - just upgrade with backports enabled.

HEXCube has resolved now the annoying issue with not being able (easily) to enter the crypt password for a full-disk encrypted installation. It boiled down to our switch to "ubuntu budgie" name - the plymouth theme and the theme components needed to be identical. So with a careful bit of renaming crypt password entry is now possible ... and as a side effect, the plymouth theme applies all the way through to the login screen. This has been uploaded to Artful.

In April I worked on gathering together upstream fixes from the v10.3 budgie-desktop and applied this to 17.04 budgie-desktop 10.2.9 as a stable-release update. This has been accepted, tested and released.

- Bottom panel popups - hopefully for most setups, the popup "drop from top to bottom" issue has been resolved
- Notification icon no longer turns red when first logon and network is connected.
- ALT+F2 run-dialog box is correctly sized

A few people have had issues with removing packages and accidentally uninstalling the key package budgie-desktop-environment. I have pushed a change available in backports to prevent this happening.

## New Development

I have spent lots of time working with Konstantin on his [global appmenu project](https://github.com/rilian-la-te/vala-panel-appmenu) . I resolved budgie-desktop showing the global menu in a transparent colour, lots of debian packaging issues, MATE issues and freezes. Test PPA is available for 16.04, 16.10 and 17.04 - ppa:ubuntubudgie-dev/global-menu-test. Ubuntu MATE are interested in this project as well and it may well find its way into the 17.10 repositories. We'll keep you informed if this happens.

![Globalmenu](images/globalmenu.jpg)

I have been looking at slick-greeter the forked Unity Greeter by Linux Mint. This is a gorgeous HiDPI capable greeter and is completely distro agnostic unlike the Unity greeter Have been working with Linux Mint devs to resolve some issues. Also, in record time, have submitted the package to Debian - accepted and is now in 17.10 repositories.

The new greeter will make its debut in Ubuntu Budgie for 17.10 and is now available in our 17.10 dailies.

![Workspace%201 031](images/Workspace201_031.jpg)

I have reworked Budgie Welcome - Default Settings page themes. This now correctly works with all budgie-remix/Ubuntu Budgie versions. I have uplifted it to the very latest bootstrap version. Works faster now with subtle but better animations.

Themes now have a lightbox display enabling you to enlarge the theme picture. For 16.04 users we have dropped Vimix - upstream changes have broken this theme. Exclusively for 16.04 users - Vertex is now available to be applied through this screen. Also, Ceti-2 is a brand new theme package now available and installable through budgie-welcome. Also have packaged up the theme Flat-plat. We are just evaluating this and if its a good fit we'll make it available as an install. More news later on this.

Have tidied the budgie-desktop v10.3 packaging and submitted to Debian for evaluation. Once accepted this will make its way into the 17.10 repositories.

Udara has been created a nice bit of material design wallpaper artwork - this will debut in 17.10. Additionally Udara has created a banner for our upcoming 17.10 wallpaper contest. So fair warning - get those fantastic unique photos ready - contest will be announced in June.

![Artful wallpaper contest](images/artful-wallpaper-contest.jpg)

Niyas has been added a few tidyups to Budgie Welcome. Some preliminary work as been added (but not yet activated) that will enable the whole interface (layout/themes/fonts) to be switched. We have plans for the ability to switch between Ubuntu Budgie look and feel, Classic Budgie, MacOS type switch, MATE type look and feel and a Unity makeover. More news as and when this develops.

We had a few enquiries about GNOME tracker being added to Ubuntu Budgie 17.04. This is because we included GNOME Photos and GNOME Documents as default applications. I have decided that for 17.10 we will drop GNOME Photos and GNOME Documents and hence tracker has also disappeared. gThumb will be the replacement Photos app. Note - 17.10 / 18.04 may pull in GNOME Tracker through Files (Nautilus) - I'll monitor what is happening during the 17.10 development to see if this happens.

## Really random

Have spent a bit of time creating a list of papercuts - quick and easy stuff for everyone to delve into. Announcement shortly as to what these are and how you can get involved.

Dustin has been spreading the Ubuntu Budgie message at the Linux Fest 2017 Northwest event this month. He has also been podcasting as well.

Budgie Welcome has been getting some translation updates. Have been spending time with any languages that have lots of translations done and incorporating them into budgie-welcome. This has been uploaded to our backports repository for 17.04. More help with translations is needed - so please delve in - [https://www.transifex.com/ubuntu-budgie/budgie-welcome/](https://www.transifex.com/ubuntu-budgie/budgie-welcome/)

Nikola has been tidying up the Ubuntu Budgie website. Team Pages has been revamped as has the Gallery and Features page. All of the website is now mobile friendly.

## and finally...

We always would welcome feedback, suggestions - and of course help. Pop-by our [chatroom](https://gitter.im/ubuntubudgie/community)  or reach-us via our [contact-us](https://ubuntubudgie.org/admin/blog/post/@page/4)  link.

cheers

David (project lead)
