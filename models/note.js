// models/todo.js
import { ObservableObject, ObservableArray, type } from "can";

export default class Note extends ObservableObject {
  static props = {
    id: { type: type.convert(String) },
    title: { type: type.convert(String) },
    content: { type: type.convert(String) },
    isActive: {
      type: type.convert(Boolean),
      default: false
    }
  };

  toggleIsActive() {
    this.isActive = !this.isActive;
  }
}

export class NoteList extends ObservableArray {
  static items = type.convert(Note);

  static props = {
    get active() {
      return this.filter({
        isActive: false
      });
    }
  };
}
