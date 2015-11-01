var root = "/";
var dest = root;
var src = root;

module.exports = {
    scss: {
        src: ["scss/**/*.scss", "!node_modules/**/*.scss"],
        dest: 'css'
    },
    js: {
        src: ["**/*.js", "!node_modules/**/*.js"],
        dest: ''
    },
    lint: {
        js: {
            src: src + "**/*.js",
            config: root + "/.jshintrc"
        },
        scss: {
            src: src + "**/*.scss"
        }
    }
};
