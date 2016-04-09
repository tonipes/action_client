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
var ionic_angular_1 = require('ionic-angular');
var action_data_1 = require('../../providers/action-data/action-data');
var ActionListPage = (function () {
    function ActionListPage(nav, actionData, events) {
        var _this = this;
        this.nav = nav;
        this.actionData = actionData;
        this.events = events;
        this.actions = null;
        this.events.subscribe('actions:updated', function () {
            _this.updateData();
        });
    }
    ActionListPage.prototype.updateData = function () {
        var _this = this;
        this.actionData.load().then(function (actions) {
            _this.actions = actions;
        });
    };
    ActionListPage.prototype.sendAction = function (action) {
        this.actionData.sendAction(action.id).then(function (result) {
            console.log(result);
        });
    };
    ActionListPage.prototype.onPageWillEnter = function () {
        this.updateData();
    };
    ActionListPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/action-list/action-list.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, action_data_1.ActionData, ionic_angular_1.Events])
    ], ActionListPage);
    return ActionListPage;
}());
exports.ActionListPage = ActionListPage;
