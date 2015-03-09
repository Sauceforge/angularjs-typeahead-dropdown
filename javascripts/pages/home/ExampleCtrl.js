'use strict';

angular.module('exampleApp').controller('ExampleCtrl', ['$scope', function($scope) {
	$scope.ex1model = [];
	$scope.ex1data = [ {id: 1, label: "Tony"}, 
					   {id: 2, label: "Larita"}, 
					   {id: 3, label: "Brian"}, 
					   {id: 4, label: "Andrew"}, 
					   {id: 5, label: "Bruno"}, 
					   {id: 6, label: "Adrian"}, 
					   {id: 7, label: "Stuart"}, 
					   {id: 8, label: "Stephen"}, 
					   {id: 9, label: "Peter"},
					   {id: 10, label: "Alexander"}];
	$scope.ex1config = { modelLabel: "id", optionLabel: "label" };
	
	$scope.ex2model = [];
	$scope.ex2data = [ {id: 1, label: "Tony"}, 
					   {id: 2, label: "Larita"}, 
					   {id: 3, label: "Brian"}, 
					   {id: 4, label: "Andrew"}, 
					   {id: 5, label: "Bruno"}, 
					   {id: 6, label: "Adrian"}, 
					   {id: 7, label: "Stuart"}, 
					   {id: 8, label: "Stephen"}, 
					   {id: 9, label: "Peter"},
					   {id: 10, label: "Alexander"}];
	$scope.ex2config = { modelLabel: "id", optionLabel: "label" };
	$scope.ex2events = { onItemSelect: function($item) { alert("The model is now: " + angular.toJson($item)) } };
/*
	$scope.ex3model = [];
	$scope.ex3data = [
		{id: 1, label: "David"},
		{id: 2, label: "Jhon"},
		{id: 3, label: "Danny"},
		{id: 4, label: "Danny"}];
	$scope.ex3settings = {displayProp: 'label', idProp: 'label'};

	$scope.ex4model = [];
	$scope.ex4data = [
		{id: 1, label: "David"},
		{id: 2, label: "Jhon"},
		{id: 3, label: "Danny"}];
	$scope.ex4settings = {displayProp: 'label', idProp: 'id', externalIdProp: 'myCustomPropertyForTheObject'};

	$scope.ex5model = [];
	$scope.ex5data = [
		{id: 1, label: "David"},
		{id: 2, label: "Jhon"},
		{id: 3, label: "Danny"}];
	$scope.ex5settings = {};
    $scope.ex5customTexts = {buttonDefaultText: 'Select Users'};

	$scope.ex6model = [{id: 1}, {id: 3}];
	$scope.ex6data = [
		{id: 1, label: "David"},
		{id: 2, label: "Jhon"},
		{id: 3, label: "Danny"}];
	$scope.ex6settings = {};

	$scope.ex7model = [];
	$scope.ex7data = [
		{id: 1, label: "David"},
		{id: 2, label: "Jhon"},
		{id: 3, label: "Danny"}];
	$scope.ex7settings = {externalIdProp: ''};

	$scope.ex8model = [];
	$scope.ex8data = [
		{id: 1, label: "David"},
		{id: 2, label: "Jhon"},
		{id: 3, label: "Danny"}];

	$scope.ex9model = [];
	$scope.ex9data = [
		{id: 1, label: "David"},
		{id: 2, label: "Jhon"},
		{id: 3, label: "Danny"}];
	$scope.ex9settings = {enableSearch: true};

	$scope.ex10model = [];
	$scope.ex10data = [
		{id: 1, label: "David"},
		{id: 2, label: "Jhon"},
		{id: 3, label: "Danny"}];

	$scope.ex10settings = {selectionLimit: 2};

	$scope.ex12model = {};
	$scope.ex12data = [
		{id: 1, label: "David"},
		{id: 2, label: "Jhon"},
		{id: 3, label: "Danny"}];

    $scope.ex12settings = {selectionLimit: 1};


	$scope.ex11model = [];
	$scope.ex11data = [
		{id: 1, label: "David", gender: 'M'},
		{id: 2, label: "Jhon", gender: 'M'},
		{id: 3, label: "Lisa", gender: 'F'},
		{id: 4, label: "Nicole", gender: 'F'},
		{id: 5, label: "Danny", gender: 'M'}];

	$scope.ex11settings = {
		groupByTextProvider: function(groupValue)
		{
			if (groupValue === 'M')
			{
				return 'Male';
			}
			else
			{
				return 'Female';
			}
		}
	};

    $scope.ex13model = [];
    $scope.ex13data = [
        {id: 1, label: "David"},
        {id: 2, label: "Jhon"},
        {id: 3, label: "Lisa"},
        {id: 4, label: "Nicole"},
        {id: 5, label: "Danny"}];

    $scope.ex13settings = {
        smartButtonMaxItems: 3,
        smartButtonTextConverter: function(itemText, originalItem) {
            if (itemText === 'Jhon') {
                return 'Jhonny!';
            }

            return itemText;
        }
    };

    $scope.ex14model = [];
    $scope.ex14data = [
        {id: 1, label: "David"},
        {id: 2, label: "Jhon"},
        {id: 3, label: "Lisa"},
        {id: 4, label: "Nicole"},
        {id: 5, label: "Danny"},
        {id: 6, label: "Dan"},
        {id: 7, label: "Dean"},
        {id: 8, label: "Adam"},
        {id: 9, label: "Uri"},
        {id: 10, label: "Phil"}];

    $scope.ex14settings = {
        scrollableHeight: '100px',
        scrollable: true
    };

    $scope.ex15model = [];
    $scope.ex15data = [
        {id: 1, label: "David"},
        {id: 2, label: "Jhon"},
        {id: 3, label: "Lisa"},
        {id: 4, label: "Nicole"},
        {id: 5, label: "Danny"}];

    $scope.ex15settings = {
        enableSearch: true
    };

    $scope.customFilter = 'a';
*/
}]);
