$(function(){
	var gamertag = $('#member-gamertag').text();
	var dvr_html = '';
	setTimeout(function(){
	    $.get('https://agile-mesa-1935.herokuapp.com/xbox_dvr/videos', {gamertag: gamertag}, function(resp){
	        resp.videos.each(function(vid){
	            dvr_html += '<div><a href="'+vid.ClipUri+'"><img src="'+vid.Preview+'"/></a></div>'
	        });
	        $('div.dvr').append(dvr_html);
	    });
	}, 1000);
});