import { ChannelType } from '../types/messages';
import { SelectMenuData, SelectMenuType } from '../types/interactions';
import { BasicSelectMenuBuilder } from './BasicSelectMenuBuilder';

/**
 * A builder that constructs JSON data for channel select menus.
 */
export class ChannelSelectMenuBuilder extends BasicSelectMenuBuilder {
    /**
     * This channel select menu data.
     */
    public readonly data: Partial<SelectMenuData>;

    /**
     * Constructs a new channel select menu from data.
     * @param {Partial<SelectMenuData>} [data] - Initial channel select menu data.
     * @example
     * const selectMenu = new ChannelSelectMenuBuilder({
     *   custom_id: 'channel_select_menu',
     *   channelTypes: [ChannelType.GuildText, ChannelType.GuildForum]
     * });
     * 
     * const otherSelectMenu = new ChannelSelectMenuBuilder({
     *   custom_id: 'channel_select_menu',
     *   min_values: 3
     * })
     *     .setChannelTypes(ChannelType.GuildText)
     *     .addChannelTypes(ChannelType.GuildVoice);
     * @see https://discord.com/developers/docs/interactions/message-components#select-menus
     */
    public constructor(data?: Partial<SelectMenuData>) {
        super(data);

        this.data = { type: SelectMenuType.Channel, ...data };
    }

    /**
     * Sets this channel types.
     * @param {ChannelType[]} types - Types to set.
     * @returns {this} This updated select menu.
     */
    public setChannelTypes(...types: ChannelType[]): this {
        this.data.channel_types = types;

        return this;
    }

    /**
     * Adds types to this select menu channel types.
     * @param {ChannelType[]} types - Types to add.
     * @returns {this} This updated select menu.
     */
    public addChannelTypes(...types: ChannelType[]): this {
        this.data.channel_types = (this.data.channel_types ?? []).concat(...types);

        return this;
    }
}