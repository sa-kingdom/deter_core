import {
    useSequelize,
} from "../init/sequelize.mjs";

import {
    DataTypes,
    Model,
} from "sequelize";

import discord from "discord.js";

const sequelize = useSequelize();

/**
 * User
 */
export default class User extends Model { }
User.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    username: DataTypes.STRING,
    displayName: DataTypes.STRING,
    avatarHash: DataTypes.STRING,
}, {
    sequelize,
    modelName: "user",
});

/**
 * Convert Discord's Member to Deter's User
 * @param {discord.Member} member Discord's Member
 * @return {Object}
 */
export function memberToUser(member) {
    const {
        user,
        nickname: memberLocalDisplayName,
        avatar: memberLocalAvatarHash,
    } = member;

    const {
        id,
        username,
        globalName: memberGlobalDisplayName,
        avatar: memberGlobalAvatarHash,
    } = user;

    const displayName = memberLocalDisplayName ||
        memberGlobalDisplayName ||
        username;
    const avatarHash = memberLocalAvatarHash ||
        memberGlobalAvatarHash;

    return {
        id,
        username,
        displayName,
        avatarHash,
    };
}
