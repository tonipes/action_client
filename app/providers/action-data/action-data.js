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
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var auth_data_1 = require('../../providers/auth-data/auth-data');
require('rxjs/add/operator/map');
var ActionData = (function () {
    function ActionData(http, authData, events) {
        this.http = http;
        this.authData = authData;
        this.events = events;
        this.data = null;
    }
    ActionData.prototype.load = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        if (!this.authData.authdata) {
            return Promise.reject('fail');
        }
        var auth = this.authData.getRequestData();
        return new Promise(function (resolve, reject) {
            _this.http.get(auth.address, { headers: auth.headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                _this.events.publish('actions:updated');
                resolve(_this.data);
            }, function (error) {
                reject('Fail');
            });
        });
    };
    ActionData.prototype.sendAction = function (actionid) {
        var _this = this;
        var auth = this.authData.getRequestData();
        return new Promise(function (resolve) {
            _this.http.post(auth.address + '/' + actionid, '', { headers: auth.headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    ActionData = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_data_1.AuthData, ionic_angular_1.Events])
    ], ActionData);
    return ActionData;
}());
exports.ActionData = ActionData;
