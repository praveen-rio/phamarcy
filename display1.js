
function flip_display(filter)
{
	console.log(filter.value + " set to " + filter.checked);

	if(filter.checked)
	{
		$("." + filter.value).show();
		// -1 means it show the heading section
		$("#data_count").html($('tr:visible').length - 1);
	}
	else
	{
		$("." + filter.value).hide();
		
		$("#data_count").html($('tr:visible').length - 1);
	}
}