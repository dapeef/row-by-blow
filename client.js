navigator.permissions.query({name: "accelerometer"}).then(result => {
        if (result.state != 'granted') {
            console.log("Sorry, we're not allowed to access sensors " +
                        "on your device..");
            return;
        }
        startApp();
    }).catch(err => {
        console.log("Integration with Permissions API is not enabled, still try to start");
        console.log(err)
        startApp();
    });

function startApp() {
    console.log("Starting!");

    const acl = new Accelerometer({ frequency: 60 });

    acl.addEventListener("reading", () => {
        console.log(`Acceleration along the X-axis ${acl.x}`);
        console.log(`Acceleration along the Y-axis ${acl.y}`);
        console.log(`Acceleration along the Z-axis ${acl.z}`);
    });

    acl.start();
}
