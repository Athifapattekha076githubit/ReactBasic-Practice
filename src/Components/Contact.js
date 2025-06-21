const Contact =()=>{
    //rafce
return(
    <div>
    <h1 className="font-bold text-3xl p-4 m-4 text-center">Contact Page</h1>
    {/* <h2>Need help Contact XXXXXX.</h2> */}
    <form>
        <input type="text"  
        className="border border-black p-2 m-2" 
        placeholder="Enter name"
        />
          <input type="text"  
          className="border border-black p-2 m-2" 
          placeholder="message"
          />
          <button className="border border-black p-2 m-2 bg-gray-300 rounded-lg">
            Submit</button>
    </form>
    </div>
)
}
export default Contact;