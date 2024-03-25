"use strict";
// console.warn("MAIN IS WORKING")
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const electron_1 = require("electron");
const path = __importStar(require("path"));
let mainWindow;
function createWindow() {
    // Create the browser window.
    mainWindow = new electron_1.BrowserWindow({
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
electron_1.app.on('ready', createWindow);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    // On macOS, re-create a window in the app when the dock icon is clicked
    if (mainWindow === null) {
        createWindow();
    }
});
