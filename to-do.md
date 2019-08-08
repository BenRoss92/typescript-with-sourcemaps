## To do

* Create a gulp task called 'build-css' which will compile your SASS into CSS files, and store those files in the `dist/` folder.
    * Bonuses:
        * on saving any changes to SASS files.
        * Add sourcemaps to map your SASS back to your CSS files
* Create a gulp task called 'build-js' which will concatenate and minify your JS files, only if you're in a production environment.


* Create a default gulp task that can compile your typescript files into javascript files and place them in your `dist` folder. Run your gulp task and then run the resulting JS file

## Done

* Create a gulp task called 'lint-js' - will watch your javascript files and on saving/changing them, will check for JS linting issues
* Change your 'log' task to be dependent on your 'copy-files' task - should log out to the console every time you run 'copy-files' task
* Create a gulp task called 'log' that will log something to the console
* Create a gulp task called 'copy-files' that will copy all files from your `src/` folder to a `public/` folder