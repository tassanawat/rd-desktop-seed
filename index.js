'use strict';

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const child_process = require('child_process');
const kill = require('tree-kill');

// Setup file logging

let waitBeforeClose = true;

const devMode = /electron/.test(path.basename(app.getPath('exe'), '.exe'));
console.log(__dirname);
if (devMode) {
    // Set appname and userData to indicate development environment
    app.setName(app.getName() + '-dev');
    app.setPath('userData', app.getPath('userData') + '-dev');

    // Setup reload
    require('electron-reload')(path.join(__dirname, '/dist/app.js'), {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    });
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let createWindow = () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    });
    mainWindow.setIcon(path.join(__dirname, '/dist/favicon.ico'));
    mainWindow.maximize();

    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/dist/index.html');

    // Open the DevTools.
    if (devMode && process.argv.indexOf('--noDevTools') === -1) {
        mainWindow.webContents.openDevTools();
    }

    // ipcMain.on('rendererIsFinished', (message) => {
    // 	waitBeforeClose = false;
    // 	app.quit();
    // })

    // mainWindow.on('close', (event) => {
    // 	if (waitBeforeClose) {
    // 		mainWindow.webContents.send('closing');
    // 		event.preventDefault();
    // 	}
    // })

    var child = null;
    if (devMode) {
        child = child_process.spawn('java', ['-jar', './lib/rd-efiling-offline-service-seed-0.0.1-SNAPSHOT.jar']);
    }else {
        const jreBinPath = "./resources/lib/jre1.8.0_121/bin";
        const jrePath = path.join(jreBinPath, '/java');
        console.log("JVM : "+jrePath);
        child = child_process.spawn(jrePath, ['-jar', './resources/lib/rd-efiling-offline-service-seed-0.0.1-SNAPSHOT.jar']);
    }
    //var child = child_process.spawn('./dist/lib/electron-run.bat');
    child.stdout.on('data', function (data) {
        console.log(data);
    });
    child.stderr.on('data', function (data) {
        console.log(data);
    });
    child.on('close', function (code) {
        if (code == 0)
            console.log('Stop');
        else
            console.log('Start');
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if nyour app supports multi windows, this is the time
        // when you should delete the corresponding element.

        process.stdin.pipe(child.stdin);
        child.kill();
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
    app.quit();
}
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow();
});
