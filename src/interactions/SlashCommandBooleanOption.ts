import { Locales } from '../types/globals';
import { BasicApplicationCommandOption } from './BasicApplicationCommandOption';
import { ApplicationCommandOptionData, ApplicationCommandOptionType } from '../types/interactions';

/**
 * A build that constructs JSON data for slash command boolean options.
 */
export class SlashCommandBooleanOption extends BasicApplicationCommandOption {
    public readonly description_localizations?: Locales;
    public readonly description: string;
    public readonly name_localizations?: Locales;
    public readonly name: string;
    public readonly type: ApplicationCommandOptionType.Boolean;
    public readonly required: boolean;

    /**
     * Constructs a new slash command boolean option from data.
     * @param {ApplicationCommandOptionData} data - Intial data for this option.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object
     */
    public constructor(data?: ApplicationCommandOptionData) {
        super(data);

        this.description_localizations = super.description_localizations;
        this.description = super.description;
        this.name_localizations = super.name_localizations;
        this.name = super.name;
        this.type = ApplicationCommandOptionType.Boolean;
        this.required = super.required;
    }
}