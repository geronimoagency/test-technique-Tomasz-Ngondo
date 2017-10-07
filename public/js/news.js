$(document).ready(function() {
    // on open comments
    $('.comments').on('click', function() {
        if ($(this).hasClass('selected')) {
                deselect($(this));               
        } else {
            $(this).addClass('selected');
            $('.popup').add('.fader').slideFadeToggle();
        }
        
        $countComments = $(this).find('.align-icon').children().text();
        $('.popup').find('figure').prepend($(this).closest('div').find('figure').children().clone()).html();
        $('.popup').find('.post-comment form label').append('<strong>Commentaires (' + $countComments + ')</strong>');

        $comment = $(this).closest('div').find('.read-comments');
        
        $('.popup .div-comments').prepend(function() {
            var comments = '';
            
            for (var i = 0; i < $countComments; i++) {
                if (i < 2) {
                    comments += $comment.show()[0].outerHTML;
                } else {
                    comments += $comment.hide()[0].outerHTML;
                }
            }
            return comments;
        });
        
        return false;
    });
    
    // on load more comments
    $('.popup .btn.btn-secondary').on('click', function() {
        $allComments = $(this).closest('.div-comments').children('.read-comments');
        var selectedComments = '';
        var count = 0;

        $allComments.each(function(index) {
            if ($(this).css('display') == 'none' && count < 2) {
                $(this).show('slow');
                count++;
            }
        });
    })
    
    // on close comments
    $('.close').on('click', function() {
        deselect($('#comments'));

        $(this).closest('.popup').find('figure').children().remove();
        $(this).closest('.popup').find('.post-comment label').children().remove();
        $(this).closest('.popup').find('.read-comments').remove();

        return false;
    });
});

function deselect(e) {
    $('.popup').add('.fader').slideFadeToggle(function() {
        e.removeClass('selected');
    });   
}

$.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};