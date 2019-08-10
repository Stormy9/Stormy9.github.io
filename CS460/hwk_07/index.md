# homework seven  
the assignment instructions are <a href="http://www.wou.edu/~morses/classes/cs46x/assignments/HW7.html" target="_blank">here</a>   

the repository to the main part of the assignment is <a href="https://github.com/Stormy9/Stormy9.github.io/tree/master/CS460/hwk_07" target="_blank">here</a>  

<br>

This is a **LONG** one -- see Lab Instructions!

---
---
### Step 1 [setup]:  
start with creating a simple MVC web app... 

start with the minimal empty example this time -- **but check the box to add folders and core references for MVC**  

<br>

---
---
### Step 2 [content & coding]:  
Create a single controller and view that creates one page with a text input... this will be the **only** view and the **only** page for the *entire homework*

Get rid of the of the nav bar  

see *figure 1* on the lab instructions  

<br>

---
---
### Step 3 [more setup]:  
Go to `Giphy` and register as a developer  

Create an app, and they'll give you your API key, which you'll use to craft GET requests  
    * this key is secret!  Treat it like a password  
    __DO NOT PUT IT ANYWHERE IN YOUR SOURCE CODE!__
    __CERTAINLY DO NOT PUT IT ANYWHERE IN YOUR REPO!__  

(we'll be shown in class how to do hide it from repo but still use it in the code)  

Read the Giphy documentation... try out their API Explorer... understnad how to use their API

We'll be using their "sticker" API, and the `Translate` endpoint  

Get to know the correct format & terms for a search -- PLUS -- the JSON data that is returned  

**SEE example in Lab Instructions!**  

You will use C# to parse the JSON object... extract what's needed... and build a `JsonResult` to send to your client  

<br>

---
---
### Step 4 [requirements]:  
> Here's the plan:  
* the user begins typing a phrase/sentence
* you've previously registered a JavaScript callback function on the text input in order to return custom JavaScript code
* Your code waits for a space to be tyuped, which indicates a word has been typed... if the word is a "boring" word, then just output it directly below -- but if it's an "interesting" word, we want to find a sticker translation for it  
    * the definition of "boring" and "interesting" is up to you!  

geezus... see the Lab Instructions!  
and *figures 2 & 3*  

<br>

---
---
### Step 5 [content/coding]:  
Add a database to your project to keep a log of search requests...   
* make a table to hold info about requests made to your server  
    * when a request comes in, add an entry to the table with info about the request... log stuff like date/time, what the request was, the IP address of the requestor, the client's browser agent type

    * logging is a very common activity -- and useful when testing code!  in reality, you'd probably just log requests that returned error codes, but for now we're logging **everything**  

<br>

---
---
### Step 6 [portfolio content]:  
**MUST** have a video of your app in-use...  
**AND** a screenshot showing your log table accumulating data

<br> 

---
---
### Step 7 [turn it in!]

<br>

---
---
---
[back to CS460 page](https://Stormy9.github.io/CS460/ "CS460 main page")   

[back to main page](https://Stormy9.github.io/ "main page")  
