
module.exports.login = (request, response) => {
    var result = {
        resultCode: 0,
        message: "success"
    }

    result.data = {
        name: "김규연",
        memberId: 173
    }

    response.json(result);
}