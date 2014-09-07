# Chapter ???: Diffs

Diffs express the difference between two files. Originally designed to track the changes made between different versions of software files, they are increasingly powerful in non-software applications. 

You might be familiar with the "track changes" of your favorite word processor where deletions have a line strike-through and insertions are underlined:

![screenshot of track changes in a word processor](http://i.imgur.com/wwRfTjb.png)

Like "track changes", diffs make changes to a document obvious and easy for humans to look at. However, *unlike* "track changes", diffs make it easy for software programs to automatically detect and analyze changes to documents. 

For example, the Twitter bot, [CongressEdits](https://twitter.com/congressedits), automatically publishes anonymous edits ([example](http://en.wikipedia.org/w/index.php?diff=623325721&oldid=623325294)) made to Wikipedia by computers in Congressional offices. The [code](https://github.com/edsu/anon) behind CongressEdits, because it is open source, has been forked (copied) and modified many times over for [use in other contexts](https://github.com/edsu/anon#community) all over the world.

The quick rise in popularity of CongressEdits and its progeny speaks to the tremendous power (and need) for tracking impossibly large collections of text documents. Diffs serve as powerful oversight tools and can lead to discoveries of edits being made right under our collective nose. 

In the legal world, perhaps one of the most important uses of diffing was [ScotusServo](https://twitter.com/SCOTUS_servo) ((code)[https://github.com/vzvenyach/scotus-servo]). ScotusServo, which was coded by the creator/author/editor of this very book, lead to the discovery that the Supreme Court of the United States frequently makes unannounced edits to its published opinions ((example)[https://twitter.com/SCOTUS_servo/status/504758688494526466]). ScotusServo has been called "the most interesting SCOTUS development of the year" ((source)[https://twitter.com/kedarbhatia/status/481454638466891778]) and is used by the Supreme Court correspondent for the New York Times ((source)[https://twitter.com/derekwillis/status/481602952671817728]).

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
