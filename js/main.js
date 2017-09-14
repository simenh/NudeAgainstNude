document.getElementById('shareBtn').onclick = function() {
    FB.ui({
        method: 'share',
        mobile_iframe: true,
        href: 'http://nudeagainstnude.com/',
    }, function(response){});
}
