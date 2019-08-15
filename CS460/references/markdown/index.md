# markdown notes

What is Markdown?
A simple easy way to format simple pages -- like on GitHub or BitBucket.  

You can also use it within, say, GitHub -- like in the GitHub forum we used for CS407-MA.  

You can also put standard `html` tags in your markdown if you want.

But Markdown is faster & easier than `html` -- although it also has many limitations.  But is perfect for quick sites like this one!  

There's several different "flavors" of Markdown, that add in some different features/functionality... we're just gonna talk about the basic "vanilla" + GitHub-specific stuff here.  

<br>

---
---
## text formatting  
### for emphasis:
```
**you can do bold like this...**
__or you can do bold like this!__

*italics is done like this...*
_or like this!_

*you can use __both__ in the same line!*

~~and this is strike-through~~
(GitHub-specific)
```
**you can do bold like this...**
__or you can do bold like this!__

*italics is done like this...*
_or like this!_

*you can use __both__ in the same line!*

~~and this is strike-through~~
(GitHub-specific)

There isn't anything for underlining -- underlining on web pages is typically reserved for links.  

<br>

---
### for headings:  
```
# equivalent to <h1> tag  
## here's an <h2> tag  
### and an <h3> tag  
#### here you see an <h4>  
##### and this is an <h5>  
###### and finally an <h6>  
```
# equivalent to < h1 > tag  
## here's an < h2 > tag  
### and an < h3 > tag  
#### here you see an < h4 >  
##### and this is an < h5 >  
###### and finally an < h6 >  

I've noted that if you're using markdown for Jekyll -- the GitHub page template thing -- the way the headers look varies by theme.  Which only makes sense.   

It also looks different in the preview mode of VSCode as it will in your `push`ed page, depending on what theme you use.  

---
### line breaks/spacing:
typically, all you have to do is hit enter once, 
for a new line to start.

not so in Markdown!  That sentence you see up there, I typed like this:
```
typically, all you have to do is hit enter once, 
for a new line to start.
```
and you see how it appears.  

You have to type in __two spaces__ at the end of your line to force a line break.  
```
i want this stuff on separate lines, [space][space]
but not *separated* by a blank line, [space][space]
so I have to put two spaces at the end of each line.
```
i want this stuff on separate lines,  
but not *separated* by a blank line,  
so I have to put two spaces at the end of each line.  

<br>

---
If you want a blank line between your lines, just hit enter twice -- and no need for two spaces at the end of any lines.
```
this line, then a blank one, [enter]
[enter]
then this line.
```
this line, then a blank one,

then this line

<br>

---
if you're like me and sometimes like to introduce extra vertical white space for easier readability, you have to use `html` to achieve that.
```
i like extra vertical spacing between some paragraphs, to break up sections... it helps with readability and knowing where you're at and stuff.

<br>

so you have to use the html <br> tag!

note the blank line on either side -- without that, it won't render correctly.
```
i like extra vertical spacing between some paragraphs, to break up sections... it helps with readability and knowing where you're at and stuff.

<br>

so you have to use the html <br> tag!

note the blank line on either side -- without that, it won't render correctly.

<br>

---
### divider lines:
if you want even more definition between sections, to get these nifty divider lines I use in this page, you just go:
```
---   this gets you a single line

---
---   this gets you a double line

---
---
---   this gets you a triple line

***   you can also use blats
___   or underscores
```
***
___
those are divider lines made with `*` and `_` characters.

<br>

---
---
## linking  
### regular links:  
you can just put a URL in, and it will automatically format into a link:
```
https://theoatmeal.com/comics/insight
```
becomes:  
https://theoatmeal.com/comics/insight

<br>

