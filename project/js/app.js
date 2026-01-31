// document.addEventListener('DOMContentLoaded', function () {

//     // --- SIGN UP ---
//     const signupForm = document.getElementById("form");
//     if (signupForm) {
//         signupForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             const nameVal = document.getElementById("name").value.trim();
//             const emailVal = document.getElementById("email").value.trim();
//             const passVal = document.getElementById("password").value;
//             const confirmPassVal = document.getElementById("confirmPassword").value;

//             // 1. Validation 
//             if (!nameVal || !emailVal || !passVal) {
//                 Swal.fire("Error", "Please fill all fields!", "error");
//                 return;
//             }
//             if (passVal !== confirmPassVal) {
//                 Swal.fire("Error", "Passwords do not match!", "error");
//                 return;
//             }

//             // 2. Getting existing users first, or create empty array
//             let users = JSON.parse(localStorage.getItem("usersData")) || [];

//             // 3. Unique Email Check
//             const emailExists = users.some(user => user.email === emailVal);
//             if (emailExists) {
//                 Swal.fire("Error", "Email already registered!", "error");
//                 return;
//             }

//             const userData = { name: nameVal, email: emailVal, password: passVal };

//             // 4. Save to Array and then to LocalStorage
//             users.push(userData); 
//             localStorage.setItem("usersData", JSON.stringify(users));

//             Swal.fire("Success", nameVal + ", registered!", "success").then(() => {
//                 // Path changed to go up one directory level, based on your file structure image
//                 window.location.href = "../index.html"; 
//             });
//         });
//     }

//     // --- LOG IN ---
//     const loginForm = document.getElementById("form2");
//     if (loginForm) {
//         loginForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             const loginEmail = document.getElementById("email2").value.trim();
//             const loginPass = document.getElementById("password2").value;

//             // 5. Getting the Array of users
//             const users = JSON.parse(localStorage.getItem("usersData")) || [];

//             // 6. Searching for the specific user
//             const foundUser = users.find(u => u.email === loginEmail && u.password === loginPass);

//             if (foundUser) {
//                 // Saving ONLY the logged-in user session
//                 localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

//                 Swal.fire("Success", "Welcome back!", "success").then(() => {
//                     // Path changed to go up one directory level, based on your file structure image
//                     window.location.href = "../index.html"; // Assuming dashboard.html is in root
//                 });
//             } else {
//                 Swal.fire("Error", "Invalid Email or Password!", "error");
//             }
//         });
//     }
//       // sign up / sign in button

//     const signInBtn = document.getElementById("signInBtn");
//     const signUpBtn = document.getElementById("signUpBtn");
//     const buildBtn = document.getElementById("buildBtn");

//     console.log("Sign In Button Found:", signInBtn);
//     console.log("Sign Up Button Found:", signUpBtn);
//     if (signInBtn) {
//         signInBtn.addEventListener("click", function () {
//             window.location.href = "signin.html";
//         });
//     }

//     if (signUpBtn) {
//         signUpBtn.addEventListener("click", function () {
//             window.location.href = "signup.html";
//         });
//     }

//     if (buildBtn) {
//         buildBtn.addEventListener("click", function () {
//             Swal.fire({
//                 title: 'Ready to build?',
//                 text: "Sign in to save your work!",
//                 imageUrl: 'https://unblast.com/wp-content/uploads/2020/05/Writing-CV-Illustration.jpg',
//                 imageWidth: 300,
//                 imageHeight: 200,
//                 imageAlt: 'Build Illustration',
//                 showCancelButton: true,
//                 confirmButtonColor: '#6366f1',
//                 confirmButtonText: "Let's Go!",
//                 cancelButtonText: 'Not now'
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     window.location.href = "signup.html";
//                 }
//             });
//         });
//     }
// console.log("JS loaded");
// localStorage.getItem("usersData")
// localStorage.getItem("loggedInUser")

// });

document.addEventListener('DOMContentLoaded', function () {

    // --- SIGN UP ---
    const signupForm = document.getElementById("form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nameVal = document.getElementById("name").value.trim();
            const emailVal = document.getElementById("email").value.trim();
            const passVal = document.getElementById("password").value;
            const confirmPassVal = document.getElementById("confirmPassword").value;

            // 1. Validation 
            if (!nameVal || !emailVal || !passVal) {
                Swal.fire("Error", "Please fill all fields!", "error");
                return;
            }
            if (passVal !== confirmPassVal) {
                Swal.fire("Error", "Passwords do not match!", "error");
                return;
            }

            // 2. Getting existing users first, or create empty array
            let users = JSON.parse(localStorage.getItem("usersData")) || [];

            // 3. Unique Email Check
            const emailExists = users.some(user => user.email === emailVal);
            if (emailExists) {
                Swal.fire("Error", "Email already registered!", "error");
                return;
            }

            const userData = { name: nameVal, email: emailVal, password: passVal };

            // 4. Save to Array and then to LocalStorage
            users.push(userData);
            localStorage.setItem("usersData", JSON.stringify(users));

            Swal.fire("Success", nameVal + ", registered!", "success").then(() => {
                // Path changed to go up one directory level, based on your file structure image
                window.location.href = "../index.html";
            });
        });
    }

    // --- LOG IN ---
    const loginForm = document.getElementById("form2");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const loginEmail = document.getElementById("email2").value.trim();
            const loginPass = document.getElementById("password2").value;

            // 5. Getting the Array of users
            const users = JSON.parse(localStorage.getItem("usersData")) || [];

            // 6. Searching for the specific user
            const foundUser = users.find(u => u.email === loginEmail && u.password === loginPass);

            if (foundUser) {
                // Saving ONLY the logged-in user session
                localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

                Swal.fire("Success", "Welcome back!", "success").then(() => {
                    // Path changed to go up one directory level, based on your file structure image
                    window.location.href = "../index.html"; // Assuming dashboard.html is in root
                });
            } else {
                Swal.fire("Error", "Invalid Email or Password!", "error");
            }
        });
    }

    // app.js
    const themeToggle = document.getElementById('themeToggle');

    function setTheme(theme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
    }

    themeToggle.addEventListener('click', () => {
        const current = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        setTheme(current === 'dark-theme' ? 'light-theme' : 'dark-theme');
    });

    // Initialize theme on page load
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    setTheme(savedTheme);


    // sign up / sign in button


    const signInBtn = document.getElementById("signInBtn");
    const signUpBtn = document.getElementById("signUpBtn");
    const buildBtn = document.getElementById("buildBtn");

    console.log("Sign In Button Found:", signInBtn);
    console.log("Sign Up Button Found:", signUpBtn);

    if (signInBtn) {
        signInBtn.addEventListener("click", () => {
            window.location.href = "signin.html";
        });
    }

    if (signUpBtn) {
        signUpBtn.addEventListener("click", () => {
            window.location.href = "signup.html";
        });
    }

    if (buildBtn) {
    buildBtn.addEventListener("click", function () {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser) {
            // User logged in → go straight to editor
            window.location.href = "editor.html";
        } else {
            // User not logged in → show Swal
            Swal.fire({
                title: 'Ready to build?',
                text: "Sign in to save your work!",
                imageUrl: 'https://unblast.com/wp-content/uploads/2020/05/Writing-CV-Illustration.jpg',
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: 'Build Illustration',
                showCancelButton: true,
                confirmButtonColor: '#6366f1',
                confirmButtonText: "Let's Go!",
                cancelButtonText: 'Not now'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "signup.html";
                }
            });
        }
    });
}

