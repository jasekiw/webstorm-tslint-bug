import {Injectable} from "@angular/core";
import {Animal} from "./Animal";
import {Dog} from "./Dog"; // example of bad behavior

@Injectable()
export class Cat implements Animal {


  public getColor(): string {
    return "orange"
  }

}
