$(function(){
	var gamertag = $('#member-gamertag').text();
	if (gamertag.length){
		setTimeout(function(){
			var dvr_html = '';
	    $.get('https://agile-mesa-1935.herokuapp.com/xbox_dvr/videos', {gamertag: gamertag}, function(resp){
        $.each(resp.videos, function(vid){
          dvr_html += '<div><a href="'+vid['ClipUri']+'"><img src="'+vid.['Preview']+'"/></a></div>'
        });
        $('div.dvr').append(dvr_html);
	    });
		}, 1000);
	}
});