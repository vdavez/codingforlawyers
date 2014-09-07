# Chapter ???: Diffs

Diffs express the difference between two files. Originally designed to track the changes made between different versions of software files, they are increasingly powerful in non-software applications. 

You might be familiar with the "track changes" of your favorite word processor where deletions have a line strike-through and insertions are underlined:

![screenshot of track changes in a word processor](http://i.imgur.com/wwRfTjb.png)

Like "track changes", diffs make changes to a document obvious and easy for humans to look at. However, *unlike* "track changes", diffs make it easy for software programs to automatically detect and analyze changes to documents. 

For example, the Twitter bot, [CongressEdits](https://twitter.com/congressedits), automatically publishes anonymous edits ([example](http://en.wikipedia.org/w/index.php?diff=623325721&oldid=623325294)) made to Wikipedia by computers in Congressional offices. The [code](https://github.com/edsu/anon) behind CongressEdits, because it is open source, has been forked (copied) and modified many times over for [use in other contexts](https://github.com/edsu/anon#community) all over the world.

The quick rise in popularity of CongressEdits and its progeny speaks to the tremendous power (and need) for tracking impossibly large collections of text documents. Diffs serve as powerful oversight tools and can lead to discoveries of edits being made right under our collective nose. 

In the legal world, perhaps one of the most important uses of diffing was [ScotusServo](https://twitter.com/SCOTUS_servo) ([code](https://github.com/vzvenyach/scotus-servo)). ScotusServo, which was coded by the creator/author/editor of this very book, lead to the discovery that the Supreme Court of the United States frequently makes unannounced edits to its published opinions ([example](https://twitter.com/SCOTUS_servo/status/504758688494526466)). ScotusServo has been called "the most interesting SCOTUS development of the year" ([source](https://twitter.com/kedarbhatia/status/481454638466891778)) and is used by the Supreme Court correspondent for the New York Times ([source](https://twitter.com/derekwillis/status/481602952671817728)).

## Exercise (OSX)

At the end of this short exercise, you'll write code that automatically detects whether two files are different. The concepts here will serve as an important building block for understanding other chapters of this book, such as [git]() and [GitHub](). Additionally, this exercise will help you build comfort and familiarity with the command line, an indispensible tool for all coders, lawyers or not.

Create a file called `README.md`. Add some text to the file, such as:

```
This exercise is not interesting yet.
```

Now copy that file and paste the new file in the same directory. Name it something like `NEW-README.md`. Bonus: You can accomplish all this with a single terminal command, `cp`:

```
cp README.md NEW-README.md
```

In `NEW-README.md`, edit the text and then save the file:

```
This exercise is becoming more interesting.
```

To get a diff of these two files, use the `diff` command in your terminal:

```
diff README.md NEW-README.md
```

You should see the following output:

```
1c1
< This exercise is not interesting yet.
\ No newline at end of file
---
> This exercise is becoming more interesting.
\ No newline at end of file
```

This output is a diff. It shows the old version of the line of text right above the new version.

If you're more interested in knowing whether or not files differ (and less interested in what those actual differences are), you can add the `--brief` option to the `diff` command:

```
diff README.md NEW-README.md --brief
```

Output:

```
Files README.md and NEW-README.md differ
```

## Diffs Rule Everything Around Me: Diffing the Law

Now that you've gotten your feet wet with diffs, this section will demonstrate practical applications for lawyers in their everyday law practice: 

1. accessing court documents; and
2. untangling complex regulations and understanding when and how they changed.

### Court Documents

Following the Snowden revelations, interest in the FISA court was increasing. Though much of the court operates in secrecy, some documents were being published on the court's [website](http://www.fisc.uscourts.gov/). Unfortunately, for a long time, the site lacked a meaningful notification mechanism. This meant lawyers (and anyone else) interested in the FISC needed to manually check the site for new documents to be posted. Not only is this time-consuming, but it is error-prone. 

Around this time, [Eric Mill wrote software](https://twitter.com/FISACourt) that periodically checks the contents of the FISA court's website and, using diffs (thanks to a [code contribution from Ben Balter](https://github.com/konklone/fisacourt/pull/1)), detected the presence of new links to court filings.

Mill [wrote](https://konklone.com/post/following-the-fisa-court-new-website-new-data):

> The FISC's docket is a tiny piece of the action surrounding surveillance, but since the nation's only Court dedicated to surveillance first opened its ad hoc internet welcome mat in June of 2013, allowing the public a window into its work for the first time in 35 years, we've gotten to see:

> ...

> The Court declassifying and publishing a full justification for allowing bulk collection of phone metadata under the Fourth Amendment.

> ...

> The Court responding to inquiries from prominent senators by publicly describing its operations, and following up with numbers on how often they make the government revise their requests before granting them (~25% of the time).

Though accessing these documents was certainly *possible* without diffs, diffs made such access much easier, more reliable, and more comprehensive.

### Complex Regulations

Let's say you need to understand what a given regulation currently is, and how it changed each time it was amended. Assuming you can access the plain text of various versions of a the Code of Federal Regulations (C.F.R.) (which you'll be able to do without trouble when you read our chapter on [Parsing XML]()), you can run `diff previous-version.txt current-version.txt`. As you might observe, running this command for each and every pair of different files can get tedious and reptitive. Thankfully, tools like git and GitHub make it easy to automatically generate histories of files (in this case, a file could represent a section of the C.F.R.). 

For example, the [adelevie/cfr-diffs](https://github.com/adelevie/cfr-diffs) GitHub repository shows the diffs of Title 47 of the C.F.R. going back several years. For example, this [page](https://github.com/adelevie/cfr-diffs/commits/master/cfr/title-47/20.19.md) displays the history of 47 C.F.R. § 20.19 (known as the Hearing Aid Compatibility Rules). Clicking on any of the revisions (known as "commits" in git-speak), shows the revisions for a given year. For example, you can easily see the changes to this regulation introduced in [2010](https://github.com/adelevie/cfr-diffs/commit/964e2272b95bbf7c2453839e3559be71ba0ae949). GitHub makes it even easier to view diffs of Markdown documents by displaying a "rich diff" ([example](https://github.com/adelevie/cfr-diffs/commit/964e2272b95bbf7c2453839e3559be71ba0ae949?short_path=5e27c6e#diff-5e27c6e509774e6358f3e291694f9a3f)). 

In that example, changes that might have been difficult and time-consuming to detect with the naked eye were made obvious and prominent in the diff:

![screenshot of GitHub's rich diff](http://i.imgur.com/WgGKp0p.png)

To a lawyer working with the Hearing Aid Compatibility Rules, it's potentially very important that the 2010 revisions introduced a change that no longer applied the rules to a device that incorporates WiFi, but instead operates within a precise frequency range defined in a well-understood standard.


