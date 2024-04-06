<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

	<title>📐 Text Or Quick Replay - Sequential Workflow Designer</title>
	<meta property="og:title" content="📐 Text Or Quick Replay - Sequential Workflow Designer">
	<meta name="description" content="Text Or Quick Replay of Sequential Workflow Designer.">
	<meta property="og:description" content="Text Or Quick Replay of Sequential Workflow Designer.">
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
			<h1>📐 Text Or Quick Replay</h1>
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
	<script src="{{ asset('assets/text-or-quick-replay.js') }}"></script>
</body>
</html>
