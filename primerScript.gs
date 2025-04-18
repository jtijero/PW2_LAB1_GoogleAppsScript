//google docs
function CrearDocumento() {

  var documento = DocumentApp.create("Mi primer documento en Google Apps Script");
  documento.getBody().appendParagraph("Esto ha sido escrito a través de Google Apps Script");
  
}

function AbrirDocumento(){

  var documento = DocumentApp.openById("17bW1gZC9tmVmudtC2TnX5VXAxpdxZb8uEoE6ovz5yjQ");
  documento.getBody().appendParagraph("Párrafo nuevo");
}

function ModificarFormatos(){

  var documento = DocumentApp.openById("17bW1gZC9tmVmudtC2TnX5VXAxpdxZb8uEoE6ovz5yjQ");

  var parrafos = documento.getBody().getParagraphs();
  
  parrafos[0].setText("Esto es un párrafo modificado a través de Google Apps Script");
  parrafos[0].setLeftToRight(true);
  parrafos[1].setText("Esto es el segundo parrafo");

  var estilo1 = {};
  estilo1[DocumentApp.Attribute.BACKGROUND_COLOR] = "#84b8fc";
  estilo1[DocumentApp.Attribute.FONT_SIZE] = 24;

  parrafos[0].setAttributes(estilo1);
  parrafos[2].setAttributes({
    BACKGROUND_COLOR:"#444444",
    FOREGROUND_COLOR:"#999999",
    BOLD: true,
    FONT_SIZE: 22
  });
}
