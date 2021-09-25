function parent()
{
    let message = 'Hello form parent'
    function child()
    {
        console.log(message)
    }
    return child()

}
var childFunction = parent()
childFunction()
