import { Locales } from './globals';
import { ChannelType } from './messages';
import { UserSelectMenuBuilder, StringSelectMenuBuilder, RoleSelectMenuBuilder, MentionableSelectMenuBuilder, ChannelSelectMenuBuilder, ButtonBuilder, TextInputBuilder } from '..';

/**
 * Represents an application command data
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object
 */
export interface ApplicationCommandData {
    type?: ApplicationCommandType;
    name: string;
    name_localizations?: Locales;
    description: string;
    description_localizations?: Locales;
    options?: ApplicationCommandOptionData[];
    default_member_permissions?: string;
    dm_permission?: boolean;
    nsfw?: boolean;
}

/**
 * Represents a slash command data
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object
 */
export interface SlashCommandData extends Omit<ApplicationCommandData, 'type'> {
    type: ApplicationCommandType.ChatInput;
}

/**
 * Represents a context menu data
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object
 */
export interface ContextMenuCommandData extends Omit<ApplicationCommandData, 'description' | 'descriptionLocalizations' | 'options' | 'nsfw' | 'type'> {
    type: ContextMenuCommandType;
}

/**
 * Represents types for context menu
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object
 */
export enum ContextMenuCommandType {
    User = 2,
    Message
}

/**
 * Represents types for any application command
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object
 */
export enum ApplicationCommandType {
    ChatInput = 1,
    User,
    Message
}

/**
 * Represents an application command option data
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface ApplicationCommandOptionData {
    type: ApplicationCommandOptionType;
    name: string;
    name_localizations?: Locales;
    description: string;
    description_localizations?: Locales;
    required?: boolean;
    choices?: ApplicationCommandOptionChoiceData[];
    options?: ApplicationCommandOptionData[];
    channel_types?: ChannelType[];
    max_value?: number;
    min_value?: number;
    max_length?: number;
    min_length?: number;
    autocomplete?: boolean;
}

/**
 * Represents an application command option choices data
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export interface ApplicationCommandOptionChoiceData {
    name: string;
    name_localizations?: Locales;
    value: string | number;
}

/**
 * Represents types for any application command option
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
 */
export enum ApplicationCommandOptionType {
    SubCommand = 1,
    SubCommandGroup,
    String,
    Integer,
    Boolean,
    User,
    Channel,
    Role,
    Mentionable,
    Number,
    Attachment
}

/**
 * Represents types for any message component
 * @see https://discord.com/developers/docs/interactions/message-components#component-object-component-types
 */
export enum ComponentType {
    ActionRow = 1,
    Button,
    StringSelect,
    TextInput,
    UserSelect,
    RoleSelect,
    MentionableSelect,
    ChannelSelect
}

/**
 * Represents a button data
 * @see https://discord.com/developers/docs/interactions/message-components#button-object
 */
export interface ButtonData {
    readonly type: ComponentType.Button,
    style: ButtonStyle;
    label?: string;
    emoji?: MessageComponentEmoji;
    custom_id?: string;
    url?: string;
    disable?: boolean;
}

/**
 * Represents all available styles for a button
 * @see https://discord.com/developers/docs/interactions/message-components#button-object-button-styles
 */
export enum ButtonStyle {
    Primary = 1,
    Secondary,
    Success,
    Danger,
    Link
}

/**
 * Represents a emoji data for any components (partial emoji)
 * @see https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface MessageComponentEmoji {
    name: string;
    id: string | null;
    animated: boolean;
}

/**
 * Represent a select menu data
 * @see https://discord.com/developers/docs/interactions/message-components#select-menu-object
 */
export interface SelectMenuData {
    type: SelectMenuType;
    custom_id: string;
    options?: SelectMenuOptionData[];
    channel_types?: ChannelType[];
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    disabled?: boolean;
}

/**
 * Represents types for a select menu
 * @see https://discord.com/developers/docs/interactions/message-components#component-object-component-types
 */
export enum SelectMenuType {
    String = ComponentType.StringSelect,
    User = ComponentType.UserSelect,
    Role = ComponentType.RoleSelect,
    Mentionable = ComponentType.MentionableSelect,
    Channel = ComponentType.ChannelSelect
}

/**
 * Represents a select menu option data
 * @see https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
 */
export interface SelectMenuOptionData {
    label: string;
    value: string;
    description?: string;
    emoji?: MessageComponentEmoji;
    default?: boolean;
}

/**
 * Represents any component builder
 * @see https://discord.com/developers/docs/interactions/message-components#what-is-a-component
 */
export type AnyComponentBuilder = ButtonBuilder | UserSelectMenuBuilder | StringSelectMenuBuilder | RoleSelectMenuBuilder | MentionableSelectMenuBuilder | ChannelSelectMenuBuilder | TextInputBuilder;

/**
 * Represent a text input data
 * @see https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-structure
 */
export interface TextInputData {
    type: ComponentType.TextInput;
    custom_id: string;
    style: TextInputStyle;
    label: string;
    min_length?: number;
    max_length?: number;
    required?: boolean;
    value?: string;
    placeholder?: string;
}

/**
 * Represents all available styles for a text input
 * @see https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-styles
 */
export enum TextInputStyle {
    Short = 1,
    Paragraph
}

/**
 * Represents a interaction modal data
 * @see https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-example
 */
export interface ModalInteractionData {
    title: string;
    custom_id: string;
    components: ActionRowData<TextInputBuilder>;
}

/**
 * Represents an action row data
 * @template T - The component to construct
 * @see https://discord.com/developers/docs/interactions/message-components#action-rows
 */
export interface ActionRowData<T extends AnyComponentBuilder> {
    type: ComponentType.ActionRow;
    components: T['data'][];
}