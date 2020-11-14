const gulp = require('gulp')
const ts = require('gulp-typescript')
const babel = require('gulp-babel')
const merge = require('merge2')
var rimraf = require('rimraf')

function compilePackage(pkg, tsProject, dev = true) {
  // return function(cb) {
  // console.log('-------->')
  tsProject = tsProject || ts.createProject('tsconfig.json')
  const pkgPath = `packages/${pkg}`
  if (!dev) rimraf.sync(`${pkgPath}/lib`)
  const tsReslut = gulp
    .src([`${pkgPath}/src/**/*.ts`, `${pkgPath}/src/**/*.tsx`]) // or tsProject.src()
    .pipe(tsProject())

  const output = `${pkgPath}/lib`

  return merge(
    tsReslut.js.pipe(babel()).pipe(gulp.dest(output)),
    tsReslut.dts.pipe(gulp.dest(output)),
  )
  // }
}

// function compile() {
//   const pkgs = PKGS_EXPORT
//   const builds = pkgs.map(pkg => {
//     return compilePackage(pkg)
//   })
//   // console.log(builds)
//   return merge(...builds)
// }

function compileCore() {
  return compilePackage(
    'core',
    ts.createProject('packages/core/tsconfig.json'),
    false,
  )
}

function compileThemeDefault() {
  return compilePackage(
    'theme-default',
    ts.createProject('packages/theme-default/tsconfig.json'),
    false,
  )
}

function dev() {
  const corProject = ts.createProject('packages/core/tsconfig.json')
  const themeDefaultProject = ts.createProject(
    'packages/theme-default/tsconfig.json',
  )
  gulp.watch(
    ['packages/core/src/**/*.ts', 'packages/core/src/**/*.tsx'],
    function compileCore() {
      return compilePackage('core', corProject)
    },
  )
  gulp.watch(
    [
      'packages/theme-default/src/**/*.ts',
      'packages/theme-default/src/**/*.tsx',
    ],
    function compileThemeDefault() {
      return compilePackage('theme-default', themeDefaultProject)
    },
  )
}

exports.compile = gulp.series(compileCore, compileThemeDefault)
exports.dev = dev
