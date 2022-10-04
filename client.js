if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (event) => {
        const rotateDegrees = event.alpha; // alpha: rotation around z-axis
        const leftToRight = event.gamma; // gamma: left to right
        const frontToBack = event.beta; // beta: front back motion
        
        console.log(event);
        //handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    }, true);
}

const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
    // do something amazing
};
 
// navigator.permissions.query({name: "accelerometer"}).then(result => {
//         if (result.state != 'granted') {
//             console.log("Sorry, we're not allowed to access sensors " +
//                         "on your device..");
//             return;
//         }
//         startApp();
//     }).catch(err => {
//         console.log("Integration with Permissions API is not enabled, still try to start");
//         console.log(err)
//         startApp();
//     });

// function startApp() {
//     console.log("Starting!");

//     const acl = new Accelerometer({ frequency: 60 });

//     acl.addEventListener("reading", () => {
//         console.log(`Acceleration along the X-axis ${acl.x}`);
//         console.log(`Acceleration along the Y-axis ${acl.y}`);
//         console.log(`Acceleration along the Z-axis ${acl.z}`);
//     });

//     acl.start();
// }
