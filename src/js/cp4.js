/*! CopyPoison 4.0 | (c) 2015 MIT license | http://copypoison.com | http://www.tunnckocore.tk */
;(function () {
  var chars = 'ABEKMHOΠPCTXaeĸopcyxIiJjSs' + 'АВЕКМНОПРСТХаекорсухІіЈјЅѕ'
  var cfg = {length: 15, link: true, prefix: '', suffix: ''}
  var script = null

  if (document.currentScript) {
    script = document.currentScript
    cfg.link = script.getAttribute('data-link') || cfg.link
    cfg.length = script.getAttribute('data-length') || cfg.length
    cfg.prefix = script.getAttribute('data-prefix') || cfg.prefix
    cfg.suffix = script.getAttribute('data-suffix') || cfg.suffix
  }

  function replaceChars (text) {
    var middle = chars.length / 2
    var ret = ''
    var len = text.length
    var i = 0

    while (i < len) {
      var val = text.charAt(i)
      var idx = chars.indexOf(val)
      if (idx === -1) {
        ret += val
      } else if (idx >= middle) {
        ret += chars.charAt(idx - middle)
      } else {
        ret += chars.charAt(idx + middle)
      }
    }
    return ret
  }

  function isCode (text) {
    return (
    (text.indexOf('<') !== -1 && text.indexOf('>') !== -1) ||
    (text.indexOf('{') !== -1 && text.indexOf('}') !== -1)
    )
  }

  function copyPoison () {
    var isIE = window.clipboardData && document.selection
    var selectedObj = isIE ? document.selection.createRange() : window.getSelection()
    var selectedText = isIE ? selectedObj.text : selectedObj.toString()

    if (selectedText.length > cfg.length && !isCode(selectedText)) {
      selectedText = replaceChars(selectedText)
      if (cfg.link === true) {
        selectedText += '\r\n\r\n' + cfg.prefix + document.location.href + cfg.suffix
      }

      if (isIE) {
        window.clipboardData.setData('Text', selectedText)
        return true
      }

      var pre = document.createElement('pre')
      document.getElementsByTagName('body')[0].appendChild(pre)
      pre.textContent = selectedText
      selectedObj.selectAllChildren(pre)
      window.setTimeout(function () {
        document.getElementsByTagName('body')[0].removeChild(pre)
      }, 0)
      return true
    }
    return false
  }

  if (window.addEventListener) {
    window.addEventListener('copy', copyPoison, false)
  } else { // IE
    window.onload = function () {
      document.body.oncopy = copyPoison
    }
  }
})()
