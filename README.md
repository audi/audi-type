# Audi Type

## Usage

##### CSS

1. Copy the folder `fonts` and `css` to your project folder. Both folders have to be in the same folder.
2. Link `css/audi-type.min.css` from your HTML files.
```html
<link rel="stylesheet" href="/css/audi-type.min.css">
```

##### SCSS

1. Copy all fonts to your project folder.
2. In your main SCSS override `$auditype-font-src` with the path to the font folder before importing the `audi-type.scss` file. `$auditype-font-src: 'path/to/font/folder;`
3. Import the SCSS file `@import "src/scss/audi-type";` to your main SCSS.

## Demo

Just open `dist/index.html` in your web browser of choice.

## Build

To get started, first install the necessary dependencies, from the root of the project:

```
npm i
```

> Audi Type requires Gulp 4.0

Next, run the following one-liner to compile all files to `dist`

```
gulp
```
