import { Locales } from '../types/globals';
import { ContextMenuCommandType, ContextMenuCommandData } from '../types/interactions';

/**
 * Creates a new context menu.
 */

export class ContextMenuCommandBuilder implements ContextMenuCommandData {
    /**
     * The type of the context menu command.
     */
    public type: ContextMenuCommandType;

    /**
     * The name of the context menu command.
     */
    public name: string;

    /**
     * The localized names of the context menu command.
     */
    public nameLocalizations: Locales | undefined;

    /**
     * The default member permissions for the context menu command.
     */
    public defaultMemberPermissions: string | undefined;

    /**
     * The direct message permission for the context menu command.
     */
    public dmPermission: boolean | undefined;

    /**
     * Creates a new context menu.
     * @param {ContextMenuCommandData} data - The data for this context menu.
     */
    public constructor(data?: ContextMenuCommandData) {
        this.type = data?.type as ContextMenuCommandType;
        this.name = data?.name as string;
        this.nameLocalizations = data?.nameLocalizations;
        this.defaultMemberPermissions = data?.defaultMemberPermissions;
        this.dmPermission = data?.dmPermission;
    }

    /**
     * Sets the type of the context menu command.
     * @param {ContextMenuCommandType} type - The type of the command.
     * @returns {ContextMenuCommandBuilder} The updated builder instance.
     */
    public setType(type: ContextMenuCommandType): ContextMenuCommandBuilder {
        this.type = type;

        return this;
    }

    /**
     * Sets the name of the context menu command.
     * @param {string} name - The name of the command.
     * @returns {ContextMenuCommandBuilder} The updated builder instance.
     */
    public setName(name: string): ContextMenuCommandBuilder {
        this.name = name;

        return this;
    }

    /**
     * Sets the localized names of the context menu command.
     * @param {Locales} locales - The localized names.
     * @returns {ContextMenuCommandBuilder} The updated builder instance.
     */
    public setNameLocalizations(locales: Locales): ContextMenuCommandBuilder {
        this.nameLocalizations = locales;

        return this;
    }

    /**
     * Sets the default member permissions for the context menu command.
     * @param {string} defaultPermissions - The default member permissions.
     * @returns {ContextMenuCommandBuilder} The updated builder instance.
     */
    public setDefaultMemberPermissions(defaultPermissions: string): ContextMenuCommandBuilder {
        this.defaultMemberPermissions = defaultPermissions;

        return this;
    }

    /**
     * Sets the direct message permission for the context menu command.
     * @param {boolean} dmPermission - The direct message permission.
     * @returns {ContextMenuCommandBuilder} The updated builder instance.
     */
    public setDMPermission(dmPermission: boolean): ContextMenuCommandBuilder {
        this.dmPermission = dmPermission;

        return this;
    }
}