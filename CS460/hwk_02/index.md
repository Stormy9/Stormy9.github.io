# homework two

the assignment instructions are <a href="http://www.wou.edu/~morses/classes/cs46x/assignments/HW2.html" target="_blank">here</a>...   

---
### Step 0 [experimenting]:
So before I did anything else, I wanted to play around with branching - making a branch, 'checkout'ing the branch, and then merging the branch.

To do this, I made a repo called 'exp' and a branch in there called 'working'.

First, I had to be reminded that you can NOT create/start a repo on your Github directly from the command line -- you have to go into Github and make it via the GUI, and then you can do what you want with it from the command line.   [=

So once i did that, it was easier.  I just had to review some of the basic commands, since it had been a couple/few weeks since I'd last done some Github stuff.  (and remember how to 'cd' in the Git bash -- haha!)

Here's the steps I took, plus what it ended up looking like on Github:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_01.PNG">![screenshot of step 1](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_01.PNG)</a>


I could swear I remember typing (including in CS407MA, Fall '18):
```
git add -a
```
but i got this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_02.PNG">![screenshot of step 2](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_02.PNG)</a>

I also found out this works:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_03.PNG">![screenshot of step 3](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_03.PNG)</a>

By the way, that message is explained <a href="https://www.google.com/search?q=git+warning%3A+LF+will+be+replaced+by+CRLF" target="_blank">here</a>.

So then I proceeded thusly:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_04.PNG">![screenshot of step 4](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_04.PNG)</a>

---

(i left out all the stuff before I remembered/figured out that, duh, you gotta make your repo on the Github site, not via command line)

---

<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_05.PNG">![screenshot of step 5](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_05.PNG)</a>

---

<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_06.PNG">![screenshot of step 6](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_06.PNG)</a>

---

and here is how it looks on Github -- note that we're looking at the 'working' branch:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_07.PNG">![screenshot of step 7](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_07.PNG)</a>

*(there's a little pull/drop-down thingie to pick which branch to look at)*

note that pushing to a you-created `branch` is just like regular pushing to the `master`:
```

```
I'd wondered, so what exactly do you type in different?  <a href="https://help.github.com/en/articles/pushing-commits-to-a-remote-repository" target="_blank">This</a> page told me.  I mean, I got the concept, but wanted to make sure I knew what I was typing in.   [=

---
---
So it appears to be working up to here!  woo-hoo!
Now for some other playing around to see what happens..... 

First I made an `index.md` file for the 'working' branch:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_08.PNG">![screenshot of step 8](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_08.PNG)</a>
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_09.PNG">![screenshot of step 9](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_09.PNG)</a>

---
then flipped to 'master' branch and made an `index.md` there, too:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_10.PNG">![screenshot of step 10](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_10.PNG)</a>

Now my Github looks like this -- note the two branches:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_11.PNG">![screenshot of step 11](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_11.PNG)</a>
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_12.PNG">![screenshot of step 12](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_12.PNG)</a>

---
then flipped back to 'working' branch and updated `index.md`:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_13.PNG">![screenshot of step 13](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_13.PNG)</a>

and now look on Github:
then flipped back to 'working' branch and updated `index.md`:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_14.PNG">![screenshot of step 14](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_14.PNG)</a>
So I forgot about the line break thing.  No biggie and not relevant here and I can just look it up when I actually need to.   [=
*(although it shows w/correct line breaks when opened in Brackets or some such thing)*

---
now..... let's try the merging of 'working' to 'master'!
so... wait.  that didn't quite work:
<<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_15.PNG">![screenshot of step 15](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_15.PNG)</a>
i obviously forgot a step and need to go re-read and stuff.   [=

this still looks like this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_16.PNG">![screenshot of step 16](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_16.PNG)</a>

---
ah.  well.  after re-reading <a href="" target="_blank">this</a> (a little more closely this time, and specially the "Resolving Conflict" part) and <a href="" target="_blank">this</a>, things make a little more sense.  haha!

*note I like the <a href="https://git-scm.com/book/en/v2" target="_blank">official Git book"</a> too, but this Atlassian page is a little more short/quick/direct.   [=*

<a href="https://help.github.com/en/articles/resolving-a-merge-conflict-using-the-command-line" target="_blank">this Github help page was helpful, too</a>.

so i have to go in an fix stuff manually -- `Git` doesn't know what to do, since it went and took the stupid line breaks out.  damn thing.

note:  the line breaks show up when you `cat` the files from the Git bash... when you open the files in something like `Bracket`... just not once they are on Github.  *sigh*

see?
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_17.PNG">![screenshot of step 17](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_17.PNG)</a>
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_18.PNG">![screenshot of step 18](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_18.PNG)</a>

wonder what it will do if I go into `Brackets` and add in `<br>` tags??

although, in markdown, you're supposed to get a *sigle* line break just by hitting 'enter' once at the end of your line... and a *double* line break by hitting 'enter' twice -- just like in word processing.  (that's been working from a text editor, btw)

some googling tells me you (may) also need to add two spaces at the end of the line -- it seems i do remember reading/doing this for `hwk_01` too.   *(apparently i googled with `hwk_01` when some stuff wasn't rendering like i wanted, because this isn't in the main markdown guides i'd marked from before)*

of course, just `cat`ing my stuff into the file from the command line, that didn't happen -- hitting enter, putting in space, whatever.

sooooo... let me go into `Brackets`, and make sure there are line breaks, and see what happens.....

..... because this wasn't/isn't the idea of what I wanted to see happen.  I wanted `index.md` as it appeared in the `working` branch, to like "mix & mingle" with the `index.md` that's in the `master` branch.  

Although I admit I hadn't thought about "what if you change the exact same line??"  But I kinda thought it would over-write, kinda like a `save-as`... but it makes total sense that it wouldn't *(and i'd forgotten reading this from a couple weeks ago)*

So.  Let's try putting in some line breaks, with `Brackets`, using the "two spaces at the end of each line" method to be "pure markdown" -- avoiding `html` tags -- and see what happens.
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_18-5.PNG">![screenshot of step 18-5](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_18-5.PNG)</a>

Git detected it the change, so I proceeded with the `add/commit/push` sequence...
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_19.PNG">![screenshot of step 19](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_19.PNG)</a>
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_20.PNG">![screenshot of step 20](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_20.PNG)</a>

and now look at how `index.md` looks from the `working` branch on Github:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_21.PNG">![screenshot of step 21](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_21.PNG)</a>

and remember, `index.md` looks like this from the `master` branch:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_22.PNG">![screenshot of step 22](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_22.PNG)</a>

*(note these are in `edit` mode, so we can see line #'s)*

so *now* what happens, when I go to merge??
first make sure both branches are all "clean":
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_23.PNG">![screenshot of step 23](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_23.PNG)</a>

note how it tells us how many commits the branch is ahead of `origin/master`.....

this is what happened:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_24.PNG">![screenshot of step 24](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_24.PNG)</a>

and this is what our `index.md` file looks like in `Brackets` now:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_25.PNG">![screenshot of step 25](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_25.PNG)</a>

ooo, yeah!  i can just `cat` it in the Git bash, too:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_26.PNG">![screenshot of step 26](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_26.PNG)</a>

So!  this is cool!  now I get more about how Git looks at things:  a blank line, is a legitimate change -- not just a "nothing"!   [=

*(note that it marked both times I added lines, when I tried to merge before and it didn't work and then I added another line after that)*

So, per <a href="https://help.github.com/en/articles/resolving-a-merge-conflict-using-the-command-line" target="_blank">this Github help page</a>, and <a href="https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts" target="_blank">this Atlassian page</a> (and there's always the official Git book too)... I gotta go into the brackets file -- while in the `master` branch -- and resolve the conflict -- resolve the final file into what I really want, which will be this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_27.PNG">![screenshot of step 27](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_27.PNG)</a>

and lookie here:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_28.PNG">![screenshot of step 28](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_28.PNG)</a>


so now will it merge for me?  let's see.....
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_29.PNG">![screenshot of step 29](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_29.PNG)</a>

aha!!  nowhere did it distinctly, specifically, explicitly *say* this, but I figured out that at this point, I have to do a regular old `push`:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_30.PNG">![screenshot of step 30](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_30.PNG)</a>


and now look at what my `master` branch looks like on Github!
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_31.PNG">![screenshot of step 31](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_31.PNG)</a>

see -- the one `testing.md` file that had only been in `working` is now here in `master`.

and the `index.md` file in `master` now looks like this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_32.PNG">![screenshot of step 32](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_32.PNG)</a>

we'll just ignore & not worry about why that one line is so damned big, for now.   [=

---
notice the distinctions in the `commit` count & history:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_33.PNG">![screenshot of step 33](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_33.PNG)</a>

<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_34.PNG">![screenshot of step 34](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_34.PNG)</a>

<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_35.PNG">![screenshot of step 35](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_35.PNG)</a>

<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_36.PNG">![screenshot of step 36](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_36.PNG)</a>

---

and now we can delete the `working` branch -- we don't need that, anymore:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_37.PNG">![screenshot of step 37](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_37.PNG)</a>
and see?  it's not listed anymore.

But, it still shows up on the Github GUI, for some reason.....
Some Googling led me to try this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_38.PNG">![screenshot of step 38](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_38.PNG)</a>
aha!  it's because of the `remote` thing.

<a href="https://stackoverflow.com/questions/5094293/git-remote-branch-deleted-but-still-appears-in-branch-a" target="_blank">this StackOverflow page</a> says to do this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_39.PNG">![screenshot of step 39](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_39.PNG)</a>

but it's *still* showing on my Github webpage.  dammit.

StackOverflow also said to do this:
(and this is probably a better solution -- a *far* better solution, actually, as it is more specific, only removing the specified branch!)
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_40.PNG">![screenshot of step 40](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_40.PNG)</a>
note the `origin/working`... 
also note the result of `git branch -a`, now.

However, the `working` branch *still* shows on my Github webpage.  I'm thinking *maybe* that's to preserve the history of _every_ revision and where everything originated?

I'm gonna go with that, for now.  
Because, the `working` branch is not accessible or anything, anymore -- at least you can't do a `checkout` on it:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_41.PNG">![screenshot of step 41](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_41.PNG)</a>

Although, I don't get why the branch would have to stay there on my Github webpage -- look, you can even still pull it up!
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_42.PNG">![screenshot of step 42](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_42.PNG)</a>
and it's still tracking how many `commit`s behind `master` it is!
Why?!

I mean, I *created* the `working` branch from the command line on my Git Bash, and it showed up on my Github webpage..... so why can't I delete it from the command line on my Git Bash and have it disappear on my Github webpage? 

hmmmmm.
as of this time (08/02/19) i emailed Github help to ask them.  May as well find out from the horse's mouth.  They were helpful when I emailed them before -- and this specific question/problem didn't come up when I googled.

--- 
Then, I realized that I had apparently gone and learned a lot more than I actually needed, for this particular assignment.  As in, the whole thing with a file in `master` and in `working` with the same name, when you merge.

But hey -- extra or early learning is never a *bad* thing, right?   [=

Anyway, just to see how the `merege` would work, with just bringing in a new file from the `branch` to the `master`, I did this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_43.PNG">![screenshot of step 43](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_43.PNG)</a>
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_44.PNG">![screenshot of step 44](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_44.PNG)</a>

and here's the new `another` branch on my Github page:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_45.PNG">![screenshot of step 45](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_45.PNG)</a>

and when I was all done -- including the `push`, you gotta do the `push` part! -- here is how my `master` branch looks now, on my Github page:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_46.PNG">![screenshot of step 46](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_46.PNG)</a>

and the deleting-the-branch process:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_48.PNG">![screenshot of step 48](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_48.PNG)</a>
of course, it still shows on my Github page.   [=

then later -- like an hour later -- in looking over this page online, I realized something -- I'd *only* deleted the `remote` version of the `another` branch!

So I did this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_48-5.PNG">![screenshot of step 48-5](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_48-5.PNG)</a>


So just doing this -- this sub-step of 'Step 0' -- which is what it looks like all we'll need to do for the actual assignment, per the instruction page -- took about 1/17th the time of all that up there.  haha!

But, extra learning.   [=

btw, here is what "footle" means:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_47.PNG">![screenshot of step 47](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_47.PNG)</a>

---
---
sorry about the... elongated "Step 0"..... but this is how my brain works to figure this crap out.  If I'd just read about this, and not tested it out and played with everything, I wouldn't remember stuff, and wouldn't get it as well..... and then when I started doing the *real* stuff for this assignment, I'd like freak out and stuff.

Plus, I need the visuals (screenshots) to lock it in.

Better to freak out with an experimental repo & branch, that matters not to anything nor anyone.   [=

---
These are the primary helpful pages:  
<a href="https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" target="_blank">Official Git Book Chapter/section 3.2: Basic Branching & Merging</a>

<a href="https://www.atlassian.com/git/tutorials/using-branches" target="_blank">Atlassian: Using Branches: git branch</a>

<a href="https://www.atlassian.com/git/tutorials/using-branches/git-checkout" target="_blank">Atlassian: Using Branches: git checkout</a>

<a href="https://www.atlassian.com/git/tutorials/using-branches/git-merge" target="_blank">Atlassian: Using Branches: git merge</a>

<a href="https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts" target="_blank">Atlassian: Using Branches: merge conflicts</a>

Plus the random questions I googled specifically for quick confirmation of stuff, that's up there.

---
---
# FINALLY!
### Step 1 [setup]:
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
### Step 2 [planning & design]:  
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
### Step 3 [*(more)* planning & design]:


---
---
### Step 4 [content & coding]:


---
---
### Step 5 [testing]:


---
---
### Step 6 [turn it in]:


---
---
### Step 7 [portfolio content]:


---
---
btw, doing cd in my Git Bash looks like this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_00.PNG">![screenshot of step 0](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_00.PNG)</a>
*(don't worry, i'll memorize it or better yet figure out how to get it to start there in the first place!)*


---
[back to CS460 page](https://Stormy9.github.io/CS460/ "CS460 main page")   

[back to main page](https://Stormy9.github.io/ "main page")  
