import { Locales } from '../types/globals';
import { BasicApplicationCommandOption } from './BasicApplicationCommandOption';
import { ApplicationCommandOptionData, ApplicationCommandOptionType } from '../types/interactions';

/**
 * A build that constructs JSON data for slash command role options.
 */
export class SlashCommandRoleOption extends BasicApplicationCommandOption {
    public readonly description: string;
    public readonly description_localizations?: Locales | undefined;
    public readonly name: string;
    public readonly name_localizations?: Locales | undefined;
    public readonly type: ApplicationCommandOptionType.Role;
    public readonly required: boolean;

    /**
     * Constructs a new slash command role option from data.
     * @param {ApplicationCommandOptionData} [data] - Initial data for this option.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object
     */
    constructor(data?: ApplicationCommandOptionData) {
        super(data);

        this.description = super.description;
        this.description_localizations = super.description_localizations;
        this.name = super.name;
        this.name_localizations = super.name_localizations;
        this.type = ApplicationCommandOptionType.Role;
        this.required = super.required;
    }
}