Manipulación
| Método      | Descripción                     | Ejemplo                   | Resultado                          |
| ----------- | ------------------------------- | ------------------------- | ---------------------------------- |
| `push()`    | Agrega un elemento al **final** | `frutas.push("mango")`    | `["manzana","pera","uva","mango"]` |
| `pop()`     | Elimina el **último** elemento  | `frutas.pop()`            | `["manzana","pera"]`               |
| `unshift()` | Agrega al **inicio**            | `frutas.unshift("fresa")` | `["fresa","manzana","pera","uva"]` |
| `shift()`   | Elimina el **primer** elemento  | `frutas.shift()`          | `["pera","uva"]`                   |

Consulta
| Método        | Descripción                                                    | Ejemplo                       | Resultado |
| ------------- | -------------------------------------------------------------- | ----------------------------- | --------- |
| `indexOf()`   | Devuelve el índice del elemento                                | `frutas.indexOf("uva")`       | `2`       |
| `includes()`  | Verifica si existe el elemento                                 | `frutas.includes("pera")`     | `true`    |
| `find()`      | Devuelve el **primer** elemento que cumpla una condición       | `nums.find(n => n > 10)`      | `15`      |
| `findIndex()` | Devuelve el índice del primer elemento que cumple la condición | `nums.findIndex(n => n > 10)` | `2`       |

Recorrido
| Método      | Descripción                                                 | Ejemplo                               | Resultado          |
| ----------- | ----------------------------------------------------------- | ------------------------------------- | ------------------ |
| `forEach()` | Ejecuta una función para cada elemento                      | `frutas.forEach(f => console.log(f))` | imprime cada fruta |
| `map()`     | Crea un **nuevo arreglo** transformando cada elemento       | `nums.map(n => n * 2)`                | `[2,4,6,8]`        |
| `filter()`  | Crea un **nuevo arreglo** con los que cumplan una condición | `nums.filter(n => n > 5)`             | `[6,7,8]`          |
| `reduce()`  | Reduce el arreglo a un solo valor acumulado                 | `nums.reduce((a,b)=>a+b)`             | suma total         |

Orden 
| Método      | Descripción                                 | Ejemplo                     | Resultado                  |
| ----------- | ------------------------------------------- | --------------------------- | -------------------------- |
| `sort()`    | Ordena (alfabéticamente por defecto)        | `frutas.sort()`             | `["manzana","pera","uva"]` |
| `reverse()` | Invierte el orden                           | `frutas.reverse()`          | `["uva","pera","manzana"]` |
| `splice()`  | Agrega o elimina en una posición específica | `frutas.splice(1,1,"kiwi")` | reemplaza en posición 1    |
| `slice()`   | Crea una copia parcial del arreglo          | `frutas.slice(0,2)`         | `["manzana","pera"]`       |


Otros
| Método     | Descripción                                         | Ejemplo                           |
| ---------- | --------------------------------------------------- | --------------------------------- |
| `concat()` | Une dos arreglos                                    | `[1,2].concat([3,4]) → [1,2,3,4]` |
| `flat()`   | Aplana arreglos anidados                            | `[1,[2,3]].flat() → [1,2,3]`      |
| `some()`   | Retorna `true` si **al menos uno** cumple condición | `[1,2,3].some(x=>x>2)`            |
| `every()`  | Retorna `true` si **todos** cumplen condición       | `[2,4,6].every(x=>x%2===0)`       |
