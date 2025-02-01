import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Register a command that reads the first line of the currently open file
    let disposable = vscode.commands.registerCommand('extension.readFirstLine', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const firstLine = document.lineAt(0).text;
            vscode.window.showInformationMessage(`First line: ${firstLine}`);
        } else {
            vscode.window.showInformationMessage('No active editor');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    // Clean up resources here if needed
}