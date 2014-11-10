$(function(){
	var gamertag = $('#member-gamertag').text();
	if (gamertag.length){
		setTimeout(function(){
			var dvr_html = '<div class="row">';
	    $.get('https://agile-mesa-1935.herokuapp.com/xbox_dvr/videos', {gamertag: gamertag}, function(resp){
        $.each(resp.videos, function(index, vid){
          dvr_html += '<div class="col-xs-6 col-md-3"><a href="#" class="thumbnail"><img data-src="'+vid.Thumbnail+'/100%x100%" alt="..."></a></div>'
        });
        dvr_html += '</div>'
        $('div.dvr').append(dvr_html);
	    });
		}, 1000);
	}
});