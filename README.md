/** package.json file **/
1.  Edit/Change the 'name' to match the project
2.  If necessary, Change the Version Number
3.  Add the Description of the project
4.  Add keywords in the [] to match the project


/** gulpfile.babel.js **/
SETUP / INSTALL:
--src:
  --assets
    --fonts (custom or third party fonts like fontawesome)
    --images
    --js
    --scss
    --webfonts (custom or third party fonts like fontawesome)


DEVELOPMENT
  default: 
  > npm start or npm run start
  
  This will start the gulp automation process and watch the files for any changes
  > gulp clean
  > gulp copy
  > gulp styles
  > gulp images
  > gulp scripts


PRODUCTION
  > npm run build   (Without Zipping the files)
  > npm run bundle  (To Zip the files for production)

  To Run Tasks Individually:
    > gulp clean      --prod
    > gulp copy       --prod
    > gulp styles     --prod
    > gulp images     --prod
    > gulp scripts    --prod
    > gulp compress   --prod


/** Dynamic PHP/WordPress or Static HTML Files
Change this in the 'watch' task: 
  > gulp.watch('**/*.php', reload);
    -- .html for Static Template files
    -- .php for Dynamic WordPress files
    
  > In Styles Task, "sass"
    -- change 'outputStyle' to 'compressed' if necessary
