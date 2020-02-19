import NotePanel from './note-panel'
import { assert } from 'chai'
import 'steal-mocha'

describe('Note Panel', () => {
  let vm

  beforeEach(() => {
    vm = new NotePanel()
  })

  it('notesList', () => {
    const notesList = vm.notesList
    assert.equal(notesList.length, 0, 'should default to empty notesList')
  })
})
