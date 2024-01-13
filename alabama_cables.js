document.addEventListener('DOMContentLoaded', function () {
    // Sample services data
    const services = [
        'Fiber Optic Cable Installation',
        'Broadband Internet Solutions',
        'Network Design and Optimization',
        'Telecom Consultation Services',
        'Cable Management Solutions'
        // Add more services as needed
    ];

    // Get the services list element
    const servicesList = document.getElementById('servicesList');

    // Populate the services list dynamically
    services.forEach(service => {
        const listItem = document.createElement('li');
        listItem.textContent = service;
        servicesList.appendChild(listItem);
    });
});
