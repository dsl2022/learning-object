// JavaScript code for the page
const userForm = document.getElementById('user-form');
const userList = document.getElementById('user-list');
const userDetails = document.getElementById('user-details');
let users = [];

// Function to add a new user
function addUser(event) {
  event.preventDefault();

  // Get form data
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;

  // Create user object
  const user = {
    firstName,
    lastName,
    email,
    gender
  };

  // Add user to list
  users.push(user);
  displayUsers();
}

// Function to display the list of users
function displayUsers() {
  // Clear user list
  userList.innerHTML = '';
    console.log({users})
  // Create user list items
  users.forEach((user, index) => {
    const listItem = document.createElement('div');
    listItem.classList.add('user-item');
    listItem.innerHTML = `
      <div class="user-name">${user.firstName} ${user.lastName}</div>
      <div class="user-email">${user.email}</div>
      <button class="view-user" data-index="${index}">View</button>
    `;
    userList.appendChild(listItem);
  });

  // Add event listeners to view user buttons
  const viewButtons = document.querySelectorAll('.view-user');
  viewButtons.forEach(button => {
    button.addEventListener('click', () => {
      const index = button.dataset.index;
      displayUserDetails(index);
    });
  });
}

// Function to display the details of a single user
function displayUserDetails(index) {
  // Get user object
  const user = users[index];

  // Create user details object
  const userDetailsObject = {
    'First Name': user.firstName,
    'Last Name': user.lastName,
    'Email': user.email,
    'Gender': user.gender
  };

  // Clear user details
  userDetails.innerHTML = '';

  // Create user details object
  const userObject = document.createElement('pre');
  userObject.textContent = JSON.stringify(userDetailsObject, null, 2);
  userDetails.appendChild(userObject);
}

// Add submit event listener to user form
userForm.addEventListener('submit', addUser);
