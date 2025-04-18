function testGeneracionContrato() {
  const Data = {
    namedValues: {
      'Nombre completo': ['Ana López'],
      'Servicios': ['Consultoría;Desarrollo'],
      'Monto': ['5000'],
      'Fecha': ['2025-04-20'],
      'País': ['Colombia'],
      'Correo electrónico': ['jtijero@unsa.edu.pe'] // Nuevo campo
    }
  };
  
  procesarFormulario(Data);
}

function testCompleto() {
  console.log('=== Iniciando pruebas ===');
  testGeneracionContrato();
  console.log('=== Verificar:');
  console.log('- Documento en carpeta destino');
  console.log('- Correo en bandeja de enviados');
  console.log('- Formato correcto en PDF');
}


