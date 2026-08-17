---
title: "Archive Layout with Content"
layout: archive
eyebrow: "proof sheet"
intro: "The archive layout with prose above the listing. Every element the stylesheet covers is on this page, so it doubles as a visual regression check."
permalink: /archive-layout-with-content/
---

## Headings

# Header one

## Header two

### Header three

#### Header four

##### Header five

###### Header six

## Blockquotes

Single line blockquote:

> Quotes are cool.

With an attribution:

> The best way to predict the future is to invent it.
> <cite>Alan Kay</cite>

## Tables

Wide tables scroll inside themselves on a phone instead of widening the page.

| Entry            | Item   |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | 2016   | Description of the item in the list                          |
| [Jane Doe](#)    | 2019   | Description of the item in the list                          |
| [Doe Doe](#)     | 2022   | Description of the item in the list                          |

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=============================|
| Foot1   | Foot2   | Foot3   |

## Definition Lists

Definition List Title
:   Definition list division.

Startup
:   A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.

#dowork
:   Coined by Rob Dyrdek and his personal body guard Christopher "Big Black" Boykins, "Do Work" works as a self motivator, to motivating your friends.

Do It Live
:   I'll let Bill O'Reilly [explain](https://www.youtube.com/watch?v=O_HyZ5aW76c "We'll Do It Live") this one.

## Unordered Lists (Nested)

  * List item one 
      * List item one 
          * List item one
          * List item two
          * List item three
          * List item four
      * List item two
      * List item three
      * List item four
  * List item two
  * List item three
  * List item four

## Ordered List (Nested)

  1. List item one 
      1. List item one 
          1. List item one
          2. List item two
          3. List item three
          4. List item four
      2. List item two
      3. List item three
      4. List item four
  2. List item two
  3. List item three
  4. List item four

## Buttons

`.pill-btn` is the component; `.btn` is the legacy alias and is skinned to match.

<p class="btn-row">
  <a href="#buttons" class="pill-btn pill-btn--filled">Filled pill</a>
  <a href="#buttons" class="pill-btn pill-btn--ghost">Ghost pill</a>
  <a href="#buttons" class="btn">Legacy .btn</a>
  <a href="#buttons" class="btn btn--inverse">.btn--inverse</a>
</p>

## Chips

<p class="btn-row">
  <span class="tag-chip tag-chip--accent">category</span>
  <span class="tag-chip">tag</span>
  <span class="tag-chip">+3 more</span>
</p>

## Cards

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-card__icon"><i class="fa fa-cube" aria-hidden="true"></i></div>
    <p class="feature-card__title">Surface card</p>
    <p class="feature-card__body">Hairline border, no shadow, a two-pixel lift on hover.</p>
  </div>
  <div class="feature-card">
    <div class="feature-card__icon"><i class="fa fa-ruler-combined" aria-hidden="true"></i></div>
    <p class="feature-card__title">One vocabulary</p>
    <p class="feature-card__body">Every listing on the site is built from the same card row.</p>
  </div>
</div>

## Empty state

<div class="empty-state">
  <p class="empty-state__title">Nothing here yet</p>
  <p>This is how a collection with no items presents itself, so an empty section reads as intentional rather than broken.</p>
</div>

## Notices

**Watch out!** You can also add notices by appending `{: .notice}` to a paragraph.
{: .notice}

**Info.** The tinted variants carry the hue on the leading rail only.
{: .notice--info}

**Danger.** Something will break.
{: .notice--danger}

## Code

Inline `word-wrap: break-word;` will be your best friend. Fenced blocks are highlighted
by Rouge and scroll horizontally when a line is long:

```python
def measure(tokens: list[str], *, window: int = 512) -> dict[str, float]:
    """Comments stay legible; strings, numbers and keywords each get their own hue."""
    total = sum(len(t) for t in tokens)  # 1_024 characters, give or take
    return {"tokens": len(tokens), "chars": total, "ratio": total / max(window, 1)}
```

## HTML Tags

### Address Tag

<address>
  1 Infinite Loop<br /> Cupertino, CA 95014<br /> United States
</address>

### Anchor Tag (aka. Link)

This is an example of a [link](https://github.com "GitHub").

### Abbreviation Tag

The abbreviation CSS stands for "Cascading Style Sheets".

*[CSS]: Cascading Style Sheets

### Cite Tag

"Code is poetry." ---<cite>Automattic</cite>

### Code Tag

You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.

### Details Tag

<details>
  <summary>Collapsed by default</summary>
  This section was collapsed by default.
</details>

### Strike Tag

This tag will let you <strike>strikeout text</strike>.

### Emphasize Tag

The emphasize tag should _italicize_ text.

### Insert Tag

This tag should denote <ins>inserted</ins> text.

### Keyboard Tag

This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` tag.

### Mark Tag

This tag lets you <mark>highlight a phrase</mark> inline.

### Preformatted Tag

This tag styles large blocks of code.

<pre>
.post-title {
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 38px;
  line-height: 1.2;
  and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}
</pre>

### Quote Tag

<q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer

### Strong Tag

This tag shows **bold text**.

### Subscript Tag

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.

### Superscript Tag

Still sticking with science and Isaac Newton's E = MC<sup>2</sup>, which should lift the 2 up.

### Variable Tag

This allows you to denote <var>variables</var>.

## Listing

Below the prose, the same archive card rows the rest of the site uses.

{% include base_path %}
{% assign listed_pages = site.pages | where_exp: "item", "item.title" %}
{% for post in listed_pages %}
{% include archive-single.html %}
{% endfor %}
