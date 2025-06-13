// region main loop
document
  .getElementById("file-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    console.time("Loading");

    const fileInput = document.getElementById("fileupload");
    const file = fileInput.files[0];

    const submitButton = event.target.querySelector('button[type="submit"]');
    // Save original button content
    const originalButtonContent = submitButton.innerHTML;
    // Disable button and show spinner
    submitButton.disabled = true;
    submitButton.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Processing...`;

    if (!file) {
      alert("Please upload a ZIP file.");
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonContent;
      return;
    }

    try {
      const JSZip = window.JSZip;
      const zip = await JSZip.loadAsync(file);
      const gpxDocument = createGPXDocument();
      console.timeEnd("Loading");

      console.time("Processing");
      // Collect promises for processing each trip folder
      const tripPromises = Object.keys(zip.files)
        .filter((filename) => filename.endsWith("/trip.json"))
        .map(async (filename) => {
          const tripFolderPath = filename.substring(
            0,
            filename.lastIndexOf("/")
          );
          // Process trip.json
          const tripData = await zip.files[filename].async("string");
          const tripJson = JSON.parse(tripData);

          // Create track for the trip
          const trackSegment = createGPXTrack(gpxDocument, tripJson);

          // Prepare steps from trip.json
          const steps = tripJson["all_steps"].map((step) => ({
            type: "step",
            time: step.start_time,
            lat: step.location.lat,
            lon: step.location.lon,
            name: step.display_name,
            description: step.description,
          }));

          // Process locations.json for waypoints
          const locationsFilename = tripFolderPath + "/locations.json";
          let waypoints = [];
          if (zip.files[locationsFilename]) {
            const locationsData = await zip.files[locationsFilename].async(
              "string"
            );
            const locationsJson = JSON.parse(locationsData);

            waypoints = locationsJson["locations"].map((location) => ({
              type: "waypoint",
              time: location.time,
              lat: location.lat,
              lon: location.lon,
            }));
          }

          // Combine and sort steps + waypoints by time
          const allPoints = [...steps, ...waypoints].sort(
            (a, b) => a.time - b.time
          );

          // Add points to track and waypoints in order
          allPoints.forEach((point) => {
            const trackPoint = createTrackPoint(gpxDocument, point);
            trackSegment.appendChild(trackPoint);

            if (point.type === "step") {
              createWaypoint(gpxDocument, point);
            }
          });
        });
      console.timeEnd("Processing");

      // Wait for all trips to finish processing
      await Promise.all(tripPromises);

      // Generate and download the GPX file
      const gpxBlob = new Blob(
        [new XMLSerializer().serializeToString(gpxDocument)],
        { type: "application/gpx+xml" }
      );
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(gpxBlob);
      downloadLink.download = "trips.gpx";
      downloadLink.click();
    } catch (error) {
      console.error("Error processing ZIP file:", error);
      alert("An error occurred while processing the ZIP file.");
    } finally {
      // Re-enable button and restore content
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonContent;
    }
  });

// region create GPX doc
function createGPXDocument() {
  const gpxDocument = document.implementation.createDocument(null, "gpx", null);
  const gpxElement = gpxDocument.documentElement;

  // Required attributes
  gpxElement.setAttribute("xmlns", "http://www.topografix.com/GPX/1/1");
  gpxElement.setAttribute(
    "xmlns:xsi",
    "http://www.w3.org/2001/XMLSchema-instance"
  );
  gpxElement.setAttribute(
    "xsi:schemaLocation",
    "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd"
  );
  gpxElement.setAttribute("version", "1.1");

  // Metadata
  const metadata = gpxDocument.createElement("metadata");
  const metadataName = gpxDocument.createElement("name");
  metadataName.textContent = "Polarsteps trips";
  metadata.appendChild(metadataName);
  const metadataAuthor = gpxDocument.createElement("author");
  const metadataAuthorName = gpxDocument.createElement("name");
  const metadataAuthorLink = gpxDocument.createElement("link");
  metadataAuthorName.textContent = "Trip to GPX Converter";
  metadataAuthorLink.setAttribute(
    "href",
    "https://github.com/agroqirax/polarsteps-to-gpx"
  );
  metadataAuthor.appendChild(metadataAuthorName);
  metadataAuthor.appendChild(metadataAuthorLink);
  metadata.appendChild(metadataAuthor);

  gpxElement.appendChild(metadata);

  return gpxDocument;
}

// region create GPX track
function createGPXTrack(gpxDocument, tripData) {
  const track = gpxDocument.createElement("trk");

  const trackName = gpxDocument.createElement("name");
  trackName.textContent = tripData.name || "Unnamed Trip";
  track.appendChild(trackName);

  const trackDesc = gpxDocument.createElement("desc");
  trackDesc.textContent = tripData.summary || "No summary provided.";
  track.appendChild(trackDesc);

  const trackSegment = gpxDocument.createElement("trkseg");
  track.appendChild(trackSegment);

  gpxDocument.documentElement.appendChild(track);
  return trackSegment;
}

// region create track point
function createTrackPoint(gpxDocument, point) {
  const trackPoint = gpxDocument.createElement("trkpt");
  trackPoint.setAttribute("lat", point.lat);
  trackPoint.setAttribute("lon", point.lon);

  const time = gpxDocument.createElement("time");
  time.textContent = new Date(point.time * 1000).toISOString();
  trackPoint.appendChild(time);

  return trackPoint;
}

// region create waypoint
function createWaypoint(gpxDocument, point) {
  const waypoint = gpxDocument.createElement("wpt");
  waypoint.setAttribute("lat", point.lat);
  waypoint.setAttribute("lon", point.lon);

  const name = gpxDocument.createElement("name");
  name.textContent = point.name || "Unnamed Step";
  waypoint.appendChild(name);

  const desc = gpxDocument.createElement("desc");
  desc.textContent = point.description || "No description provided.";
  waypoint.appendChild(desc);

  const time = gpxDocument.createElement("time");
  time.textContent = new Date(point.time * 1000).toISOString();
  waypoint.appendChild(time);

  // Add the waypoint to the GPX
  gpxDocument.documentElement.appendChild(waypoint);
}
