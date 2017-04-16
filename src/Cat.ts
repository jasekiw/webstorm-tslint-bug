import {Injectable} from "@angular/core";
import {Animal} from "./Animal";
import {Dog, Bone} from "./Dog"; // example of bad behavior
import {Color} from "./Color";
/**
 * A Cat
 */
@Injectable()
export class Cat implements Animal {

  public getColor(): string {
    return "orange"
  }

  /**
   * Throws a bone
   * @returns {Bone}
   */
  public throwBone() {
    return new Bone();
  }
}
