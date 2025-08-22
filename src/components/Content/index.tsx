import './index.css'
function Content(props:any) {
    let {isDrawerOpen} = props 
    return (
        <div className='contentContainer'>
            <div className="content">Content</div>
             <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
                Drawer
            </div>
        </div>
    )
}

export default Content