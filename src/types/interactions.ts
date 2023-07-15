import { Locales } from './globals';
import { ChannelType } from './messages';
import { UserSelectMenuBuilder, StringSelectMenuBuilder, RoleSelectMenuBuilder, MentionableSelectMenuBuilder, ChannelSelectMenuBuilder, ButtonBuilder, TextInputBuilder } from '..';

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

export interface ContextMenuCommandData extends Omit<ApplicationCommandData, 'description' | 'descriptionLocalizations' | 'options' | 'nsfw' | 'type'> {
    type: ContextMenuCommandType;
}

export enum ContextMenuCommandType {
    User = 2,
    Message
}

export enum ApplicationCommandType {
    ChatInput = 1,
    User,
    Message
}

export interface ApplicationCommandOptionData {
    type: ApplicationCommandOptionType;
    name: string;
    name_localizations?: Locales;
    description: string;
    description_localizations?: Locales;
    required?: boolean;
    choices?: ApplicationCommandOptionChoiceData[];
    options?: ApplicationCommandOptionData[];
    channel_yypes?: ChannelType[];
    max_value?: number;
    min_value?: number;
    max_length?: number;
    min_length?: number;
    autocomplete?: boolean;
}

export interface ApplicationCommandOptionChoiceData {
    name: string;
    name_localizations?: Locales;
    value: string | number;
}

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

export interface ButtonData {
    readonly type: ComponentType.Button,
    style: ButtonStyle;
    label?: string;
    emoji?: MessageComponentEmoji;
    custom_id?: string;
    url?: string;
    disable?: boolean;
}

export enum ButtonStyle {
    Primary = 1,
    Secondary,
    Success,
    Danger,
    Link
}

export interface MessageComponentEmoji {
    name: string;
    id: string | null;
    animated: boolean;
}

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

export enum SelectMenuType {
    String = ComponentType.StringSelect,
    User = ComponentType.UserSelect,
    Role = ComponentType.RoleSelect,
    Mentionable = ComponentType.MentionableSelect,
    Channel = ComponentType.ChannelSelect
}

export interface SelectMenuOptionData {
    label: string;
    value: string;
    description?: string;
    emoji?: MessageComponentEmoji;
    default?: boolean;
}

export type AnyComponentBuilder = ButtonBuilder | UserSelectMenuBuilder | StringSelectMenuBuilder | RoleSelectMenuBuilder | MentionableSelectMenuBuilder | ChannelSelectMenuBuilder | TextInputBuilder;

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

export enum TextInputStyle {
    Short = 1,
    Paragraph
}

export interface ModalInteractionData {
    title: string;
    custom_id: string;
    components: ActionRowData<TextInputBuilder>;
}

export interface ActionRowData<T extends AnyComponentBuilder> {
    type: ComponentType.ActionRow;
    components: T['data'][];
}