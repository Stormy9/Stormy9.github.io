// we don't want this showing right away.....
// and to separately control what it *does* say,
// when it *does* show!
$('#result').hide();

document.getElementById("click_me").addEventListener("click", life_path);

function life_path() {
    // clear out previous results -- o/w they just stack up!
    $('#list_header, #list_spot').text('');
    // if you include #list_holder, nothing *ever* shows up!

    var input = document.getElementById('enter_bday').value;
    var array = Array.from(input.toString()).map(Number);

    if(isNaN(input) || array.length != 8) {
        var oops = 'oops! enter your b-day like this:  01031999';
        $('#result').show();
        document.getElementById('result').innerHTML = oops;
        $('#result').css({"color": "teal", "font-weight": "bold"});
        // you don't want this popping up on a user-input error!
        $('#list_header, #list_holder, #list_spot').hide();
    }
    //-----------------------------------------------------------
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
        //----------------------------------------------------
        $('#explanation').hide();
        $('#result, #life_path_number, #list_header, #list_holder, #list_spot').show();
        $('#result').css("color", "#1c0d72");
        var msg = "your life-path number is:  ";
        document.getElementById("result").innerHTML = 
                    msg + "<span id='life_path_number'></span>";
        document.getElementById("life_path_number").innerHTML = sum;
    }
    //----------------------------------------------------------
    // bring in the traits-by-number + build list:
    document.getElementById("list_header").innerHTML = 
                    "key traits of a '" + sum + "' life path:"

    var li_01, li_02, li_03, li_04, li_05, li_06;
    switch(sum) {
        case 1:
            li_01 = $('<li></li>').text('one'); 
            li_02 = $('<li></li>').text('one');
  	        li_03 = $('<li></li>').text('one');
            li_04 = $('<li></li>').text('one');
            li_05 = $('<li></li>').text('one');
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
            li_06 = $('<li></li>').text('four');
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
    $('#list_spot').append(li_01, li_02, li_03, li_04, li_05, li_06); 
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
    // in order to clear out previous input in text-box,
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
