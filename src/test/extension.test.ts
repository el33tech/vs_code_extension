import * as assert from 'assert';
import * as vscode from 'vscode';
import { activate } from '../extension';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Sample Test', async () => {
        // Create a mock context
        const context: vscode.ExtensionContext = {
            subscriptions: [],
            workspaceState: {} as vscode.Memento,
            globalState: {} as vscode.Memento,
            extensionUri: vscode.Uri.parse(''),
            extensionPath: '',
            environmentVariableCollection: {} as vscode.EnvironmentVariableCollection,
            storagePath: '',
            globalStoragePath: '',
            logPath: '',
            extensionMode: vscode.ExtensionMode.Test,
            asAbsolutePath: (relativePath: string) => relativePath,
            storageUri: vscode.Uri.parse(''),
            globalStorageUri: vscode.Uri.parse(''),
            logUri: vscode.Uri.parse('')
        };

        // Activate the extension
        activate(context);

        // Check if the command is registered
        const commands = await vscode.commands.getCommands(true);
        assert.ok(commands.includes('extension.readFirstLine'), 'Command extension.readFirstLine is not registered');
    });
});