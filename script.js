// Job data
const jobData = [
    {
        title: "Junior Engineer",
        department: "Public Works Department",
        location: "New Delhi",
        deadline: "2025-10-15",
        description: "This is a job for junior engineers in the Public Works Department. Responsibilities include managing small-scale projects and assisting senior engineers."
    },
    {
        title: "Assistant Police Officer",
        department: "State Police Department",
        location: "Mumbai",
        deadline: "2025-09-30",
        description: "Join the State Police Department as an Assistant Officer. This role involves maintaining law and order and assisting in various police operations."
    },
    // Add more job data here...
];

// Function to display jobs
function displayJobs(jobs) {
    const jobList = document.getElementById("job-list");
    jobList.innerHTML = ''; // Clear current job listings

    jobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.onclick = () => showJobDetails(job);

        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Department:</strong> ${job.department}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Apply by:</strong> ${job.deadline}</p>
        `;
        jobList.appendChild(jobCard);
    });
}

// Function to search jobs
function searchJobs() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredJobs = jobData.filter(job => 
        job.title.toLowerCase().includes(searchQuery) || 
        job.department.toLowerCase().includes(searchQuery) ||
        job.location.toLowerCase().includes(searchQuery)
    );
    displayJobs(filteredJobs);
}

// Show job details in modal
function showJobDetails(job) {
    document.getElementById("job-title").textContent = job.title;
    document.getElementById("job-description").textContent = job.description;
    document.getElementById("job-department").textContent = job.department;
    document.getElementById("job-location").textContent = job.location;
    document.getElementById("job-deadline").textContent = job.deadline;

    const modal = document.getElementById("job-detail-modal");
    modal.style.display = "flex";
}

// Close modal
function closeModal() {
    const modal = document.getElementById("job-detail-modal");
    modal.style.display = "none";
}

// Simulate applying for a job
function applyForJob() {
    alert("Thank you for applying! We will get back to you soon.");
}

// Initial call to display all jobs
displayJobs(jobData);
