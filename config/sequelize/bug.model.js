'use strict'

const BugModel = (sequelize, DataTypes) => {
    const Bug = sequelize.define('Bug', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        // user_id: DataTypes.UUID,
        created_at: DataTypes.DATE,
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        category: DataTypes.STRING,
        description: DataTypes.STRING,
        solution: DataTypes.STRING,
        user_mongodb_id: DataTypes.STRING,
        file: DataTypes.STRING
    });

    return Bug;
};

module.exports = BugModel;