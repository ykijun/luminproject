// script.js

// Community page functionality
const newPostForm = document.getElementById('new-post-form');
const postsContainer = document.getElementById('posts-container');

if (newPostForm) {
    newPostForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        addPost(title, content);
        newPostForm.reset();
    });
}

function addPost(title, content) {
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;
    postsContainer.prepend(post);
}

// Mentorship page functionality
const mentorshipForm = document.getElementById('mentorship-match-form');
const matchesContainer = document.getElementById('matches-container');

if (mentorshipForm) {
    mentorshipForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const role = document.getElementById('role').value;
        const skills = document.getElementById('skills').value;
        findMatch(role, skills);
        mentorshipForm.reset();
    });
}

function findMatch(role, skills) {
    // In a real application, this would involve a backend search
    const match = document.createElement('div');
    match.classList.add('match');
    match.innerHTML = `
        <h3>${role === 'mentor' ? 'Mentee' : 'Mentor'} Match Found</h3>
        <p>Skills: ${skills}</p>
        <button>Connect</button>
    `;
    matchesContainer.prepend(match);
}

// News page functionality
const newsContainer = document.getElementById('news-container');

if (newsContainer) {
    // In a real application, this data would come from a backend API
    const newsItems = [
        { title: 'New Computer Science Course Announced', content: 'A new advanced AI course will be offered next semester.' },
        { title: 'Alumni Networking Event', content: 'Join us for our annual alumni networking event next month.' },
        { title: 'Student Project Showcase', content: 'Don\'t miss the upcoming student project showcase this Friday.' }
    ];

    newsItems.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.content}</p>
        `;
        newsContainer.appendChild(newsItem);
    });
}

// Login page functionality
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // In a real application, this would involve backend authentication
        console.log('Login attempt:', email, password);
        alert('Login functionality would be implemented with a backend.');
        loginForm.reset();
    });
}

// Sign-up page functionality
const signupForm = document.getElementById('signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const userType = document.getElementById('user-type').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // In a real application, this would involve backend registration
        console.log('Sign-up attempt:', { fullname, email, password, userType });
        alert('Sign-up functionality would be implemented with a backend.');
        signupForm.reset();
    });
}