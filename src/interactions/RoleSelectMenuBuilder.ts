import { SelectMenuData, SelectMenuType } from '../types/interactions';
import { BasicSelectMenuBuilder } from './BasicSelectMenuBuilder';

/**
 * A builder that constructs JSON data for role select menus.
 */
export class RoleSelectMenuBuilder extends BasicSelectMenuBuilder {
    /**
     * This role select menu data.
     */
    public readonly data: Partial<SelectMenuData>;

    /**
     * Constructs a new role select menu from data.
     * @param {Partial<SelectMenuData>} data - Initial role select menu data.
     * @example
     * const selectMenu = new RoleSelectMenuBuilder({
     *   custom_id: 'role_select_menu',
     * })
     *     .setPlaceholder('Select any options');
     * @see https://discord.com/developers/docs/interactions/message-components#select-menus
     */
    public constructor(data?: Partial<SelectMenuData>) {
        super(data);

        this.data = { type: SelectMenuType.Role, ...data };
    }
}