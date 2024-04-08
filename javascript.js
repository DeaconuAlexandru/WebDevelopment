function showMessage1() {
  // Redirecționează către pagina HTML2 când este apăsat butonul 1
  window.location.href = 'pagina2.html';
}
function showMessage2() {
}
gsap.from('#logo', { duration: 1, scale: 0, ease: 'back.out(1.7)' });

document.querySelector('.logo').addEventListener('mouseover', function() {
  gsap.to(this, { duration: 0.5, boxShadow: '0 0 20px rgba(0, 0, 0, 0.8)' });
});

document.querySelector('.logo').addEventListener('mouseout', function() {
  gsap.to(this, { duration: 0.5, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' });
});

gsap.from('#title', { duration: 1, opacity: 0, y: -50, ease: 'power4.out' });

gsap.from('#subtitle', { duration: 1, opacity: 0, y: 50, ease: 'power4.out', delay: 0.5 });

document.querySelector('.btn-1').addEventListener('click', showMessage1);
