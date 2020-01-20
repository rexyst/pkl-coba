$(document).ready(function(){
    $("a").on('click', function(event) {
        
        if (this.hash !== "") {
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                
                window.location.hash = hash;
            });
        }
    });
});

// $(document).ready(function(){
//     $("a").on('click', function(event) {
//         if (this.hash !== "") {
//             event.preventDefault();
            
//             if (this.hash == 'menu-mobile') {
//                 menuClick();
//             }
//         }
//     });
// });

function menuClick() {
    var subMobile = document.getElementById('sub-nav-mobile');
    
    if (subMobile.style.display=='none') {
        subMobile.style.display='block'
    } else {
        subMobile.style.display = 'none';
    }
    
}

function topClick() {
    var hash = 'home';

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){
        window.location.hash = hash;
    });
}