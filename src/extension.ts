import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "extension.copyCssRules",
    async () => {
      const config = vscode.workspace.getConfiguration("React-Copy-CSS-Rules");
      const useCssModules = config.get("useCssModules");
      console.log("use css modules", useCssModules);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
