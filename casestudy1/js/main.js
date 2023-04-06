$(function(){
	$(" #gnb > ul > li ").hover(
		function(){
			$("#gnb > ul").addClass("active");
		},
		function(){
			$("#gnb > ul").removeClass("active");
		}
	);


	let pageN=0;
	
	$(".keyvisual li").eq(0).addClass("active");

	$(".right").click(function(e){
		e.preventDefault();

		if(pageN < 3){
			pageN=pageN+1;
		}
		else{
			pageN=0;
		}

		$(".keyvisual li").removeClass("active");
		$(".keyvisual li").eq(pageN).addClass("active");
		
	});
	$(".left").click(function(e){
		e.preventDefault();

		if(pageN > 0){
			pageN=pageN-1;
		}
		else{
			pageN=3;
		}

		$(".keyvisual li").removeClass("active");
		$(".keyvisual li").eq(pageN).addClass("active")
	});
});