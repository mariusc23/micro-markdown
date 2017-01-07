# micro-markdown

> Markdown as a service.

## `POST` request

### markdown: string

```json
{
  "markdown": "# hello world"
}
```

### options: object

```json
{
  "options": {
    "highlight": null,
    "smartypants": true
  }
}
```

## response

```json
{
  "html": "<h1>hello world</h1>\n",
  "options": {
    "gfm": true,
    "tables": true,
    "breaks": true,
    "pedantic": false,
    "sanitize": true,
    "smartLists": true,
    "smartypants": true,
    "highlight": null
  }
}
```

## License

Copyright (c) 2017 Marius Craciunoiu. Licensed under the MIT license.
