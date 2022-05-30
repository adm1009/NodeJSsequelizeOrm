  
module.exports = (sequelize,DataTypes) =>{
    const Users=sequelize.define("users",{
        name:{
            type:DataTypes.STRING,
            defaultValue:"null"
        },
        email:{
            type:DataTypes.STRING,
            defaultValue:"test@gmail.com"
        },
        gender:{
            type:DataTypes.STRING,
            defaultValue:"null"
        }
    },{
        // tableName:"loginusers",
        timestamps:false
        // createdAt:false
        // updatedAt:false
        // createdAt:"created",
        // updatedAt:"updated"
    });
    return Users;
}