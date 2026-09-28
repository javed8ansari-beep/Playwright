let errcod = 600;

if(errcod == 200 || errcod == 201 || errcod == 204)
{
    console.log(`success resp code  ${errcod}`)
}
else if (errcod == 200 || errcod == 201 || errcod == 204)
{
    console.log(`redirectional resp code  ${errcod}`)
}
else if (errcod == 400 || errcod == 401 || errcod == 403 || errcod == 404 || errcod == 405)
{
    console.log(`error resp code  ${errcod}`)
}
else if (errcod == 500 || errcod == 512 )
{
    console.log(`server resp code  ${errcod}`)
}
else{
    console.log("Invalid error code found ",errcod)
}
