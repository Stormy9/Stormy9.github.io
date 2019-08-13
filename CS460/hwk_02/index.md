# homework two

the assignment instructions are <a href="http://www.wou.edu/~morses/classes/cs46x/assignments/HW2.html" target="_blank">here</a>...   

the finished site is <a href="https://Stormy9.github.io/CS460/hwk_02/g_oz">here</a>.

---
### Step 0  
If you care to look at all my practice with `branch`ing, `checkout`ing, `merge`ing, and `delete`ing branches, look <a href="https://Stormy9.github.io/CS460/hwk_02/step_zero.html">here</a>.

<br>

---
### Step 1 [setup]:
So.  After a-a-a-a-all of that in Step 0, I *still* screwed this up.  

Well, not really "screwed it up" -- it's fine -- now -- but I didn't initially or immediately get my branch set up correctly.  

Apparently, something still hadn't fully clicked in, so far as making branches!   [=

<br>

First, I tried making my `working` branch from the directory within my repo that will actually hold the finished assignment website (called `g_oz`)...

It didn't show up on my Github page.


So, I deleted that `branch`, and tried making it from my overall `hwk_02` folder of my repo...

It didn't show up on my Github page.


So, I deleted that `branch`, and tried making it from my root repo, aka `Stormy9.github.io`...

It didn't show up on my Github page.

<br>

THEN... it dawned on me that the __reason__ my new `branch` hadn't shown up on my Github page, is because I'd made it, obviously... but not `commit`ted nor `push`ed anything to it!  duh!    

And yes, I'd noticed the examples of making & `checkout`ing a `branch` all in one step, then making some quick files, and then doing a `push`... but I wanted to try doing and *seeing* __every__ piece of __every__ step.  I'm weird that way -- I don't trust stuff, until I do and see all the pieces -- and it helps me get it better, too.  

<br>

So, I deleted that `branch` and made one with an apter name this time -- aka `hwk02_working`... made a quick `readme.md` to go in it, did `add/commit/push-to-branch`, and *voila*!  It all showed up on my Github page, just as you would expect.

So __that's__ all I needed to do, for those first attempts.  (question: does it matter from whence you make your `branch` via the Git Bash?)  

At first I was just happy I finally got what I wanted... but later got to thinking about things more, and wanting to get an even tighter grasp on how it all works... see (if you want) <a href="https://Stormy9.github.io/CS460/hwk_02/more_fun_git_branching.html">more fun with git branching</a> (scroll to "making branches show up on your GitHub site").

<br>  

Anyway, once the light bulb came on, this is how it all looked:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_51.PNG">![screenshot of step 51](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_51.PNG)</a>
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_52.PNG">![screenshot of step 52](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_52.PNG)</a>


And finally my Github page looks like this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_53.PNG">![screenshot of step 53](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_53.PNG)</a>

Note you can *only* see the `branch` from the main/front repo page, *not* from any of the folder pages:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_54.PNG">![screenshot of step 54](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_54.PNG)</a>  

<br>

And here's my `index.html` and `styles.css` files, not *directly* in the `Hwk_02` folder, since that's where this goes, but in it's own folder, like how I have `games` for `Hwk_01`.  And I like having `.css` files in their own directory, as I was taught long ago.   [=

Thank GOD I remembered to `cd` to the correct directory, in my Git Bash, first.  Yeesh -- I may have overwritten stuff!

I also first assured myself I was in the `hwk02_working` branch.  
(but note my "oops!" in there -- haha!)

I did:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_55.PNG">![screenshot of step 55](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_55.PNG)</a> 
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_56.PNG">![screenshot of step 56](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_56.PNG)</a> 
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_57.PNG">![screenshot of step 57](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_57.PNG)</a> 
note how it shows all the new image files for this blog page, and that they are untracked and not being dealt with in this `commit/push`... isn't that cool?

<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_58.PNG">![screenshot of step 58](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_58.PNG)</a> 


And here's how things look on my Github page (note the branches):
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_59.PNG">![screenshot of step 59](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_59.PNG)</a> 
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_60.PNG">![screenshot of step 60](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_60.PNG)</a> 
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_61.PNG">![screenshot of step 61](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_61.PNG)</a> 

