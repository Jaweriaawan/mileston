document.getElementById(`Resume`)?.addEventListener(`submit`, function(event){
    event.preventDefault();
  
    const profileInput = document.getElementById(`profile`) as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const numberElement = document.getElementById('number') as HTMLInputElement;
    const addressElement = document.getElementById('Address') as HTMLInputElement;  // Fixed ID to match HTML
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
  
    if (profileInput && nameElement && emailElement && numberElement && addressElement && educationElement && experienceElement && skillsElement) {
        
        const name = nameElement.value;
        const email = emailElement.value;
        const number = numberElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;  // Add .value to retrieve content
  
        const profileFile = profileInput.files?.[0];
        const profileURL = profileFile ? URL.createObjectURL(profileFile) : ''; 
  
        const resumeoutput = `
            <h2>Resume</h2>
            ${profileURL ? `<img src="${profileURL}" alt="profile" class="profile">` : ""}
            <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>
            <p><strong>Email:</strong> <span id="edit-edit" class="editable"> ${email} </span> </p>
            <p><strong>Contact:</strong> <span id="edit-contact" class="editable"> ${number} </span> </p>
            <p><strong>Address:</strong> <span id="edit-address" class="editable"> ${address} </span> </p>
            
            <h2>Education</h2>
            <p id="edit-education" class="editable">${education}</p>

            <h2>Experience</h2>
            <p id="edit-experience" class="editable">${experience}</p>

            <h2>Skills</h2>
            <p id="edit-skills" class="editable">${skills}</p>
        `;
  
        const resumeoutputElement = document.getElementById(`resumeoutput`);
        if (resumeoutputElement) {
            resumeoutputElement.innerHTML = resumeoutput;

            makeEditable();
        } 
    } else {
        console.error('Some form elements are missing.');
    }
  });

//   making editable 

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
      element.addEventListener('click', function(){
        const currentElement = element as HTMLElement;
        const currentValue = currentElement.textContent || "" ;


        if(currentElement.tagName === "p" || currentElement.tagName === "span"){
            const input = document.createElement('input')
            input.type = 'text'
            input.value = currentValue
            input.classList.add('editing-input')

            
            input.addEventListener('blur', function(){
                currentElement.textContent = input.value;
                currentElement.style.display = 'inline'
                input.remove()
            })

            currentElement.style.display = 'none'
            currentElement.parentNode?.insertBefore(input, currentElement)
            input.focus()
        }
      })
    })
}
  