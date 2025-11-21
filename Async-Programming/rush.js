// q5_frontend_rush.js
// -----------------------------------------------------
// Version 1: Callback Hell using deeply nested functions
// -----------------------------------------------------

function delay(step, callback) {
    setTimeout(() => {
        console.log(step);
        callback();
    }, 1000);
}

function runPipelineCallbackHell() {
    console.log("=== CALLBACK HELL VERSION ===");

    delay("🎨 Designing UI...", () => {
        delay("🛠 Building components...", () => {
            delay("🧪 Testing application...", () => {
                delay("🚀 Deploying to server...", () => {
                    delay("🎉 Celebration time!", () => {
                        console.log("Pipeline completed (Callback Hell)");
                    });
                });
            });
        });
    });
}

runPipelineCallbackHell();
