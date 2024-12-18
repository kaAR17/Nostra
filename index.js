
        var promo=document.getElementById("promo")
        var closebutton=document.getElementById("closebutton")
        closebutton.addEventListener("click",function(){
            promo.style.display="none";
        })
        var sidenav=document.getElementById("sidenav")
        var closenav=document.getElementById("closenav")
        var menuicon=document.getElementById("menuicon")
        closenav.addEventListener("click",function(){
            sidenav.style.left="-50%";
        })
        menuicon.addEventListener("click",function(){
            sidenav.style.left="0";
        })
            
        var slides = document.querySelector('.slides');
        var images = document.querySelectorAll('img');
        var leftButton = document.getElementById('leftButton');
        var rightButton = document.getElementById('rightButton');
        var count = 0;
    
        rightButton.addEventListener('click', function() {
            count++;
            if (count >= images.length) {
                count = 0;
            }
            slides.style.transform = 'translateX(' + (-count * 1250) + 'px)';
        });
    
        leftButton.addEventListener('click', function() {
            count--;
            if (count < 0) {
                count = images.length - 1;
            }
            slides.style.transform = 'translateX(' + (-count * 1250) + 'px)';
        });

    

     

    