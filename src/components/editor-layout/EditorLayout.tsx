import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const PanelContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-shrink: 0;
    padding: 0 8px;
    background: #1e1e1e;
    justify-content: flex-end;
`;

const EditorContainer = styled.div`
    width: 100%;
    flex: 1;
`;

export const EditorLayout = (props) => {
    const {children, panel} = props;
    return <Container>
        <PanelContainer>{panel}</PanelContainer>
        <EditorContainer>{children}</EditorContainer>
    </Container>
};
