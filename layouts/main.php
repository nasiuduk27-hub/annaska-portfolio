<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Annaska Andrizky | Frontend Developer</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- CSS -->
  <link href="./dist/output.css" rel="stylesheet">
  <link rel="stylesheet" href="./src/input.css">

  <style>
    body {
      font-family: 'Inter', sans-serif;
    }
    h1, h2, h3, h4, h5, h6, .font-outfit {
      font-family: 'Outfit', sans-serif;
    }
  </style>
</head>

<body class="bg-white text-text-dark antialiased overflow-x-hidden">

  <?php include 'components/navbar.php'; ?>

  <main>
    <!-- 🔥 CONTENT DINAMIS -->
    <?php 
      $pagePath = "pages/$page.php";
      if (file_exists($pagePath)) {
          include $pagePath;
      } else {
          echo "<section class='pt-40 pb-20 text-center'><h1 class='text-4xl'>Page not found</h1><a href='index.php' class='text-brand-purple underline'>Go Home</a></section>";
      }
    ?>
  </main>

  <?php include 'components/footer.php'; ?>

  <!-- Scripts -->
  <script src="./dist/js/script.js"></script>
</body>
</html>