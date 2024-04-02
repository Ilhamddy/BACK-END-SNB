"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          roleName: "Super Admin",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleName: "Admin",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleName: "User",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
