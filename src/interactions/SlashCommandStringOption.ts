import { Locales } from '../types/globals';
import { BasicApplicationCommandOption } from './BasicApplicationCommandOption';
import { ApplicationCommandOptionChoiceData, ApplicationCommandOptionData, ApplicationCommandOptionType } from '../types/interactions';

/**
 * A builder that constructs JSON data for slash command string options.
 */
export class SlashCommandStringOption extends BasicApplicationCommandOption {
    public readonly description_localizations?: Locales;
    public readonly description: string;
    public readonly name_localizations?: Locales;
    public readonly type: ApplicationCommandOptionType.String;
    public readonly required: boolean;

    /**
     * Whether this option utilizes autocomplete.
     */
    public autocomplete?: boolean;

    /**
     * The choices of this option.
     */
    public choices?: ApplicationCommandOptionChoiceData[];
    public readonly name: string;

    /**
     * The maximum length of this option.
     */
    public max_length?: number;

    /**
     * The minimum length of this option.
     */
    public min_length?: number;

    /**
     * Constructs a new slash command string option from data.
     * @param {ApplicationCommandOptionData} [data] - Initial data for this option.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object
     */
    public constructor(data?: ApplicationCommandOptionData) {
        super(data);

        this.name = super.name;
        this.description_localizations = super.description_localizations;
        this.description = super.description;
        this.name_localizations = super.name_localizations;
        this.type = ApplicationCommandOptionType.String;
        this.required = super.required;
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
     * Sets the maximum length of this option.
     * @param {number} maxLength - The maximum length this option can be.
     * @returns {this} This updated option.
     */
    public setMaxLength(maxLength: number): this {
        this.max_length = maxLength;

        return this;
    }

    /**
     * Sets the minimum length of this option.
     * @param minLength - The minimum length this option can be.
     * @returns {this} This updated option.
     */
    public setMinLength(minLength: number): this {
        this.min_length = minLength;

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
     * Maximum allowed application command option choices length.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
     */
    public static readonly MaxApplicationCommandOptionChoicesLength: number = 25;
}