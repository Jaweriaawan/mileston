var _a;
(_a = document.getElementById("Resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profileInput = document.getElementById("profile");
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var numberElement = document.getElementById('number');
    var addressElement = document.getElementById('Address'); // Fixed ID to match HTML
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profileInput && nameElement && emailElement && numberElement && addressElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var number = numberElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value; // Add .value to retrieve content
        var profileFile = (_a = profileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profileURL = profileFile ? URL.createObjectURL(profileFile) : '';
        var resumeoutput = "\n            <h2>Resume</h2>\n            ".concat(profileURL ? "<img src=\"".concat(profileURL, "\" alt=\"profile\" class=\"profile\">") : "", "\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n            <p><strong>Email:</strong> <span id=\"edit-edit\" class=\"editable\"> ").concat(email, " </span> </p>\n            <p><strong>Contact:</strong> <span id=\"edit-contact\" class=\"editable\"> ").concat(number, " </span> </p>\n            <p><strong>Address:</strong> <span id=\"edit-address\" class=\"editable\"> ").concat(address, " </span> </p>\n            \n            <h2>Education</h2>\n            <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n            <h2>Experience</h2>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n            <h2>Skills</h2>\n            <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n        ");
        var resumeoutputElement = document.getElementById("resumeoutput");
        if (resumeoutputElement) {
            resumeoutputElement.innerHTML = resumeoutput;
            makeEditable();
        }
    }
    else {
        console.error('Some form elements are missing.');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
