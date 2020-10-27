package cucumber.steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import org.testng.Assert;
import org.testng.log4testng.Logger;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

// Step definitions for UI test
public class UITestStepDef {
	
	// create logger instance to perform logging
	Logger log = Logger.getLogger(UITestStepDef.class);
	
	WebDriver driver;
	WebDriverWait wait;
	
	static String HOME_PAGE = "https://www.tmsandbox.co.nz/";

	@Before
	public void before() {
		log.info("UI test starts...");
		//System.setProperty("webdriver.chrome.driver", "driver//chromedriver.exe");
		System.setProperty("webdriver.gecko.driver", "driver//geckodriver.exe");
    	driver = new FirefoxDriver();
    	wait = new WebDriverWait(driver, 5);
    	
    	driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    	driver.manage().window().maximize(); 
    	driver.manage().deleteAllCookies();
    	
    	log.info("The browser is ready...");
    	
    	System.out.println("**** The target sandbox website is ready ");
	}
	
	@After
	public void after() {
		if(driver != null){
			try {
				driver.quit();
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	@Given("^I am on the home page of TradeMe sandbox web$")
	public void navigate_to_homepage() {
    	
		driver.get(HOME_PAGE);
		waitSeconds(6);
		String homePageTitle = driver.getTitle();
    	
		log.info("Navigate to the home page: " + driver.getCurrentUrl() + "...");
    	log.info("On the home page: " + homePageTitle + "...");
    	System.out.println("**** Current url: " + driver.getCurrentUrl() + "\n**** homepage title: " + homePageTitle);
	}	


    @When("^I click \"Motors\" tab catalogue$") 
    public void click_motors_tab() {
    	// locate the 'Motors' catalog tab
    	WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("SearchTabs1_MotorsLink")));
    	waitSeconds(5);
    	element.click();
    	
    	log.info("Navigate to 'motors' catalogue page...");
    	System.out.println("**** Click the 'motors' catalogue tab");
    }
    
    @And("^I click \"Used Cars\" item in the center of page$")
    public void click_used_cars_item() {
    	waitSeconds(10);
		WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.partialLinkText("Used cars")));
    	waitSeconds(5);
    	element.click();
    	
