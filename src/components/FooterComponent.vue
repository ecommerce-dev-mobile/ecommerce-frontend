<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 Todos os direitos reservados.</p>
      <div class="footer-links">
        <a href="" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
  <i class="fas fa-envelope"></i>
  Email
</a>
      </div>
    </div>
  </footer>
</template>


<style scoped>

.footer {
  background-color: #000000;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.footer-links a {
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #727272;
}

.footer-links i {
  
  font-size: 1.6rem;
}


</style>
