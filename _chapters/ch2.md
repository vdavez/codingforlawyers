---
title: "Chapter 2: Markdown and HTML"
---

Having survived regex, the next topic is absurdly easy. That topic is "Markdown".

Before diving into Markdown, and at the risk of alienating many readers, I want to remind you of your law-school days. Then (and perhaps even now), when reading a case, you would have a set of highlighters and pens all aimed at allowing you to quickly identify key passages, find the holding, and otherwise annotate important things about a case. Remember that? You would actually *mark* text with a sort of *marker*?

Markdown, when it gets right down to it, is just a way to "mark up" text and describe certain things to a computer, so the computer knows what is important to the eventual reader. That's it. It's a simple, powerful way of making all kinds of marks around plain text in order to make the text more usable.

### An Intro to Markdown Syntax[^1]

Let's say you want to italicize a sentence in a document. In a word processor, you would highlight the sentence and either press <kbd>Ctrl-I</kbd> or the little "italics" icon. I suppose there may be other ways, but those are the conventional ones.

In Markdown, to do this you put an asterisk before and after the sentence. So `*this is an example of an italicized phrase*` would look like: *this is an example of an italicized phrase*.

Let's say you wanted to make a word bold? In Markdown, you put *two* asterisks before and after the word. So `**bold**` looks like: **bold**.

And if you want something italicized *and* bold? You've got it: *three* asterisks. `***italicized and bold***` looks like: ***italicized and bold***.

So far so good. But, this is intended for the Internet. So, let's try something a little more exciting: a link to a website.

A link to a website requires only slightly more markup. To include a link to this book's website, you would need to put brackets around the link, and put the URL[^2] within parentheses. So, `Tell your friends to visit [Coding for Lawyers](http://codingforlawyers.com)` would look like: Tell your friends to visit [Coding for Lawyers](http://codingforlawyers.com). A second way to do the same thing borrows from emails. Instead of putting the URL in the middle of your paragraph, you can write `[Coding for Lawyers][1]` anywhere in your text, and then at the bottom, put the reference like so: `[1]: http://codingforlawyers.com`.

### An intro to HTML

Now that you understand a bit of Markdown syntax, we'll turn attention briefly to HTML. As it turns out, the main *reason* Markdown even  exists  is that writing HTML is annoying. Now, you may be asking, "why would anyone write HTML?" And perhaps before that, you may be asking, "what is HTML?"

HTML is the face of the Internet. Indeed, you are actually reading a page written in HTML *right now.* In short, HTML document is a way to present content to a user on the Internet. HTML is one of the most important standards on the Internet.

But despite its incredible importance, writing in HTML is a total pain. Here's why.

We just learned that to represent an italicized phrase in Markdown, all you need to do is place the phrase within two asterisks. E.g., `"This is a *test of Markdown*."`. In HTML, though, this would be replaced with `"This is a <em>test of Markdown</em>."` And if you wanted to make it italicized and bold, you would need to write "`This is a <strong><em>test of Markdown</em></strong>.`"

What is happening there? Well, HTML uses "tags" to semantically describe text. So, the `<em>` tag tells the browser that everything between the `<em>` tag and the `</em>` tag should be italicized, or as HTML likes to think of it, *em*phasized. Similarly, if you use the `<strong>` tag, the browser understands that everything before the "opening" `<strong>` tag and the "closing" `</strong>` tag should be bold, aka "strong".

But the link to another website is a little more complicated. HTML uses what's called an "anchor" tag (`<a>`) to describe a link. So, if you `Tell your friends to visit <a>Coding for Lawyers</a>`, there is an anchor around "Coding for Lawyers." But if you click on that link, it wouldn't go anywhere, because the target of the link is not defined.

To define the link's target, you define an "attribute" for the tag. Specifically, you would define the "href" attribute. To do this, you would write: `Tell your friends to visit <a href="http://codingforlawyers.com">Coding for Lawyers</a>`.

If you copied and pasted this exact phrase into a plain text file, saved it as "test.html", and opened that file in a browser, you would have a working Web page. Neat, huh?

We've now introduced two new acronyms, but we haven't said what they stand for. The first was *HTML*, which stands for Hypertext Markup Language &ndash; there we go again with the markup! The second was *HREF*, which stands for Hypertext Reference. A third acronym that you see all the time in URLs is *HTTP*, which stands for Hypertext Transfer Protocol. Things were very hyper back when people were naming things.

### More syntax in Markdown and HTML

Recognizing that Markdown and HTML are closely related, let's explore some more Markdown and HTML syntax.

Let's say you wanted to make a page that has a link to each federal court's ECF site within your given state.[^3] For this example, I will pick Virginia, which has three federal courts:

 - U.S. District Court for the Eastern District of Virginia,
 - U.S. District Court for the Western District of Virginia, and
 - U.S. Court of Appeals for the Fourth Circuit.

