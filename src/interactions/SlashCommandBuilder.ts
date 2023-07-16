import { Locales } from '../types/globals';
import { ApplicationCommandOptionData, ApplicationCommandType, SlashCommandData } from '../types/interactions';

/**
 * A builder that constructs JSON data for slash commands.
 */
export class SlashCommandBuilder implements SlashCommandData {
    /**
     * The type related to this application command (will always be '1').
     */
    public readonly type: ApplicationCommandType.ChatInput;

    /**
     * The name of this command.
     */
    public name: string;

    /**
     * The name localizations of this command.
     */
    public name_localizations?: Locales;

    /**
     * The description of this command.
     */
    public description: string;

    /**
     * The description localizations of this command.
     */
    public description_localizations?: Locales;

    /**
     * The options of this command.
     */
    public options: ApplicationCommandOptionData[] | undefined;

    /**
     * The default member permissions of this command.
     * @remarks You can set this to '0' to disable the command by default.
     */
    public default_member_permissions: string | undefined;

    /**
     * Indicates whether the command is available in DMs with the application.
     * @remarks By default, commands are visible. This property is only for global commands.
     */
    public dm_permission: boolean | undefined;

    /**
     * Whether this command is NSFW.
     */
    public nsfw: boolean | undefined;

    /**
     * Constructs a new slash command from data.
     * @param {SlashCommandData} data - Initial data for this command.
     * @example
     * const slashCommand = new SlashCommandBuilder({ name: 'ban' })
     *     .setDescription('Ban an user from the server')
     *     .addUserOption(option => {
     *         option.setName('user')
     *         option.setDescription('The user to ban')
     *         option.setRequired(true)
     * });
     * @see https://discord.com/developers/docs/interactions/application-commands#application-commands
     */
    public constructor(data?: SlashCommandData) {
        this.type = data?.type ?? ApplicationCommandType.ChatInput;
        this.name = data?.name as string;
        this.name_localizations = data?.name_localizations;
        this.description = data?.description as string;
        this.description_localizations = data?.description_localizations;
        this.options = data?.options;
        this.default_member_permissions = data?.default_member_permissions;
        this.dm_permission = data?.dm_permission;
        this.nsfw = data?.nsfw;
    }

    /**
     * Sets the name of this command.
     * @param {string} name - Name to use.
     * @returns 
     */
    public setName(name: string): this {
        this.name = name;

        return this;
    }

    /**
     * Sets the name localizations of this command.
     * @param {Locales} locales - Name localizations to use.
     * @returns 
     */
    public setNameLocalizations(locales: Locales): this {
        this.name_localizations = locales;

        return this;
    }

    /**
     * Sets the description of this command.
     * @param {string} description - Description to use.
     * @returns 
     */
    public setDescription(description: string): this {
        this.description = description;

        return this;
    }

    /**
     * Sets the description localizations of this command.
     * @param {Locales} locales - Description localizations to use.
     * @returns 
     */
    public setDescriptionLocalizations(locales: Locales): this {
        this.description_localizations = locales;

        return this;
    }

    /**
     * Sets the default member permissions of this command.
     * @param {string} permissions - Default member permissions to use.
     * @remarks You can set this to '0' to disable the command by default.
     * @returns 
     */
    public setDefaultMemberPermissions(permissions: string): this {
        this.default_member_permissions = permissions;

        return this;
    }

    /**
     * Sets if the command is available in direct messages with the application.
     * @param dmPermission - Whether the command should be enabled in direct messages.
     * @remarks By default, commands are visible. This method is only for global commands.
     * @default true
     * @returns 
     */
    public setDMPermission(dmPermission = true): this {
        this.dm_permission = dmPermission;

        return this;
    }

    /**
     * Sets whether this command is NSFW.
     * @param nsfw - Whether this command is NSFW.
     * @default true
     * @returns 
     */
    public setNSFW(nsfw = true): this {
        this.nsfw = nsfw;

        return this;
    }

    /**
     * The maximum allowed slash command name length.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object
     */
    public static readonly MaxSlashCommandNameLenght: number = 32;

    /**
     * The maximum allowed slash command options length.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object
     */
    public static readonly MaxSlashCommandOptionsLength: number = 25;
}