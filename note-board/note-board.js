import { StacheElement } from "can"
import view from "./note-board.stache"

class NoteBoard extends StacheElement {
  static view = view

  static props = {
    notesList: {}
  }
}
customElements.define("note-board", NoteBoard)
