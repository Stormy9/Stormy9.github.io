# homework five  
the assignment instructions are <a href="http://www.wou.edu/~morses/classes/cs46x/assignments/HW5.html" target="_blank">here</a>  

the repository to the main part of the assignment is <a href="https://github.com/Stormy9/Stormy9.github.io/tree/master/CS460/hwk_05" target="_blank">here</a>  

<br>

---
---
### Step 1 [setup]:  
create another new, empty MVC project in your repo...  

create a simple home/landing page that will serve as the home page for this app... put links here, for pages you create later  

<br>

---
---
### Step 2 [planning & design]:  
we're doing the campus apartment maintenance request form...  

follow the outline in the instructions -- but the styling is up to you!  

**MUST HAVE**:
* the home/landing page  
* page with form for renters/tenants to fill out  
    * thank-you page
* page for building manager to view all current requests -- sorted by date/time  

see *Figure 1* on the Lab 5 instruction sheet!  

<br>

---
---
### Step 3 [content & coding]:  
Start with the data model -- design & create the database  
* database will only have single table  
    * that uses an integer primary key  
    * uses appropriate data types for the various data fields in the form -- plus the timestamp, and anything else you wanna store in there  
    * use the scripts from the examples in the lecture to create & populate the database with some example entries  
        * so, one script to create the table and populate ("seed") it with at least five entries
        * a separate script to clear it all away  
            * both scripts need to be in your `App_Data` folder, **AND** in your git repo  

<br>
you can create the database using:  
* SQL Server  
* SQL Server Express, or  
* LocalDB  

the first two require separate installation... LocalDB comes with Visual Studio -- **IF** you installed the `data storage and processing workload` when you installed VS! -- and can be accessed through the Server Explorer tab.  

For now, the database will be local to your machine... anyone wanting to replicate your project from your `git` repo would have to manually create the database, run your scripts on it, and edit the connection string.  


<br>

---
---
### Step 4 [more content & coding]:  
Create the `model class` and the `database context class`:
* manually write the model class & the db context class  
    * `model` goes in the models folder  
    * `context` goes in new folder called DAL, for "Data Access Layer"
        * this is a common pattern to use when separating the data layer from your processing layer -- and is also a pattern used in our ProMVC book

<br>

---
---
### Step 5 [yet more content & coding]:  
Connect your MVC app to the database:  add the correct connection string to `Web.config` 

Can your code access the five seeded requests already existing in the database?  

<br>

---
---
### Step 6 [still more content & coding]:  
Create controller & action methods...  

Use the GET-POST redirect pattern for the create functionality (aka POST/REDIRECT/GET)  

for viewing current requests, use what's commonly called the "list view"  

because of Step 7, you are definitely **NOT** using the `Request` object, nor `FormCollection`, to get the form values as you did in hwk_04!  

<br>

---
---
### Step 7 [and STILL more content & coding]:  
create __strongly typed views__  
then write Razor code, to create the UI as you wish  

gotta do at __least__ two pages:  
* the one with the form to fill out & submit 
* and the one to view all requests  
    * put __in a table__, sorted in oldest-first order by timestamp -- to the minute or better  

look & feel of site is up to you!  

you can look at scaffolded examples, but write the views your own self ("for maximum learning & understanding")

<br>

---
---
### Step 8 [testing]:  
demo your full site:  
* fill out the form  
* click button to submit  
    * get taken to "thank you" page  
* view all current requests (including one just entered)  
* make sure validation works!  

it's recommended to make a video showing all this happening!  

<br>

---
---
### Step 9 [portfolio content]:  
gotta have screenshots -OR- video to prove that it's all working as it should be  

as with homework 4, don't include all code, for God's sake -- just the **important** code that **you** write... in snippets with good explanations in between  

you can stop explaining your `git branching` at this point!   [=

<br>

---
---
### Step 10 [turn it in]:  
this was ommitted from, but implied in, the instructions again.   [=  

---
---
---
[back to CS460 page](https://Stormy9.github.io/CS460/ "CS460 main page")   

[back to main page](https://Stormy9.github.io/ "main page")  
