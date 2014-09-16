---
title: "Chapter 4: Using Arrays"
---

In the last chapter, we described the following array, which we'll define as "justices":

{% highlight javascript %}
justices = ["Roberts","Scalia","Kennedy","Thomas","Ginsburg","Breyer","Alito","Sotomayor","Kagan"]
{% endhighlight %}

Let's try a few things in python.[^1]

### Getting Started with Arrays

Click the "run" button below:

<iframe src="https://trinket.io/embed/python/7a7ce0b98f" width="100%" height="150" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

What did we do here? Let's examine line by line:

1. On line #2, we defined the variable "justices". This is old hat by now.
2. On line #5, we use python's `print` command to "print to console". This means that the *result* of the command (here, `print justices`) is displayed on the command line (result: the justices array).
3.  On line #8, we printed the "length" of the array (how many items are in the array) to the console (result: 9 justices in the array) by using the `len` function.

You'll note that on lines 1, 4, and 7, we have a little `#` symbol at the beginning of the line. This is a way of telling the program that everything after it is a "comment". Think of this as a "note to self" (or, more generously, a note to anyone else reading the source code.)[^2]

### Numbering, Types, and Arrays

Now, let's try something a little different:

<iframe src="https://trinket.io/embed/python/6c699324b4" width="100%" height="150" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

What's going on here? On line #5, we printed something to the command line. But we did two very interesting things. First, we combined two strings (remember [strings](/chapters/ch3/index.html#exhibit-1-strings)?) Second, we accessed the first string in the justices array.

To access the first string in the justices array (that's called the first "index" of the array), we called `justices[0]`, not `justices[1]`. This convention of referring to the first number by "zero" instead of "one" is called ["zero-based numbering"](http://en.wikipedia.org/wiki/Zero-based_numbering). If you think this convention is odd, that's ok. But it's a "super-precedent"[^3] entitled to [*stare decisis*](http://www.law.cornell.edu/wex/stare_decisis), so you need to know it exists.

Now, getting back to the script above, on line #8, we took advantage of the `len`  function to find the most junior justice. There are 9 justices, so `len(justices)` is 9, but the last index in `justices` is 8, not 9 (if this is confusing, re-read the immediately preceding paragraph). So, the most junior justice is accessed by `justices[len(justices) - 1]`.

In line # 11, we did something really strange. We wrote `str(len(justices))`. Why did we do that? Well, it is because some languages don't let you mix data types. A string can be added to another string. An integer may be substracted from another string. But an integer may not be combined to two other strings. So, we used the `str` function to convert `len(justices)` from an integer, 9, to a string, "9".

### A nested array and a loop?

Now let's do one last exercise with arrays, and this one will take a few minutes but will propel you to the next level of coding. So prepare yourself and soak it in:

<iframe src="https://trinket.io/embed/python/e9d432984e" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Ok. Let's take this slowly. What's happening? First, we are defining an array: `courts`. It has three items within the array, themselves arrays. These three arrays should look familiar, as they represent the federal courts in Virginia. This is called using "nested" arrays. They're like ["Matryoshka dolls"](http://en.wikipedia.org/wiki/Matryoshka_doll), with an array in an array. More on that subject in a later chapter.

So, now, on line #9, we defined an "iterator". This is a very common convention[^4] in computer science. You'll need it when you reach line numbers 15 through 24. For now, just know that you've defined an integer.

Line #12 is a simple print command. Cake.

Line #15. This is big. This is a `for loop`, and it is a window into the powerful world of code. It essentially goes item by item in the `courts` array and does something with it.

In python, the syntax is actually intended to reflect how people actually speak. You can imagine someone saying: "For every federal court in Virginia." Well, in line #15, we did that by writing `for court in courts:`.[^5]

Hopefully, the comments in lines 17 through 20 explain what is happening. Essentially, you are adding the strings together[^6] in a way that will ultimately resemble the Markdown syntax we saw in [chapter 2](/chapters/ch2/). And, we are accessing the values from the nested arrays by calling their index: the court name as `court[0]` and the court's ECF designation as `court[1]`.

Finally, we "step through" the iterator one-by-one.

In the end, you have a Markdown-ready result of the Virginia federal courts. And you did it "programmatically". This is progress.

### Conclusion

Arrays are, in many respects, seductively simple. They are lists: no more, no less.[^7] But when you master arrays, worlds of data become accessible and manipulable in ways that seemed totally impossible before. So, go ahead and play with the interactive scripts above. Maybe even consider [reading more about what arrays can do in python](https://docs.python.org/2/tutorial/datastructures.html).[^8] Congratulations on making it this far!

***

[^1]: In addition to python, there are several other languages we'll cover in the course of this book. I chose python for this chapter because its basic syntax is forgiving.

[^2]: I strongly encourage you to (1) get in the habit of over-commenting, and (2) share your code. It's the best way to learn honestly. A great place to share your code is [github](http://github.com). I'll go into github in greater length in the coming chapters. But if you're inclined, go [check out the github guides](https://guides.github.com).

[^3]: William Landes & Richard Posner, *Legal Precedent: A Theoretical and Empirical Analysis*, 19 J. L. & Econ. 249, 251 (1976).

[^4]: Programmers refer to this sort of typical convention as a "design pattern." In a way, a design pattern is like boilerplate for computers. Sometimes, you don't know exactly what sort of indemnification provision you want to put in the contract, but you know you need an indemnification provision. Similarly, when coding, you just know you need to "iterate" through a loop. Like law, this intuition is developed through practice and reading other examples of good work.

[^5]: One thing to realize is that the use of `court` is arbitrary. It could just as well by `for c in courts:` or `for article3court in courts:`. The use of `courts` is not arbitrary; we previously defined `courts` as the nested array.

[^6]: Note that we write `str(i)`. That is because `i` is an integer, and we learned above that you cannot combine strings and integers, so we are converting `i` to be `"i"` for purposes of the print command.

[^7]: In fact, in python, arrays are called "lists".

[^8]: If that link seems daunting to you, do not get discouraged. It took me a long time to get comfortable with this sort of documentation that is all-too-common in web development. The purpose of this book is to guide you to a point where this will seem straightforward.
