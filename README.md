# angular-pusher-message
Angular directive to send live messages
## First
You need create account in https://pusher.com/ and create application.
## Install in your angular app
Download bower package:
```sh
bower install angular-live-pusher-message --save
```
Add files:
```sh
<!-- pusher-js -->
<script src="//js.pusher.com/3.0/pusher.min.js"></script>
<!-- pusher-angular -->
<script src="bower_components/pusher-angular/lib/pusher-angular.js"></script>
<!-- pusher-angular-live-message -->
<script src="bower_components/angular-live-pusher-message/angular-live-pusher-message/js/angular-live-pusher-message.js"></script>
<!-- your app -->
<script src="[YOUR APP].js"></script>
```
Now, you need inject the **angular-live-pusher-message** module:
```sh
var app = angular.module('your-app-name', [
        'pusher-angular',
        'angular-live-pusher-message'
    ]
);
```
When the module is injected, you are fre to use the directive:
```sh
<live-message options="{ client: '[CLIEN ID]', channel: '[YOUR CHANNEL]', event: '[YOUR EVENT]' }"></live-message>
```
The client, channel and event need be configurated in pusher.com

[TODO: HOW CONTRIBUTE]
