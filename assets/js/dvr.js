$(function(){
	$('#member-gamertag').load(function(){
		var gamertag = $(this).text();
		if (gamertag.length){
			setTimeout(function(){
				var dvr_html = '<div class="row">';
		    $.get('https://agile-mesa-1935.herokuapp.com/xbox_dvr/videos', {gamertag: gamertag}, function(resp){
	        $.each(resp.videos, function(index, vid){
	          dvr_html += [
	          	'<div class="col-xs-6 col-md-4">',
	          	'  <div class="thumbnail">',
	          	'    <a href="#" data-uri="'+vid.ClipUri+'" class="vid-modal-trigger" title="Click to Watch">',
	          	'      <img src="'+vid.Thumbnail+'" alt="...">',
	          	'    </a>',
	          	'    <div class="caption">',
	          	'      <p><b>Game:</b> '+vid.TitleName+' - '+vid.UploadTime+'</p>',
	          	'    </div>',
	          	'  </div>',
	          	'</div>'
	          ].join("\n");
	        });
	        dvr_html += '</div>';
	        $('div.dvr').append(dvr_html);
		    });
			}, 500);

			$('div.dvr').on('click', 'a.vid-modal-trigger', function(e){
				e.preventDefault();
				$('#videoModal').find('div.modal-body').html('<video controls="" autoplay="" name="media" style="width:100%;"><source src="'+$(this).data('uri')+'" type="video/mp4"></video>');
				$('#videoModal').modal({keyboard: false});
			});
		}
	});
});