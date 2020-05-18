
var $$ = Dom7;


$$('.install-addme').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'AddMe' + '<br>Bundle Identifier: ' + 'com.PrestigeNetEnterprises.AddMe' + '<br>Version: ' + '1.4' + '<br>Size: ' + '26.8MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://ios.sizu.gq/plists/addme.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-8ballpool').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + '8 Ball Pool' + '<br>Bundle Identifier: ' + 'com.miniclip.8ballpoolmult' + '<br>Version: ' + '4.8.4' + '<br>Size: ' + '53.6MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://ios.sizu.gq/plists/8ballpool.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-pubgm').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'PUBG Mobile Hack' + '<br>Bundle Identifier: ' + 'com.tencent.ig' + '<br>Version: ' + '0.18.0' + '<br>Size: ' + '2GB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://ios.sizu.gq/plists/pubgm.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});