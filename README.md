# Code Review
This page will detail what code reviews are being made.

**Test Design**

* We should be creating all our tests based off a test plan, we have been using the following link to create/design/plan test automation. https://docs.google.com/spreadsheets/d/1aACipr0OiGFNq1KF3hbZ4EuP8664OU7cBf4LScJBz1k/edit#gid=1492768424
* When creating a test file, if we are takin tests out of scope, please have a comment at the top of your test file detailing the test TC number and why it's been removed.

**Push Process**

* New code must be placed in it's own branch until all tests are passing
* All new branchs will be tested before merging.
* Merge requests must be done through bitbuckets merge request with an automation reviewer.  

**All page object model files must be:**

* Implement the AbstractPage class i.e. ```class Page implements AbstractPage { }```  
* Must default export as a new instance not static class i.e. ```default export new Page();```  

**TypeScript**

* All custom types created must be placed in support/types.ts and be imported from there.  
* Not all objects need to use custom types but it is highly appriciate and advised.  

**File Structure**

* Tests need to be named agnostically, instead of 'nastygal-login-tests' it must be 'login-tests'.  
* All tests to be placed in integration folder with their name ending in .spec.ts.  
* All page objects must be the page name ending with .page.ts.  
* Only one class per page object page, and one page object page file per page on the website.  


**Configuration Files**

* All config files will exist in the config folder.   
* Add a new npm run script in the package.json scripts seciton when you create a new config.  
* If a new package is added, please ensure it's maintained or had regular updates.  

**Helpers/Common Utilities**

* Any helper methods must be stored in the helpers folder.  
* If you want to create some kind of manager, like a test data manager, make sure its in helpers/managers  


**Test Data**

* Test data must be stored in the fixtures folder, try to avoid cypress.env files as they get messy.  

If you need any help with automation, automation guidelines or planning, please contact jordan.benyon@boohoo.com or Jordan Benyon on slack or teams.