document.addEventListener('DOMContentLoaded', function() {
    const platform = new H.service.Platform(
        'appkey': 'ErvGYQcNHVv2IvTAYcrjtUCbAhhSbVbT96bogomYGTI'
    );

    const defaultLayers = platform.createDefaultLayers();

    const map = new H.Map(document.getElementById('map'), defaultLayers.normal.map, {
        center: { lat: 52.5, lng: 13.4 }, // Set the initial map center
        zoom: 10, // Set the initial zoom level
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    const mapSettings = new H.ui.MapSettingsControl({
        entries: [
            new H.ui.MapSettingsControl.Entry('zoom', 14),
            new H.ui.MapSettingsControl.Entry('satellite'),
            new H.ui.MapSettingsControl.Entry('traffic'),
        ]
    });
    ui.addControl('mapsettings', mapSettings);

    const trafficInfo = defaultLayers.incidents.traffic;
    map.addLayer(trafficInfo);

    setInterval(function() {
        refreshTrafficLayer(trafficInfo);
    }, 300000);

    // Function to refresh the traffic layer
    function refreshTrafficLayer(trafficLayer) {
        // Remove the current traffic layer
        map.removeLayer(trafficLayer);

        // Create a new traffic layer and add it to the map
        trafficLayer = defaultLayers.incidents.traffic;
        map.addLayer(trafficLayer);
    }
});