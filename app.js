import { StacheElement } from "can"
import { NoteList } from "~/models/note"
import view from "./app.stache"

class TDDIntro extends StacheElement {
  static view = view

  static props = {
    message: {
      default: "Test Drive Design Notes"
    },

    notesList: {
      get default() {
        return new NoteList([
          { name: "write more tests!", isActive: false, id: 5 },
          { name: "make tacos", isActive: true, id: 6 },
          { name: "learn canjs", isActive: false, id: 7 }
        ]);
      }
    }
  }
}
customElements.define("tdd-intro", TDDIntro)
