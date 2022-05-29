'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BusLineDetails', [
      {
        'busLineId': 1,
        'timeOfTheWeek': 'Hafta ici',
        "departureTime": "06:00",
        "bikeSupportedDeparture": false,
        "doubleDisabledSupportedReturn": false,
        "disabledSupportedReturn": true,
        "isElectricalReturn": false,
        "bikeSupportedReturn": false,
        "tariffId": 1,
        "returnTime": "06:40",
        "isElectricalDeparture": false,
        'disabledSupportedDeparture': true,
        "doubleDisabledSupportedDeparture": false,
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'busLineId': 1,
        'timeOfTheWeek': 'Hafta ici',
        "departureTime": "06:07",
        "bikeSupportedDeparture": false,
        "doubleDisabledSupportedReturn": false,
        "disabledSupportedReturn": true,
        "isElectricalReturn": false,
        "bikeSupportedReturn": false,
        "tariffId": 1,
        "returnTime": "06:48",
        "isElectricalDeparture": false,
        'disabledSupportedDeparture': true,
        "doubleDisabledSupportedDeparture": false,
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'busLineId': 1,
        'timeOfTheWeek': 'Hafta ici',
        "departureTime": "06:14",
        "bikeSupportedDeparture": false,
        "doubleDisabledSupportedReturn": false,
        "disabledSupportedReturn": true,
        "isElectricalReturn": false,
        "bikeSupportedReturn": false,
        "tariffId": 1,
        "returnTime": "06:56",
        "isElectricalDeparture": false,
        'disabledSupportedDeparture': true,
        "doubleDisabledSupportedDeparture": false,
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'busLineId': 2,
        'timeOfTheWeek': 'Hafta ici',
        "departureTime": "06:21",
        "bikeSupportedDeparture": false,
        "doubleDisabledSupportedReturn": false,
        "disabledSupportedReturn": true,
        "isElectricalReturn": false,
        "bikeSupportedReturn": false,
        "tariffId": 1,
        "returnTime": "07:04",
        "isElectricalDeparture": false,
        'disabledSupportedDeparture': true,
        "doubleDisabledSupportedDeparture": false,
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'busLineId': 2,
        'timeOfTheWeek': 'Hafta ici',
        "departureTime": "06:28",
        "bikeSupportedDeparture": false,
        "doubleDisabledSupportedReturn": false,
        "disabledSupportedReturn": true,
        "isElectricalReturn": false,
        "bikeSupportedReturn": false,
        "tariffId": 1,
        "returnTime": "07:12",
        "isElectricalDeparture": false,
        'disabledSupportedDeparture': true,
        "doubleDisabledSupportedDeparture": false,
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'busLineId': 2,
        'timeOfTheWeek': 'Hafta ici',
        "departureTime": "06:35",
        "bikeSupportedDeparture": false,
        "doubleDisabledSupportedReturn": false,
        "disabledSupportedReturn": true,
        "isElectricalReturn": false,
        "bikeSupportedReturn": false,
        "tariffId": 1,
        "returnTime": "07:20",
        "isElectricalDeparture": false,
        'disabledSupportedDeparture': true,
        "doubleDisabledSupportedDeparture": false,
        'createdAt': new Date(),
        'updatedAt': new Date()
      }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BusLineDetails', null, {});
  }
};
