# Polarsteps to GPX

Convert polarsteps data export to GPX file

## Usage

[Download a copy of your data](https://support.polarsteps.com/article/124-how-can-i-export-a-copy-of-my-data)

Upload the zip to the website
<https://agroqirax.github.io/polarsteps-to-gpx/src>

> [!WARNING]
> DO NOT upload data exports to any website unless you trust the author as the export may contain personal information.<br>
> This tool processes your data locally (on your computer) and does not send it anywhere or uses it for any purpose other than generating the GPX file.<br>
> Additionally, you can view and audit the source code of the site yourself on [GitHub](https://github.com/agroqirax/polarsteps-to-gpx) and verify that it isn't malicious.

After generating the site will save the GPX file on your device.

If you wish you can share or publish it, but keep the following in mind:

- The GPX includes the steps and waypoints of all trips and the exact time they were recorded
- The GPX includes the step name and step text of each step
- The GPX doesn't include any images, videos, spots & activities, comments, notes or link to the original trip

You can use a tool like <https://gpx.studio/app> to view and edit your GPX.

## Info

- Each trip is a track
- Each step is a waypoint / POI
- The waypoint name is the step name & the waypoint description is the step description

### Examples

I've included an example data export

- [`user_data.example.zip`](/docs/examples/user_data.example.zip): Example data export
- [`user_data.example`](/docs/examples/user_data.example): Unzipped data export
- [`trips.example.gpx`](/docs/examples/trips.example.gpx): Exammple tool output
- [`trips.example.xml`](/docs/examples/trips.example.xml): Formatted GPX
- [`trips.example.geojson`](/docs/examples/trips.example.geojson): Geojson of example trip
- [`map.example.png`](/docs/examples/map.example.png): Screenshot of example trip in <https://gpx.studio/app>

## Installation

Clone the project

```shell
  git clone https://github.com/agroqirax/polarsteps-to-gpx.git
```

## Feedback

If you have any feedback, please create an [issue](https://github.com/agroqirax/polarsteps-to-gpx/issues)

## Features

- 🔄️ GPX generation

## Contributing

Contributions are always welcome!

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [`code of conduct`](CODE_OF_CONDUCT.md).

## Authors

- [@agroqirax](https://github.com/agroqirax)

## License

MIT License, see [`LICENSE.md`](LICENSE.md)
