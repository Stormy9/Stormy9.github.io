<link rel="stylesheet" type="text/css" href="https:/Stormy9.github.io/CS460/references/styling/mystyles_a.css">
<link rel="stylesheet" type="text/css" href="https:/Stormy9.github.io/CS460/references/styling/mystyles_b.css">

<script src="https:/Stormy9.github.io/CS460/references/scripting/ref_nav.js"></script>

---
# html5 notes  
## difference(s) between **html** and **html5**  

* `html5` is semantic -- tag names have some meaning, like `<header>` & `<footer>`, `<main>` & `<aside>`, `<nav>`, `<article>`, `<section>`, `<figure>`, `<picture>`, `<output>`, `<mark>`, and some others.  

    * You can still use a plain ol' `<div>` if you need to, giving it a `class` or `id`.  But the semantic tags give better structure & definition to your pages, so use those when/where you can, and `<div>` when you need to.  

* Several new, cool attributes to go with certain tags  
    * plus support for custom attributes!  

* Including video/audio media in your pages is a lot more straight-forward, with the new `<audio>` & `<video>` tags -- no more flash players or anything!  
    * easily set attributes to put user contols on the players!  

* Several new & improved form features -- including `regular expressions` & input validation   
    * many of the new (cool!) attributes are for handling forms!  
    * even though we did `html5` at Chemeketa... we learned to do input validation for forms with JavaScript.  Which continues to have it's use -- and can augment what `html5` does... but `html5` makes it more straight-forward.

* A much more concise `<!DOCTYPE html>` declaration up-top!  

* You don't even have to close out tags -- aka use closing tags -- anymore... although it's still generally considered good practice.  

* Plus some other stuff.....  
    * Unsurprisingly, IE still has some blurps with `html5` -- <a href="https://www.w3schools.com/html/html5_browsers.asp" target="_blank">use the `html5 shiv`</a>    

<br>

