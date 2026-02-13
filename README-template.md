# UTM to Latitude/Longitude Converter

A professional-grade web-based coordinate conversion tool designed for institutional and field operations. This application converts Universal Transverse Mercator (UTM) coordinates to geographic coordinates in WGS84 format, facilitating seamless integration with modern mapping systems and geospatial applications.

**Developed in collaboration with Norwegian People's Aid**

## Table of Contents

- [Overview](#overview)
  - [Purpose](#purpose)
  - [Specifications](#specifications)
  - [Features](#features)
- [Technical Documentation](#technical-documentation)
  - [Technology Stack](#technology-stack)
  - [System Requirements](#system-requirements)
- [Deployment](#deployment)
- [Support and Documentation](#support-and-documentation)

## Overview

### Purpose

This application provides a reliable, user-friendly solution for converting coordinate systems commonly encountered in field operations, humanitarian work, and geospatial data management. UTM coordinates are widely used in mapping and GPS systems, while WGS84 decimal degrees are the standard for web-based mapping platforms. This tool bridges the two formats, ensuring accurate and efficient workflows.

### Specifications

- **Input Format**: UTM coordinates (Zone, Latitude Band, Easting, Northing)
- **Output Format**: WGS84 decimal degrees (Latitude, Longitude)
- **Accuracy**: Precision to 6 decimal places (approximately 0.1 meters)
- **Platform**: Web-based, accessible from any modern browser
- **Availability**: Cross-platform compatibility (Windows, macOS, Linux)

### Features

- **Accurate Coordinate Conversion**: Converts UTM coordinates to WGS84 format with high precision
- **Interactive Map Display**: Visualizes converted locations on an embedded map
- **Clipboard Integration**: Quick copy functionality for converted coordinates
- **Responsive Interface**: Optimized for desktop and mobile access
- **Data Integrity**: Input validation and error handling for reliable operations

## Technical Documentation

### Technology Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Frontend | HTML5, CSS3 | Semantic markup and responsive styling |
| Logic | Vanilla JavaScript | Coordinate conversion algorithms without external dependencies |
| Mapping | Leaflet.js | Interactive map visualization |
| Coordinate System | WGS84 | International standard geographic reference system |

### System Requirements

- **Browser Support**: Chrome, Firefox, Safari, Edge (latest versions)
- **Dependencies**: Leaflet.js library (CDN-loaded)
- **Network**: Internet connection for map tile loading
- **Accessibility**: WCAG 2.1 compliant for institutional accessibility standards

## Deployment

### Installation

1. Clone the repository
2. No build process or dependencies required
3. Open `index.html` in a web browser or deploy to a web server

### Hosting Options

- GitHub Pages
- Institutional web servers
- Cloud platforms (AWS, Azure, Google Cloud)
- Local network deployment for institutional systems

## Support and Documentation

For technical inquiries, integration assistance, or bug reports, please contact the development team or submit issues through the project repository.

### References

- [USGS: Universal Transverse Mercator (UTM)](https://www.usgs.gov/)
- [WGS84 Specification](https://en.wikipedia.org/wiki/World_Geodetic_System)
- [Leaflet.js Documentation](https://leafletjs.com/reference.html)

---

**Last Updated**: February 2026  
**Version**: 1.0  
**Organization**: Norwegian People's Aid
