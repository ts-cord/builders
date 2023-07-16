import { Locales } from '../types/globals';
import { SlashCommandNumericOptionBuilder } from './SlashCommandNumericOption';
import { ApplicationCommandOptionChoiceData, ApplicationCommandOptionData, ApplicationCommandOptionType } from '../types/interactions';

/**
 * A build that constructs JSON data for slash command integer options.
 */
export class SlashCommandIntegerOption extends SlashCommandNumericOptionBuilder {
    public readonly description: string;
    public readonly description_localizations?: Locales | undefined;
    public readonly name_localizations?: Locales | undefined;
    public readonly name: string;
    public readonly type: ApplicationCommandOptionType.Integer;
    public readonly required: boolean;
    public readonly min_value?: number | undefined;
    public readonly max_value?: number | undefined;
    public readonly autocomplete?: boolean | undefined;
    public readonly choices?: ApplicationCommandOptionChoiceData[] | undefined;

    /**
     * Constructs a new slash command integer option from data.
     * @param {ApplicationCommandOptionData} [data] - Initial data for this option.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object 
     */
    public constructor(data?: ApplicationCommandOptionData) {
        super(data);

        this.description = super.description;
        this.description_localizations = super.description_localizations;
        this.name_localizations = super.name_localizations;
        this.name = super.name;
        this.type = ApplicationCommandOptionType.Integer;
        this.required = super.required;
        this.min_value = super.min_value;
        this.max_value = super.max_value;
        this.autocomplete = super.autocomplete;
        this.choices = super.choices;
    }
}