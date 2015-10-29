[http://kennethjk3.github.io/](http://kennethjk3.github.io/)

  Work in Progress!



---
#### Notes and things to remember:
- To add page(component)
  1. add '{Page}.jsx' to '/components' folder
  2. in add link in Header.jsx to add to nav bar
  3. add route in data.js file
  4. in Routes.jsx add var {Page} and require
    -in var Route add path and hander

- CSS/styling can be added by:
  -creating a .css file and importing it to main .js file
  -creating a .css file for each individual component and importing it the component's .jsx file
  -creating a ```var style={}``` in a component's .jsx file and adding it inline with the html element..  
  - example:
  ```
  var style = {
      backgroundColor='#roRoSexyBlue'
  };  
  var code = React.createCode({
      render: code () {
        return (
          <p style={style}> I'm a leaf on the wind... </p>
        etc.
      etc.
  ```
