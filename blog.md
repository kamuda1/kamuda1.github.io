---
layout: default
title: Notebook
---

<div class="home" id="home">
  <h1 class="pageTitle">Project Notebook</h1>
  <ul class="posts noList">
    {% for post in site.posts %}
      <li>
        <span class="date">{{ post.date | date: '%B %d, %Y' }}</span>
        <h3><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
<!--        <p>{% if post.description %}{{ post.description }}{% else %}{{ post.excerpt | strip_html }}{% endif %}</p>-->
      </li>
    {% endfor %}
  </ul>
</div>