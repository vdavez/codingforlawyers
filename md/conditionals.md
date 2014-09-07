# Chapter XXX: Conditionals

Conditionals are a way to test if a variable meets a certain condition. Because nearly everything a computer does is distilled down to some sort of a math problem (don't let this scare you, you **do not** need to be good at math to learn how to program), most of the tests which are used by conditionals are of a mathematical nature.

## Tests

Generally there are six tests which conditionals use to see if something meets the test or not.

1. **Equality**. Is one "thing" equal to another "thing"?
2. **Inequality**. Is one "thing" not equal to another "thing"?
3. **Lesser**. Does one "thing" have a value less than another "thing"?
4. **Greater**. Does one "thing" have a value greater than another "thing"?
5. **Lesser or Equal**. Does one "thing" have a value less than or equal to another "thing"?
6. **Greater or Equal**. Does one "thing" have a value greater than or equal to another "thing"?

In the above "thing" is put in quotes because the thing which is being compared can be of a variety of data types -- which were covered in Chapter 3. The "thing" could be a variable, a constant, an integer, a string, an array, or any of the data types which are used in a programming language.

## If

The `if` test in programming is very simple to explain. `if` the evidence you present to a judge meets the test established by the Rules of Evidence in your jurisdiction `then` the judge shall allow it into evidence. In programming, `if` tests work the same way.

```ruby
judge = "roberts"
if judge == "roberts"
  print "The Judge's Name is Roberts."
end
```

The above is fairly nonsensical code to be honest, but it is a good explanation of how conditionals work. In the first line of the code, a variable `judge` is created and it is given the value of the string `"roberts"`. In the next line, there is a conditional test which asks if the `judge` (acting as the first "thing") is equal to the string `"roberts"` (acting as the second "thing"). Indeed, it is, because we just told the computer that it was in the line above. If the test passes then the remainder of the `if` statement will be ran and the string in the third line of code will be printed. Since we know that the test will pass, when we run the above code we will see the string printed out.

One tricky item to note about the above code is to know the difference between what the "=" symbols in the first and second line are doing. In the first line the one "=" is telling the computer to assign the variable `judge` with the value `"roberts"`. In the second line the two "==" are telling the computer to test whether the two "things" on either side of the test are equal.

## Else - If

Many times when you are programming you will want to make conditional tests which are more complex than the above example. In these instances often you want to tell the computer to first perform one test, and if that one is not successful to try another test. The first test is an `if` test which is covered above. The second test is usually called an `elseif` test. In other words, else (meaning the previous test failed) ... if (perform this test). Let's take a look at another example.

```ruby
judge = "scalia"
if judge == "roberts"
  print "The Judge's Name is Roberts."
elsif judge == "scalia"
  print "The Judge's Name is Scalia."
end
```

The above code builds upon the first bit of code we built. The string in the first line has been changes from `"roberts"` to `"scalia"` but the second and third lines remain the same. What will happen when we run this code? First the computer will assign the `"scalia"` as the value of the `judge` variable. Then it will test whether the `judge` variable equals the string `"roberts"`. It does not because the `judge` variable has the value of the string `"scalia"` and "scalia" does not equal "roberts" (no matter how much they may agree with each other jurisprudentially).

Since the first test does not pass, then the string "The Judge's Name is Roberts." is not printed and instead the computer will skip that line and move onto the next part of the code. The next part of the code (you can tell because of the indentation) is another test. An else...if test (which in this language is written as `elsif`). So it is a next test. The computer will then test whether the value of the `judge` variable is equal to the string `"scalia"` (which it is). Since this test will pass, the program will print out the string "The Judge's Name is Scalia."

## Else

When you are making strings of conditionals sometimes you want to tell the computer that if all the tests pass then what it should do. This is where `else` statements come into play. `else` is sort of like a default and can be thought of as: if none of the tests pass I want you, computer, to do this. Let's expand on our previous example one last time.

```ruby
judge = "kennedy"
if judge == "roberts"
  print "The Judge's Name is Roberts."
elsif judge == "scalia"
  print "The Judge's Name is Scalia."
else
  print "The Judge's Name is not Roberts or Scalia."
end
```

In the above code we have changed the string which is assigned to the variable `judge` but have kept lines 2-5 of the code the same. In line 6 we have added an `else` statement. Unlike `if` and `elsif`, `else` does not contain a test. This is because `else` means if all the other tests have failed. So the computer when running will test the first one (which will not pass), then it will test the second one (which will not pass) and then it will go to the default statement which is the final print line.

# Conclusion

Conditionals are a way to test whether things are true or not and if they are true then to perform some action. In general these can be thought of similar to how the rules of evidence, if the tests are passed will allow evidence into the record but if they are not passed will not allow evidence into the record.

## [Previous Chapter: ????](link_to_prev)