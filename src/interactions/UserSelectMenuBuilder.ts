import { SelectMenuData, SelectMenuType } from '../types/interactions';
import { BasicSelectMenuBuilder } from './BasicSelectMenuBuilder';

/**
 * A builder that constructs JSON data for user select menus.
 */
export class UserSelectMenuBuilder extends BasicSelectMenuBuilder {
    /**
     * This channel select menu data.
     */
    public readonly data: Partial<SelectMenuData>;

    /**
     * Constructs a new user select menu from data.
     * @param {Partial<SelectMenuData>} data - Initial channel select menu data.
     * @example
     * const selectMenu = new UserSelectMenuBuilder({
     *   custom_id: 'user_select_menu',
     *   placeholder: 'select any option',
     *   max_values: 5
     * })
     * @see https://discord.com/developers/docs/interactions/message-components#select-menus
     */
    public constructor(data?: Partial<SelectMenuData>) {
        super(data);

        this.data = { type: SelectMenuType.User, ...data };
    }
}