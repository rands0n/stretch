## Clearfix

Forget adding `class="clearfix"` to any element and instead add the `.clearfix()` mixin where appropriate. Also use [this clearfix](http://nicolasgallagher.com/micro-clearfix-hack/) from [Nicolas Gallager](http://twitter.com/necolas).

```css
// Mixin

.clearfix() {
    &:before,
    &:after {
        content: " ";
        display: table;
    }

    &:after {
        clear: both;
    }
}

// Usage

.clearfix();
```