# ngNDFrontEndTest
Test project to apply as `Front End Developer` in [Norte Digital](https://norte.digital/en/home/).

## Prerequisites
Before you begin, make sure your development environment includes `Node.js`, an `npm` package manager and the version control system `GIT`. 

- [Node.js](https://nodejs.org/es/) version `8.x` or `10.x`
- [GIT](https://git-scm.com/)

## Install Dependencies
Run `npm install` to install all the local project dependencies.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Project Comments
> - Uso un sistema de carpetas un poco personalizado parecido al usado en `Ionic`
> - Los componentes etiquetados como `pages` son modulos `Lazy Loaded`
> - En el caso de los `productos` asumo que el `precio` se coloca manualmente ya que no viene en el `json`
> - Los tiempos de espera del endpoint `https://fakerestapi.azurewebsites.net/api/books` suelen ser muy largos