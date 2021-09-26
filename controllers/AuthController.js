const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const reg = (req, res) => {
    
      
      
      res.render('../views/layouts/register/signup',{
      viewTitle :'Sign-Up',
      });
       
      
    
  };
  
  const log = (req, res) => {
   
      
      
      res.render('../views/layouts/register/signin',{
      viewTitle :'Sign-In',
      });
       
      
    
  };
  
  

const register = (req, res, next) => {

    // res.render('../views/layouts/register/signup',{
    //     viewTitle :'Sign-Up',
        
    //     });
         

    bcrypt.hash(req.body.user_password, 10, function(err, hashedPass) {
        if(err) {
            res.json({
                error: err
            })
        }

        let user = new User ({
            user_name: req.body.user_name,
            user_email: req.body.user_email,
            user_phone: req.body.user_phone,
            user_username: req.body.user_username,
            user_password: hashedPass
        })
    
        user.save()
        .then(user => {
            res.json({
                message: "User added Successfully"
            })
        })
        .catch(error => {
            res.json({  
                message: "An Error Occured adding the user"
            })
        })
    })

    

}

const login = (req, res, next) => {
    var username = req.body.user_username
    var password = req.body.user_password

    // res.render('../views/layouts/register/signin',{
    //     viewTitle :'Sign-In',
        
    //     });

    User.findOne({$or: [{user_username: username}, {user_phone: username}]})
    .then(user => {
        if(user){

            bcrypt.compare(password, user.user_password, function(err, result){
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({user_name:user.user_username}, 'A2#$%^BGLpSQ', {expiresIn: '1h'})
                    res.json({
                        message: "Login Successful!",
                        token
                    })
                }else{
                    res.json({
                        message: "Password is wrong!"
                    })

                }
            })

        }else{
            res.json({
                message: "No user Found!"
            })
        }
    })
}

module.exports = {
    register, login, log, reg
}