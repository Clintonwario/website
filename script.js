//for music
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav#top-nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
    });document.addEventListener("DOMContentLoaded", function() {
        const newsContainer = document.getElementById('news-container');
    
        // Sample data (replace with actual news/articles data)
        const newsData = [
            {
                title: "New Album Release",
                content: "Check out the latest album release from your favorite artist!",
                link: "https://example.com/article1"
            },
            {
                title: "Music Festival Announcement",
                content: "Exciting news! A new music festival is coming to town. Get your tickets now!",
                link: "https://example.com/article2"
            },
            // Add more news/articles data as needed
        ];
    
        // Display news and articles
        newsData.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.content}</p>
                <a href="${item.link}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(newsItem);
        });
    });
    

    document.addEventListener("DOMContentLoaded", function() {
        const reviewForm = document.getElementById('review-form');
        const reviewsContainer = document.getElementById('reviews-container');
    
        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault();
    
            const reviewText = document.getElementById('review-text').value;
            const rating = document.getElementById('rating').value;
    
            // Clear input fields
            document.getElementById('review-text').value = '';
            document.getElementById('rating').value = '';
    
            // Create review element
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <p>${reviewText}</p>
                <p>Rating: ${rating}</p>
            `;
    
            // Append review to reviews container
            reviewsContainer.appendChild(reviewElement);
        });
    });
    
    function shareOnFacebook() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
    }
    
    function shareOnTwitter() {
        window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href) + '&text=Check%20out%20this%20awesome%20music%20website', '_blank');
    }
    
    function shareOnLinkedIn() {
        window.open('https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(window.location.href) + '&title=Your%20Music%20Website', '_blank');
    }
    
    