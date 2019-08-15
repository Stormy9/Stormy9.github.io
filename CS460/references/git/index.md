# git notes  
how to do the basic stuff in Git...  
and maybe later some not-as-basic stuff.   [=   

---
---
### Start a Git Repo Locally:  
[image 01]
make a directory in your local repo spot (note path)...  
-- this directory will become your local repo --
then flip over to that directory aka repo...  
then initialize your repo locally.  

<br>

then go to GitHub, and from your account, create a new repo -- naming it the same thing you named your local directory  
(not sure you **have** to, but doesn't it make sense you would?)  
[image 02]

then you get this:  
[image 03]

obviously, we will follow the "…or push an existing repository from the command line" instructions.
**[image 4]**
at first I thought it was just an issue of not doing a `commit`, so as you can see, I tried that too... *but*... 

(<a href="https://stackoverflow.com/questions/4181861/message-src-refspec-master-does-not-match-any-when-pushing-commits-in-git" target="_blank">lookie this StackOverflow discussion)</a>  
(<a href="https://georgik.rocks/common-mistake-when-creating-new-git-repo/" target="_blank">and this article</a>)

so that answers my question about if you can push a new, **empty** local repo... apparently, you need **something** in it!   [=  

I mean, obviously, you can still make your local repo, and `init`ialize it, and make your remote repo on the GitHub site..... but it doesn't really **do** anything til you have some files in it.  

I guess that makes sense -- I just wanted to know for sure what it would do... so tried it to see what happened!   [=  

<br>

---

**[image 5]**  
so I fixed the "nothing in my local repo" issue.....  

**[image 6]**  
and then did `status`... `add`... `commit`... and `push`!
(you don't **have** to do `status`, I just wanted to show it)  

note how it says:  
```
To https://github.com/Stormy9/footle.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

and lookie now, how my GitHub page looks!  
**[image 7]**  

<br>

**[image 8]**  
**[image 9]**  
note I only added **one** of the files, at first...
this is so I could show `status` and `add`ing one file vs. multiple files (note just a single space between file names).  
plus to show how `status` looks at various steps.  

note I also edited the `woof.md` file, so you can see how that looks when `status` returns, and that you have to `add` that in order to get it to your GitHub (remote) repo.  

**[image 10]**
my GitHub page now...  

<br>

now watch this:  
**[image 11]**  
**[image 12]**  
this shows `add` for all files that need adding -- note it catches both edited files, and new files.  

you can also do `git add -A` or `git add .`
(yes, you type a period there)
i just like using the `*` since that means "all" in so many other applications.  

<br>

and my GitHub page now:  
**[image 13]**  

<br>

---
---
### Doing a Git Branch:  








<br>

---
---
some frequently-used git commands are:
```
git init
git status
git add
git commit
git push
git pull
git fetch
git remote
git log
```

<br>

---
---
### Making a Git**Hub** Repo from the Command Line:  

Turns out you **can** start not just a **Git** repo, but a Git**Hub** repo, from your command line or Git Bash!  

I had gotten to wondering, thinking there *must* be *some* way, so Googled around, and sure enough!  Not just **one** way, but **two**!  

I won't go into *all* the detail here, and I haven't set everything up to do this on my main machine yet, since it's not immediately germaine to what we're doing here, and is a relatively small detail -- but would be a fun thing to do and try sometime.  

Check out <a href="https://stackoverflow.com/questions/2423777/is-it-possible-to-create-a-remote-repo-on-github-from-the-cli-without-opening-br" target="_blank">this StackOverflow conversation</a>.  

__Way One:__  
Apparently, there is a GitHub API, and you can create your Git**Hub** repo from the command line with cURL.  

<a href="https://curl.haxx.se/windows/" target="_blank">Get cURL here</a>.  
The installation of cURL is a snap on Linux boxes of course, but in Windows it takes a few steps.  Not super-hard ones, but still.  The steps for Windows are <a href="https://develop.zendesk.com/hc/en-us/articles/360001068567-Installing-and-using-cURL" target="_blank">on this ZenDesk page</a>.  

And <a href="https://coderwall.com/p/mnwcog/create-new-github-repo-from-command-line" target="_blank">here's how to use cURL to access the Git**Hub** API.</a>   

There were a few other various & sundry articles about this, but the ones here are the key ones.  

<br>

__Way Two:__  
Another way, that many say is better -- and it seems like it would be -- is to download & install <a href="https://hub.github.com" target="_blank">Hub</a>, described as "an extension to command-line git that helps you do everyday GitHub tasks without ever leaving the terminal."  

<a href="https://hub.github.com/hub.1.html" target="_blank">Here</a> is a page with some of the additional commands.  (the one for this is `hub-create`).  

<br>

---
---
### Customizing Your Git Bash:  
doing cd in my Git Bash looks like this:
<a href="https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_00.PNG">![screenshot of step 0](https://stormy9.github.io/CS460/hwk_02/images/hwk_02-Step_00.PNG)</a>  

I mean, I **know** how to `cd`... I just always forget what to do when parts of your path have spaces and stuff in them.   [=  

And it makes sense to just figure out changing the default starting location.  

aha!  
<a href="https://stackoverflow.com/questions/7671461/how-do-i-change-the-default-location-for-git-bash-on-windows" target="_blank">here's</a> how to change the default start location for your Git Bash... this was easier than I thought.  

There's also a way via editing your `.bashrc` file.  

But being in Windows, the "properties" thing was quicker & super-easy.  Note I had to get the correct shortcut pinned to my taskbar!  And I've changed a `.bashrc` file before, but it's been a while.  

You can also go in and set your default opening window size via "properties!!

<br>

---
---
---
[back to CS460 page](https://Stormy9.github.io/CS460#git/ "CS460 main page")   

[back to main page](https://Stormy9.github.io/ "main page")   
