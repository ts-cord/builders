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
    public name_localizations: Locales | undefined;

    /**
     * The default member permissions for the context menu command.
     */
    public default_member_permissions: string | undefined;

    /**
     * The direct message permission for the context menu command.
     */
    public dm_permission: boolean | undefined;

    /**
     * Creates a new context menu.
     * @param {ContextMenuCommandData} data - The data for this context menu.
     */
    public constructor(data?: ContextMenuCommandData) {
        this.type = data?.type as ContextMenuCommandType;
        this.name = data?.name as string;
        this.name_localizations = data?.name_localizations;
        this.default_member_permissions = data?.default_member_permissions;
        this.dm_permission = data?.dm_permission;
    }

    /**
     * Sets the type of the context menu command.
     * @param {ContextMenuCommandType} type - The type of the command.
     * @returns {this} The updated builder instance.
     */
    public setType(type: ContextMenuCommandType): this {
        this.type = type;

        return this;
    }

    /**
     * Sets the name of the context menu command.
     * @param {string} name - The name of the command.
     * @returns {this} The updated builder instance.
     */
    public setName(name: string): this {
        this.name = name;

        return this;
    }

    /**
     * Sets the localized names of the context menu command.
     * @param {Locales} locales - The localized names.
     * @returns {this} The updated builder instance.
     */
    public setNameLocalizations(locales: Locales): this {
        this.name_localizations = locales;

        return this;
    }

    /**
     * Sets the default member permissions for the context menu command.
     * @param {string} defaultPermissions - The default member permissions.
     * @returns {this} The updated builder instance.
     */
    public setDefaultMemberPermissions(defaultPermissions: string): this {
        this.default_member_permissions = defaultPermissions;

        return this;
    }

    /**
     * Sets the direct message permission for the context menu command.
     * @param dmPermission - The direct message permission.
     * @default true
     * @returns {this} The updated builder instance.
     */
    public setDMPermission(dmPermission = true): this {
        this.dm_permission = dmPermission;

        return this;
    }
}