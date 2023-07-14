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