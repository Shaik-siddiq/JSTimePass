let users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

 /*  Count logged in users, count users having greater than equal 
  to 50 points from the following object. */
  function Pointscount(){
   const obj = Object.values(users)
  const Points =  obj.filter((p)=>{
    if(p.points>=50){
    return console.log(p)
    }
    //Find people who are MERN stack developer from the users object
    if(p.skills.includes("MongoDB") && p.skills.includes("Express")){
        return console.log(p)
    }

  }
  )
  //Set your name in the users object without modifying the original users object
   users ={
    ...users,
    siddiq: {
        email: 'siddiq@alex.com',
        skills:['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 60
      },
   }
   return(Points, console.log(users))
  }
  
  Pointscount()

  let Accesor = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    let products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

/* Imagine you are getting the above users collection from a MongoDB database.
 a. Create a function called signUp which allows user to add to the collection. 
 If user exists, inform the user that he has already an account.
 b. Create a function called signIn which allows user to sign in to the application */

let ids = document.getElementById("logname")
const changevalue = val =>{
ids.textContent = val
console.log(ids)
return ids
}

const signUp = (e)=>{
 
  console.log(ids);
  let ars = [];
   let newarr= Accesor.map((s) =>{
        if(ids !== s.username) {
           ars =[
                ...Accesor,
                {
                        _id: 'shrec',
                        username: 'Siddiq',
                        email: 'siddiq@siddiq.com',
                        password: '123563',
                        createdAt:'28/06/2022 4:32 PM',
                        isLoggedIn: false
                }
            ]
        } else {
          return console.log("The user is arleady exists in the db")
        }
    })
    console.log(ars)
    return newarr
}

signUp()