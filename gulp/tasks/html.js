import fileinclude from "gulp-file-include";
import webHtmlNosvg from "gulp-webp-html-nosvg";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(fileinclude())
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(webHtmlNosvg())
        .pipe(app.gulp.dest(app.path.build.html))
}