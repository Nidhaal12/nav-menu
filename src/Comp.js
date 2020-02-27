import React from 'react'

const Comp = (props) => {
    return (
        <div>
            {props.menu.map(el =>
                <div className="nav-bar" >
                    <a href={el.link} className={el.active ? "active" : undefined}>{el.text}</a>
                    {el.sub && <div className="sub-list">
                        {el.sub.map(aa => <a className="sub-list_item" href="#">{aa}</a>)}</div>}
                </div>
            )}
        </div>
    )

}
export default Comp;