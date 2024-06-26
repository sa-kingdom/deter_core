import {
    useSequelize,
} from "../init/sequelize.mjs";

import {
    DataTypes,
    Model,
} from "sequelize";

import discord from "discord.js";

/**
 * Sequalise instance for database connection.
 */
const sequelize = useSequelize();

/**
 * Discussion
 */
export default class Discussion extends Model { }
Discussion.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    lastMessageId: DataTypes.STRING,
    messageCount: DataTypes.INTEGER,
    memberCount: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: "discussion",
    paranoid: true,
});

/**
 * Convert Discord's Thread to Deter's Discussion
 * @param {discord.Thread} thread Discord's Thread
 * @return {Object}
 */
export function threadToDiscussion(thread) {
    const {
        id, name, ownerId: userId, lastMessageId,
        messageCount, memberCount,
        archiveTimestamp: createdAt,
    } = thread;

    return {
        id, name, userId, lastMessageId,
        messageCount, memberCount, createdAt,
    };
}
