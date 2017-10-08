var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope, $sce) {
$scope.messages=[
{
'sender':'USER',
'text':'HI',
'time':'10:01AM'
},
{
'sender':'BOT',
'text':'What can I do for you?',
'time':'10:01AM'
},
{
'sender':'USER',
'text':'News About One Direction',
'time':'10:02AM'
},
{
'sender':'BOT',
'text':'They are over!!',
'time':'10:02AM'
}
];
});
