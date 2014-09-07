# Chapter ???: Diffs

Diffs express the difference between two files. Originally designed to track the changes made between different versions of software files, they are increasingly powerful in non-software applications. Diffs make changes to a document obvious and easy for humans to look at.

You might be familiar with the "track changes" of your favorite word processor where deletions have a line strike-through and insertions are underlined:

![screenshot of track changes in a word processor](http://i.imgur.com/wwRfTjb.png)

## Exercise 1 (OSX)

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
