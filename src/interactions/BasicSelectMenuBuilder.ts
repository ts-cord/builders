import { SelectMenuData } from '../types/interactions';

/**
 * A basic select menu builder that contains common properties for select menu builders.
 */
export abstract class BasicSelectMenuBuilder {
    /**
     * This select menu data.
     */
    public readonly data: Partial<SelectMenuData>;

    /**
     * Constructs a new select menu from data.
     * @param {Partial<SelectMenuData>} [data] - Initial select menu data.
     * @see https://discord.com/developers/docs/interactions/message-components#select-menus
     */
    public constructor(data?: Partial<SelectMenuData>) {
        this.data = data ?? {};
    }

    /**
     * Sets the custom Id of this select menu.
     * @param {string} customId - The custom Id of the select menu.
     * @returns {this}
     */
    public setCustomId(customId: string): this {
        this.data.custom_id = customId;

        return this;
    }

    /**
     * Sets if the select menu must be disabled.
     * @param disabled - If must be disabled.
     * @default true
     * @returns {this}
     */
    public setDisabled(disabled = true): this {
        this.data.disabled = disabled;

        return this;
    }

    /**
     * Sets the placeholder of this select menu.
     * @param {string} placeholder - The placeholder of the select menu.
     * @returns {this}
     */
    public setPlaceholder(placeholder: string): this {
        this.data.placeholder = placeholder;

        return this;
    }

    /**
     * Sets the min values of this select menu.
     * @param minValues - The minimum values of the select menu.
     * @returns {this}
     */
    public setMinValues(minValues: number): this {
        this.data.min_values = minValues;

        return this;
    }

    /**
     * Sets the min values of this select menu.
     * @param maxValues - The maximum values of the select menu.
     * @returns {this}
     */
    public setMaxValues(maxValues: number): this {
        this.data.max_values = maxValues;

        return this;
    }
}