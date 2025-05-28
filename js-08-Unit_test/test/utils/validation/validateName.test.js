
/**
 *  TDD
 *  TDD (Test-Driven Development) es una metodología de desarrollo 
 *  de software donde las pruebas unitarias se escriben antes del 
 *  código de producción.
 * 
 *  Ventajas de TDD: 
 *  - Te obliga a pensar en los requerimientos antes de codificar.
 *  - Mejora la calidad del código al asegurar que está cubierto por pruebas.
 *  - Facilita la detección de errores rápidamente.
  .toEquals(expected)
  Propósito 
  /*
 .toBe(expected)
 Propósito: Compara valores primitivos (números, strings, booleanos, 
 null, undefined) para una igualdad estricta (similar a === ). 
 También compara objetos por referencia (si son exactamente 
 el mismo objeto en memoria).
 .toEqual(expected)
 Propósito: Compara la igualdad profunda de objetos y arrays. 
 Jest recorre recursivamente las propiedades de los objetos o 
 los elementos de los arrays para verificar que sus contenidos 
 son equivalentes, no solo que sean la misma referencia en memoria.
*/



import { validateName } from "../../../src/utils/validation/validateName";

test("Debe aceptar un nombre válido", () => {
  const response = validateName("Abril");

  expect(response.isValid).toBe(true);
  expect(response.errors.length).toBe(0);
  expect(response.errors).toEqual([]);
});



/*
 .toBeTruthy()
 Propósito: Verifica si un valor es "truthy" (evalúa a true en un contexto booleano). 
 Esto incluye valores como true, números distintos de cero, strings no vacíos, objetos y arrays.
 
 .toBeFalsy()
 Propósito: Verifica si un valor es "falsy" (evalúa a false en un contexto booleano). 
 Esto incluye valores como false, 0, -0, null, undefined, NaN, y el string vacío "".
 
 .toBeGreaterThan(number) / .toBeGreaterThanOrEqual(number)
 Propósito: Compara si un número es mayor que, o mayor o igual que, otro.
 .toBeLessThan(number) / .toBeLessThanOrEqual(number)
 Propósito: Compara si un número es menor que, o menor o igual que, otro.
*/
test("Debe rechazar un nombre vacío", () =>{
    const response = validateName("");
    expect( response.isValid).toBe( false );
    expect(response.isValid).toBeFalsy();
    expect( response.errors.length>0 ).toBe(true);
    expect( response.errors.length>0 ).toBeTruthy();
    expect(response.errors.length).toBeGreaterThan(0);
});
  

test("Debe rechzar un nombre con solo espacios", ()=>{
    const response = validateName( " "); 
    expect(response.isValid).toBeFalsy();
    expect(response.errors.length).toBeGreaterThan(0);
    expect(response.errors).toContain("No se permiten espacios en el nombre");

})