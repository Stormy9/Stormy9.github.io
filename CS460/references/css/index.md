<style> 
ul.nav_ul {
  list-style-type: none; margin: 0; padding: 0;
}
li.nav_li {
  display: inline; text-decoration: none; font-weight: bold; padding-left: 9px; padding-right: 9px;
}
/* gotta do Link-Visited-Hover-Active */
  a.nav_a:link { /* just plain link in it's start state */
    text-decoration: none;                      }
  a.nav_a:visited { text-decoration: none; }
  a.nav_a:hover { text-decoration: none;   color: #9900ff; }
  a.nav_a:active { text-decoration: none; }
</style>

<link rel="stylesheet" type="text/css" href="https:/Stormy9.github.io/CS460/references/styling/mystyles_b.css">

<ul class="nav_ul">
  <a class="nav_a" href="https:/Stormy9.github.io/CS460/"><li class="nav_li">hwks</li></a>
  <a class="nav_a" href="https:/Stormy9.github.io/CS460/references/git/"><li class="nav_li">git</li></a>
  <a class="nav_a" href="https:/Stormy9.github.io/CS460/references/markdown/"><li class="nav_li">md</li></a>
  <a class="nav_a" href="https:/Stormy9.github.io/CS460/references/html/"><li class="nav_li">html</li></a>
  <a class="nav_a" href="https:/Stormy9.github.io/CS460/references/css/"><li class="nav_li">css</li></a>
  <a  class="nav_a" href="https:/Stormy9.github.io/CS460/references/bootstrap/"><li class="nav_li">bs</li></a>
  <a  class="nav_a" href="https:/Stormy9.github.io/CS460/references/js_jq/"><li class="nav_li">js+jQ</li></a>
  <a  class="nav_a" href="https:/Stormy9.github.io/CS460/references/c_sharp/"><li class="nav_li">C#</li></a>
</ul>

---
# css notes  
**cool stuff**  


**basic syntax**
is like this:  
<img src="https://Stormy9.github.io/CS460/references/css/images/css_syntax.PNG">  
*(borrowed from <a href="https://www.w3schools.com/css/css_syntax.asp" target="_blank">W3Schools</a> -- they have the best one!)*  

<br>

---
---
## where you can put it  
### **inline css** -- right in any html tag:
```html
<p style="color: tomato;">I am a cool paragraph -- 
even though my font color is tomato rather than cucumber!</p>
```
you can do this in `markdown` pages, too... for instance, that up there gives you:  
<p style="color: tomato;">I am a cool paragraph -- even though my font color is tomato rather than cucumber!</p>

<br>

---
### in your **\<head>** -- aka **internal css** 
```html
<!DOCTYPE html>
<html>
    <head>
        <title>woo-hoo!</title>

        <style>
            h1 {
                font-size: 24px;      color: OrangeRed;
            }

            p {
                font-family: Helvetica, Arial, sans-serif;
                font-size: 14px;
                color: Indigo;
            }
        </style>
    </head>
```
You can **also** do **this** in `markdown` pages!  
That's how I did the little mini-menu across the top!  

But I can't really demo that right up there, right here.  
I trust you get the idea.   [=  
*(if not find a repl and fiddle around with it!)*

<br>

---
### in **it's own sheet**!  aka **external css**
in your `html` page:
```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="mystyle.css">

        <title>woof!</title>
    </head>
    <body>
        <h1>I am a heading</h1>
        <p>I am a paragraph.</p>
    </body>
</html>
```
<br>

and your `css` file:
```css
body {
    background-color: Indigo;
}
h1 {
    color: Lavender;
    text-align: center;       font-size: 36px;
}
p {
    font-family: Verdana, Arial, sans-serif;
    font-size: 18px;
}
```
**Note:** there are no special things you need to put at the top of your `css` file pages!  

So I bet this would work in `markdown`, too... it does!  woo-hoo.   [= 

<br>

This is generally the ***best*** way to do your `css`.  
The other two ways have their applications, but most of the time this is the best way to go.  

When you want to update styling, it is a lot easier & quicker!  

<br>

---
---
## the **cascading** part  


<br>

---
---
## how to style stuff  
### by **html** tag  
```css
body {
    background: DarkSlateBlue;	color: GhostWhite;
    font-family: Inconsolata, "Courier New", serif;		
    font-size: 18px;
}

h2 {
    text-decoration: underline;
    font-family: Quicksand, Verdana, sans-serif;
}

div {
    font-family: Quicksand, Verdana, sans-serif;
}

p {
    color: MediumSpringGreen;
}
```
Easy & straight-forward... 

<br>

---
### by **class**  
```css
.first{
    color: Plum;
}
```
Note the dot in front -- that indicates you're styling a `class`!

<br>

---
### by **id**  
```css
#mmm {
    font-weight: bold;	
    color: GreenYellow;
}
```
Note the `#` in front -- that indicates you're styling an `id`!

<br>

---
---
## 'stacking' **selectors**  -- aka **css** combinators
### **tag** + **class**  
```css
div.first {
    margin-top: 45px;	
    color: LemonChiffon;
}
```
You don't really need `tag` plus `id` -- since an `id` is only for single use on a given page in the first place.  But, I tried it, and it works... it's just unecessary.   [=    

<br>

---
### **tag** + another **tag**
In some way or other -- another way "cascade" is apt in the name!
```css
div p {
	background: IndianRed;
}

footer > p {
	color: Crimson;			font-size: 14px;
    font-family: Quicksand, Verdana, sans-serif;	
}
```
the first one will style every \<p> that's inside a \<div>

the second one will style every \<p>  that's a "child" of a \<div>

difference between `descendant` and `child`:  

<br>

Check out <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">this</a> quick reference sheet out for different ordering of selectors -- descendant, children, siblings; plus tag+attribute.

<br>

---
---
### **pseudo** classes & elements  
Pseudo **classes** are indicated with a `:` separator:
```css
a:link {
    color: OrangeRed;   font-weight: bold;
}

a:visited {
    color: Orange;    font-weight: bold;
}

a:hover {
    color: Lime;    font-weight: bold;
}

a:active {
    color: Crimson;   font-weight: bold;
}
```
An common example of pseudo classes, is like how you select/style the various states of linkage...  

<br>

You can also do pseudo classes with regular classes:
```css
.highlight {
    color: LightSalmon;
}

.highlight:hover {
    background-color: Maroon;	
}
```
You don't have to have the class itself styled separately, first, though.  

<br>

---
Pseudo **elements** are designated with a `::` separator:
```css
p::selection {
    color: FireBrick;
    background: GhostWhite;
}

::-moz-selection { /* Code for Firefox */
    color: FireBrick;
    background: GhostWhite;
}
```
Some things need special code for different browsers -- Firefox, IE, etc.  Usually Chrome needs nothing special.   [=  

<br>

---

<a href="https://www.w3schools.com/css/css_pseudo_classes.asp" target="_blank">More about Pseudo Classes in `css`</a>  

<a href="https://www.w3schools.com/css/css_pseudo_elements.asp" target="_blank">More about Pseudo Elements in `css`</a>

<br>

---
---
## let's put all that together:
I'll demo this with `internal css`...  
in a repl so I can get a screenshot of the result!  
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            body {
                background: DarkSlateBlue;	
                color: GhostWhite;
                font-family: Inconsolata, "Courier New", serif;
                font-size: 18px;
            }
            h2 {
                text-decoration: underline;
                font-family: Quicksand, Verdana, sans-serif;
            }
            div {
	              font-family: Quicksand, Verdana, sans-serif;
            }
            p {
	              color: MediumSpringGreen;
            }
            header, footer {
	              color: Crimson;
            }
            div p {
	              background: IndianRed;
            }
            footer > p {
                color: PeachPuff;
                font-size: 14px;
                font-family: Quicksand, Verdana, sans-serif;	
            }
            .first{
	              color: Plum;
            }
            div.first {
                margin-top: 45px;	
                color: LemonChiffon;
            }
            #mmm {
                font-weight: bold;	
                color: GreenYellow;
            }
            p::selection {
                color: FireBrick;	
                background: GhostWhite;
            }
            ::-moz-selection { /* Code for Firefox */
                color: FireBrick;
                background: GhostWhite;
            }
            a:link {
                color: OrangeRed;		
                font-weight: bold;
            }
            a:visited {
                color: Orange;			
                font-weight: bold;
            }
            a:hover {
                color: LightSkyBlue;	
                font-weight: bold;
            }
            a:active {
                color: Crimson;
                font-weight: bold;
            }
            .highlight {
                color: LightSalmon;
            }
            .highlight:hover {
                background-color: Maroon;	
            }
        </style>
    </head>
    <body>
        <header>
            <h2>let's have fun with css!</h2>
        </header>

        <p>I am in &lt;p&gt; tags... try highlighting me!</p>
        <p>I am using special highlighting.</p>

        <div class="first">I am in &lt;div&gt; tags... try highlighting me, too!             
        </div>
        <div> I am using the default highlighting.</div>

        <div class="first">We are &lt;divs&gt; &amp; a &lt;span&gt; who  
          will show you how to css up an ID!</div>
        <div>Fudgy brownies are best, and <span id="mmm">the middle part</span>  
        is better than edges.</div>

        <div class="first">this is a &lt;div&gt;, <p>this is a &lt;p&gt; inside  
          that &lt;div&gt;...<span id="mmm">this is a span in that &lt;p&gt;...  
          </span>this is the other end of the &lt;p&gt;</p>and this is  
          the rest of that original &lt;div&gt;!</div>

        <div class="first"><a href="https://Stormy9.github.io/" target="_blank">  
        a link to my front page!</a></div>
        <p>note you can't apply the class '.first' to &lt;a&gt; tags --  
           well, you can, but you will only get the font color for '.first', not it's top margin!</p>
        <p>to get the top margin, you'd have to put the whole &lt;a&gt; tag  
          content inside a &lt;div&gt; tag, to which you can apply the '.first' class.</p>

        <p><span class="highlight">hover over me and I will highlight!</span></p>

        <footer>now you know your css!  well, at least some of it.   [=<br>
        i have no idea why you'd ever want to style your &lt;header&gt; &amp;  
        &lt;footer&gt; the same -- in real life you never would.   [=
        <p>often i style my &lt;a:hover&gt; &amp &lt;a:active&gt; the same,  
          for instance</p></footer>
    </body>
</html>
```
and this is what that puts out:  
<a href="https://Stormy9.github.io/CS460/references/css/images/ScreenShot_01.PNG"><img src="https://Stormy9.github.io/CS460/references/css/images/ScreenShot_01.PNG"></a>  

Oh, okay..... I realize some of that is interactive -- the links & highlighting & hovering and all that...  

So I threw together a "quickie demo page" <a href="https://Stormy9.github.io/CS460/references/css/demo.html">here</a>!  

Cool, huh?   [=  

<br>

Notice the escaped version of `<>` and `&` in the `html`.  

And notice how `div.first` overrides just plain `.first` -- since `.first` is never used elsewhere than a `div`.  

<br>

---
---
### css **box model**  
<a href="https://Stormy9.github.io/CS460/references/css/images/css_box_model.PNG"><img src="https://Stormy9.github.io/CS460/references/css/images/css_box_model.PNG"></a>  
(from <a href="https://www.topalovich.com/2017/09/css-primer-for-lightning-developers-css-box-model-with-padding-margin-and-border-properties/" target="_blank">this cool page</a>... it had the prettiest colors)  

Let's make one!  
*(with **internal css**)*  
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            body {
                font-family: Helvetica, Arial, sans-serif;
                font-size: 18px;
                background-color: PaleVioletRed;
                color: White;
            }
            .box {
                width: 300px;
                background-color: LemonChiffon;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 18px;
                color: DarkSlateBlue;
                padding: 45px;
                border: 12px solid MediumPurple;
                margin: 45px;
            }
        </style>
    </head>

    <body>
        <p>The `css` box model is a box that wraps around every single HTML  
          element in your page.</p>

        <p>It consists of -- from inside to outside: <br> content (your stuff)...  
        padding... border... and margin.</p>

        <div class="box">
            <p>Hi! I am the content of the box!  I am in &lt;p&gt; tags  
              inside this &lt;div&gt;.</p>
    
            <p>Around me is 36px of padding -- that's the "LemonChiffon" part  
              all around me... then I have a 12px thick border in "MediumPurple"...  
              and then 45px margin to separate me from elements all around me.</p>

            <p>Remember you can style margins one at a time... or top/bottom  
              and/or left/right... or all in one swoop like this!</p>

            <p>My width is set to 300px, but my height is automatic -- determined  
              by my content, padding, and border (but not margin -- think about it!)</p>
        </div>

        <p>here is another paragraph after our box, to show the bottom margin  
          working.</p>
    </body>
</html>
```
here's what that looks like:  
<a href="https://Stormy9.github.io/CS460/references/css/images/ScreenShot_02.PNG"><img src="https://Stormy9.github.io/CS460/references/css/images/ScreenShot_02.PNG"></a>  

<br>

---
---
## ordering in **css**  
For most things, in most places, in `css`, the order of stuff does not matter.  

You can style `tags`, then `classes`, then some more `tags`, then an `id`, then some `pseudo classes` or whatever..... and within each `selector`, it doesn't matter what order the `declarations` are in.

*However*..... one of the ways in which `css` is picky, is that for **some** things, you must follow a specific order... a biggie is linkage styling:  
```css
a:link {
    color: OrangeRed;		
    font-weight: bold;
}
a:visited {
    color: Orange;			
    font-weight: bold;
}
a:hover {
    color: LightSkyBlue;	
    font-weight: bold;
}
a:active {
    color: Crimson;
    font-weight: bold;
}
```
`<a>` tags **must** be styled in **that** order.  

Plus, if you want to use/style `a:hover`, then you **have** to do **both** `a:link` **and** `a:visited`... can't leave `a:visited` out.  

And to use `a:active` you have to have the others first. 

<br>

---
---
## warning!  
As noted, `css` can be really damned tricky, picky, and at times annoying!  
But most often, it's really cool and a lot of fun.  
even when it's being annoying, it's still fun to figure out.  Like a puzzle.    

Well, kinda... sometimes it makes you what's known officially, as "bat-crap crazy".  But it's generally a good crazy -- because you learn from it.   [=  

Sometimes, stuff that **should** work -- or seems like it should work -- doesn't...  
and it can seem inconsistent in how it works -- how things render (or if they do at all!)

**HOWEVER**:  
Be aware that you cannot style all `html tags` with all things -- not by selecting the tag directly, nor through `class` or `id` applied to that `tag`.  

For instance, you can't apply `margin-top` to the `<a> tag`.  However, you **can** put that `<a> tag` inside of a `div` and then style **that** if you really want to.  

Neither can you add effects like bolding to highlighting -- only color, background, cursor, and outline.   [=  

**ALSO**:
Remember the **cascade**, and consider what effect that might be having on things.

And there's always Google & StackOverflow.   [=  

<br>

also, see my comments in <a href="https://stormy9.github.io/Stormy9.github.io/CS460/references/styling/mystyles_b.css">references/styling/mystyles_b.css</a>.  

I spent wa-a-ay too much time on that.  
And shouldn't have had to!  
And it still doesn't render correctly -- or consistently.  
So, screw it.   [=  

<br>

---
---
## my favorite css sites  
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">Mozilla</a>  
  * as featured on Dr. Morse's site   [=

* <a href="https://www.w3schools.com/css/css_intro.asp" target="_blank">W3Schools</a>  

  * <a href="https://www.w3schools.com/cssref/default.asp" target="_blank">W3Schools -- Reference: Properties</a>  

  * <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">W3Schools -- Reference: Selectors</a>

* <a href="https://css-tricks.com/" target="_blank">CSSTricks</a>  

**Important!**
Use a repl and just practice and have fun with it, and see what happens (or not!) when you do stuff!  That is key with `css` at least for me -- I have to see what it's doing to fully get it.   [=  

<br>

---
---
---
[back to CS460 page](https://Stormy9.github.io/CS460/ "CS460 main page")   

[back to main page](https://Stormy9.github.io/ "main page")   
