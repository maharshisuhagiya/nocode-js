<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <style>
        body {
            font: 13px/1.3em 'Open Sans', Arial, Verdana, Serif;
            margin: 0;
            padding: 0;
        }

        html,
        body {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }

        body {
            display: flex;
            flex-direction: column;
        }

        main {
            display: flex;
            flex: 1;
        }

        main .example {
            display: flex;
            flex: 1;
            margin: 10px;
            flex-direction: column;
        }

        main .example .nocode-js {
            flex: 1;
            border: 1px solid #e8e8e8;
        }

    </style>
    <link href="https://cdn.jsdelivr.net/npm/sequential-workflow-designer@0.19.3/css/designer.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/sequential-workflow-designer@0.19.3/css/designer-light.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/sequential-workflow-designer@0.19.3/css/designer-dark.css" rel="stylesheet">
</head>

<body>
    <main>
        <div class="example">
            <div class="nocode-js" id="designer-nocode-js"></div>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/sequential-workflow-designer@0.19.3/dist/index.umd.js"></script>
    <script>
        function init() {
            var isAutoSelectDisabled = false;
            const configuration = {
                steps: {
                    iconUrlProvider: () => './icon-task.svg',
                    isAutoSelectDisabled
                },
                toolbox: {
                    groups: [{
                        name: 'Steps',
                        steps: [{
                            componentType: 'task',
                            type: 'setValue',
                            name: 'Set value',
                            properties: {}
                        }]
                    }]
                },
                editors: false,
                controlBar: true,
            };

            const startDefinition = {
                properties: {},
                sequence: []
            };

            const placeholder = document.getElementById(`designer-nocode-js`);
            const designer = sequentialWorkflowDesigner.Designer.create(placeholder, startDefinition, configuration);

            function reloadViewport(vp) {
                const x = Math.round(vp.position.x);
                const y = Math.round(vp.position.x);
                const scale = vp.scale.toFixed(2);
            }

            designer.onViewportChanged.subscribe(reloadViewport);
            reloadViewport(designer.getViewport());
        }

        init();

    </script>
</body>

</html>
