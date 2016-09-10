var app = angular.module('angular-live-pusher-message', [
        'ngSanitize',
        'ui.router',
        'pusher-angular'
    ]
);
app.directive('liveMessage', function () {
    return {
        strict: 'AEC',
        transclude: true,
        scope: {
            options: '='
        },
        template: '<div id="live-message-container" ng-class="{show: showMessage}"><span ng-click="closeLiveMessage()" class="close ion-close-circled"></span><span class="ico"><center class="ion-alert"></center></span><p>{{ message.text }}</p><div class="actions"> <a ng-href="{{ message.action.url }}" target="blank_">{{ message.action.name }}</a></div></div>',
        controller: function ($pusher, $scope) {
            // message structure 
            // {
            //      "type": "success",
            //      "text": "Tenemos un problema bro!!!",
            //      "action": {
            //          "name": "more info",
            //          "url": "http://www.google.com"
            //      }
            // }
            var client = new Pusher($scope.options.client),
                pusher = $pusher(client),
                channel = pusher.subscribe($scope.options.channel);
            pusher.connection.bind($scope.options.event, function (states) {
                if(states.event === $scope.options.event){
                    $scope.showMessage = true;
                }
            })
            channel.bind($scope.options.event, function (data) {
                $scope.message = data;
            })
            $scope.closeLiveMessage = function () {
                $scope.showMessage = false;
            }
        }
    };
});