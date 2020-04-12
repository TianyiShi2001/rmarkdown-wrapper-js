"use strict";
exports.__esModule = true;
var path_1 = require("path");
var child_process_1 = require("child_process");
var r_helper_1 = require("r-helper");
function render(input, options) {
    return child_process_1.spawn(r_helper_1.Rscript(r_helper_1.Rcall("rmarkdown::render", [path_1.basename(input)], options)), { cwd: path_1.dirname(input), shell: true });
}
exports.render = render;
function renderSync(input, options) {
    return child_process_1.spawnSync(r_helper_1.Rscript(r_helper_1.Rcall("rmarkdown::render", [path_1.basename(input)], options)), { cwd: path_1.dirname(input), shell: true });
}
exports.renderSync = renderSync;
//# sourceMappingURL=rmarkdown.js.map