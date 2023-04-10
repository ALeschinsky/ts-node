import {hello} from "./hello";
import {Inject} from "@angular/core";

export function myFunction() {
  console.log(hello('name-for-hello'));
  console.log(Inject)
}
