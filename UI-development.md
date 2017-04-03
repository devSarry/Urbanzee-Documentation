# Notes about UI development

## Introduction

The design desissions about visuals and implementation will be outlined and explained here. For example viusally there's a grey bar running accross the bottom as seen in the figure below.

![AQI BOX](http://i.imgur.com/ynuxyYx.png)

This bar deviates from the original design and was added because the white text was so small that on lighter colored background was hard to read.

For visual notes a screenshot will be included to aid explination and for the implemenation notes code snippets as well as the file it came out of will be included.

Each component will have it's own note and will included:
* Description of what the component does
* Properties (props) that component takes and an example of the data

## Visual Notes
### Color Swatches
The first 5 ranges for the
![color range](http://i.imgur.com/GQEBiej.png)
### ZeeIndexHistory
The component can arrange upto 11 elements before the boxes overflow
![overflow](http://i.imgur.com/52xO6Fl.png)
This is cause by the text width needing to be 65px wide.


## Implementation Notes

### ZeeAqiBox

`<zee-aqi-box aqi="31" location="Turku Centrum" timestamp="14:45">`
![zeebox](http://i.imgur.com/NwgATpY.png)

`ZeeAqiBox.vue` This component is the main AQI box. Kind of the firs thing a user sees. It displays the air quality index and its color changes according to the break points.

#### Props

`aqi=31`
`location="Turku Centrum"`
`timestamp="15:45"`


***

### ZeeCard

`ZeeCard.vue` This is your "main" component kind of where we build up all the parts of this widget. It's also the component that should be responsible for getting all the data.

### ZeeSubIndex

`<zee-sub-index data="aq_subIndex">`
![zeesubindex](http://i.imgur.com/6ar9EHz.png)

`ZeeSubIndex.vue` This component displays a row of the sub indices so2, no, co, pm1, pm10, and pm15

When a user clicks on any of the sub indices a history card opens up an shows the past reading of that sub index plus additional information.

![zeesubindexfull](http://i.imgur.com/R6Vge7p.png)

#### Props
* `data` - takes a json object that should look like the json structure below.

    `data=aq_subIndex`
    
    ```json
    {
        "features": {
            "gas": [
                {
                    "name": "no2",
                    "long_name": "nitrogen dioxide",
                    "is_active": false,
                    "value": 21,
                    "details": {
                      "previous_reading": [
                      {
                        "date": "2017-03-27T10:00:00Z",
                        "value": 31
                      }, ...
                    ],
                      "description": "Lorem ......"
                  }
                },...
            ],
            "dust": [
                {
                  "name": "pm1",
                  "long_name": "Particulate Matter < 1 um",
                  "is_active": false,
                  "value": 21,
                  "details": {...}
                },...
          ]
        }
    }
    ```

***

### ZeeIndexHistory

`ZeeIndexHistory.vue` This component displays a row of historical AQI data. This component is reused in ZeeSubIndexHistory with a few css changes.

![zeeindexhistory](http://i.imgur.com/I1kPtmp.png)

#### Props
* `interval` - is a string either "hours", "days", "weeks", or "years" 

    `interval="days"`
* `data` - takes a json object 
    
    `data="aqi_collection`

    ```json
    {
      "collection":
        [
        {
            "date": "yyyy-mm-yyyyThh:mm:ssZ",
            "value": 2.3
        },
                {
            "date": "yyyy-mm-yyyyThh:mm:ssZ",
            "value": 2.3
        },...
        ]
    }
  ```
  The `date` should match [ISO8601](https://en.wikipedia.org/wiki/ISO_8601)
