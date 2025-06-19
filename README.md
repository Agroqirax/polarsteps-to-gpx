# Polarsteps to GPX

Convert polarsteps data export to GPX file

## Usage

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=downloadcached" />

<style>
  .cta-button {
    background-color: #de2b52 !important;
    color: white !important;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none !important; 
    transition: background-color 0.3s ease;
  }

  .cta-button:hover {
    background-color: #a51f3c !important;
  }
  .material-symbols-outlined {
    vertical-align: middle;
  }
</style>

Step 1:
<br><br>
<a class="cta-button" href="https://support.polarsteps.com/article/124-how-can-i-export-a-copy-of-my-data"><span class="material-symbols-outlined">download</span> Download a copy of your data</a>
<br>

Step 2:
<br><br>
<a class="cta-button" href="https://agroqirax.github.io/polarsteps-to-gpx/src"><span class="material-symbols-outlined">
cached
</span> Upload the zip file to the website</a><br><br>

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
