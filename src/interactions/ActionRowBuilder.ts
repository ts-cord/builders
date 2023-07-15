import { ActionRowData, AnyComponentBuilder, ComponentType } from '../types/interactions';

/**
 * A builder that constructs JSON data for action rows.
 */
export class ActionRowBuilder<T extends AnyComponentBuilder> {
    /**
     * This action row components.
     */
    public components: T['data'][];
    /**
     * This action row data.
     */
    public readonly data: ActionRowData<T>;

    /**
     * Constructs a new action row from data.
     * @param {ActionRowData<T>} [data] - Initial action row data.
     * @example
     * const button = new ButtonBuilder()
     *     .setCustomId('some_button')
     *     .setLabel('Click!');
     * 
     * const actionRow = new ActionRowBuilder<ButtonBuilder>()
     *     .setComponents(button);
     * @see https://discord.com/developers/docs/interactions/message-components#action-rows
     */
    public constructor(data?: ActionRowData<T>) {
        this.data = { ...data as ActionRowData<T>, type: ComponentType.ActionRow };
        this.components = this.data.components ?? [];
    }

    public addComponents(...components: (T | T['data'])[]): this {
        const _components = components.map((component: T | T['data']) => 'data' in component ? component.data : component);

        this.data.components = (this.data.components ?? []).concat(..._components);
        this.components = this.data.components;

        return this;
    }
    public setComponents(...components: (T | T['data'])[]): this {
        this.data.components = components.map((component: T | T['data']) => 'data' in component ? component.data : component);
        this.components = this.data.components;

        return this;
    }

    /**
     * The maximum allowed length for a custom Id.
     * @see https://discord.com/developers/docs/interactions/message-components#custom-id
     */
    public static readonly MaxCustomIdLength: number = 100;

    /**
     * The maximum allowed action rows per message.
     * @see https://discord.com/developers/docs/interactions/message-components#action-rows
     */
    public static readonly MaxActionRowsPerMessage: number = 5;
}