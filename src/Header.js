import Button from "./button";
const Header=({title})=>{
    const onClick=()=>{
        console.log('Click');
    }
    return (
        <header className='header'>
            <div className='container'>
            <h1>
                {title}
            </h1>
            <Button color='green' text='Add' onClick={onClick} />
            
            </div>
        </header>
    )
};
Header.defaultProps={
    title:'Task Tracker'
};
export default Header