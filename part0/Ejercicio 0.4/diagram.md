Usuario                     Navegador                         Servidor

   |                            |                                |
   |  1. Escribir una nota      |                                |
   |--------------------------->|                                |
   |                            |                                |
   |  2. Clic en "Save"         |                                |
   |--------------------------->|                                |
   |                            |                                |
   |                            | 3. Enviar solicitud POST       |
   |                            |    a /new_note                 |
   |                            |------------------------------->|
   |                            |                                |
   |                            |    4. Servidor recibe la nota  |
   |                            |      - Procesa los datos       |
   |                            |      - Guarda la nota          |
   |                            |                                |
   |                            |<-------------------------------|
   |                            | 5. Respuesta: Status 200 OK    |
   |                            |                                |
   |   6. Redirección o         |                                |
   |      actualización de      |                                |
   |      la página             |                                |
   |<---------------------------|                                |
   |                            |                                |
   |  7. La nueva nota aparece  |                                |
   |     en la lista            |                                |
   |--------------------------->|                                |
   |                            |                                |
   |                            |                                |
