document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        var header = document.getElementById('header')
        if(header.classList.contains('opacity')) {
            header.classList.remove('opacity')
        }
        if(!preloader.classList.contains('done'))
        {
            preloader.classList.add('done')
        } 
    }, 1000)
}

document.body.onloadstart = function() {
}