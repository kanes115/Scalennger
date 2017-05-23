
var net=require('net');

function sendMessage(msg) {
    var c = net.createConnection(8000, 'localhost');
    c.on("connect", function() {
        // connected to TCP server.
        c.write(msg);
    });
}


function validateFormOnSubmit(theForm) {
    password = theForm.psw.value;
    uname = theForm.uname.value;

    if (!uname || !password) {
        alert("Some fields need correction:\n");
    } else {
        console.log("Correct!")
    }

    var package = {};
    package.type = "sendLoginData";
    package.login = uname;
    package.password = password;
    var jsonPackage = JSON.sringify(package);
    sendMessage(jsonPackage);

}
