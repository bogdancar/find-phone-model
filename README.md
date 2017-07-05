find-phone-model
----------------

This lib is born out of frustration of not finding a reliable source to search for a phone model name starting from a browser user_agent result. For the first revision, only the Android [models accepted on Play Store](https://support.google.com/googleplay/answer/1727131?hl=en-GB) are on the list.
For the next revision, I will try to add the Apple models. I will try to keep the list of models up to date as often as I can.

Usage
=====

The lib exposes `findPhone(searchString)` function with the searchString parameter and returns an array of json objects with the models after appling the search criteria.