jQuery(document).ready(function(){

    jQuery(".website-url").on("input", function(){
        jQuery('#live-website-url').attr('src', jQuery(this).val());
    });
    
    jQuery('#desktop').on('click', function(){
        jQuery(this).closest('ul').find('li').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.liveframe').attr('class', 'liveframe');
        jQuery('.iframe-wrap').attr('class', 'iframe-wrap wrap-desktop');
        jQuery('iframe').attr('class', 'desktop');
        jQuery('iframe').css('left', '0px');
    });
    jQuery('#tablet-landscape').on('click', function(){
        jQuery(this).closest('ul').find('li').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.liveframe').attr('class', 'liveframe-color');
        jQuery('.iframe-wrap').attr('class', 'iframe-wrap wrap-pad-land');
        jQuery('iframe').attr('class', 'pad-land');
        var width = jQuery('.iframe-wrap').width();
        var tab = width/2 - 540.5;
        jQuery('iframe').css('left', tab);
    });
    jQuery('#tablet-portrait').on('click', function(){
        jQuery(this).closest('ul').find('li').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.liveframe').attr('class', 'liveframe-color');
        jQuery('iframe').attr('class', 'pad-port');
        jQuery('.iframe-wrap').attr('class', 'iframe-wrap wrap-pad-port');
        var width = jQuery('.iframe-wrap').width();
        var tab = width/2 - 391.5;
        jQuery('iframe').css('left', tab);
    });
    jQuery('#iphone-landscape').on('click', function(){
        jQuery(this).closest('ul').find('li').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.liveframe').attr('class', 'liveframe-color');
        jQuery('iframe').attr('class', 'phone-land');
        jQuery('.iframe-wrap').attr('class', 'iframe-wrap wrap-phone-land');
        var width = jQuery('.iframe-wrap').width();
        var tab = width/2 - 246.5;
        jQuery('iframe').css('left', tab);
    });
    jQuery('#iphone-portrait').on('click', function(){
        jQuery(this).closest('ul').find('li').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.liveframe').attr('class', 'liveframe-color');
        jQuery('iframe').attr('class', 'phone-port');
        jQuery('.iframe-wrap').attr('class', 'iframe-wrap wrap-phone-port');
        var width = jQuery('.iframe-wrap').width();
        var tab = width/2 - 165.5;
        jQuery('iframe').css('left', tab);
    });
    
});
