# Accessing Air Quality data
The Finnish [ilmatieteenlaitos](http://en.ilmatieteenlaitos.fi/) provides its data through an api

### [Registration](https://ilmatieteenlaitos.fi/rekisteroityminen-avoimen-datan-kayttajaksi)
Just need an email to get an api key. 

>Käyttääkseen rajapintoja käyttäjän on haettava API-avain (fmi-apikey). Palveluissa on API-avainkohtaisia hakumäärärajoitteita.

>Yhdellä API-avaimella saa tehdä latauspalveluun enintään 20 000 kyselyä vuorokaudessa.
Katselupalveluun saa tehdä enintään 10 000 kyselyä vuorokaudessa.
Yhdellä API-avaimella saa tehdä molempiin palveluihin yhteensä enintään 600 kyselyä viidessä minuutissa.

The api is rate limited to 20,000 queries a day and 600 a min

*Temporary api key*
d1f2b9a8-4c3b-4fd7-aa18-730d296eaf80


### [Usage](http://en.ilmatieteenlaitos.fi/open-data-manual-fmi-wfs-services)
The api return xml data 

http://data.fmi.fi/fmi-apikey/d1f2b9a8-4c3b-4fd7-aa18-730d296eaf80/wfs?request=getFeature&storedquery_id=fmi::observations::airquality::hourly::simple&place=helsinki

