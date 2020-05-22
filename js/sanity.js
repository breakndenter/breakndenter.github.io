function myFunction() {
        var patt = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        var patp = /^()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/;
        var ip_addr = document.getElementById("IP").value
        var port_n = document.getElementById("PORT").value
        var txt = ""
if(ip_addr == ' ')
        {
        txt = "IP Address field can not be empty";
        document.getElementById("result").innerHTML = txt;
        return false;
        }
    else if (port_n == '')  
     {  
        txt = "TCP Port field can not be empty";
        document.getElementById("result").innerHTML = txt;
        return false;  
     }
    else if (patt.test(ip_addr) == false)
     {
        txt = "IP Address format is invalid";
        document.getElementById("result").innerHTML = txt;
        return false;  
     }
    else if (patp.test(port_n) == false)
     {  
        txt = "Port must be between 0-65535";
        document.getElementById("result").innerHTML = txt;
        return false;  
     }
    else if {
            var elements = document.getElementsByClassName('highlight');
            for (var p = 0; p < elements.length; p++) {
                    var str = elements[i].innerHTML;
                    var r_ip = document.getElementById("IP").value;
                    if(r_ip != ip_addr)
            }
     {
        txt = "Please clear the fields and start over";
        document.getElementById("result").innerHTML = txt;
        document.getElementById("IP").value = ip_addr;
        return false;
     }
    }
    else {
document.getElementById("btClear").disabled = false;
var elements = document.getElementsByClassName('highlight');
for (var i = 0; i < elements.length; i++) {
  var str = elements[i].innerHTML;
  var r_ip = document.getElementById("IP").value;
  var ip = str.replace("YOUR_IP", r_ip);
  elements[i].innerHTML = ip;
}


for (var p = 0; p < elements.length; p++) {
  var str = elements[p].innerHTML;
  var r_port = document.getElementById("PORT").value;
  var port = str.replace("PORT", r_port);
  elements[p].innerHTML = port;
  txt = "You are now ready to copy your desired shell down below";
  document.getElementById("result").innerHTML = txt;
  return true;
}
}
}


function reset() {
  var elements = document.getElementsByClassName('highlight');
  for (var i = 0; i < elements.length; i++) {
  var str = elements[i].innerHTML;
  var r_ip = document.getElementById("IP").value;
  var ip = str.replace(r_ip, "YOUR_IP");
  elements[i].innerHTML = ip;
}
  for (var p = 0; p < elements.length; p++) {
  var str = elements[p].innerHTML;
  var r_port = document.getElementById("PORT").value;
  var port = str.replace(r_port, "PORT");
  elements[p].innerHTML = port;
}
  document.getElementById("btClear").disabled = true;
  txt = ""
  document.getElementById("result").innerHTML = txt;
}
