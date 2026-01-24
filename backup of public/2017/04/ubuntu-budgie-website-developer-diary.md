---
title: "Ubuntu Budgie Website - Developer Diary"
description: "Development diary"
pubDate: 2017-04-18
category: "News"
author: Nikola
Image: "/2017/04/images/pagekit.jpg"
---

It's awesome when you have a website that serves its purpose but it is even more awesome when the people actually love using it.

Welcome to Ubuntu Budgie Developer Diary, my name is Nikola and I'm one of the Ubuntu Budgie Dev's responsible for the Ubuntu Budgie's website development.

We've received a lot of questions about our website, the tech we use, the software we use, which prompted me to write to decide this post and explain everything from start to finish.

I've first joined Ubuntu Budgie's team back in May 2016, starting out as content contributor for news releases and other related content. Back then the official site for the Budgie Remix (The name of Ubuntu Budgie, before it became official flavour) was run on WordPress.com. (WordPress.com is the Automattic hosted version of WordPress) The good thing was that most of the team was familiar with it, which at that time I've used for 9 years, so there was no problem in getting used to the platform with self-hosted version.

The first logical thing to do was to switch to the self-hosted version of WordPress so that we could have more control and customization options. I started working new Ubuntu Budgie website, but at the same time I was thinking on how much WordPress is good option. Now don't get me wrong, WordPress it pretty powerful blogging system which you can extend with plugins and themes to make anything you want from simple blog to shop or support website. At that time I thought it was an overkill to use WordPress as CMS, since I wanted to make the website simple and lightweight as much as possible.

During some time last year before I joined Ubuntu Budgie, while browsing some web development blogs, I noticed that one of the editors was talking about new CMS called Pagekit, that he recently tested. While reading his post, I wanted to try it myself and test it. I went to their website and download 0.x version which at that time was the latest release. The first thing that impressed me was the inclusion of http server within the application that you could access via CLI. My usual testing routine is to test the new web apps via XAMPP or Vagrant. While reading the requirements page on Pagekit website, I noticed that it also could use SQLite. The installation was simple as extracting the zipped file to its own folder, going to the folder and invoking `./pagekit start --server=127.0.0.1:8080` to start builtin http server. There are also other options which you can find by executing `./pagekit help`. You can even do the whole installation, upgrade and plugin removal via CLI.

Installation was a breeze after which I got welcomed by Pagekit dashboard. Pagekit dashboard is built from different widgets which allows you to make it your own by personalizing in a similar way to WordPress.

![Dashboard](images/Clipboard01.jpg)

Upload manager is one of the best I've seen in modern day CMS. As simple as it is, it also does what is made for without any problem.

Plugin and Theme pages are simple and clean. You can download new themes or plugins via Marketplace which you can find from Dropdown menu.

The editor is simply amazing. You have an option to use either pure HTML or Markdown. The most interesting thing about it? You can actually go full screen to the distraction mode and have Work/Preview section side by side as you type. If you aren't fan of Markdown you can install WYSIWYG editor and write the content as you are used to in other CMS.

![Editor](images/write.jpg)

User Management comes with integrated permission system so that you can manage what your users can do on each part of the website. Making custom roles is easy as well as asigning different permissions that aren't tied to the default roles.

The blog itself is an extension which you can activate if you want to extend your website with blog like this one :)

In June, I presented the beta version of the website to David, the project leader, and other team members, which gave their feedback about the website and approval to continue working on it. During the beta testing, other team members got used to Pagekit which didn't have a much of a learning curve like for example Drupal. The usage of UIKit CSS Framework was an awesome addition to the PageKit.

Composer and Gulp seemed tedious at first, but once you start using them, you wonder how could you work without them.

Pagekit uses Symfony PHP framework which makes code a lot cleaner and easy to use and extend. Another good side of using Symfony is that there are no dependencies on older code for compatibility, which makes it blazing fast when coupled with PHP 7 and Caching plugins. According to Gmetrix the Fully Loaded Time is 1.7s while Total Page Size is 562KB with file caching. You can go even lower if you start using server caching plugins.

Last week, marked the official exit from beta stage and going live with new website. During 13th and 14th of April we received around 20.0000+ users according to out Analytics page. At one point, we had to scale Digital Ocean's droplet on which we are currently hosting website, to serve the number of incoming users.

The theme we've adapted is called Brick which you can find from Marketplace.

It would be interesting to see some new features integrated in the core like post/page revisions and some backup solutions.

Overall, we're satisfied with PageKit and we want to thank the developers for making it. We know how hard it is to work on young project first hand and at the same time we wanted to bet on it as some people bet on us and tried using our Distribution instead of already established ones. Thanks for making Pagekit :)
