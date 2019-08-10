# homework one
the assignment instructions are <a href="http://www.wou.edu/~morses/classes/cs46x/assignments/HW1.html" target="_blank">here</a>  

the repository to the main part of the assignment, found in Step 3, is <a href="https://github.com/Stormy9/Stormy9.github.io/tree/master/CS460/hwk_01/games" target="_blank">here</a>  

and <a href="https://Stormy9.github.io/CS460/hwk_01/games/" target="_blank">here</a> is the multi-page/hyperlinked site i made to practice HTML/CSS & Bootstrap (see Step 3).   

<br>

---
---
### Step 1 [setup]: 
* I'd already installed Git, for Fall '18 / CS407MA  -- an very fun class, by the way -- so just updated my version of Git Bash *(I also have their desktop app from that class)*  
<br>   
   * In that class, I also learned how to *use* Git -- in connection with Github -- and about 99% of that use, was from the command line (on a Linux AWS system)   
   
   * I got *lots* of practice using Git & Github from the command line in that class!  I got pretty comfortable with it -- for the basic common stuff, anyway, like:  

      `init, status, add, commit, log, push, pull, fetch`
      and `clone`ing / synching local with remote repos  
   
      but did refresh myself on it with the tutorials I found <a href="http://www.wou.edu/~morses/classes/cs46x/resources/resources.html" target="_blank">on Dr. Morse's site</a> and by just googling some additional thoughts and questions I came up with.  

      I didn't have to do any `config`ing, because it was already done from before... so all I had to do was the `git init` and `git remote add origin` thing, plus some `status` checks, `add`s, `commit -m`s, and `push`es throughout the process.

      (the latter is `git push origin master`, by the way)

      <br>
      I gathered all the stuff I liked best, <a href="https://stormy9.github.io/CS460/references/git/" target="_blank">here</a>.  

      <br><br>

