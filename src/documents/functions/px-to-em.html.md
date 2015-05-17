## px to em

This is not a function, it remains a mixin. But convert `px` to `em` :)

```css
.em(@selector, @amt, @default-px: 16) when (ispixel(@amt)) {
    @{selector}: unit((@amt / @default-px), em);
}
```

Use it is so easy:

```css
div {
    .em(font-size, 16px); // 1em
    .em(max-width, 18px); // 1.125em
}
```

Output:

```css
div {
    font-size: 1em;
    max-width: 1.125em;
}
```
