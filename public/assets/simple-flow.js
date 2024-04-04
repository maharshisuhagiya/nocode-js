/* global document, sequentialWorkflowDesigner, prompt, alert */

var selectTypeSelectedVal = ''; // Store selected dropdown value
const configuration = {
    toolbox: {
        groups: [{
            name: 'Steps',
            steps: [{
                    componentType: 'task',
                    type: 'replayMessage',
                    name: 'Reply Message',
                    properties: {
                        selectType: ["Text Replay", "Text + Quick Reply", "Products"],
                    }
                },
                {
                    componentType: 'task',
                    type: 'notificationMessage',
                    name: 'Notification Message',
                    properties: {
                        selectType: ["Text Replay", "Text + Quick Reply", "Products"],
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
            if(step.type == "replayMessage")
            {
                const label = document.createElement('label');
                label.innerText = 'Select Type';
    
                const dropdown = document.createElement('select');
                dropdown.setAttribute('id', 'selectType');
                const options = step.properties['selectType'];
                for (const option of options) {
                    const optionElem = document.createElement('option');
                    optionElem.value = option;
                    optionElem.text = option;
                    dropdown.appendChild(optionElem);
                }
    
                // Set the initial selected value based on previous selection
                if (selectTypeSelectedVal) {
                    dropdown.value = selectTypeSelectedVal;
                }
    
                dropdown.addEventListener('change', () => {
                    selectTypeSelectedVal = dropdown.value; // Update selected value
                    const selectedType = dropdown.value;
                    // Remove all input fields and labels except for the dropdown and its label
                    editor.querySelectorAll('input').forEach(input => input.remove());
                    editor.querySelectorAll('label:not(:first-of-type)').forEach(label => label
                        .remove());
    
                    if (selectedType === 'Text Replay') {
                        // Show input field for text reply
                        const textInputLabel = document.createElement('label');
                        textInputLabel.innerText = 'textReplay';
                        const inputField = document.createElement('input');
                        inputField.setAttribute('type', 'text');
                        inputField.placeholder = 'Enter Text Reply';
                        inputField.value = step.properties['textReplay']|| '';
                        inputField.addEventListener('input', () => {
                            step.properties['textReplay'] = inputField.value;
                        });
                        editor.appendChild(textInputLabel);
                        editor.appendChild(inputField);
                    } else if (selectedType === 'Text + Quick Reply') {
                        // Show input fields for text and quick reply
    
                        const contentTypeLabel = document.createElement('label');
                        contentTypeLabel.innerText = 'Content Type';
                        const contentTypeInput = document.createElement('input');
                        contentTypeInput.setAttribute('type', 'text');
                        contentTypeInput.placeholder = 'Enter Content Type';
                        contentTypeInput.value = step.properties['contentType'] || ''; // Set value if exists
                        contentTypeInput.addEventListener('input', () => {
                            step.properties['contentType'] = contentTypeInput.value;
                        });
    
                        const titleLabel = document.createElement('label');
                        titleLabel.innerText = 'Title';
                        const titleInput = document.createElement('input');
                        titleInput.setAttribute('type', 'text');
                        titleInput.placeholder = 'Enter Title';
                        titleInput.value = step.properties['title'] || ''; // Set value if exists
                        titleInput.addEventListener('input', () => {
                            step.properties['title'] = titleInput.value;
                        });
    
                        const payloadLabel = document.createElement('label');
                        payloadLabel.innerText = 'Payload';
                        const payloadInput = document.createElement('input');
                        payloadInput.setAttribute('type', 'text');
                        payloadInput.placeholder = 'Enter Payload';
                        payloadInput.value = step.properties['payload'] || ''; // Set value if exists
                        payloadInput.addEventListener('input', () => {
                            step.properties['payload'] = payloadInput.value;
                        });
    
                        const imageUrlLabel = document.createElement('label');
                        imageUrlLabel.innerText = 'Image URL';
                        const imageUrlInput = document.createElement('input');
                        imageUrlInput.setAttribute('type', 'text');
                        imageUrlInput.placeholder = 'Enter Image URL';
                        imageUrlInput.value = step.properties['imageUrl'] || ''; // Set value if exists
                        imageUrlInput.addEventListener('input', () => {
                            step.properties['imageUrl'] = imageUrlInput.value;
                        });
    
                        editor.appendChild(contentTypeLabel);
                        editor.appendChild(contentTypeInput);
                        editor.appendChild(titleLabel);
                        editor.appendChild(titleInput);
                        editor.appendChild(payloadLabel);
                        editor.appendChild(payloadInput);
                        editor.appendChild(imageUrlLabel);
                        editor.appendChild(imageUrlInput);
    
                    } else if (selectedType === 'Products') {
                        // Show input fields for products
    
                        const titleLabel = document.createElement('label');
                        titleLabel.innerText = 'Title';
                        const titleInput = document.createElement('input');
                        titleInput.setAttribute('type', 'text');
                        titleInput.placeholder = 'Enter Title';
                        titleInput.value = step.properties['productTitle'] || ''; // Set value if exists
                        titleInput.addEventListener('input', () => {
                            step.properties['productTitle'] = titleInput.value;
                        });
    
                        const imageUrlLabel = document.createElement('label');
                        imageUrlLabel.innerText = 'Image URL';
                        const imageUrlInput = document.createElement('input');
                        imageUrlInput.setAttribute('type', 'text');
                        imageUrlInput.placeholder = 'Enter Image URL';
                        imageUrlInput.value = step.properties['productImageUrl'] || ''; // Set value if exists
                        imageUrlInput.addEventListener('input', () => {
                            step.properties['productImageUrl'] = imageUrlInput.value;
                        });
    
                        const subtitleLabel = document.createElement('label');
                        subtitleLabel.innerText = 'Subtitle';
                        const subtitleInput = document.createElement('input');
                        subtitleInput.setAttribute('type', 'text');
                        subtitleInput.placeholder = 'Enter Subtitle';
                        subtitleInput.value = step.properties['productSubtitle'] || ''; // Set value if exists
                        subtitleInput.addEventListener('input', () => {
                            step.properties['productSubtitle'] = subtitleInput.value;
                        });
    
                        const defaultActionLabel = document.createElement('label');
                        defaultActionLabel.innerText = 'Default Action';
                        const defaultActionInput = document.createElement('input');
                        defaultActionInput.setAttribute('type', 'text');
                        defaultActionInput.placeholder = 'Enter Default Action';
                        defaultActionInput.value = step.properties['productDefaultAction'] || ''; // Set value if exists
                        defaultActionInput.addEventListener('input', () => {
                            step.properties['productDefaultAction'] = defaultActionInput
                                .value;
                        });
    
                        const typeLabel = document.createElement('label');
                        typeLabel.innerText = 'Type';
                        const typeInput = document.createElement('input');
                        typeInput.setAttribute('type', 'text');
                        typeInput.placeholder = 'Enter Type';
                        typeInput.value = step.properties['productType'] || ''; // Set value if exists
                        typeInput.addEventListener('input', () => {
                            step.properties['productType'] = typeInput.value;
                        });
    
                        const urlLabel = document.createElement('label');
                        urlLabel.innerText = 'URL';
                        const urlInput = document.createElement('input');
                        urlInput.setAttribute('type', 'text');
                        urlInput.placeholder = 'Enter URL';
                        urlInput.value = step.properties['productUrl'] || ''; // Set value if exists
                        urlInput.addEventListener('input', () => {
                            step.properties['productUrl'] = urlInput.value;
                        });
    
                        const buttonsLabel = document.createElement('label');
                        buttonsLabel.innerText = 'Buttons';
                        const buttonsInput = document.createElement('input');
                        buttonsInput.setAttribute('type', 'text');
                        buttonsInput.placeholder = 'Enter Buttons';
                        buttonsInput.value = step.properties['productButtons'] || ''; // Set value if exists
                        buttonsInput.addEventListener('input', () => {
                            step.properties['productButtons'] = buttonsInput.value;
                        });
    
                        editor.appendChild(titleLabel);
                        editor.appendChild(titleInput);
                        editor.appendChild(imageUrlLabel);
                        editor.appendChild(imageUrlInput);
                        editor.appendChild(subtitleLabel);
                        editor.appendChild(subtitleInput);
                        editor.appendChild(defaultActionLabel);
                        editor.appendChild(defaultActionInput);
                        editor.appendChild(typeLabel);
                        editor.appendChild(typeInput);
                        editor.appendChild(urlLabel);
                        editor.appendChild(urlInput);
                        editor.appendChild(buttonsLabel);
                        editor.appendChild(buttonsInput);
                    }
                });
    
                editor.appendChild(label);
                editor.appendChild(dropdown);
    
                // Trigger change event to show the first option's input fields by default
                dropdown.dispatchEvent(new Event('change'));
            }
            else
            {
                
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

    selectTypeSelectedVal = document.getElementById('selectType').value;
    for (const step of definition.sequence) {
        console.log(step);
        if (step.type === 'replayMessage') {
            register = step.properties['textReplay'];
            console.log(register);
        }
    }
    
    // Clear input values from input boxes
    const inputFields = document.querySelectorAll('input[type="text"]');
    inputFields.forEach(input => {
        input.value = '';
    });
}

document.getElementById('run').addEventListener('click', runWorkflow);
