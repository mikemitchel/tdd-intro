import { StacheElement } from 'can'
import view from './note-board.stache'

class NoteBoard extends StacheElement {
  static view = view

  static props = {
    notesList: {}
  }
}

window.customElements.define('note-board', NoteBoard)
