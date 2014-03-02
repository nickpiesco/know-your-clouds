module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			css: {
				files: ['src/scss/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			}
		},
		concat: {
			dist: {
				src: [
					'src/js/prototype.js',
					'src/js/scriptaculous.js',
					'src/js/effects.js',
					'src/js/builder.js',
					'src/js/lightbox.js'
				],
				dest: 'dist/js/all.js'
			}
		},
		uglify: {
			build: {
				src: 'dist/js/all.js',
				dest: 'dist/js/all.min.js'
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/images/'
				}]
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'dist/css/style.css': 'src/scss/style.scss'
				}
			} 
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['watch', 'concat', 'uglify', 'imagemin', 'sass']);

};
