$(document).ready(function () {
    // vars for the entire `document.ready` function
    var baseURL = "https://api.github.com/";
    var per_page = "?per_page=99";      // else you just get 1st 30 repos
    var userName = "stormy9";

    var get_user_json;
    var get_repo_list_json;
    var commit_list_json;

    $('#commit_list_spot').hide();
    //
    //
    //
    //===================================================================================
    // GET USER INFO/DETAILS
    //    this is the call to get a list of all repos for a user:
    //       https://api.github.com/users/Stormy9
    //          this returns a JSON object -- pull properties outta there
    $.ajax({
        url: baseURL + "users/" + userName,
        type: "GET",
        dataType: "json",
        //-------------------------------------------------------------------------------
        success: function (get_user_info) {
            $('#error_msg_spot').hide();

            // assign this response to our variable declared up-top..... 
            //    so => save the whole json response here locally
            get_user_json = get_user_info;

            //---------------------------------------------------------------------------
            // vars to hold user info data.....
            var avatar = get_user_info.avatar_url;
            var user_name = get_user_info.login;
            var bio = get_user_info.bio;
            var affiliation = get_user_info.company;
            var location = get_user_info.location;
            var user_email = get_user_info.email;

            // put those vars into ID card at top.....
            $('#one').html("<img src='" + avatar +
                "' width='90px' height='90px' id='avatar'>");

            $('#two').html("<b>" + user_name +
                "</b>&nbsp;&nbsp;&nbsp;&gt;&gt;&gt;&nbsp;&nbsp;&nbsp;GitHub Repos");

            $('#three').html("'" + bio + "'");
            $('#four').html(affiliation);
            $('#five').html(location);

            // for some reason my email keeps being null, so.....
            $('#six').html("<b>email = </b>" + user_email);

        }, // end of GET USER SUCCESS function 

        //-------------------------------------------------------------------------------
        error: function (xhr) {
            $("#error_msg_spot").text("error getting user details..... " +
                xhr.status + " " + xhr.statusText);

        }, // end of GET USER ERROR function
    }); // end of GET USER AJAX function
    //
    //
    //
    //===================================================================================
    // GET A LIST OF ALL REPOS FOR A GIVEN USER -- then loop thru them 
    //    this is the call to get a list of all repos for a user:
    //       https://api.github.com/users/stormy9/repos
    //          this returns an array of JSON objects
    $.ajax({
        url: baseURL + "users/" + userName + "/repos" + per_page,
        type: "GET",
        dataType: "json",
        //-------------------------------------------------------------------------------
        success: function (get_users_repo_list) {
            $('#error_msg_spot').hide();

            // assign response to our variable declared up-top..... 
            //    so => save the whole json response here locally
            repo_list_json = get_users_repo_list;

            //---------------------------------------------------------------------------
            // loop to pull out data we want for each repo.....
            for (var i = 0; i < repo_list_json.length; i++) {
                // vars to hold data for each repo.....
                var repo_name = repo_list_json[i].name;    // aka 'CS407'
                var repo_url = repo_list_json[i].html_url;
                var last_commit = repo_list_json[i].updated_at;
                var last_commit_f = last_commit.substring(0, 10);
                var updated = repo_list_json[i].updated_at;
                var repo_av = repo_list_json[i].owner.avatar_url;

                // still inside our for-loop.....
                // put the vars we pulled out for each repo in a box.....
                $("#repo_list_spot").append("<div id='repo_box'>" +
                        "<div><img src='" + repo_av +
                                 "' width='45px' height='45px' class='mini_av'>" +

                    "<div class='label'>" + "<a href='" + repo_url +
                            "' target='_blank'>" + repo_name + "</a></div>" +

                    "<div><span class='label'> last updated: </span>" +
                            last_commit_f + "</div>" +
                     "</div>"  );

                $('#repo_list_spot').append($('<div/>',
                    { id:'repo_list_commits_button'+i, text:'commits'}))

            } // end of the for-loop for listing & displaying user's repos.....
            //
            //
            //---------------------------------------------------------------------------
            // GET LIST OF COMMITS FOR THE SPECIFIC REPO BUTTON CLICKED
            //    this is the call to get a list of all repos for a user:
            //       https://api.github.com/repos/Stormy9/name_of_repo/commits
            //          this returns an array of JSON objects
            // >>>>> THE ON(CLICK) FUNCTION => PASS DATA TO THE CLICK HANDLER
            //
            // this loop assigns the correct commit-list url for the clicked repo.....
            for (var i = 0; i < repo_list_json.length; i++) {
                $('#repo_list_commits_button' + i).on('click', 
                    { 'user':repo_list_json[i].owner.login, 'repo':repo_list_json[i].name }, 
                    function (list_repos) {
                    var list_commits_uri = baseURL+"repos/"+list_repos.data.user+"/"
                                            +list_repos.data.repo+"/commits";

                    var this_user = list_repos.data.user;
                    var this_repo = list_repos.data.repo;

                    // testing -- are we getting the correct uri + user & repo here?   
                    //              => yes, it seems we are!!
                    //$('#are_things_returning_right').html("uri: " + list_commits_uri +
                    //                                      "<br>user: " + this_user + 
                    //                                      "<br>repo: " + this_repo)

                    //-------------------------------------------------------------------
                    // remove previous commit list table content (if any)(not headers!)
                    $('tr').remove('.content');   // <= this works!

                    // bring up our table spot & headers for the commit list
                    $('#commit_list_spot').show();

                    //-------------------------------------------------------------------
                    // the AJAX call (inside our on(click) function):
                    $.ajax({
                        url: list_commits_uri,
                        // if you hard-code in a url, like:
                        //   "https://api.github.com/repos/Stormy9/exp/commits"
                        // it works fine..... 
                        // but it does not like my constructed url..... 
                        //    it returns a '409 - Conflict' error.....
                        //      even though the constructed uri returns correctly!!!!!
                        // UPDATE!!!!! >>>>>
                        //    so..... it started working.  huh.  cool!!!!!
                        //    you can put in the constructed uri and confirm the commits
                        //    (ctrl+f 'message' to confirm number of commits on a repo!)
                        type: "GET",
                        dataType: "json",
                        //---------------------------------------------------------------
                        success: function (commits_list_for_a_repo) {
                            $('#error_msg_spot').hide();

                            // assign response to a local variable..... 
                            //    so => save the whole json response here locally
                            commit_list_json = commits_list_for_a_repo;

                            console.log(list_commits_uri);
                            // --------- loop thru commit list -- pull out data ---------
                            for (var i = 0; i < commit_list_json.length; i++) {
                                // vars to hold the data pulled from commit list
                                var sha = commit_list_json[i].sha;
                                var sha_snip = sha.substr(sha.length - 9)
                                var sha_url = commit_list_json[i].html_url;
                                var timestamp = commit_list_json[i].commit.author.date;
                                var committer = commit_list_json[i].commit.author.name;
                                var commit_msg = commit_list_json[i].commit.message;

                                // still in our for-loop.....
                                // add a row to table for each commit w/commit list vars
                                $("#commit_list_table").append("<tr class='content'>" +
                                    "<td>" + this_repo + "</td>" +
                                    "<td><a href='" + sha_url + "' target='blank'>" +
                                    sha_snip + "</a></td>" +
                                    "<td>" + timestamp + "</td>" +
                                    "<td>" + committer + "</td>" +
                                    "<td>" + commit_msg + "</td>" +
                                    "</tr>")

                            } // end of the for-loop for listing the repo's commits.....

                        }, // end of GET COMMIT LIST FOR A REPO SUCCESS function

                        error: function (xhr) {
                            $("#error_msg_spot").text("error getting commits..... " +
                                xhr.status + " " + xhr.statusText);
                            console.log(list_commits_uri);

                        }, // end of GET COMMIT LIST FOR A REPO ERROR function

                    }); // end of LIST COMMITS ON A REPO ajax function 

                }); // end on(click) list_repos function

            } // end for-loop

        }, // end of GET REPO LIST SUCCESS function 

        error: function (xhr) {
            $("#error_msg_spot").text("error getting repo list..... " +
                xhr.status + " " + xhr.statusText);

        }, // end of GET REPO LIST ERROR function

    }); // end of GET REPO LIST FOR A USER AJAX function
    //===================================================================================
}); // end of entire jQuery DOCUMENT READY function!!!!!
