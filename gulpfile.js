const gulp = require('gulp')
const ts = require('gulp-typescript')
const babel = require('gulp-babel')
const merge = require('merge2')
var rimraf = require('rimraf')

const PKGS_EXPORT = ['core', 'theme-default']
const PKGS_INNER = ['playground']

function compilePackage(pkg, tsProject) {
  // return function(cb) {
  // console.log('-------->')
  tsProject = tsProject || ts.createProject('tsconfig.json')
  const pkgPath = `packages/${pkg}`
  rimraf.sync(`${pkgPath}/dist`)
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

function compile() {
  const pkgs = PKGS_EXPORT
  const builds = pkgs.map(pkg => {
    return compilePackage(pkg)
  })
  // console.log(builds)
  return merge(...builds)
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

exports.compile = compile
exports.dev = dev
