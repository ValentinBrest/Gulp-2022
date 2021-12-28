// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path";

// Пердаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp
}