Happily, the URL naming scheme is common to all three courts: "https://ecf.{courtname}.uscourts.gov"[^4]. As we know, in Markdown, writing the link is pretty easy.  

	- [U.S. District Court for the Eastern District of Virginia](https://ecf.vaed.uscourts.gov),
	- [U.S. District Court for the Western District of Virginia](https://ecf.vawd.uscourts.gov), and
	- [U.S. Court of Appeals for the Fourth Circuit](https://ecf.ca4.uscourts.gov).

As it turns out, this is also all you need to do to write a bulleted list in Markdown, and you can use either hyphens or asterisks to make the bulleted list. If you converted the Markdown into HTML, it would appear as follows:

{% highlight html %}
<ul>
	<li><a href="https://ecf.vaed.uscourts.gov">U.S. District Court for the Eastern District of Virginia</a>,</li>
	<li><a href="https://ecf.vawd.uscourts.gov">U.S. District Court for the Eastern District of Virginia</a>, and</li>
	<li><a href="https://ecf.ca4.uscourts.gov">U.S. Court of Appeals for the Fourth Circuit</a>.</li>
</ul>
{% endhighlight %}

You can see that this has more complexity. Let's unpack it a bit. The top tag is `<ul>`, which stands for "unordered list." An unordered list is another name for a bulleted list. Then, within the `<ul>` tag there is an `<li>` tag. This is a "list item." You're already familiar with the `<a>` tag and the href attribute.

We can also change the list from an unordered list to an ordered list (such as a set of bullet points). To accomplish that, all we need to do is substitute `<ol>` for `<ul>` in the opening and closing tags. In Markdown, you can just use numbers for this. For example:

	1. [U.S. District Court for the Eastern District of Virginia](https://ecf.vaed.uscourts.gov),

	2. [U.S. District Court for the Western District of Virginia](https://ecf.vawd.uscourts.gov), and

	3. [U.S. Court of Appeals for the Fourth Circuit](https://ecf.ca4.uscourts.gov).

We could stop there. But, let's gussy it up a little more. What if we wanted a heading? Something that said "Virginia Federal Courts" and then "District" and "Circuit" as smaller headings. Markdown makes this easy:

	# Virgina Federal Courts

	## District

	1. [U.S. District Court for the Eastern District of Virginia](https://ecf.vaed.uscourts.gov),
	1. [U.S. District Court for the Western District of Virginia](https://ecf.vawd.uscourts.gov), and

	## Circuit

	1. [U.S. Court of Appeals for the Fourth Circuit](https://ecf.ca4.uscourts.gov).

This would translate to the following HTML:

{% highlight html %}
<h1>Virgina Federal Courts</h1>
<h2>District</h2>
<ol>
	<li><a href="https://ecf.vaed.uscourts.gov">U.S. District Court for the Eastern District of Virginia</a>,</li>
	<li><a href="https://ecf.vawd.uscourts.gov">U.S. District Court for the Western District of Virginia</a>, and</li>
</ol>
<h2>Circuit</h2>
<ol>
	<li><a href="https://ecf.ca4.uscourts.gov">U.S. Court of Appeals for the Fourth Circuit</a>.</li>
</ol>
{% endhighlight %}

Take note that HTML describes the heading as `<h1>` and `<h2>`. This is baked into HTML to show these as headings. Also take note that the District and Circuit lists are separate ordered lists, so the HTML must close the first `<ul>` tag before the Circuit heading is introduced. We've also tweaked our Markdown so that the numbers are `1.` throughout. This makes it easier to change the order of the list, and Markdown will take care of making the numbers sequential.

Try to copy and paste that HTML into a plain text file, save it as "ecf_va.html", and open the file in the browser. Voilà, you have  a working HTML file with a link to the Virgina federal courts' ECF sites.

### Conclusion

At this point, you should have a sense of how Markdown and HTML look and interact with each other. You should take time to learn the Markdown syntax from the [official specification](http://daringfireball.net/projects/markdown/). There are a few other use cases -- especially blockquotes -- in Markdown that you should be aware of.

Getting to fully understand HTML, on the other hand, can be much more involved.  HTML5 is remarkably mature, with many ways to customize the presentation of content on the web. There are a number of good tutorials to get you up to speed with more advanced uses of HTML. E.g., [http://www.codecademy.com/en/tracks/htmlcss](http://www.codecademy.com/en/tracks/htmlcss) & [http://learn.shayhowe.com/html-css/](http://learn.shayhowe.com/html-css/). You should take some time to explore them.

If you stopped here, you would be able to meaningfully build beautiful websites using Markdown -- indeed this one is written in markdown and you can even [edit this page](https://github.com/vzvenyach/codingforlawyers/edit/gh-pages/_chapters/ch2.md). 

But you won't stop here, because it keeps gets better...

***

### Endnotes

[^1]: At some point, you should read the [entire Markdown syntax documentation](http://daringfireball.net/projects/markdown/). It is very short, but covers a significant amount of ground. You should also know that there are many different "flavors" of Markdown. A flavor is a subtle variation of Markdown to provide specific features, such as footnotes.

[^2]: A URL?!

[^3]: If you don't know what ECF is, you are not a litigator.

[^4]: Suppose you wanted to automatically determine the court based on the URL, you could write a regular expression to extract the court: `https:\/\/ecf\.(\w+)\.uscourts\.gov`.
