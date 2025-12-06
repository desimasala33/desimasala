if (Hls.isSupported()) {
    var video = document.getElementById('video');
    var hls = new Hls();
    hls.loadSource('/videos_hls/output.m3u8');  // path correct
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
    });
} else if (document.getElementById('video').canPlayType('application/vnd.apple.mpegurl')) {
    var video = document.getElementById('video');
    video.src = '/videos_hls/output.m3u8';
    video.addEventListener('loadedmetadata',function() {
        video.play();
    });
}
