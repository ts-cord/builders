import { Locales } from './globals';
import { ChannelType } from './messages';

export interface ApplicationCommandData {
    type?: ApplicationCommandType;
    name: string;
    nameLocalizations?: Locales;
    description: string;
    descriptionLocalizations?: Locales;
    options?: ApplicationCommandOptionData[];
    defaultMemberPermissions?: string;
    dmPermission?: boolean;
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
    nameLocalizations?: Locales;
    description: string;
    descriptionLocalizations?: Locales;
    required?: boolean;
    choices?: ApplicationCommandOptionChoiceData[];
    options?: ApplicationCommandOptionData[];
    channelTypes?: ChannelType[];
    maxValue?: number;
    minValue?: number;
    maxLength?: number;
    minLength?: number;
    autocomplete?: boolean;
}

export interface ApplicationCommandOptionChoiceData {
    name: string;
    nameLocalizations?: Locales;
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