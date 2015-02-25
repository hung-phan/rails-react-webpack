/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// lib
	var $ = __webpack_require__(2);
	var _ = __webpack_require__(5);
	//let superagent = require('superagent');
	var Router = __webpack_require__(4);
	
	// component
	var Home = __webpack_require__(1);
	
	$(document).ready(function () {
	  // define routing
	  var routes = React.createElement(Router.Route, { name: "main_page", path: "/", handler: Home });
	
	  Router.run(routes, Router.HashLocation, function (Handler) {
	    React.render(React.createFactory(Handler)(), document.getElementById("route"));
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// lib
	var React = __webpack_require__(3);
	
	// component
	var Home = React.createClass({
	  displayName: "Home",
	
	  getInitialState: function getInitialState() {
	    return {
	      text: "Click Me!"
	    };
	  },
	  clickMeUpdate: function clickMeUpdate(event) {
	    this.setState({
	      text: this.state.text.split("").reverse().join("")
	    });
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "container" },
	      React.createElement(
	        "div",
	        { className: "header" },
	        React.createElement(
	          "ul",
	          { className: "nav nav-pills pull-right" },
	          React.createElement(
	            "li",
	            { className: "active" },
	            React.createElement(
	              "a",
	              { href: "#" },
	              "Home"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#" },
	              "About"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#" },
	              "Contact"
	            )
	          )
	        ),
	        React.createElement(
	          "h3",
	          { className: "text-muted" },
	          "ReactJs ",
	          React.createElement("i", { className: "fa fa-cog fa-spin" })
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "jumbotron" },
	        React.createElement(
	          "h1",
	          null,
	          "'Allo, 'Allo!"
	        ),
	        React.createElement(
	          "p",
	          { className: "lead" },
	          "Always a pleasure scaffolding your apps."
	        ),
	        React.createElement(
	          "p",
	          null,
	          React.createElement(
	            "a",
	            { className: "btn btn-lg btn-success", href: "#" },
	            "Splendid!"
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "row marketing" },
	        React.createElement(
	          "div",
	          { className: "col-lg-6" },
	          React.createElement(
	            "h4",
	            null,
	            "HTML5 Boilerplate"
	          ),
	          React.createElement(
	            "p",
	            null,
	            "HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites."
	          ),
	          React.createElement(
	            "h4",
	            null,
	            "Bootstrap"
	          ),
	          React.createElement(
	            "p",
	            null,
	            "Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development."
	          ),
	          React.createElement(
	            "h4",
	            null,
	            "Modernizr"
	          ),
	          React.createElement(
	            "p",
	            null,
	            "Modernizr is an open-source JavaScript library that helps you build the next generation of HTML5 and CSS3-powered websites."
	          ),
	          React.createElement(
	            "h4",
	            null,
	            "ReactJs"
	          ),
	          React.createElement(
	            "h1",
	            { onClick: this.clickMeUpdate },
	            this.state.text
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "col-lg-6" },
	          React.createElement(
	            "h4",
	            null,
	            "Browserify"
	          ),
	          React.createElement(
	            "p",
	            null,
	            "Browserify lets you require('modules') in the browser by bundling up all of your dependencies."
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "footer" },
	        React.createElement(
	          "p",
	          null,
	          "♥ from the Yeoman team"
	        )
	      )
	    );
	  }
	});
	
	module.exports = Home;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = window.$;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = window.React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = window.ReactRouter;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = window._;

/***/ }
/******/ ])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGNmZTRhNTJkZGQxMDhjZDllNzYiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9zb3VyY2VzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9zb3VyY2VzL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuJFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5SZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5SZWFjdFJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5fXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7Ozs7QUNuQ0EsS0FBSSxDQUFDLEdBQVksbUJBQU8sQ0FBQyxDQUFRLENBQUMsQ0FBQztBQUNuQyxLQUFJLENBQUMsR0FBWSxtQkFBTyxDQUFDLENBQVEsQ0FBQyxDQUFDOztBQUVuQyxLQUFJLE1BQU0sR0FBTyxtQkFBTyxDQUFDLENBQWMsQ0FBQyxDQUFDOzs7QUFHekMsS0FBSSxJQUFJLEdBQUcsbUJBQU8sQ0FBQyxDQUFhLENBQUMsQ0FBQzs7QUFFbEMsRUFBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFXOztBQUUzQixPQUFJLE1BQU0sR0FDUixvQkFBQyxNQUFNLENBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSyxHQUN2RCxDQUFDOztBQUVGLFNBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsVUFBUyxPQUFPLEVBQUU7QUFDeEQsVUFBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUMsQ0FBQztFQUNKLENBQUMsQzs7Ozs7Ozs7O0FDakJGLEtBQUksS0FBSyxHQUFHLG1CQUFPLENBQUMsQ0FBTyxDQUFDLENBQUM7OztBQUc3QixLQUFJLElBQUksR0FBSSxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDNUIsa0JBQWUsNkJBQUc7QUFDaEIsWUFBTztBQUNMLFdBQUksRUFBRSxXQUFXO01BQ2xCLENBQUM7SUFDSDtBQUNELGdCQUFhLHlCQUFDLEtBQUssRUFBRTtBQUNuQixTQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osV0FBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO01BQ25ELENBQUMsQ0FBQztJQUNKO0FBQ0QsU0FBTSxvQkFBRztBQUNQLFlBQ0U7O1NBQUssU0FBUyxFQUFDLFdBQVc7T0FDeEI7O1dBQUssU0FBUyxFQUFDLFFBQVE7U0FDckI7O2FBQUksU0FBUyxFQUFDLDBCQUEwQjtXQUN0Qzs7ZUFBSSxTQUFTLEVBQUMsUUFBUTthQUFDOztpQkFBRyxJQUFJLEVBQUMsR0FBRzs7Y0FBUztZQUFLO1dBQ2hEOzs7YUFBSTs7aUJBQUcsSUFBSSxFQUFDLEdBQUc7O2NBQVU7WUFBSztXQUM5Qjs7O2FBQUk7O2lCQUFHLElBQUksRUFBQyxHQUFHOztjQUFZO1lBQUs7VUFDN0I7U0FDTDs7YUFBSSxTQUFTLEVBQUMsWUFBWTs7V0FBUywyQkFBRyxTQUFTLEVBQUMsbUJBQW1CLEdBQUs7VUFBSztRQUN6RTtPQUVOOztXQUFLLFNBQVMsRUFBQyxXQUFXO1NBQ3hCOzs7O1VBQXNCO1NBQ3RCOzthQUFHLFNBQVMsRUFBQyxNQUFNOztVQUE2QztTQUNoRTs7O1dBQUc7O2VBQUcsU0FBUyxFQUFDLHdCQUF3QixFQUFDLElBQUksRUFBQyxHQUFHOztZQUFjO1VBQUk7UUFDL0Q7T0FFTjs7V0FBSyxTQUFTLEVBQUMsZUFBZTtTQUM1Qjs7YUFBSyxTQUFTLEVBQUMsVUFBVTtXQUN2Qjs7OztZQUEwQjtXQUMxQjs7OztZQUF5SDtXQUV6SDs7OztZQUFrQjtXQUNsQjs7OztZQUE2RztXQUU3Rzs7OztZQUFrQjtXQUNsQjs7OztZQUFrSTtXQUVsSTs7OztZQUFnQjtXQUNoQjs7ZUFBSSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWM7YUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFBTTtVQUNuRDtTQUNOOzthQUFLLFNBQVMsRUFBQyxVQUFVO1dBQ3ZCOzs7O1lBQW1CO1dBQ25COzs7O1lBQXFHO1VBQ2pHO1FBQ0Y7T0FFTjs7V0FBSyxTQUFTLEVBQUMsUUFBUTtTQUNyQjs7OztVQUE2QjtRQUN6QjtNQUNGLENBQ047SUFDSDtFQUNGLENBQUM7O0FBRUYsT0FBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLEM7Ozs7OztBQy9EckIsMkI7Ozs7OztBQ0FBLCtCOzs7Ozs7QUNBQSxxQzs7Ozs7O0FDQUEsMkIiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA4Y2ZlNGE1MmRkZDEwOGNkOWU3NlxuICoqLyIsIid1c2Ugc3RyaWN0J1xuXG4vLyBsaWJcbmxldCAkICAgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5sZXQgXyAgICAgICAgICA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuLy9sZXQgc3VwZXJhZ2VudCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcbmxldCBSb3V0ZXIgICAgID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG5cbi8vIGNvbXBvbmVudFxubGV0IEhvbWUgPSByZXF1aXJlKCcuL2hvbWUvaG9tZScpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgLy8gZGVmaW5lIHJvdXRpbmdcbiAgbGV0IHJvdXRlcyA9IChcbiAgICA8Um91dGVyLlJvdXRlIG5hbWU9J21haW5fcGFnZScgcGF0aD0nLycgaGFuZGxlcj17SG9tZX0+PC9Sb3V0ZXIuUm91dGU+XG4gICk7XG5cbiAgUm91dGVyLnJ1bihyb3V0ZXMsIFJvdXRlci5IYXNoTG9jYXRpb24sIGZ1bmN0aW9uKEhhbmRsZXIpIHtcbiAgICBSZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRmFjdG9yeShIYW5kbGVyKSgpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm91dGUnKSk7XG4gIH0pO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9hc3NldHMvc291cmNlcy9tYWluLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBsaWJcbmxldCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vIGNvbXBvbmVudFxubGV0IEhvbWUgID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6ICdDbGljayBNZSEnXG4gICAgfTtcbiAgfSxcbiAgY2xpY2tNZVVwZGF0ZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGV4dDogdGhpcy5zdGF0ZS50ZXh0LnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJylcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXBpbGxzIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj48YSBocmVmPVwiI1wiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFib3V0PC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlJlYWN0SnMgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nIGZhLXNwaW5cIj48L2k+PC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb25cIj5cbiAgICAgICAgICA8aDE+J0FsbG8sICdBbGxvITwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPkFsd2F5cyBhIHBsZWFzdXJlIHNjYWZmb2xkaW5nIHlvdXIgYXBwcy48L3A+XG4gICAgICAgICAgPHA+PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tc3VjY2Vzc1wiIGhyZWY9XCIjXCI+U3BsZW5kaWQhPC9hPjwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFya2V0aW5nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGg0PkhUTUw1IEJvaWxlcnBsYXRlPC9oND5cbiAgICAgICAgICAgIDxwPkhUTUw1IEJvaWxlcnBsYXRlIGlzIGEgcHJvZmVzc2lvbmFsIGZyb250LWVuZCB0ZW1wbGF0ZSBmb3IgYnVpbGRpbmcgZmFzdCwgcm9idXN0LCBhbmQgYWRhcHRhYmxlIHdlYiBhcHBzIG9yIHNpdGVzLjwvcD5cblxuICAgICAgICAgICAgPGg0PkJvb3RzdHJhcDwvaDQ+XG4gICAgICAgICAgICA8cD5TbGVlaywgaW50dWl0aXZlLCBhbmQgcG93ZXJmdWwgbW9iaWxlIGZpcnN0IGZyb250LWVuZCBmcmFtZXdvcmsgZm9yIGZhc3RlciBhbmQgZWFzaWVyIHdlYiBkZXZlbG9wbWVudC48L3A+XG5cbiAgICAgICAgICAgIDxoND5Nb2Rlcm5penI8L2g0PlxuICAgICAgICAgICAgPHA+TW9kZXJuaXpyIGlzIGFuIG9wZW4tc291cmNlIEphdmFTY3JpcHQgbGlicmFyeSB0aGF0IGhlbHBzIHlvdSBidWlsZCB0aGUgbmV4dCBnZW5lcmF0aW9uIG9mIEhUTUw1IGFuZCBDU1MzLXBvd2VyZWQgd2Vic2l0ZXMuPC9wPlxuXG4gICAgICAgICAgICA8aDQ+UmVhY3RKczwvaDQ+XG4gICAgICAgICAgICA8aDEgb25DbGljaz17dGhpcy5jbGlja01lVXBkYXRlfT57dGhpcy5zdGF0ZS50ZXh0fTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGg0PkJyb3dzZXJpZnk8L2g0PlxuICAgICAgICAgICAgPHA+QnJvd3NlcmlmeSBsZXRzIHlvdSByZXF1aXJlKCdtb2R1bGVzJykgaW4gdGhlIGJyb3dzZXIgYnkgYnVuZGxpbmcgdXAgYWxsIG9mIHlvdXIgZGVwZW5kZW5jaWVzLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICA8cD7imaUgZnJvbSB0aGUgWWVvbWFuIHRlYW08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBIb21lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvYXNzZXRzL3NvdXJjZXMvaG9tZS9ob21lLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuJDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwid2luZG93LiRcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlJlYWN0Um91dGVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RSb3V0ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93Ll87XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIndpbmRvdy5fXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwYWdlLmJ1bmRsZS5qcyJ9