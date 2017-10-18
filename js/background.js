function createTab(){
	chrome.storage.local.get('urlList', function (result) {
			var listUrl = JSON.parse(result.urlList);
			chrome.tabs.create({
				 url: "http:"+listUrl[0]
			 });
	});
}
chrome.runtime.onMessage.addListener(function (msg, sender,sendResponse) {
  if ((msg.from === 'popup') && (msg.tabId)) {
  	var personalData = JSON.parse(localStorage.getItem("personalData"));
  	if(personalData.length){
  		chrome.tabs.sendMessage(msg.tabId, {from: "background", data: personalData});
  	}
  }else if(msg.from=="content" && msg.data){
		console.log(msg.data);
		var missing_data = localStorage.getItem("missing_data");
		console.log(missing_data);
		if(msg.data.length){
			if(missing_data){
				var firstData = JSON.parse(missing_data);
				var new_Data = [];
				for(var i in firstData){
					 var shared = false;
					 for (var j in msg.data)
							 if (msg.data[j].interaction == firstData[i].interaction) {
									 shared = true;
									 break;
							 }
					 if(!shared) new_Data.push(firstData[i]);
				}
				new_Data = new_Data.concat(msg.data);
				localStorage.setItem("missing_data",JSON.stringify(new_Data));
			}else{
				localStorage.setItem("missing_data",JSON.stringify(msg.data));
			}
		}
	}
});


