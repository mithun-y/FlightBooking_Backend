"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("airoplanes", [
      {
        modelNumber: "airbus380",
        capacity: 900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "boeing777",
        capacity: 450,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("airoplanes", [
      {
        // if i leave this object empty all data in the table is deleted
        [Op.or]: [{ modelNumber: "boeing777" }],
      },
    ]);
  },
};
