# EXECUTABLE TEST    

me vi en la necesitadad de crear un cli, por lo que, este repo son mis pruebas de como funciona un ejecutable usando npm, yarn y pnpm.
a continuacion dejare mis notas

## STEPS

1. crear un archivo que sea el ejecutable
2. la primera linea debe ser 

``` js
    #!/usr/bin/env node
``` 
nota: <small>esto le indicara a nuestro OS que el archivo es un ejecutable, y en que lenguaje esta </small><br/>

3. añadirlo el archivo bin a el json  

``` json
{
  // ... rest package.json
  "bin": "[bin-path]"
}

// or 

{
    // ...rest package.json
    "bin": {
        "[name-script]": "[bin-path]"
    }
}
```

<small>nota:  en caso de que solo se defina un string en el campo bin, el nombre del ejecutable sera el mismo del paquete, de otra manera, se usara el nombre indicado en el ejemplo dos</small>

4. Para realizar las pruebas de manera local ejecutar: 

``` bash
npm link .
```
or
``` bash
pnpm link .
```


# bin-executable
