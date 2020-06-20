// the script to handle the Oregon Wilderness Slideshow... 

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("wildernessslides");
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";       // what is this doing\what is it for?
        }
        slideIndex++;

        if (slideIndex > slides.length) {slideIndex = 1}    // and why assign a value to slideIndex?
            slides[slideIndex-1].style.display = "block"; 
            setTimeout(showSlides, 9000); // Change image every 9 seconds
        }
        
/*--------------------------- this one didn't work... (: ---------------------------
    <img id="wilderness" src="" alt="Oregon Wilderness">    // this of course would go in the HTML...
    
    <script>
        var wildernessArray = ["common/art/backpacking_05.jpg", "common/art/backpacking_06.jpg", "common/art/backpacking_07.jpg", "common/art/backpacking_08.jpg", "common/art/backpacking_09.jpg", "common/art/backpacking_10.jpg"];     
        var wildernessCounter = 0;
        
        function wildernessRotate () {
            var wildernessObject = document.getElementById('wilderness');
            wildernessObject.src = wildernessArray[wildernessCounter];
            ++wildernessCounter;
            if (wildernessCounter == 6) wildernessCounter = 0;
        }
        
        function startWilderness() {
            document.getElementById('wilderness').src=wildernessArray[5];
            setInterval('wildernessRotate()', 3000);
        }
    </script>            
-----------------------------------------------------------------------------------*/