const vscode = require('vscode');
const hgWebView = require('./webview/helloWebview.js')

function activate(context) {
    console.log('active !');
    
    const webViewCommand = vscode.commands.registerCommand('webview.start', () => {
        vscode.window.showInformationMessage('Hello WebVie , I am Marxu !')

        const panel =  vscode.window.createWebviewPanel(
            'hgWebView',
            'Hello WebView',
            vscode.ViewColumn.One,
            {}
        )
        panel.webview.html = hgWebView
    });

    context.subscriptions.push(webViewCommand);
}

module.exports = {
    activate
};
