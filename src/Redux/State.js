import { rerenderEntireTree } from "./render";


 export let MassagePost = {

    myMessage :{
        dialogData:[    
            {id:1, name:"Milena",fotouser:"dfdsf"},
            {id:2, name:"Mira",fotouser:"dfdsf"},
            {id:3, name:"Sasha",fotouser:"dfdsf"},
            {id:4, name:"Vanya"},
            {id:4, name:"Koliya"},
            {id:5, name:"Sergey"},
            {id:6, name:"Valentin"},
            {id:4, name:"Vita"},
        ],
    
        massageText:[   
            {id:1, textMassage:"Hello World"},
            {id:2, textMassage : "Hello World"},
            {id:3, textMassage: "My Love"},
            {id:4, textMassage:"I am the best"},
            {id:5, textMassage:"Hello World"},
            {id:6, textMassage : "Hello World"},
            {id:7, textMassage: "My Love"},
            {id:8, textMassage:"I am the best"},
        ],  
     },
  
    
     posts:{
        messageData:[
            {id:1, textMassage:"Hello my dear wife", like:25},
            {id:2, textMassage: "My doter",like:35},
            {id:3, textMassage: " You my Love",like:45},
            {id:4, textMassage:"I am the best",like:55},
            {id:5, textMassage:"Hello my dear wife",like:25},
            {id:6, textMassage: "My doter",like:45},
            {id:7, textMassage: " You my Love",like:85},
            {id:8, textMassage:"I am the best",like:95},
        ],
 
    },  

    friends:{
        friend:[
            {id:1, name:"Milena",fotouser:"dfdsf"},
            {id:2, name:"Mira",fotouser:"dfdsf"},
            {id:3, name:"Sasha",fotouser:"dfdsf"},
        ]
    }

   
}

export let addPost= (text)=> {
    let newPost={
        id:5,
        textMassage:text,
        like:"0"
    }
    
    MassagePost.posts.messageData.push(newPost);
    rerenderEntireTree (MassagePost)
}


export default MassagePost

