# bootstrap notes  

Bootstrap is a front-end framework for web design that works with/in `html`... well, `html5`, that is!  

It's free to use -- either download it yourself, which means hosting it on your own server... or simply do an `include` and pull it in from a **C**ontent **D**elivery **N**etwork (CDN).  

Bootstrap is essentially a collection, kinda like library, of templates that incorporate `CSS` and/or `JavaScript` to make your websites look awesome and include some functionality, more easily than directly doing everything yourself from scratch... it also makes it easier to make your webpages responsive.  

It **is** kinda awesome to learn how to do those things yourself from scratch, too, though.  Preferably first.   [=  

Much like `html` & `css`, Bootstrap is reasonably easy to learn.  So long as you're comfortably familiar with the other two going into it.  

<br>

**The key parts of Bootstrap are:**  
* containers  
* responsive controls  
* the grid system  
* implementing classes to pull in special `css`  

<br>

**It's usually divided into:**
* layout  
* content  
* components  
* utilities  

<br>

**Note:**  
Even though Bootstrap requires the use of `html5`...  
all of their examples still use the `<div>` element.   [=  

<br>

---
---
## Bootstrap Setup  
To use Bootstrap, here's the includes you have to do (and where to put them in your `html`):  
```html
<!doctype html>
<html lang="en">

    <head>
        <!-- required charset meta tag -->
        <meta charset="utf-8">

        <!-- required responsive meta tag -->
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- "width=device-width" sets the width of your page
          to the width of the device it's being viewed on...

          "initial-scale=1" sets initial zoom level when the
          page is first loaded into the browser               
          
          not everyone includes 'shrink-to-fit=no' -- but,
          it's on official Bootstrap page -- and makes sense! -->

<!----------------------------------------->

        <!-- Bootstrap CSS library -->
        <!-- pulls in the pre-made Bootstrap CSS -->
        <link rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
              crossorigin="anonymous">

        <!-- your own CSS file *after* Bootstrap's -->
        <link rel="stylesheet" type="text/css" href="styling/mystyles.css">

        <title>your site's title that goes in the tab</title>

    </head>
<!----------------------------------------->
    <body>
        <!-- all your site content goes in here -->

        <!-- Bootstrap requires a container element         -->
        <!-- to wrap your site contents --                  -->
        <!-- at least when using their default grid system  -->

        <!-- in examples, it is always done like this:      -->
        <!-- you can use either class="container",          -->
        <!-- or use class="container-fluid"                 -->

        <div class="container-fluid">
            <h3>here is a header</h3>
            <p>here is a paragraph.</p>
        </div>

        <!-- THEN... just before your closing body tag --   -->
        <!--    -- but outside of your container div!       -->
        <!-- goes the optional Bootstrap-related JavaScript -->
        <!-- REQUIRED ORDER:  jQuery, Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
                crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" 
                crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" 
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" 
                crossorigin="anonymous"></script>

        <!-- THEN your own js if you have any -->
        <script src="my_script"></script>

    </body>

</html>
```  
the explanations are conveniently incorporated with each part...  

**except:**  
* the `integrity` and `crossorigin` attributes are apparently not required... the official Bootstrap site uses them, of course... but other example/tutorial sites (including W3Schools) do not.  And it all still works just fine.   [=  

  * <a href="https://stackoverflow.com/questions/32039568/what-are-the-integrity-and-crossorigin-attributes" target="_blank">Here</a> is info about them.

* there's a couple different CDNs... the official Bootstrap site uses one in their examples, W3Schools uses another.  I don't think it really matters much.   [=  

* some tutorial/example sites put the `js` includes up-top right under the `CSS` one... but `js` stuff is **supposed** to go at the bottom!  


<br>

---
---
## Bootstrap Containers    
In Bootstrap, all your content is supposed to be wrapped in a `container` element... it is **required** in order to use the Grid System.      
Like:  `<div class="container">`  

<br>

Or you can use `<div class="container-fluid">`.  Those are the only two types of `container`.  

The difference between the two:  
**`<div class="container">`**  
**Fixed Width:**  content within here will **not** span the full width of the viewport -- there will be some padding on either side.  

**`<div class="container-fluid">`**  
**Flexible Width:**  content in here **will** span the full width of the viewport... if you want any padding to the right or left anywhere, use the `row/column` feature of the Grid System.  

<br>

While you *can* nest `container`s if you want -- but it's usually overkill, and there's really no reason to.  

Once you have your main `container`, you can make use of Bootsrap's Grid System -- which makes content layout a lot easier than the "old days" of doing `<div>` and `float`s.  Although that was fun and a little challenging at first, this is quicker/easier.   [=   

<br>

---
---
## Bootstrap Responsive Controls  
The Bootstrap Grid System has five classes:
* [blank] (x-small: screen width < 576px)  
* `sm` (small: screen width >= 576px)  
* `md` (medium: screen width >= 768px)  
* `lg` (large: screen width >= 992px)  
* `xl` (x-large devices: screen width >= 1200px)  

Note that `x-small` is only used with `column`s.  

The other four classes are also used for responsiveness of <a href="https://www.w3schools.com/bootstrap4/bootstrap_tables.asp" target="_blank">tables</a> (scroll to "responsive") & <a href="https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp" target="_blank">navbars</a> (right at the top)  

..... and possibly/probably some other stuff.   [=  

Essentially, this tells the browser when to start stacking columns, instead of adding a horizontal scroll bar, when the content width exceeds the viewport.  

Note that each class scales up... for instance, if you want to cover `sm` and `md`, you need to do `sm`.  

I'm not sure how to explain this -- but I noticed that it kinda works backwards from what I initially thought, when I was playing with what it would do.   [=  

Use any of the `repl`s at W3Schools to play with how it responds to re-sizing the viewport!  

The Official Bootstrap site explains it in detail <a href="https://getbootstrap.com/docs/4.3/layout/overview/#responsive-breakpoints" target="_blank">here</a>.

<br>

---
---
## Bootstrap Grid System: Rows & Columns  
You don't **have** to put your page content in the Grid System, but for most pages it's a boon for layout/arrangement.  

Plus the Grid System is responsive -- columns will automatically (re)arrange themselves appropriate to the viewport size, based on which grid class you use *(see next section)*.  

In order to make divisions or sections on your page, you make use of Bootstrap's `row`s and `column`s.

Note that it's `row` before `column`!  In other words, you make a `row` and then put however many `column`s in it.

Different `row`s can have different numbers -- and arrangements -- of `column`s.  So long as the total numbers of `column`s don't exceed 12.   [=  (you don't have to use all 12 if you don't want to)

Here is an example of `row/column` layout from my **homework_01** lab:

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
You can see an example of it <a href="https://Stormy9.github.io/CS460/hwk_01/games/explodingkittens.html">here</a>.  

I could've made another row -- or several -- right under that one, with the columns flipped the other way around or in any arrangement I wanted.  But I didn't have a need or reason to, for that homework.   [=  

However, I did make an example of that for this Bootstrap References page, to visualize it for myself... you can see that example <a href="https://Stormy9.github.io/CS460/references/bootstrap/explodingkittens.html">here</a>.  

This example has three `row`s... the one in the middle is simply a full-width one for separation and to make things easier to visualize.

For the third `row`, I simply flipped the arrangement of the first `row`.  Yeah, so, I'm lazy... but why waste time making up new content when all I wanted to do was illustrate layout?   [=  

The code is just like above, except the other way around.  

<br>

Play with the Bootstrap Grid System <a href="https://www.w3schools.com/bootstrap4/bootstrap_grid_basic.asp">at W3Schools</a>  

**Also check out <a href="https://www.w3schools.com/bootstrap4/bootstrap_flex.asp" target="_blank">Bootstrap Flex Classes</a>!**

<br>

---
---
## Bootstrap's Built-in Classes  
These are how you implement Bootstrap's `css`!  

There's a crap-ton of them -- just as there are `css` attributes --  so there's no way to demo them all here, without just like re-writing an entire freaking tutorial.  Which I am **not** gonna do.   [=   

You implement them in the `class` attribute of your `html` tags -- the same way you implement your own `class`es for which you write your own `css`!  

You can see examples of applying various `class` attributes throughout this reference page!   [=  

But here's something I did in one of W3School's `repl`s:
```html
<body>
    <div class="container-fluid">
		<!-- row one -->
    	<div class="row">
            <div class="col" style="background-color: purple; color: white">
                <h3>this row is a single column spanning the page</h3>
                <p>note default text alignment is left for everything</p>
                <p class="text-center">this is center alignment</p>
                <p class="text-right">this is right-aligned text</p>
            </div><!-- end of column div -->
    	</div><!-- end of first row div -->
    
    	<!-- row two -->
        <div class="row">    
            <div class="col-md-4" style="background-color: #ff8080; color: white">
                <h3>column one</h3>
                <p>a bunch of stuff in the first column</p>
                <p>here's another paragraph of stuff</p>
            </div><!-- end of column one div -->
        
            <div class="col-md-4" style="background-color: #ffffb3; color: purple">
                <h3>column two</h3>
                <p>here's some crap in the second column</p>
                <p>and here's another paragraph of crap</p>
            </div><!-- end of column two div -->
    
            <div class="col-md-4" style="background-color: #ff944d; color: blue">
                <h3>column three</h3>        
                <p>let's put some stuff in column three too</p>
                <p>and balance it out with another paragraph, too</p>
            </div><!-- end of column three div -->       
        </div><!-- end of second row div -->
    
    	<!-- row three -->
    	<div class="row">
            <div class="col-md-5" style="background-color: #ff944d; color: blue">
                <h3>column four</h3>
                <p>this column is five wide</p>
                <p> here is some more stuff to go in it:</p>
                <p>things doggies say:</p>
                    <ul>
                        <li>woof</li>
                        <li>bark</li>
                        <li>arf</li>
                    </ul>
            </div><!-- end of column four div -->
        
            <div class="col-md-6" style="background-color: #ff8080; color: white">
                <h3>column five</h3>
                <p>this column is six wide</p>
                <p>blah blah blah blah blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah blah blah blah 
                    blah </p>
            </div><!-- end of column five div -->
        
            <div class="col-md-1" style="background-color: #ffffb3; color: purple">
                <h3>column six</h3>
                <p>here is a teeny column over on the right</p>
            </div><!-- end of column six div -->
        </div><!-- end of third row div -->
    </div><!-- end of container div -->
</body>
```
It also shows more about the grid & `rows/column`s!  

Go ahead -- go to any of W3School's `repl`s... copy/paste this into there... then change it up however you want to see what happens.  

Notice I also used inline `css` to show the distinctions of the grid.  

Here is a screenshot of that that code up there returns:  
<a href="https://Stormy9.github.io/CS460/references/bootstrap/images/my_example.PNG"><img src="https://Stormy9.github.io/CS460/references/bootstrap/images/my_example.PNG"></a>

<br>

A quick reference of **ALL** Bootstrap `class`es -- with `repl`s to try stuff out -- you can change the examples up however you want to see what happens -- is at <a href="https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp">W3Schools</a>!  

<br>

***Note***: remember classes are indicated by a `.` in front..... so the class `.text-center` is implemented by doing a `type attribute` in your `html tag`..... like:  
```html
<p class="text-center">
```

<br>

---
---
## Bootstrap Navigation + `nav` vs. **`navbar`**  
Doing a good navigation system for your site is an essential and key element -- and often (at least in my experience) can be one of the more complicated parts to get it looking just how you want it to.  

Bootstrap makes styling whatever type of `nav` you go with a lot quicker & easier, though!  

<br>

So... you know how in Bootstrap, all your content is supposed to be wrapped in a `container` element?  

The basic `nav` element -- where you apply one of  the `.nav` classes to a `<ul>` element -- now those **do** get wrapped in your main `container`.  

But a **`navbar`** is:
* not *required* to be wrapped in a `container`  

* not **in** a `container` in most examples online -- including the official Bootstrap site... the main `container` with the page content starts immediately *after* the **`navbar`**   

<br>

You just use an `html5 <nav>` element, and add Bootstrap classes to it, like:  
```html
<!-- example for basic nav menus -->
<div class="container">
    <h2>Navigation Tabs</h2>
    <p>Make a tabbed nav menu..... </p>
  
    <nav>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
            </li>
          
            <li class="nav-item">
                <a class="nav-link" href="#">Link 1</a>
            </li>
          
            <li class="nav-item">
                <a class="nav-link" href="#">Link 2</a>
            </li>
          
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled Link 3</a>
            </li>
        </ul>
    </nav>
    
</div>

<!-- example for navbars -->
<nav class="navbar navbar-expand-sm bg-light">

    <!-- Links -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#">Link 1</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">Link 2</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">Link 3</a>
        </li>
    </ul>

</nav>

<div class="container-fluid">
    <h3>the big header</h3>
    <p> some content </p>

    <!-- and all the rest of your page's stuff -->

</div>
```
Note how the basic `nav` menu is simply Bootstrap's `css` classes applied to a `<ul>`, along with it's `<li>` and `<a>` sections.  The basic `nav` menu does not *have* to be in `<nav> html` tags... but I believe it better identifies page sections in the code.  

Also note how the **`navbar`** is Bootstrap's `css` classes applied directly **to** the `<nav>` tag.  

<br>

However, a **`navbar`** *can* be used with a `container` if you want...  

* the **`navbar`** can be inside a `container` if you want to center it on your page (per official Bootstrap page) (even though you can center it by applying a class? is this if you like want a column (or more) on either side of your **`navbar`** or something?)  

* you can have a `container` inside your **`navbar`** if you want to center the contents of it (only for fixed/static top ones)  

* put your **`navbar`** inside your main `container` if you want to use a `sticky` one  

<br>

But in all of the online examples/tutorials, it says -- and demonstrates -- to simply place the **`navbar`** code at the very top of the `<body>` section.  

Yes, even if you're doing a **`navbar`** fixed to the *bottom* of your site.  

<br>

More about<a href="https://getbootstrap.com/docs/4.3/components/navs/" target="_blank">basic `nav`s</a> and <a href="https://getbootstrap.com/docs/4.3/components/navbar/" target="_blank"> the **`navbar`**</a> at the Official Bootstrap Site

Play with Bootstrap <a href="https://www.w3schools.com/bootstrap4/bootstrap_navs.asp">basic `nav`</a> and <a href="https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp">the **`navbar`**</a> at W3Schools  

<br>

---
---
## Bootstrap Forms  
Another key part of many websites.....    

Forms can be either:  
* stacked (full-width) -- this is default  
* inline  

<br>

There's lots of Bootstrap classes to style your form elements:  
* input boxes (including `<textarea>`) 
* selection elements:  
    * checkboxes
    * radio buttons
    * drop-downs   
* submit (function) buttons  

<br>

If you want a stacked form, but for it **not** to span the width of the entire viewport, then wrap it in a `column` div!  

Like this:
```html
<div class="container">
  	<h2>Stacked form</h2>
  
  	<div class="row ">
  		<div class="col-md-2" style="background-color: purple">
        </div><!-- end of first column div -->
        
        <div class="col-md-8 py-3" style="background-color: #ffffb3; color: purple">  
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="email"> Email: </label>
                    <input type="email" class="form-control" id="email"
                            placeholder="Enter email" name="email">
                </div>
                
                <div class="form-group">
                    <label for="pwd"> Password: </label>
                    <input type="password" class="form-control" id="pwd" 
                            placeholder="Enter password" name="pswd">
                </div>
                
                <div class="form-group form-check">
                    <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" 
                            name="remember"> Remember me </label>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
  			</form>
		</div><!-- end of second/middle column div -->
        
        <div class="col-md-2" style="background-color: purple">
        </div><!--- end of third column div -->
        
</div><!-- end of container div -->
```
that code returns:  
<a href="https://Stormy9.github.io/CS460/references/bootstrap/images/my_other_example.PNG"><img src="https://Stormy9.github.io/CS460/references/bootstrap/images/my_other_example.PNG"></a>  

note this uses `container` as opposed to `container-fluid`.  

<br>

There's also Bootstrap form validation -- but only whether or not the user put something in the form... not if they entered a number where they should've entered a letter.   [=  

<br>

More about <a href="https://getbootstrap.com/docs/4.3/components/forms/" target="_blank">forms at the Official Bootstrap site</a>

Play with <a href="https://www.w3schools.com/bootstrap4/bootstrap_forms.asp">Bootstrap `form`s</a> at W3Schools  

<br>

---
---
## Knowing What You Can Do With Bootstrap  
There are **so-o-o-o-o-o-o-o-o-o** many `class`es in Bootstrap, that -- much like `css` is -- you won't actually ever really **know** all the Bootstrap classes and stuff, as in all from  memory.....  

That is most likely humanly impossible.  Unless you're some people, or have been Bootstrapping every day for like 10 years straight or something.  

What you **do** have to do, what is far, far easier to do..... is to know what it is you **can** do with Bootstrap... what's available, some idea what it's called... then just look it up -- what to actually type in for sure -- at your favorite reference site.  

<br>

---
---
## Some Good Bootstrap Sites  
<a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/" target="_blank">The Official Bootstrap Page</a>  

<a href="https://www.w3schools.com/bootstrap4/bootstrap_get_started.asp" target="_blank">W3Schools Bootstrap Tutorial -- with `repl`s!</a>  

<a href="https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp" target="_blank">W3Schools Bootstrap -- Comprehensive List of all Classes!</a>

<a href="https://medium.com/quick-code/top-tutorials-to-develop-responsive-websites-using-bootstrap-4-c934172f3ebd" target="_blank">This article on Medium.com rates good places to learn & practice Bootstrap!</a>  

<br>

Plus there is always just googling a question.   [=  

<br>

---
---
---
[back to CS460 page](https://Stormy9.github.io/CS460#bootstrap/ "CS460 main page")   

[back to main page](https://Stormy9.github.io/ "main page")   


