function enviarCorreoConPDF(archivo, datos) {
  // Convertir a PDF con nombre personalizado
  const pdf = archivo.getAs('application/pdf');
    pdf.setName(`Contrato_${datos.nombreCliente}.pdf`);

  const plantillaCorreo = `
    Estimado ${datos.nombreCliente},
    
    Adjunto su contrato generado el ${new Date().toLocaleDateString()}.
    
    Detalles:
    - Servicios: ${datos.servicios.length}
    - Monto total: ${CONFIGURACION.MONEDA} ${datos.monto}
  `;

  GmailApp.sendEmail(
    datos.correo,
    `Contrato de servicios - ${datos.nombreCliente}`,
    plantillaCorreo,
    { attachments: [pdf] }
  );
}
