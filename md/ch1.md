# Chapter 1: Regular Expressions

We begin our exploration of coding with **regular expressions**.[^1] Sometimes referred to as "regex", regular expressions are a way of representing patterns of characters used predefined rules. 

# Regular Expressions

Regex may be intuitive for many lawyers, particularly those who were on law review.[^2] That's because citations and regular expressions are actually closely related.[^3] For example, lawyers know what `5 U.S.C. § 552 (2006)` is. We also know that `552 U.S. 5 (2007)` is a different thing entirely. The former is a statute enacted by Congress and codified in the United States Code. The latter is a reported decision of the Supreme Court of the United States published in the bound volumes of the United States Reports. But, let's examine them closely.

A minimal citation to the United States Code has four main components: (1) the title of the United States Code; (2) "U.S. §"; (3) the specific section; and (4) the applicable date (though this is optional). Thus, we know that 42 U.S.C § 1983 is a valid citation to the United States Code, but U.S.C. § 42-1983 is not. Similarly, a minimal citation to the a bound volume of the United States Reports has three components: (1) the volume of the United States Reports; (2) "U.S."; (3) the starting page for the reported opinion; and (4) the applicable date (this is not optional).

<DIAGRAM OF U.S.C. CITATION>

Regex allows us to assemble patterns so that a computer could recognize these patterns. Let's see how.

## The building blocks of regex

We know that as of September 1, 2014, there are 52 titles of the United States Code.[^3] We can therefore represent the first component of a citation to the United States Code as `[1-52]`. Note the brackets here. This means that any integer between 1 and 52 will be considered *valid* regex. So, "18" will be considered valid, but "58" will be rejected as invalid. We have just written our first regex. Great work!

`[1-52]` 

Encouraged by this success, you may be eager to skip over the "U.S. §" and go straight to the specific section itself, since we now know how to represent numbers! Let's indulge this zeal.

Almost as soon as we start, though, there's a problem. We don't know how many sections there are in any given title. For a given title, there may be as few as 146 sections, like in Title 4 ("Flag And Seal, Seat Of Government, And The States"), or there may many more, even up to § 18445 in Title 42 ("The Public Health And Welfare"). And what if Congress adds a new section? Would we have to go back and change our regex everytime a law is passed?

Happily, regex has a "shorthand" way of representing any single digit: `\d`. As a matter of semantics, then, `\d` shorthand is the same as `[0-9]`. If you repeat the shorthand (e.g., `\d\d`), you can represent any integer of a set number of digits. In other words, `\d\d` represents any two-digit number ([10-99]) and `\d\d\d` represents any three-digit number ([100-999]). And, importantly, you can even tell regex that you don't care *how many digits* using the plus sign (`+`). *Any positive integer* can be represented as follows: `\d+`.

You may be wondering why there is a backslash in the shorthand. This is a good, and important question. Regex accept literal characters: `d` is the letter "d", but `\d` is any integer between 0 and 9. In regex, the backslash has a special meaning and is called a "metacharacter". A backslash signals to regex that whatever comes next is something to pay attention to. Similarly, the plus sign that we used before (`\d+`) is a metacharacter. The plus sign signals to regex that you can repeat the preceding regex group. 

In all, regex recognizes 12 metacharacters[^4], though describing all of them is beyond the scope of this chapter. For now, it is merely important to acknowledge that the period (`.`) and parentheses (`(` and `)`) are metacharacters too.[^5] The period (in regex, a "dot") can represent *any* character. A regex in a parentheses is called a "group." If we want to actually represent a metacharacter in the regex, we use a backslash to "escape" the metacharacter. In other words, if we want to use a period at the end of a sentence, we need to write `\.`, and if we want to use a backslash in our pattern, we need to write `\\`. 

By now, you already know a great deal about basic regex. For example, what if we wanted to represent "552a" or "2000aa"? We could do this by writing `\d+a+`. This would also match "1a" and "1234aaaa". And if wanted to do "2000bb", we could just change our regex to be as follows: `\d+[a-z]+`. This would represent "1z" and "12345abcde". Regex also allows for the shorthand `\w`, which represents any single alphanumeric character. *Any word* can be represented by `\w+`. So, you could simply write the regular expression as `\d+\w+`. Think of `\w` as the ultimate Scrabble piece. Potent stuff.

But, what if you wanted your pattern to match "552a" *and* "552". In other words, you don't *necessarily* want any letters to come after the numbers. To do this, the question mark metacharacter (`?`) comes into play. Here, you could simply write `552a?`, which means that the "a" is optional. By using parentheses for grouping, you can supercharge the use of the `?`. For example, you could write `(\d+)(\w+)?`, which would cover "552", "552a", and "2000bb". By grouping the repeating alphanumeric characters represented by `\w` and putting a question mark afterward, you can basically make all of the letters optional. 

## Assembling the United States Code

Believe it or not, we know everything to represent the minimal citation to a section in the United States Code (and even more complicated ones!). Let's return to the 4 minimum components of the citation: 

<DIAGRAM OF U.S.C. CITATION>

First, there is the title: `[1-52]`. Second there is the "U.S.C. §", which requires some escaping of the periods but is written as follows: `U\.S\.C\. §`. Third, there is the section: `\d+(\w+)?`.[^5] And finally, there is the date: `\([19-20]\d\d\)`[^6]. As a reminder for the date, before we put it all together: the date is optional.

Now, let's put together the citation:

`[1-52] U\.S\.\C. § \d+(\w+)?( \([19-20]\d\d\))?`

Congratulations. You have constructed a relatively complex regex! And there's more good news, the road gets easier from here.

## Homework

1. Practice with a website.

2. Extend the regular expression to capture subsections and paragraphs.

3. Write a regular expression to capture an email address.

***

[^1]: Many programmers would, I suspect, suggest that this is a strange place to begin. They would argue that it is not really even *coding*. It is my view that this is a proper subject for a beginning chapter. *Cf.* *Brown v. Allen*, 344 U.S. 443, 540 (1953) (Jackson, J., concurring) ("There is no doubt that if there were a super-Supreme Court, a substantial proportion of our reversals of state courts would also be reversed. We are not final because we are infallible, but we are infallible only because we are final."). Plus, by the time you are done with this chapter, you can impress your coding friends that you know basic "regex". A word of caution, the universe of non-coders who will be impressed your knowledge of regex is rather small. 

[^2]: A quick review of my curriculm vitae demonstrates that I was not on law review in law school. I am using many footnotes to compensate.

[^3]: Editorial Reclassification, Title 52, United States Code, *available online at* [http://uscode.house.gov/editorialreclassification/t52/index.html](http://uscode.house.gov/editorialreclassification/t52/index.html).

[^4]: List of all twelve metacharacters. "the backslash \, the caret ^, the dollar sign $, the period or dot ., the vertical bar or pipe symbol |, the question mark ?, the asterisk or star *, the plus sign +, the opening parenthesis (, the closing parenthesis ), the opening square bracket [, and the opening curly brace {." Source: http://www.regular-expressions.info/quickstart.html

[^5]: A different, and more typical, way of writing this would be to use the asterisk `*` metacharacter. Using `*` matches whatever precedes it zero or more times. Accordingly, `.*` matches "a" or "abc123" or even nothing at all. Ultimately, then, the pattern `\d+(\w+)?` could also have been written as `\d+\w*`.

[^6]: There are multiple candidates for representing the date. Another might be `\d\d\d\d`. An advanced regex user might use `([0-9]{4}`, which means any four-digit number. I took the license to demonstrate that you can mix and match.