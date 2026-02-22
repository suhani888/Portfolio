// Projects data
const projects = [
    {
        title: "Portfolio Website",
        description: "Personal UI/UX portfolio with modern layout and animations"
    },
    {
        title: "Mobile App UI",
        description: "Clean and minimal mobile app interface design"
    },
    {
        title: "Dashboard Design",
        description: "Analytics dashboard with user-friendly data visualization"
    },
    {
        title: "Landing Page",
        description: "High-conversion landing page for startups"
    }
];

// Select container
const projectsContainer = document.getElementById("projects-container");

// Create project cards
projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;

    projectsContainer.appendChild(card);
});
