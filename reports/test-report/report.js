$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/UIFunc.feature");
formatter.feature({
  "line": 2,
  "name": "",
  "description": "As a Web UI tester:\nI want to query any existing Used Car listing \nSo that I can confirm that the following datails are shown for that car: \nNumber plate, Kilometres, Body and Seats",
  "id": "",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "duration": 3591489678,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Query existing Used Cars listing from \"Motors\" Category",
  "description": "",
  "id": ";query-existing-used-cars-listing-from-\"motors\"-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Positive"
    },
    {
      "line": 9,
      "name": "@Everytime"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on the home page of TradeMe sandbox web",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click \"Motors\" menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click \"Used Cars\" item in the center of page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I get an existing list of used cars",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I check the 1st car to confirm the following details: Number plate, Kilometres, Body and Seats",
  "keyword": "And "
});
formatter.match({
  "location": "UITestStepDef.navigate_to_homepage()"
});
formatter.result({
  "duration": 1595121662,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.click_motors_tab()"
});
formatter.result({
  "duration": 2338211163,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.click_used_cars_item()"
});
formatter.result({
  "duration": 978718791,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.get_used_cars_list()"
});
formatter.result({
  "duration": 5096799091,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.check_car_detais()"
});
formatter.result({
  "duration": 1073409387,
  "error_message": "java.lang.AssertionError: This car does not contain all required details expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:99)\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\n\tat org.testng.Assert.assertTrue(Assert.java:45)\n\tat cucumber.steps.UITestStepDef.check_car_detais(UITestStepDef.java:146)\n\tat ✽.And I check the 1st car to confirm the following details: Number plate, Kilometres, Body and Seats(src/test/resources/UIFunc.feature:15)\n",
  "status": "failed"
});
formatter.after({
  "duration": 1541200960,
  "status": "passed"
});
formatter.before({
  "duration": 2896052480,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Query existing Used Cars listing from \"Browse\" Category",
  "description": "",
  "id": ";query-existing-used-cars-listing-from-\"browse\"-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on the home page of TradeMe sandbox web",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click the \"Browse\" menu on the top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click the category of \"Cars, bikes \u0026 boats\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click \"Used Cars\" item in the center of page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I get an existing list of used cars",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I check the 1st car to confirm the following details: Number plate, Kilometres, Body and Seats",
  "keyword": "And "
});
formatter.match({
  "location": "UITestStepDef.navigate_to_homepage()"
});
formatter.result({
  "duration": 5793415188,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.find_more_catalogues()"
});
formatter.result({
  "duration": 277435729,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.click_cars_bikes_boats_catalogue()"
});
formatter.result({
  "duration": 2415173348,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.click_used_cars_item()"
});
formatter.result({
  "duration": 1107780852,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.get_used_cars_list()"
});
formatter.result({
  "duration": 5035424802,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.check_car_detais()"
});
formatter.result({
  "duration": 1613758683,
  "error_message": "java.lang.AssertionError: This car does not contain all required details expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:99)\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\n\tat org.testng.Assert.assertTrue(Assert.java:45)\n\tat cucumber.steps.UITestStepDef.check_car_detais(UITestStepDef.java:146)\n\tat ✽.And I check the 1st car to confirm the following details: Number plate, Kilometres, Body and Seats(src/test/resources/UIFunc.feature:24)\n",
  "status": "failed"
});
formatter.after({
  "duration": 2499325978,
  "status": "passed"
});
formatter.before({
  "duration": 2894020837,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Query exisitng Used Cars listing by search box",
  "description": "",
  "id": ";query-exisitng-used-cars-listing-by-search-box",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the home page of TradeMe sandbox web",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I input \"used cars\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click down-facing arrow in the search box",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select the item \"Cars, bikes \u0026 boats\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click the search icon",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "No results matching \"used cars\"",
  "keyword": "But "
});
formatter.match({
  "location": "UITestStepDef.navigate_to_homepage()"
});
formatter.result({
  "duration": 1421071864,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.search_used_cars()"
});
formatter.result({
  "duration": 116361732,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.click_cars_bikes_boats_in_searchbox()"
});
formatter.result({
  "duration": 251148193,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.select_cars_bikes_boats_catalogue()"
});
formatter.result({
  "duration": 281642718,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.click_search_icon()"
});
formatter.result({
  "duration": 252111945,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.no_matching_result()"
});
formatter.result({
  "duration": 16565949,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:99)\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\n\tat org.testng.Assert.assertTrue(Assert.java:45)\n\tat org.testng.Assert.assertTrue(Assert.java:55)\n\tat cucumber.steps.UITestStepDef.no_matching_result(UITestStepDef.java:217)\n\tat ✽.But No results matching \"used cars\"(src/test/resources/UIFunc.feature:33)\n",
  "status": "failed"
});
formatter.after({
  "duration": 4501699705,
  "status": "passed"
});
});