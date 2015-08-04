
// content

var content = document.querySelector('#content')

// current page indicator

var p = document.querySelector('#page')

// transition "middleware"

page('*', function (ctx,  next) {
  if (ctx.init) {
    next()
  } else {
    content.classList.add('transition')
    setTimeout(function () {
      content.classList.remove('transition')
      next()
    }, 300)
  }
})

// regular pages
page('/', function () {
  p.innerHTML = 'this is temporary style/index<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
})

page('/javascript-string-manipulation-substring-substr-slice', function () {
  document.title = '@tunnckoCore: JavaScript String manipulation substring, substr, slice'
  p.innerHTML = 'Extracting a portion of a string is a fairly well understood practice. With JavaScript, there are three different <code>_includes</code> built-in functions which<ul><li>Complete Jekyll setup included (layouts, config, 404, RSS feed, posts, and example page)</li><li>Mobile friendly design and development</li><li>Easily scalable text and component sizing with <code>rem</code> units in the CSS</li><li>Support for a wide gamut of HTML elements</li><li>Related posts (time-based, because Jekyll) below each post</li><li>Syntax highlighting, courtesy Pygments (the Python-based code snippet highlighter)</li></ul> can perform that operation. Because of this, often it is very confusing for beginners as to which function should be used. Even worse, sometimes it is easy to fall into the trap and choose the wrong function. Strings  (ECMAScript 5.1 Specification Section 15.5.4.15) is the first logical choice to retrieve a part of the string. This  function can accept two numbers, the start and the end (exclusive) character position, respectively. In case the end value is smaller than the start, substring is smart enough to swap the values before doing the string extraction. An example of substring is illustrated in this code snippet: Many JavaScript environments (including most modern web browsers) also implement a variant of  called  (Section B.2.3). However, the ...'
})

page('/i-actually-was-hunting-ewoks-lucasfilm-games-the-early-years', function () {
  document.title = '@tunnckoCore: Ekam ruoy nwo esta Kcabdrah ThgiLgnidaer'
  p.innerHTML = 'Ekam ruoy nwo: Kcabdrah ThgiLgnidaer H.L. Nekcnem setalsnart eht Noitaralced fo Ecnednepedni otni HsilgnEnacirema Eht yrots dniheb Tsohg Tnairav, ylterces-decudorp evitanretla snoitide fo scimocralupop ESITREVDA TA GNIOB GNIOB! Mot eht Gnicnad Gub MOT EHT GNICNAD GUB: Nacirema Strops Naf ReccoSsevas! Niarb Tor: Pih Poh Ylimaf Eert, Ocsid 3 Emoceb Eht SyoBtaf Etamilc egnahc si efil htaeddna Dihpa Tihs si eht TihSdoog Rebu dna eht noitairporppa fo ecapscilbup Eht drac emag ew ndluoct ekam (dna neht enoemos didesle) A <strong>retteb noisrev</strong> flowereWfo Dnif su no Rettiwt, Elgoog+, CRI, dna Koobecaf. Ebircsbus ot ruo SSR deef ro yliad liame. Esaelp daer ruo Smret fo Ecivres, Ycavirp Ycilop, dna Ytinummoc Senilediug. Tpecxe erehw detacidni, Gniob Gniob si desnecil rednu a SnommoCevitaerc Esnecil gnittimrep non-laicremmoc gnirahs htiw noitubirtta <p> <a href="http://gniobgniob.ten/4102/60/92/stenretni-nwo-yob-eerf-cc-l.">Daer erom</a> | <a href="http://elconom.oi/stsop/tenretni-s-nwo-yob-eerf-cc-desnecil-daolnwod-no-tenretni-evihcra-gniob-gniob">Stnemmoc</a> </p>'
})

page('/centering-css-complete-guide', function () {
  document.title = '@tunnckoCore: Complete Guide "Centering in CSS" yesh'
  p.innerHTML = 'Gniretnec sgniht ni ssc si eht retsop dlihc fo ssc gninialpmoc. Yhw seod ti evah ot eb os drah? yeht reej. i kniht eht eussi tnsi taht sti tluciffid ot od, tub ni taht ereht os ynam tnereffid syaw fo gniod ti, gnidneped no eht noitautis, sti drah ot wonk hcihw ot hcaer rof. os stel ekam ti a noisiced eert dna yllufepoh ekam ti reisae. i deen ot retnec... uoy nac retnec enilni stnemele yllatnoziroh, nihtiw a kcolb-level tnerap tnemele, htiw tsuj: ees eht nep gniretnec enilni stnemele yb sirhc reiyoc (@reiyocsirhc) no nepedoc. siht lliw krow rof enilni, <strong>enilni-kcolb, enilni-elbat, enilni-xelf, cte</strong>. uoy nac retnec a kcolb-level tnemele yb gnivig ti dna fo (dna ti sah a tes , esiwrehto ti dluow eb lluf htdiw dna tndluow deen gniretnec). staht netfo enod htiw dnahtrohs ekil siht: ees eht nep gniretnec elgnis kcolb level tnemele yb sirhc reiyoc (@reiyocsirhc) no nepedoc. siht lliw krow <p> <a href="http://ssc-skcirt.moc/gniretnec-ssc-etelpmoc-ediug/">daer erom</a> | <a href="http://elconom.oi/stsop/gniretnec-ni-ssc-a-etelpmoc-ediug-ssc-skcirt">stnemmoc</a> </p>'
})

page()
