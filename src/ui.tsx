import * as React from 'react'
import * as ReactDOM from 'react-dom'
import MonacoEditor from 'react-monaco-editor';

const App = () => {
    const [code] = React.useState("const x = 1;");
    const options = {
        selectOnLineNumbers: true
    };
    return <MonacoEditor
        width="800"
        height="600"
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
};

ReactDOM.render(<App />, document.getElementById('root'));
