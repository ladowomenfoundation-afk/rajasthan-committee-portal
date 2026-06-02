const API = "YOUR_APPS_SCRIPT_URL";

async function login(){

let res = await fetch(API+"?action=login",{
method:"POST",
body:JSON.stringify({
userId:user.value,
password:pass.value
})
});

let r = await res.json();

if(r.status==="success"){
localStorage.setItem("role",r.role);
window.location="dashboard.html";
}else{
msg.innerText="Invalid Login";
}

}

// DASHBOARD LOAD
async function load(){

let res = await fetch(API+"?action=members");
let data = await res.json();

document.getElementById("m").innerText = data.length;

let table = document.getElementById("table");
table.innerHTML="";

data.forEach(d=>{
table.innerHTML+=`
<tr>
<td>${d.fullName || ""}</td>
<td>${d.mobile || ""}</td>
<td>${d.district || ""}</td>
<td>${d.block || ""}</td>
</tr>`;
});

}

if(window.location.pathname.includes("dashboard")){
load();
}
