export function sendMail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    work: document.getElementById("work").value
  };

  const serviceID = "service_eok2rhv";
  const templateID = "template_upygej8";

  emailjs.send(serviceID, templateID, params).then(
    res =>{
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("work").value = "";
      console.log(res)
      alert("your message sent successfully");
   })
   .catch((err) => console.log(err))

   module.exports = sendMail;
};

