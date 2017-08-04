find-phone-model
----------------

This lib is born out of frustration of not finding a reliable source to search for a phone model name starting from a browser user_agent result. For the time being, only the Android [models accepted on Play Store](https://support.google.com/googleplay/answer/1727131?hl=en-GB) are on the list.
For the future revisions, I will try to add the Apple models. I will try to keep the list of models up to date as often as I can.

Usage
=====

You can use the lib either on front or back-end where you need to search for a phone model. Given the fact that the list of phones is contained inside the library, the suggested use is on the server. If you decide to use it on client, notice the overhead you are transporting.
To install the lib use `yarn add find-phone-model` or `npm i find-phone-model`
The lib exposes `findPhone(searchString)` function with the searchString parameter and returns an array of json objects with the models after appling the search criteria. If no model is found with the given search criteria, an empty array is returned.
The returned answer is in the form of: 
 ```
 [
 {
    "Retail Branding": "LGE",
    "Marketing Name": "LG G5",
    "Device": "h1",
    "Model": "LG-H831"
 }
 ]
 ```

 To have the latest phone-list on your solution, don't forget to update the library with `yarn upgrade find-phone-model` or `npm update find-phone-model`

 For a fully functional implementation on Angular 4, look at my repository [find-phone-model-demo](https://github.com/bogdancar/find-phone-model-demo)