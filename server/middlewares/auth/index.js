exports.auth = (req, res, next) => {
    const verified = true;
    if(verified){
    console.log("Auth..");
    const roles = ["Admin", "Owner"];
    res.locals.roles = roles;
    return next();}
    return res.send({
        msg: "Not verified",
    });
}

exports.verifyOwnership = (req, res, next) => {
    const roles = res.locals.roles;
    console.log(roles);
    if(roles.includes("Owner")){
        res.locals.msg = "Owner rights";
        return next();
    } else if (roles.includes("Admin")){
        res.locals.msg = "Admin rights";
        return next();
    } else {
        return res.send({
            msg: "Not found",
        })
    }
}

exports.checkRoles = (roles) => {
    return (req, res, next) => {
        if(roles[0] === "Owner"){
            console.log("Auto for req")
            return next();
        } else{
            console.log("Not auto");
            return res.send({
                msg: "Not auto",
            })
        }
    }
}
