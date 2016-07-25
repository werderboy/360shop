$(function(){
	var closebtn=$('.closebtn');
	var downloadbox=$('.downloadbox');
	closebtn.click(function(){
		downloadbox.css({display:'none'})
	})
	//返回顶部
	$('#back-to-top').click(function(){
		obj=document.body.scrollTop?document.body:document.documentElement;
		animate(obj,{scrollTop:0})
	})
})


