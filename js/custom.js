/*Remeber to include the library cookie js, to get this function working*/

if (!Cookies.get('age_verification')) {
        $('.age-verification-overlay').css('display','block');
        // remember to set none in css
    }

        jQuery('.age-verification-btn-yes').on('click', function(e) {
        e.preventDefault();
            Cookies.set('age_verification', 1, {expires: 30});
                $('.age-verification-overlay').css('display','none');
    
});
    
