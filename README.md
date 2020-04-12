# rmarkdown-wrapper-js

Wrapper for R Markdown, Bookdown and Blogdown

## Installation

```bash
npm install rmarkdown
```

## Usage 

```typescript
import { render, renderSync } from 'rmarkdown';
```

## Demo

### Basic `.Rmd` Knitting

Running

```typescript
renderSync("/Users/foo/bar/example.Rmd")
// you should use an absolute path
```

will produce corresponding `example.xxx` documents according to the YAML frontmatter. The generated files are in the same directory as the source `.Rmd` file. `renderSync`'s return type is the same as `child_process.spawnSync()`. There is also a `render()` function, which is asynchronous, whose return type is the same as `child_process.spawn()`'s.

There are also some useful options that you can provide, for example:

```typescript
renderSync("/Users/foo/bar/example.Rmd", { output_format: 'pdf_document', output_dir:'~/baz' }))
```

The supported options are:

```typescript
interface RenderOptions {
  output_format?: string;
  output_file?: string;
  output_dir?: string;
  output_options?: string;
  output_yaml?: string;
  quiet?: boolean;
  encoding: boolean;
}
```

For details, refer to [R Markdown's Docs](https://rmarkdown.rstudio.com/docs/reference/render.html).