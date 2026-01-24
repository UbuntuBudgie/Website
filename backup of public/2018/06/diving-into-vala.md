---
title: "Diving into Vala ..."
description: "Vala development"
pubDate: 2018-06-25
category: "News"
author: david
---

We thought we just throw some thoughts together as we explore using the programming language Vala for potential future development.

Vala is - we understand - a language written initially by GNOME to develop GTK+ applications and interfaces. The Elementary OS developers have embraced this language. Budgie Desktop itself is primarily written in Vala.

Why? It is fairly efficient - compiles to small executables and shared object libraries - and hence reduces memory usage. It is fairly memory safe - in that - whilst C can and will enable you to shoot yourself into your proverbial foot/head - at least Vala will hide the major C intracasies leading to more robust code. Well that's the claim anyway.

As a team, our profiencies is primarily Python and Go. So exploring Vala is "interesting" - but very slow going since we keep thinking "well we did it this way in python ... so why doesnt Vala work in this way".

Why are we looking at Vala? Well, we do want to understand the underlying components of Budgie Desktop - and hopefully fully understand what could & should be backported to 18.04LTS. Longer term - maybe/hopefully helping upstream in its maintainance.

So we began by looking for tutorials already written. The [valadoc](https://valadoc.org/) website we have found is the best for beginners. The GTK+ kickstart video is really good - essential viewing. The two longer videos on that site are well worth reviewing and bookmarking.

The compile budgie desktop based applets you need to install the package \`budgie-core-dev\`.

Best steer clear from the upstream "budgie-desktop-examples" repo. We couldn't get it to compile - probably because it hasn't been updated to work with budgie-desktop v10.4.x Popovers.

Excellent third-parties, [Daniel Pinto](https://github.com/danielpinto8zz6/budgie-calendar-applet) and [Cybre's](https://github.com/cybre/budgie-screenshot-applet) repositories are excellent reference points.
