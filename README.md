# UTM to Latitude/Longitude Converter

A professional coordinate conversion utility developed for institutional use. This application provides reliable and accurate conversion between Universal Transverse Mercator (UTM) coordinates and WGS84 geographic coordinates.

## Overview

This tool is designed to streamline coordinate conversion workflows in institutional and field operations. Whether managing geospatial data, processing GPS information, or integrating with mapping systems, this converter ensures accurate coordinate transformations with minimal overhead.

**Organization**: Norwegian People's Aid

## Features

- **Accurate Coordinate Conversion**: High-precision UTM to WGS84 conversion
- **Interactive Mapping**: Real-time visualization of converted locations
- **Data Accessibility**: Quick clipboard integration for converted coordinates
- **Cross-Platform Support**: Web-based access from any standard browser
- **Institutional Grade**: Production-ready with input validation and error handling

## Quick Start

### Installation

1. Clone or download the repository
2. Open `index.html` in a web browser
3. Enter UTM coordinates in the format: `Zone Latitude-Band Easting Northing` (e.g., `33N 500000 4649776`)
4. Click "Convert" to generate WGS84 coordinates
5. View the location on the integrated map

### System Requirements

- **Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Network**: Internet connection for map tile loading
- **Dependencies**: Leaflet.js (loaded via CDN)
- **Accessibility**: WCAG 2.1 compliant

## Technical Specifications

| Specification | Details |
|---|---|
| Input Format | UTM coordinates with zone designation |
| Output Format | WGS84 decimal degrees |
| Accuracy | ±0.1 meters (6 decimal places) |
| Reference System | WGS84 (EPSG:4326) |
| Technology | HTML5, CSS3, Vanilla JavaScript |
| Mapping Library | Leaflet.js |

## File Structure

```
├── index.html              # Main application
├── script/
│   └── UTMConversion.js   # Conversion logic
├── style/
│   └── main.css           # Styling
├── images/                # Assets
├── design/                # Reference designs
└── README.md              # Documentation
```

## Deployment

### Hosting Options

The application can be deployed on any standard web server:

- **GitHub Pages**: For public hosting
- **Institutional Servers**: For internal network deployment
- **Cloud Platforms**: AWS, Azure, Google Cloud, or similar
- **Local Network**: For offline institutional use with local hosting

### Deployment Steps

1. Copy all project files to your web server
2. Ensure `index.html` is accessible from the server root
3. Verify that external resources (Leaflet.js, map tiles) are reachable
4. Test coordinate conversion and map functionality

## Usage

### Input Format

UTM coordinates should be entered as:
- **Zone**: 1-60 (UTM zone number)
- **Latitude Band**: A-Z letter designation (C-X, excluding I and O)
- **Easting**: Numeric value (0-1,000,000 meters)
- **Northing**: Numeric value (0-10,000,000 meters)

Example: `33N 500000 4649776`

### Output

Converted coordinates are displayed in WGS84 decimal degrees format:
- **Latitude**: -90 to +90 degrees
- **Longitude**: -180 to +180 degrees

## Support and Maintenance

For technical issues, integration support, or feature requests, please contact the development team or submit a request through the project repository.

### References

- [USGS - Universal Transverse Mercator System](https://www.usgs.gov/)
- [WGS84 Geographic Coordinate System](https://en.wikipedia.org/wiki/World_Geodetic_System)
- [Leaflet.js Documentation](https://leafletjs.com/)
- [EPSG Registry - Coordinate Systems](https://www.epsg-registry.org/)

## Version History

| Version | Date | Notes |
|---|---|---|
| 1.0 | February 2026 | Initial production release |

---

**Organization**: Norwegian People's Aid  
**Status**: Production  
**Last Updated**: February 2026
