# homework two

the assignment instructions are <a href="http://www.wou.edu/~morses/classes/cs46x/assignments/HW2.html" target="_blank">here</a>...   

the finished site is <a href="https://Stormy9.github.io/CS460/hwk_02/g_oz">here</a>.

---
### Step 0  
If you care to look at all my practice with branching, checking out, merging, and deleting branches you don't need anymore, look <a href="https://Stormy9.github.io/CS460/hwk_02/step_zero.md">here</a>.

---
### Step 1 [setup - finally!]:
So.  After a-a-a-a-all of that up there, I *still* screwed this up.  

Well, not really "screwed up" -- it's fine -- now -- but I didn't initially get my branch set up correctly.

First, I tried making my `working` branch from the folder within my repo that will actually hold the finished website (called `g_oz`)...

It didn't show up on my Github page.


So, I deleted that `branch`, and tried making it from my overall `hwk_02` folder of my repo...

It didn't show up on my Github page.


So, I deleted that `branch`, and tried making it from my root repo, aka `Stormy9.github.io`...

It didn't show up on my Github page.


THEN... it dawned on me that maybe the reason it hadn't been showing up on my Github page, is because I'd made a branch, but not `commit`ted nor `push`ed anything to it.  (duh)

So, I deleted that `branch` and made one with an apter name aka `hwk02_working`... and made a quick `readme.md` to go in it, did `add/commit/push-to-branch`, and voila!  It all showed up on my Github page, just as you would expect.

So maybe that's all I needed to do, for those first attempts?  Does it matter from whence you make your branch via the Git Bash?


Here's some of the stuff I did (including the end part that worked):
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_49.PNG">![screenshot of step 49](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_49.PNG)</a>
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_50.PNG">![screenshot of step 50](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_50.PNG)</a>

*(i shoulda gotten *some* clue from the `error: remote-tracking branch 'origin/working' not found.` thing, right?  haha!  eventually I did)*

I did all this for each "So..." above.   [=

Then the light-bulb came on and I did this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_51.PNG">![screenshot of step 51](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_51.PNG)</a>
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_52.PNG">![screenshot of step 52](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_52.PNG)</a>


And finally my Github page looks like this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_53.PNG">![screenshot of step 53](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_53.PNG)</a>

Note you can *only* see the `branch` from the main/front repo page, *not* from any of the folder pages:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_54.PNG">![screenshot of step 54](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_54.PNG)</a>  

*(gotta remember this stuff, get comfy with how it all works & looks & stuff like that)*

*(i learn & retain best by playing with stuff & then seeing visuals of it, rather than reading)*


Oh, and here's my `index.html` and `styles.css` files, not *directly* in the `Hwk_02` folder, since that's where this goes, but in it's own folder, like how I have `games` for `Hwk_01`.  And I like having `.css` files in their own directory, as I was taught long ago.   [=


Thank GOD I remembered to `cd` to the correct directory, in my Git Bash, first.  Sheesh.  Holy Bejeezus, if I had not!!  Yeesh.

Note that I also reassured myself I was in the `hwk02_working` branch.
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

at first I was alarmed that my `index.html` and `styling/mystyles.css` files were not showing up in my `g_oz` directory -- or anywhere -- but only momentarily, until I remembered to switch to the `hwk02_working` view.  duh.  

Everything is now as it should be.

(at first, stuff didn't show up there... then I realized that when I `push`ed, the `commit` had not taken, since I forgot to type in `-m` like a dork.  fixed that, and all's good.....)


Woo-hoo!   [=
Ready to start on the actual, you know, *stuff*.  

---
---
### Step 2 [planning & design -- what to do]:  
So, what I want to do, is to make a grams-to-ounces & ounces-to-grams converter.

This is something I do pretty much every day (except for I have a few commonly-used (by me) conversions memorized), and constantly typing "28.34" into the calculator to do the calculattions/conversions, is kind of a pain-in-the-ass.  

I mean, I suppose I could just type in "28", but, I am precise.   [=

And I'd rather just type in my number, and click "convert", and get my answer.  Quicker & easier!  Plus I'll make it look cuter than just a calculator.  



How I'll make this meet the basic requirements:
* multiple form elements:  
it will have an input box to enter your number,
a check-box to indicate if you entered grams or ounces,
and,
a button to click to do the calculation.

* a list or table element:
it will return the results in a little table.  or list.  one of those.

* of course i'll use JavaScript to calculate... and jQuery to retrieve the user input & to return the result by changing an element on the page (which will be in the form of a list or table element)

* it's fun (to me, anyway)... not too complicated... and interesting (to me, anyway -- and it can't be *less* interesting than a F-to-C temperatuure converter!)  
    * and, it will fill an actual, almost-everyday-purpose -- at least for me!

---
---
### Step 3 [planning & design - wireframe/sketch]:
So, I had to review & re-familiarize with the Bootstap grid, quickly, since it's been about 3 weeks since I did the games page for homework/lab 1... remember all the details, and class names, and stuff like that.  I returned to <a href="https://www.w3schools.com/bootstrap4/bootstrap_grid_basic.asp" target="_blank">W3School's Bootstrap page</a> for that.

And I like the reminder to plan for how it willl look when re-sized -- that is *always* important (and not everyone does this!)

I decided to draw mine with pencil/paper.  I know there are online tools to do wireframes -- I saw the previous student examples, plus, I just figured there *has* to be... but, I went old-school.


---
---
### Step 4 [content & coding]:
This will be the hard part.   [=

---
---
### Step 5 [testing]:
Remember to commit & push frequently, but DO NOT MERGE until it is not only done, but _tested thoroughly_, too!

Also remember to do at least one commit to `master` before merging, so the full `commit` history shows up!

---
---
### Step 6 [turn it in]:
Do this by the `merge` and `push`.

---
---
### Step 7 [portfolio content]:


---
---
btw, doing cd in my Git Bash looks like this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_00.PNG">![screenshot of step 0](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_00.PNG)</a>
*(don't worry, i'll memorize it or better yet figure out how to get it to start there in the first place!)*

aha! <a href="https://stackoverflow.com/questions/7671461/how-do-i-change-the-default-location-for-git-bash-on-windows" target="_blank">here's</a> how to change the default start location for your Git Bash... this was easier than I thought, although there is also the stuff about changing your `.bashrc` file, too.  I just did the "properties" thing, and it worked fine.  It was more convenient once I got the correct shortcut on the taskbar.

You can also go in and set your default opening window size!


---
[back to CS460 page](https://Stormy9.github.io/CS460/ "CS460 main page")   

[back to main page](https://Stormy9.github.io/ "main page")  
