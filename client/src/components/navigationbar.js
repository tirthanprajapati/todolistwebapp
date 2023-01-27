const Navbar = () => {
    return(
        <>
        <div className="head">Todo List</div>
            <div className="box" >
            <div className='navbar'>
            <a href="#all">All Todo's</a>
            <a href="#active">Active Todo's</a>
            <a href="#done">Done Todo's</a>
            </div>
        </div>
        </>
    )
}

export default Navbar;