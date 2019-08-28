<link rel="stylesheet" type="text/css" href="https:/Stormy9.github.io/CS460/references/styling/mystyles_a.css">
<link rel="stylesheet" type="text/css" href="https:/Stormy9.github.io/CS460/references/styling/mystyles_b.css">

<script src="https:/Stormy9.github.io/CS460/references/scripting/ref_nav.js"></script>

---
# html5 notes  
## difference(s) between **html** and **html5**  

woo-hoo!

<br>

Check out <a href="https://www.w3schools.com/html/html5_intro.asp" target="_blank">this</a> W3Schools page.

<br>

---
---
## basic template for an **html5** page  
### with explanations in the comments  
```html
<!doctype html>     <!-- MUST BE AT VERY TOP! -->
                    <!-- before any html -- this sets html5 -->
                    <!-- this is the opening <html> tag -->
                    <!-- the root element of every html page -->
<html lang="eng">   <!-- sets spoken language for your page -->
                    <!-- both these go before <head> tag -->

    <head>  <!-- head = all the things not seen -->

        <meta charset="utf-8">  <!-- define char set -->

        <!-- set responsive meta tag -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
        <!-- links to css, fonts, bootstrap, etc. -->
        <link rel="stylesheet" type="text/css" href="my_styles.css">
        
        <!-- any internal/embedded css goes in here -->
        <style>
            body {
                background-color: lemonchiffon;
            }
        </style>
        
        <!-- link to js scripts with <script> tags -->
        <script src="my_script.js"></script>

        <script>
            <!-- or put your js script right here -->
            <!-- between these <script> tags -->
        </script>

        <!-- except this: it'll show in the browser tab -->
        <title>my first page!</title>
        
    </head>
<!----------------------------------------->

    <body>  <!-- all the stuff that's actually seen! -->

        <!-- there's h1 to h6 -->
        <header>
            <h1> this is our header </h1>
        </header>
        
        <nav class="nav"> navigation area </nav>
        
        <main>main
            <p id="demo">the id=demo paragraph
            </p>

            <div class="story">pretend this is a cute story 
                about a sweet Sheltie..... 
            </div>
        </main>

        <aside>
            minor/bonus content goes here
        </aside>
        
        <footer> footer </footer>
    
    </body>    
    
    <!-- notice the semantic html tags! -->

</html>     <!-- closing <html> tag-->
```
__note:__ `<head>` and `<header>` are **NOT** the same thing nor interchangeable!  

<br>

---
---
## html5 **block vs. inline** elements  


<br>

---
---
## html5 **links**  


<br>

---
---
## html5 **images**  

<br>

---
---
## html5 **lists**  


<br>

---
---
## html5 **tables**    


<br>

---
---
## html5 **forms**  


<br>

---
---
## html5 **code snips**

<br>

---
---
## html5 **includes**  
Holy freaking shite!  
One would think this would be something relatively easy and straight-forward -- like including `css` and `js` files in your `html` files is... especially with `HTML5`... but ***no***.  

*(this is a very annoying oversight or omission!)*

I remember doing what I'd thought were really slick `html` includes while learning web design/dev at Chemeketa..... so I looked up what I did then, and they were, but were done with `php` -- which **is** one of the easiest & most straight-forward ways -- but GitHub pages do not support `php`.  

So I did some Googling..... 

<br>

Some ways I discovered require using various libraries or whatever, which I didn't think would work in this scenario -- using `markdown` pages and GitHub sites... and some stuff about `iframes` that I didn't want to get into.  

Another way I found -- that was just as easy & straight-forward as `php` -- was **S**erver **S**ide **I**ncludes... SSI's.  But, GitHub pages does not support this, either.   

A few ways I found, though, were more straight-forward... involving `JavaScript` &/or `jQuery`. Yay!  

<br>

The one I went with -- for these reference pages -- for the `nav` up top --  was simply the `JavaScript document.write()` way... 

Which, as 2nd-tier easy & straight-forward as it ***ended up*** being... it took me a bit to figure out how to adapt things from the examples I found online!  sheesh.  

<a href="https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file" target="_blank">This</a> on StackOverflow rounds up some of the various ways...  

* go to **@Tafkadasoh's** answer -- the 3rd one...   
    * I wasn't sure what to do with all those `\` things...  

    * so I went to <a href="" target="_blank">the W3Schools page about JS output</a>...  

    * and tested stuff out in the repl... but it didn't work!

