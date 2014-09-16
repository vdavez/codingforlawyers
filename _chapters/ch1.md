---
title: "Chapter 1: Regular Expressions"
---

We begin our exploration of coding with **regular expressions**.[^1] Sometimes referred to as "regex", regular expressions are a way of representing patterns of characters using predefined rules.

Think of regular expressions as a faster, more powerful version of "Find & Replace". When you search for something like "Judge" in a word processor, it'll show only exact matches - at most, you can find "judge" as well by disabling case sensitivity. If you want to find all similar matches, like "judicial" and "judiciary", you'll have to manually search for every type.

If you've used a database like Lexis or West or Fastcase, you've probably used a wildcard pattern such as `*` to handle this sort of thing. But, regular expressions are *even more powerful* because you can tell your computer to match many different types of patterns you're searching for, not just exact text or certain predefined wildcards. Regular expressions give you much more granular control over your patterns, and you can even use them in [Microsoft Word](http://office.microsoft.com/en-us/word-help/find-and-replace-text-by-using-regular-expressions-advanced-HA102350661.aspx).

### Regular Expressions

Regex may be intuitive for many lawyers, particularly those who were on law review.[^2] That's because citations and regular expressions are closely related. For example, lawyers know what `5 U.S.C. § 552 (2006)` is. We also know that `552 U.S. 5 (2007)` is a different thing entirely. The former is a statute enacted by Congress and codified in the United States Code. The latter is a reported decision of the Supreme Court of the United States published in the bound volumes of the United States Reports. But, let's examine them closely.

A minimal citation to the United States Code has four main components: (1) the title of the United States Code; (2) "U.S.C. §"; (3) the specific section; and (4) the applicable date (though this is optional). Thus, we know that 42 U.S.C § 1983 is a valid citation to the United States Code, but U.S.C. § 42-1983 is not. Similarly, a minimal citation to the bound volume of the United States Reports also has four components: (1) the volume of the United States Reports; (2) "U.S."; (3) the starting page for the reported opinion; and (4) the applicable date (this is not optional).

(DIAGRAM OF U.S.C. CITATION)

Regex allows us to assemble patterns so that a computer could recognize these patterns. Let's see how.

### The building blocks of regex

We know that as of September 1, 2014, there are 52 titles of the United States Code.[^3] That means we can represent the first component of a citation with *either* a one-digit number (e.g., "8") or a two-digit number ("18"). In regex, we can represent any single digit as `[0-9]`. That means that regex will match any number between 0 and 9. What about *two* digits? Well, we could write `[0-9][0-9]` and that would capture `15` and `25`. Unfortunately, though, would reject `8` because `8` only has one digit.

Happily, regex lets you *choose* how many digits you want by using curly braces `{ }`. That's a great aspect of regex: we have a lot of control over what we're looking for. We can tell regex that we want it to be either a one or two digit number as follows: `[0-9]{1,2}`. We could just as easily say we want a three-digit number: `[0-9]{1,3}`.[^4] So, with `[0-9]{1,2}`, we can represent either a one-digit number or a two-digit number. That means we can write `5` or `28` or `51`, and the pattern will match *any* of them. This means that any title of the United States Code will captured.[^5] We have just written our first regex: `[0-9]{1,2}`. Great work!

Encouraged by this success, you may be eager to skip over the "U.S. §" and go straight to the specific section itself, since we now know how to represent numbers! Let's indulge this zeal.

Almost as soon as we start, though, there's a problem. We don't know how many sections there are in any given title. For a given title, there may be as few as 146 sections, like in Title 4 ("Flag And Seal, Seat Of Government, And The States"), or there may many more, even up to § 18445 in Title 42 ("The Public Health And Welfare"). And what if Congress adds a new section? Would we have to go back and change our regex everytime a law is passed?

Happily, regex has a "shorthand" way of representing any single digit: `\d`. As a matter of semantics, then, `\d` shorthand is the same as `[0-9]`. If you repeat the shorthand (e.g., `\d\d`), you can represent any integer of a set number of digits. In other words, `\d\d` represents any two-digit number ([00-99]) and `\d\d\d` represents any three-digit number ([000-999]). And, importantly, you can even tell regex that you don't care *how many digits* using the plus sign (`+`). *Any positive integer* can be represented as follows: `\d+`.

You may be wondering why there is a backslash in the shorthand. This is a good, and important question. Regex accept literal characters: `d` is the letter "d", but `\d` is any integer between 0 and 9. In regex, the backslash has a special meaning and is called a "metacharacter". A backslash signals to regex that whatever comes next is something to pay attention to. Similarly, the plus sign that we used before (`\d+`) is a metacharacter. The plus sign signals to regex that you can repeat the preceding regex group.

