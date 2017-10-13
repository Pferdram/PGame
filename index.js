(function () {

    var tracker = new tracking.ObjectTracker(['mouth']);

    tracker.on('track', function(event) {
        if (event.data.length === 0) {
          // No objects were detected in this frame.
        } else {
            event.data.forEach(function(rect) {
                var marker = document.getElementById('rect');
                marker.style.left =  rect.y + 'px';
                marker.style.top =  rect.y + 'px';
                marker.style.width = rect.width + 'px';
                marker.style.height = rect.height + 'px';
            });
        }
    });

    tracking.track('#myVideo', tracker, { camera: true });
    
})();