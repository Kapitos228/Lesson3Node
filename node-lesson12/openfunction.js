function parent()
{
    let message = 'Hello from parent'

    function child()
        {
            let message = 'Hello from child'
            console.log(message)
        }

    child()
}

parent()
