## Opacity

Set the opacity for all browsers and provide a `filter` fallback for IE8.

```css
.opacity(@opacity) {
    opacity: @opacity;
    @opacity-ie: @opacity * 100;
    filter: ~"alpha(opacity=@{opacity-ie})"; // IE8
}
```
