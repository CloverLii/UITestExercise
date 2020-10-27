@SmokeTest
Feature: 
As a Web UI tester:
I want to query any existing Used Car listing 
So that I can confirm that the following datails are shown for that car: 
	Number plate, Kilometres, Body and Seats
	

@Positive @Regression
  Scenario: Query existing Used Cars listing from "Motors" catalogue
  	Given I am on the home page of TradeMe sandbox web
  	When I click "Motors" tab catalogue
    And I click "Used Cars" item in the center of page
    Then I get a list of used cars
    And I check the 1st car to confirm following details: Number plate, Kilometres, Body and Seats
    
@Positive
 	Scenario: Query existing Used Cars listing from "Browse" Menu
 		Given I am on the home page of TradeMe sandbox web
 		When I click the "Browse" menu on the top of the page
 		And I click the link of "Cars, bikes & boats"
 		And I click "Used Cars" item in the center of page
    Then I get a list of used cars
    And I check the 1st car to confirm following details: Number plate, Kilometres, Body and Seats
 		
 @Negative 		
 	Scenario: Query exisitng Used Cars listing from search box
 	 	Given I am on the home page of TradeMe sandbox web
 		When I input "used cars" in the search box
 		And I click down-facing arrow in the search box
 		And I select the catalogue link "Cars, bikes & boats"
 		And I click the search icon
 		But No results matching
 	
 		