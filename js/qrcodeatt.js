$(function(){
	requestAttendance();
});


function LoadQR(s){
	$(".cover").hide();
	showLoop(s);
	qrInterVal(s);
}

var qrInterVal=function(x){
	setInterval(function(){
		showLoop(x)
	},6000);
};

function showLoop(i){
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth()+1;
	var date = today.getDate();
	var hour = today.getHours();
	var minute =today.getMinutes();
	var second = today.getSeconds();
	//console.log(today);
	var tstamp = new Date().getTime();
	tstamp = parseInt(tstamp)/1000;
	var stime = new Date((parseInt(tstamp)+parseInt(i))*1000);
	var syear = stime.getFullYear();
	var smonth = stime.getMonth()+1;
	var sdate = stime.getDate();
	var shour = stime.getHours();
	var sminute =stime.getMinutes();
	if(month<10){
		month='0'+month;
	}
	if(date<10){
		date='0'+date;
	}
	if(hour<10){
		hour='0'+hour;
	};
	if(minute<10){
		minute='0'+minute;
	};
	if(second<10){
		second='0'+second;
	};
	document.getElementById('time').innerHTML = "当前时间："+syear + "年" + smonth + "月" + sdate +"日 " + shour + "分" + sminute+"时" + second + "秒";
	
	var dt = year+''+month+''+date;
	//console.log(dt);
	
	var rd = getRandom(999);
	if(10 > parseInt(rd)){
		rd = "00"+rd;
	}else if(100 > parseInt(rd)){
		rd = "0"+rd;
	}else{
		rd = ""+rd;
	}
	//console.log(rd);
	//console.log(rd+'|'+parseInt(tstamp)+'|'+i+'|'+parseInt(dt));
	var str = '{"question":"app_sweep","qcode":"@'+(rd+(parseInt(tstamp)+parseInt(i))*parseInt(dt))+'"}';
	//console.log(str);
	$('#qrcodeimg').empty();
	$('#qrcodeimg').qrcode({
		text:str,
		width:742,
		height:652
	});
}

function getRandom(n){
	return Math.floor(Math.random()*n+1);
}
