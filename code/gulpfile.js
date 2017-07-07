var gulp= require("gulp");
var babel = require('gulp-babel'); //es6转es5
var jsmin=require("gulp-uglify");  //导入插件

//task():定义任务；
gulp.task("jsTask",function(){
	gulp.src("js/*.js")  //要处理的文件位置
	.pipe(babel({presets:['es2015']})) //es6转es5
	.pipe(jsmin())//使用插件
	.pipe(gulp.dest("dest/js")); //处理后的文件存放位置

})
gulp.task("default",["jsTask"]);
