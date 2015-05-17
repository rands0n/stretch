## Box Sizing

The `box-sizing` property is used to alter the default [CSS Box Model](https://developer.mozilla.org/en-US/docs/CSS/Box_model) used to calculate widths and heights of elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification.

```css
.box-sizing(@box-model) {
    .prefixer(box-sizing, @box-model);
}
```
