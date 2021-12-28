// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path";

// Пердаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp
}

// Импорт задач
import { copy } from "./gulp/tasks/copy";

// Выполение сценария по умолчанию
gulp.task('default', copy);