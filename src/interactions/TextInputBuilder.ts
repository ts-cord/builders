import { ComponentType, TextInputData, TextInputStyle } from '../types/interactions';

/**
 * A builder that constructs JSON data for text inputs.
 */
export class TextInputBuilder {
    /**
     * This text input data.
     */
    public readonly data: TextInputData;

    /**
     * Construct a new text input from data.
     * @param {TextInputData} [data] - Initial text input data.
     * @example
     * const textInput = new TextInputBuilder()
     *     .setCustomId('name')
     *     .setStyle(TextInputStyle.Short)
     *     .setLabel('Put your name');
     * 
     * const otherTextInput = new TextInputBuilder({
     *   custom_id: 'about_me',
     *   style: TextInputStyle.Paragraph,
     *   label: 'Say something about yourself'
     * });
     * @see https://discord.com/developers/docs/interactions/message-components#text-inputs
     */
    public constructor(data?: TextInputData) {
        this.data = { type: ComponentType.TextInput, ...data } as TextInputData;
    }

    /**
     * Sets the custom Id of this text input
     * @param {string} customId - Custom Id to use.
     * @returns {this} This updated text input.
     */
    public setCustomId(customId: string): this {
        this.data.custom_id = customId;

        return this;
    }

    /**
     * Sets the style of this text input
     * @param {TextInputStyle} style - Style to use.
     * @returns {this} This updated text input.
     */
    public setStyle(style: TextInputStyle): this {
        this.data.style = style;

        return this;
    }

    /**
     * Sets the label of this text input
     * @param {string} label - Label to use.
     * @returns {this} This updated text input.
     */
    public setLabel(label: string): this {
        this.data.label = label;

        return this;
    }

    /**
     * Sets the minimum length of this text input.
     * @param {number} minLength - Minimum length to use.
     * @returns {this} This updated text input.
     */
    public setMinLength(minLength: number): this {
        this.data.min_length = minLength;

        return this;
    }

    /**
     * Sets the maximum length of this text input.
     * @param {number} maxLength - Maximum length to use.
     * @returns {this} This updated text input.
     */
    public setMaxLength(maxLength: number): this {
        this.data.max_length = maxLength;
        
        return this;
    }

    /**
     * Sets whether this text input is required.
     * @param required - Whether this text input is required.
     * @default true
     * @returns {this} This updated text input.
     */
    public setRequired(required = true): this {
        this.data.required = required;

        return this;
    }

    /**
     * Sets the value of this text input.
     * @param {string} value - Value to use.
     * @returns {this} This updated text input.
     */
    public setValue(value: string): this {
        this.data.value = value;

        return this;
    }

    /**
     * Sets the placeholder of this text input.
     * @param {string} placeholder - Placeholder to use. 
     * @returns {this} This updated text input.
     */
    public setPlaceholder(placeholder: string): this {
        this.data.placeholder = placeholder;

        return this;
    }
}