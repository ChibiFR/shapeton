/**
 * Utility class to store maps of any type.
 */
class Map {
  constructor() {
    /**
     * @type {string[]}
     * @private
     */
    this._names = [];

    /**
     * @type {Array}
     * @private
     */
    this._values = [];
  }

  /**
   * Get a value.
   * @param {string} name 
   * @return {*} The requested value of null if not found.
   */
  get(name) {
    const index = this._names.indexOf(name);

    if (index !== -1) {
      return this._values[index];
    }

    return null;
  }

  /**
   * Set a value.
   * @param {string} name 
   * @param {*} value 
   */
  set(name, value) {
    const index = this._names.indexOf(name);

    if (index !== -1) {
      this._values[index] = value;
    } else {
      this._names.push(name);
      this._values.push(value);
    }
  }

  /**
   * Remove a value.
   * @param {string} name 
   */
  remove(name) {
    const index = this._names.indexOf(name);

    if (index !== -1) {
      this._names.splice(index, 1);
      this._values.splice(index, 1);
    }
  }

  /**
   * Loop through the map. The callback takes the name and the
   * value as arguments.
   * @param {function} callback 
   */
  forEach(callback) {
    for (const index in this._names) {
      callback(this._names[index], this._values[index]);
    }
  }

  /**
   * Get the index of a value stored in the map.
   * @param {string} name 
   * @return {number} The index of the requested value or -1 if not found.
   */
  indexOf(name) {
    return this._names.indexOf(name);
  }
}

export default Map;
