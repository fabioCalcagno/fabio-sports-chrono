#!/bin/bash

configExtension() {
    file_location=".vscode/settings.json"

    mkdir -p "$(dirname "$file_location")"

    cat <<EOF > "$file_location"
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },
  "files.exclude": {
    "**/.gradle": true,
    "**/.sourcemaps": true
  },
  "extensions.ignoreRecommendations": false,
  "prettier.useTabs": true,
  "prettier.semi": true,
  "editor.formatOnPaste": false,
  "typescript.format.insertSpaceAfterConstructor": false,
  "typescript.format.placeOpenBraceOnNewLineForFunctions": false,
  "javascript.format.placeOpenBraceOnNewLineForFunctions": false,
  "prettier.printWidth": 80,
  "editor.tabSize": 2,
  "typescript.tsdk": "node_modules/typescript/lib",
  "prettier.singleQuote": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.quoteStyle": "single",
  "prettier.arrowParens": "avoid",
  "javascript.preferences.quoteStyle": "single",
  "prettier.trailingComma": "none",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "conventionalCommits.scopes": [
    "features[tabs]",
    "config",
  ]
}
EOF
    echo "Arquivo de configurações atualizado."
}

installExtensions() {
    extensions=(
        "loiane.angular-extension-pack"
        "kisstkondoros.vscode-codemetrics"
        "syler.sass-indented"
        "sasa.vscode-sass-format"
        "eg2.vscode-npm-script"
        "eamodio.gitlens"
        "angular.ng-template"
        "steoates.autoimport"
        "tal7aouy.rainbow-bracket"
        "prasadbobby.auto-rename-tag"
        "mhutchie.git-graph"
        "ChakrounAnas.turbo-console-log"
        "Gruntfuggly.todo-tree"
        "vivaxy.vscode-conventional-commits"
    )

    for extension in "${extensions[@]}"; do
        code --install-extension "$extension"
    done
}

installExtensions
configExtension
