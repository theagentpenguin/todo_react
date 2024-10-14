

const Tasks = ()=>{
//    console.log("This is from inside Tasks component.")
    

    return(
        <>
        <form>
            
            <label>
                <input type="checkbox" />    
                task 1
            </label>
            <button className="delete_task">Delete</button>
        </form>
        </>
        
    );
        
    
}

export default Tasks