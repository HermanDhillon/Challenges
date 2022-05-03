function printerError(s) {
    return `${s.split("").filter(e => e.charCodeAt(0) > 109).length}/${s.length}`

  }