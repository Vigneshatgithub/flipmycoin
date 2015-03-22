$(document).ready(function(){
var msg="What  if  ";
var info=[
			"this is an attempt to simulate coin toss. when the world of internet has grown big enough to help you buy gadgets online, why not we make it simple here.",
			"this would not be your first time to hear this. you can't wait to watch the coin in air before the cricket match begins. also, you can't stay unbaffled ever! ",
			"there is no little. there is just more. note that there is no charge for stupidity. so dig into and tilt it. you won't get hurt. ",
			"we dont want to. but if you are still certain, just close the browser window. but do peep in tomorrow."
		 ]
$(".siteinfo").mouseover(function(){
			$("div.expandbottom").css("visibility","visible");
			
			//alert(this.id);			
			if(this.id=="info1")
			{
			 //document.getElementById("siteinfotxt").innerHTML=info1;			 
			 assignContent("siteinfotxt",info[0]);
			}
			if(this.id=="info2")
			{
			 //document.getElementById("siteinfotxt").innerHTML=info2;
			 assignContent("siteinfotxt",info[1]);
			}
			if(this.id=="info3")
			{
			 //document.getElementById("siteinfotxt").innerHTML=info3;
			 assignContent("siteinfotxt",info[2]);
			}
			if(this.id=="info4")
			{
			 //document.getElementById("siteinfotxt").innerHTML=info4;
			 assignContent("siteinfotxt",info[3]);
			}
		});
		
		$(".siteinfo").mouseout(function(){
			$("div.expandbottom").css("visibility","hidden");
		});

$("#scr1").click(function(){
		var mindtext=$("#mindtext").val();
	//	alert(mindtext);
		if(mindtext!="")
		{
			$("div.ht").css("display","block");
			$("div.dynamic").css("display","none");
			//$("div.design-straight").css("visibility","hidden");
			//document.getElementById("dis2").innerHTML=mindtext;
			assignContent("dis2",mindtext);
		}
	});

$("#chead").click(function(){    		
	//$("div.design-straight").css("visibility","visible");
    $("div.httext").css("display","block");
	$('#httext').focus();
    $("div.ht").css("display","none");
	//document.getElementById("userchosen").innerHTML=msg+"Heads";
	//document.getElementById("ucid").value="Heads";
	//document.getElementById("dis3").innerHTML="Heads";
	assignContent("userchosen",msg+"Heads");
	assignContent("ucid","Heads");
	assignContent("dis3","Heads");
  });

$("#ctail").click(function(){    	
	//$("div.design-straight").css("visibility","visible");
    $("div.httext").css("display","block");    
	$('#httext').focus();
    $("div.ht").css("display","none");
	//document.getElementById("userchosen").innerHTML=msg+"Tails";
	//document.getElementById("ucid").value="Tails";
	//document.getElementById("dis3").innerHTML="Tails";
	assignContent("userchosen",msg+"Tails");
	assignContent("ucid","Tails");
	assignContent("dis3","Tails");
  });

$("#clickable").click(function(){    
    $("div.httext").css("display","none");
    $("div.ht").css("display","block");	
    //$("div.design-straight").css("visibility","hidden");    
  });

$("#scr2").click(function(){
var httext=$("#httext").val();
	if(httext!="")
	{
		$("div.intheair").css("display","block");
		$("div.httext").css("display","none");
		//$("div.design-straight").css("visibility","hidden");
		//document.getElementById("dis4").innerHTML=httext;
		assignContent("dis4",httext);
	}
});

var rand;
$("div.intheair").click(function(){	
	$("div.intheair").css("display","none");
	//$("div.design-straight").css("visibility","visible");	
	$("div.event").css("display","block");
	rand=Math.floor(Math.random()*2);	
	//alert(rand);
	if(rand==0)
	{
		//alert("inside 0");
		//document.getElementById("dis1").innerHTML="Heads";
		//alert(document.getElementById("dis1").innerHTML);
		assignContent("dis1","Heads");
	}
	else
	{
		//alert("inside 1");
		//document.getElementById("dis1").innerHTML="Tails";
		assignContent("dis1","Tails");
	}	
	//document.getElementById("dis2").innerHTML=mindtext;
});

$("#oncemore").click(function(){
		//unset contents
		
		//alert($("#mindtext").val());
		$("#mindtext").val("");
		$("#httext").val("");
		$("#dis2").val("");
		$("#userchosen").val("");
		$("#ucid").val("");
		$("#dis3").val("");
		$("#dis4").val("");
		$("#dis1").val("");
		/*
		$("#mindtext").html("");
		$("#dis2").html("");
		$("#userchosen").html("");
		$("#ucid").html("");
		$("#dis3").html("");
		$("#dis4").html("");
		$("#dis1").html("");
		*/
		mindtext="";
		httext="";
		
		//alert($("#mindtext").val());
		//unset contents
		
		//reload
		$("div.event").css("display","none");
		$("div.dynamic").css("display","block");
		$('#mindtext').focus();
		
});

function assignContent(id,data)
{
id='#'+id;
$(id).html(data);
}

});
