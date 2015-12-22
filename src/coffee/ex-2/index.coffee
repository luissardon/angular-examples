acumuladorApp = angular.module 'acumuladorApp', []

acumuladorApp.controller 'acumuladorAppCtrl', ['$scope', ($scope) ->
    $scope.total = 0
    $scope.cuanto = 0

    $scope.sumar = ->
        $scope.total += parseInt $scope.cuanto
        return

    $scope.restar = ->
        $scope.total -= parseInt $scope.cuanto
        return
    return
]
