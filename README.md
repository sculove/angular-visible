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
```html
<tag check-visible="[target classname]" check-delay="[check delay time (ms)]" ng-controller="[contoller Name]">
    <tag class="[target classname]"></tag>
</tag>
```

### Controller
```javascript
angular.controller("[contoller Name]", function($scope) {
    // ...
    $scope.$on("visible", function(e,data) {
        // you can get visible elements on the screen
        // data = [ element, ... ]
    });
});
```

## Demos
You can utilize to improve page loading performance.
You can implement 'lazy loading' easily

Please refer to following demo : 


## **Issues**
If you find a bug, please report us via the GitHub issues page.  
https://github.com/sculove/angular-visible/issues

## License
Licensed under LGPL v2:  
https://www.gnu.org/licenses/old-licenses/lgpl-2.0.html  

[![Analytics](https://ga-beacon.appspot.com/UA-37362821-7/angular-visible/readme)](https://github.com/sculove/angular-visible)