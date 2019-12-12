
figma.showUI(__html__, {
    height: 600,
    width: 800
});

figma.ui.onmessage = message => {
    if (message.type === "RUN_CODE") {
        console.log("run code")
        eval(message.value);
    }
};
