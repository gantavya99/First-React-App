import Button from "./button";
const Header=({title})=>{
    return (
        
        <header className='header'>
            <div className='container'>
            <h1>
                {title}
            </h1>
            <Button/>
            </div>
        </header>
    )
};
Header.defaultProps={
    title:'Task Tracker'
};
export default Header