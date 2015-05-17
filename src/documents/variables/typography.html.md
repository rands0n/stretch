## Typography

All HTML headings, `<h1>` through `<h6>`, are available. `.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.

# h1 - Stretch Heading
## h2 - Stretch Heading
### h3 - Stretch Heading
#### h4 - Stretch Heading
##### h5 - Stretch Heading
###### h6 - Stretch Heading

```html
<h1>H1 - Stretch Heading</h1>
<h2>H2 - Stretch Heading</h2>
<h3>H3 - Stretch Heading</h3>
<h4>H4 - Stretch Heading</h4>
<h5>H5 - Stretch Heading</h5>
<h6>H6 - Stretch Heading</h6>
```
Stretch's global default `font-size` is **14px**, with `line-height` of 1.4.

#### Body copy

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.

```html
<p>...</p>
```

#### Built with LESS

The typographic scale is based on two Less variables in **variables.less**: `@font-size-base` and `@line-height-base`. The first is the base font-size used throughout and the second is the base line-height. We use those variables and some simple math to create the margins, paddings, and line-heights of all our type and more. Customize them and Stretch adapts.
