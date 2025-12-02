const { use } = require("../routes/user");




function handleUserDashboard(req, res){
    return res.send("user dashboard");
}


function handleUserProfile(req, res){
    
}

function handleUserProfileUpdate(req, res){

}

module.exports = {
    handleUserDashboard,
    handleUserProfile,
    handleUserProfileUpdate,
}