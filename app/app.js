"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('es6-shim');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var loading_modal_1 = require('./components/loading-modal/loading-modal');
var action_data_1 = require('./providers/action-data/action-data');
var auth_data_1 = require('./providers/auth-data/auth-data');
var auth_1 = require('./pages/auth/auth');
var action_list_1 = require('./pages/action-list/action-list');
var MyApp = (function () {
    function MyApp(platform, authData, actionData, app, events) {
        this.platform = platform;
        this.authData = authData;
        this.actionData = actionData;
        this.app = app;
        this.events = events;
        this.rootPage = auth_1.AuthPage;
        this.menuPages = [
            { title: 'Authentication', page: auth_1.AuthPage, index: 1, icon: 'lock' },
            { title: 'Settings', page: auth_1.AuthPage, index: 2, icon: 'settings' },
            { title: 'Actions', page: action_list_1.ActionListPage, index: 3, icon: 'menu' },
        ];
        this.listenToEvents();
        platform.ready().then(function () {
            ionic_native_1.StatusBar.styleDefault();
        });
    }
    MyApp.prototype.openPage = function (item) {
        this.rootPage = item.page;
    };
    MyApp.prototype.listenToEvents = function () {
        var _this = this;
        this.events.subscribe('auth:ready', function () {
            _this.actionData.load();
        });
    };
    MyApp = __decorate([
        ionic_angular_1.App({
            templateUrl: 'build/app.html',
            config: {},
            directives: [loading_modal_1.LoadingModal],
            providers: [auth_data_1.AuthData, action_data_1.ActionData, ionic_angular_1.IonicApp, ionic_angular_1.Events]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform, auth_data_1.AuthData, action_data_1.ActionData, ionic_angular_1.IonicApp, ionic_angular_1.Events])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
