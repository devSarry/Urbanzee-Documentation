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
![color range](http://i.imgur.com/wH5VPFO.png)
### ZeeIndexHistory
The component can arrange upto 11 elements before the boxes overflow
![overflow](http://i.imgur.com/52xO6Fl.png)
This is cause by the text width needing to be 65px wide.


## Implementation Notes

### ZeeSubIndex
`ZeeSubIndex.vue` This component displays a row of the sub indices so2, no, co, pm1, pm10, and pm15


### ZeeIndexHistory

#### Introductio
`ZeeIndexHistory.vue` This component displays a row of historical AQI data

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
