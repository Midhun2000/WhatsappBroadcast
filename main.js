const path= require('path');
const{ app,BrowserWindow } = require('electron');

function createMainwindow() {

    const mainWindow = new BrowserWindow(
        {
            title:"WhatsappBroadcast",
            width:500,
            height:600,
            webPreferences:{
                preload: path.join(__dirname,'preload.js')
            }
        }
    );

        
    mainWindow.loadFile(path.join(__dirname,'./renderer/index.html'));
    
}

app.whenReady().then(()=>{
    createMainwindow();
});