import  express, {json} from 'express';

const app = express();


app.use(express.json());

const PORT = process.env.PORT?? 5000;

let allUsers  = [];




app.post('/user',(req,res)=>{
  //extract thess data from the payload(req.body)

    const{first_name, last_name, date_of_birth,school} = req.body;


    //store the data in the allusers array variable
        allUsers.push({
        "first_name":first_name,
        "last_name":last_name,
        "date_of_birth":date_of_birth,
        "school":school
        })

        res.send('User has been created');

        
        
});



app.get('/users', (req,res)=>{
    res.send(allUsers)
});


app.listen(POST, () => console.log(`Server is up and running on: ${POST}`));