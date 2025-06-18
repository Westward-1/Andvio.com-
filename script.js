// Main JavaScript for Delegation Breakthrough website

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling with payment integration
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(contactForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // Here you would integrate with your payment processor
            // This is a placeholder for where you would add your payment integration code
            
            // Example integration with payment processor:
            /*
            // Replace with your actual payment gateway integration
            const paymentProcessor = {
                processPayment: function(customerData, packageInfo) {
                    // This would be replaced with actual API calls to your payment processor
                    return new Promise((resolve, reject) => {
                        // Simulate API call
                        setTimeout(() => {
                            resolve({
                                success: true,
                                transactionId: 'txn_' + Math.random().toString(36).substr(2, 9),
                                message: 'Payment processed successfully'
                            });
                        }, 1500);
                    });
                }
            };
            
            // Get package information
            const selectedPackage = formDataObj.package;
            let packagePrice = 0;
            let packageName = '';
            
            switch(selectedPackage) {
                case 'foundation':
                    packagePrice = 1997;
                    packageName = 'Foundation Package';
                    break;
                case 'breakthrough':
                    packagePrice = 4997;
                    packageName = 'Breakthrough Package';
                    break;
                default:
                    // Handle consultation only
                    packagePrice = 0;
                    packageName = 'Consultation Only';
            }
            
            // Process payment if a paid package is selected
            if (packagePrice > 0) {
                // Show loading state
                document.getElementById('submit-form-btn').textContent = 'Processing...';
                document.getElementById('submit-form-btn').disabled = true;
                
                // Process payment
                paymentProcessor.processPayment(formDataObj, {
                    name: packageName,
                    price: packagePrice
                })
                .then(response => {
                    if (response.success) {
                        // Payment successful
                        alert('Thank you for your purchase! Your transaction ID is: ' + response.transactionId);
                        contactForm.reset();
                        // Redirect to thank you page
                        window.location.href = 'thank-you.html';
                    } else {
                        // Payment failed
                        alert('Payment failed: ' + response.message);
                        document.getElementById('submit-form-btn').textContent = 'Try Again';
                        document.getElementById('submit-form-btn').disabled = false;
                    }
                })
                .catch(error => {
                    console.error('Payment error:', error);
                    alert('There was an error processing your payment. Please try again.');
                    document.getElementById('submit-form-btn').textContent = 'Try Again';
                    document.getElementById('submit-form-btn').disabled = false;
                });
            } else {
                // Just schedule consultation
                alert('Thank you! We will contact you shortly to schedule your free strategy session.');
                contactForm.reset();
            }
            */
            
            // For now, just show a success message
            alert('Thank you for your interest! This form is currently in demo mode. In a live version, this would process your payment and schedule your strategy session.');
            contactForm.reset();
        });
    }

    // Mobile menu toggle (if needed for responsive design)
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.classList.add('mobile-menu-toggle');
    mobileMenuToggle.innerHTML = '<span></span><span></span><span></span>';
    
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    if (header && nav) {
        header.insertBefore(mobileMenuToggle, nav);
        
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Add active class to current navigation item
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});
