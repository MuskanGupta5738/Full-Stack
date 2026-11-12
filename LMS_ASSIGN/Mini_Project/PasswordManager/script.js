const LOCAL_STORAGE_DATA_KEY = "PasswordManagerData";

const passwordForm = document.getElementById("passwordForm");
const websiteName = document.getElementById("websiteName");
const websiteUrl = document.getElementById("websiteUrl");
const username = document.getElementById("username");
const password = document.getElementById("password");
const dataTable = document.getElementById("dataTable");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const noResults = document.getElementById("noResults");
const addPasswordBtn = document.getElementById("addPasswordBtn");
const savePasswordBtn = document.getElementById("savePasswordBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const formTitle = document.getElementById("formTitle");
const formSection = document.getElementById("formSection");
const messageBox = document.getElementById("messageBox");

let passwordData =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];
let editingId = null;

function saveToLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(passwordData));
}

function showMessage(message, type) {
  messageBox.textContent = message;
  messageBox.className = "alert alert-" + type + " mt-3";
  messageBox.hidden = false;
}

function clearForm() {
  passwordForm.reset();
  editingId = null;
  formTitle.textContent = "Add New Password";
  savePasswordBtn.textContent = "Save Password";
  cancelEditBtn.hidden = true;
}

function createCell(content) {
  const cell = document.createElement("td");
  cell.textContent = content;
  return cell;
}

function createActionButton(text, className) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.className = "action-btn " + className;
  return button;
}

function renderData() {
  dataTable.innerHTML = "";

  const searchValue = searchInput.value.trim().toLowerCase();

  const filteredData = passwordData.filter(function (item) {
    return item.websiteName.toLowerCase().includes(searchValue);
  });

  emptyState.hidden = passwordData.length !== 0;
  noResults.hidden = passwordData.length === 0 || filteredData.length !== 0;

  filteredData.forEach(function (item) {
    const row = document.createElement("tr");

    const nameCell = createCell(item.websiteName);

    const urlCell = document.createElement("td");
    const urlLink = document.createElement("a");
    urlLink.textContent = item.websiteUrl;
    urlLink.href = item.websiteUrl;
    urlLink.target = "_blank";
    urlLink.rel = "noopener noreferrer";
    urlLink.className = "website-link";
    urlCell.appendChild(urlLink);

    const usernameCell = createCell(item.username);

    const passwordCell = document.createElement("td");
    const passwordText = document.createElement("span");
    passwordText.textContent = "••••••••";
    passwordCell.appendChild(passwordText);

    const showCell = document.createElement("td");
    const showButton = createActionButton("Show", "show-btn");

    showButton.addEventListener("click", function () {
      if (passwordText.textContent === "••••••••") {
        passwordText.textContent = item.password;
        showButton.textContent = "Hide";
      } else {
        passwordText.textContent = "••••••••";
        showButton.textContent = "Show";
      }
    });

    showCell.appendChild(showButton);

    const editCell = document.createElement("td");
    const editButton = createActionButton("Edit", "edit-btn");

    editButton.addEventListener("click", function () {
      editPassword(item.id);
    });

    editCell.appendChild(editButton);

    const deleteCell = document.createElement("td");
    const deleteButton = createActionButton("Delete", "delete-btn");

    deleteButton.addEventListener("click", function () {
      deletePassword(item.id);
    });

    deleteCell.appendChild(deleteButton);

    row.append(
      nameCell,
      urlCell,
      usernameCell,
      passwordCell,
      showCell,
      editCell,
      deleteCell,
    );

    dataTable.appendChild(row);
  });
}

passwordForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = websiteName.value.trim();
  const urlValue = websiteUrl.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value;

  if (!nameValue || !urlValue || !usernameValue || !passwordValue.trim()) {
    showMessage("Please fill in all fields.", "danger");
    return;
  }

  let parsedUrl;

  try {
    parsedUrl = new URL(urlValue);
  } catch {
    showMessage("Please enter a valid website URL.", "danger");
    return;
  }

  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
    showMessage("Only HTTP and HTTPS website URLs are allowed.", "danger");
    return;
  }

  if (editingId !== null) {
    const itemIndex = passwordData.findIndex(function (item) {
      return item.id === editingId;
    });

    if (itemIndex !== -1) {
      passwordData[itemIndex].websiteName = nameValue;
      passwordData[itemIndex].websiteUrl = parsedUrl.href;
      passwordData[itemIndex].username = usernameValue;
      passwordData[itemIndex].password = passwordValue;

      showMessage("Password updated successfully!", "success");
    }
  } else {
    const newPassword = {
      id: Date.now().toString(),
      websiteName: nameValue,
      websiteUrl: parsedUrl.href,
      username: usernameValue,
      password: passwordValue,
    };

    passwordData.push(newPassword);
    showMessage("Password added successfully!", "success");
  }

  saveToLocalStorage();
  clearForm();
  renderData();
});

function editPassword(id) {
  const item = passwordData.find(function (item) {
    return item.id === id;
  });

  if (!item) {
    return;
  }

  websiteName.value = item.websiteName;
  websiteUrl.value = item.websiteUrl;
  username.value = item.username;
  password.value = item.password;

  editingId = id;
  formTitle.textContent = "Update Password";
  savePasswordBtn.textContent = "Update Password";
  cancelEditBtn.hidden = false;

  formSection.scrollIntoView({ behavior: "smooth" });
}

function deletePassword(id) {
  const confirmDelete = confirm(
    "Are you sure you want to delete this password?",
  );

  if (!confirmDelete) {
    return;
  }

  passwordData = passwordData.filter(function (item) {
    return item.id !== id;
  });

  if (editingId === id) {
    clearForm();
  }

  saveToLocalStorage();
  renderData();
  showMessage("Password deleted successfully!", "success");
}

searchInput.addEventListener("input", renderData);

addPasswordBtn.addEventListener("click", function () {
  clearForm();
  messageBox.hidden = true;
  formSection.scrollIntoView({ behavior: "smooth" });
  websiteName.focus();
});

cancelEditBtn.addEventListener("click", function () {
  clearForm();
  messageBox.hidden = true;
});

renderData();
