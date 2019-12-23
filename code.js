figma.showUI(__html__, {
    height: 400,
    width: 600
});

figma.ui.onmessage = message => {
    if (message.type === "RUN_CODE") {
        console.log("run code")
        eval(message.value);
    }
};
