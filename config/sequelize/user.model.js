'use strict'

const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        mongodb_id: DataTypes.STRING,
        user_name: DataTypes.STRING,
        created_at: DataTypes.DATE,
        user_mongodb_id: DataTypes.STRING
    });

    return User;
};

module.exports = UserModel;