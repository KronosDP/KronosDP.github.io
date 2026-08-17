---
layout: archive
title: "Sitemap"
eyebrow: "index"
intro: "Every page, post and collection item on this site in one list. There is also an [XML version](/sitemap.xml) for crawlers."
permalink: /sitemap/
author_profile: true
---

{% comment %}
Kramdown turns anything indented four spaces or more into a code block, so the
Liquid and HTML in this file deliberately stays flush left.
{% endcomment %}
{% include base_path %}
{% assign listed_pages = site.pages | where_exp: "item", "item.title" %}

<h2 id="pages" class="archive__subtitle">Pages</h2>
{% if listed_pages.size == 0 %}
<div class="empty-state">
<p class="empty-state__title">Nothing here yet</p>
<p>No titled pages were found while building the site.</p>
</div>
{% else %}
{% for post in listed_pages %}
{% include archive-single.html %}
{% endfor %}
{% endif %}

<h2 id="posts" class="archive__subtitle">Posts</h2>
{% if site.posts.size == 0 %}
<div class="empty-state">
<p class="empty-state__title">Nothing here yet</p>
<p>No posts have been published.</p>
</div>
{% else %}
{% for post in site.posts %}
{% include archive-single.html %}
{% endfor %}
{% endif %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
<h2 id="{{ collection.label | slugify }}" class="archive__subtitle">{{ collection.label }}</h2>
{% if collection.docs.size == 0 %}
<div class="empty-state">
<p class="empty-state__title">Nothing here yet</p>
<p>The <em>{{ collection.label }}</em> collection has no entries at the moment.</p>
</div>
{% else %}
{% for post in collection.docs %}
{% include archive-single.html %}
{% endfor %}
{% endif %}
{% endunless %}
{% endfor %}
