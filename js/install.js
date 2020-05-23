/*

App Information Installer By @s1z4r
5/20/2020
https://sizu.gq

*/

var $$ = Dom7;

$$('.install-app').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'App Name Here' + '<br>Bundle Identifier: ' + 'Bundle Here' + '<br>Version: ' + 'Version Here' + '<br>Size: ' + 'Size Here', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-addme').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'AddMe' + '<br>Bundle Identifier: ' + 'com.PrestigeNetEnterprises.AddMe' + '<br>Version: ' + '1.4' + '<br>Size: ' + '26.8 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://ios.sizu.gq/plists/addme.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-8ballpool').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + '8 Ball Pool' + '<br>Bundle Identifier: ' + 'com.miniclip.8ballpoolmult' + '<br>Version: ' + '4.8.4' + '<br>Size: ' + '53.6 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://ios.sizu.gq/plists/8ballpool.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-pubgm').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'PUBG Mobile Hack' + '<br>Bundle Identifier: ' + 'com.tencent.ig' + '<br>Version: ' + '0.18.0' + '<br>Size: ' + '2 GB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://ios.sizu.gq/plists/pubgm.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-minecraft').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Minecraft' + '<br>Bundle Identifier: ' + 'com.mojang.minecraftpe' + '<br>Version: ' + '1.14.60' + '<br>Size: ' + '210.7 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://ios.sizu.gq/plists/minecraftpe.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});