<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

	<title>📐 Simple Flow Example - Sequential Workflow Designer</title>
	<meta property="og:title" content="📐 Simple Flow Example - Sequential Workflow Designer">
	<meta name="description" content="Simple example of Sequential Workflow Designer.">
	<meta property="og:description" content="Simple example of Sequential Workflow Designer.">
	<meta property="og:image" content="https://nocode-js.com/img/social-card.png">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:image" content="https://nocode-js.com/img/social-card.png">

	<link rel="stylesheet" href="{{ asset('assets/common.css') }}">
	<style>
		html, body {width: 100vw; height: 100vh; overflow: hidden;}
		body {display: flex; flex-direction: column;}
		#designer {flex: 1;}

		.sqd-editor {padding: 10px;}
		.sqd-editor label {display: block; padding: 10px 0;}
	</style>
</head>
<body>
	<header class="title-bar">
		<div class="column flex-1 hidden-mobile">
			<h1>📐 Simple Flow Example</h1>
		</div>
		<div class="column">
			<button id="run">Run</button>
		</div>
		<div class="column text-end flex-1">
			<a href="https://github.com/nocode-js/sequential-workflow-designer" target="_blank">GitHub</a>
		</div>
	</header>

	<div id="designer"></div>

	<script src="{{ asset('assets/lib.js') }}"></script>
	<script src="{{ asset('assets/simple-flow.js') }}"></script>
</body>
</html>