    	log.info("Click 'Used Cars' link to query a list of used cars...");
    	System.out.println("**** Click 'Used Cars' link to get a list");
    }
    
    @Then("^I get a list of used cars$")
    public void get_used_cars_list() {
    	// element when no results matching	
    	boolean noResult = driver.findElements(By.tagName("h1")).get(0).getText().contains("No results matching");
    	
    	if(noResult) {
    		log.info("There is no used cars are listed...");
    	}else { 
        	List<WebElement> elements = wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.className("tmm-search-card-list-view")));    	
        	int carsNum = elements.size();	//the count of cars in the list
        	
        	log.info("Get an exsiting list of used cars ...");
        	log.info("Number of used cars in the list: " + carsNum + "...");
        	System.out.println("**** Number of used cars in the list: " + carsNum);        	
    	}
    }
    
    @And("^I check the 1st car to confirm following details: Number plate, Kilometres, Body and Seats$")
    public void check_car_detais() {
    	// click the first car item to view detail page
    	driver.findElements(By.className("tmm-search-card-list-view")).get(0).click();
    	waitSeconds(10);
    	// confirm the page is opened
    	wait.until(ExpectedConditions.presenceOfElementLocated(By.id("SellerProfileBox_ContactSellerButton")));
    	
    	String expecedText1 = "Number plate";
    	String expecedText2 = "Kilometres";
    	String expecedText3 = "Body";
    	String expecedText4 = "Seats";
    	
    	String carName = driver.findElements(By.tagName("h1")).get(0).getText();
    	
    	System.out.println("**** Car name: " + carName);
    	log.info("Check the details of: " + carName + "...");
    	
    	// collect all displayed attribute labels to a list
    	List<WebElement> motorsAttriLabels = driver.findElements(By.className("motors-attribute-label"));
    	List<String> labelValues = new ArrayList<String>();
    	for (WebElement attriLabel: motorsAttriLabels) {
    		labelValues.add(attriLabel.getText());
    	}
    	// check if all required details are displayed
    	boolean allDetailsExist = labelValues.contains(expecedText1) && labelValues.contains(expecedText2) 
    			&& labelValues.contains(expecedText3) && labelValues.contains(expecedText4);
    	
    	if(allDetailsExist) {
    		log.info("This car contains all required details");
    		System.out.println("**** All details are included ");
    	}else {
    		log.info("This car only contains partial of required details");
    		System.out.print("**** Partical details: /n" );
    		labelValues.forEach(System.out::println);
    	}
    	Assert.assertTrue(allDetailsExist, "This car does not contain all required details");
    	waitSeconds(10);
    }

    
    @When("^I click the \"Browse\" menu on the top of the page$")
    public void find_more_catalogues() {
    	// click to open drop-down catalog list
    	driver.findElement(By.id("SiteHeader_SiteTabs_browseDropDownLink")).click();
    	
    	log.info("Click 'Browse' to open drop-down catalogues list...");
    	System.out.println("**** Click 'Browse' to open drop-down list");
    }
    
    @And("^I click the link of \"Cars, bikes & boats\"$")
    public void click_cars_bikes_boats_catalogue() throws Throwable {
    	// click the required catalog link
    	WebElement motorsLink = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("SiteHeader_SiteTabs_BrowseDropDown_motorsLink")));
    	waitSeconds(5);
    	motorsLink.click();
    	
    	log.info("Click 'Cars, bikes & boats' link in the drop-down list...");
    	System.out.println("**** Click 'Cars, bikes & boats' link in the drop-down list");
    }
    
    @When("^I input \"used cars\" in the search box$")
    public void search_used_cars() throws Throwable {  
    	// input keywords in the searching box
    	wait.until(ExpectedConditions.presenceOfElementLocated(By.id("searchString"))).sendKeys("used cars");
    	waitSeconds(5);
    	
    	log.info("Find searchbox and input 'used cars' for searching...");
    	System.out.println("**** Find searchbox and input 'used cars'");
    }
    
    @And("^I click down-facing arrow in the search box$")
    public void click_cars_bikes_boats_in_searchbox() throws Throwable {
    	// open drop-down catalog list
    	wait.until(ExpectedConditions.presenceOfElementLocated(By.id("SearchType"))).click();
    	waitSeconds(10);
    	
    	log.info("Open drop-down catalogue list...");
    	System.out.println("**** Click to show drop-down searching type list");
    }
    
    @And("^I select the catalogue link \"Cars, bikes & boats\"$")
    public void select_cars_bikes_boats_catalogue() throws Throwable {
    	// select searching type as 'Cars, bikes & boats', value is 1
    	Select select = new Select(driver.findElement(By.id("SearchType")));
    	waitSeconds(5);
    	select.selectByValue("1");
    	
    	log.info("Select'Cars, bikes & boats' for searching...");
    	System.out.println("**** Select 'Cars, bikes & boats' for searching");
    }
    
    @And("^I click the search icon$")
    public void click_search_icon() throws Throwable {
    	// click search icon to search
    	driver.findElement(By.cssSelector("button[value='Search']")).click();
    	waitSeconds(10);
    	
    	log.info("Click search button for searching...");
    	System.out.println("**** Click the search button for searching");
    }
    
    @But("^No results matching$")
    public void no_matching_result() throws Throwable{
    	String expectedStr = "No results matching";
    	String actualResultStr = driver.findElements(By.tagName("h1")).get(0).getText();
    	System.out.println("**** actual result content: " + actualResultStr);
    	
    	Assert.assertTrue(actualResultStr.contains(expectedStr));
    	log.info("No matching results when searching by 'used cars' in searchbox...");
    	System.out.println("**** No matching result");
    	waitSeconds(10);
    }
    
    /*
     * implicit specific time
     * @param seconds
     */
	private void waitSeconds(int seconds) {
		driver.manage().timeouts().implicitlyWait(seconds, TimeUnit.SECONDS);
	}
	/*
	 * check if the element exists
	 * @param dr
	 * @param locator
	 */
// 	private boolean elementExist(WebDriver dr, By locator) {
//		try {
//			dr.findElement(locator);
//			return true;
//		}catch(Exception e) {
//			e.printStackTrace();
//			return false;
//		}
//	}
}