"use strict";
angular.module("typeaheadDropdown.tpl", [])
        .run(["$templateCache",
            function (a) {
                a.put("templates/typeaheadDropdown.tpl.html",
                    "<div>" +
                    //"<div ng-if=!options>Loading options...</div>" +
                    "<div ng-if=options class=dropdown dropdown>" +
                    "<div class=input-group>" +
                    "<input class=form-control placeholder=\"Select or type...\" ng-model=model[config.modelLabel] typeahead=\"op[config.optionLabel] for op in options | filter:$viewValue\" typeahead-editable=false typeahead-on-select=\"onSelect($item, $model, $label)\" ng-required=\"required\"> " +
                    "<span class=input-group-btn>" +
                    "<button class=\"btn btn-default dropdown-toggle\" dropdown-toggle>" +
                    "<span class=caret>" +
                    "</span>" +
                    "</button>" +
                    "</span>" +
                    "</div>" +
                    "<ul class=dropdown-menu role=menu style=max-height:200px;overflow-y:auto>" +
                    "<li ng-repeat=\"op in options\">" +
                    "<a href ng-click=onSelect(op)>{{op[config.optionLabel]}}</a>" +
                    "</li>" +
                    "</ul>" +
                    "</div>" +
                    "</div>");
            }
        ]),
    angular.module("apg.typeaheadDropdown", ["typeaheadDropdown.tpl", "ui.bootstrap"])
        .directive("typeaheadDropdown", function() {
            return {
                templateUrl: "templates/typeaheadDropdown.tpl.html",
                scope: { model: "=ngModel", options: "=",  config: "=?", events: "=", required: "=?ngRequired" },
                replace: !0,
                link: function($scope, $element, $attrs) {
                    $scope.externalEvents = {
                        onItemSelect: angular.noop
                    };

                    angular.extend($scope.externalEvents, $scope.events || []);
                },

                controller: ["$scope",
                    function (a) {
                        a.config = angular.extend({ modelLabel: "name", optionLabel: "name" }, a.config),

                        a.onSelect = function (i) {
                            if (a.model === undefined) {
                                a.model = [];
                            }
                            angular.extend(a.model, i);
                            a.model[a.config.modelLabel] = i[a.config.optionLabel];
                            if (a.events !== undefined) {
                                a.events.onItemSelect(i);
                            }
                        }
                    }
                ]
            }
        });