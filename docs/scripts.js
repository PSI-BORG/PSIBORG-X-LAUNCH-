document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    for (let i = 0; i < 965; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            originalSize: Math.random() * 2 + 1,
            speed: Math.random() * 3 + 2,
            color: getRandomColor(),
            pulseSpeed: Math.random() * 0.1 + 0.05
        });
    }

    function getRandomColor() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            ctx.fillStyle = star.color;

            // Pulsating effect
            star.size += star.pulseSpeed;
            if (star.size > star.originalSize * 2 || star.size < star.originalSize / 2) {
                star.pulseSpeed = -star.pulseSpeed;
            }

            ctx.fillRect(star.x, star.y, star.size, star.size);
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0 - star.size;
                star.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
});
