const vscode = require('vscode');
const hgWebView = require('./webview/helloWebview.js')

function activate(context) {
    console.log('active !');

    // 要传递的 content 
    const webviewContent = {
        'description': 'Marxu is a good web developer',
        'slogan':'Support Marxu , learn more !'
    }
    
    const webViewCommand = vscode.commands.registerCommand('webview.start', () => {
        vscode.window.showInformationMessage('Hello WebVie , I am Marxu !')

        const panel =  vscode.window.createWebviewPanel(
            'hgWebView',
            'Hello WebView',
            vscode.ViewColumn.One,
            {}
        )
        // @ts-ignore
        panel.webview.html = hgWebView

        let count = 0
        const updateWebview = () => {
            const txt = count ++ % 2  ? 'description' : 'slogan'
            panel.webview.html = hgWebView(webviewContent[txt])
        }

        // init
        updateWebview()

        // timer
    setInterval(updateWebview, 1000)

    });

    context.subscriptions.push(webViewCommand);
}


module.exports = {
    activate,
};
