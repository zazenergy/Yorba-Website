//	HYPE.documents["aboutus"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "aboutus_Resources";
	var documentName = "aboutus";
	var documentLoaderFilename = "aboutus_hype_generated_script.js";

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
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",aS:"i",d:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",A:"c",Y:"i",aL:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{initialValues:{"2":{b:46,c:400,q:"100% 100%",d:307,r:"inline",aW:"0.000000",f:"0deg",aP:"default",h:"sunset.png",w:"",j:"absolute",x:"visible",k:"div",Q:5,z:"1",R:"#9E9E9E",S:5,a:109,o:"content-box",aD:{type:1,transition:1,sceneSymbol:3},T:0},"3":{b:79,c:388.286,q:"100% 100%",d:290,r:"inline",aW:"0.000000",f:"0deg",h:"bowling.png",w:"",j:"absolute",x:"visible",k:"div",Q:5,z:"2",R:"#C1C1C2",S:5,a:76,o:"content-box",aD:{type:3,timelineIdentifier:"5"},T:7}},timelines:{"5":{framesPerSecond:30,animations:[{f:"2",t:0,d:1.7666667,i:"a",e:109,r:1,s:99,o:"2"},{f:"2",t:0,d:1.7666667,i:"b",e:46,r:1,s:46,o:"2"},{f:"2",t:0,d:1.7666667,i:"f",e:"10deg",r:1,s:"0deg",o:"2"},{f:"2",t:0,d:1.7666667,i:"a",e:76,r:1,s:76,o:"3"},{f:"2",t:0,d:1.7666667,i:"b",e:79,r:1,s:79,o:"3"},{f:"2",t:0,d:1.7666667,i:"f",e:"7deg",r:1,s:"0deg",o:"3"},{f:"2",t:1.7666667,d:0.76666665,i:"f",e:"0deg",s:"10deg",o:"2"},{f:"2",t:1.7666667,d:0.76666665,i:"f",e:"0deg",s:"7deg",o:"3"}],identifier:"5",name:"Mouseover",duration:2.5333333},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},sceneIndex:0,perspective:"600px",oid:"1",onSceneAnimationCompleteAction:{type:3},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("aboutus_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(false);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

