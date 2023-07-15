import { BasicSelectMenuBuilder } from './BasicSelectMenuBuilder';
import { SelectMenuData, SelectMenuOptionData, SelectMenuType } from '../types/interactions';

/**
 * A builder that constructs JSON data for string select menus.
 */
export class StringSelectMenuBuilder extends BasicSelectMenuBuilder {
    /**
     * This string select menu data.
     */
    public readonly data: SelectMenuData;

    /**
     * Constructs a new string select menu from data.
     * @param {SelectMenuData} [data] - Initial string select menu data.
     * @example
     * const firstMenu = new StringSelectMenuBuilder({
     *   custom_id: 'some_cool_select_menu',
     *   placeholder: 'select an options',
     *   options: [
     *     {
     *        label: 'select me', value: '1',
     *        label: 'or me', value: '2'
     *     }
     *   ]
     * });
     * 
     * const secondMenu = new StringSelectMenuBuilder()
     *     .setCustomId('some_cool_select_menu')
     *     .setOptions({ label: 'select me', value: '1' });
     * @see https://discord.com/developers/docs/interactions/message-components#select-menus
     */
    public constructor(data?: SelectMenuData) {
        super(data);

        this.data = { type: SelectMenuType.String, ...data } as SelectMenuData;
    }

    /**
     * Sets this select menu options.
     * @param {SelectMenuOptionData[]} options - Options to set.
     * @returns {this} This updated select menu.
     */
    public setOptions(...options: SelectMenuOptionData[]): this {
        this.data.options = options;

        return this;
    }

    /**
     * Adds options to this select menu options.
     * @param {SelectMenuOptionData[]} options - Options to adds.
     * @returns {this} This updated select menu.
     */
    public addOptions(...options: SelectMenuOptionData[]): this {
        this.data.options = (this.data.options ?? []).concat(...options);

        return this;
    }
}