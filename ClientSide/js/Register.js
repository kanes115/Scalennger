/**
 * Created by Kanes on 23.05.2017.
 */

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
    email = theForm.email.value;

    if (!uname || !password || !email) {
        alert("Some fields need correction:\n");
    } else {
        console.log("Correct!")
    }

    var package = {};
    package.type = "sendRegisterData";
    package.login = uname;
    package.password = password;
    package.email = email;
    var jsonPackage = JSON.sringify(package);
    sendMessage(jsonPackage);

}
