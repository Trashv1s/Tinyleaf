jQuery(function($){ // use jQuery code inside this to avoid "$ is not defined" error
	$('.loadmore-button').click(function(){
 
		var button = $(this),
		    data = {
			'action': 'loadmore',
			'query': loadmore_params.posts, // that's how we get params from wp_localize_script() function
			'page' : loadmore_params.current_page
		};
 
		$.ajax({ 
			url : loadmore_params.ajaxurl, // AJAX handler
			data : data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				button.text(loadmore_params.loading_label); 
			},
			success : function( data ){
				if( data ) { 
					$('.work-items').append(data);
					button.text(loadmore_params.load_more_label); 
					loadmore_params.current_page++;
 					
					if ( loadmore_params.current_page == loadmore_params.max_page ) {
						$('.loadmore-wrapper').remove(); // if last page, remove the button
					}
				} else {
					$('.loadmore-wrapper').remove(); // if no data, remove the button as well
				}
			}
		});
	});
});