In all, regex recognizes 12 metacharacters[^6], though describing all of them is beyond the scope of this chapter. For now, it is merely important to acknowledge that the period (`.`) and parentheses (`(` and `)`) are metacharacters too.

The period (in regex, a "dot") can represent *any* character. A regex in a parentheses is called a "group." If we want to actually represent a metacharacter in the regex, we use a backslash to "escape" the metacharacter. In other words, if we want to use a period at the end of a sentence, we need to write `\.`, and if we want to use a backslash in our pattern, we need to write `\\`.

By now, you already know a great deal about basic regex. For example, what if we wanted to represent "552a" or "2000aa"? We could do this by writing `\d+a+`. This would also match "1a" and "1234aaaa". And if wanted to do "2000bb", we could just change our regex to be as follows: `\d+[a-z]+`. This would represent "1z" and "12345abcde".

Regex also allows for the shorthand `\w`, which represents any single alphanumeric character. *Any word* can be represented by `\w+`. So, you could simply write the regular expression as `\d+\w+`. Think of `\w` as the ultimate Scrabble piece. Potent stuff.

But, what if you wanted your pattern to match "552a" *and* "552". In other words, you don't *necessarily* want any letters to come after the numbers. To do this, the question mark metacharacter (`?`) comes into play. Here, you could simply write `552a?`, which means that the "a" is optional. By using parentheses for grouping, you can supercharge the use of the `?`. For example, you could write `(\d+)(\w+)?`, which would cover "552", "552a", and "2000bb". By grouping the repeating alphanumeric characters represented by `\w` and putting a question mark afterward, you can basically make all of the letters optional.

### Assembling the United States Code

Believe it or not, we know everything to represent the minimal citation to a section in the United States Code (and even more complicated ones!). Let's return to the 4 minimum components of the citation:

(DIAGRAM OF U.S.C. CITATION)

First, there is the title: `[0-9]{1,2}`. Second there is the "U.S.C. §", which requires some escaping of the periods but is written as follows: `U\.S\.C\. §`. Third, there is the section: `\d+(\w+)?`.[^7] And finally, there is the date: `[0-9]{1,2}`[^8]. As a reminder for the date, before we put it all together: the date is optional.

Now, let's put together the citation:

`[0-9]{1,2} U\.S\.C\. § \d+(\w+)?( \([0-9]{4}\))?`

Congratulations. You have constructed a relatively complex regex! And there's more good news, the road gets easier from here.

### Homework

1. Practice with a website: A few good examples are [rubular](http://www.rubular.com/),the more feature-filled [regex 101](http://regex101.com/) and the famous [RegExr](http://www.regexr.com/).

2. Extend the regular expression to capture subsections and paragraphs.

3. Write a regular expression to capture a simple email address.

***

### Endnotes

[^1]: Many programmers would, I suspect, suggest that this is a strange place to begin. They would argue that it is not really even *coding*. It is my view that this is a proper subject for a beginning chapter. *Cf.* *Brown v. Allen*, 344 U.S. 443, 540 (1953) (Jackson, J., concurring) ("There is no doubt that if there were a super-Supreme Court, a substantial proportion of our reversals of state courts would also be reversed. We are not final because we are infallible, but we are infallible only because we are final."). Plus, by the time you are done with this chapter, you can impress your coding friends that you know basic "regex". A word of caution, the universe of non-coders who will be impressed your knowledge of regex is rather small.

[^2]: A quick review of my curriculum vitae demonstrates that I was not on law review in law school. I am using many footnotes to compensate.

[^3]: Editorial Reclassification, Title 52, United States Code, *available online at* [http://uscode.house.gov/editorialreclassification/t52/index.html](http://uscode.house.gov/editorialreclassification/t52/index.html).

[^4]: If you're so inclined, you can even tell regex to match any four-letter word: `[a-zA-Z]{4}`.

[^5]: Admittedly, it would capture `99` too, but let's not let the perfect be the enemy of the good. See what I mean about the footnotes? *See supra* n. 2.

[^6]: List of all twelve metacharacters. "the backslash `\`, the caret `^`, the dollar sign `$`, the period or dot `.`, the vertical bar or pipe symbol `|`, the question mark `?`, the asterisk or star `*`, the plus sign `+`, the opening parenthesis `(`, the closing parenthesis `)`, the opening square bracket `[`, and the opening curly brace `{`." Source: http://www.regular-expressions.info/quickstart.html

[^7]: A different, and more typical, way of writing this would be to use the asterisk `*` metacharacter. Using `*` matches whatever precedes it zero or more times. Accordingly, `.*` matches "a" or "abc123" or even nothing at all. Ultimately, then, the pattern `\d+(\w+)?` could also have been written as `\d+\w*`.

[^8]: There are multiple candidates for representing the date. Another might be `\d\d\d\d` or `\d{4}`. I took the license to demonstrate that you can mix and match.
