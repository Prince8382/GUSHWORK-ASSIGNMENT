// 1. Sabhi thumbnails aur main image ko select karein
const mainImg = document.getElementById('current-img');
const thumbs = document.querySelectorAll('.thumb-box');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Online images ki list (Kyuki aapne local images download nahi ki hain)
const images = [
    "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1000",
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ee8?q=80&w=1000",
    "https://images.unsplash.com/photo-1621905235850-6644f7cc30d5?q=80&w=1000",
    "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1000",
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ee8?q=80&w=1000",
    "https://images.unsplash.com/photo-1621905235850-6644f7cc30d5?q=80&w=1000"
];

let currentIndex = 0;

// Function: Image Update karne ke liye
function updateGallery(index) {
    mainImg.src = images[index];
    
    // Active class hatana aur lagana
    thumbs.forEach(thumb => thumb.classList.remove('active'));
    thumbs[index].classList.add('active');
}

// Click Event: Thumbnails par click karne ke liye
thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        updateGallery(currentIndex);
    });
});

// Click Event: Next Button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery(currentIndex);
});

// Click Event: Previous Button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery(currentIndex);
});

document.querySelector('.download-btn').addEventListener('click', function() {
    alert('Technical Datasheet download starting...');
});

document.querySelector('.quote-btn').addEventListener('click', function() {
    alert('Thank you! Redirecting to Quote Request page.');
});

// FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Dusre sabhi items ko band karne ke liye (Optional)
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Is item ko toggle karne ke liye
        item.classList.toggle('active');
    });
});

// Section 5 Slider Logic
const track = document.querySelector('.apps-track');
const nextApp = document.querySelector('.slide-next');
const prevApp = document.querySelector('.slide-prev');

let move = 0;

nextApp.addEventListener('click', () => {
    // Slider ko aage badhane ke liye
    if (move > -50) { // Limit taaki slide khatam na ho jaye
        move -= 25;
        track.style.transform = `translateX(${move}%)`;
    }
});

prevApp.addEventListener('click', () => {
    // Slider ko peeche lane ke liye
    if (move < 0) {
        move += 25;
        track.style.transform = `translateX(${move}%)`;
    }
});

// Section 6: Manufacturing Process Tabs Logic
const steps = document.querySelectorAll('.step-item');
const stepTitle = document.getElementById('step-title');
const stepDesc = document.getElementById('step-desc');
const stepImg = document.getElementById('process-img');

const processData = {
    1: { 
        title: "High-Grade Raw Material Selection", 
        desc: "Processing starts with premium PE100 grade HDPE granules. Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness.", 
        img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ee8?w=800" 
    },
    2: { 
        title: "Advanced Extrusion Process", 
        desc: "The raw material is melted and pushed through a high-precision die. Our state-of-the-art extrusion technology ensures consistent wall thickness and quality.", 
        img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800" 
    },
    3: { 
        title: "Vacuum Cooling System", 
        desc: "The hot pipe enters specialized cooling tanks where high-pressure water sprays and vacuum stabilize the pipe's shape and dimensions instantly.", 
        img: "https://images.unsplash.com/photo-1621905235850-6644f7cc30d5?w=800" 
    },
    4: { 
        title: "Precision Sizing & Calibration", 
        desc: "The pipe passes through a sizing sleeve to achieve exact outer diameter specifications as per international standards like ISO and ASTM.", 
        img: "https://images.unsplash.com/photo-1531287333307-1845751d5f12?w=800" 
    },
    5: { 
        title: "Rigorous Quality Control", 
        desc: "Every inch of the pipe is monitored for wall thickness and surface defects. Ultrasonic sensors provide real-time data to maintain zero-error production.", 
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" 
    },
    6: { 
        title: "Automated Inkjet Marking", 
        desc: "Pipes are marked with essential details including brand name, size, pressure rating, and batch number for 100% traceability.", 
        img: "https://images.unsplash.com/photo-1611348524140-53c9ca0929ad?w=800" 
    },
    7: { 
        title: "Precision Planetary Cutting", 
        desc: "Pipes are cut to standard or custom lengths using swarfless cutting technology, ensuring smooth edges and clean finishes.", 
        img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800" 
    },
    8: { 
        title: "Standard Packaging & Storage", 
        desc: "Finished pipes are coiled or bundled securely to prevent damage during transit, ready to be dispatched to global infrastructure projects.", 
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800" 
    }
};

steps.forEach(step => {
    step.addEventListener('click', () => {
        const id = step.getAttribute('data-step');
        
        // Active class switch
        steps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
        
        // Content switch (agar data exist karta hai)
        if(processData[id]) {
            stepTitle.innerText = processData[id].title;
            stepDesc.innerText = processData[id].desc;
            stepImg.src = processData[id].img;
        }
    });
});

// Testimonial Cards Animation on Scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.testi-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Section 8: Portfolio Buttons
document.querySelectorAll('.learn-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Redirecting to product details...");
    });
});

document.querySelector('.talk-expert-btn').addEventListener('click', () => {
    alert("Opening Contact Form...");
});

// Section 9: Download Tracking
document.querySelectorAll('.download-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // e.preventDefault(); // test
        console.log("Starting download for: " + link.previousElementSibling.innerText);
    });
});

// Section 10: Contact Form Submission
const contactForm = document.getElementById('cta-contact-form');

if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.quote-submit-btn');
        const originalText = submitBtn.innerText;
        
        // Button loading effect
        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        setTimeout(() => {
            alert("Thank you! Your request for a custom quote has been sent.");
            contactForm.reset();
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Footer: Auto Update Copyright Year
const footerYear = document.querySelector('.footer-bottom p');
if(footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
}