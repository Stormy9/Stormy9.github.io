document.getElementById("convert").addEventListener("click", convert)
    // note how my function name is just plain, no '()'
    // 'convert' is the button itself + name of our function

// note how you have to precede your function name w/'function'
function convert() {  
    // CLEAR OUT ANY PREVIOUS CONVERSIONS/RESPONSES:
    $('#conversion, #list_header, #list_spot').text('');

    //=================================================================
    // THEN GET UNIT VALUE: grams or ounces?
    var unit = $("input:radio[name=g_oz]:checked").val()

    //=================================================================
    // NOW GET USER INPUT: what is the number?
    var input = $("#g_oz").val();
    
    if(isNaN(input) || input < 1) {
        var oops = 'oops! put in a number greater than 0';
        document.getElementById('conversion').innerHTML = oops;
        $('#list_header, #list_spot').hide();
    }
        else {
        //=============================================================
        // NOW DO THE CONVERSION.....
            if(unit == 'grams') {
                var conversion = (input/28.34);
                $('#conversion').text(input + ' gram(s) = ' 
                        + conversion.toPrecision(3) + ' ounces');
                $('#conversion, #list_header, #list_spot').show();
            }
                else if (unit == 'ounces') { // so they picked ounces
                    var conversion = (input*28.34);
                    $('#conversion').text(input + ' ounce(s) = ' 
                        + conversion.toPrecision(5) + ' grams');
                    $('#conversion, #list_header, #list_spot').show();
                }
                    else {
                    $('#conversion').text("oops! click 'grams' or 'ounces'");
                    $('#list_header, #list_spot').hide();
                    }
        }
    //=================================================================
    // STICK A LIST IN THERE OUTTA NOWHERE
    $('#list_header').html('how much of a serving is that?');
    
    //=================================================================
    // trying this:
    if(unit == 'grams') {
        var fruit_veggie = 85;      var whole_grain = 16;
        var lean_protein = 113;

        var f_v_svg = input/fruit_veggie;
        var w_g_svg = input/whole_grain;
        var l_p_svg = input/lean_protein;
    }
        else {
            fruit_veggie = 3;       whole_grain = .565;
            lean_protein = 4;

            f_v_svg = input/fruit_veggie;
            w_g_svg = input/whole_grain;
            l_p_svg = input/lean_protein;
        }

    // jQuery:
    var li_01 = $('<li></li>').html(f_v_svg.toPrecision(4) + 
                                    " <b>fruit/veggie</b> serving(s)"); 
        
    var li_02 = $('<li></li>').html(w_g_svg.toPrecision(4) + 
                                " serving(s) of <b>whole grains</b>");

    var li_03 = $('<li></li>').html(l_p_svg.toPrecision(4) + 
                                " serving(s) of <b>lean protein</b>"); 

    $('#list_spot').append(li_01, li_02, li_03); 

        // you can do it like this, too -- 
        // but i couldn't get it to take variable names this way
        var li_03 = $('<li>woof</li>'); 
}

//=====================================================================
// additional function for the reset button
// besides what it does on it's own from html5
document.getElementById("reset").addEventListener("click", reset)

function reset() {
    $('#conversion, #list_header, #list_spot').hide();

    // trying this from my 'GuessingGame' code:
    location.reload(true);
    // b/c after clicking 'reset', things worked fine IF
    // you did everything correctly..... 
    // BUT -- it wouldn't do it's validation thing if
    // you didn't -- if you screwed up the input.....
        // seems I remember something similar was why
        // i put this in 'GuessingGame' too.
    // is there some better way than this??
}
