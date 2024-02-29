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

      // Iterate over each name in the classNames array, replacing the 'className="..."' pattern with the actual class name and splitting the result into an array of strings.
      const allClassNames = classNames.flatMap((name) =>
        name.replace(/className="([^"]*)"/, "$1").split(" ")
      );

      // Remove any duplicates, and convert it back to an array.
      const uniqueClassNames = Array.from(new Set(allClassNames));

      // Create a CSS class declaration for each class name.
      const cleanedClassNames = uniqueClassNames.map(
        (className) => "." + className + " {\n\n}"
      );
      const classNamesString = cleanedClassNames.join("\n\n");

      await vscode.env.clipboard.writeText(classNamesString);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