<br>

Everything is now as it should be.   
Woo-hoo!   
Ready to start on the actual, you know, *stuff*.   [=

<br>

---
---
### Step 2 [planning & design -- what to do]:  
So, what I want to do, is to make a grams-to-ounces & ounces-to-grams converter, all in one thing.  

This is something I do pretty much every day (except for I have a few commonly-used (by me) conversions memorized), and constantly typing "28.34" into the calculator to do the calculattions/conversions, is kind of a pain-in-the-ass.  

I mean, I suppose I could just type in "28", but, I am precise.   [=

And I'd rather just type in my number, pick the relevant radio button, click "convert", and get my answer.  Quicker & easier!  Always a good thing.  Plus I'll make it look cuter than just a calculator.  



How I'll make this meet the basic assignment requirements:  
* use HTML & CSS (with Bootstrap) for content and styling/presentation  

* use multiple form elements -- it will have:
    * an input box to enter your number,
    * radio buttons to indicate if you entered grams or ounces 
*(radio since you can only do either/or)*, and,
    * a button to click to do the calculation.  
      (so obviously we're taking user input here)  

* use a list or table element:  
it will return the results in a little table.  or list.  one of those.  

* of course i'll use JavaScript to calculate... and jQuery to retrieve the user input & to return the result by changing an element on the page (which will be in the form of a list or table element)

* it's fun (to me, anyway)... not too complicated... and interesting (to me, anyway -- and it can't be *less* interesting than a F-to-C temperatuure converter!)  
    * and, it will fill an actual, almost-everyday-purpose -- at least for me!

* use a feature `branch` in `git` for the work on the assignment, then `merge` my `branch` into `master`  

<br>

---
---
### Step 3 [planning & design - wireframe/sketch]:  
So, I had to review & re-familiarize with the Bootstap grid, just a little, since it's been about 3 weeks since I did the games page for homework/lab 1... to remember all the details, class names, and stuff like that.  I returned to <a href="https://www.w3schools.com/bootstrap4/bootstrap_grid_basic.asp" target="_blank">W3School's Bootstrap page</a> for that.  

And I like the reminder to plan for how it will look when re-sized -- that is *always* important (and not everyone does this, even on "professional" sites!)  

I decided to draw mine with pencil/paper.  I know there are online tools to do wireframes -- I saw the previous student examples, plus, I just figured there *has* to be... but, I went old-school.  I will explore the online wireframe tools later... they can't be *that* difficult to work with.  

I'll admit that I also, in the planning process, threw together some stuff in VSCode, because I need to **really** see it, too, and decide if I like it or not, or want to plan something entirely different.  

This is when I came up with my "watermelon" theme -- the main part of the page is the color of the part of the watermelon that you eat... the header & footer bars are green like the rind... and the fonts are black like the seeds.   [=  

<br>

---
---
### Step 4 [content & coding]:
This will be the hard part.   [=  
(kidding.  mostly.  yeah, I haven't done JavaScript or jQuery since middle of '17, but I had a lot of fun with them and got fairly familiar at the time... so I should be able to re-pick this up okay.)  

*(will have to put in screenshots of code, once you merge -- can't access those files and this one, at the same time, when they are in different `branch`es!)*  


<br>

---
---
### Step 5 [testing]:
Remember to commit & push frequently, but DO NOT MERGE until it is not only done, but _tested thoroughly_, too!

Also remember to do at least one commit to `master` before merging, so the full `commit` history shows up!

<br>

---
---
### Step 6 [turn it in]:
Do this by the `merge` and `push`... do we submit our GitHub ULR on moodle, too?    

<br>

---
---
### Step 7 [portfolio content]:
I especially added to my <a href="https://stormy9.github.io/CS460/references/git/">Git Reference page</a>!  

And started a <a href="https://stormy9.github.io/CS460/references/js_jq/">JavaScript/jQuery Reference page</a>, too.  

<br>

---
---
---
[back to CS460 page](https://Stormy9.github.io/CS460/ "CS460 main page")   

[back to main page](https://Stormy9.github.io/ "main page")  
