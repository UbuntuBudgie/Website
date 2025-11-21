---
title: "Welcome to new Ubuntu Budgie Website"
description: "Ubuntu Budgie has switched to WordPress"
pubDate: 2020-01-14
category: "News"
author: nikola
image: "/2020/01/images/programming-1873854_1280.png"
---

Hi everyone,

We hope you are having great time.

We would like to share with you our development journal with special focus on Ubuntu Budgie's new website.

<!--more-->

Few months ago we've decided to switch from our old website to the current website. There were a lot of issues, but for those with mobile phones/table one of the most noticeable was the website scrolling horizontally when viewed on smaller resolution, not fitting the view resolution of device. Using flex property in CSS we were able to have it fixed to some point, but it wasn't really elegant solution and there were other visual problems as well.

One of the main reason for the switch was the software itself and the associated libraries and software not being updated by developers for quite sometime. Back in the day, around 2016, PageKit was one of the lightest CMS - Content Management Systems, being able to use SQLlite database and still offer the performance on par with MySQL database. Also it was quite modular, which allowed you to build any website that you wanted with coding skills but was also simple to use for the newcomers without any skills.

However, at some point, the updates to the core libraries like Vue.JS and, the UIKit the CSS framework simply stopped. The development was going slowly and some of the updates were released to patch security issue. With each update however, the system was more vulnerable, since the old version of the Vue.js and other scripts were simply making the whole thing hard to maintain. Back then we were one of the biggest websites using PageKit which also added to its promotion. When we saw that there won't be any progress, we decided to make the switch to WordPress.

While our decision was hard one, in the end, it was right decision.

WordPress allowed us to reconstruct website from the bottom while still preserving the old look and improving it on the go. In a sense you could say that the website has been reforged. :)

Previously, and this was requested multiple times, there was no easy way to add translations to different languages beside English to the website. The translation system was unreliable and not ready for multilanguage website.

The Google Translator was so-so at best and at most annoying for most users so decided to remove it and not have any translation than a broken one.

While developing new website, we tested out various solutions and confirmed that the translation of the new website would be a lot easier than with PageKit.

We decided that once the development phase was done, website structure finalized and new website published to the community that it would be perfect time to work on translation of website to various languages. Please follow our social networks, Twitter, Facebook, our Discourse forum, to be notified on how you can help with the translation. We are going to have roll out 2 additional languages first and then after some time add more and more.

One of the new things that you can use while on our website is the instant search Powered by Algolia which retrieves the results as you type. The new website offers both the pleasant mobile and desktop experience without sacrificing anything.

Some of the optimization is done on the script and theme level while the other optimization is done server side which allows us to make the website load quite faster when compared to old website.

We also gained new Patreon Platinum Sponsor - UpCloud which offers cloud hosting for developers and allows developers to deploy their applications and services to their cloud infrastructure.  I would like to use this opportunity to once again thank the guys at UpCloud for helping us finance buying hardware used for development of the Ubuntu Budgie and its applets.

[![](images/upcloud_logo_horizontal-300x62.png)](https://upcloud.com/signup/?promo=budgie)

Be sure to follow our blog and social channels, as well our Discourse forum for future updates in regards to website and Ubuntu Budgie itself!
