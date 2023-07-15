import { EmbedAuthorData, EmbedData, EmbedFieldData, EmbedFooterData, EmbedImageData, EmbedProviderData, EmbedThumbnailData, EmbedType, EmbedVideoData } from '../types/globals';

/**
 * Creates a new embed.
 */

export class EmbedBuilder {
    /**
     * This embed data.
     */
    public readonly data: EmbedData;

    /**
     * Constructs a new embed from data.
     * @param {EmbedData} [data] - Initial embed data.
     */
    public constructor(data?: EmbedData) {
        this.data = data ?? {};
    }

    /**
     * Sets the title of this embed.
     * @param {string} title - The title of the embed.
     * @returns {this} This updated embed.
     */
    public setTitle(title: string): this {
        this.data.title = title;
        return this;
    }

    /**
     * Sets the type of this embed.
     * @param {EmbedType} type - The type of the embed.
     * @returns {this} This updated embed.
     */
    public setType(type: EmbedType): this {
        this.data.type = type;
        return this;
    }

    /**
     * Sets the description of this embed.
     * @param {string} description - The description of the embed.
     * @returns {this} This updated embed.
     */
    public setDescription(description: string): this {
        this.data.description = description;
        return this;
    }

    /**
     * Sets the URL of this embed.
     * @param {string} url - The URL of the embed.
     * @returns {this} This updated embed.
     */
    public setURL(url: string): this {
        this.data.url = url;
        return this;
    }

    /**
     * Sets the timestamp of this embed.
     * @param {number} [timestamp] - Timestamp value.
     * @returns {this} This updated embed.
     */
    public setTimestamp(timestamp?: number): this {
        this.data.timestamp = (timestamp ? new Date(timestamp) : new Date()).toISOString();
        return this;
    }

    /**
     * Sets the color of this embed.
     * @param {number} color - The color value of the embed.
     * @returns {this} This updated embed.
     */
    public setColor(color: number): this {
        this.data.color = color;
        return this;
    }

    /**
     * Sets the footer of this embed.
     * @param {EmbedFooterData | string} options - The footer options or text.
     * @returns {this} This updated embed.
     */
    public setFooter(options: EmbedFooterData | string): this {
        this.data.footer = typeof options === 'string' ? { text: options } : options;
        return this;
    }

    /**
     * Sets the image of this embed.
     * @param {EmbedImageData | string} options - The image options or URL.
     * @returns {this} This updated embed.
     */
    public setImage(options: EmbedImageData | string): this {
        this.data.image = typeof options === 'string' ? { url: options } : options;
        return this;
    }

    /**
     * Sets the thumbnail of this embed.
     * @param {EmbedThumbnailData | string} options - The thumbnail options or URL.
     * @returns {this} This updated embed.
     */
    public setThumbnail(options: EmbedThumbnailData | string): this {
        this.data.thumbnail = typeof options === 'string' ? { url: options } : options;
        return this;
    }

    /**
     * Sets the video of this embed.
     * @param {EmbedVideoData} options - The video options.
     * @returns {this} This updated embed.
     */
    public setVideo(options: EmbedVideoData): this {
        this.data.video = options;
        return this;
    }

    /**
     * Sets the provider of this embed.
     * @param {EmbedProviderData} options - The provider options.
     * @returns {this} This updated embed.
     */
    public setProvider(options: EmbedProviderData): this {
        this.data.provider = options;
        return this;
    }

    /**
     * Sets the author of this embed.
     * @param {EmbedAuthorData | string} options - The author options or name.
     * @returns {this} This updated embed.
     */
    public setAuthor(options: EmbedAuthorData | string): this {
        this.data.author = typeof options === 'string' ? { name: options } : options;
        return this;
    }

    /**
     * Sets the fields of this embed.
     * @param {...EmbedFieldData[]} fields - The fields to set.
     * @returns {this} This updated embed.
     */
    public setFields(...fields: EmbedFieldData[]): this {
        this.data.fields = fields;

        return this;
    }

    /**
     * Add fields to this embed.
     * @param {...EmbedFieldData[]} fields - The fields to add. 
     * @returns {this} This updated embed.
     */
    public addFields(...fields: EmbedFieldData[]): this {
        this.data.fields = (this.data.fields ?? []).concat(fields);

        return this;
    }

    /**
     * The maximum allowed length for the title of an embed.
     */
    public static readonly MaxTitleLength: number = 256;

    /**
     * The maximum allowed length for the description of an embed.
     */
    public static readonly MaxDescriptionLength: number = 4096;

    /**
     * The maximum number of fields allowed in an embed.
     */
    public static readonly MaxEmbedFieldsLength: number = 25;

    /**
     * The maximum allowed length for the name of a field in an embed.
     */
    public static readonly MaxFieldNameLength: number = 256;

    /**
     * The maximum allowed length for the value of a field in an embed.
     */
    public static readonly MaxFieldValueLength: number = 1024;

    /**
     * The maximum allowed length for the text of a footer in an embed.
     */
    public static readonly MaxFooterTextLength: number = 2048;

    /**
     * The maximum allowed length for the name of an author in an embed.
     */
    public static readonly MaxAuthorNameLength: number = 256;

}