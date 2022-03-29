export class ModelRobe {
  private  _id: number;
   private _nom: string ;
  private _prix: number;
   private _image: string;
  private _description: string;
    private _taille: string;

    constructor(id: number, nom: string, prix: number, image: string, description: string,  taille: string)
  {
        this._id = id;
        this._nom = nom;
        this._prix = prix;
        this._image = image;
        this._description = description;
        this._taille = taille;
    }
      /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }      
   /**
   * Setter id
   * @param {number} value
   */
    public set id(value: number) {
        this._id = value;
      }
       /**
   * Getter nom
   * @return {string}
   */
  public get nom(): string {
    return this._nom;
  }

  /**
   * Setter nom
   * @param {string} value
   */
  public set nom(value: string) {
    this._nom = value;
  }
   /**
   * Getter description
   * @return {string}
   */
    public get description(): string {
        return this.description;
      }
    
      /**
       * Setter description
       * @param {string} value
       */
      public set description(value: string) {
        this.description = value;
      }
      
  /**
   * Getter taille
   * @return {string}
   */
  public get taille(): string {
    return this.taille;
  }

  /**
   * Setter taille
   * @param {string} value
   */
  public set taille(value: string) {
    this._taille = value;
  }
          

    /**
   * Getter image
   * @return {string}
   */
     public get image(): string {
      return this.image;
    }
  
    /**
     * Setter image
     * @param {string} value
     */
    public set image(value: string) {
      this.image = value;
    }
    
}