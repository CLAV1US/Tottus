Feature: Buscar sucursal Tottus en Google

  Necesito buscar una sucrusal de Tottus especifica en Google

  Scenario: Buscando sucursal Tottus en Google!!!
    Given Abrir pagina busqueda Google
    When Realizando busqueda de "tottus sucursales" en Google
    Then Presionar "enter" en Google
    When Validar resultados seleccionando sitio web de "Tottus Nataniel"
    Then Presionar en link Recetas y mas
    Then Presionar en nivel alto
    Then Seleccionar Corona de rollitos de canela


  Scenario: Directo
    Given Abrir pagina busqueda Tottus
    Then Presionar en nivel alto
    Then Seleccionar Corona de rollitos de canela
