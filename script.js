function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    let petInfo= "pet_";
    
    let pet = petInfo.match(input.substr(0,4));
    let year = input.substr(4,4);
    let number = year >= '2000' && year <= '2030';
    let initial = input.substr(8,1)
    let name = (/^[A-Z]+$/.test(initial))? input.substr(8) : false;
    let classes = document.getElementById("result").classList;

    if (pet && number && name){
        result   ="valid syntax \u{1F7E2}";

        if(classes.contains("invalid")){
            classes.remove("invalid");
        }
        
        classes.add("valid");
    } else  {
        result = "invalid syntax \u{1F534}";

        if(classes.contains("valid")){
            classes.remove("valid");
        }

        classes.add("invalid");
    }
   
    // document.getElementById("result").classList.add("valid");
            document.getElementById('result').innerText = result;
}









