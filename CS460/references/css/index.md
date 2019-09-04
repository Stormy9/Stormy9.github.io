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
`css` makes it so that you can take one single `html` file, and style it infinitely different ways!  

`css` -- at least external `css` style sheet files -- makes it so that when/if you want to change some aspect of styling on your `html` pages -- instead of having to edit every damned `html` page file, like in the old days -- you only have to edit one (or maybe a couple) `css` style sheet files!  

And if you want something special on just one or a handful of `html` page files, you can add internal/embedded `css` using `<style>` tags in the `<head>` section of your `html` page file.  

If you want to add some `css` styling on the fly -- or just to see how something looks really quick -- you can add inline `css` right in a given `html` tag.

<br>

---
**basic syntax**
Is like this:  
<img src="https://Stormy9.github.io/CS460/references/css/images/css_syntax.PNG">  
*(borrowed from <a href="https://www.w3schools.com/css/css_syntax.asp" target="_blank">W3Schools</a> -- they have the best one!)*  

Declarations are commonly referred to as "rules".  
*It's a lot easier to say.   [=*  

<br>

---
---
## where you can put it  
### **inline css** -- right in any **html** tag:
```html
<p style="color: tomato;">I am a cool paragraph -- 
even though my font color is tomato rather than cucumber!</p>
```
you can do this in `markdown` pages, too... for instance, that up there gives you:  
<p style="color: tomato;">I am a cool paragraph -- even though my font color is tomato rather than cucumber!</p>

<br>

---
### in your **\<head>** -- aka **internal or embedded css**: 
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
### in **it's own sheet**!  aka **external css**:
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
**Note:** there are no special things you need to put at the top of your `css` file pages (like there is with `html`)!  

