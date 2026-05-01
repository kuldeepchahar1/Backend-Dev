const express = require("express");
const app = express();

app.use(express.json());

let users = [];

app.post("/students", async (req, res) => {
  const student = {
    id: req.body.id,
    name: req.body.name,
    marks: req.body.marks,
  };
  users.push(student);
  res.json(student);
});

app.get("/get-students", async (req, res) => {
  res.json(users);
});


app.put("/students/:id", async (req, res) => {
  const {id} = req.params;
  const user = users.find((u) => u.id == id);
  if(!user){
    return res.send("No User Found");
  }
  user.name = req.body.name ?? user.name;
  user.marks = req.body.marks ?? user.marks;
  res.json(user);
});

app.delete("/delete-students/:id" , async (req, res) => {
  const {id} = req.params;
users = users.filter((u) => u.id != id);
res.send("Deleted");
});

app.listen(1000, () => {
  console.log("Server running on port 1000");
});
