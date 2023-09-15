const vscode = require('vscode');
const hgWebView = require('./webview/helloWebview.js')

function activate(context) {
    console.log('active !');

    // 要传递的 content 
    const webviewContent = {
        'description': 'Marxu is a good web developer',
        'slogan':'Support Marxu , learn more !'
    }
    
    let currentPanel 
    const webViewCommand = vscode.commands.registerCommand('webview.start', () => {
        vscode.window.showInformationMessage('Hello WebView , I am Marxu !')

        currentPanel =  vscode.window.createWebviewPanel(
            'hgWebView',
            'Hello WebView',
            vscode.ViewColumn.One,
            {
                enableScripts: true, // 开启 js 脚本权限 
            }
        )
        // @ts-ignore
        // currentPanel.webview.html = hgWebView

        let count = 0
        const updateWebview = () => {
            const txt = count ++ % 2  ? 'description' : 'slogan'
            currentPanel.webview.html = hgWebView(webviewContent[txt])
        }

        // init
        updateWebview()

        currentPanel.onDidDispose(
            () => {
                currentPanel = undefined // 销毁时释放变量
            },
            null,
            context.subscriptions
        )

        // timer
    // setInterval(updateWebview, 1000)

    });

    // 注册新命令
    const webViewRefactorCommand = vscode.commands.registerCommand('webview.doRefactor', () => {
        if(!currentPanel) return 

        // 向 webview 发消息  JSON 序列化数据
        currentPanel.webview.postMessage({
            command: 'refactor',
            msg: 'Hello Marxu, send to webview successfully!!!'
        })

        vscode.window.showInformationMessage('Hello refactor , Marxu !')

    })

    context.subscriptions.push(webViewCommand, webViewRefactorCommand);
}


module.exports = {
    activate,
};
