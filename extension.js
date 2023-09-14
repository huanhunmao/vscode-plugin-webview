const vscode = require('vscode');

function activate(context) {
    console.log('active !');
    
    const webViewCommand = vscode.commands.registerCommand('webview.start', () => {
        vscode.window.showInformationMessage('Hello WebVie , I am Marxu !')

        return vscode.window.createWebviewPanel(
            'hgWebView',
            'Hello WebView',
            vscode.ViewColumn.One
        )
    });

    context.subscriptions.push(webViewCommand);
}

module.exports = {
    activate
};
