//	HYPE.documents["shotwell_about"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "shotwell_about_Resources";
	var documentName = "shotwell_about";
	var documentLoaderFilename = "shotwellabout_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_100 == "undefined") {
		if(typeof window.HYPE_100_DocumentsToLoad == "undefined") {
			window.HYPE_100_DocumentsToLoad = new Array();
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=100';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var hypeDoc = new HYPE_100();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",A:"c",Y:"i",aL:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{initialValues:{"15":{b:13,z:"2",K:"Solid",c:415,aD:{timelineIdentifier:"kTimelineDefaultIdentifier",type:3},L:"Solid",d:278,M:7,N:7,f:"10deg",O:7,P:7,h:"All%20sizes%20%7C%20Project%20_Dream_%20-%20Things%20I%20want%20to%20do%20before%20turning%2035.%20The%20love%20of%20a%20family%20is%20life_s%20greatest%20blessing.%20%287_7%29%21%20%7C%20Flickr%20-%20Photo%20Sharing%21.jpg",bF:"18",Q:4,i:"about_animation",R:"#454545",j:"absolute",aW:"0.000000",k:"div",S:1,T:2,aX:0,aY:"0",o:"content-box",p:"no-repeat",A:"#F9F9E7",q:"100% 100%",B:"#F9F9E7",r:"inline",C:"#F9F9E7",D:"#F9F9E7",w:"",x:"visible",I:"Solid",a:1,J:"Solid"},"14":{b:0,z:"1",K:"Solid",c:443,aD:{timelineIdentifier:"kTimelineDefaultIdentifier",type:3},L:"Solid",d:294,M:7,N:7,f:"15deg",O:7,P:7,h:"wtf-photos-from-old-times03.jpeg",bF:"18",Q:4,i:"about_animation",R:"#454545",j:"absolute",aW:"0.000000",k:"div",S:1,T:2,aX:0,aY:"0",o:"content-box",p:"no-repeat",A:"#F9F9E7",q:"100% 100%",B:"#F9F9E7",r:"inline",C:"#F9F9E7",D:"#F9F9E7",w:"",x:"visible",I:"Solid",a:30,J:"Solid"},"18":{x:"visible",k:"div",c:487.14337,aD:{type:1,sceneOid:"12",transition:1},d:308,z:"2",a:74.924332,j:"absolute",aP:"default",b:60.005974}},timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:1.0333333,i:"b",e:11,r:1,s:13,o:"15"},{f:"2",t:0,d:1.0333333,i:"a",e:-37,r:1,s:1,o:"15"},{f:"2",t:0,d:1.0333333,i:"a",e:64,r:1,s:30,o:"14"},{f:"2",t:0,d:1.0333333,i:"b",e:3,r:1,s:0,o:"14"},{f:"2",t:0,d:1.0333333,i:"f",e:"3deg",r:1,s:"10deg",o:"15"},{f:"2",t:0,d:1.0333333,i:"f",e:"10deg",r:1,s:"15deg",o:"14"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:1.0333333}},sceneIndex:0,perspective:"600px",oid:"12",onSceneAnimationCompleteAction:{type:0},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("shotwellabout_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(false);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

