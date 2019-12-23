import * as React from 'react'
import * as ReactDOM from 'react-dom'
import MonacoEditor from 'react-monaco-editor';
import {EditorLayout} from "./components/editor-layout/EditorLayout";
import {TypographyStyles, BaseStyles} from "figma-ui-components";
import {RunButton} from "./components/run-button/RunButton";

import "./figmaDefenitions";

const App = () => {
    const [code, setCode] = React.useState("");
    const options = {
        selectOnLineNumbers: true
    };

    const panel = <RunButton onClick={() => {
        parent.postMessage(
            {
                pluginMessage: {
                    type: "RUN_CODE",
                    value: code
                }
            },
            '*'
        );
    }} />;

    return <>
        <BaseStyles />
        <TypographyStyles />
        <EditorLayout panel={panel}>
            <MonacoEditor
                width="100%"
                height="360px"
                language="javascript"
                theme="vs-dark"
                value={code}
                options={options}
                onChange={(newValue) => setCode(newValue)}
                editorDidMount={(editor) => {
                    editor.focus();
                }}
            />
        </EditorLayout>
    </>
};

ReactDOM.render(<App />, document.getElementById('root'));
