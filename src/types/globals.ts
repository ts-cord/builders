/**
 * Represents Discord IDs
 * @see https://discord.com/developers/docs/reference#snowflakes
 */
export type Snowflake = string;

/**
 * Represents all availables locales
 * @see https://discord.com/developers/docs/reference#locales
 */
export interface Locales {
    id?: string;
    da?: string;
    de?: string;
    'en-GB'?: string;
    UK?: string;
    'en-US'?: string;
    US?: string;
    'es-ES'?: string;
    fr?: string;
    hr?: string;
    it?: string;
    lt?: string;
    hu?: string;
    nl?: string;
    no?: string;
    pl?: string;
    'pt-BR'?: string;
    ro?: string;
    fi?: string;
    'sv-SE'?: string;
    vi?: string;
    tr?: string;
    cs?: string;
    el?: string;
    bg?: string;
    ru?: string;
    uk?: string;
    hi?: string;
    th?: string;
    'zh-CN'?: string;
    ja?: string;
    'zh-TW'?: string;
    ko?: string;
}

/**
 * Represents a object capable to have itself as JSON
 */
export interface JSONSerializable<T> {
    toJSON(): T;
}

/**
 * Represents a Discord embed
 * @see https://discord.com/developers/docs/resources/channel#embed-object
 */
export interface EmbedData {
    title?: string;
    type?: EmbedType;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: number;
    footer?: EmbedFooterData;
    image?: EmbedImageData;
    thumbnail?: EmbedThumbnailData;
    video?: EmbedVideoData;
    provider?: EmbedProviderData;
    author?: EmbedAuthorData;
    fields?: EmbedFieldData[];
}

/**
 * Represents a field of an embed
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
 */
export interface EmbedFieldData {
    name: string;
    value: string;
    inline?: boolean;
}

/**
 * Represent the author of an embed
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
 */
export interface EmbedAuthorData {
    name: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

/**
 * Represets the provider of an embed
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
 */
export interface EmbedProviderData {
    name?: string;
    url?: string;
}

/**
 * Represents the video of an embed
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
 */
export type EmbedVideoData = Partial<EmbedImageData>;

/**
 * Represents the thumbnail of an embed
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
 */
export type EmbedThumbnailData = EmbedImageData;

/**
 * Represents the image of an embed
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
 */
export interface EmbedImageData {
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

/**
 * Represents the footer of an embed
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
 */
export interface EmbedFooterData {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

/**
 * Represents the types an embed can have
 * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-types
 */
export enum EmbedType {
    Rich = 'rich',
    Image = 'image',
    Video = 'video',
    Gifv = 'gifv',
    Article = 'article',
    Link = 'link'
}