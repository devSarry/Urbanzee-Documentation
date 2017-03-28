# Sample Json Data
The sample data we received from Koki was delivered in 10 files. Each about 5mb and 340,000+ lines when formatted. There's a lot of data that is duplicated because of the nature of json. 

## Structure of the data
First a look at the data. Here's a sample data point
```json
  {
        "id": 112874,
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            22.293203,
            60.450249
          ]
        },
        "properties": {
          "pk": 112874,
          "sensor": {
            "url": "https://aerozee.com/api/sensor/23/",
            "pk": 23,
            "name": "Air pressure",
            "short": "",
            "unit_of_measurement": "hPa",
            "type": "https://aerozee.com/api/sensortype/1/"
          },
          "device": {
            "url": "https://aerozee.com/api/device/2/",
            "pk": 2,
            "name": "Libelium #1",
            "serial_number": "408513902"
          },
          "timestamp": "2017-02-09T14:37:06.533000Z",
          "location_accuracy": 3.25,
          "location_altitude": 57.2,
          "location_longitude": 22.293203,
          "location_latitude": 60.450249,
          "value": 1040.52
        }
      }
```

All the data points are in an array `features` and from roughly looking at the `features` array there doesn't seem to be a pattern to the collection of the different indicators. ie simplified the features array looks like this.

```json
    { 
      "features": [
            {"Sulfur Dioxide": "data"},
            {"Ozone": "data"},
            {"Temperature": "data"},
            {"Carbon monoxide": "data"},
            {"Air pressure": "data"},
            {"Nitrogen dioxide": "data"},
            {"Humidity": "data"},
            {"Nitrogen dioxide": "data"},
            {"Temperature": "data"},
            {"Carbon monoxide": "data"},
            {"Sulfur Dioxide": "data"},
            {"Humidity": "data"},
            {"Air pressure": "data"}    
          ]
      }
```
My only guess is that the collection rate varies for each indicator. 

## Plan of action
To make working with this data a little bit easier separating isolating each of the indicators into their own tables will vastly simplify the any excel work done. To achieve this I will:
1. write a script to parse the data
2. write the data to an sqlite db
3. export it to csv format

