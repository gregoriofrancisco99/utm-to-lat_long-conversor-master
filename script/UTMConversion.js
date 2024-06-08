//Clearing placeholders
document.getElementById("utm_coordinate").value = '';
document.getElementById("latitude").value = '';
document.getElementById("longitude").value = '';

// Parsing UTM Coordinate
// Function for separating values from whole UTM
function parse_utm (utm_coordinate) {
    const regex = /^(\d{1,2}[A-Z])\s+(\d{6})\s+(\d{7})$/;
    const match = utm_coordinate.trim().match(regex);
    
    if (!match) {
        alert("Invalid UTM coordinate format");
        document.getElementById("utm_coordinate").value = '';
        document.getElementById("latitude").value = '';
        document.getElementById("longitude").value = '';
    }
    
    const zoneHemisphere = match[1];
    const easting = match[2];
    const northing = match[3];
    
    return {
        zoneHemisphere: zoneHemisphere,
        easting: easting,
        northing: northing
    };
}

function start(event){
    event.preventDefault();

    var raw_utm_coordinate = document.getElementById("utm_coordinate").value;
    console.log(raw_utm_coordinate);
    var utm = parse_utm(raw_utm_coordinate);
    var easting = utm.easting;
    var northing = utm.northing;
    var zone = utm.zoneHemisphere;
    var hemisphere = getHemisphere(zone);

    var lat_long = UTMtoLatLong(easting, northing, parseInt(zone), hemisphere);

    document.getElementById("utm").innerText = `${utm.zoneHemisphere} ${utm.easting} ${utm.northing}`;
    document.getElementById("latitude").innerText = lat_long.latitude;
    document.getElementById("longitude").innerText = lat_long.longitude;

    updateMarkerPosition(lat_long.latitude, lat_long.longitude);
}

function getHemisphere(utm_zone) {
    var hemisphereLetter = utm_zone.slice(-1);
    return (hemisphereLetter.toUpperCase() >= 'N') ? 'N' : 'S';
}

function UTMtoLatLong(utm_easting, utm_northing, utm_zone, hemisphere) {
    var a = 6378137; // WGS84 major axis
    var e = 0.081819191; // WGS84 eccentricity
    var e1sq = 0.006739497; // square of e1
    var k0 = 0.9996; // scale factor

    // Adjust northing for southern hemisphere
    if (hemisphere === 'S') {
        utm_northing -= 10000000.0;
    }

    var arc = utm_northing / k0;
    var mu = arc / (a * (1 - Math.pow(e, 2) / 4.0 - 3 * Math.pow(e, 4) / 64.0 - 5 * Math.pow(e, 6) / 256.0));

    var ei = (1 - Math.pow((1 - e * e), (1 / 2.0))) / (1 + Math.pow((1 - e * e), (1 / 2.0)));

    var ca = 3 * ei / 2 - 27 * Math.pow(ei, 3) / 32.0;
    var cb = 21 * Math.pow(ei, 2) / 16 - 55 * Math.pow(ei, 4) / 32;
    var cc = 151 * Math.pow(ei, 3) / 96;
    var cd = 1097 * Math.pow(ei, 4) / 512;
    var phi1 = mu + ca * Math.sin(2 * mu) + cb * Math.sin(4 * mu) + cc * Math.sin(6 * mu) + cd * Math.sin(8 * mu);

    var n0 = a / Math.pow((1 - Math.pow((e * Math.sin(phi1)), 2)), (1 / 2.0));
    var r0 = a * (1 - e * e) / Math.pow((1 - Math.pow((e * Math.sin(phi1)), 2)), (3 / 2.0));
    var fact1 = n0 * Math.tan(phi1) / r0;

    var _a1 = utm_easting - 500000.0;
    var dd0 = _a1 / (n0 * k0);
    var fact2 = dd0 * dd0 / 2;

    var t0 = Math.pow(Math.tan(phi1), 2);
    var Q0 = e1sq * Math.pow(Math.cos(phi1), 2);
    var fact3 = (5 + 3 * t0 + 10 * Q0 - 4 * Q0 * Q0 - 9 * e1sq) * Math.pow(dd0, 4) / 24;

    var fact4 = (61 + 90 * t0 + 298 * Q0 + 45 * Math.pow(t0, 2) - 252 * e1sq - 3 * Q0 * Q0) * Math.pow(dd0, 6) / 720;

    var lof1 = _a1 / (n0 * k0);
    var lof2 = (1 + 2 * t0 + Q0) * Math.pow(dd0, 3) / 6.0;
    var lof3 = (5 - 2 * Q0 + 28 * t0 - 3 * Math.pow(Q0, 2) + 8 * e1sq + 24 * Math.pow(t0, 2)) * Math.pow(dd0, 5) / 120;
    var _a2 = (lof1 - lof2 + lof3) / Math.cos(phi1);
    var _a3 = _a2 * 180 / Math.PI;

    var latitude = 180 * (phi1 - fact1 * (fact2 + fact3 + fact4)) / Math.PI;

    var centralMeridian = (utm_zone - 1) * 6 - 180 + 3;
    var longitude = centralMeridian + _a3;

    // Debug outputs to trace values
    console.log("UTM Easting:", utm_easting);
    console.log("UTM Northing:", utm_northing);
    console.log("UTM Zone:", utm_zone);
    console.log("Hemisphere:", hemisphere);
    console.log("Central Meridian:", centralMeridian);
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);

    return { latitude: latitude.toFixed(6), longitude: longitude.toFixed(6) };
}