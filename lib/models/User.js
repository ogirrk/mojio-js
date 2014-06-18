// Generated by CoffeeScript 1.6.3
(function() {
  var MojioModel, User,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  MojioModel = require('./MojioModel');

  module.exports = User = (function(_super) {
    __extends(User, _super);

    User.prototype._schema = {
      "Type": "String",
      "Name": "String",
      "UserName": "String",
      "FirstName": "String",
      "LastName": "String",
      "Email": "String",
      "UserCount": "Integer",
      "Credits": "Integer",
      "CreationDate": "String",
      "LastActivityDate": "String",
      "LastLoginDate": "String",
      "_id": "String",
      "_deleted": "Boolean"
    };

    User.prototype._resource = 'Users';

    User.prototype._model = 'User';

    function User(json) {
      User.__super__.constructor.call(this, json);
    }

    User.prototype.observe = function(children, callback) {
      if (children == null) {
        children = null;
      }
      return callback(null, null);
    };

    User.prototype.storage = function(property, value, callback) {
      return callback(null, null);
    };

    User.prototype.statistic = function(expression, callback) {
      return callback(null, null);
    };

    User._resource = 'Users';

    User._model = 'User';

    User.resource = function() {
      return User._resource;
    };

    User.model = function() {
      return User._model;
    };

    return User;

  })(MojioModel);

}).call(this);

/*
//@ sourceMappingURL=User.map
*/