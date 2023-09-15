module.exports = (text) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello Webview</title>
    </head>
    <body>
        <h1 id="show-message">WebView</h1>
        <img style="width: 100px; height: 100px" src="https://archive.reactnative.dev/img/header_logo.svg"/>
        <h3>Nice !!!</h3>
        <div>
        ${text}
        </div>
        <button id='btn_submit'>send msg</button>
    </body>
    <script>
        const box = document.getElementById('show-message')
        const vscode = acquireVsCodeApi()

        // 监听消息
        window.addEventListener('message', event => {
            const message = event.data
            console.log("🚀 ~ file: helloWebview.js:25 ~ message:", message)
            
            switch(message.command){
                case 'refactor': 
                    box.textContent = message.msg
                    break
            }
        })

        document.addEventListener('click', () => {
            vscode.postMessage({
                command: 'sendMessage',
                msg: 'send successfully  from webview'
            })
        })
    </script>
    </html>
    `
} 