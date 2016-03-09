var gulp            = require('gulp'),
    email           = require('gulp-email'),
    $               = require('gulp-load-plugins')(),
    argv            = require('yargs').argv,
    isProduction    = !!(argv.production);

////////////////////////////////////////////////////////////////////////
// This file should contain all your tasks for responsive emails
// 1). Build emails like zurb does
// 2). Automate Email Testing
// 3). Automate sending emails
// ------------------------------
////////////////////////////////////////////////////////////////////////

var EMailoptions = {
	// This is a none working example ...
    user: 'api:key-564dfgfead753fghef11c54c1fb',
    url: 'https://api.mailgun.net/v2/sandbox4825.mailgun.org/messages',
    form: {
        from: 'NotSentBy Me <test@gmail.com>',
        to: 'me <test@gmail.com>',
        subject: 'Sending myself a fake email',
        // attachment: '@path/to/folder/dist.zip'
    }
};
 
    gulp.task('email', function () {
        return gulp.src(['./dist-email/index.html'])
            .pipe(email(EMailoptions));
    });