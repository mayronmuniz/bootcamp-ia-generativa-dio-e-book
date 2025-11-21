// Sanitiza readerConfig removendo referências a file:// para uso em hospedagem (GitHub Pages)
(function(){
  try {
    if (typeof readerConfig === 'undefined') return;
    var s = JSON.stringify(readerConfig);
    // Remove ocorrências de file:/// ou file:// e caminhos locais
    s = s.replace(/file:\/\/\/[A-Za-z0-9_:\/\\.\-\s]*/g, "");
    s = s.replace(/file:\/\/[A-Za-z0-9_:\/\\.\-\s]*/g, "");
    readerConfig = JSON.parse(s);
  } catch (e) {
    console && console.warn && console.warn('config-sanitize falhou', e);
  }
})();
