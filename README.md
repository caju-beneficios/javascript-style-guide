# Caju JavaScript Style Guide

Style guide based on Airbnb's. Differences between them are described below.

# How to use

To install this package and its dependencies:

```bash
$ npm install --save-dev eslint@7.32.0 \
                         eslint-plugin-import@2.23.4 \
                         eslint-config-caju-base
```

After installed this packages, insert de code bellow inside your `.eslintrc`:

```
{
  "extends": ["caju-base"]
}
```

# Rules

## Semicolons

Don't use it.

## Limit of parameters in function definition

A function can have up to 3 parameters. Consider using an object to pass more values to a function.

## Enforce consistent line breaks inside function parentheses

### Wrong
```js
foo(a,
  b)
```

### Right

```js
foo(
    a,
    b
)
```

## Comma dangle always on multiline except on function

### Wrong

```js
const arr = [
  1,
  2,
  3
]

const obj = {
  a: 1,
  b: 2,
  c: 3
}
```

### Right

```js
const arr = [
  1,
  2,
  3,
]

const obj = {
  a: 1,
  b: 2,
  c: 3,
}
```

## Limit Cyclomatic Complexity(warning only)

Cyclomatic complexity measures the number of linearly independent paths through a program's source code. This rule configured to 4 allows setting a cyclomatic complexity threshold.

### Wrong

```js
function foo() {
  if (true) {
    return true
  }

  if (true) {
    return true
  }

  if (true) {
    return true
  }

  if (true) {
    return true
  }
}
```

### Right

```js
function foo() {
  if (true) {
    return true
  }

  if (true) {
    return true
  }

  if (true) {
    return true
  }

  return true
}
```

## Limit the depth that blocks can be nested

Avoiding the famous hadouken code

### Invalid

```js
function foo() {
  for (;;) { // Nested 1 deep
    while (true) { // Nested 2 deep
      if (true) { // Nested 3 deep
        if (true) { // Nested 4 deep
        }
      }
    }
  }
}
```

### Valid

```js
function foo() {
  for (;;) { // Nested 1 deep
    while (true) { // Nested 2 deep
      if (true) { // Nested 3 deep
      }
    }
  }
}
```

Evitando código hadouken

## Limit of Line Length

Avoid lines of code that are longer than 80 characters(whitespace included).

Not applied to:
- Comments
- Strings
- Regex
- URLs
- Template literals

## Limit of multiple empty lines

1 line

## indentation

2 characters