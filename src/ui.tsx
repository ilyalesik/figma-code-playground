import * as React from 'react'
import * as ReactDOM from 'react-dom'
import MonacoEditor from 'react-monaco-editor';
import {EditorLayout} from "./components/editor-layout/EditorLayout";
import {TypographyStyles, BaseStyles, PrimaryButton, PlayIcon} from "figma-ui-components";
import {RunButton} from "./components/run-button/RunButton";

const App = () => {
    const [code] = React.useState("const x = 1;");
    const options = {
        selectOnLineNumbers: true
    };

    const panel = <RunButton />

    return <>
        <BaseStyles />
        <TypographyStyles />
        <EditorLayout panel={panel}>
            <MonacoEditor
                width="100%"
                height="560px"
                language="javascript"
                theme="vs-dark"
                value={code}
                options={options}
                onChange={(newValue, e) => console.log('onChange', newValue, e)}
                editorDidMount={(editor, monaco) => {
                    console.log('editorDidMount', editor);
                    editor.focus();
                }}
            />
        </EditorLayout>
    </>
};

ReactDOM.render(<App />, document.getElementById('root'));
