// console.warn("MAIN IS WORKING")


// const path= require('path');
// const{ app,BrowserWindow } = require('electron');

// function createMainwindow() {

//     const mainWindow = new BrowserWindow(
//         {
//             title:"WhatsappBroadcast",
//             width:500,
//             height:600,
//             webPreferences:{
//                 preload: path.join(__dirname,'preload.js')
//             }
//         }
//     );

        
//     mainWindow.loadFile(path.join(__dirname,'./wabroadcastapp/src/index.html'));
    
// }

// app.whenReady().then(()=>{
//     createMainwindow();
// });












import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Allow Node.js integration
    }
  });

  // Load the Angular project's index.html
  mainWindow.loadURL(`file://${path.join(__dirname, 'angular-project', 'dist', 'index.html')}`);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Dereference the mainWindow object when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, re-create a window in the app when the dock icon is clicked
  if (mainWindow === null) {
    createWindow();
  }
});
