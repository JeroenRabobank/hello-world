sap.designstudio.sdk.Component.subclass("com.sap.sample.video.Video", function() {

	this.tagVideo = null;

	this.init = function() {
		this.tagVideo = $("<video style=\"width:100%;height:100%;\"/>");
		this.$().append($(this.tagVideo));
	};

	this.src = function(videoUrl) {
		if (videoUrl !== undefined) {
			this.tagVideo.attr("src", videoUrl);
			this.tagVideo[0].play();
			return this;
		} else {
			return this.tagVideo.src;
		}
	};
});