import { Locales } from '../types/globals';
import { BasicApplicationCommandOption } from './BasicApplicationCommandOption';
import { ApplicationCommandOptionData, ApplicationCommandOptionType } from '../types/interactions';

/**
 * A build that constructs JSON data for slash command attachment options.
 */
export class SlashCommandAttachmentOption extends BasicApplicationCommandOption {
    public readonly description_localizations?: Locales;
    public readonly description: string;
    public readonly name_localizations?: Locales;
    public readonly name: string;
    public readonly type: ApplicationCommandOptionType.Attachment;
    public readonly required: boolean;

    /**
     * Constructs a new slash command attacment option from data.
     * @param {ApplicationCommandOptionData} [data] - Intial data for this option.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object
     */
    public constructor(data?: ApplicationCommandOptionData) {
        super(data);

        this.description_localizations = super.description_localizations;
        this.description = super.description;
        this.name_localizations = super.name_localizations;
        this.name = super.name;
        this.type = ApplicationCommandOptionType.Attachment;
        this.required = super.required;
    }
}