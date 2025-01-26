  var skills =document.getElementById('Skills');
    var Education =document.getElementById('Education');
    var Experience =document.getElementById('Experience');
    function opentab(outputType) {
        // const outputText = document.getElementById('skills');
    
        switch (outputType) {
            case 'Skills':
              skills.classList.add('active-tab');
              Education.classList.remove('active-tab');
              Experience.classList.remove('active-tab');
                break;
            case 'Education':
                skills.classList.remove('active-tab');
              Education.classList.add('active-tab');
              Experience.classList.remove('active-tab');
                break;
            case 'Experience':
                skills.classList.remove('active-tab');
                Education.classList.remove('active-tab');
                Experience.classList.add('active-tab');
                break;
            default:
                outputText.innerHTML = "Click a button to see the output.";
        }
    }
