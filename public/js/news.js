$(document).ready(function() {
    // hide extra news data
    $newsData = $('.news .news-data');

    for (var i=0; i < $newsData.length; i++) {
        if (i > 5) {
            $($newsData[i]).hide();
        }
    }

    // on popup open event
    $('.comments').on('click', function() {
        $countDataComments = $(this).find('.align-icon').children().text();
        $dataComments      = $(this).closest('div').find('.comment-data');
        $dataFigure        = $(this).closest('div').find('figure');
        $popup             = $('.popup');
        $popupFigure       = $popup.find('figure');
        $popupFormLabel    = $popup.find('.comments-form form label');
        $popupComments     = $popup.find('.comments-show');

        if ($(this).hasClass('selected')) {
                deselect($(this));               
        } else {
            $(this).addClass('selected');
            $popup.add('.fader').slideFadeToggle();
        }
        
        // Appending comments data to popup
        $popupFigure.prepend($dataFigure.children().clone()).html();
        $popupFormLabel.append('<strong>Commentaires (' + $countDataComments + ')</strong>');
        $popupComments.prepend(function() {
            var comments = '';
            for (var i = 0; i < $countDataComments; i++) {
                if (i < 2) {
                    comments += $dataComments.show()[0].outerHTML;
                } else {
                    comments += $dataComments.hide()[0].outerHTML;
                }
            }
            return comments;
        });
        return false;
    });
    
    // on popup close event 
    $('.close').on('click', function() {
        $popup = $(this).closest('.popup');
        deselect($('#comments'));

        // Removing comments data from popup
        $popup.find('figure').children().remove();
        $popup.find('.comments-form label').children().remove();
        $popup.find('.comment-data').remove();

        return false;
    });

    // on load more comments btn
    $('.popup .btn.btn-secondary').on('click', function() {
        showData(2, $(this));
    })

    $('.news .btn.btn-secondary').on('click', function() {
        showData(1, $(this).parent().children('div').children('div'));
    })
});

// Show data
function showData(countData, $element) {
    $data = $element.parent().children('div');
    var count = 0;

    $data.each(function(index) {
        
        if ($(this).css('display') == 'none' && count < countData) { 
            $(this).show('slow');
            
            count++;
        }
    });
}

// function hide popup
function deselect(e) {
    $('.popup').add('.fader').slideFadeToggle(function() {
        e.removeClass('selected');
    });   
}

// Animate popup fade effect
$.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};