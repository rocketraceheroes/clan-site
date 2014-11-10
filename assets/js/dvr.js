$(function(){
	var gamertag = $('#member-gamertag').text();
	if (gamertag.length){
		setTimeout(function(){
			var dvr_html = '<div class="row">';
	    $.get('https://agile-mesa-1935.herokuapp.com/xbox_dvr/videos', {gamertag: gamertag}, function(resp){
        $.each(resp.videos, function(index, vid){
          dvr_html += [
          	'<div class="col-xs-6 col-md-4">',
          	'  <div class="thumbnail">',
          	'    <a href="#" title="Click to Watch">',
          	'      <img src="'+vid.Thumbnail+'" alt="...">',
          	'    </a>',
          	'    <div class="caption">',
          	'      <p><b>Game:</b> '+vid.TitleName+' - '+vid.UploadTime+'</p>',
          	'    </div>',
          	'  </div>',
          	'</div>'
          ].join("\n");
        });
        dvr_html += '</div>'
        $('div.dvr').append(dvr_html);
	    });
		}, 1000);
	}
});