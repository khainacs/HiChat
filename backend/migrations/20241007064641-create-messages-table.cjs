// migrations/20241007064641-create-messages-table.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Messages', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      conversationId: {
        type: Sequelize.STRING,
        references: {
          model: 'Conversations', // tên bảng Conversations
          key: 'id',
        },
        allowNull: false,
      },
      userId: {
        type: Sequelize.STRING,
        references: {
          model: 'Users', // tên bảng Users
          key: 'id',
        },
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Messages');
  },
};