* I got a github repo set up for CS460 -- and synched locally, so I'll be all ready to develop  
    * with sub-directory/repos for each homework to come    

       **it looks like this on Github:**   
       ![screenshot of CS460 repo online](https://stormy9.github.io/CS460/hwk_01/images/CS460-Hwk_01-Step_01_a.PNG)   
       
       **and here's locally via Git Bash:**   
       ![screenshot of CS460 repo in Git Bash](https://stormy9.github.io/CS460/hwk_01/images/CS460-Hwk_01-Step_01_e.PNG)   
       
   Initially, I'd made a repo that was just called `CS460`, with a directory for each homework in it.

   However, while working on homeworks 1 & 2, I realized that it makes the most sense -- is most practical -- to have everything in my `Stormy9.gitbuh.io` repo, organized in the same fashion -- a directory for each homework; and in those, directories for the actual project.
    
<br>

---
---
### Step 2 [more setup]:
* Obviously, I already had a github account (:   

* I went ahead and set up my Bitbucket account now   
   <a href="https://bitbucket.org/Stormy9/" target="_blank">my bitbucket account/repo</a>      
   * I even got this set up:
      <a href="https://stormy9.bitbucket.io/" target="_blank">my bitbucket.io site</a>   
      Yeah, i know there's nothing there, yet, but i should be able to figure that out okay, once I get my github pages figured out.   [=

Later, somehow BitBucket wiped out my repos and won't let me log in any more -- apparently some merging with Atlassian -- so I am in contact with them to rectify this situation.  (you might know, the only thing I didn't get a screenshot of..... ha!)

<br>

---
---
### Step 3 [content/coding]:
Our family has long loved to play games -- like board & card games -- in other words, "old-school games".  

So, that's what I'm doing my multi-page, hyperlinked website on:  games our family has fun playing!  Like a game-review site.   

<br><br>
BUT... I had to learn Bootstrap first -- plus refresh myself on HTML & CSS.   

I'd learned -- and got *lots* of practice with -- HTML & CSS while completing my CIS degree at Chemeketa... but have barely used it since graduatuing Summer of 2017.  I've been too busy with Java, Data Structures, Python, Algorithms, Git, databases, and lots of other stuff my first two years at WOU.

However, I recalled that neither HTML nor CSS are very difficult or confounding or anything -- sometimes CSS was perhaps a bit annoying, to get it to do just want you wanted, but not *that* bad..... and, I distinctly remember having fun with both!  [=  

So, for a refresher and to play around with things to get acclimated again, I went to W3Schools for <a href="https://www.w3schools.com/html/default.asp" target="_blank">HTML</a> and <a href="https://www.w3schools.com/css/default.asp" target="_blank">CSS</a>.

The <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">Mozilla Developer Network - HTML</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">Mozilla Developer Network - CSS</a> sites, as recommended by Dr. Morse, are also awesome -- comprehensive and full of essential well-presented information.  However, they don't have "try it!" REPL's in each section like W3Schools, and feel a little more difficult to navigate.

For CSS, <a href="https://css-tricks.com/" target="_blank">CSS Tricks</a> is also a very good resource...  
and for HTML, <a href="https://html.spec.whatwg.org/dev/" target="_blank">HTML: The Living Standard</a> is pretty cool, too.  

<br><br>
At Chemeketa, W3Schools had been heartily recommended to us to augment our class learning, as a reference, and to try some hands-on practice for HTML, CSS, JavaScript, Ajax, php, etc.

I really like their format, which includes REPLs on every page -- you can test everything quick & easy, making edits to see what happens... and their organization, and style of straight-forward, concise *("clear; brief but comprehensive")* explanations.  Besides the tutorial sections, they have a fully linked quick-reference section for each subject.  

(W3Schools <a href="https://www.w3schools.com/cssref/default.asp" target="_blank">CSS Reference</a> & <a href="https://www.w3schools.com/tags/default.asp" target="_blank">HTML Reference</a>)

They are also easier (to me) to use as a quick reference if you already know what you're doing.   [=  

<br><br>
This part was actually fun.  That's not to say that Steps 1 - 2 plus 4-8 *weren't* fun... but this was, I think, the *most* fun.  [=    

---
#### Bootstrap!  [Step 3 con't]
So this part was all-new to me.  Of course I'd heard of it, but I'd never really looked into it all that much.

I primarily relied on <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/" target="_blank">the official Bootstrap page</a> and <a href="https://www.w3schools.com/bootstrap4/default.asp" target="_blank"> W3Schools</a>.   

<a href="https://medium.com/quick-code/top-tutorials-to-develop-responsive-websites-using-bootstrap-4-c934172f3ebd" target="_blank">This article on Medium.com</a> has some good recommmendations for learning and practicing Bootstrap, too.   Plus Googling stuff if need be.  

Much like HMTML & CSS themselves, learning Bootstrap wasn't really all *that* difficult.   [=  

<br><br>
Getting the grid & container system down is the main thing -- and, of course, familiarizing yourself with all of the special pre-made classes for incorporating the Bootstrap CSS into your HMTL.  
<a href="https://getbootstrap.com/docs/4.3/layout/overview/" target="_blank">Official Bootstrap - Overview, Containers, Responsiveness</a>  
<a href="https://getbootstrap.com/docs/4.3/layout/grid/" target="_blank">Official Bootstrap - Grid System</a>  
<a href="https://www.w3schools.com/bootstrap4/bootstrap_grid_basic.asp" target="_blank">W3Schools - Grid System</a>  (they cover containers on their '<a href="https://www.w3schools.com/bootstrap4/bootstrap_get_started.asp" target="_blank">Getting Started</a>' page)

<br><br>
This is the key part for getting started:  
<a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/" target="_blank">Bootstrap Official Page</a>  
<a href="https://www.w3schools.com/bootstrap4/bootstrap_get_started.asp" target="_blank">W3Schools - especially see the 'Create First Web Page With Bootstrap 4' section</a>
and it's so quick & easy!

<br><br>
Just put this at the top of your `html` pages, within the `<head>` section:
```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <title>bootstrap template example</title>

      <!-- required standard meta tag -->
      <meta charset="utf-8">

      <!-- required responsive meta tag -->
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!-- bring in the bootstrap css library -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

      <!-- then put in your own css -->
      <link rel="stylesheet" type="text/css" href="styling/mystyles.css">

   </head>
```
and this near the bottom -- right before your closing `</body>` tag:
```html
      <!-- optional Bootstrap-related JavaScript -->
      <!-- REQUIRED ORDER:  jQuery first, then Popper.js, then Bootstrap JS plugins -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

      <!-- then put in your own js if you're gonna -->

   </body>
</html>
```

<br><br>
Then you're free to go ahead and start implementing the grid & container system, along with the special CSS classes or anything else in Bootstrap, that you want!  

<br><br>
There are different sources from whence you can pull in Bootstrap... the official Bootstrap page uses `StackPath`, while W3Schools uses `MaxCDN`, for CSS & JS... W3Schools gets the jQuery from `googleapis`, while the official Bootstrap page gets it straight from `jQuery` -- and uses the 'slim build', while noting the full version is also supported... both get `popper.js` from `CloudFare`.  

Also, I noted W3Schools puts the jQuery/popper/JavaScript `<script>` tags up in the head with the CSS tag -- but the official Bootstrap page says to put them at the bottom.  The latter matches with what I was taught about where to put your JavaScript etc. tags, so that's what I did.

For the <a href="https://www.w3schools.com/js/js_whereto.asp" target="_blank">W3Schools JavaScript section</a>, it does say:  
*"Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display"*  
which yeah, I remember that's the reasoning now.   [=  

<br><br>
The official Bootstrap page example links also include `integerity` and `crossorigin` attributes, while W3Schools does not.  These are explained <a href="https://stackoverflow.com/questions/32039568/what-are-the-integrity-and-crossorigin-attributes" target="_blank">here</a>.

Note Bootstrap *requires* using HTML5... although, why wouldn't you, anwyay??   [=

<br><br>
Using Visual Studio Code, with it's auto/instant preview, was awesome -- you can see exactltly how your page will look, immediately upon creation/edit.  Well, most of the time.  Sometimes there's a bit of lag, or you have to refresh the preview.  But still.

---
#### Meeting the Requirements:  [Step 3 con't]
* i used Bootstrap, of course, for all my (lab) pages  
<br>
   * i used both single & multi-column formatting -- including on the same page, which i presume was the point   [=

   here's the multi-column set-up i did:  
   ```html
   <div class="row">            
      <div class="col-sm-5 pt-3 pb-4 px-3" id="desc">
         
         <!-- some stuff -->
        
      </div> <!-- end of col-5 div -->

      <div class="col-sm-7 pt-3 pb-4 px-3" id="photos">

         <!-- some stuff -->

      </div><!-- end of col-7 div -->

   </div><!-- this is end of row one -->
   ```
   <br>

   all that -- and it's content -- is inside a container like this:  
   ```html
   <div class="container-fluid mt-5 pt-4 pb-4">

      <!-- bunch of stuff
      
   </div><!-- end of container-fluid / main div -->
   ```
   and yes, I always comment what closing tags go with -- it saves time following the tracer lines!   [=  
   <br><br>


* i made a separate `.css` file, of course -- this is just as I was taught at Chemeketa -- it's also in it's own sub-directory as taught  
<br>
   * i wrote some of my own classes -- and used them somewhere(s)!  

   here's the links styling section (there's <a href="https://github.com/Stormy9/Stormy9.github.io/blob/master/CS460/hwk_01/games/styling/mystyles.css" target="_blank">more</a>):  
   ```css
   /* When setting the style for several link states, */
   /* there are some order rules:                    */
   /* a:hover MUST come after a:link and a:visited  */
   /* a:active MUST come after a:hover             */
   a.contact:link {
      color: crimson;
      text-decoration: none;
      font-weight: bold;
   }

   a.contact:visited {
      color: indianred;
      text-decoration: none;
      font-weight: bold;
   }  

   a.contact:hover, a.contact:active {
      color: rgb(252, 108, 133); /* watermelon! */
      text-decoration: none;
      font-weight: bold;
   ```
   <br><br>

* i made a nav bar/menu, that includes links to all pages on the site, and includes a drop-down portion  

   it looks like this:  
   ```html
   <!-- nav part -->
   <nav class="navbar navbar-expand-sm bg-warning 
               navbar-light fixed-top">
      <!-- Brand -->
      <a class="navbar-brand" href="index.html">old-school gaming</a>
              
      <!-- Toggler/collapsibe Button -->
      <button class="navbar-toggler" type="button" 
               data-toggle="collapse" data-target="#collapsibleNavbar">
         <span class="navbar-toggler-icon"></span>
      </button>
              
      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">  
         <ul class="navbar-nav">
            <li class="nav-item">
               <a class="nav-link" href="about.html">about</a>
            </li>

            <li class="nav-item">
               <a class="nav-link" href="contact.html">contact</a>
            </li> 

            <!-- drop-down -->
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" 
                  id="navbardrop" data-toggle="dropdown">games
               </a>
               <div class="dropdown-menu">
                  <a class="dropdown-item"
                     href="smartass.html">Smart Ass</a>
                  <a class="dropdown-item-active noline" 
                     id="noline" href="#">Exploding Kittens</a>
                     <!-- see note ^^^ in mystyles.css -->
                  <a class="dropdown-item" 
                     href="qwirkle.html">Qwirkle</a>
               </div>
            </li>
            <!-- end drop-down -->
         </ul>
      </div> 
   </nav>
   <!-- end nav part -->
   ```
   <br><br>

* i have a small table on each of the game description pages, giving the basics of each game   

   like this:  
   ```html
   <!-- table part -->     <!-- first row -->
   <div class="table-responsive-lg pb-3">
      <table class="table">
         <thead>
         <!-- THIS IS THE ONLY PART i don't think figured
               out exactly right & like i want!!!!!       
               it's the column min width -- for the middle 
               column in particular!                  -->
            <tr>
               <th style="width:25%">genre</th>
               <th style="width:25%">ages</th>
               <th style="width:50%">#players</th>
            </tr>
         </thead>
         
         <tbody>     
            <tr class="last">
               <td><p>puzzle-type</p>
                  <p>pattern/color matching</p></td>
               <td>6 & up</td>
               <td>2 to 4<br>(according to the box -- 
                              we've played with more!)</td>
            </tr>
         
         </tbody>
      </table>
   </div><!-- end of table-responsive-lg div -->
   ``` 
   <br><br>

* i used two of the three types of lists -- a `ul` on each game description page, and a `dl` on the main/front page  

   here's one:
   ```html
   <ul class="fun">
      <li>avoid getting the Exploding Kitten 
         card -- the kitten trying to blow 
         up the planet!
      </li>

      <li>hint: just go ahead and look through 
         all the cardsand laugh at the all of
         the cards first, or you'll be tempted 
         to mid-game -- literally giving away 
         your hand!
      </li>

      <li>play some of the most creative action 
         cards ever in a card game -- 
         the "nope" card, the "attack" card, the
         "see the future" card, and more...
      </li>
      <!-- note this isn't within it's <li> -->
      <ul class="fun">
         <li>not to mention the hilarious 
            illustrations on them...
         </li>
      </ul>
   </ul>
   ```
   <br><br>

* consistent styling -- well, __duh__!  not only is that logical and sensible and aesthetically appealing... but was drilled into us at Chemeketa.   [=  
<br>
   * i used both bootstrap styling, and my own, as noted above  
   * i don't *think* my colors are obnoxious.  i wanted something fun and colorful, *without* being obnoxious  
   * of __course__ I didn't use templates or theme packs!  sheesh.  my little gaming site is all my own.  

   <br>

* I wrote every single character of code myself -- no WYSIWYG.  what fun would *that* be?  as mentioned before, i used  Visual Studio Code for my editor, which I really like.  (previously I'd used both Brackets & Notepad++)

---
#### snags & whatnot:  [Step 3 con't]  
There weren't really that many!  
* a small one with my own `CSS` -- that I never did resolve, but is documented in code comments <a href="https://github.com/Stormy9/Stormy9.github.io/blob/master/CS460/hwk_01/games/styling/mystyles.css" target="_blank">here</a>.  

   I wanted to remove the underlines on the links in the drop-down portion of my nav bar... alas, I could not.  So they remain.

   <br>

* a small one with the `HTML/Bootstrap`, on each of the individual game pages, that I just worked around and got things looking good anyway... documented in the code comments <a href="https://github.com/Stormy9/Stormy9.github.io/blob/master/CS460/hwk_01/games/smartass.html" target="_blank">here</a> (for example).

<br>

* not really a "snag", per se, but it took a little playing around with it, to understand how the `responsive-lg` vs. `responsive-md` or `responsive-sm` worked.  Which was kinda backwards from my initial thought for some reason.  A lot of times I don't *totally* get something til I can play with it and see what it does in response to various things.   [=

---
---
### Step 4 [test]:
The test to which this refers, is to test if the stuff you do in Step 3 will work from anywhere.....
I will test all that when I finish Step 3.  (:

__The lab instructions say:__

* "make sure all changes are committed and pushed to your remote repository"   __check!__  

<br>

* "you should be able to `clone` your repo to anywhere, and then open the main `.html` file, and view your pages correctly"  -- in other words, it's gotta render stuff correctly.  
__check!__  

   I think, anyway.  I mean, isn't my repo essentially alread `clone`d?  I can just go into my local version on Windows Explorer, and open any of the `.html`, `.css`, or `.md` files in whatever I want, and it all works correctly.....

<br>

---
---
### Step 5 [even more setup]:
This is the part about making a repo on GitHub + enabling your GitHub Pages.   

After some googling around, I found that since I have an existing GitHub account, all I had to do, in order to enable my GitHub pages, was to create a specially-named new repo in it like so: `username.github.io`   
<br><br>

At first I tested it out with an `.html` page, and that worked just fine and all..... but after investigating the sample pages referenced in the assignment instructions, I opted to go with `.md` pages, using one of the GitHub/Jekyll themes.   

For one thing, it was easier & faster to make them... for another thing, the practice making pages with markdown was cool -- I had very minimal practice with it til now.  And, hey -- even Dr. Morse made his example GitHub Page with Markdown.   [=   
<br><br>
I set up my GitHub Portfolio loosely following the examples, borrowing a little from here and a little from there for inspiration -- and also following the instructions, of course, and putting my own twist on it.  
<br><br>

[Here's a link to the front page](https://stormy9.github.io/ "my github pages front page")   

[Here's some sources I used to learn/refresh/practice markdown-ing](https://stormy9.github.io/CS460/references/markdown/ "my markdown notes page")   

<br>

---
---
### Step 6 [portfolio content]:
As you can see, I've been doing this one all along here.  (:   

<br>

---
---
### Step 7 [turn it in]:
I will.  (:   

<br>

---
---
### Step 8 [collection of notes/references + cheat-sheets + code snippets + etc]:
So I haven't started actually putting all of the above in there... BUT... I *do* have everything in place to do so... see?

<br>  

**github repo structure:**   
![screenshot of relevant github repo](https://stormy9.github.io/CS460/hwk_01/images/CS460-Hwk_01-Step_08.PNG)   


**screenshot of my page:**   
![screenshot of my page w/links to the good stuff](https://stormy9.github.io/CS460/hwk_01/images/CS460-Hwk_01-Step_08_b.PNG)   

<br>
*(from github, so you can see where it starts/ends and not get all befuddled about where to click...)*

<br>

---
---
---
[back to CS460 page](https://Stormy9.github.io/CS460/ "CS460 main page")   

[back to main page](https://Stormy9.github.io/ "main page")  