Check out <a href="https://www.w3schools.com/html/html5_intro.asp" target="_blank">this W3Schools page</a> (and it's sub-sections),  
and <a href="https://code.tutsplus.com/tutorials/28-html5-features-tips-and-techniques-you-must-know--net-13520" target="_blank">this cool article</a> from Envato Web Design Tutorials,  
and <a href="https://www.codecademy.com/articles/html5-features" target="_blank">this post from Codecademy</a>.  

Most of it is super-easy, so long as you get the whole `tags` & `attributes` thing..... just do a quick reference-check if you need to be sure of how to use something!  

<br>

---
---
## basic template for an **html5** page  
### with explanations in the comments  
```html
<!doctype html>     <!-- THIS MUST BE AT VERY TOP! -->
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
__note:__ `<head>` and `<header>` are **NOT** the same thing!  

<br>

---
---
## html5 **block vs. inline** elements  
The big difference:  
* `block` elements always start on their own new line, and take up the full available width -- unless you set a width with `css`   
    * some `block` elements -- notably `<p>` -- include automatic vertical spacing above/below them (aka, a `margin-top` & a `margin-bottom`) 
        * `div` does not though!  Unless you style it to, with `margin-top`/`margin-bottom` & `padding`.  

* `inline` elements, well, stay "in the line" they're in!  
    * some `css` styling is not available with `inline` elements -- like `margin-top` &/or `margin-bottom`...  
        * unless you style them as `inline-block`!  
            * `inline-block` is cool -- and often used in styling nav bars... unless you use Bootstrap, then it's built in!  

W3Schools: <a href="https://www.w3schools.com/html/html_blocks.asp" target="_blank">block vs. inline elements</a>  
Go & play in the repls!  It's fun.   [=  

For instance, this:  
```html
<!DOCTYPE html>
<html>
    <body style="background-color: lemonchiffon;">

        <div style="margin-top: 18px; width: 360px; margin-left: auto; margin-right: auto; border: 3px solid red; border-radius: 36px; padding: 9px; background-color: pink; color: indigo; font-family: sans-serif; font-weight: bold; text-align: center;">Hello World!
            <p style="margin-top: 0; margin-bottom: 0;">I'm a div with the width set!</p>
            <p style="margin-top: 0; margin-bottom: 0;">and my p's have vertical spacing removed!</p>
        </div>

        <div style="font-family: sans-serif; margin-top: 45px;">this is my first div
        </div>

        <div style="font-family: sans-serif; margin-top: 9px; margin-bottom: 9px; padding: 9px; border: 3px solid indigo;"> this is my second div -- my border shows how I take up the full available page width!
        </div>

        <div style="font-family: sans-serif;"> this is my third div</div>

        <p style="font-family: sans-serif; color: green;"> This is a regular ol' paragraph..... blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
        </p>
        <p style="font-family: sans-serif; color: green;"> And here is another.  See the automatically-included vertical spacing, aka top &amp; bottom margins? Isn't that cool?  This is one reason you'd opt for doing a p-tag instead of a div-tag. 
        </p>
        <p style="font-family: sans-serif; color: green;">One more paragraph just for good meausre   [= 
        </p>
    </body>
</html>
```
gives you this:  
<a href="https://Stormy9.github.io/CS460/references/html/images/ScreenShot_01.PNG" target="_blank"><img src="https://Stormy9.github.io/CS460/references/html/images/ScreenShot_01.PNG"></a>

<br>

and this:  
```html
<!DOCTYPE html>
<html>
    <body style="font-family: sans-serif; background-color: lemonchiffon; color: teal;">

        <p>I am an inline span <span style="border: 1px solid indigo; border-radius: 9px; padding: 3px;">Hello World!</span> element inside a paragraph.</p>

        <p>The span element is one of the inline elements  -- they don't start on a new line, and they only take up as much width as necessary... or as you style them to. </p>

    <br>

    <p> Look at this span: <span style="margin-left: 9px; margin-right: 9px; border: 1px solid indigo; border-radius: 9px; padding: 5px; background-color: mintcream;">I am a span!</span> &lt;&lt;&lt; see how you can style it -- even left/right margins? </p>

    <p> Look at this one: <span style="display: inline-block; margin-top: 18px; margin-bottom: 18px; border: 1px solid indigo; border-radius: 9px; padding: 5px; font-weight: bold; background-color: lightskyblue;">I am a span!</span> This one is set to display inline-block -- so it can have top/bottom margins. </p>

    <p> One more paragraph to show the bottom margin on the above paragraph's span..... </p>

    </body>
</html>
```

gives you this:  
<a href="https://Stormy9.github.io/CS460/references/html/images/ScreenShot_02.PNG" target="_blank"><img src="https://Stormy9.github.io/CS460/references/html/images/ScreenShot_02.PNG"></a>

<br>

---
---
## html5 **links**  
Links are easy enough...  
A basic link:  
```html
<a href="https://Stormy9.github.io/" target="_blank" title="Stormy's Front Page">Stormy's Front Page!</a>
```

Gives you:  
<a href="https://Stormy9.github.io/" target="_blank" title="Stormy's Front Page">Stormy's Front Page!</a>  
Hover over it..... 

<br>

---
**Notes:**
* You really don't need the full path for pages on/within your own site... but obviously you do for outside pages.  

* You can wrap an image in `<a>` tags, to make the whole image a link -- useful when, say, linking to a larger version of said image.  
Or just for the fun of it.  

* You can create a bookmark on your page with the `id` attribute:  
    ```html
    <h2 id="Ch5">Chapter 5</h2>

    <!-- now to link to that -->
    <!-- from somewhere in the same page -->
    <a href="#C4">Jump to Chapter 4</a>

    <!-- from another page on your site -->
    <a href="bookmar_demo.html#C5">Jump to Chapter 5</a>
    ```
* and then of course there's the whole `css` thing to color your textual links all pretty -- see <a href="https://Stormy9.github.io/CS460/references/css">my css page</a> for details!
<br>

Here's <a href="https://www.w3schools.com/html/html_links.asp" target="_blank">W3's reference for `html` linking</a>.

<br>

---
---
## html5 **images**  
Also pretty easy, at it's core:  
```html
<img src="https://Stormy9.github.io/references/html/images/WeinerMobile.jpg" alt="Oscar-Meyer Weinermobile" title="I got to go on the Weiner-Mobile!">
```
gives you:  
<img src="https://Stormy9.github.io/CS460/references/html/images/WeinerMobile.jpg" alt="Oscar-Meyer Weinermobile" title="I got to go on the Weiner-Mobile!">  
hover your mouse over that!

The `<alt>` attribute on `<img>` tags is required, mind you, for a "real" website/page -- they won't validate without the `<alt>` attribute!  
* whatever is in the `<alt>` attribute is what will show up for users with screen readers, or if for some reason the image can't load.  

The `<title>` attribue makes it so when you hover the image, a little caption pops up.  

<br>

---
**Images have lots of slick options.** 

* You can set the image's height & width with attriubutes in the `<img>` tag... but best practice is to use `css` to set these specs.  
    * Always set the height & width on your images, for smoother page loading.  
        * Using `css` keeps browser stylesheets from changing these attributes.

* Of course, as mentioned in the "links" section, you can make your image a `link` -- or, make it a multi-linked `image map`!  
    * see this:  <a href="https://www.w3schools.com/html/html_images.asp" target="_blank">W3Schools -- doing an image map</a> -- scroll to "Image Maps"  
        * fiddle with the repl -- have fun!  

* You can make an image the background for an element, or a whole page  
    * This takes `css`... it's the `background-image:url('my_image.jpg');` declaration  

* Floating images is awesome -- we practiced this a lot at Chemeketa, where we never learned Bootstrap so we had to do stuff for own damned selves   [=  
    * Go here: <a href="https://www.w3schools.com/html/html_images.asp" target="_blank">W3Schools -- floating images</a> -- scroll to "Image Floating"  
        * Go here, too:  <a href="https://www.w3schools.com/css/css_float.asp" target="_blank">W3Schools -- css floats</a>
        * You **have** to play with the repls on these!  
    * Even with Bootstrap making lots of things easier... it will still greatly behoove one to understand how floating elements works.   [=  

* The new `html5` element `<picture>` allows for flexibility of what image is displayed based on the browser viewport size, with a fall-back image.  
    * Check out the example at <a href="https://www.w3schools.com/html/html_images.asp" target="_blank">W3Schools -- picture element</a> scroll to "HTML `<picture>` Element. 

<br>

---
Here's an example of floating images, along with setting height/width and some other stuff:  
```html
<!DOCTYPE html>
<html>
    <body style="font-family: sans-serif; background-color: #ccb3e6;">

        <h3 style="display: inline-block; margin-top: 0; margin-bottom: 0">Float an image to the right:</h3>
        <p style="margin-top: 3px;">Demo'ing a float-right image. Image courtesy <a href="https://teddythedog.com/" target="_blank">Teddy the Dog</a>! Check them out -- they're awesome. I have lots of Teddy's stuff: T-shirts, night-shirts, book-bags, fridge magnets, car magnets, throw pillows, blanket, beach towels, sticky notes, reusable shopping bags, insulated water bottles, calendar, and probably other stuff I've forgotten by now.
        </p>

        <img src="https://Stormy9.github.io/CS460/references/html/images/Teddy_Eat_Stink_BeMerry.jpg" alt="Teddy-the-Dog: Eat, Drink, & Be Merry!" title="Image Courtesy of Teddy-the-Dog!" 
        style="float: right; width: 336px; height: 225px; margin-left: 9px; margin-bottom: 3px; border: 1px solid black">

        <p>I put the image tag between the 1st and 2nd paragraph tags. So the top of the image will line up with the top of the 2nd paragraph. With image set to float-right... the text of the 2nd paragraph will wrap itself around the image, with the text situated to the left of the image. You can control how close the text gets to the image by setting margin-left and margin-bottom (the latter if your paragraph is really long, like I'm going to try to make this one be, just for the purposes of trying stuff out). You can float more than just images, you can float &lt;div&gt; and &lt;p&gt; and even &lt;li&gt; tags in order to make nav bar menus. Or whatever other elements you want to float. If you use Bootstrap, or the css grid system without Bootstrap, you will probably use float a lot less... regardless it behooves one to understand how floats work! Note how you can give your image a border, too, if you like.
        </p>

        <h3 style="display: inline-block; margin-top: 18px; margin-bottom: 0">Float an image to the left:</h3>
        <p style="margin-top: 3px;">Demo'ing a float-left image. Image courtesy <a href="https://teddythedog.com/" target="_blank">Teddy the Dog</a>! Check them out -- they're awesome. Teddy will even personalize some items for you. Teddy's customer service is fantastic! About the only thing I don't have from Teddy so far, is glassware.  Or his book. I wish they'd make a plush version of Teddy!
        </p>

        <img src="https://Stormy9.github.io/CS460/references/html/images/Teddy_Eat_Stink_BeMerry.jpg" alt="Teddy-the-Dog: Eat, Drink, & Be Merry!" title="Image Courtesy of Teddy-the-Dog!" 
        style="float: left; width: 336px; height: 225x; margin-right: 9px; margin-bottom: 3px; border: 1px solid black;">

        <p>Again, I put the image tag between the 1st and 2nd paragraph tags.  Note how the top of the image is lined up with the top of the 2nd paragraph.  With the image set to float-left... the text of the 2nd paragraph will wrap itself around the image, with the text situated to the right of the image. This time you would control how close the text is to the image using margin-right and margin-bottom (if your paragraph blathers on for that long, which I'm going to try to do, again, just for demonstration purposes, of course). Floating your html with css styling is fun. You can also use it to float several images next to each other. Or several &lt;div&gt; elements with textual content floating next to each other, too -- with borders, spacing between, all that good stuff. Sometimes you have to adjust the width/height of your image just a tad, in order for the text spacing around it to look good and work right with the margins you put on the image.
        </p>
    </body>
</html>
```

Which gives you this:  
<a href="https://Stormy9.github.io/CS460/references/html/images/ScreenShot_03.PNG" target="_blank"><img src="https://Stormy9.github.io/CS460/references/html/images/ScreenShot_03.PNG"></a>

Also check out <a href="https://Stormy9.github.io/CS460/references/css/">my own css ref/notes page</a> for more examples of floating stuff.

And W3's <a href="https://www.w3schools.com/html/html_images.asp" target="_blank"> reference page for `html` images</a>.

<br>

---
---
## html5 **lists**  
There's three types of lists:  
* ordered lists -- enumerated lists   
    * you can set how the list is enumerated with the `type` attribute
    * default is just simple 1, 2, 3, etc.    

* unordered lists -- bulleted lists  
    * you can set the bullet type via `css` (including no bullet at all!)  

* description lists -- lists that, well, describe things... a list of things, with a description of each thing   
    * all styling done with `css`  

They're really easy!  And have similarities enough they're easy to remember once you're used to them.  

You can put anything you want into the list items -- including links, images, other `html` elements, even another list!  

<br>

---
### **Ordered Lists:**  
**This:**  
```html
<ol>
    <li> first thing </li>
    <li> second thing </li>
    <li> third thing </li>
</ol>
```
Note you close out each `<li>` and the whole `<ol>` itself.  
Although with `html5` you don't **really** have to.  But still.  


Anyway, **that gives you:**  
<ol>
    <li> first thing </li>
    <li> second thing </li>
    <li> third thing </li>
</ol>

<br>

**And this:**  
```html
<ol type="A">
    <li> first thing </li>
    <li> second thing </li>
    <li> third thing </li>
</ol>
```

**Gives you this:**  
<ol type="A">
    <li> first thing </li>
    <li> second thing </li>
    <li> third thing </li>
</ol>

<br>

---
### **Unordered Lists:**  
**This:**  
```html
<ul>
    <li> first thing </li>
    <li> second thing </li>
    <li> third thing </li>
</ul>
```

**Gives you this:**  
<ul>
    <li> first thing </li>
    <li> second thing </li>
    <li> third thing </li>
</ul>  

Note the bullets here are the Jekyll theme default ones, which is a little double >> thing.  

<br>

**And this:**  
```html
<ul style="list-style-type: circle;">
    <li> first thing </li>
    <li> second thing </li>
    <li> third thing </li>
</ul>
```
Note the style is applied at the `<ul>` level.

Anyway, **that gives you:**  
<ul style="list-style-type: circle;">
    <li> first thing </li>
    <li> second thing </li>
    <li> third thing </li>
</ul>

This should over-ride the Jekyll theme default.  
hmmmmm.  Maybe not.  

I know there's some way to put in your own characters for bullets -- or even images, I think? -- but I forget what that is right now, it's not on W3Schools, and it's not a big enough thing to look it up right now.   [=  It might be with `css`.  

<br>

---
### **Description Lists:**  
**This:**  
```html
<dl>
    <dt>Chocolate-Chip Waffles</dt>
    <dd>with mini-chocolate chips -- good with raspberry or strawberry syrup!
    </dd>
    <dt>Blueberry Waffles</dt>
    <dd>with fresh blueberries -- try with blueberry syrup, or another berry syrup, or traditional maple!
    </dd>
    <dt>Peanut-Butter-Banana Waffles</dt>
    <dd>peanut-butter in the waffle batter, with banana slices on top -- yummy with good ol' maple syrup!
    </dd>  
</dl>  
```
Think "description term" and "description detail" to remember the `<dt>` and `<dd>` tags!  

**Gives you this:**  
<dl>
    <dt>Chocolate-Chip Waffles</dt>
    <dd>-- with mini-chocolate chips -- good with raspberry or strawberry syrup!
    </dd>
    <dt>Blueberry Waffles</dt>
    <dd>-- with fresh blueberries -- try with blueberry syrup, or another berry syrup, or traditional maple!
    </dd>
    <dt>Peanut-Butter-Banana Waffles</dt>
    <dd>-- peanut-butter in the waffle batter, with banana slices on top -- yummy with good ol' maple syrup!
    </dd>  
</dl>  

<br>

**Or style it some, like this:**  
```html
<dl>
    <dt style="font-weight: bold;">Chocolate-Chip Waffles</dt>
    <dd style="margin-left: 15px;">with mini-chocolate chips -- good with raspberry or strawberry syrup!
    </dd>
    <dt style="font-weight: bold;">Blueberry Waffles</dt>
    <dd style="margin-left: 15px;">with fresh blueberries -- try with blueberry syrup, or another berry syrup, or traditional maple!
    </dd>
    <dt style="font-weight: bold;">Peanut-Butter-Banana Waffles</dt>
    <dd style="margin-left: 15px;">peanut-butter in the waffle batter, with banana slices on top -- yummy with good ol' maple syrup!
    </dd>  
</dl>  
```
Obviously this styling is best done with an external or embedded style sheet, rather than inline!  

**And you get:**  
<dl>
    <dt style="font-weight: bold;">Chocolate-Chip Waffles</dt>
    <dd style="margin-left: 20px;">-- with mini-chocolate chips -- good with raspberry or strawberry syrup!
    </dd>
    <dt style="font-weight: bold;">Blueberry Waffles</dt>
    <dd style="margin-left: 20px;">-- with fresh blueberries -- try with blueberry syrup, or another berry syrup, or traditional maple!
    </dd>
    <dt style="font-weight: bold;">Peanut-Butter-Banana Waffles</dt>
    <dd style="margin-left: 20px;">-- peanut-butter in the waffle batter, with banana slices on top -- yummy with good ol' maple syrup!
    </dd>  
</dl> 

To me, the left margins are unnecessarily wide and look funny.   [=  

<br>

---
### **Nested Lists (any of them!)**  
You can even combine list types...  
**This:**  
```html
<ol>
    <li>Shelties</li>
    <li>Collies
        <ul style="list-style-type: circle;">
            <li>Rough-coats</li>
            <li>Smooth-coats</li>
        </ul>
    </li>
    <li>Other doggies</li>
</ol>
```
Note how you close out the inner `<ul>`... and then close out the `<ol>` `<li>`.

**That gives you:**  
<ol>
    <li>Shelties</li>
    <li>Collies
        <ul style="list-style-type: circle;">
            <li>Rough-coats</li>
            <li>Smooth-coats</li>
        </ul>
    </li>
    <li>Other doggies</li>
</ol>

<br>

And yes, you can mix, say, an `<ul>` with a `<dl>`, even!  
**Like this:**  
```html
<dl>
    <dt style="font-weight: bold;">Apples</dt>
    <dd>crunchy goodness!
        <ul style="list-style-type: circle; margin-top: 3px;">
            <li>green ones</li>
            <li>red ones</li>
            <li>in-between ones</li>
        </ul>
    </dd>
    <dt style="font-weight: bold;">Bananas</dt>
    <dd>they come in their own handsome carrying case!</dd>
    <dt style="font-weight: bold; margin-top: 15px">Grapes</dt>
    <dd>crisp and juicy!
        <ol type="a" style="margin-top: 3px">
            <li>green ones</li>
            <li>red ones</li>
            <li>black ones</li>
        </ol>
    </dd>
</dl>
```

**And you get:**  
<dl>
    <dt style="font-weight: bold;">Apples</dt>
    <dd>crunchy goodness!
        <ul style="list-style-type: circle; margin-top: 3px;">
            <li>green ones</li>
            <li>red ones</li>
            <li>in-between ones</li>
        </ul>
    </dd>
    <dt style="font-weight: bold;">Bananas</dt>
    <dd>they come in their own handsome carrying case!</dd>
    <dt style="font-weight: bold; margin-top: 15px">Grapes</dt>
    <dd>crisp and juicy!
        <ol type="a" style="margin-top: 3px">
            <li>green ones</li>
            <li>red ones</li>
            <li>black ones</li>
        </ol>
    </dd>
</dl>

<br>

---
The unordered lists -- with the `<ul>` tags -- is what you use to make nav sections & bars and stuff.  

You just make the list horizontal, styling the display to `inline-block`, and using `float`, and `list-decoration: none`, and margins and padding and colors and all that good stuff.  
* as an alternate to floating your `<li>` tags, you can also set their display to `inline`.
* don't forget you have to style both the `<li>` and `<a>` tags for nav bars!

<br>

W3Schools <a href="https://www.w3schools.com/html/html_lists.asp" target="_blank">html lists page</a> 

<br>

---
---
## html5 **tables**    
Fairly easy once you get it..... but can be a pain to keep track of which cell you're in, at times -- so watch it, and use white space + indentation of course to help.  

### **Your basic table:**  
With a few acoutrements.....  
**Do this:**
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            body {
                background-color: lemonchiffon;
                font-family: arial, sans-serif;
            }
            table {
                border-collapse: collapse;
                width: 90%;     margin: auto;
            }
            caption {
                font-size: 27px;    font-weight: bold;
                margin-bottom: 3px;
            }
            table, td, th {
                border: 3px solid #592d86;
                text-align: left;
            }
            tr:nth-child(even) {
                background-color: #e6d9f2;
            }
            tr:nth-child(odd) {
                background-color: #f2f2f2;
            }
            th, td {
                padding: 9px;
            }
            th {
                background-color: #592d86;
                color: ghostwhite;      font-size: 18px;
            }
            .first {
                width: 25%
            }
            .second {
                width: 35%
            }
            .third {
                width: 40%
            }
        </style>
    </head>
    
    <body>

        <table>
            <caption>My Shelties</caption>
            <tr>
                <th class="first">Sheltie</th>
                <th class="second">Color</th>
                <th class="third">Nickname</th>
            </tr>
            <tr>
                <td>Possum</td>
                <td>silvery bi-blue</td>
                <td>The Princess</td>
            </tr>
            <tr>
                <td>Sawyer</td>
                <td>tricolor</td>
                <td>Big Handsome</td>
            </tr>
            <tr>
                <td>Zoey</td>
                <td>steely blue</td>
                <td>Zoey Zoo-Zoo</td>
            </tr>
            <tr>
                <td>Lacey</td>
                <td>tricolor</td>
                <td>Lacey-Doodle</td>
            </tr>
            <tr>
                <td>Jack</td>
                <td>silvery-blue</td>
                <td>Baby-Jack <i>(Like the Cheese)</i></td>
            </tr>
        </table>

    </body>
</html>

```
Notice how, to set column-width, you only have to apply the class to the `<th>` tags.  Which makes sense.   [=  

There's various stuff you can do with the borders and whatnot, too.  

**And you get this:**  
<a href="https://Stormy9.github.io/CS460/references/html/images/ScreenShot_04.PNG" target="_blank"><img src="https://Stormy9.github.io/CS460/references/html/images/ScreenShot_04.PNG"></a>

<br>

Check out W3School's <a href="https://www.w3schools.com/html/html_tables.asp" target="_blank">HTML Tables</a> page.

<br>

---
---
## html5 **forms**  
This one gets a little bit more complicated..... there's a whole four-part section at W3Schools for <a href="https://www.w3schools.com/html/html_forms.asp" target="_blank">HTML Forms</a>!  

**Here's a form that uses everthing but a textbox input:**  
```html
<!DOCTYPE html>
<html>
<head>
	<style>
    	* {
            box-sizing: border-box;
        }
    	body {
            background-color: lemonchiffon;
            font-family: verdana, arial, sans-serif;    color: black;
        }
        form {
            width: 90%;		margin: auto;
        }
        fieldset {
            margin-top: 18px;
            /* can you change color of line? */
            /* apparently, no */
        }
        legend {
            font-size: 27px;	    color: indigo;
        }
        /*=====================================*/
        label {
            /*display: block;*/
        }
        .captions {
            margin-bottom: 3px;		font-weight: bold;
            display: block;
        }
        /*=====================================*/
        input, select{
            margin-bottom: 18px;    display: block;
        }
        /*=====================================*/
        input[type="text"] {
            font-size: 18px;	            padding: 5px;
            border: 3px solid crimson;      border-radius: 9px;
            background-color: whitesmoke;   outline: none;
        }
        input[type="text"]:focus {
            /* did not work -- despite being on W3Schools */
            background-color: #fde8ec;
            /* until i added the '[type="text"]' part */
		}
        /*=====================================*/
        .clearfix {
            /*border: 1px solid black;*/
            width: 90%;
        }
        .clearfix:after {
            content: "";    clear: both;    display: table;
        }
        .boy_girl, .fixed {
            float: left;    width: 50%;
            /*padding: 5px;*/
            /*border: 3px solid red;*/
        }
        @media screen and (max-width: 465px) {
            .boy_girl, .fixed {
                width: 100%
            }
        }
        @media screen and (min-width: 620px) {
            .boy_girl {
                width: 45%;
            }
        }
        @media screen and (min-width: 680px) {
            .boy_girl {
                width: 40%;
            }
        }
        @media screen and (min-width: 750px) {
            .boy_girl {
                width: 35%;
            }
        }
        @media screen and (min-width: 870px) {
            .boy_girl {
                width: 30%;
            }
        }
      	@media screen and (min-width: 1030px) {
            .boy_girl {
                width: 25%;
            }
        }
        @media screen and (min-width: 1225px) {
            .boy_girl {
                width: 20%;
            }
        }
        /*=====================================*/
        input[type="radio"] {
            display: inline;
        }
        input[type="radio"]:focus {
            /* can't do 'focus' on radio buttons */
            border: 5px solid green;
            /* oh wait - this does! */
            outline-color: crimson;
        }
        .radio {
            display: inline;	margin-right: 27px;
        }
        /*=====================================*/
        select {	/* drop-down */
            font-size: 18px;	            padding: 5px;
            background-color: whitesmoke;
            border: 3px solid crimson;      border-radius: 9px;
        }
        select:focus {
            background-color: #fde8ec;      outline: none;
        }
        select[value=""][disabled] {
            /* does not work to not drop this down */
            display: none;
            /* even though it was part of other working answers */
            /* using 'hidden' attribute in the tag worked tho! */
        }
        #placeholder {
            /* does not work to make 'placeholder' gray */
            color: lightgray;
        }
        select:required:invalid {
            /* does work! but makes *all* options gray */
            color: gray;
        }
        select:valid {
            /* does not work to make valid options black */
            color: black;
        }
        option {
            /* this worked to make valid options black again! */
            color: black;
        }
        /* seems it's not possible to change the hover/highlight color */
        option:focus, option:hover, option:active {
            /* does not work -- to change highlight color */
            /* background: linear-gradient(#000000, #000000); */ 
            background-color: crimson;	color: white;
            /* does not work either */
            background: crimson;	color: white;
            /* select: makes *entire* background crimson, not just selection */
        }
        /*=====================================*/
        input[type="checkbox"] {
            display: inline-block;      margin-bottom: 5px;
        }
        .check {
            display: inline-block;      margin-bottom: 5px;
        }
        /*=====================================*/
        input[type="submit"] {
            height: 45px;	width: 90px;
            background-color: crimson;      color: whitesmoke; 
            font-size: 18px;	font-weight: bold;
            border: 3px ridge indigo;   border-radius: 9px;
            margin-top: 18px;
        }
        input[type="submit"]:hover {
            background-color: #f2738c;      border-color: #bf66ff;
        }
        /*=====================================*/
    </style>
</head>

<body>

<form action="/action_page.php">
  <fieldset>
    <legend>My Doggie's Info:</legend>
    
    <!-- text box inputs -->
    <label for="name" class="captions">name:</label>
    <input type="text" id="name" name="name" placeholder="my doggie's name" 
    pattern="[A-Za-z]{1,18}" title="type in your doggie's name, up to 18 letters" required autofocus>
    
    <label for="breed" class="captions">breed:</label>
    <input type="text" id="breed" name="breed" placeholder="my doggie's breed" 
    pattern="[A-Z a-z]{3,36}" title="type in your doggie's breed(s), 3 to 36 letters" required>

	<label for="color" class="captions">color:</label>
    <input type="text" id="color" name="color" placeholder="my doggie's color(s)" 
    pattern="[A-Z a-z]{3,27}" title="type in your doggie's color(s), 3 to 27 letters" required>
    
    <!-- div to hold questions about doggie's gender/status -->
    <div class="clearfix">
   		<!-- radio button inputs -->
    	<div class="boy_girl">
    		<label class="captions">my doggie is a:</label>
    		<input type="radio" id="boy" name="gender" value="boy" required>
    			<label for="boy" class="radio">boy</label>
    		<input type="radio"id="girl"  name="gender" value="girl">
    			<label for="girl" class="radio">girl</label>
    	</div>
    
    	<!-- drop-down input -->
    	<div class="fixed">
    		<label class="captions">my doggie is:</label>
    		<select id="fixed" name="fixed" size="1" required>
    			<option value="" id="placeholder" disabled hidden selected>fixed or no?
            	</option>
        		<!-- 'disabled selected' doesn't work to make text gray -->
    			<option value="spayed">spayed</option>
        		<option value="neutered">neutered</option>
        		<option value="neither">not fixed</option>
    		</select>
    	</div>
    </div>
    
    <!-- checkbox inputs -->
    <label class="captions">i would like info on:</label>
    	<input type="checkbox" id="food">
        	<label for="food" class="check">what to feed my doggie</label><br>
        <input type="checkbox" id="groom">
        	<label for="groom" class="check">how to groom my doggie</label><br>
        <input type="checkbox" id="teach">
        	<label for="teach" class="check">teaching my doggie things</label><br>
        <input type="checkbox" id="play">
        	<label for="play" class="check">how my doggie has fun</label><br>
        <input type="checkbox" id="snooze">
        	<label for="snooze" class="check">where my doggie sleeps</label><br>
    
    <!-- submit-button input -->
    <input type="submit" value="Woof!">
  </fieldset>
</form>

</body>
</html>

```
**And, that gives you this:**  
<div style="margin-bottom: 450px;">
<div style="float: left; width: 45%; padding: 5px;">
<a href="https://Stormy9.github.io/CS460/references/html/images/ScreenShot_05.PNG" target="_blank"><img src="https://Stormy9.github.io/CS460/references/html/images/ScreenShot_05.PNG"></a></div>
<div style="float: left; width: 45%; padding: 5px;">
<a href="https://Stormy9.github.io/CS460/references/html/images/ScreenShot_06.PNG" target="_blank"><img src="https://Stormy9.github.io/CS460/references/html/images/ScreenShot_06.PNG"></a></div>
</div>

<br>

*if I was doing full-on `html/css`, I would've applied the `.clearfix:after` styling... since this is `md` I added `margin-bottom` to the outside `<div>`*  

Plus I made <a href="https://Stormy9.github.io/CS460/references/html/form_demo.html">this demo page</a> so that you can see what happens when you re-size the page -- and check out the `html5` input validation!  

---
The `html5` form input validation can validate pretty much everything..... see more about it:  

* <a href="https://www.w3schools.com/html/html_form_attributes.asp" target="_blank">W3Schools - scroll to 'The Pattern Attribute'</a>  
    * Also important: <a href="https://www.w3schools.com/html/html_form_input_types.asp" target="_blank">W3Schools - Form Input Types</a>  

* <a href="https://webdesign.tutsplus.com/tutorials/html5-form-validation-with-the-pattern-attribute--cms-25145" target="_blank">This page at Envato Web Design Tutorials</a> explains more about patterns; specifically, how to do them for `html5` input validation.  
    * It does help to refresh oneself on `regular expressions`!  

<br>

---
Check out <a href="https://Stormy9.github.io/CS460/references/css/">my own css ref/notes page</a> for more examples of floating stuff, box-sizing, clearfix, responsive styling, and some other cool stuff!  

And don't forget to go to <a href="https://www.w3schools.com/html/html_forms.asp" target="_blank">W3Schools' Forms Tutorials</a> and have fun trying all of this in the repls!  Do something and see what happens, without setting up a full file.

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

<br>

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
    
It links to <a href="https://jekyllrb.com/docs/includes/" target="_blank">this Jekyll page</a>, which explains some more... 

About this `_includes` folder spoken of, it says:  
> Jekyll will look for the referenced file (in this case, `footer.html`) in the `_includes` directory at the root of your source directory and insert its contents.  

-- and you don't **have** to put it there, after all -- you can do `include_relative`.  

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
