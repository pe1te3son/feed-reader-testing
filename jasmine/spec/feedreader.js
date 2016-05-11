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

    // Initial Entries suite
    describe('Initial Entries', function(){
         // Loads a Feed asynchonously
        beforeEach(function(done){
          loadFeed(1, done);
        });

        // If Feed container is not empty, it passes a test
        it('feed has loaded', function(done){
          expect($('.feed').children().length).not.toBe(0);
          done();
        });

    });// Initial entries ends

    // New Feed Selection
    // Tests if new feed differs from the previous
    describe("New Feed Selection", function(){
          var defaultFeed;
          var currentFeed;

          // Get Feed container content
          var getFeed = function(){
            return $('.entry').html();
          };


          beforeEach(function(done){
            // Loads First feed
            loadFeed(0, function(){
              // Saves content of First feed
              defaultFeed = getFeed();
              // Loads another feed
              loadFeed(1, done );

            });
          });

          it('load another feed', function(done){
            // Saves content of another feed
            currentFeed = getFeed();
            // If both feeds differ, passes a test
            expect(currentFeed).not.toEqual(defaultFeed);
            done();

          });

    });

}());
