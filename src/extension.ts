import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "extension.copyCssRules",
    async () => {
      const config = vscode.workspace.getConfiguration("React-Copy-CSS-Rules");
      // support for css modules true | false
      const useCssModules = config.get("useCssModules");

      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      const document = editor.document;
      const fullText = document.getText();
      const classNames = fullText.match(/className="([^"]*)"/g) || [];

      if (classNames.length === 0) {
        vscode.window.showInformationMessage("No class names found");
        return;
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
