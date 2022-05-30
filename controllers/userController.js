var db = require("../models");
const Users = db.users;

var addUser = async (req, resp) => {
  //   let data = await Users.build({
  //     name: "abhi",
  //     email: "abhi@gmail.com",
  //     gender: "male",
  //   });
  //   await data.save();
  let data = await Users.create({
    name: "abhijeet",
    email: "abhijeet@gmail.com",
    gender: "male",
  });

  //   data.name = "abhijeet mulik";
  // console.log(data.dataValues);
  //   data.save();
  //   data.destroy();

  // data.name = "abhis";
  // data.reload();

  let response = {
    data: "ok",
  };
  resp.status(200).json(response);
};

var crudOperation = async (req, resp) => {
    //find
let data=await Users.findOne({});
  //insert
  //     let data = await Users.create({
  //         name: "mulik",
  //         email: "mulik@gmail.com",
  //         gender: "male",
  //       });
  // console.log(data.id);
      let response = {
          data:data,
      }
  //update
//   let data= await Users.update({name:"final"},{
//       where:{id:2}
//   })

//delete
//   let data= await Users.destroy({where:{id:2}})

//truncate
// let data= await Users.destroy({
//     truncate:true
// })

//bulkinsert
// let data= await Users.bulkCreate([
//     {name:"final",email:"final@gmail.com",gender:"male"},
//     {name:"final1",email:"final1@gmail.com",gender:"male"},
//     {name:"final2",email:"final2@gmail.com",gender:"male"},
// ])


  resp.status(200).json(response);
};

module.exports = {
  addUser,
  crudOperation,
};
