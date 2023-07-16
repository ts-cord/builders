/**
 * Types of a channel
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export enum ChannelType {
    GuildText,
    DM,
    GuildVoice,
    GroupDM,
    GuildCategory,
    GuildAnnouncement,
    AnnouncementThread,
    PublicThread,
    PrivateThread,
    GuildStageVoice,
    GuildDirectory,
    GuildForum
}