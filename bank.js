class Bank {

    static getAccountDetails = () => {
        var accountDetails = {

            userone: { acno: 1000, balance: 10000, username: "userone", password: "testuser0" },
            usertwo: { acno: 1001, balance: 11000, username: "usertwo", password: "testuser1" },
            userthree: { acno: 1002, balance: 12000, username: "userthree", password: "testuser2" },
            userfour: { acno: 1003, balance: 13000, username: "userfour", password: "testuser3" },
            userfive: { acno: 1004, balance: 14000, username: "userfive", password: "testuser4" },
            usersix: { acno: 1005, balance: 15000, username: "usersix", password: "testuser5" },
            userseven: { acno: 1006, balance: 16000, username: "userseven", password: "testuser6" },
            usereight: { acno: 1007, balance: 17000, username: "usereight", password: "testuser7" }
        }
        return accountDetails;

    }

    static authenticateUser=(uname,pwd)=>{
        let dataset = Bank.getAccountDetails();
        if(uname in dataset){
            if (dataset[uname].password === pwd) {
                return 1; //valid username & pwd
            }
            else {
                return 0; //incorrect password
            }
        }
        else {
            return -1; //wrong username
        }
    }


    static login = () => {
        let uname = document.querySelector("#username").value
        let pwd = document.querySelector("#pwd").value
        let user=Bank.authenticateUser(uname,pwd)
        if(user==1){
            alert("Login Successful")
            window.location.href = "bankuserinterface.html"
        }
        else if(user==0){
            alert("Password does not Match")
        }
        else if(user==-1){
            alert("No Username found Matching !!")
        }

        // let dataset = Bank.getAccountDetails();
        // if(uname in dataset){
        //     if (dataset[uname].password === pwd) {
        //         alert("Login Successful")
        //         window.location.href = "bankuserinterface.html"
        //     }
        //     else {
        //         let ilab = document.querySelector("#pinvalid")
        //         ilab.textContent = "the password entered does not match the username"
        //         ilab.style.color = "red"
        //         alert("Password does not Match")
        //     }
        // }
        // else {
        //     let ulab = document.querySelector("#uinvalid")
        //     ulab.textContent = "invalid username, pleae enter a valid username"
        //     ulab.style.color = "red"
        //     alert("No Username found Matching !!")
        // }
    }
    static deposit = () => {
        let uname = document.querySelector("#username").value
        let pwd = document.querySelector("#pwd").value
        let amt = document.querySelector("#amt").value
        let user=Bank.authenticateUser(uname,pwd)
        let dataset = Bank.getAccountDetails();
        if(user==1){
            dataset[uname].balance += 5000;
            alert("Your account has been credited with " + amt + "  New balance: " + dataset[uname].balance)
        }
        else if(user==0){
            alert("Password does not Match")
        }
        else if(user==-1){
            alert("No Username found Matching !!")
        }

        // let dataset = Bank.getAccountDetails();
        // if (uname in dataset) {
        //     if (dataset[uname].password === pwd) {
        //         dataset[uname].balance += 5000;
        //         alert("Your account has been credited with " + amt + "  New balance: " + dataset[uname].balance)
        //     }
        //     else {
        //         let ilab = document.querySelector("#pinvalid")
        //         ilab.textContent = "the password entered does not match the username"
        //         ilab.style.color = "red"
        //         alert("Password does not Match")
        //         alert("Wrong Password")
        //     }
        // }
        // else {
        //     let ulab = document.querySelector("#uinvalid")
        //     ulab.textContent = "invalid username, pleae enter a valid username"
        //     ulab.style.color = "red"
        //     alert("No Username found matching !!!")
        // }
    }
    static withdrawal = () => {
        let uname = document.querySelector("#username").value
        let pwd = document.querySelector("#pwd").value
        let amt = document.querySelector("#amt").value
        let user=Bank.authenticateUser(uname,pwd)
        let dataset = Bank.getAccountDetails();
        if(user==1){
            dataset[uname].balance += 5000;
            alert(amt + " has been debited from your account." + "  New balance: " + dataset[uname].balance)
        }
        else if(user==0){
            alert("Password does not Match")
        }
        else if(user==-1){
            alert("No Username found Matching !!")
        }

        // if (uname in dataset) {
        //     if (dataset[uname].password === pwd) {
        //         if (dataset[uname].balance >= amt) {
        //             dataset[uname].balance -= amt;
        //             alert(amt + " has been debited from your account." + "  New balance: " + dataset[uname].balance)
        //         }
        //         else {
        //             alert("Insufficient Balance !!")
        //         }
        //     }
        //     else {
        //         alert("Wrong Password")
        //     }
        // }
        // else {
        //     alert("No Username found matching !!!")
        // }
    }

}