So then I tried:
* still in the W3 repl... tried putting each line of `html` in it's own `document.write()` statement -- leaving the `\` things off entirely... 
    * that **still** didn't work...  BUT...  

    * after some thought... i noticed the quotes wrapping the everything inside the parens of `document.write()`... and then the quotes in my `html` tags... and went "aha!"... and changed the quotes in my `html` tags to single ones.....  

    * **THEN** it worked!!  in the repl, and on my GitHub pages!  

* But, wanting something cleaner if I could... I went back to the W3 repl to figure out the `\` things... 
    * and I did!  they have to be placed very specifically.  

    * and I didn't want to mess with that shell script stuff in **@Tafkadasoh's** answer   [=  

<br>

Later I'll mess with the `jQuery` stuff -- but I'm still in the process of refreshing on `JavaScript` first, right now!  

So you just make a `.js` file that looks like this:  
```javascript
document.write("<ul class='nav'> \
<a href='https:/Stormy9.github.io/CS460/references/git/'><li class='nav'>git</li></a> \
<a href='https:/Stormy9.github.io/CS460/references/markdown/'><li class='nav'>md</li></a> \
<a href='https:/Stormy9.github.io/CS460/references/html/'><li class='nav'>html</li></a> \
<a href='https:/Stormy9.github.io/CS460/references/css/'><li class='nav'>css</li></a> \
<a href='https:/Stormy9.github.io/CS460/references/bootstrap/'><li class='nav'>bs</li></a> \
<a href='https:/Stormy9.github.io/CS460/references/js_jq/'><li class='nav'>js+jQ</li></a> \
<a href='https:/Stormy9.github.io/CS460/references/c_sharp/'><li class='nav'>C#</li></a> \
</ul>");
```
then, in your `.md` (or `.html`) pages **RIGHT** where you want your snip of `html` to appear, you just do this:  
```html
<script src="https:/Stormy9.github.io/CS460/references/scripting/ref_nav.js"></script>
```
Yes, you put the `<script></script>` tags right where the `html` code is supposed to go.

And..... woo-hoo!   [=  

<br>

---
<a href="https://www.w3schools.com/howto/howto_html_include.asp" target="_blank">W3Schools -- HTML Includes</a>   
So they came up with a way to do this... and I guess it's fairly straight-forward... but not enough for me right now at this point.   [=  

Just Google "how to do html includes" and look at all of that!  It really should be a **lot** easier!  

<br>

---
In all my Googling, one page I found <a href="https://css-tricks.com/the-simplest-ways-to-handle-html-includes/#article-header-id-8" target="_blank">was this one</a> at CSSTricks... and one way they list, is **just** for `Jekyll` pages...  

I'd perused this page before... a few times over the figuring this out... why had this not registered sometime earlier??  It didn't, btw, until I figured out all that up there.  hahaha!   [=  

Anyway, it says:  
> You keep your includes in the `/_includes/` folder

 And I'm not sure what they are referring to, here...  **What** `/_includes`/` folder?  Do we **make** it in our GitHub?  Or does it exist somewhere in Jekyll, and if so, how do we find it?  
    
It links to <a href="" target="_blank">this Jekyll page</a>, which explains some more... 

About this `_includes` folder spoken of, it says:  
> Jekyll will look for the referenced file (in this case, `footer.html`) in the `_includes` directory at the root of your source directory and insert its contents.  

-- and you don't **have** to put it there, after all.  

Oh well.  *sigh*.  Geezus.  
I already spent too much time on this!!   [=  
*(and now I know a Jekyll-independent way, which might come in useful for other stuff)* 

<br>

---
---
## some good html5 sites    
* <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">**M**ozilla **D**eveloper **N**etwork -- CSS</a>  

* <a href="https://www.w3schools.com/html/default.asp" target="_blank">W3Schools -- Practice HTML5</a>  
    * <a href="https://www.w3schools.com/html/html_examples.asp" target="_blank">W3Schools -- HTML Examples</a>  
    for everything -- all editable!  

    * <a href="https://www.w3schools.com/tags/default.asp" target="_blank">W3Schools -- Full Glossary of HTML Tags</a>

    * <a href="https://www.w3schools.com/tags/ref_attributes.asp" target="_blank">W3Schools -- Full Glossary of HTML Attributes</a>


* <a href="http://htmlandcssbook.com/" target="_blank">HTML & CSS -- the book by John Duckett</a>
    * i have this in print and a pdf version -- i like having both!   [=  

    * and here's <a href="http://www.htmlandcssbook.com/code-samples/" target="_blank">the code samples that go with the book</a>

<br>

---
---
---
[back to CS460 page](https://Stormy9.github.io/CS460#html/ "CS460 main page")   

[back to main page](https://Stormy9.github.io/ "main page")   
