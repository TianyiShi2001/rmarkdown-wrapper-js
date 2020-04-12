import { dirname, basename, resolve } from "path";
import { spawn, spawnSync } from "child_process";
import { Rcall, Rscript } from "r-helper";

interface RenderOptions {
  output_format?: string;
  output_file?: string;
  output_dir?: string;
  output_options?: string;
  output_yaml?: string;
  quiet?: boolean;
  encoding: boolean;
}

export function render(input, options?: RenderOptions) {
  return spawn(Rscript(Rcall("rmarkdown::render", [basename(input)], options)), { cwd: dirname(input), shell: true });
}

export function renderSync(input, options?: RenderOptions) {
  return spawnSync(Rscript(Rcall("rmarkdown::render", [basename(input)], options)), { cwd: dirname(input), shell: true });
}
