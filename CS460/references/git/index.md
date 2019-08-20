# git notes  
<style> 
ul {
  list-style-type: none; margin: 0; padding: 0;
}
li {
  display: inline; text-decoration: none; font-weight: bold; padding-left: 9px; padding-right: 9px;
}
</style>

<ul>
  <a href="https:/Stormy9.github.io/CS460/references/git/"><li>git</li></a>
  <a href="https:/Stormy9.github.io/CS460/references/markdown/"><li>md</li></a>
  <a href="https:/Stormy9.github.io/CS460/references/html/"><li>html</li></a>
  <a href="https:/Stormy9.github.io/CS460/references/css/"><li>css</li></a>
  <a href="https:/Stormy9.github.io/CS460/references/bootstrap/"><li>bs</li></a>
  <a href="https:/Stormy9.github.io/CS460/references/js_jq/"><li>js+jQ</li></a>
  <a href="https:/Stormy9.github.io/CS460/references/c_sharp/"><li>C#</li></a>
</ul>

---
how to do the basic stuff in Git...  
... and GitHub, and later BitBucket... 

... and maybe later some not-as-basic stuff.   [=   

---
---
## Start a Git Repo Locally:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_01.PNG">![screenshot of step 1](https://stormy9.github.io/CS460/references/git/images/git_ref_01.PNG)</a>
make a directory in your local repo spot (note path)...  
-- this directory will become your local repo --
then flip over to that directory aka repo...  
then initialize your repo locally.  

<br>

then go to GitHub, and from your account, create a new repo -- naming it the same thing you named your local directory  
(not sure you **have** to, but doesn't it make sense you would?)  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_02.PNG">![screenshot of step 2](https://stormy9.github.io/CS460/references/git/images/git_ref_02.PNG)</a>

then you get this:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_03.PNG">![screenshot of step 3](https://stormy9.github.io/CS460/references/git/images/git_ref_03.PNG)</a>

obviously, we will follow the "…or push an existing repository from the command line" instructions.

like so:
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_04.PNG">![screenshot of step 4](https://stormy9.github.io/CS460/references/git/images/git_ref_04.PNG)</a>
at first I thought the problem here, was just an issue of not doing a `commit`, so as you can see, I tried that too... *but*... 

(<a href="https://stackoverflow.com/questions/4181861/message-src-refspec-master-does-not-match-any-when-pushing-commits-in-git" target="_blank">lookie this StackOverflow discussion)</a>  
(<a href="https://georgik.rocks/common-mistake-when-creating-new-git-repo/" target="_blank">and this article</a>)

so that answers my question about if you can push a new, **empty** local repo... apparently, you need **something** in it!   [=  

I mean, obviously, you can still make your local repo, and `init`ialize it, and make your remote repo on the GitHub site..... but it doesn't really **do** anything til you have some files in it.  

I guess that makes sense -- I just wanted to know for sure what it would do... so tried it to see what happened!   [=  

<br>

---

<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_05.PNG">![screenshot of step 5](https://stormy9.github.io/CS460/references/git/images/git_ref_05.PNG)</a>  
so I fixed the "nothing in my local repo" issue.....  

<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_06.PNG">![screenshot of step 6](https://stormy9.github.io/CS460/references/git/images/git_ref_06.PNG)</a>  
and then did `status`... `add`... `commit`... and `push`!
(you don't **have** to do `status`, I just wanted to show it)  

note how it says:  
```
To https://github.com/Stormy9/footle.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```
<br>

and lookie now, how my GitHub page looks!  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_07.PNG">![screenshot of step 7](https://stormy9.github.io/CS460/references/git/images/git_ref_07.PNG)</a>  

<br>

we continue...
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_08.PNG">![screenshot of step 8](https://stormy9.github.io/CS460/references/git/images/git_ref_08.PNG)</a>  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_09.PNG">![screenshot of step 9](https://stormy9.github.io/CS460/references/git/images/git_ref_09.PNG)</a>  
note I only added **one** of the files, at first...
this is so I could show `status` and `add`ing one file vs. multiple files (note there's just a single space between file names).  
plus to show how `status` looks at various steps.  

note I also edited the `woof.md` file, so you can see how that looks when `status` returns, and that you have to `add` that in order to get it to your GitHub (remote) repo.  

<br>

<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_10.PNG">![screenshot of step 10](https://stormy9.github.io/CS460/references/git/images/git_ref_10.PNG)</a>
my GitHub page now...  

<br>

now watch this:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_11.PNG">![screenshot of step 11](https://stormy9.github.io/CS460/references/git/images/git_ref_11.PNG)</a>  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_12.PNG">![screenshot of step 12](https://stormy9.github.io/CS460/references/git/images/git_ref_12.PNG)</a>  
this shows `add` for all files that need adding -- note it catches both edited files, and new files.  

you can also do `git add -A` or `git add .`
(yes, you type a period there)
i just like using the `*` since that means "all" in so many other applications.  

<br>

and my GitHub page now:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_13.PNG">![screenshot of step 13](https://stormy9.github.io/CS460/references/git/images/git_ref_13.PNG)</a>  

---
**Addendum/PS:**  
I wanted to show, that doing `git add *` will **only** add the files for the repo/directory you're currently in -- and it's sub-directories -- and **not** "cousin" files... see?
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_14.PNG">![screenshot of step 14](https://stormy9.github.io/CS460/references/git/images/git_ref_14.PNG)</a>  

<br>

**Note:**  it's best/most convenient, to `cd` to the directory/repo you're working with, before doing `git status` and especially `git add`, to `add` in new/edited/deleted files for a `commit`.  

You can do it otherwise, but it's just easiest!   [=  

(because from another directory/repo, you have to type in the full path if you want to `add` a file!)

<br>

---
---
## Doing a Git Branch:  
So yeah, I pretty thoroughly covered this along with homework_02... however, I wanted a **Quick** reference here!  hahaha!   [=  

Making the new branch locally... 
... and pushing it to my GitHub:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_15.PNG">![screenshot of step 15](https://stormy9.github.io/CS460/references/git/images/git_ref_15.PNG)</a>  
note i don't have to have a file in it... 
... and that i did the `push` from the `master` branch -- 
you can also do it from the new `branch`, if you like, though.

<br>

and how it looks on my GitHub page:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_16.PNG">![screenshot of step 16](https://stormy9.github.io/CS460/references/git/images/git_ref_16.PNG)</a>  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_17.PNG">![screenshot of step 17](https://stormy9.github.io/CS460/references/git/images/git_ref_17.PNG)</a>  

<br>

---
remember to work in your new branch, you have to do a `checkout` on it first:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_18.PNG">![screenshot of step 18](https://stormy9.github.io/CS460/references/git/images/git_ref_18.PNG)</a> 
note how the `push` command is different for the `branch`...  
... also note how the `status`, `commit`, and `push` all state we're working in the `shelties` branch.


and looking in our new `shelties` branch on my GitHub page:
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_19.PNG">![screenshot of step 19](https://stormy9.github.io/CS460/references/git/images/git_ref_19.PNG)</a> 

vs. the `master` branch:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_20.PNG">![screenshot of step 20](https://stormy9.github.io/CS460/references/git/images/git_ref_20.PNG)</a>  

<br>

it would be the same if you made a new directory in your `branch` -- it would only show when you're viewing that `branch`:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_21.PNG">![screenshot of step 21](https://stormy9.github.io/CS460/references/git/images/git_ref_21.PNG)</a>   
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_22.PNG">![screenshot of step 22](https://stormy9.github.io/CS460/references/git/images/git_ref_22.PNG)</a>  
note how git didn't reflect any changes in `status`, just from adding new directories -- it only picked up changes, when I put files into the directories!


and the views from my GitHub page:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_23.PNG">![screenshot of step 23](https://stormy9.github.io/CS460/references/git/images/git_ref_23.PNG)</a>   
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_24.PNG">![screenshot of step 24](https://stormy9.github.io/CS460/references/git/images/git_ref_24.PNG)</a>  

isn't that cool so far?  

<br>

---
---
## Merging your Git Branch to Master:
This is super-simple, actually, so long as two things:  
* you don't have files in the two different branches, with identical names  
    * if you do, when you do your `merge`, Git will not complete the merge, and return a file showing where the differences between the two versions are -- it is then up to you to finalize the file... see my <a href="http://Stormy9.github.io/CS460/hwk_02/step_zero.html">hwk_02-Step_Zero page</a>.   [=  

* you remember to `push` your merge... 
    * yes, new files are not the only thing you need to `push`, in order to have it show up on your GitHub page.   [=  

But in our case here, we don't have identically-named files... and of course will remember to `push`... 

So all you gotta do, is this:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_25.PNG">![screenshot of step 25](https://stormy9.github.io/CS460/references/git/images/git_ref_25.PNG)</a>  
note how we have to flip to the `master` branch, before we do the `merge` -- always be **IN** the `master` branch when you `merge`!

<br>

and now my GitHub page looks like:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_26.PNG">![screenshot of step 26](https://stormy9.github.io/CS460/references/git/images/git_ref_26.PNG)</a>

cool, huh?   [=  

<br>

---
---
## Deleting your Branch when you're done with it:  
So after that `merge`... look, the `shelties` branch is still showing on my GitHub page:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_27.PNG">![screenshot of step 27](https://stormy9.github.io/CS460/references/git/images/git_ref_27.PNG)</a>
and it now includes everything from `master`.

in some cases, of course, you want to leave the `branch` you're working on there, for a while -- you may have more work and want to do more than one `merge` to `master` with it, before you're done.  

However, when you're all done with the work on said `branch`, you should delete it... here's how!  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_28.PNG">![screenshot of step 28](https://stormy9.github.io/CS460/references/git/images/git_ref_28.PNG)</a>  
oops!  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_29.PNG">![screenshot of step 29](https://stormy9.github.io/CS460/references/git/images/git_ref_29.PNG)</a>  

(or whatever it's **upstream** `branch` is, per <a href="https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely" target="_blank">this StackOverflow discussion</a> that Matt from GitHub's help desk sent me... so you can merge one `branch` into another `branch` that is not `master`?  cool!)

<br>

note that the `-d` tag will **not** delete a `branch` that is not fully `merge`d.
in other words, it will **only** delete a `branch` **iff** it has been fully `merge`d with `master`.  
if the `branch` you're trying to delete isn't fully merged, your git bash will return something like this:  
```
error: The branch 'testing' is not fully merged.
If you are sure you want to delete it, run 'git branch -D testing'.
```

<br>

And now see how my GitHub page looks:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_30.PNG">![screenshot of step 30](https://stormy9.github.io/CS460/references/git/images/git_ref_30.PNG)</a>  
note how there is no `shelties` branch to flip to, anymore.  

<br>

---
---
## some frequently-used git commands are:  
```
git init
git remote
git status
git add
git commit
git push
git pull
git fetch
git log
```
---
### git log  
here's an example of what `git log` returns:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_31.PNG">![screenshot of step 31](https://stormy9.github.io/CS460/references/git/images/git_ref_31.PNG)</a>  

do this from the `master` branch, btw.  

<br>

---
### git init  
`git init` is only used the one time, when setting up your local repo, as described up-top.  

<br>

---
### git config  
`git config` is used to set your user name and email for your account, and is typically only done once, although if you need to change it, you can, of course...  

you can see what you've got `config`'d like this:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_32.PNG">![screenshot of step 32](https://stormy9.github.io/CS460/references/git/images/git_ref_32.PNG)</a>  
note how you can check just a single setting... 
... and also check where/how/why a setting came from!

And if you want to change a setting, you go:  
```
$ git config --global user.name "Stormy"
```
for instance.  
*(i didn't really want to change anything!)*

And here is my actual C:/users/tricia/.gitconfig file!  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_33.PNG">![screenshot of step 33](https://stormy9.github.io/CS460/references/git/images/git_ref_33.PNG)</a>  
you can edit it directly, if you like, too.  

<br>

<a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" target="_blank">here's</a> more about it, from the official Git Book.  
Although <a href="https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config" target="_blank">this Atlassian tutorial page</a> explains the `config` levels more clearly, to me.

<br>

---
### git pull  
`git pull` is just like `git push` -- except it goes the opposite direction... 

so, say you change something, for some reason, remotely -- like, from your GitHub page... you can do this, of course -- any file that is text-based (as opposed to an image -- so like `.txt`, `.md`, `.html`, `.css`, `.js`, `.java` files -- but not `.jpg` or `.png` or `.gif` files)  

Just click on the little pencil in the upper-right area, and it will open up and look like this:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_34.PNG">![screenshot of step 34](https://stormy9.github.io/CS460/references/git/images/git_ref_34.PNG)</a>
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_35.PNG">![screenshot of step 35](https://stormy9.github.io/CS460/references/git/images/git_ref_35.PNG)</a>  

<br>

note just doing `status` won't reveal anything has changed, remotely: <a href="https://stormy9.github.io/CS460/references/git/images/git_ref_36.PNG">![screenshot of step 36](https://stormy9.github.io/CS460/references/git/images/git_ref_36.PNG)</a>

and the next time you change something locally, and want to `push`, it will say this:   
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_37.PNG">![screenshot of step 37](https://stormy9.github.io/CS460/references/git/images/git_ref_37.PNG)</a>  

so you do this:
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_38.PNG">![screenshot of step 38](https://stormy9.github.io/CS460/references/git/images/git_ref_38.PNG)</a>
see how it's just like the `push`?   [=  
except i forgot that it will open a text editor for you to type a `merge message` -- which is like a `commit message` -- but no biggie... see, it just looks like all the other `-m` messages:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_38-a.PNG">![screenshot of step 38-a](https://stormy9.github.io/CS460/references/git/images/git_ref_38-a.PNG)</a>  
(it's the one that says `pointy_ears updated remotely -- tippy_ears updated locally`)


and now you can do your `push`:  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_39.PNG">![screenshot of step 39](https://stormy9.github.io/CS460/references/git/images/git_ref_39.PNG)</a>

<br>

and now see `tippy_ears.md` on the GitHub page?  
<a href="https://stormy9.github.io/CS460/references/git/images/git_ref_40.PNG">![screenshot of step 40](https://stormy9.github.io/CS460/references/git/images/git_ref_40.PNG)</a>
the new stuff i `cat appended` to it, is now all there from the `add/commit/push`

<br>

---
### git fetch
now, `git fetch`, I need to look up a little more, and play with a little, to fully understand how to use it..... 

specifically, the distinction between `fetch` and `pull`!

<a href="https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_fetching_and_pulling" target="_blank">The Official Git Book -- Fetching & Pulling</a>  

<a href="https://www.atlassian.com/git/tutorials/syncing/git-fetch" target="_blank">The Atlassian Tutorial - Git Fetch</a>

<a href="https://stackoverflow.com/questions/292357/what-is-the-difference-between-git-pull-and-git-fetch" target="_blank">StackOverflow -- What is the difference between `git pull` and `git fetch`?</a>  

the StackOverflow conversation recommends <a href="https://longair.net/blog/2009/04/16/git-fetch-and-merge/" target="_blank">this article at Mark's Blog</a>.

and there's <a href="https://stackabuse.com/git-difference-between-git-fetch-and-git-pull/" target="_blank">this at StackAbuse</a>.

<br>

But this is the upshot:
> In the simplest terms, git pull does a git fetch followed by a git merge.
>
>You can do a git fetch at any time to update your remote-tracking branches under refs/remotes/< remote >/.
>
>This operation never changes any of your own local branches under refs/heads, and is safe to do without changing your working copy. I have even heard of people running git fetch periodically in a cron job in the background (although I wouldn't recommend doing this).
>
>A git pull is what you would do to bring a local branch up-to-date with its remote version, while also updating your other remote-tracking branches.
> 
> -- @Greg Hewgill

and:
> When you use pull, Git tries to automatically do your work for you. It is context sensitive, so Git will merge any pulled commits into the branch you are currently working in.  pull automatically merges the commits without letting you review them first. If you don’t closely manage your branches, you may run into frequent conflicts.
>
>When you fetch, Git gathers any commits from the target branch that do not exist in your current branch and stores them in your local repository. However, it does not merge them with your current branch. This is particularly useful if you need to keep your repository up to date, but are working on something that might break if you update your files. To integrate the commits into your master branch, you use merge. 
>
> -- @Mouna Cheikhna 

both quotes from the linked StackOverflow page.  

(and this type of explanation should've been easier to find!)  

<br>

---
### the `-u` flag for `push`:  
**note:**  I'm still working on fully understanding the `-u` flag... I think I get it, but usually forget to type it in there.  

I mean, I know it's about "upstream tracking reference"... but I don't entirely get what that is, and it's importance, and what happens if you leave `-u` off... 

will not sticking it in there sometimes, hurt anything important in the long run?  do you *have* to put it in there every time?  or just when setting things up?  i guess i'll find out.....  

<br>

<a href="https://stackoverflow.com/questions/18867824/what-does-the-u-flag-mean-in-git-push-u-origin-master" target="_blank">screw the StackOverflow users who voted to close this question...</a>

do you know how long & deeply I had to search to find an answer to this simple question that should just be clearly explained somewhere from the get-go?

That page linked to <a href="https://git-scm.com/docs/git-push#Documentation/git-push.txt--u" target="_blank">this</a>, in the Official Git Book (note it's not in one of the actual chapters, but part of the official documentation -- scroll down to `-u`)  

it said this:  
> For every branch that is up to date or successfully pushed, add upstream (tracking) reference, used by argument-less git-pull[1] and other commands. For more information, see branch.< name >.merge in git-config[1].

the <a href="https://git-scm.com/docs/git-config#Documentation/git-config.txt-branchltnamegtmerge" target="_blank">more info</a> said this:  
> `branch.< name >.merge`  
> Defines, together with `branch.< name >.remote`, the upstream `branch` for the given `branch`. 
>
> It tells `git fetch/git pull/git rebase` which branch to `merge` and can also affect `git push` (see push.default). 
>
> When in `branch < name >`, it tells `git fetch` the default `refspec` to be marked for merging in `FETCH_HEAD`. The value is handled like the remote part of a `refspec`, and must match a ref which is fetched from the remote given by `branch.< name >.remote`. 
>
> The `merge` information is used by `git pull` (which at first calls `git fetch`) to lookup the default branch for merging. 
>
> Without this option, `git pull` defaults to `merge` the first `refspec` fetched. Specify multiple values to get an octopus `merge`. 
>
> If you wish to setup `git pull` so that it `merge`s into `< name >` from another `branch` in the local repository, you can point `branch.< name >.merge` to the desired `branch`, and use the relative path setting `.` (a period) for `branch.< name >.remote`.

<br>

StackOverflow summed it up thusly:  
> ...after pushing your local branch with -u option, this local branch will be automatically linked with remote branch, and you can use git pull without any arguments. 
>
> --@Shunya

and:
> It's the same as `--set-upstream`  
> It's used to set origin as the upstream remote in your git config.  
> It may help if you don't want to manually specify the remote every time you run git push.
> 
> --@Ahmed Siouani

<br>

Ooo!  you can also do:  
```
$ git push --help
```
and some cool stuff comes up.  

<br>

<a href="https://www.jquery-az.com/git-push-command/" target="_blank">There's also this blog...</a>  
the part that caught my eye was this:  
> The -u flag is used to set origin as the upstream remote in your git config.

<br>

and <a href="https://www.reddit.com/r/git/comments/3z43fa/in_the_command_git_push_u_origin_master_what_does/" target="_blank">this Reddit page</a> answered the question about needing to do it all the time or not -- and the question is phrased almost exactly as I had it in my own brain.   [=  

> "Upstream" is a reference that specifies which `branch` on which remote repository a local branch tracks. In effect, it represents a 'link' between the local and remote branches.
>
> The command `git push -u origin master` sets the upstream of the current local `branch`, so that it tracks the `master` branch of the remote repository `origin`.
>
> Typically, you only need to set the upstream once. Once it has been set, the `-u` is superfluous. 
>
> Indeed, so is `origin master`; once you've set the upstream on the local branch, you can simply use `git push`. The default target for `push` (and `pull`) is the upstream `branch` (unless you change the default settings).
>
> Personally, whenever I create a new `branch` that I also want on a remote, the first command I run after checking out that new branch is `git push -u [remote name] [branch name]`. Not only does that set the upstream for the `branch`, but if that `branch` name doesn't exist on the remote, Git creates it.
> 
> --@pi3832v2

<br>

Seriously -- I like quick, concise, clear-for-noobs answers... as Reddit user corzia noted, the man/help/documentation pages can be "monstrous" to hunt through, when all you want & need is a quick explanation!  

But sometimes those are difficult to find.   [=  
*(this one was the **most** difficult!)*
*(so far -- haha!)*

<br>

A big take-away is the thing about `origin master` only being needed the once, too, in a given `branch` -- and being able to just do `git push` after that!   [=  
(that makes it sound like that's true, so long as you remembered to do the `-u` flag!)

<br>

---
---
## Making a Git**Hub** Repo from the Command Line:  

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
## Customizing Your Git Bash:  
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
## my favorite overall Git pages:  
<a href="https://git-scm.com/book/en/v2" target="_blank">The Official Git Book</a> (all online!  and git host-agnostic)  
note you can search the full site, and it will return stuff that may not be in the official book "chapters"!

<a href="https://www.atlassian.com/git/tutorials/what-is-version-control" target="_blank">The Atlassian Git Tutorial</a> (affiliated w/BitBucket -- they have one section specifically about BitBucket as opposed to GitHub)  

<a href="https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html" target="_blank">Atlassian also has a handy cheat-sheet</a>

<a href="https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners" target="_blank">And this one at HubSpot</a>  
*(for a **very** quick run-through of getting set up and stuff -- GitHub-based)*  

The <a href="http://gitimmersion.com/index.html" target="_blank">Git Immersion page</a> is pretty good, too... easy-to-get and follow, straight-forward & concies -- even though it does Ruby stuff   [=  
*(which you have to install an interpeter for, kinda like Python or Haskell)*  

And I found this nifty online book:  <a href="https://anotheruiguy.gitbooks.io/gitforeveryone/index.html" target="_blank">Git For Everyone</a>

<br>

Plus, both GitHub & BitBucket help desk people are friendly and quickly responsive, and patient & kind!   [=  

<br>

And of course just googling a question, or an error message, or whatever -- StackOverflow is virtually assured to have something directly helpful.   [=  

<br>

---
---
---
[back to CS460 page](https://Stormy9.github.io/CS460#git/ "CS460 main page")   

[back to main page](https://Stormy9.github.io/ "main page")   
