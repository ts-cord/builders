import { MessageComponentEmoji, SelectMenuOptionData } from '../types/interactions';

/**
 * A builder that constructs JSON data for string select menu options.
 */
export class StringSelectMenuOptionBuilder {
    /**
     * This string select menu options data.
     * @default {}
     */
    public readonly data: Partial<SelectMenuOptionData>;

    /**
     * Constructs a new string select menu option from data.
     * @param {Partial<SelectMenuOptionData>} [data] - Initial string select menu option data.
     * @example
     * const firstOption = new StringSelectMenuOptionBuilder({
     *   label: 'super label',
     *   description: 'super mega label'
     * });
     * 
     * const secondOption = new StringSelectMenuOptionBuilder()
     *     .setLabel('Incredible label')
     *     .setValue('1');
     * @see https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
     */

    public constructor(data?: Partial<SelectMenuOptionData>) {
        this.data = data ?? {};
    }

    /**
     * Sets the label of this option.
     * @param {string} label - The label of this option.
     * @returns {this} This updated options.
     */
    public setLabel(label: string): this {
        this.data.label = label;

        return this;
    }

    /**
     * Sets the value of this option.
     * @param {string} value - The value of this option.
     * @returns {this} This updated options.
     */
    public setValue(value: string): this {
        this.data.value = value;

        return this;
    }

    /**
     * Sets the description of this options.
     * @param {string} description - The description of this option.
     * @returns {this} This updated options.
     */
    public setDescription(description: string): this {
        this.data.description = description;

        return this;
    }

    /**
     * Sets the emoji of this options.
     * @param {MessageComponentEmoji} emoji - The emoji of this option.
     * @returns {this} This updated options.
     */
    public setEmoji(emoji: MessageComponentEmoji): this {
        this.data.emoji = emoji;

        return this;
    }

    /**
     * Sets whether this option is selected by default.
     * @param isDefault - Whether this option is selected by default.
     * @default true
     * @returns {this} This updated options.
     */
    public setDefault(isDefault = true): this {
        this.data.default = isDefault;

        return this;
    }
}