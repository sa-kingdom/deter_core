import {
    useSequelize,
} from "../init/sequelize.mjs";

import {
    DataTypes,
    Model,
} from "sequelize";

const sequelize = useSequelize();

/**
 * User
 */
export default class User extends Model {}
User.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: "user",
});