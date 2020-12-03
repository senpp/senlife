const JsonMixin = {
  data: () => ({
    data: null,
  }),

  methods: {
    download(json) {
      const data = JSON.stringify(json)
      const blob = new Blob([data], { type: 'text/plain' })
      const event = document.createEvent('MouseEvents')
      const a = document.createElement('a')
      a.download = 'export.json'
      a.href = window.URL.createObjectURL(blob)
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
      event.initEvent(
        'click',
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      )
      a.dispatchEvent(event)
    },

    loadJsonFromFile(ev) {
      const file = ev.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => (this.data = JSON.parse(e.target.result))
      reader.readAsText(file)
    },
  },
}

export default JsonMixin
