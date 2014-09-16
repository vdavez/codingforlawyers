---
title: "Chapter 3: Data Types"
---

Data types are one of the key building blocks of coding. They allow the developer and the computer to communicate with each other.

Think of data types like exhibits at trial. You need exhibits to prove facts at trial. You need to lay the foundation before you can introduce them. And there are rules about how you can use them once they've been properly introduced. But, by themselves, they don't _do_ anything necessarily. They're just exhibits.

With that analogy firmly set, let's introduce these exhibits.

### Exhibit 1: Strings

Of all of the data types, lawyers should feel most comfortable with strings. That's because a string is nothing but a collection of characters, typically set off by quotation marks. So, for example: `"this is a string"` and `"We the People"` are both strings. Many programming languages allow for using single quotes, as well, such that `"this is a string"` and `'this is a string'` are equal to each other.

### Exhibit 2: Integers

Integers are just what you'd expect them to be. They are whole numbers, positive and negative. `1` is an integer. `2` is an integer. `three` is NOT an integer, however, and neither is `1.5`.

### Exhibit 3: Floats

Just a moment ago, when looking at integers Exhibit 2, we observed that `1.5` is not an integer. Instead, it is considered to be a "float", because it has a  "floating decimal". The following are all examples of floats: `3.14`, `2.1828`, and `0.0001`. As one reader ([@jeremybowers](https://twitter.com/jeremybowers)) observed, recording a billable hour can often involve a float: `0.1` of a billable hour corresponds to 6 minutes.

### Exhibit 4: Booleans

Sometimes, you just want a witness to answer "yes" or "no". Although it can be an art to get a witness to do this, it is trivial to ask a computer to do it. That's because of booleans. A boolean is either `True` or `False`.

Your honor, may we approach?

### A brief sidebar about variables

The power of data types, like exhibits, is that once they've been properly introduced, you can refer to them directly. Computers do this by "defining a variable". Different programming languages have different ways of doing this, but the concept is always the same. You define the variable and then you can use it. For the purpose of this chapter, we're going to use the syntax associated with the Python programming language, primarily because it is very simple.

Let's go ahead and define a variable "case_name" to be the string "Marbury v. Madison" . To do this, all you need to write is:

`case_name = "Marbury v. Madison"`

Couldn't be simpler, right? Ok, sidebar over.

### Exhibit 5: Array

An array, despite its total simplicity, is a surprisingly powerful data type. An array is a list of other data types.  Arrays are defined in many languages by a comma-separated list of items placed into square brackets. For example, here's an example of an array of strings (you remember strings from a second ago, right?):

`["Roberts", "Scalia", "Kennedy", "Thomas", "Ginsburg", "Breyer", "Alito", "Sotomayor", "Kagan"]`

Piece of cake? Good.

### Exhibit 6: Objects

As a thought experiment, try to describe a music album. You might describe the group that made the album. You might list the names of the tracks. You might describe the year that the album was released.

So, for example, "Hey Jude" by the Beatles, might be described as:

{% highlight javascript %}
{
	"title": "Hey Jude",
	"artist": "Beatles",
	"tracks": [
	    "Can't Buy Me Love", 
	    "I Should Have Known Better", 
	    "Paperback Writer", 
	    "Rain", 
	    "Lady Madonna", 
	    "Revolution", 
	    "Hey Jude", 
	    "Old Brown Shoe", 
	    "Don't Let Me Down", 
	    "The Ballad of John and Yoko"
	],
	"released": 1970
}
{% endhighlight %}

This is an object. It uses "keys"(e.g. "title", "artist", etc.) and "values" ("Hey Jude", "Beatles", etc.) to describe attributes of the object. Let's define a variable "scotus" as an object:

{% highlight javascript %}
scotus = {
	"name": "Supreme Court of the United States",
	"justices": ["Roberts", "Scalia", "Kennedy", "Thomas", "Ginsburg", "Breyer", "Alito", "Sotomayor", "Kagan"]
}
{% endhighlight %}

The reason objects are special is that you can access the attributes in a powerful way. So, for example, if you asked the computer what `scotus["name"]` was, the computer would say: `"Supreme Court of the United States"`.

### Conclusion

Throughout the rest of this book, we'll spend a lot of time manipulating these data types. Remember, they are just exhibits. The real power in coding is using these exhibits to make your case. In the next chapter, we'll take a closer look at arrays and write our first script.
