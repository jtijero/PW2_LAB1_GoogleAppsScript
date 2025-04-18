function procesarFormulario(datosEvento) {
    // Paso 1: Extraer y formatear datos
    const datosCrudos = datosEvento.namedValues;
    // Modificar en la creación del contrato
    const contrato = {
      nombreCliente: datosCrudos['Nombre completo'][0],
      servicios: datosCrudos['Servicios'][0].split(';').map(s => s.trim()),
      monto: parseFloat(datosCrudos['Monto'][0]),
      echaInicio: new Date(datosCrudos['Fecha'][0]),
      pais: datosCrudos['País'][0],
      correo: datosCrudos['Correo electrónico'][0] // Nuevo campo que sera necesario
    };


    // Paso 2: Crear documento personalizado
    const plantilla = DriveApp.getFileById(CONFIGURACION.ID_PLANTILLA);
    const nuevoContrato = plantilla.makeCopy(`Contrato_${contrato.nombreCliente}`);
    const documento = DocumentApp.openById(nuevoContrato.getId());
    
    // Paso 3: Sustituir marcadores
    const cuerpo = documento.getBody();
    cuerpo.replaceText('{{CLIENTE}}', contrato.nombreCliente);
    cuerpo.replaceText('{{MONTO}}', 
      `${CONFIGURACION.MONEDA} ${contrato.monto.toLocaleString()}`);

    // Paso 4: Insertar lista numerada
    const listaServicios = contrato.servicios
      .map((servicio, indice) => `${indice + 1}. ${servicio}`)
      .join('\n');
    cuerpo.replaceText('{{SERVICIOS}}', listaServicios);

    // Paso 5: Gestión documental

    try {
      const carpetaDestino = DriveApp.getFolderById(CONFIGURACION.CARPETA_DESTINO);
        carpetaDestino.addFile(nuevoContrato);
    } catch(e) {
      DriveApp.getRootFolder().addFile(nuevoContrato);
    }

    
    // Paso 6: Envío automático
    enviarCorreoConPDF(nuevoContrato, contrato);


}
