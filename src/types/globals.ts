/**
 * Represents Discord IDs
 */

export type Snowflake = string;

/**
 * Represents all availables locales
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

export interface JSONSerializable<T> {
    toJSON(): T;
}

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

export interface EmbedFieldData {
    name: string;
    value: string;
    inline?: boolean;
}

export interface EmbedAuthorData {
    name: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

export interface EmbedProviderData {
    name?: string;
    url?: string;
}

export type EmbedVideoData = Partial<EmbedImageData>;
export type EmbedThumbnailData = EmbedImageData;

export interface EmbedImageData {
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

export interface EmbedFooterData {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

export enum EmbedType {
    Rich = 'rich',
    Image = 'image',
    Video = 'video',
    Gifv = 'gifv',
    Article = 'article',
    Link = 'link'
}