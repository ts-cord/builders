import { Locales } from '../types/globals';
import { BasicApplicationCommandOption } from './BasicApplicationCommandOption';
import { ApplicationCommandOptionChoiceData, ApplicationCommandOptionData, ApplicationCommandOptionType } from '../types/interactions';

/**
 * A builder that constructs common properties in numeric slash command options.
 */
export abstract class SlashCommandNumericOptionBuilder extends BasicApplicationCommandOption {
    public readonly name: string;
    public readonly name_localizations?: Locales | undefined;
    public readonly description: string;
    public readonly description_localizations?: Locales | undefined;
    public readonly type: ApplicationCommandOptionType;
    public readonly required: boolean;
    /**
     * The maximum value for this option.
     */
    public max_value?: number;

    /**
     * The minimum value for this option.
     */
    public min_value?: number;

    /**
     * Whether this option utilizes autocomplete.
     */
    public autocomplete?: boolean | undefined;

    /**
     * The choices of this option.
     */
    public choices?: ApplicationCommandOptionChoiceData[] | undefined;

    /**
     * Constructs a new slash command numeric (integer or number) option from data.
     * @param {ApplicationCommandOptionData} [data] - Initial data for this option.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object
     */
    public constructor(data?: ApplicationCommandOptionData) {
        super(data);

        this.name = super.name;
        this.name_localizations = super.name_localizations;
        this.description = super.description;
        this.description_localizations = super.description_localizations;
        this.type = super.type;
        this.required = super.required;
        this.max_value = data?.max_value;
        this.min_value = data?.min_value;
        this.autocomplete = data?.autocomplete;
        this.choices = data?.choices;
    }

    /**
     * Whether this option uses autocomplete.
     * @param autocomplete - Whether this option should use autocomplete.
     * @returns {this} This updated option.
     */
    public setAutocomplete(autocomplete = true): this {
        this.autocomplete = autocomplete;

        return this;
    }

    /**
     * Sets multiples choices for this option.
     * @param {ApplicationCommandOptionChoiceData[]} choices - Choices to set.
     * @returns {this} This updated option.
     */
    public setChoices(...choices: ApplicationCommandOptionChoiceData[]): this {
        this.choices = choices;

        return this;
    }

    /**
     * Adds multiple choices for this option.
     * @param {ApplicationCommandOptionChoiceData[]} choices - Choices to add.
     * @returns {this} This updated option.
     */
    public addChoices(...choices: ApplicationCommandOptionChoiceData[]): this {
        this.choices = (this.choices ?? []).concat(...choices);

        return this;
    }

    /**
     * Sets the maximum value for this option.
     * @param {number} max - Maximum value to use.
     * @returns {this} This updated option.
     */
    setMaxValue(max: number): this {
        this.max_value = max;

        return this;
    }

    /**
     * Sets the minimum value for this option.
     * @param min Minimum value to use.
     * @returns {this} This updated option.
     */
    setMinValue(min: number): this {
        this.min_value = min;

        return this;
    }

    /**
     * Maximum allowed application command option choices length.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
     */
    public static readonly MaxApplicationCommandOptionChoicesLength: number = 25;
}