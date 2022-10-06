// Initialize modules
const { src, dest, watch, series, parallel } = require("gulp")

// Import packages
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const replace = require("gulp-replace")
const browser_sync = require("browser-sync").create()

// Files path
const files = {
  cssPath: "src/css/*.css"
}

/* Css task 
  1. Add vendor prefixes
  2. Minify css
=========== */
function css_task() {
  return src(files.cssPath)
    .pipe(postcss([autoprefixer("last 4 versions"), cssnano()]))
    .pipe(dest("dist/css"))
}

// Cachebust task
function cachebust_task() {
  let timeString = new Date().getTime()

  return src(["index.html"])
    .pipe(replace(/cb=\d+/g, "cb=" + timeString))
    .pipe(dest("."))
}

// CopyCss vendors task
function copyCss_task() {
  return src(["src/css/vendors/**/*"], { base: "src/css" })
    .pipe(dest("dist/css"))
}

// CopyImages task
function copyImages_task() {
  return src(["src/images/favicon/*"], { base: "src/images" })
    .pipe(dest("dist/images"))
}

// Initialize browserSync
function browserSync(callback) {
  browser_sync.init({
    server: {
      baseDir: "."
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0"
      }
    }
  })
  callback()
}

// BrowserSync Reload task
function browserSyncReload(callback) {
  browser_sync.reload()
  callback()
}

// BrowserSync watch task
function browserSyncWatch() {
  watch(["index.html"], browserSyncReload)
  watch([files.cssPath], series(parallel(css_task), cachebust_task))
}

// Gulp watch task
function watch_task() {
  watch([files.cssPath], series(parallel(css_task), cachebust_task))
}

// Gulp default task
exports.default = series(parallel(css_task), cachebust_task, copyCss_task, copyImages_task, watch_task)

// Run browserSync
exports.bs = series(parallel(css_task), cachebust_task, copyCss_task, copyImages_task, browserSync, browserSyncWatch)
