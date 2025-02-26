<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Animation</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f0f0f0;
    }
    .text {
      font-family: Arial, sans-serif;
      font-size: 2em;
      color: #333;
    }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
</head>
<body>
  <div class="text">Exploring Game Engines & Scenic Train Trips!</div>

  <script>
    anime({
      targets: '.text',
      translateX: [-500, 0],
      easing: 'easeInOutQuad',
      duration: 1500,
      loop: true,
      direction: 'alternate'
    });
  </script>
</body>
</html>
