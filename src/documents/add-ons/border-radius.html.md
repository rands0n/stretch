## Border Radius

Today all modern browsers support the non-prefixed `border-radius` property. As such, there is no `.border-radius()` mixin, but stretch does include shortcuts for quickly rounding two corners on a particular side of an object.

```css
// Mixin

.border-radius(@radius) {
    -webkit-border-radius: @radius;
        -moz-border-radius: @radius;
            -o-border-radius: @radius;
                border-radius: @radius;
}

.border-top-radius(@radius) {
    border-top-right-radius: @radius;
        border-top-left-radius: @radius;
}

.border-right-radius(@radius) {
    border-bottom-right-radius: @radius;
        border-top-right-radius: @radius;
}

.border-bottom-radius(@radius) {
    border-bottom-right-radius: @radius;
        border-bottom-left-radius: @radius;
}

.border-left-radius(@radius) {
    border-bottom-left-radius: @radius;
        border-top-left-radius: @radius;
}

// Usage

.border-radius(10px);
.border-top-radius(10px);
.border-right-radius(10px);
.border-bottom-radius(10px);
.border-left-radius(10px);
```