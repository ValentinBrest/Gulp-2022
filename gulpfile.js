// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";


// Пердаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";

// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy)
}

// Построение сценариев выполнения задач
const dev = gulp.series(copy, watcher);

// Выполение сценария по умолчанию
gulp.task('default', dev);