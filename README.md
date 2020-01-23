# tailwindcss-plugin-delight

Add some delightful CSS components to your Tailwind setup!

## Buttons

```css
.slide-up {}
.slide-down {}
.slide-left {}
.slide-right {}
```

## Spinners

```css
.spin-donut {}
.spin-radial {}
```

**Use standard Tailwind utilities to modify basic styles. These components just
add animated behavior.**

Color are set using `currentColor`, so using a utility like `text-red-500`
would change the spinner color, for example. If you need more fine-grain
control over `:after` and `:before` pseudo elements, check out
[tailwindcss-plugin-content](https://github.com/brandonpittman/tailwindcss-plugin-content).

