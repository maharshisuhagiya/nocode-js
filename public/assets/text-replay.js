/* global document, sequentialWorkflowDesigner, prompt, alert */

const configuration = {
    toolbox: {
        groups: [{
            name: 'Steps',
            steps: [{
                    componentType: 'task',
                    type: 'replayMessage',
                    name: 'Reply Message',
                    properties: {
                        textReplay: '',
                    }
                },
                {
                    componentType: 'task',
                    type: 'waitLogic',
                    name: 'Wait Logic',
                    properties: {
                        wait_number: '',
                        wait_type: '',
                        message: '',
                        image_url: '',
                        subtitle: '',
                        default_action: '',
                        url: '',
                        buttons: '',
                        title: '',
                    }
                }
            ]
        }]
    },

    steps: {
        iconUrlProvider: () => {
            return `./assets/icon-task.svg`
        },
    },

    editors: {
        rootEditorProvider: () => {
            const editor = document.createElement('div');
            editor.innerText = 'Please select any step.';
            return editor;
        },
        stepEditorProvider: (step) => {
            const editor = document.createElement('div');
            if (step.type == "replayMessage") {

                // Show input field for text reply
                const textInputLabel = document.createElement('label');
                textInputLabel.innerText = 'Text Replay';
                const inputField = document.createElement('input');
                inputField.setAttribute('type', 'text');
                inputField.placeholder = 'Enter Text Reply';
                inputField.value = step.properties['textReplay'] || '';
                inputField.addEventListener('input', () => {
                    step.properties['textReplay'] = inputField.value;
                });
                editor.appendChild(textInputLabel);
                editor.appendChild(inputField);

            } else if (step.type == "waitLogic") {
                
                // Show input field for wait_number
                const waitNumberInputLabel = document.createElement('label');
                waitNumberInputLabel.innerText = 'Wait Number';
                const waitNumberInputField = document.createElement('input');
                waitNumberInputField.setAttribute('type', 'text');
                waitNumberInputField.placeholder = 'Enter Wait Number';
                waitNumberInputField.value = step.properties['wait_number'] || '';
                waitNumberInputField.addEventListener('input', () => {
                    step.properties['wait_number'] = waitNumberInputField.value;
                });
                editor.appendChild(waitNumberInputLabel);
                editor.appendChild(waitNumberInputField);

                // Show input field for type
                const waitTypeInputLabel = document.createElement('label');
                waitTypeInputLabel.innerText = 'Type';
                const waitTypeInputField = document.createElement('input');
                waitTypeInputField.setAttribute('type', 'text');
                waitTypeInputField.placeholder = 'Enter Type';
                waitTypeInputField.value = step.properties['wait_type'] || '';
                waitTypeInputField.addEventListener('input', () => {
                    step.properties['wait_type'] = waitTypeInputField.value;
                });
                editor.appendChild(waitTypeInputLabel);
                editor.appendChild(waitTypeInputField);

                // Show input field for message
                const messageInputLabel = document.createElement('label');
                messageInputLabel.innerText = 'Message';
                const messageInputField = document.createElement('input');
                messageInputField.setAttribute('type', 'text');
                messageInputField.placeholder = 'Enter Message';
                messageInputField.value = step.properties['message'] || '';
                messageInputField.addEventListener('input', () => {
                    step.properties['message'] = messageInputField.value;
                });
                editor.appendChild(messageInputLabel);
                editor.appendChild(messageInputField);

                // Show input field for image_url
                const imageUrlInputLabel = document.createElement('label');
                imageUrlInputLabel.innerText = 'Image URL';
                const imageUrlInputField = document.createElement('input');
                imageUrlInputField.setAttribute('type', 'text');
                imageUrlInputField.placeholder = 'Enter Image URL';
                imageUrlInputField.value = step.properties['image_url'] || '';
                imageUrlInputField.addEventListener('input', () => {
                    step.properties['image_url'] = imageUrlInputField.value;
                });
                editor.appendChild(imageUrlInputLabel);
                editor.appendChild(imageUrlInputField);

                // Show input field for subtitle
                const subtitleInputLabel = document.createElement('label');
                subtitleInputLabel.innerText = 'Subtitle';
                const subtitleInputField = document.createElement('input');
                subtitleInputField.setAttribute('type', 'text');
                subtitleInputField.placeholder = 'Enter Subtitle';
                subtitleInputField.value = step.properties['subtitle'] || '';
                subtitleInputField.addEventListener('input', () => {
                    step.properties['subtitle'] = subtitleInputField.value;
                });
                editor.appendChild(subtitleInputLabel);
                editor.appendChild(subtitleInputField);

                // Show input field for default_action
                const defaultActionInputLabel = document.createElement('label');
                defaultActionInputLabel.innerText = 'Default Action';
                const defaultActionInputField = document.createElement('input');
                defaultActionInputField.setAttribute('type', 'text');
                defaultActionInputField.placeholder = 'Enter Default Action';
                defaultActionInputField.value = step.properties['default_action'] || '';
                defaultActionInputField.addEventListener('input', () => {
                    step.properties['default_action'] = defaultActionInputField.value;
                });
                editor.appendChild(defaultActionInputLabel);
                editor.appendChild(defaultActionInputField);

                // Show input field for url
                const urlInputLabel = document.createElement('label');
                urlInputLabel.innerText = 'URL';
                const urlInputField = document.createElement('input');
                urlInputField.setAttribute('type', 'text');
                urlInputField.placeholder = 'Enter URL';
                urlInputField.value = step.properties['url'] || '';
                urlInputField.addEventListener('input', () => {
                    step.properties['url'] = urlInputField.value;
                });
                editor.appendChild(urlInputLabel);
                editor.appendChild(urlInputField);

                // Show input field for buttons
                const buttonsInputLabel = document.createElement('label');
                buttonsInputLabel.innerText = 'Buttons';
                const buttonsInputField = document.createElement('input');
                buttonsInputField.setAttribute('type', 'text');
                buttonsInputField.placeholder = 'Enter Buttons';
                buttonsInputField.value = step.properties['buttons'] || '';
                buttonsInputField.addEventListener('input', () => {
                    step.properties['buttons'] = buttonsInputField.value;
                });
                editor.appendChild(buttonsInputLabel);
                editor.appendChild(buttonsInputField);

                // Show input field for title
                const titleInputLabel = document.createElement('label');
                titleInputLabel.innerText = 'Title';
                const titleInputField = document.createElement('input');
                titleInputField.setAttribute('type', 'text');
                titleInputField.placeholder = 'Enter Title';
                titleInputField.value = step.properties['title'] || '';
                titleInputField.addEventListener('input', () => {
                    step.properties['title'] = titleInputField.value;
                });
                editor.appendChild(titleInputLabel);
                editor.appendChild(titleInputField);
            }

            return editor;
        }
    },

    controlBar: true,
};

const startDefinition = {
    properties: {},
    sequence: []
};

const placeholder = document.getElementById('designer');
const designer = sequentialWorkflowDesigner.Designer.create(placeholder, startDefinition, configuration);

function runWorkflow() {
    const definition = designer.getDefinition();

    let register = null;

    if (definition.sequence.length < 1) {
        alert('Please add any step...');
        return;
    }

    for (const step of definition.sequence) {
        console.log(step);
        if (step.type === 'replayMessage') {
            // register = step.properties['textReplay'];
            // console.log(register);
        }
    }

    // Clear input values from input boxes
    const inputFields = document.querySelectorAll('input[type="text"]');
    inputFields.forEach(input => {
        input.value = '';
    });
}

document.getElementById('run').addEventListener('click', runWorkflow);
