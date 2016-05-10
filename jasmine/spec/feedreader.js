/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Tests each feed`s url not to be empy or undefined
        function testUrl(feed){
          it('feed has a link', function(){
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          });
        }

        // Loops through feeds
        allFeeds.forEach(function(feed){
          testUrl(feed);
        });


         // Tests each feed`s name not to be empy or undefined
        function testName(feed){
          it('feed has a name', function(){
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          });
        }

        // Loops through feeds
        allFeeds.forEach(function(feed){
          testName(feed);
        });

    });


    // Menu test suite
    describe( 'The menu' ,function(){

        // When called returns either true or false
        // If true menu is hidden
        var isHidden = function(){
          return $('body').hasClass('menu-hidden');
        }

        // Menu button
        var menuIcon = $('.menu-icon-link');

        // Stores return from isHidden()
        var menuClicked;



        // Tests whether menu is hidden by default or not
        it('is hidden by default', function(){
          var hiddenByDefault = isHidden();
          expect(hiddenByDefault).toBe(true);
        });

        // Tests Menu functionality when Menu button is triggered
        describe('on click', function(){

          // Runs before each test
          beforeEach(function(){
            menuIcon.click()
            menuClicked = isHidden();
          });

          // If Menu button clicked, show Menu
          // Should be false as .menu-hidden class is removed
          it('show menu', function(){
            expect(menuClicked).toBe(false);
          });

          // True if <body> has class .menu-hidden and therefore Menu is hidden
          it('hide menu', function(){
            expect(menuClicked).toBe(true);
          });

        });
    });// Menu suite ends

    /* TODO: Write a new test suite named "Initial Entries" */
    // Initial Entries suite
    describe('Initial Entries', function(){
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        

    });// Initial entries ends

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */


}());
