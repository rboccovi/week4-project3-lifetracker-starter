 class ExpresError extends Error {

    constrcutor (message, status) {
        super()
        this.message=message
        this.status = status
    }
 }


 class BadRequestError extends Errors {
    constructor(message="Bad Request"){
        super(message, 400)
    }
 }

class UnauthorizedError extends Errors{
    constructor(message="Bad Request"){
        super(message, 401)
    }
}


class ForbiddenErrors extends Errprs {
    constructor(message="Forbidden") {
        super(message, 403)
    }
}


class NotFoundError extends Errors {
    constructor(message="Not Found"){
        super(message, 404)
    }
}


module.exports = {
    BadRequestError,
    UnauthorizedError,
    ForbiddenErrors,
    NotFoundError,
    

}