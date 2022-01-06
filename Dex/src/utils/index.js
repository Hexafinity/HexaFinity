export function preloader () {
    var preloaderEl = document.querySelector(".preloader");

    if(preloaderEl) {
        var progressEl = preloaderEl.querySelector(".progress");
        var progress = 1;
        var animationFinished = 0;
        var siteLoaded = 0;
    
        setTimeout(
            ( function() {
                if (siteLoaded) {
                    setProgress(100);
                    setTimeout((function() { hidePreloader() }),300);
                } else {
                    animationFinished = 1;
                }
            }), 2400);
    
        var progressTimer = setInterval((
            function() {
                setProgress(++progress);
                9 === progress && clearInterval(progressTimer)
        }), 1e3);
    }
    
    function hidePreloader() {
        preloaderEl.parentNode.removeChild(preloaderEl)
    }
    
    function setProgress(e) {
        progressEl.style.width=10*e+"%"
    }
    
    window.onload = function() {
        if (animationFinished) {
            clearInterval(progressTimer);
            setProgress(100);
            setTimeout((function(){ hidePreloader() }),300);
        } else {
            siteLoaded = 1;
        }
    }
}

export function scrollToHandler (e) {
    let offset = document.getElementById( 'add-product' ).getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo( { top: offset, behavior: 'smooth' } );
}