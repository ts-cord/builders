import { SelectMenuData, SelectMenuType } from '../types/interactions';
import { BasicSelectMenuBuilder } from './BasicSelectMenuBuilder';

/**
 * A builder that constructs JSON data for mentionable select menus.
 */
export class MentionableSelectMenuBuilder extends BasicSelectMenuBuilder {
    /**
     * This mentionable select menu data.
     */
    public readonly data: Partial<SelectMenuData>;

    /**
     * Constructs a new mentionable select menu from data.
     * @param {Partial<SelectMenuData>} data - Initial mentionable select menu data.
     * @example
     * const selectMenu = new MentionableSelectMenuBuilder({
     *   custom_id: 'mentionable_select_menu',
     * })
     *     .setDisabled(true)
     * @see https://discord.com/developers/docs/interactions/message-components#select-menus
     */
    public constructor(data?: Partial<SelectMenuData>) {
        super(data);

        this.data = { type: SelectMenuType.Mentionable, ...data };
    }
}