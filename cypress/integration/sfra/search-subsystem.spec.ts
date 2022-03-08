import HomePage from '../../pom/home.page';

describe('Search Subsystem', function () {

  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();
  });

  /**
     * Tests of out scope: None. (Feasability Analysis has not been performed).
     */

  it('TC001 - Verify the presence of Search Icon', function () {
    HomePage.click.searchIcon();
    HomePage.assertions.assertSearchIconPresent();
  });
  it('TC002 - Verify the presence of Serach input field', function () {
    HomePage.assertions.assertSearchFiledPresent();
  });
  it('TC003 - Verify that Serach input field is  represented as an input field with placeholder "What are you looking for?"', function () {
    HomePage.assertions.assertSearchFieldContains('What are you looking for?');
  });
  it.only('TC004 - Verify that placeholder is hidden when 1st symbol entered', function () {
    HomePage.click.searchIcon();
    HomePage.actions.findItemUsingSKU('aAZZ06403-105-35{enter}');

    //  HomePage.assertions.assertTextRemoved('What are you looking for?');
    HomePage.assertions.assertSearchResultPageTitle('AZZ06403');
  });
  it('TC005 - Verify that query based suggestions shall appear the in search fly-out', function () {
    HomePage.click.searchIcon();
    HomePage.actions.findItemUsingSKU('aAZZ06403-105-35{enter}');
        
  });
  it('TC006 - Verify that when user clicks/taps on Search button, the user will be redirected to search result page', function () {

  });
  it('TC007 - Verify that when user clicks/taps on Search button, the user will be redirected to PDP page', function () {

  });
  it('TC008 - Verify that when user clicks/taps Clear search phase button, empty search input field will be displayed', function () {

  });
  it('TC009 - Verify that when user clicks/taps \'X\' button, search fly-out will be closed ', function () {

  });
  it('TC010 - Verify that when user clicks/taps on visual search button, visual search functionality will open (out of scope?)', function () {

  });
  it('TC011 - Verify that when user clicks/taps on search link in Initial suggestons, user will be redirected to search results', function () {

  });
  it('TC012 - Verify that when user clicks/taps on suggested category link in query, the user will be redirected to PLP/CLP of the category ', function () {

  });
  it('TC013 - Verify that when user clicks/taps on <search_key> link, the search will be performed', function () {

  });
  it('TC014 - Verify that when user clicks/taps on visual search button, visual search functionality will open', function () {

  });
  it('TC015 - Verify that when user selects a image for search, result page will be displayed', function () {

  });
  it('TC016 - Verify that when user changes photo/image, new search will be performed', function () {

  });
  it('TC017 - Verify that when user clicks/taps on close button, visual search block will not be displayed anymore', function () {

  });
  it('TC018 - Verify that when user starts visaul search, the visual search loader is displayed', function () {

  });
});