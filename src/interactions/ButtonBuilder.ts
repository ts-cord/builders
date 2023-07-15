import { ButtonData, MessageComponentEmoji, ButtonStyle, ComponentType } from '../types/interactions';

/**
 * Creates a new button.
 */

export class ButtonBuilder {
    /**
     * This button data.
     */
    public readonly data: ButtonData;

    /**
     * Constructs a new button from data.
     * @param {ButtonData} [data] - Initial button data.
     */
    public constructor(data?: ButtonData) {
        this.data = data ?? { type: ComponentType.Button } as ButtonData;
    }

    /**
     * Sets the custom Id of this button.
     * @param {string} customId - The custom Id of the button.
     * @returns {this} This updated button.
     */
    public setCustomId(customId: string): this {
        this.data.custom_id = customId;

        return this;
    }
    /**
     * Sets the style of this button.
     * @param {ButtonStyle} style - The style of the button.
     * @returns {this} This updated button.
     */
    public setStyle(style: ButtonStyle): this {
        this.data.style = style;

        return this;
    }

    /**
     * Sets the label of this button.
     * @param {string} label - The label of the button.
     * @returns {this} This updated button.
     */
    public setLabel(label: string): this {
        this.data.label = label;

        return this;
    }

    /**
     * Sets the URL of this button.
     * @param {string} url - The URL of the button.
     * @returns {this} This updated button.
     */
    public setURL(url: string): this {
        this.data.url = url;

        return this;
    }
    
    /**
     * Sets the disabled of this button.
     * @param disabled - If the button must be disabled.
     * @default true
     * @returns {this} This updated button.
     */
    public setDisabled(disabled = true): this {
        this.data.disable = disabled;

        return this;
    }

    /**
     * Sets the emoji of this button.
     * @param {MessageComponentEmoji} emoji - The emoji of the button.
     * @returns {this} This updated button.
     */
    public setEmoji(emoji: MessageComponentEmoji): this {
        this.data.emoji = emoji;

        return this;
    }
}