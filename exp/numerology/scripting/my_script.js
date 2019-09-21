document.getElementById("click_me").addEventListener("click", life_path);

function life_path() {
    // clear out previous results:
    $('#list_header, #list_spot').text('');
    // if you include #list_holder, nothing *ever* shows up!

    var input = document.getElementById('enter_bday').value;
    var array = Array.from(input.toString()).map(Number);

    if(isNaN(input) || array.length < 8) {
        var oops = 'oops! enter your b-day like:  01031999';
        document.getElementById('life_path_number').innerHTML = oops;
        // you don't want this popping up on an error!
        $('#list_header, #list_holder, #list_spot').hide();
    }
    else {
        var sum = array.reduce(add_up);
        //---first----------------------------------------
        if(sum > 9) {
            array = Array.from(sum.toString()).map(Number);
            var sum = array.reduce(add_up);
        }
        //---second--------------------------------------
        if(sum > 9) {
            array = Array.from(sum.toString()).map(Number);
            var sum = array.reduce(add_up);
        }
        //---third---------------------------------------
        if(sum > 9) {
            array = Array.from(sum.toString()).map(Number);
            var sum = array.reduce(add_up);
        }
        //---fourth(justInCase)-------------------------
        if(sum > 9) {
            array = Array.from(sum.toString()).map(Number);
            var sum = array.reduce(add_up);
        }
        //------------------------------------------------
        //------------------------------------------------
        // why does this part throw this error:
        // TypeError: Cannot set property 'innerHTML' of null
        // at HTMLButtonElement.life_path (/my_script.js:53:63)
        //
        //var msg = "your life-path number are:  ";
        //document.getElementById("result").innerHTML = msg;
        //
        // doesn't work to put it up-top, either!
        // it's *gotta* be b/c of the <p> & <span> thing...
        // yeah that actually makes some sense.....
        //-------------------------------------------------
        //-------------------------------------------------
        document.getElementById("life_path_number").innerHTML = sum;
        $('#life_path_number, #list_header, #list_holder, #list_spot').show();
        // doesn't work to put this here, either -- 
        // no error, but no sum, either!
        //document.getElementById("result").innerHTML = msg;
    }

    // bring in the traits-by-number + build list:
    document.getElementById("list_header").innerHTML = "key traits of a " + sum + " life path:"

    var li_01 = $('<li></li>').text('sweet'); 
    
    var li_02 = $('<li></li>').text('funny');

  	var li_03 = $('<li></li>').text('loveable');

    var li_04 = $('<li></li>').text('really sharp');

    var li_05 = $('<li></li>').text('non-obtuse')

        $('#list_spot').append(li_01, li_02, li_03, li_04, li_05); 
}
// end life_path function
//========================================================
// auxiliary function:
function add_up(total, value) {
  return total + value;
}
//=======================================================
document.getElementById("reset").addEventListener("click", reset)

function reset() {
    // in order to clear out previous input in text-box,
    // the text-box & buttons have to be inside of
    // a <form></form> element

    // plus we wanna do this, too:
    $('#list_header, #list_spot').text('');
    $('#life_path_number, #list_header, #list_spot').hide();
}
