## Transform

Rorate, scale, translate (move), or skew any object.

#### Rotate

```css
.rotate(@degrees) {
    .prefixer(transform, rotate(@degrees));
}
```

#### Scale

```css
.scale(@ratio) {
    .prefixer(transform, scale(@ratio));
}
```

#### Translate

```css
.translate(@x, @y) {
    .prefixer(transform, translate(@x, @y));
}
```

#### Skew

```css
.skew(@x, @y) {
    .prefixer(transform, skewX(@x) skewY(@y));

    -webkit-backface-visibility: hidden;
}
```

#### Translate3D

```css
.translate3d(@x, @y, @z) {
    .prefixer(transform, translate3d(@x, @y, @z));
}
```
