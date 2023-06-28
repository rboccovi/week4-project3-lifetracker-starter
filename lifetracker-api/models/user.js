const {UnauthorizedError} = requre("../utils/errors")

class User {

    static async login(credentials){
//SUBMIT EMAIL AND PASSWORD, IF ANY FEILDS ARE MISSING THROW AN ERROR
//LOOOK UP USER IN DB, IF USER IS FOUND COMPARE PASSWORDS, OR SUBMITTED PASSWORDS WITH PASSWORD IN DB AND IF THERE IS A MATCH RETURN USER 

//IF ANY OF THIS GOES WRONG THROW AN AUTHORIZED ERROR

throw new UnauthorizedError("Invalid email/password combo")

    }
    
    static async register(credentials){

        //USERS SHOULD SUBMIT THIER EMAILPW,
        //IF ANY OF THESE ARE MISSING THROW N ERROR
        //MAKE SURE NO USER ALREADY CREATED IN THE DB WITH EMMAIL, IF SO THROW AN ERROR

        // TAKE USER PW AND HASH IT
        //TAKE USERS EMAIL AND LOWERCASE IT
        //create new user in  db 
        //return the user

    }
}