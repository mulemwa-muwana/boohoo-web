# Code Review
This page will detail what code reviews are being made.

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