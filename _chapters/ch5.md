---
title: "Chapter 5: Conditional Logic"
---

Computers, in some respects, are like hostile witnesses on cross-examination. You don't want to ask them open-ended questions, you want to lead the witness. But, unlike human witnesses, computers will always tell you the answer to your question.[^1] In coding, this use of leading questions is referred to "conditional testing".[^2] In this chapter, we'll discuss some of the "questions" you can ask a computer to answer and examine how the computer will answer.

### Tests

Generally there are six questions that a computer is trained to answer:

1. **Equality**. Is one "thing" equal to another "thing"? Equality is typically represented as `==`.
2. **Inequality**. Is one "thing" not equal to another "thing"? Inequality is typically represented as `!=`.
3. **Lesser**. Does one "thing" have a value less than another "thing"? Lesser is typically represented as `<`.
4. **Greater**. Does one "thing" have a value greater than another "thing"? Greater is typically represented as `>`.
5. **Lesser or Equal**. Does one "thing" have a value less than or equal to another "thing"? Lesser or equal is typically represented as `<=`.
6. **Greater or Equal**. Does one "thing" have a value greater than or equal to another "thing"? Greater or equal is typically represented as `>=`.

In the above "thing" is put in quotes because the thing which is being compared can be of a variety of data types -- which we covered in [Chapter 3](/chapters/ch3). It can be a variable, an integer, a string, an array, or any of the data types which are used in a programming language.

It is bad form to ask a hostile witness "About how fast would you say you were going?" Instead, you might ask: "Did you drive faster than 55 mph?" In conditional syntax, this would be `speed > 55`. If the computer answers `True`, then you might have your negligence *per se* case in the bag.  

### If

Since we are talking about witnesses at trial, it's helpful to think about the rules of evidence. Typically, the rules of evidence follow a specific pattern: `if` the evidence you present to a judge meets the test established by the rules of evidence in your jurisdiction `then` the judge shall allow it into evidence. In programming, `if` tests work the same way.

{% highlight python %}
# Define hearsay as a boolean
hearsay = True

# Test for equality
if hearsay == True:

	print "This is a statement, other than one made by the declarant while testifying at the trial or hearing, offered in evidence to prove the truth of the matter asserted."
{% endhighlight %}

In programming, like in trial, you can evaluate the truth of a statement to prove the truth of the matter asserted. In the first line of the code, a variable `hearsay` is created and it is given the value of the boolean `True`. In the next line, there is a conditional test which asks if the `hearsay` variable (acting as the first "thing") is equal to the boolean `True` (acting as the second "thing"). Indeed, it is, because we just told the computer that it was in the line above. If the test passes, then the remainder of the `if` statement is run and the string in the third line of code will be printed. Because we know that the test will pass, when we run the above code we will see the string printed out.

One tricky item to note about the above code is to know the difference between what the "=" symbols in the first and second line are doing. In the first line the one "=" is telling the computer to assign the variable `hearsay` with the value `True`. In the second line the two "==" are telling the computer to test whether the two "things" on either side of the test are equal.

### Else - If

Many times when you are programming you will want to make conditional tests which are more complex than the above example. In these instances often you want to tell the computer to first perform one test, and if that one is not successful to try another test. The first test is an `if` test which is covered above. The second test is usually called an `else-if` test. In other words, else (meaning the previous test failed) ... if (perform this test). Let's take a look at another example.

{% highlight python %}
relevant = True
probative_value = 10
prejudicial_effect = 5

if relevant == False:
	print "The evidence is not admissible under Federal Rule of Evidence 402."

else if prejudicial_effect > probative_value:
	print "The evidence is not admissible under Federal Rule of Evidence 403."
{% endhighlight %}

The above code builds upon the first bit of code we built. In the first line, we define a variable `relevant` to be a boolean `True`. Then, we define two variables `probative_value` and `prejudicial_effect` as integers.[^3]

Then, we run it through our first test: is `relevant` the same as `False`? Well, in this case, we know that it's not, because we defined `relevant` as `True`. Because the first test does not pass, then the string `"The evidence is not admissible under Federal Rule of Evidence 402."` is not printed and instead the computer will skip that line and move onto the next part of the code. Then the computer reaches the next test: is the `prejudicial effect` greater than the `probative_value`? If it is, then the program responds that the evidence is not permissible under Rule 403.[^4]

But, if `relevant` were `False` in the example, the computer would skip over the second test. That is because the `else if` test only is triggered if the `if` test fails.

### Else

When you are making strings of conditionals sometimes you want to tell the computer that if all the tests pass then what it should do. So, for the example above, what happens if the prejudicial effect did *not* weigh the probative value? To program that, we use a `else` statement.

{% highlight python %}
relevant = True
probative_value = 5
prejudicial_effect = 10

if relevant == False:
	print "The evidence is not admissible under Federal Rule of Evidence 402."

else if prejudicial_effect > probative_value:
	print "The evidence is not admissible under Federal Rule of Evidence 403."

else:
	print "The evidence is admitted into evidence."
{% endhighlight %}

In the above code we have switched the values of `probative_effect` and `prejudicial_effect` but otherwise kept most the code the same. In the last two lines, however, we  added an `else` statement. Unlike `if` and `else-if`, `else` does not contain a test. This is because `else` means if all the other tests have failed, do this.

### Conclusion

Conditionals are a way to test whether things are true or not and if they are true then to perform some action. In general these can be thought of similar to how the rules of evidence, if the tests are passed will allow evidence into the record but if they are not passed will not allow evidence into the record.

`If` you have made it this far, you are to be congratulated. In the next chapter, we will get a preview of the real magic of programming: it can save you time and get you more consistent results. Your clients will thank you while you kick up your feet and let the computer do the hard stuff. Ok, so that may be a bit of an exaggeration, but you'll be a better lawyer nonetheless. Read on.

***

[^1]: Believe it or not, almost every developer I know has been frustrated at some point by this fact. You ask the computer: "are these two things the same". And the computer will say "no". But often the computer isn't wrong, you just phrased the question poorly. (E.g., the string "True" is not semantically the same as the boolean `True`).  

[^2]: Law is not the only profession where simple concepts are assigned fancy descriptions.

[^3]: If only it were this easy in real life.

[^4]: It is worth pausing for a moment to explain that this is not actually the test under Federal Rule of Evidence 403. Under FRE 403, evidence can be excluded if "its probative value is *substantially outweighed* by a danger of one or more of the following: unfair prejudice, confusing the issues, misleading the jury, undue delay, wasting time, or needlessly presenting cumulative evidence." Whether something is "substantially outweighed" is the sort of judgment call that computers generally cannot answer through simple conditional testing. Take heart lawyers, computers cannot replace us so easily just yet.
