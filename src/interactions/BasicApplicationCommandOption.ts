import { Locales } from '../types/globals';
import { ApplicationCommandOptionData, ApplicationCommandOptionType } from '../types/interactions';

/**
 * A basic application command option builder that contains common properties for application command builders.
 */
export abstract class BasicApplicationCommandOption {
    /**
     * The description localizations of this command.
     */
    public description_localizations?: Locales;

    /**
     * The description of this command.
     */
    public description: string;

    /**
     * The name localizations of this command.
     */
    public name_localizations?: Locales;

    /**
     * The name of this command.
     */
    public name: string;

    /**
     * The type of this command.
     */
    public type: ApplicationCommandOptionType;

    /**
     * Whether this option is required.
     * @default false
     */
    public required;

    /**
     * Constructs a new basic application command options from data.
     * @param {ApplicationCommandOptionData} [data] - Initial data for this options.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
     */
    public constructor(data?: ApplicationCommandOptionData) {
        this.description_localizations = data?.description_localizations;
        this.description = data?.description as string;
        this.name_localizations = data?.name_localizations;
        this.name = data?.name as string;
        this.type = data?.type as ApplicationCommandOptionType;
        this.required = data?.required ?? false;
    }

    /**
     * Sets the description of this option.
     * @param {string} description - Description to use. 
     * @returns {this} - This updated option.
     */
    public setDescription(description: string): this {
        this.description = description;

        return this;
    }

    /**
     * Sets the description localizations of this option.
     * @param {Locales} locales - Description localizations to use.
     * @returns {this} - This updated option.
     */
    public setDescriptionLocalizations(locales: Locales): this {
        this.description_localizations = locales;

        return this;
    }

    /**
     * Sets the name of this option.
     * @param {string} name - Name to use.
     * @returns {this} - This updated option.
     */
    public setName(name: string): this {
        this.name = name;

        return this;
    }

    /**
     * Sets the name localizations of this option.
     * @param {Locales} locales - Name localizations to use.
     * @returns {this} - This updated option.
     */
    public setNameLocalizations(locales: Locales): this {
        this.name_localizations = locales;

        return this;
    }

    /**
     * Sets whether this option is required.
     * @param required - Whether this option should be required.
     * @default false
     * @returns {this} - This updated option.
     */
    public setRequired(required = true): this {
        this.required = required;

        return this;
    }

    /**
     * Maximum allowed application command option name length.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
     */
    public static readonly MaxApplicationCommandOptionNameLength: number = 32;

    /**
     * Maximum allowed application command option description length.
     * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
     */
    public static readonly MaxApplicationCommandOptionDescriptionLength: number = 100;
}