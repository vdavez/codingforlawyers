# Chapter XXX: Enumerables and Loops

Enumerables and loops are another of the key building blocks of coding. They allow the code run by computer to work through different data types.

One can think of enumerables similarly to tabbing through a binder and doing something to each of the tabs in the binder on a one by one basis. One can think of loops as telling someone to perform a task a set number of times.

With that analogy firmly set, let's introduce these exhibits.

## Enumerables

When working with arrays it is often helpful to go through the array one element at a time and perform an operation on that element. Let's say for example that you have an array of judges' names which looks similar to the array outlined in [Chapter 3](http://codingforlawyers.com/chapters/ch3/):

```
["roberts","kennedy","scalia","thomas","ginsburg","kagan","sotomayor","alito","breyer"]
```

Because each of the judges names is in lowercase letters, let us say that you wanted to capitalize each of them. For an array such as this, that would be an easy task to do in a word processor or text editor. You would go through the list, backspace or delete the first letter and then type in manually the capital of that letter. However, if you wanted to have the program to perform the capitalization process for you, you would simply go through each of the elements of the array and perform a capitalization on that element. Here is how it *could* look (obviously how it would look exactly will depend on the programming language you use):

```ruby
array_of_judges.each do |judge|
  judge.capitalize
end
```

What is happening behind the scenes in the above code is that the `each` function is taking apart the array and passing each of element to the `do` ... `end` block (which is particular to one programming language -- ruby -- and is only used to provide an example). Inside of this block a new variable is established which is called `judge`. The first time the program runs through this loop the `judge` variable will have the value of `roberts` (which is a string). That string of `roberts` will have the `capitalize` function called on it. The second time the program runs through this loop the `judge` variable will have the value of `kennedy` which will have the `capitalize` function called on it. The code will continue until all of the elements of the array have been passed to the `do` ... `end` block one at a time.

## Loops

Loops are slightly different than enumerables but closely related. Enumerables work through a given data type usually on a one-by-one basis. Loops perform an operation either a predetermined amount of times. Loops can also be used to perform a task an indeterminate amount of times which would either run forever or until the computer receives a stop signal, but those are not terribly useful for most lawyers' purposes.

Let us say, for example, that you had an array of the names of your clients that had been sorted by the amount they had paid to your firm over the past year and you have been asked who are our top ten clients. (For the record, there are much easier ways to actually perform this task, but this is a relatively clear way to provide an introduction to loops.) To find the top ten clients from the array of all of the clients you could write code similar to this:

```ruby
counter = 0
until counter == 10
  print all_clients[counter]
  counter = counter + 1
end
```

What is happening in the above code? First a variable called `counter` is established and it is given the integer value of 0. Then a loop is established and it will continue until counter equals 10. After that the code will `print` the element of the clients from the `all_clients` array which is indexed at the position number used by the `counter` variable. Then the counter variable is increased by one and the loop is rerun. Remember that arrays are indexed [EDNOTE: assuming such will be covered in an earlier bit] starting from 0 and increasing by one integer. So the first element of an array is usually referenced by `array[0]` and the second element of an array is usually referenced by `array[1]` and so forth. When the `counter` variable in the above code equals 10 then the loop will *break* and will not continue to run any more. The code will run when counter equals any integer between 0 and 9 (which will be the top ten clients).

# Conclusion

Enumerables and loops are a powerful way to perform different operations on data types. Enumerables work through different data types one by one and allow the programmer to perform an operation on each of the elements of that data type. Loops perform a given function a predetermined amount of times (or forever).

## [Previous Chapter: ????](link_to_prev)