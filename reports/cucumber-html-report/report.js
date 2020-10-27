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
  "duration": 3508049864,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Query existing Used Cars listing from \"Motors\" catalogue",
  "description": "",
  "id": ";query-existing-used-cars-listing-from-\"motors\"-catalogue",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Positive"
    },
    {
      "line": 9,
      "name": "@Regression"
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
  "name": "I click \"Motors\" tab catalogue",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click \"Used Cars\" item in the center of page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I get a list of used cars",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I check the 1st car to confirm following details: Number plate, Kilometres, Body and Seats",
  "keyword": "And "
});
formatter.match({
  "location": "UITestStepDef.navigate_to_homepage()"
});
formatter.result({
  "duration": 5341022240,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.click_motors_tab()"
});
formatter.result({
  "duration": 2334359243,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.click_used_cars_item()"
});
formatter.result({
  "duration": 1206365283,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.get_used_cars_list()"
});
formatter.result({
  "duration": 81668606,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.check_car_detais()"
});
formatter.result({
  "duration": 1099050750,
  "error_message": "java.lang.AssertionError: This car does not contain all required details expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:99)\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\n\tat org.testng.Assert.assertTrue(Assert.java:45)\n\tat cucumber.steps.UITestStepDef.check_car_detais(UITestStepDef.java:153)\n\tat ✽.And I check the 1st car to confirm following details: Number plate, Kilometres, Body and Seats(src/test/resources/UIFunc.feature:15)\n",
  "status": "failed"
});
formatter.after({
  "duration": 3467725453,
  "status": "passed"
});
formatter.before({
  "duration": 2854384203,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Query existing Used Cars listing from \"Browse\" Menu",
  "description": "",
  "id": ";query-existing-used-cars-listing-from-\"browse\"-menu",
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
  "name": "I click the link of \"Cars, bikes \u0026 boats\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click \"Used Cars\" item in the center of page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I get a list of used cars",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I check the 1st car to confirm following details: Number plate, Kilometres, Body and Seats",
  "keyword": "And "
});
formatter.match({
  "location": "UITestStepDef.navigate_to_homepage()"
});
formatter.result({
  "duration": 1376971080,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.find_more_catalogues()"
});
formatter.result({
  "duration": 315438259,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.click_cars_bikes_boats_catalogue()"
});
formatter.result({
  "duration": 270341366,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.click_used_cars_item()"
});
formatter.result({
  "duration": 7856129919,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.get_used_cars_list()"
});
formatter.result({
  "duration": 119757991,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.check_car_detais()"
});
formatter.result({
  "duration": 1007528231,
  "error_message": "java.lang.AssertionError: This car does not contain all required details expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:99)\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\n\tat org.testng.Assert.assertTrue(Assert.java:45)\n\tat cucumber.steps.UITestStepDef.check_car_detais(UITestStepDef.java:153)\n\tat ✽.And I check the 1st car to confirm following details: Number plate, Kilometres, Body and Seats(src/test/resources/UIFunc.feature:24)\n",
  "status": "failed"
});
formatter.after({
  "duration": 2462657013,
  "status": "passed"
});
formatter.before({
  "duration": 2863233787,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Query exisitng Used Cars listing from search box",
  "description": "",
  "id": ";query-exisitng-used-cars-listing-from-search-box",
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
  "name": "I select the catalogue link \"Cars, bikes \u0026 boats\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click the search icon",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "No results matching",
  "keyword": "But "
});
formatter.match({
  "location": "UITestStepDef.navigate_to_homepage()"
});
formatter.result({
  "duration": 1539665422,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.search_used_cars()"
});
formatter.result({
  "duration": 135543579,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.click_cars_bikes_boats_in_searchbox()"
});
formatter.result({
  "duration": 258179106,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.select_cars_bikes_boats_catalogue()"
});
formatter.result({
  "duration": 282862798,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.click_search_icon()"
});
formatter.result({
  "duration": 243302064,
  "status": "passed"
});
formatter.match({
  "location": "UITestStepDef.no_matching_result()"
});
formatter.result({
  "duration": 15824294,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:99)\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\n\tat org.testng.Assert.assertTrue(Assert.java:45)\n\tat org.testng.Assert.assertTrue(Assert.java:55)\n\tat cucumber.steps.UITestStepDef.no_matching_result(UITestStepDef.java:225)\n\tat ✽.But No results matching(src/test/resources/UIFunc.feature:33)\n",
  "status": "failed"
});
formatter.after({
  "duration": 4498867864,
  "status": "passed"
});
});