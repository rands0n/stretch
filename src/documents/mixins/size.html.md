## Size

Specify the dimension of any object more easily.

```css
.size(@width, @height) {
    width: @width;
    height: @height;
}

.square(@width, @height) {
    .size(@width, @height);
}
```

An example is its use with avatars:

```css
.avatar {
    .size(80px, 85px);
}

.avatar-image {
    .square(80px, 85px);
}
```
