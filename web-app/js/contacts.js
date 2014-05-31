angular.module("contact", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '../view/list.html',
                controller: 'List'}).
            when('/contact/:index', {
                templateUrl: '../view/edit.html',
                controller: 'Edit'});
    })
    .controller("List", function ($scope) {
        $scope.contacts = [
            {"name": "neeraj1", "mobile": "9582851007"},
            {"name": "neeraj2", "mobile": "9582851008"},
            {"name": "neeraj3", "mobile": "9582851009"},
            {"name": "neeraj4", "mobile": "9582851001"}
        ]
    })
    .controller("Edit", function ($scope, $routeParams) {
        console.debug($routeParams.index);
        $scope.contact = $scope.contacts[$routeParams.index];
        $scope.index = $routeParams.index;
    });
