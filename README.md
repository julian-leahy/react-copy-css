# React Copy CSS Extension for Visual Studio Code

This extension provides a command `Copy CSS Rules` that automates the process of replacing `className` attributes in your JSX/TSX files with a `styles` object reference and copies the original class names to your clipboard in a CSS format.

## Features

1. **Copy Class Names**: Extracts all `className` attributes from the active document and copies them to your clipboard in a CSS format. For example, `className="myClass"` would be copied as `.myClass{}`.

2. **Replace Class Names**: Replaces all `className` attributes in the active document with a `styles` object reference. For example, `className="myClass"` would be replaced with `className={styles.myClass}`.

3. **Supports CSS Modules**: This extension is designed to work with CSS Modules. It will only replace class names that are defined in the same file as the JSX/TSX file.

4. **Supports Regular CSS**: Uncheck the `cssModules` option in the settings to use regular CSS.

## Usage

1. Open a JSX/TSX file in Visual Studio Code.
2. Run the command `Copy CSS Rules`.
3. The extension will replace all `className` attributes in the active document with `styles` object references and copy the original class names to your clipboard in a CSS format.
