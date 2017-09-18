import Map from './Map';

class Scene {
  constructor() {
    /**
     * The map of the scene objects.
     * @type {Map}
     */
    this.map = new Map();
  }

  /**
   * @param {string} objectName 
   */
  get(objectName) {
    return this.map.get(objectName);
  }

  /**
   * @param {string} objectName 
   * @param {*} object 
   */
  set(objectName, object) {
    this.map.set(objectName, object);
  }
}

export default Scene;
