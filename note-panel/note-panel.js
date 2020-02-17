import { StacheElement } from "can"
import view from "./note-panel.stache"
import { NoteList } from "~/models/note"

class NotePanel extends StacheElement {
  static view = view

  static props = {
    notesList: {
      get default() {
        return new NoteList([
          { title: "write more tests!", content: "2020, the year of best practices", isActive: false, id: 1 },
          { title: "call mom", content: "ask her where my original nintendo is", isActive: false, id: 2 },
          { title: "make tacos", content: "pick up guacamole too", isActive: false, id: 3 },
          { title: "learn canjs", content: "CanJS Version 6 is out using custom elements!", isActive: false, id: 4 },
          { title: "high five someone", content: "random acts of confusion", isActive: false, id: 5 },
          { title: "netflix and chill", content: "Mind of Chef, season 1 is amazing", isActive: false, id: 6 },
          { title: "test comfort zone", content: "Ask 3 dumb questions today", isActive: false, id: 7 }
        ]);
      }
    },

    setActive(note) {
      console.log('Activate Note ', note.id)
      // clear any active notes
      this.notesList.forEach((note) => {
        note.isActive = false
      })
      // activate clicked note
      note.isActive = true
      // set focus on matching sticky note
      document.getElementById(`sticky-note-${note.id}`).focus()
    }
  }
}
customElements.define("note-panel", NotePanel)