So I bet this would work in `markdown`, too... it does!  woo-hoo.   [= 

<br>

This is generally the ***best*** way to do your `css`.  
The other two ways have their applications, but most of the time this is the best way to go.  

When you want to update styling, it is a lot easier & quicker!  

<br>

---
---
## the **cascading** part of **css**   
When linking to external style sheets, each one linked takes precedence over the one before.  

So, for instance, if you're using Bootstrap's `css` style sheets, but want to also use some of your own `css ` styles, you would put Bootstrap's link first, then yours.  

<br>

**Inline** `css` overrides **internal/embedded** `css` overrides **external** `css` -- so long as the **internal/embedded** `<style>` section is placed after the link to the **external** `css`.  

Like:
```html
<head>
    <link rel="stylesheet" type="text/css" href="mystyles.css">

    <style>
        h1 {
            color: orange;
        }
    </style>
</head>
``` 

<br>

Within an external `css` style sheet -- or internal `css` style section:  `id`s override `class`es which override `tag`s.  

Note the order things are typed on the page isn't what matters -- it's the level of specificity!  

**css** cascades down from the most general rules to increasingly specific rules... the most-specific declaration (or rule) wins!

<br>

Also remember that "child" elements will inherit from their "parent" element -- unless you set the same property separately for the "child" element.  

Look at this:  
```html
<!DOCTYPE html>
<html>
    <head>
    
        <link rel="stylesheet" type="text/css" href="mystyles.css">
        
        <style>
            body {
                background-color: papayawhip;
                font-family: arial, sans-serif;
                font-size: 18px;
                color: mediumslateblue;
            }
            h1 {
                color: teal;
            }
            .crimson {
                color: crimson;
            }
            #orange {
                color: darkorange;
            }
        </style>
        
    </head>
    
    <body>

        <h1> Here is our heading </h1>

        <p> Here is a paragraph. </p>
        
        <p> See how the heading's css overrides the body's css in
          color (but not font)?  
          <br> But these paragraphs reflect the body's css for color?
        </p>
            
        <p class="crimson"> And this paragraph -- because of it's class -- overrides 
          the body style's color.
        </p>
        
        <p class="crimson"> And this <span id="orange">span in this paragraph</span>
          overrides the paragraph's class, because of it's id!
        </p>

        <p> And the internal/embedded css overrides the linked
          external css style sheet!
          <br>Notice this paragraph is back to the body's css color.
        </p>

    </body>
</html>
```
This gives you:  
<a href="https://Stormy9.github.io/CS460/references/css/images/ScreenShot_06.PNG"><img src="https://Stormy9.github.io/CS460/references/css/images/ScreenShot_06.PNG"></a>

<br>

**More about the Cascade:**  
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade" target="_blank">Mozilla Developer Network/CSS: Intro to the Cascade</a>  

  * <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance" target="_blank">Mozilla Developer Network/CSS: Cascade & Inheritance</a>  

* <a href="https://css-tricks.com/the-c-in-css-the-cascade/" target="_blank">CSS Tricks:  The "**C**" in **CSS**: The Cascade</a>  

* <a href="https://www.htmlgoodies.com/beyond/css/css-specificity-and-the-cascade.html" target="_blank">HTML Goodies: CSS Specificity & the Cascade</a>

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
In `css`, styling for `class` can be applied to any number of `html` elements, by putting `class="my_class"` in an `html` tag.  
```css
.first{
    color: Plum;
}
```
Note the dot in front -- that indicates you're styling a `class`!

<br>

---
### by **id**  
In `css`, styling for `id` targets one, single, unique element; by putting `id="my_id"` in an `html` tag.  
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
## 'stacking' **selectors**  -- aka **css combinators**
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
the first one will style every `<p>` that's inside a `<div>`

the second one will style every `<p>`  that's a "child" of a `<div>`

difference between `descendant` and `child`:  

<br>

* Check out <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">this</a> quick reference sheet out for different ordering of selectors -- descendant, children, siblings; plus tag+attribute.

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
A common example of `pseudo classes`, is like how you select/style the various states of linkage, to override the default colors & effects.  

You can also use `css` and these `pseudo-classes` to style your links into buttons!  Or bars.  Or whatever you like!  (you need to add `{display: inline-block}` to your declarations to make buttons or bars.)

<br>

You can also add `pseudo-classes` to regular classes:
```css
.highlight {
    color: LightSalmon;
}

.highlight:hover {
    background-color: Maroon;	
}
```
You don't have to have the class itself styled separately, first, though, like I do up there.  

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
* <a href="https://www.w3schools.com/css/css_selectors.asp" target="_blank">More about Selectors, Classes, and IDs in `css`</a>
* <a href="https://www.w3schools.com/css/css_pseudo_classes.asp" target="_blank">More about Pseudo Classes in `css`</a>  
* <a href="https://www.w3schools.com/css/css_pseudo_elements.asp" target="_blank">More about Pseudo Elements in `css`</a>

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
            footer {
            	border-top: 3px solid crimson;
            }
            h3 {
            	font-family: Inconsolata, "Courier New", serif;
                font-size: 21px;
                font-weight: bold;
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
                margin-top: 18px;	
                color: LemonChiffon;
            }
            #mmm {
                font-weight: bold;	
                color: GreenYellow;
            }
            code {
            	color: silver;
                font-weight: bold;
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

        <p>I am in <code>&lt;p&gt;</code> tags... try highlighting me!</p>
        <p>I am using special highlighting.</p>
        
		<hr>
        
        <div class="first">I am in <code>&lt;div&gt;</code> tags... 
        try highlighting me, too!             
        </div>
        <div> I am using the default highlighting.</div>
        <div> Also note <code>&lt;div&gt;</code>'s don't leave vertical spacing as 
        <code>&lt;p&gt;</code>'s do!</div>

        <div class="first">We are <code>&lt;divs&gt;</code> &amp; 
        a <code>&lt;span&gt;</code> who will show you how to css up an ID!</div>
        <div>Fudgy brownies are best, and <span id="mmm">the middle part</span>  
        is better than edges.</div>

        <div class="first">this is a <code>&lt;div&gt;</code>, 
        <p>this is a <code>&lt;p&gt;</code> inside that <code>&lt;div&gt;</code>
        ...<span id="mmm">this is a span in that <code>&lt;p&gt;</code>...  
          </span>this is the other end of the <code>&lt;p&gt;</code></p>and this is  
          the rest of that original <code>&lt;div&gt;</code>!</div>
          
		<hr>
        
        <div class="first"><a href="https://Stormy9.github.io/" target="_blank">  
        a link to my front page!</a></div>
        
        <p>note you can't apply the class <code>.first</code> to <code>&lt;a&gt;
        </code> tags -- well, you can, but you will only get the font color for
        <code>.first</code>, not it's top margin!</p>
        <p>To get the top margin, too, you'd have to add: 
        <br><code>{display: inline-block;}</code> to your css!</p>

        <p>I'm another <code>&lt;span&gt;</code> in a <code>&lt;p&gt;</code>: 
        <span class="highlight">Hover over me and I will highlight!</span></p>

        <footer>
        	<h3>I am a footer!</h3>
        	now you know your css!  well, some of it, anyway.   [=
            <br>i have no idea why you'd ever want to style your 
            <code>&lt;header&gt;</code> &amp; <code>&lt;footer&gt;</code>
            the same -- in real life you never would.  Except maybe for color
            like I did here.   [=
        
        	<p>often i style my <code>&lt;a:hover&gt;</code> &amp;
            <code>&lt;a:active&gt;</code> the same, though.</p>
        </footer>
    </body>
</html>
```
and this is what that puts out:  
<a href="https://Stormy9.github.io/CS460/references/css/images/ScreenShot_01.PNG"><img src="https://Stormy9.github.io/CS460/references/css/images/ScreenShot_01.PNG"></a>  

Oh, okay..... I realize some of that is interactive -- the links & highlighting & hovering and all that...  

* <a href="https://Stormy9.github.io/CS460/references/css/demo.html">So I threw together a quickie demo page here</a>!  

Cool, huh?   [=  

<br>

Notice the escaped version of `<>` and `&` in the `html`.  

And notice how `div.first` overrides just plain `.first` -- although `.first` is never used elsewhere than a `div` anyway.  

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
**Here's what that looks like:**  
<a href="https://Stormy9.github.io/CS460/references/css/images/ScreenShot_02.PNG"><img src="https://Stormy9.github.io/CS460/references/css/images/ScreenShot_02.PNG"></a>  

<br>

---
---
## borders in **css**  
**Note:**  
* Borders will be the color of the text inside unless you tell it otherwise.  

* Unless you do the `border-style` property, no other border properties will take effect!  Nothing will happen.   

<br>

**You can style the various aspects of borders individually:**  
```html
<style>
    .mydiv {
        border-width: 3px;
        border-style: solid;
        border-color: crimson;
        border-radius: 45px;
        
        padding: 5px;
        width: 450px;
        background-color: lemonchiffon;
        text-align: center;
        font-family: verdana, sans-serif;
        color: indigo;
    }
</style>

<div class="mydiv">this is my own personal div!</div>
```
**Gives you:**  
<a href="https://Stormy9.github.io/CS460/references/css/images/ScreenShot_03.PNG"><img src="https://stormy9.github.io/CS460/references/css/images/ScreenShot_03.PNG"></a>

Isn't that cool?

<br>

---
**Or in shorthand:**  
```html
<style>
    .mydiv {
        border: 3px solid crimson;
        border-radius: 45px;
        
        padding: 5px;
        width: 450px;
        background-color: lemonchiffon;
        text-align: center;
        font-family: verdana, sans-serif;
        color: indigo;
    }
</style>

<div class="mydiv">this is my own personal div!</div>
```
Gives you the exact same result.  
Notice the order is: **`width` then `style` then `color`**.  
*(since `border-style` is required, it should be first!  but it's not.   [= )*

<br>

---
**Address just one side:**
```html
<style>
	body {
    	background-color: saddlebrown;
    }
	div.left {
    	border-left: 5px solid crimson;
        padding: 9px;
  		background-color: lemonchiffon;
        font-family: verdana, sans-serif;
        color: indigo;
        margin: 18px;
	}
    div.bottom {
    	border-bottom: 5px solid crimson;
        padding: 9px;
  		background-color: lemonchiffon;
        font-family: verdana, sans-serif;
        color: indigo;
        margin: 18px;
	}
    code {
    	font-size: 18px;
        font-weight: bold;
        color: dimgrey;
    }
</style>

<body>
    <div class="left">The <code>border-left:</code> property is shorthand giving 
    <code>width style color</code>.  The rest of the css is just to make things look nice.   [= </div>

    <div class="bottom">The <code>border-bottom:</code> property uses that same shorthand.  
    <br>I gave the <code>&lt;div&gt;</code>s a <code>margin</code> so it's easier to see what's going on.   [= </div>
</body>
```
**Gives you:**  
<a href="https://Stormy9.github.io/CS460/references/css/images/ScreenShot_04.PNG"><img src="https://stormy9.github.io/CS460/references/css/images/ScreenShot_04.PNG"></a>

<br>

* <a href="https://www.w3schools.com/css/css_border.asp" target="_blank">More about borders in `css` here</a>

<br>

---
---
## ordering in **css**  
For most things, in most places, in `css`, the order of stuff does not matter.  

You can style `tags`, then `classes`, then some more `tags`, then an `id`, then some `pseudo classes` or whatever..... and within each `selector`, it doesn't matter what order the `declarations` are in.

*However*..... one of the ways in which `css` is picky, is that for **a few** things, you must follow a specific order... a biggie being linkage styling & the pseudo-classes:  
```css
a {
    text-decoration: none;
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
a:focus {
    color: LightSkyBlue;
    outline: DarkBlue;
}
a:active {
    color: Crimson;
    font-weight: bold;
}
```
`<a>` tags **must** be styled in **that** order.  

Plus, if you want to use/style `a:hover`, then you have to do **both** `a:link` **and** `a:visited`... can't leave `a:visited` out -- from my experimenting -- and if you put `a:visited` **after** `a.hover`, then the `hover` effect won't work on `visited` links.  

And to use `a:active` you have to have the others first. 

* <a href="https://www.codecademy.com/forum_questions/53da988252f86308fd0000a4" target="_blank">This page explains it very well</a>.  
It also explains the "just plain `<a>` styling, and `a:focus` -- the first I hadn't thought of, the second I didn't know about!  

<br>

---
### other kinds of **css** ordering  
when styling things like `margin`, `padding`, or `border`, there is a shorthand for addressing the various sides of the element you're styling.

**Use four values:**
* top  
* right  
* bottom  
* left  

So like clockwise, starting at "12".   [=  

<br>

**Or just use three values:**  
* top
* right/left (you want them the same/equal)
* bottom  

<br>

**Or just use two values:**
* top/bottom (you want them the same)
* right/left (and these equal)  

<br>

**So like:**
```css
/* all four sides at once */
div {
    margin: 3px;
}
/*============================================*/
/* top, right/left, bottom */
div {
    padding: 5px 9px 15px;
}
/* note just a space between each value */
/*============================================*/
/* top/bottom, right/left */
div {
    border-style: dotted solid;
}
/* the top/bottom borders will be dotted */
/* the right/left borders will be solid */
```

<br>

---
---
## warning!  
As noted, `css` can be really damned tricky, picky, and at times annoying!  
But most often, it's really cool and a lot of fun.  
Even when it's being annoying, it's still fun to figure out.  Like a puzzle.    A **lot** of fun to fiddle around with.  

Well, kinda... sometimes it makes you what's known officially, as "bat-crap crazy".  But it's generally a good crazy -- because you learn from it, and more light bulbs keep coming on.   [=  

<br>

Sometimes, stuff that **should** work -- or seems like it should work -- doesn't...  
and it can *seem* inconsistent in how it works, at times -- how things render (or if they do at all!)

<br>

**HOWEVER**:  
Be aware that you cannot style all `html tags` with all things -- not by selecting the tag directly, nor through `class` or `id` applied to that `tag`.  *(I experimented with this in a repl!)*

For instance:  
The `<a> tag` is an `inline html` element..... therefore, there's some things you can't style with `css` on it -- like `top &/or bottom margins`.  You can style padding -- all the way around -- and borders, too.  And of course give it a `background-color` and `color`.  You can even give it `left &/or right margins`!  But not `top/bottom margins`.  

If you want to add top/bottom margins to your `<a>` tags, you have to add a `css declaration` like this:   
```{display: inline-block;}```  

* <a href="https://www.w3schools.com/html/html_blocks.asp" target="_blank">Listing of `block vs. inline html` elements</a>  
* <a href="https://www.w3schools.com/css/css_inline-block.asp" target="_blank">More about `{display: inline-block;}` in `css`</a>  
* <a href="https://www.w3schools.com/cssref/pr_class_display.asp" target="_blank">And more about `display` in `css` in general</a>  

And, of course:  
* <a href="https://Stormy9.github.io/CS460/references/html/">My own `html` reference/note page where I play with `block/inline` & `inline-block`</a>!

Neither can you add effects like bolding to the pseudo-element `::selection` aka user highlighting -- only color, background, cursor, and outline.   [=  

**ALSO**:  
Remember the **cascade**, and consider what effect that might be having on things!

<br>

Here's some fiddling with `block vs. inline` + `inline-block` + semantic `html` stuff, plus `css` ordering!
```html
<!DOCTYPE html>
<html>
    <head>

        <style>
            main {
                font-family: helvetica, arial, sans-serif;
                background-color: palevioletred;
                padding-left: 15px;
                padding-right: 15px;
                padding-bottom: 15px;
            }
            span {
                border: 3px dotted; 
                padding: 9px; 
                margin: 18px;
                background-color: indigo;
                color: crimson;
                font-family: tahoma, sans-serif;
                font-size: 18px;
            }
            a {
                display: inline-block;
                text-decoration: none;
                padding: 9px;
                border: 3px solid midnightblue;
                border-radius: 9px;
                font-family: verdana, sans-serif;
                font-size: 21px;
                background-color: cornflowerblue;
                color: midnightblue;
                margin: 9px 5px;
            }
            .span_test {
                margin-top: 36px;
            }
            .button_demo {
                margin-top: 18px;
                border-top: 1px solid;
                padding-top: 9px;
            }
            .second_button:link, .second_button:visited {
                border-color: mediumpurple;
                background-color: rosybrown;
                color: rebeccapurple;
            }
            .second_button:hover {
                background-color: plum;
            }
            footer {
                border-top: 3px solid maroon;
                padding: 15px;
                background-color: lemonchiffon;
                font-family: helvetica, arial, sans-serif;
                font-size: 14px;
                text-align: right;
            }
        </style>
    </head>

    <body>
        <main>
            <p>The stuff in the purple box, is a span 
              <span class="span_test">Hello World!</span> element within a paragraph.</p>

            <p> <strong>&lt;span&gt;</strong> elements are inline... that means they 
            won't start on a new line, and they only take up as much width as necessary -- or as you style them to. </p>

            <p>See how you <strong>can't</strong> set top/bottom margins on them, but you 
            <strong>can</strong> set left/right ones? 

            <br>And see how the top padding makes it stick up over the colored-in <strong>&lt;main&gt;</strong> section?
            
            <br>And see how you can put a border around the <strong>&lt;span&gt;</strong>? </p>

            <p class="button_demo">See how <strong>&lt;p&gt;</strong> tags can be styled with 
            a top margin, padding, &amp; border via a class?  
            But the margin wouldn't work -- even through a class -- if <strong>&lt;p&gt;</strong> tags were not block elements!</p>

            <p>Let's put a link in this paragraph: <a href="https://Stormy9.github.io/" target="_blank">I'm a link styled like a button!</a> 
            isn't that cool?  It has <strong>{display: inline-block;}</strong> styling.  
            Because of that, I was able to style it with top/bottom margins!  Along with all the other stuff.</p>

            <p>Notice this faux-button was made simply by styling the <strong>&lt;a&gt;</strong> tag... 
            when you click it, it doesn't change in any way, at any stage.</p>

            <p>If I want it to have hover effects, then I *have* to style <strong>&lt;a:link&gt;</strong> and 
            <strong>&lt;a:visited&gt;</strong>... and *then* <strong>&lt;a:hover&gt;</strong>.  </p>

            <p>Let's do that with a new faux button:</p>
            <p>Here's another link: <a class="second_button" href="https://stormy9.github.io/" target="_blank">hover me!</a> try it!
            </p>

            <p>Notice how the styling for the <strong>&lt;a&gt;</strong> tag is still in effect:  
            inline-block, margins &amp; padding, font family &amp; size, 
            lack of an underline, and border-style, border-width, &amp; border-radius!
            </p>

            <p>All I had to style for this 2nd faux button is background-color, color, and border-color.</p>

        </main>

        <footer>I am a footer!  
            <br>I am a block element. 
            <br>In order for there to be no plain white gap between 
            <br><strong>&lt;main&gt;</strong> and <strong>&lt;footer&gt;</strong>,
            since both are block elements, 
            <br><strong>&lt;main&gt;</strong> has been styled   with bottom padding! 
            <br>As a footer, you can style my top/bottom margins, but normally you wouldn't do that. 
            <br>(you would make me look silly!)
        </footer>
    </body>
</html>
```
**This gives you:**  
<a href="https://Stormy9.github.io/CS460/references/css/images/ScreenShot_05.PNG"><img src="https://stormy9.github.io/CS460/references/css/images/ScreenShot_05.PNG"></a>  

* <a href="https://Stormy9.github.io/CS460/references/css/demo_b.html">Here's the demo page I made of that</a>.

---
---
## my favorite css sites  
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">Mozilla</a>  
  * as featured on Dr. Morse's site   [=

* <a href="https://www.w3schools.com/css/css_intro.asp" target="_blank">W3Schools</a>  
  * <a href="https://www.w3schools.com/css/css_examples.asp" target="_blank">W3Schools - css Examples!</a>  
  for everything -- and editable!

  * <a href="https://www.w3schools.com/cssref/default.asp" target="_blank">W3Schools -- Reference: css properties</a>  

  * <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">W3Schools -- Reference: css selectors</a>

* <a href="https://css-tricks.com/" target="_blank">CSSTricks</a>  


* <a href="http://htmlandcssbook.com/" target="_blank">HTML & CSS -- the book by John Duckett</a>
    * i have this in print and a pdf version -- i like having both!   [=  

    * and here's <a href="http://www.htmlandcssbook.com/code-samples/" target="_blank">the code samples that go with the book</a>

<br>

**Important!**  
Use a repl and just practice and have fun with it, and see what happens (or not!) when you do stuff!  That is key with `css` at least for me -- I have to see what it's doing to fully get it.   [=  

And there's always Google & StackOverflow.   [=  

<br>

---
---
---
[back to CS460 page](https://Stormy9.github.io/CS460/ "CS460 main page")   

[back to main page](https://Stormy9.github.io/ "main page")   
