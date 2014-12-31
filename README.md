[angular-visible] - Check if DOM elements are out of window.
=========================================
DOM 엘리먼트가 현재 화면에 시각적으로 보이는지를 확인하는 angularjs의 directive

## How to install?
To install angular-visible as a front-end dependency using Bower, simply execute the following command in your project’s folder:
```bash
bower install angular-visible
```

## How to use

### Directive
you can use "check-visible" directive
```html
<check-visible target-class="[target classname]" 
    check-delay="[check delay time (ms)]"
    check-remove-target="[true/false]" 
    ng-controller="[contoller Name]">
    <tag class="[target classname]"></tag>
    <tag class="[target classname]"></tag>
    <!-- ... -->
</check-visible>
```
 - target-class : class name of the visible targets. `[required attribute]`
 - check-delay : when firing 'scroll', 'resize'  event, run after delay. (ms)
 - check-remove-target : determines whether to remove targets when firing 'visible' event.

### Controller
you can know visibility DOM elements on the screen, through the 'visible' events
```javascript
angular.controller("[contoller Name]", function($scope) {
    // ...
    $scope.$on("visible", function(e,data) {
        // you can get visibility DOM elements on the screen
        // data = [ element, ... ]
    });
});
```

## Demo
You can utilize to improve page loading performance.  
You can implement 'lazy loading' easily  

Please refer to following demo :   
 - Lazy loading Image example  http://sculove.github.io/demo/angular-visible/lazyLoading.html


## **Issues**
If you find a bug, please report us via the GitHub issues page.  
https://github.com/sculove/angular-visible/issues

## License
Licensed under LGPL v2:  
https://www.gnu.org/licenses/old-licenses/lgpl-2.0.html  

[![Analytics](https://ga-beacon.appspot.com/UA-37362821-7/angular-visible/readme)](https://github.com/sculove/angular-visible)