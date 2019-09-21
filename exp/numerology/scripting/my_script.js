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

    var li_01, li_02, li_03, li_04, li_05;
    switch(sum) {
        case 1:
            li_01 = $('<li></li>').text('sweet'); 
            li_02 = $('<li></li>').text('funny');
  	        li_03 = $('<li></li>').text('loveable');
            li_04 = $('<li></li>').text('super sharp');
            li_05 = $('<li></li>').text('occasionally obtuse');
            break;
        case 2:
            li_01 = $('<li></li>').text('two'); 
            li_02 = $('<li></li>').text('two');
  	        li_03 = $('<li></li>').text('two');
            li_04 = $('<li></li>').text('two');
            li_05 = $('<li></li>').text('two');
            break;
        case 3:
            li_01 = $('<li></li>').text('three'); 
            li_02 = $('<li></li>').text('three');
  	        li_03 = $('<li></li>').text('three');
            li_04 = $('<li></li>').text('three');
            li_05 = $('<li></li>').text('three');
            break;
        case 4:
            li_01 = $('<li></li>').text('four'); 
            li_02 = $('<li></li>').text('four');
  	        li_03 = $('<li></li>').text('four');
            li_04 = $('<li></li>').text('four');
            li_05 = $('<li></li>').text('four');
            break;
        case 5:
            li_01 = $('<li></li>').text('five'); 
            li_02 = $('<li></li>').text('five');
  	        li_03 = $('<li></li>').text('five');
            li_04 = $('<li></li>').text('five');
            li_05 = $('<li></li>').text('five');
            break;
        case 6:
            li_01 = $('<li></li>').text('six'); 
            li_02 = $('<li></li>').text('six');
  	        li_03 = $('<li></li>').text('six');
            li_04 = $('<li></li>').text('six');
            li_05 = $('<li></li>').text('six');
            break;
        case 7:
            li_01 = $('<li></li>').text('seven'); 
            li_02 = $('<li></li>').text('seven');
  	        li_03 = $('<li></li>').text('seven');
            li_04 = $('<li></li>').text('seven');
            li_05 = $('<li></li>').text('seven');
            break;
        case 8:
            li_01 = $('<li></li>').text('eight'); 
            li_02 = $('<li></li>').text('eight');
  	        li_03 = $('<li></li>').text('eight');
            li_04 = $('<li></li>').text('eight');
            li_05 = $('<li></li>').text('eight');
            break;
        case 9:
            li_01 = $('<li></li>').text('nine'); 
            li_02 = $('<li></li>').text('nine');
  	        li_03 = $('<li></li>').text('nine');
            li_04 = $('<li></li>').text('nine');
            li_05 = $('<li></li>').text('nine');
            break;
        default:
            li_01 = $('<li></li>').text('apparently there was some mistake somewhere');
    }
    $('#list_spot').append(li_01, li_02, li_03, li_04, li_05); 
}
// end life_path function
//========================================================
// auxiliary function:
function add_up(total, value) {
  return total + value;
}
//=======================================================
// reset function:
document.getElementById("reset").addEventListener("click", reset)

function reset() {
    // in order to clear out previous input from the text-box,
    // the text-box & buttons have to be inside of
    // a <form></form> element

    // plus we wanna do this, too:
    $('#list_header, #list_spot').text('');
    $('#life_path_number, #list_header, #list_spot').hide();

    // trying this from my 'GuessingGame' code:
    location.reload(true);
    // b/c after clicking 'reset', things worked fine IF
    // you did everything correctly..... 
    // BUT -- it wouldn't do it's validation thing (once
    // 'reset' was clicked) if you didn't.....
        // just like with 'g_oz' & 'GuessingGame'
    // there's gotta be a better way than this though?
}
