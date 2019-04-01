Vue.filter('date', time => moment(time).format('DD/MM/YY， HH:mm'))
// New VueJS instance
new Vue({
  // CSS selector of the root DOM element
  el: '#notebook',
  
  data() {
    return {
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      // 选中文本
      selectedId: localStorage.getItem('selected-id') ||null
    }
  },

  computed: {
    notePreview() {
      return this.selectedNote ? marked(this.selectedNote.content) : '';
    },
    selectedNote() {
      return this.notes.find(note => note.id === this.selectedId);
    },
    sorteNotes() {
      return this.notes.slice().sort((a, b) => a.created - b.created).sort((a, b) => (a.favorite === b.favorite) ? 0 : a.favorite ? -1 : 1);
    }
  },

  watch: {
    notes: {
      handler: 'saveNotes',
      deep: true,
    },
    selectedId(val) {
      localStorage.setItem('selected-id', val);
    }
  },
  
  methods: {
    reportOperation(opName) {
      console.log('The', opName, 'operation was completed!');
    },
    addNote() {
      const time = new Date();
      const  note = {
        id: String(time),
        title: 'New note' + (this.notes.length + 1),
        content: '**Hi!** This notebook is using [markdown]',
        created: time,
        favorite: false,
      }
      this.notes.push(note);
    },
    selectNote(note) {
      this.selectedId = note.id;
    },
    saveNotes() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
      console.log('Notes saved', new Date());
    },
    favoriteNote() {
      this.selectedNote.favorite = !this.selectedNote.favorite
    },
    removeNote() {
      if (this.selectedNote && confirm('Delete the note?')) {
        const index = this.notes.indexOf(this.selectedNote);
        if (index !== -1) {
          this.notes.splice(index, 1);
        } 
      }
    },
  },
  mounted() {
    console.log(this.content);
  },
})
