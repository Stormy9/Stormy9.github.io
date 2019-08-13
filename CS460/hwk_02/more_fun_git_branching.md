## more fun with git branching  
### my files kept getting deleted!  
After I got my `hwk02_working` branch set up, with my  `index.html` and `mystyles.css` files living there... at some point while working on them -- while in the `hwk02_working` branch, of course -- I noticed that some of my other files were being deleted from my machine!  Specifically, my blog pages for `Hwk_02`.

Of course, they weren't, really... but initially, I was somewhat alarmed.  Only "somewhat", because at least the content of said files was still displayed in their VSCode tabs... just with "(deleted)" appended to the files' tabs -- and the files no longer showed up in Windows Explorer.   

But I figured no prob, just re-save these tabs -- everything is still there.  I figured I must have just done something not-quite-right.  

<br>

Except when I did that... I ended up with those blog page files in my `hwk02_working` branch, which I didn't want.  *(Because, neatness, and things being a pain in the ass later.)*  I thought, "Wait a minute... I just saved those blog page on my own machine, right?"  

BUT... when I'd done a `commit` and `push` on my `index.html` and `mystyles.css`... I'd first done an `add *`.   So that added the blog page files to the `commit\push` to my `hwk02_working` branch.  

And __that__ is when the light bulb started coming on -- my dimmer switch was being turned up.   [=

Figuring this out locked in more in my brain, about how git branching works, and I was able to visualize the layout of it all.  

<br>

I hadn't realized -- although it does kinda-sorta say it in the "fine print" on the official Git book page <a href="https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell" target="_blank">Branches in a Nutshell</a> -- just not very definitively (at least it hadn't clicked with me right away)... 

Anyway, I hadn't realized or thought about, that while working on  the `index.html` and `mystyles.css` files -- which lived in my `hwk02_working` branch -- so in other words I was __in__ *that* branch..... that the files which lived only in my `master` branch would be inaccessible, and not even *visible*, even on my own machine -- until I flipped back to the `master` branch.   

<br>

I was so excited when it all became clear..... when I view my git-tracked files __on my own machine__, in Windows Explorer... I'm looking at and opening those files from the local version of my Git repo --  for whatever `branch` I'm in at the time.  

So when I `checkout` my `hwk02_working` branch, only those files will be what I see, and can open, on my machine.  When I `checkout` my `master` branch again, only those files will be what I see, and can open.  

And, on both my own machine __and__ my GitHub page, when in my `hwk02_working` branch, all the higher-up directories show, of course... but while in the `hwk_02` directory, __only__ the `g_oz` directory with my `index.html` and `mystyles.css` files show... and in while in my `master`branch, the `g_oz` directory still shows -- but not the `index.html` and `mystyles.css` files, only it's `readme.md` file.  Cool, huh?  

Once I got that all clicked into my brain, I was no longer worried in the slightest about my VSCode tabs saying "(deleted)" on certain files when I flipped between branches.   [=  

I just had to delete a bunch of stuff out of my `hwk02_working` branch, since I'd not only inadvertently put my blog pages, but several blog images, in it!  

It was so cool to know I'd finally gotten it all figured out though -- to know my light bulb was now glowing that much brighter.   [=  


<br>

---
### making branches show up on your GitHub site  
Then later, I got to thinking more about making a new `branch` and getting it to your GitHub site -- could you `push` a new, empty branch?  Did you *have* to have a file to `add`, `commit`, and then `push`?  Just to make a `branch` show up on GitHub?  

It seemed to me that you shouldn't *have* to have an actual file in your new `branch`, just in order to make the `branch`... yet in the tutorials I'd read (<a href="https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell" target="_blank">the official Git one</a>, and <a href="https://www.atlassian.com/git/tutorials/using-branches" target="_blank">the Atlassian one</a>) the examples of making a new `branch` always included having a file of some kind, to `add`, `commit`, and `push`.  

I admit I hadn't read every single word of either of those tutorials -- more like "perused" for what I needed most at the time, and then read *that* part in closer detail...  

But when I went back and read even closer, I *did* find something close to what I was thinking, in the Atlassian tutorial <a href="https://www.atlassian.com/git/tutorials/using-branches" target="_blank">here</a> (scroll to "Creating remote branches") -- but the example it gave wasn't very clear.  Dealing with noobs, they should have been a bit more explicit in the example!  (well, at least *this* noob!)   [=  

SO I googled, and found what I needed <a href="https://www.jquery-az.com/git-push-command/" target="_blank">here</a>.  

So went back to my `exp` repo -- my repo just for practicing `git` with -- and made some more branches to see what all would happen.   [=  

Here's how it looked:  
making the branch from command line...  
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_62.PNG">![screenshot of step 62](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_62.PNG)</a>  
(notice I `push`ed from the `fun` branch itself)

... and here it shows a new `branch` on my GitHub site... 
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_63.PNG">![screenshot of step 63](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_63.PNG)</a>

<br>

trying another new `branch`...
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_64.PNG">![screenshot of step 64](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_64.PNG)</a>
(notice I made the new `more_fun` branch from the `fun` branch... then flipped to `master` to `push` it)

... and here's both new `branch`es on my GitHub site...  
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_65.PNG">![screenshot of step 65](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_65.PNG)</a>

<br>

This screenshot shows the *wrong* way to push a new `branch`, followed by the *right* way... 
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_66.PNG">![screenshot of step 66](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_66.PNG)</a>  

And here they all are on my GitHub site...  
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_67.PNG">![screenshot of step 67](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_67.PNG)</a>

<br>

This screenshot, I just did, to show that simply making a new `branch`, doesn't change your git `status`...  
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_68.PNG">![screenshot of step 68](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_68.PNG)</a>  
... but as illustrated above, you can `push` it anyway!  
(I'd found this out in playing around... but when I decided to document what I'd learned, I forgot to illustrate that in the earlier screenshots!  But wanted to show it, so I don't forget.)  

<br>

---
---
---
[back to Homework_02 page](https://Stormy9.github.io/CS460/Hwk_02/ "Homework_02 page")

