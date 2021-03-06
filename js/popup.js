jQuery(document).ready(function () {
	var tabId="";
	chrome.tabs.query({active : true, currentWindow: true}, function (tabs) {
	    //document.getElementById("pdurl").value = tabs[0].url;
	    console.log(tabs[0].url);
	    if(tabs[0].url=="https://ceac.state.gov/GenNIV/General/complete/complete_personal.aspx?node=Personal1"){
	    	$("#submit_container").show();
	    	tabId = tabs[0].id;
	    }
			if(tabs[0].url.indexOf("ceac.state.gov/GenNIV")!=-1){
				var missing_data = JSON.parse(localStorage.getItem("missing_data"));
				if(missing_data){
					if(missing_data.length){
					 $("#tbl_results tbody").empty();
					 for(var i in missing_data){
						 var row = $('<tr><td class="w-5">'+missing_data[i].interaction+'</td><td class="w-5">'+missing_data[i].value+'</td></tr>');
						$("#tbl_results tbody").append(row);  
					 }
					 $("#submit_container").show();
					 $("div.container").show();
					}else {
					 $("#tbl_results tbody").empty();
					 var row = $('<span style="text-align:center">There is no missing results.</span>');
					 $("#tbl_results tbody").append(row);
					 $("div.container").show();
					} 
				}	
			}
	});
	chrome.storage.sync.get("startStatus", function (obj) {
		console.log(obj);
		if(obj.startStatus=="true"){
			$("#btn_stop").show();
		}else{
			$("#btn_stop").hide();
		}
	});
	$("#btn_stop").click(function(){
		chrome.storage.sync.get("userData", function (obj) {
			console.log(obj);
			chrome.storage.sync.remove("userData", function(removeobj) {
				console.log(removeobj);
				chrome.storage.sync.set({'startStatus': 'false'}, function() {
				});
				$("#btn_stop").hide();
			});
		});
		
	});
	function ConvertToCSV(objArray) {
     var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
     var str = '';
     for (var i = 0; i < array.length; i++) {
         var line = '';
         for (var index in array[i]) {
             if (line != '') line += ','

             line += array[i][index];
         }
         str += line + '\r\n';
     }
     return str;
  }
	$("#btn_csv").click(function(){
		var missing_data = JSON.parse(localStorage.getItem("missing_data"));
		if(missing_data){
		 window.total = [];
		 total.push({
			interactionname: "Interaction Name",
			type: "Example Data"
		 });
		 
			for(var i=0;i<missing_data.length;i++) {
			 total.push({
				interactionname: missing_data[i].interaction,
				type: missing_data[i].value
			 });
			}
		 var csv = (ConvertToCSV(total));
		 var date = (new Date()).toString().split('(')[0].split(' ');
		 var dateX = date[1]+' '+date[2]+' '+date[3]+' '+date[4];
		 var link = '<a href="data:text/csv;charset=utf-8,\uFEFF'+encodeURI(csv)+'" download="'+dateX+'.csv">Download CSV</a>';
		 downloadLink=document.createElement('a');
		 downloadLink.download=dateX+".csv";
		 downloadLink.href='data:text/csv;charset=utf-8,\uFEFF'+encodeURI(csv);
		 document.body.appendChild(downloadLink);
		 downloadLink.click();
		 document.body.removeChild(downloadLink);
		 localStorage.removeItem("missing_data");
		}
	});
 
	//26266
	var api_url = "https://dowza-dev.herokuapp.com/process_users/";
	$("#btn_submit").click(function(){
		if(!$("#user_id").val()){
			$( "#user_id" ).focus();
			return false;
		}else{
			var user_id = $('#user_id').val();
			$.ajax({
			    type: "GET",  
			    dataType: 'json',
			    url: api_url + user_id+'.json',
			    success: function(data){
			    	console.log(data);
			    	if(data.length){
			    		localStorage.setItem("personalData", JSON.stringify(data));
			    		chrome.extension.sendMessage({from: "popup", tabId: tabId},function(response) { 
			    		});
			    	}
		    	},
		    	error: function(XMLHttpRequest, textStatus, errorThrown) { 
		        	//alert("Status: " + textStatus); alert("Error: " + errorThrown); 
		        	console.log("error");
		    	}
			});
		}
	});
});
 
