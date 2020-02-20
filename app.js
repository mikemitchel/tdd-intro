import { StacheElement } from 'can'
import view from './app.stache'

class TDDIntro extends StacheElement {
  static view = view

  static props = {
    message: {
      default: 'Test Driven Design w/ Notes'
    },
    notesList: {}
  }
}

window.customElements.define('tdd-intro', TDDIntro)
