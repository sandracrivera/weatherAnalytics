# Weather Data Analytics mockup API

## What's in the package?

* Routing with koa-router.
* Parsing request with koa-bodyparser.
* CORS middleware with @koa/cors.
* koa-respond for helper functions on the context.
* koa-helmet for important security headers.
* nodemon for development to auto-restart when your files change.
* dotenv for environment variable management.
* mockup JSON files for agency, metrics, retions-ca, stations and values

## APIs

### /weather/v1/agency
GET: List all agencies
RETURN: json file with agencies ex:

~~~~
  {
    "id": "738ac4c1-0eca-492c-b1a6-ddf661094a09",
    "name" : "Environment Canada",
    "type"  : "gov",
    "country" : "ca",
    "url" : "https://weather.gc.ca"
  }
~~~~


### /weather/v1/agency/{id}/region
GET: lists all the regions within an agency
RETURN: json file with region list for specific agency

~~~~
  [{
    "id"    : "92497a9f-ee15-4813-8076-76ef52a9fee4",
    "agency": "738ac4c1-0eca-492c-b1a6-ddf661094a09",
    "name" : "Alberta",
    "type"  : "prov"
  }]
~~~~

###  /weather/v1/station/{id}
GET: retrieves the station by the provided id
RETURN: json file with station information

~~~~
  { 
    "id"        : "da25e204-7387-4cb5-8344-b3c9c4ce2823",
    "region"    : "a30f66c7-4cb7-4c67-85a0-43dd05d6ca1f",
    "agency"    : "738ac4c1-0eca-492c-b1a6-ddf661094a09",
    "name"      : "HARRINGTON CDA CS",
    "IATA"      : "CAHR",
    "WMO"       : "7135",
    "lat"       : 46.343611,
    "long"      : -63.169722,
    "elevation" : 53,
    "provider"  : "MSC",
    "dataset"   : "CA",
    "type"      : "auto"
  }
~~~~

### /weather/v1/metrics
GET: list of all supported metrics
RETURN: json file with list of metrics

~~~~
  [{ 
    "id"    : "70cac38d-148a-4404-84b1-03ed10a169d4",
    "name"  : "Dew Point",
    "unit"  : "celcius",
    "enabled" : false
  }]
~~~~

### /weather/v1/metric/{metric_id}/values/?start=YYYY-MM-DD&end=YYYY-MM-DD
GET: Retrieves the values of a certain metric in the specified date range. 

~~~~
  [{
    "timestamp": "2019-01-01 00:00",
    "value": 14
  }]
~~~~

## Getting Started

1. clone project

2. install packages on server

```
cd server && npm install   
```

3. install packages on frontend

```
cd frontend && npm install   
```

4. install packages on root folder

```
npm install   
```

5. run app in root folder (this will run both frontend and server)

```
npm start
```

By default the API server starts on port 4000, http://localhost:4000.


### Prerequisites

* node >= v7.6.0

## Authors

Sandra Rivera

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
