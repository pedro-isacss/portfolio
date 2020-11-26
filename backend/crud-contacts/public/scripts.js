/* eslint-disable no-undef */
let contacts = [];
let numberItem = 0;
const token = localStorage.getItem("token");

// LOGIN
$("#login-form").submit(() => {
  fetch("http://localhost:3000/authenticate", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: $("#email").val(),
      password: $("#password").val(),
    }),
  })
    .then(response => response.json())
    .then(res => {
      window.location.href = "http://localhost:3000/dashboard.html";
      localStorage.setItem("token", res.token);
    })
    .catch(error => {
      console.log(error);
    });
});

// NEW USER
$("#register-form").submit(() => {
  fetch("http://localhost:3000/newuser", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: $("#emailregister").val(),
      password: $("#passwordregister").val(),
    }),
  })
    .then(response => {
      console.log(response.json());
    })
    .catch(error => {
      console.log(error);
    });
});

// SUBMIT A CONTACT
$("#new-contact-form").submit(() => {
  const id = $("#id").val();
  if (id === "") {
    fetch("http://localhost:3000/newcontact", {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        birthday: $("#birthday").val(),
      }),
    })
      .then(response => {
        console.log(response.json());
      })
      .catch(error => console.log(error));
  } else {
    fetch("http://localhost:3000/updatecontact", {
      method: "put",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        birthday: $("#birthday").val(),
      }),
    })
      .then(response => {
        console.log(response.json());
      })
      .catch(error => console.log(error));
  }
});

// DELETE CONTACT
$("#delete-contact-form").submit(() => {
  fetch("http://localhost:3000/deletecontact", {
    method: "delete",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: $("#id-delete").val() }),
  });
});

// DELETE ALL
$("#delete-all-form").submit(() => {
  fetch("http://localhost:3000/deleteall", {
    method: "delete",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
});

// CREATE CONTACT
function createContact(firstname, lastname, email, phone, birthday, id) {
  const index = Math.floor(Math.random() * 4 + 0);
  const colors = ["yellow", "green", "blue", "pink", "gray"];

  const tr = $("<tr></tr>");
  const tdContact = $(`<td class="td-contact"></td>`);
  const logoLetter = $(`<span class="logo-letter">${firstname[0]}</span>`);
  const contactName = $(`<p class="contactName">${firstname} ${lastname}</p>`);
  const tdEmail = $(`<td><p>${email}</p></td>`);
  const tdPhone = $(`<td><p>${phone}</p></td>`);
  const tdBirthday = $(`<td><p>${birthday}</p></td>`);
  const tdId = $(`<td><p>${id}</p></td>`);

  if (numberItem % 2 === 0) {
    $(".contact-container")
      .children()
      .eq(1)
      .css("background-color", "rgb(149, 149, 238)");
  }

  logoLetter.css("background-color", colors[index]);

  tdContact.append(logoLetter, contactName);

  tr.append(tdContact, tdEmail, tdPhone, tdBirthday, tdId);

  $(".contact-container").append(tr);
  numberItem += numberItem;
}

// LOGOUT
$("#logout").click(() => {
  localStorage.clear();
  window.location.href = "http://localhost:3000";
});

if (
  window.location.href.indexOf("http://localhost:3000/dashboard.html") !== -1 &&
  token === null
) {
  window.location.replace("http://localhost:3000");
} else {
  fetch("http://localhost:3000/getcontacts", {
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json())
    .then(res => {
      contacts = res.slice(0).reverse();
      contacts.map(item =>
        createContact(
          item.firstName,
          item.lastName,
          item.email,
          item.phone,
          item.birthday,
          item.id,
        ),
      );
    });
}

console.log(token);
