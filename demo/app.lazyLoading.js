"use strict"

angular.module("App.lazyLoading", ["angular-visible"])
.controller("Controller.LazyLoading", function($scope) {
	var me = this;
	me.list = [];
	me.imgUrl =  [
	    "../img/title_thumbnail_20131203205916_t83x90.jpg",
	    "../img/title_thumbnail_20121228220750_t83x90.jpg",
	    "../img/title_thumbnail_20100614120245_t83x90.jpg",
	    "../img/title_thumbnail_20110527212550_t83x90.jpg",
	    "../img/title_thumbnail_20111205191903_t83x90.jpg",
	    "../img/title_thumbnail_20130519145328_t83x90.jpg",
	    "../img/title_thumbnail_20121017183412_t83x90.jpg",
	    "../img/title_thumbnail_20130710192300_t83x90.jpg",
	    "../img/title_thumbnail_20131205225518_t83x90.jpg",
	    "../img/title_thumbnail_20140213193525_t83x90.jpg",
	    "../img/title_thumbnail_20110407182655_t83x90.jpg",
	    "../img/title_thumbnail_20140204191617_t83x90.jpg"
	];
	me.urlIndex = -1;

	// create init data
	me.createData = function() {
		me.list.length = 0;
		for(var i=0, len = Math.floor(Math.random() * 200) + 201, initNo = Math.floor(Math.random() * 10); i<len; i++) {
			me.list.push({
				no : i,
				isTarget : i > initNo
			});
		}
	};

	// get image url
	me.getImgUrl = function() {
	    me.urlIndex++;
	    me.urlIndex = (me.urlIndex%me.imgUrl.length);
	    return me.imgUrl[me.urlIndex];
	}

	// init
	me.createData();

	$scope.$on("visible", function(e,data) {
		// @todo something...
		// e.g. ajax call or call a function, call a something....
		//
		for(var i =0, len=data.length; i<len; i++) {
			data[i].style.backgroundImage =  "url(" + me.getImgUrl() + ")";
		}
	});
});