---
layout: page
title: About
permalink: /about/
icon: grass-two.svg
priority: 2
body-class: about
---
<!-- <section class="products">
  <article class="product">
    <header class="product-header">
      <h2>Our story</h2>
    </header>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet quis ipsum eu auctor. Pellentesque at nibh eu quam sodales auctor. Duis bibendum posuere neque vitae ultrices. Quisque nec felis neque.</p>

    <p>Donec venenatis dolor eget dolor feugiat vehicula. Duis efficitur tempor purus at vehicula. Vestibulum neque ipsum, euismod nec nisl pulvinar, mattis semper leo. </p>

    <p>Etiam at risus risus. Sed quis congue lectus. Etiam sed eros sed magna viverra tristique at non magna.</p>
  </article>
  <article class="product-image">
      {% include grass-one.svg %}
  </article>
</section> -->

<section>
  <article class="copy">
    {% capture copy %}{% include clive/about-copy.md %}{% endcapture %}
    {{ copy | markdownify }}
  </article>
</section>
