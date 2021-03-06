var gulp = require('gulp');
var electron = require('gulp-electron');
var packageJson = require('./src/package.json');
 
gulp.task('electron', function() {
 
    gulp.src("")
    .pipe(electron({
        src: './src',
        packageJson: packageJson,
        release: './release',
        cache: './cache',
        version: 'v1.0.0',
        packaging: true,
        token: 'abc123...',
        platforms: ['darwin-x64'],
        platformResources: {
            darwin: {
                CFBundleDisplayName: packageJson.name,
                CFBundleIdentifier: packageJson.name,
                CFBundleName: packageJson.name,
                CFBundleVersion: packageJson.version,
                icon: 'acms.icns'
            }
        }
    }))
    .pipe(gulp.dest(""));
});