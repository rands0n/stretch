## Resizable

Easily configure the resize options for any textarea, or any other element. Some options are default like `direction`.

Options available for `direction` are: `horizontal`, `vertical`, `both`.

```css
.resizable(@direction: both, @overflow: auto) {
    resize: @direction;
    overflow: @overflow;
}
```
