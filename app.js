const express =require('express');
const chalk =require('chalk');
const path=require('path')
const app=express();// new optional
const booksRouter=express.Router();




app.use('/books',booksRouter)
app.use(express.static(path.join(__dirname,'public')));
app.set('views','./src/views');
app.set('view engine','ejs');



books=[
        {
            title:"Song Of Ice n Fire",
            genre:"Fantasy",
            author:"George R.R. Martin"
        } ,

        {
            title:"Harry Potter",
            genre:"Fantasy",
            author:"J.K. Rowling"
        },

        {
            title:"Half Girlfriend",
            genre:"Romance",
            author:"Chetan Bhagat"
           
        },


        {
            title:"Theory Of Everthng",
            genre:"Science",
            author:"Stephen Hawkins"
        },


        {
             title:"Les Miserables",
            genre:"Historical Fiction",
            author:"Victor Hugo"
            
        }





]

booksRouter.route('/')
.get((req,res)=>{
    res.render(
        'books',
        {
            nav:[
                {
                    link:'/books',
                    title:'books'
                },
                {
                    link:'/authors',
                    title:'Authors'
                }
                ],
            title:'Books',books

        }
    )
})

booksRouter.route('/:id')
.get((req,res)=>{
const id=req.params.id
res.render(
    'book',
    {
        nav:[
            {
                link:'/books',
                title:'Books'
            },
            {
                link:'/authors',
                title:'Authors'
            }
            ],

            title:"Library",
            book:books[id]
    }
)

})

app.get('/',(req,res)=>{

res.render('index',
    {
        nav:[
            {
                link:'/books',
                title:'Books'
            },
            {
                link:'/authors',
                title:'Authors'
            }
            ],
        title:'Library'
    })

}).listen(4000,()=>{
    console.log(`listening to port ${chalk.green(' 4000')}`)
});