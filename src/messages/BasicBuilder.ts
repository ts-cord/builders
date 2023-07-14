import { JSONSerializable } from '../types/globals';

/**
 * Class responsible for constructing basic objects and implementing the JSONSerializable interface.
 *
 * @template T - The type of the object being constructed and serialized.
 */

export class BasicBuilder<T> implements JSONSerializable<T> {
    /**
     * Object data being constructed.
     * 
     * @type {T}
     */
    public readonly data: T;

    /**
     * Constructs a new instance of the BasicBuilder class.
     *
     * @param {T} data - The data of the object to be constructed.
     */
    constructor(data: T) {
        this.data = data;
    }

    /**
     * Converts the object to JSON format.
     *
     * @returns {T} - The object converted to JSON.
     */
    public toJSON(): T {
        return this.data;
    }

    /**
     * Creates a new instance of BasicBuilder from the provided data.
     *
     * @template T - The type of the object being constructed.
     * @param {T} data - The data of the object to be constructed.
     * @returns {BasicBuilder<T>} A new instance of BasicBuilder.
     */
    public static from<T>(data: T): BasicBuilder<T> {
        return new BasicBuilder(data);
    }
}