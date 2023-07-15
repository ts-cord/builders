import { ActionRowBuilder } from './ActionRowBuilder';
import { TextInputBuilder } from './TextInputBuilder';
import { ModalInteractionData } from '../types/interactions';

/**
 * A build that constructs JSON data for modals.
 */
export class ModalBuilder {
    /**
     * This modal data.
     */
    public readonly data: ModalInteractionData;

    /**
     * Constructs a new modal from data.
     * @param {ModalInteractionData} [data] - Initial modal data.
     * @example
     * const inputs = new ActionRowBuilder<TextInputBuilder>()
     *  .setComponents(
     *  new TextInputBuilder()
     *      .setCustomId('age')
     *       .setLabel('Put your age')
     * );
     * 
     * const modal = new ModalBuilder()
     *     .setComponents(inputs);
     * @see https://discord.com/developers/docs/interactions/message-components#text-inputs
     */
    public constructor(data?: ModalInteractionData) {
        this.data = data ?? {} as  ModalInteractionData;
    }

    /**
     * Sets the title of this modal.
     * @param {string} title - Title to use.
     * @returns {this} This updated modal.
     */
    public setTitle(title: string): this {
        this.data.title = title;

        return this;
    }

    /**
     * Sets the custom Id of this modal
     * @param {string} customId - Custom Id to use.
     * @returns {this} This updated modal.
     */
    public setCustomId(customId: string): this {
        this.data.custom_id = customId;

        return this;
    }

    /**
     * Sets the components of this modal.
     * @param {ActionRowBuilder<TextInputBuilder>} components - Components to set.
     * @returns {this} This updated modal.
     */
    public setComponents(components: ActionRowBuilder<TextInputBuilder>): this {
        this.data.components = components.data;

        return this;
    }
}