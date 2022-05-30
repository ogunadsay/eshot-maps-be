'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BusLines', [
      {
        "lineHimId": 5,
        "description": "",
        "lineEnd": "ÜÇKUYULAR İSKELE",
        "lineStart": "NARLIDERE",
        "tariff": "A",
        "workingHoursReturn": "07:15 - 23:40",
        "workingHoursDeparture": "06:35 - 23:00",
        "lineDescription": "MİTHAT PAŞA CAD. - 9 EYLÜL HASTANESİ-F.ALTAY AKT.",
        "id": 5,
        "lineNo": 5,
        "lineName": "NARLIDERE - ÜÇKUYULAR İSKELE",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "lineHimId": 6,
        "description": "",
        "lineEnd": "ÜÇKUYULAR İSKELE",
        "lineStart": "ARIKENT",
        "tariff": "A",
        "workingHoursReturn": "07:10 - 23:50",
        "workingHoursDeparture": "06:35 - 23:20",
        "lineDescription": "MİTHAT PAŞA CAD. - 9 EYLÜL HASTANESİ",
        "id": 6,
        "lineNo": 6,
        "lineName": "ARIKENT - ÜÇKUYULAR İSK.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "lineHimId": 7,
        "description": "",
        "lineEnd": "ÜÇKUYULAR İSKELE",
        "lineStart": "SAHİLEVLERİ",
        "tariff": "A",
        "workingHoursReturn": "06:40 - 00:00",
        "workingHoursDeparture": "06:00 - 23:10",
        "lineDescription": "MİTHAT PAŞA CAD. - 9 EYLÜL HASTANESİ",
        "id": 7,
        "lineNo": 7,
        "lineName": "SAHİLEVLERİ - ÜÇKUYULAR İSK.",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "lineHimId": 8,
        "description": "",
        "lineEnd": "F.ALTAY AKT.",
        "lineStart": "GÜZELBAHÇE",
        "tariff": "A",
        "workingHoursReturn": "06:00 - 01:05",
        "workingHoursDeparture": "06:00 - 00:10",
        "lineDescription": "SEFERİHİSAR KAVŞAĞI-MİTHAT PAŞA CAD. - 9 EYLÜL HASTANESİ",
        "id": 8,
        "lineNo": 8,
        "lineName": "GÜZELBAHÇE - F.ALTAY AKTARMA MERKEZİ",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BusLines', null, {});
  }
};
