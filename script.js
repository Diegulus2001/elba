document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.transform = "translate(-50%, -50%) scale(1.2)";
        setTimeout(() => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
        }, 50);
    });
});
