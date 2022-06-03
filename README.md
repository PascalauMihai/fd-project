# Framework Development project - Image Search + Image Carousel Creation Web Component

## Overview

![fd-element](images/startingImage.png)

Image Search + Image Carousel Creation is a custom web component using LitElement with JavaScript. It defines a custom search bar which utilises an API based on the Google Images Search to fetch a list of images based on the searched term. These images are displayed on multiple pages (page size can be customized) and can be selected in order to create a custom image carousel (carousel width and height can be customized).

## Setup

Clone the repository and install the necesary dependencies:

```bash
npm i
```
After everything was installed I recommend an update to remove any possible problems:

```bash
npm update
```

## API KEY (Image searching)

Get your API key from https://rapidapi.com/Glavier/api/google-image-search1/ from the JavaScript - fetch code snippet and add it into a file called ./apikey.js:

In the end, the file should look like this

```js
const options = {...};
export { options };
```

## Dev Server

This web component uses modern-web.dev's [@web/dev-server](https://www.npmjs.com/package/@web/dev-server) for previewing the project without additional build steps. Web Dev Server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers. See [modern-web.dev's Web Dev Server documentation](https://modern-web.dev/docs/dev-server/overview/) for more information.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

The site will usually be served at http://localhost:8000.

## Integration

The web component is easily integrable, you just have to import a few scripts (custom web component loader, lit and our custom web component):

```html
    <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
    <script src="node_modules/lit/polyfill-support.js"></script>
    <script type="module" src="fd-element.js"></script>
```

Then you can use the component freely:

```html
<fd-element [carouselMaxWidthSize]="800" [carouselMaxHeightSize]="800" [imagesPerPage]="8"> </fd-element>
```

## Editing

If you use VS Code, I highly reccomend the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin), which enables some extremely useful features for lit-html templates:

- Syntax highlighting
- Type-checking
- Code completion
- Hover-over docs
- Jump to definition
- Linting
- Quick Fixes

The project is setup to reccomend lit-plugin to VS Code users if they don't already have it installed.


## Usage

