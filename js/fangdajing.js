function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}

	function scale(evt){
		let left1 = evt.pageX-$("#bigBox").offsetLeft-$("#mirrorBox").offsetWidth/2;
		let top1 = evt.pageY-$("#bigBox").offsetTop-$("#mirrorBox").offsetHeight/2;

		if(left1<0){
			left1=0;
		}else if(left1>$("#bigBox").offsetWidth-$("#mirrorBox").offsetWidth){
			left1=$("#bigBox").offsetWidth-$("#mirrorBox").offsetWidth;
		}
		if(top1<0){
			top1=0;
		}else if(top1>$("#bigBox").offsetHeight-$("#mirrorBox").offsetHeight){
			top1=$("#bigBox").offsetHeight-$("#mirrorBox").offsetHeight;
		}

		$("#mirrorBox").style.left = left1+"px";
		$("#mirrorBox").style.top = top1+"px";
		$("#showBox").style.backgroundPosition = (-2*left1)+"px "+(-2*top1)+"px";
	}