if (buildBtn) {
    buildBtn.addEventListener("click", function () {
        // Go to editor directly
        window.location.href = "editor.html";
    });
}
    console.log("JS loaded");
    localStorage.getItem("usersData");
    localStorage.getItem("loggedInUser");

    // 🔽🔽🔽 ADDED DASHBOARD SESSION LOGIC 🔽🔽🔽

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const topBtnsContainer = document.querySelector(".top-dashboard-btns");

    let logoutBtn = document.getElementById("logoutBtn");
    if (!logoutBtn && topBtnsContainer) {
        logoutBtn = document.createElement("button");
        logoutBtn.id = "logoutBtn";
        logoutBtn.innerText = "Logout";
        logoutBtn.className = "btn btn-outline-danger ms-2 btn-pill";
        logoutBtn.style.display = "none";
        topBtnsContainer.appendChild(logoutBtn);
    }

    if (loggedInUser) {

        if (signInBtn) signInBtn.style.display = "none";
        if (signUpBtn) signUpBtn.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "inline-block";


        if (logoutBtn) {
            logoutBtn.onclick = function () {
                Swal.fire({
                    title: "Are you sure?",
                    text: "Do you want to logout?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, logout"
                }).then((result) => {
                    if (result.isConfirmed) {
                        localStorage.removeItem("loggedInUser");
                        location.reload();
                    }
                });
            };
        }

    }

    // 🔼🔼🔼 END ADDED DASHBOARD SESSION LOGIC 🔼🔼🔼
    ///////////
    // 1️⃣ Select search input and create results container
    const searchInput = document.querySelector('.nav-search-container input');
    const resultsContainer = document.createElement('div');
    document.querySelector('.nav-search-container').appendChild(resultsContainer);

    // Style the results container
    Object.assign(resultsContainer.style, {
        position: 'absolute',
        background: '#fff',
        width: '100%',
        maxHeight: '200px',
        overflowY: 'auto',
        border: '1px solid #ccc',
        borderRadius: '6px',
        zIndex: '999',
        marginTop: '5px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '4px 0'
    });

    // 2️⃣ Define your templates (or fetch dynamically if you have them)
    const templates = [
        { id: 1, name: "Classic" },
        { id: 2, name: "Modern" },
        { id: 3, name: "Minimal" }
    ];

    // 3️⃣ Function to populate search results
    function showAllResults() {
        resultsContainer.innerHTML = '';
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        const currentUserEmail = loggedInUser?.email;

        // --- User's resume ---
        if (currentUserEmail) {
            const allResumes = JSON.parse(localStorage.getItem('resumes') || '{}');
            const userResume = allResumes[currentUserEmail];

            if (userResume) {
                const div = document.createElement('div');
                div.className = 'search-card clickable';
                div.innerText = `${userResume.name} (Your Resume)`;
                div.style.padding = '6px 12px';
                div.style.cursor = 'pointer';
                div.addEventListener('click', () => {
                    window.location.href = 'editor.html';
                });
                resultsContainer.appendChild(div);
            }
        }

        // --- Templates ---
        templates.forEach(temp => {
            const div = document.createElement('div');
            div.className = 'search-card clickable';
            div.innerText = `${temp.name} (Template)`;
            div.style.padding = '6px 12px';
            div.style.cursor = 'pointer';
            div.addEventListener('click', () => {
                window.location.href = `editor.html?template=${temp.id}`;
            });
            resultsContainer.appendChild(div);
        });
    }

    // 4️⃣ Show results on focus or input
    searchInput.addEventListener('focus', showAllResults);
    searchInput.addEventListener('input', showAllResults);

    // 5️⃣ Hide results when clicking outside
    searchInput.addEventListener('blur', () => {
        setTimeout(() => {
            resultsContainer.innerHTML = '';
        }, 200);
    });
    const viewSamples = document.getElementById("viewSamples");
    viewSamples.addEventListener("click", function () {
        window.location.href = "../editor.html";
    })
});