Or make it a little fancier like this:
```
[The Oatmeal -- Insight](https://theoatmeal.com/comics/insight)
```
[The Oatmeal -- Insight](https://theoatmeal.com/comics/insight)

<br>

---
### links that open in a new tab:
if you want your link to open in a new tab, you have to use `html`... so far as I've been able to find out, anyway.  

like this:
```html
<a href="https://theoatmeal.com/comics/oracle" target="_blank">this link will open in a new tab</a>
```
<a href="https://theoatmeal.com/comics/oracle" target="_blank">this link will open in a new tab</a>

<br>

---
### **creating** a section link/anchor  
Supposedly, you can create a section anchor/link in your markdown page... I haven't tried this yet, but it could be awesome, to be able to link to specific sections of my stuff!  

Replace any spaces between words with a `-`, and wrap it in parens as shown:
```
[create an anchor](#anchors-in-markdown)
```
[create an anchor](#anchors-in-markdown)  

that right up there is supposed to make that little double-link thing show up, when you hover on the anchored heading text, that you can get the URL from, in order to link to that specific section of your page... 

not sure if this is working for me in real life...  the little double-link thing isn't showing up for me in VSCode Preview Mode.  

I see it on other people's GitHub pages though.   [=  

<br>

i thought of it, googled it, and came across <a href="https://gist.github.com/asabaylus/3071099" target="_blank">this discussion</a> on GitHub Gist.  

<a href="https://stackoverflow.com/questions/6695439/how-to-link-to-a-named-anchor-in-multimarkdown?rq=1" target="_blank">this StackOverflow Conversation</a> gives a few more details... 

like this response there, from @SaurabhM
> If you have headers in the markdown files, you can directly link them in the file.
>
> Markdown Header -  
> `## The Header`
>
> this will generate an implicit id #the-header (replace internal spaces with hyphens and make lowercase).
> 
> To navigate to this id, you can create the link like this:   
> `[Link to Header](#the-header)`
> 
> This is equivalent to:   
> `<a href="#the-header">Link to Header</a>`
> 
> Please note the reference's name is a lower-case #header.

<br>

and this response from @longkai  
> I tested Github Flavored Markdown for a while and can summarize with four rules:
> 
> * punctuation marks will be dropped
> * leading white spaces will be dropped
> * upper case will be converted to lower
> * spaces between letters will be converted to `-`'
> 
> For example, if your section is named this:  
> `## 1.1 Hello World`  
> 
> Create a link to it this way:  
> `[Link](#11-hello-world)`

<br>

```html
the link would then look like 
<a href="https://Stormy9.github.io/CS460/references/markdown#anchors-in-markdown">this</a>.
```
the link would then look like <a href="https://Stormy9.github.io/CS460/references/markdown#anchors-in-markdown">this</a>.  

<br>

btw, I don't want to be able to just link to a given section, from the page in which that section resides -- but also from other pages entirely (that are still within my overall site, of course).  Like to link to "Step 3 of Homework 2" from here, for instance.  

I guess it's not **super**-important, but I should be able to figure it out at some point.   [=  

<br>

---
### linking to your .md pages on your github.io site  
in order for your page to render correctly in the browser, you would link to the `html` version of your `md` page.  

yes, that is a thing and it will do what it's supposed to!   [=   

for instance, this page is technically:
```
http://Stormy9.github.io/CS460/references/markdown/index.md
```

but from another page, you wouldn't link to *that*, you'd link to:
```
http://Stormy9.github.io/CS460/references/markdown/index.html
```

although, of course, since it's the `index` page, you don't have to link to it directly/specifically, at **all**... 
```
http://Stormy9.github.io/CS460/references/markdown/
```
is all you need.

But if you have other pages besides index, that are `.md`, you would link to their `html` form in order for them to render correctly in a browser.  

<br>

---
---
## Quoting  
Pretty easy... remember the old days of emails and forums and stuff, where someone you were quoting, each line of their stuff was preceded by an `>`?

Just do that.
```
> this is how you quote stuff in markdown.

>> you can also show different levels of quoting... 

>>> each extra > indicates another level!
```
> this is how you quote stuff in markdown.

>> you can also show different levels of quoting... 

>>> each extra > indicates another level!

<br>

---
---
## highlighting code -- syntax highlighting
### inline code:  
```
for inline code... the `code` is just set off by `back-ticks`... 

you can find the `back-tick` key right under the escape key!  
it also has the little squiggly thing on it.
```
for inline code... the `code` is just set off by `back-ticks`... 

you can find the `back-tick` key right under the escape key!  
it also has the little `squiggly thing` on it.

<br>

---
### block code:  
if you want to do a whole block of code -- very, very awesome sometimes! -- all you do is put it between two rows of three back-ticks, like so:
```
` ` ` 
function foop(param) {
    important stuff happens here
}
` ` ` 
```
except of course without the spaces between the back-ticks...  
it wouldn't render correctly in here without them though.

and you get this:
```
function foop(param) {
    important stuff happens here
}
```
this is what I've been doing all along for the markdown examples.   [=  

you can also just indent the lines you want marked as code by four spaces... but i like the back-ticks better -- more definition.  

<br>

---
### special syntax highlighting:  
#### (GitHub-specific)
this is really cool -- you can get special highlighting depending on what language you're trying to give an example of!
```
```html
<div> the stuff you want in your div.
    </div>
` ` `

or:
```css
```javascript
```whatever -- all lowercase
```
Again, I had to put the spaces in the backticks -- this time only the ending ones -- or else it screwed up how it rendered.  (not sure how the pages linked below got around that!)

```html
<div> the stuff you want in your div.
    </div>
<!-- html -->
```
it even indents for you, when you hit enter, where appropriate!   

```css
<div> {
    color: red;
    background-color: purple;
    /* css, of course*/
}
```
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
// JavaScript
```
```python
def foo():
    if not bar:
        return True
# python
```
<br>

---
---
## Lists!
### unordered:  
```
* Item 1
* Item 2
    * Item 2a
    * Item 2b
* Item 3
    * Item 3a

-- or you can use two dashes
-- like this
-- to make ul's
(so it says on one of the pages...)
(doesn't render correctly for me in VSCode!)
```
Just hit `tab` to indent sub-lists.

* Item 1
* Item 2
    * Item 2a
    * Item 2b
* Item 3
    * Item 3a

<br>

---
### ordered:  
```
1. Item 1
1. Item 2
    1. Item 2a
1. Item 3
    1. Item 3a
    1. Item 3b
```
notice how it doesn't matter what numbers you really use...  
i like to use the actual numbers just for my own sanity though.   [=  

1. Item 1
1. Item 2
    1. Item 2a
1. Item 3
    1. Item 3a
    1. Item 3b

In my experience, the list item numbers all show up as "1" where I actually type my code in VSCode -- but in the Preview Pane, they show up correctly as "1", "2", and "3".  

<br>

---
### mixed lists:
you can even mix ordered/unordered, and use multiple levels of indent, too -- like so:
```
1. First list item
    * First nested list item
        * Second nested list item
1. Second list item
```
1. First list item
    * First nested list item
        * Second nested list item
1. Second list item

cool!   [=  

<br>

---
### task lists:  
#### (GitHub-specific)  
```
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```
I haven't played with this much yet, but it looks cool...  

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

maybe.  I mean, it's just a regular unordered list into which you type your own "[x]" or "[ ]".....  hmmm.  

the online example shows it rendering as actual full-out checkboxes -- now *that* would be cool.  I'll see what this does when I `push` it and can actually see it online instead of just in VSCode Preview.  

<br>

---
---
## images
### pure markdown:
```
![Zoey](https://stormy9.github.io/exp/Zoey-Zoo-Zoo_cr.jpg)

Format: ![Alt Text](url)
```
note the "!" before it -- this is what distinguishes it from how you do a link *(see that section up there)*  

![The Best Zoey That Ever Zoey'd](https://stormy9.github.io/exp/Zoey-Zoo-Zoo_cr.jpg)  
The Best Zoey that Ever Zoey'd..... <3
<br>

---
### or you can use html... 
```html
<img src="https://stormy9.github.io/CS460/references/markdown/Princess_Possum_cr.PNG" title="My Princess Possum" alt="Princess Possum">
```
this way you can add attributes, like text that shows up in the little box thing when you hover over the image...  
<img src="https://stormy9.github.io/CS460/references/markdown/Princess_Possum_cr.PNG" title="My Princess Possum" alt="Princess Possum">
<br>

---

### and even link images  
like to a larger version of the same image -- good for screenshots sometimes
```html
<a href="https://stormy9.github.io/CS460/references/markdown/Baby_Jack_Like_the_Cheese_cr.PNG">
<img src="https://stormy9.github.io/CS460/references/markdown/Baby_Jack_Like_the_Cheese_cr.PNG" title="My Baby-Jack (like the cheese) as a puppy" alt="Baby-Jack Like the Cheese">
</a>
```
just wrap the whole image tag in `<a></a>` tags!
<a href="https://stormy9.github.io/CS460/references/markdown/Baby_Jack_Like_the_Cheese_cr.PNG">
<img src="https://stormy9.github.io/CS460/references/markdown/Baby_Jack_Like_the_Cheese_cr.PNG" title="My Baby-Jack (like the cheese) as a puppy" alt="Baby-Jack Like the Cheese">
</a>  
which of course you can add the `target` attribute to make it open in a new tab if you like.  usually for my own images, I leave it opening in the same tab.  

<br>

---
---
## tables
### (GitHub-specific)
you can make the number of colums/rows you want... 
```
First Header | Second Header | Third Header
------------ | ------------- | ------------
stuff in cell 1 | stuff in cell 2 | stuff in cell 3
stuff in 1st column | stuff in 2nd column | stuff in 3rd column
stuff in cell 4 |     | stuff in cell 6
stuff in cell 7 | stuff in cell 8 | stuff in cell 9
```
and it looks like this:
First Header | Second Header | Third Header
------------ | ------------- | ------------
stuff in cell 1 | stuff in cell 2 | stuff in cell 3
stuff in 1st column | stuff in 2nd column | stuff in 3rd column
stuff in cell 4 |     | stuff in cell 6
stuff in cell 7 | stuff in cell 8 | stuff in cell 9

note the blank cell!   [=  

and note you don't have to align the stuff as you type it -- but it will render aligned.  I mean, you *can*, if you can't stand seeing sloppy-looking stuff, but you don't have to and it saves time & picky-ness.   [=  

<br>

---
---
## username mentions
### (GitHub-specific)  
Typing the `@`, followed by a username -- GitHub will notify that person to come and view the comment. 

This is called an `@mention`, because you’re mentioning the individual. You can also `@mention` __teams__ within an organization.

<br>

---
---
## ingoring markdown for a moment  
### in GitHub anyway  
You just escape out what you don't want markdown to read/parse, like so:  
```
Let's rename \*our-new-project\* to \*our-old-project\*.
```
Let's rename \*our-new-project\* to \*our-old-project\*.

see how it doesn't do italics there?   [=

<br>

---
---
## some awesome places to learn about markdown code  
(is it code?  i guess sort of, at least!)

<a href="https://guides.github.com/features/mastering-markdown/" target="_blank">GitHub Guides -- Mastering Markdown</a>  

<a href="https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md" target="_blank">GitHub Does Emojis!</a>  

<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Adam Pritchard's Markdown Cheat-Sheet</a>

<a href="https://help.github.com/en/categories/writing-on-github" target="_blank">GitHub Help -- Writing on GitHub</a>



<br>

---
---
---
[back to CS460 page](https://Stormy9.github.io/CS460#markdown/ "CS460 main page")   

[back to main page](https://Stormy9.github.io/ "main page")   

---
<br>
<br>
<br>

##### Bonus/PS to perusers besides myself:
<a href="https://theoatmeal.com/comics/tesla" target="_blank">Tesla -- the Greatest Geek Who Ever Lived</a>  
<a href="https://theoatmeal.com/comics/design_hell" target="_blank">How a Web Design Goes Straight to Hell</a>  
<a href="https://theoatmeal.com/comics/printers" target="_blank">Printers are from Hell</a>  
<a href="https://theoatmeal.com/comics/pens_as_printers" target="_blank">If Pens Worked Like Printers</a>  
<a href="https://theoatmeal.com/comics/dog_paradox" target="_blank">My Dog, the Paradox</a>  
<a href="https://theoatmeal.com/blog/save_the_world" target="_blank">Saving the World</a>  
<a href="https://theoatmeal.com/comics/tupperware" target="_blank">Tupperware</a>
 