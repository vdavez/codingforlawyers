---
title: "Chapter 6: DRY and Functions"
---

### The DRY principle

From time to time, developers will refer to something called DRY, and lawyers would do well to embrace it when appropriate. DRY stands for "Don't Repeat Yourself" and is an important, deeply embedded cultural norm for developers. Note, this norm is *not* deeply  embedded for most lawyers, at least formally. In fact, some lawyers are openly hostile to the DRY principle. Let me give you an example. In the world of technology, using an acronym or an initialism to describe something you say a lot is a no-brainer. It is *completely normal* for a programmer to ask "Can I get the JSON or XML through a REST API?"[^1] By contrast, when *lawyers* use abbreviations, they are open to criticism. Consider this concurring opinion from a senior federal appellate court judge:

> The use of obscure acronyms, sometimes those made up for a particular case, is an aggravating development of the last twenty years. Even with a glossary, a judge finds himself or herself constantly looking back to recall what an acronym means. Perhaps not surprisingly, we never see that in a brief filed by well-skilled appellate specialists. It has been almost a marker, dividing the better lawyers from the rest.[^2]

Unlike federal judges, and happily for developers, computers have little problem remembering an earlier definition.[^3] Developers therefore are liberated to simply define something once and then apply it throughout your code.

So, why should lawyers care about DRY? The answer is simple: used correctly, DRY can save time and ensure consistency. If you find yourself constantly copying and pasting from a PDF and deleting new lines, you should embrace DRY. If you find yourself re-reading the same case over and over again, not for new insight but just to find the holding, you should embrace DRY.  DRY is a methodological preference, and is as much a goal as a process.

DRY is the same principle that underlies form pleadings and standard contract provisions. It is the reason that you reuse major chunks of your "standard of review" section in your briefs. In other words, you likely already have DRY in your practice, you just never knew that it had a name. It does, and I won't repeat it.

### Functions

A core part of implementation for DRY in code is the use of "functions". You use functions to have computers *do* something. You can define a function as simple as "say hello" or as complicated as "cure cancer".[^4] When you "call" a function, you are telling the computer to do the defined thing. With that understanding, let's define a simple function in Javascript. [^5]

{% highlight javascript %}
function readVerdict (verdict) {
	console.log("We find the defendant " + verdict + " on all counts.");
}

readVerdict("guilty")
{% endhighlight %}

Here, we have defined a function called `readVerdict`, and defined a parameter called `verdict`. The `readVerdict` function simply prints to the console a phrase, which depends on what the value of the `verdict` is. If `verdict` is "guilty", then the result of the function call `readVerdict("guilty")` would be "We find the defendant guilty on all counts." Similarly, `readVerdict("not guilty")` would result in "We find the defendant not guilty on all counts." By simply changing the value of verdict, we get a different (though related) result.

The other powerful feature of functions is that they can give a "return" value. For example, suppose you wrote the following function:

{% highlight javascript %}

// Define the function with a "rule" parameter
function fre (rule) {

	// Check to see if the function input is a known rule of the Federal Rules of Evidence
	if (rule == 403) {

		// Return a string with the applicable text
		return "The court may exclude relevant evidence if its probative value is substantially outweighed by a danger of one or more of the following: unfair prejudice, confusing the issues, misleading the jury, undue delay, wasting time, or needlessly presenting cumulative evidence.";
	}

	// Return a default, error message
	return "I'm sorry, I don't know that rule. Please try again";
}

// Call the fre function and pass an integer as the input
// Print the returned value to the console.
console.log(fre(403))

{% endhighlight %}

The script above  has several parts, so let's examine them one by one. First, we defined a function called "fre." We define the function to accept, as an input, a "rule." Next, we check to see whether `rule` is equal to `403`. If it is, we "return" the string associated with Rule 403 of the Federal Rules of Evidence. If the rule is not `403`, we return a different string. Finally, we call `fre`, pass `403` as an argument,[^6] and print the retured value of the function to the console.[^7]

### Conclusion

The `fre` function above illustrates a use case that I suspect many lawyers experience. You need to quote a rule in a brief, so you end up copying and pasting the rule from a PDF file and into the document. But that would violate DRY, since you already know the associated rule, you should just be able to type in the number and the rest happens magically. If you start thinking about functions in this way, you can probably imagine many routines that would make your work more enjoyable.

In theory, you could define the `fre` function above with a bunch of if-else statements and return the text of any rule of evidence based on the rule number. But that would be a lot of if-else statements. Fortunately, in the next chapter, we'll learn a smarter way to do it, using "objects".

***

[^1]: Do not worry. You shouldn't know what any of that means. Eventually you will, but not yet.

[^2]: *Delaware Riverkeeper Network v. FERC*, No. 13-1015, slip op. at 31 (D.C. Cir. June 6, 2014) (Silberman, J., concurring).

[^3]: And lest we forget, lawyers have odd ways of speaking and writing, too. *See* Karl Llewellyn, The Bramble Bush: On Our Law and its Study (1930) ("You are outlanders in this country of the law. You do not know the speech. It must be learned. Like any other foreign tongue, it must be learned: by seeing words, by using them until they are familiar; meantime, by constant reference to the dictionary. What, dictionary? Tort, trespass, trover, plea, assumpsit, nisi prius, venire de novo, demurrer, joinder, traverse, abatement, general issue, tender, mandamus, certiorari, adverse possession, dependent relative revocation, and the rest. Law Latin, law French, aye, or law English-what do these strange terms mean to you? Can you rely upon the crumbs of language that remain from school? Does *cattle levant and couchant* mean *cows getting up and lying down*? Does *nisi prius* mean *unless before*? Or *traverse* mean an upper gallery in a church? I fear a dictionary is your only hope-a law dictionary-the one-volume kind you can keep ready on your desk. Can you trust the dictionary, is it accurate, does it give you what you want? Of course not. No dictionary does, The life of words is in the using of them, in the wide network of their long associations, in the intangible something we denominate their feel. But the bare bones to work with, the dictionary offers; and without those bare bones you may be sure the feel will never come.").

[^4]: To be fair, it can be much easier to describe a function than to write it.

[^5]: The choice of Javascript here is admittedly aggressive. Javascript is a powerful language, but its syntax can be intimidating and has some behaviors that will require further explanation. That said, it's an absolutely essential language if you plan to do any "front-end" website development (i.e., "websites").

[^6]: You might be thinking: wait, an "argument"? Earlier this was described as a "parameter"! That's true. When you are defining a function, you define the inputs as "parameters". But when you are calling a defined function, you are passing an argument. In my experience, developers are loose about referring to parameters as arguments. So, I will take the liberty to call them "arguments" henceforth.

[^7]: One thing to note is that, in many languages, order matters. In python, for example, you must define a function before you can call it. Javascript is a little more flexible, but it's something to pay attention to.
