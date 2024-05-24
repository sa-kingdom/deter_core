import {
    Events,
    ChannelType,
} from "discord.js";

import {
    useClient,
} from "../init/discord.mjs";

import {
    getMust,
} from "../config.mjs";

import Discussion from "../models/discussion.mjs";

const client = useClient();

const guildId = getMust("DISCORD_GUILD_ID");
const channelIdForum = getMust("DISCORD_CHANNEL_ID_FORUM");

export default () => client.on(Events.ThreadDelete, async (thread) => {
    if (
        thread.guild.id !== guildId ||
        thread.parent.id !== channelIdForum ||
        thread.parent.type !== ChannelType.GuildForum
    ) {
        return;
    }

    const discussion = await Discussion.findByPk(thread.id);
    if (!discussion) {
        return;
    }

    await discussion.destroy();
});
