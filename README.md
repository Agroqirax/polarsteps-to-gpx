# Polarsteps to GPX

Convert polarsteps data export to GPX file

## Usage

Step 1:
<br><br>
<a style="background-color:#de2b52;color:white;padding:10px 20px;cursor:pointer;border-radius:5px;text-decoration:none;transition:background-color 0.3s ease;" href="https://support.polarsteps.com/article/124-how-can-i-export-a-copy-of-my-data"><svg style="vertical-align:middle;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg> Download a copy of your data</a>
<br>

Step 2:
<br><br>
<a style="background-color:#de2b52;color:white;padding:10px 20px;cursor:pointer;border-radius:5px;text-decoration:none;transition:background-color 0.3s ease;" href="https://agroqirax.github.io/polarsteps-to-gpx/src"><svg style="vertical-align:middle;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M482-160q-134 0-228-93t-94-227v-7l-64 64-56-56 160-160 160 160-56 56-64-64v7q0 100 70.5 170T482-240q26 0 51-6t49-18l60 60q-38 22-78 33t-82 11Zm278-161L600-481l56-56 64 64v-7q0-100-70.5-170T478-720q-26 0-51 6t-49 18l-60-60q38-22 78-33t82-11q134 0 228 93t94 227v7l64-64 56 56-160 160Z"/></svg> Upload the zip file to the website</a><br><br>

> [!WARNING]
> DO NOT upload data exports to any website unless you trust the author, as they may contain private information.<br>
> This tool processes the data on your computer, it never leaves your device.<br>
> Additionally, you can view and audit the source code of the site yourself on [GitHub](https://github.com/agroqirax/polarsteps-to-gpx) and verify that it isn't malicious.

After generating the site will save the GPX file on your device.

If you wish you can share or publish it, but keep the following in mind:

- The GPX includes the steps and waypoints of all trips and the exact time they were recorded
- The GPX includes the step name and step text of each step
- The GPX doesn't include any images, videos, spots & activities, comments, notes or link to the original trip

You can use a tool like <https://gpx.studio/app> to view and edit your GPX.

### Examples

I've included an example data export

- [`user_data.example.zip`](/docs/examples/user_data.example.zip): Example data export
- [`user_data.example`](/docs/examples/user_data.example): Unzipped data export
- [`trips.example.gpx`](/docs/examples/trips.example.gpx): Exammple tool output
- [`trips.example.xml`](/docs/examples/trips.example.xml): Formatted GPX
- [`trips.example.geojson`](/docs/examples/trips.example.geojson): Geojson of example trip
- [`map.example.png`](/docs/examples/map.example.png): Screenshot of example trip in <https://gpx.studio/app>

## Installation (developers)

Clone the project

```shell
  git clone https://github.com/agroqirax/polarsteps-to-gpx.git
```

## Feedback

If you have any feedback, please create an [issue](https://github.com/agroqirax/polarsteps-to-gpx/issues)

## Contributing

Contributions are always welcome!

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [`code of conduct`](CODE_OF_CONDUCT.md).

## Authors

- [@agroqirax](https://github.com/agroqirax)
- [@maxi07](https://github.com/maxi07)

## License

MIT License, see [`LICENSE.md`](LICENSE.md)
