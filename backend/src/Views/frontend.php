<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mithril App</title>
  <?php if (ENV == 'prod'): ?>
    <link rel="stylesheet" href="/build/index.css">
    <script type="module" crossorigin src="/build/index.js"></script>
  <?php else: ?>
    <script type="module" src="http://localhost:3000/src/index.js"></script>
  <?php endif; ?>
</head>

<body>
  <div id="app"></div>
</body>

</html>