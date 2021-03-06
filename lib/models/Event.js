// Generated by CoffeeScript 1.6.3
(function() {
  var Event, MojioModel,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  MojioModel = require('./MojioModel');

  module.exports = Event = (function(_super) {
    __extends(Event, _super);

    Event.prototype._schema = {
      "Type": "String",
      "MojioId": "String",
      "VehicleId": "String",
      "OwnerId": "String",
      "EventType": "Integer",
      "Time": "String",
      "Location": "Object",
      "TimeIsApprox": "Boolean",
      "BatteryVoltage": "Float",
      "ConnectionLost": "Boolean",
      "_id": "String",
      "_deleted": "Boolean",
      "TripId": "String",
      "Altitude": "Float",
      "Heading": "Integer",
      "Distance": "Float",
      "FuelLevel": "Float",
      "FuelEfficiency": "Float",
      "Speed": "Float",
      "Acceleration": "Float",
      "Deceleration": "Float",
      "Odometer": "Float",
      "RPM": "Integer",
      "DTCs": "Array",
      "MilStatus": "Boolean",
      "Force": "Float",
      "MaxSpeed": "Float",
      "AverageSpeed": "Float",
      "MovingTime": "Float",
      "IdleTime": "Float",
      "StopTime": "Float",
      "MaxRPM": "Float"
    };

    Event.prototype._resource = 'Events';

    Event.prototype._model = 'Event';

    function Event(json) {
      Event.__super__.constructor.call(this, json);
    }

    Event._resource = 'Events';

    Event._model = 'Event';

    Event.resource = function() {
      return Event._resource;
    };

    Event.model = function() {
      return Event._model;
    };

    return Event;

  })(MojioModel);

}).call(this);

/*
//@ sourceMappingURL=Event.map
*/
