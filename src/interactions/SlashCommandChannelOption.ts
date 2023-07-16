import { Locales } from '../types/globals';
import { ChannelType } from '../types/messages';
import { BasicApplicationCommandOption } from './BasicApplicationCommandOption';
import { ApplicationCommandOptionData, ApplicationCommandOptionType } from '../types/interactions';

/**
 * A build that constructs JSON data for slash command channel options.
 */
export class SlashCommandChannelOption extends BasicApplicationCommandOption {
    public readonly description_localizations?: Locales | undefined;
    public readonly description: string;
    public readonly name_localizations?: Locales | undefined;
    public readonly name: string;
    public readonly type: ApplicationCommandOptionType.Channel;
    public readonly required: boolean;

    /**
     * The channel types for this option.
     */
    public readonly channel_types?: ChannelType[];

    /**
     * Constructs a new slash command channel option from data.
     * @param {ApplicationCommandOptionData} [data] - Initial data for this option.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object
     */
    public constructor(data?: ApplicationCommandOptionData) {
        super(data);

        this.description_localizations = super.description_localizations;
        this.description = super.description;
        this.name_localizations = super.name_localizations;
        this.name = super.name;
        this.type = ApplicationCommandOptionType.Channel;
        this.required = super.required;
        this.channel_types = data?.channel_types;
    }
}